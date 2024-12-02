const rp = require('request-promise')
const FREIGHT_CHARGE_NAME = "Freight";
const RATE_PER_MT_SUFFIX = "ratePerMt";
const FRT_PUB_BASE_URL = "https://apis.fretron.com"

const shipment = {
    customFields: [
        {
            indexedValue: ["MaterialGroup1_"],
            fieldKey: "MaterialGroup1",
            value: 100
        },
        {
            indexedValue: ["MaterialGroup2_"],
            fieldKey: "MaterialGroup2",
            value: 200
        }
    ],
    consignments: [
        {
            uuid: "cn1",
            lineItems: [
                {
                    material: {
                        materialGroup: 'MaterialGroup1'
                    },
                    uuid: 'lineItem1'
                },
                {
                    material: {
                        materialGroup: 'MaterialGroup1'
                    },
                    uuid: 'lineItem2'
                }
            ],
            orderMappings: [
                {
                    consignmentLineItemId: 'lineItem1',
                    quantity: {
                        weight: {
                            netQuantity: 1
                        }
                    }
                },
                {
                    consignmentLineItemId: 'lineItem2',
                    quantity: {
                        weight: {
                            netQuantity: 2
                        }
                    }
                }
            ]
        },
        {
            uuid: "cn2",
            lineItems: [
                {
                    material: {
                        materialGroup: 'MaterialGroup2'
                    },
                    uuid: 'lineItem4'
                },
                {
                    material: {
                        materialGroup: 'MaterialGroup1'
                    },
                    uuid: 'lineItem5'
                }
            ],
            orderMappings: [
                {
                    consignmentLineItemId: 'lineItem4',
                    quantity: {
                        weight: {
                            netQuantity: 4
                        }
                    }
                },
                {
                    consignmentLineItemId: 'lineItem5',
                    quantity: {
                        weight: {
                            netQuantity: 5
                        }
                    }
                }
            ]
        }
    ],
    fleetInfo: {
        vehicle: {
            vehicleLoadType: {
                passingCapacityMT: 25
            }
        }
    },
    minGuaranteeWeight: 18,
    uuid: "fb2b2bb1-af42-48a2-bdaa-4db59870ee5b"
};

const shipmentCost = [
    {
        "amount": 1600,
        "charge": {
            "amount": 1600,
            "name": "Unloading Detention"
        },
    },
    {
        "amount": 1600,
        "charge": {
            "amount": 1600,
            "name": "Freight",
            "rateUnit": "Fixed",
        },
        "uuid": "27ed7ab0-88c3-432d-9278-18fd28b748c8",
        "lineItems": [
            {
                "amount": 300,
                "charge": {
                    "amount": 300,
                    "name": "Freight"
                },
                "consignmentId": "cn1",
            },
            {
                "amount": 1300,
                "charge": {
                    "amount": 1300,
                    "name": "Freight"
                },
                "consignmentId": "cn2",
            }
        ]
    }
]

// Function to extract material group quantities for each consignment
async function extractPerCnMaterialGroupWiseQuantity(shipment, freightCost) {
    let results = [];
    // Iterate through each consignment
    shipment.consignments.forEach(consignment => {
        // Find the corresponding freight cost for this consignment
        let cnCost = freightCost.lineItems.find(lineItem => consignment.uuid === lineItem.consignmentId)
        
        // Create a data object to store consignment details
        let consignmentData = { cnId: consignment.uuid, cnCost: cnCost.amount, totalWeight: 0, MaterialGroups: [] };
        let materialGroupData = {};
        shipmentCost
        // Process each line item in the consignment
        consignment.lineItems.forEach(lineItem => {
            // Extract material group and line item details
            let materialGroup = lineItem.material?.materialGroup;
            let lineItemID = lineItem.uuid;
            
            // Find corresponding order mapping for weight calculation
            let orderMapping = consignment.orderMappings.find(order => order.consignmentLineItemId === lineItemID);
            
            // Get net quantity, default to 0 if not found
            let netQuantity = orderMapping?.quantity?.weight?.netQuantity || 0;
            
            // Accumulate total weight for consignment
            consignmentData.totalWeight += netQuantity;
            
            // Initialize material group data if not exists
            if (!materialGroupData[materialGroup]) {
                materialGroupData[materialGroup] = {};
            }
            
            // Accumulate quantity for each material group
            materialGroupData[materialGroup] = {
                MaterialGroup: materialGroup,
                Qty: (materialGroupData[materialGroup].Qty || 0) + netQuantity
            }
        });
        
        // Transform material group data into an array of objects
        consignmentData.MaterialGroups = Object.entries(materialGroupData).map(([key, value]) => ({
            [key]: value
        }));
        
        results.push(consignmentData);
    });
    
    return results;
}

// Async function to retrieve shipment cost by shipment ID from API
async function getShCostByShId(shId) {
    try {
        // Prepare request options for API call
        let options = {
            method: 'GET',
            uri: `${FRT_PUB_BASE_URL}/shipment-cost/v1/costs?shipmentId=${shId}`,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        }
        
        // Make the API request
        let res = await rp(options)
        
        // Validate and return response
        if (res.data != null && res.status == 200) {
            return res.data
        } else {
            throw new Error(`Couldn't find Shipment Cost for Shipment ID: ${shId}`)
        }
    } catch (error) {
        throw error
    }
}

// Function to extract rate per metric ton fields from shipment custom fields
function getRatePerMtFields(shipment) {
    // Filter custom fields that end with 'ratePerMt'
    const ratePerMtFields = shipment.customFields.filter(field => field.indexedValue[0].endsWith(RATE_PER_MT_SUFFIX));
    
    // Map filtered fields to key-value pairs
    const ratePerMtValues = ratePerMtFields.map(field => ({
        fieldKey: field.fieldKey,
        value: field.value
    }));

    return ratePerMtValues;
}

// Function to calculate cost allocation across material groups
async function calculateCost(cnWiseMaterialGroupWeight, ratePerMt, minGuaranteeWeight, freightCost) {
    // Calculate cost per consignment and material group
    let cnWiseMatWiseCost = await calculateCnWiseMatWiseCost(cnWiseMaterialGroupWeight, ratePerMt.length ? ratePerMt : null);
    
    // Merge consignment material costs
    let materialWiseCost = await mergeConsignmentMaterial(cnWiseMatWiseCost)
    
    // Calculate total weight across all material groups
    const totalWeight = materialWiseCost.reduce((total, group) => total + group.Qty, 0);
    
    // Different cost allocation strategies based on rate per metric ton
    if (ratePerMt.length != 0) {
        // Calculate total cost and extra cost distribution when specific rates are provided
        let totalCost = materialWiseCost.reduce((total, group) => total + group.totalMaterialCost, 0);
        let totalMatExtraCost = freightCost.amount - totalCost
        
        // Distribute extra cost proportionally
        materialWiseCost.forEach(group => {
            group.actualCost = group.totalMaterialCost
            group.extraCost = (totalMatExtraCost / totalCost) * group.actualCost
            group.totalMaterialCost = group.actualCost + group.extraCost
        });
    } else {
        // Cost allocation when no specific rate per metric ton is provided
        if (minGuaranteeWeight > totalWeight) {
            // Adjust cost based on minimum guarantee weight
            let actualCostRatio = totalWeight / minGuaranteeWeight;
            let actualMatCostPerMt = (actualCostRatio * freightCost.amount) / totalWeight
            
            materialWiseCost.forEach(group => {
                group.actualCost = group.Qty * actualMatCostPerMt;
                group.extraCost = group.totalMaterialCost - group.actualCost;
            });
        }
        else {
            // Distribute cost equally when total weight meets or exceeds minimum
            materialWiseCost.forEach(group => {
                group.extraCost = 0;
                group.actualCost = group.totalMaterialCost
            });
        }
    }
    return materialWiseCost
}

// Function to merge material group costs across consignments
async function mergeConsignmentMaterial(cnWiseMatWiseCost) {
    return Object.values(
        cnWiseMatWiseCost.reduce((mergedResult, consignment) => {
            consignment.MaterialGroups.forEach(group => {
                // Extract material group name and data
                const [materialGroupName, materialData] = Object.entries(group)[0];

                // Merge or create material group entry
                mergedResult[materialGroupName] = mergedResult[materialGroupName]
                    ? {
                        MaterialGroup: materialGroupName,
                        Qty: mergedResult[materialGroupName].Qty + materialData.Qty,
                        totalMaterialCost: mergedResult[materialGroupName].totalMaterialCost + (materialData.totalMaterialCost || 0)
                    }
                    : {
                        MaterialGroup: materialGroupName,
                        Qty: materialData.Qty,
                        totalMaterialCost: materialData.totalMaterialCost || 0
                    };
            });
            return mergedResult;
        }, {})
    );
}

// Function to calculate cost per consignment and material group
function calculateCnWiseMatWiseCost(cnWiseMaterialGroupWeight, ratePerMt) {
    return cnWiseMaterialGroupWeight.map(consignment => {
        // Calculate total weight for the consignment
        const totalWeight = consignment.MaterialGroups.reduce((sum, group) => {
            const [_, materialData] = Object.entries(group)[0];
            return sum + materialData.Qty;
        }, 0);

        // Calculate rate per metric ton for the consignment
        const ratePerMtPerConsignment = totalWeight > 0 ? consignment.cnCost / totalWeight : 0;
        
        // Update material groups with cost calculations
        const updatedMaterialGroups = consignment.MaterialGroups.map(group => {
            const [materialGroupName, materialData] = Object.entries(group)[0];

            if (ratePerMt && ratePerMt.length > 0) {
                // Calculate cost using specific rate per metric ton
                const rate = ratePerMt.find(rate => rate.fieldKey === materialGroupName)?.value || 0;
                const materialCost = materialData.Qty * rate;

                return {
                    [materialGroupName]: {
                        ...materialData,
                        totalMaterialCost: materialCost
                    }
                };
            } else {
                // Calculate cost using consignment-level rate per metric ton
                const materialCost = materialData.Qty * ratePerMtPerConsignment;

                return {
                    [materialGroupName]: {
                        ...materialData,
                        totalMaterialCost: materialCost
                    }
                };
            }
        });

        return {
            MaterialGroups: updatedMaterialGroups
        };
    });
}

// Main function to orchestrate the cost calculation process
async function main(shipment, shipmentCost) {
    try {
        // Validate input
        if (!shipment || !shipmentCost) {
            throw new Error('Invalid input: shipment or shipmentCost is missing');
        }
        
        // Find freight cost from shipment costs
        // let shipmentCost = await getShCostByShId(shipment.uuid)
        let freightCost = shipmentCost.find(cost => cost.charge.name == FREIGHT_CHARGE_NAME)
        if (!freightCost) {
            throw new Error('Freight cost not found');
        }
        
        // Get minimum guarantee weight (default to 0 if not provided)
        let minGuaranteeWeight = shipment?.minGuaranteeWeight ?? 0;
        
        // Extract material group quantities per consignment
        let cnWiseMaterialGroupWeight = await extractPerCnMaterialGroupWiseQuantity(shipment, freightCost);
        
        // Get rates per metric ton from custom fields
        let ratePerMt = await getRatePerMtFields(shipment);
        
        // Calculate final cost per material group
        let costPerMaterial = await calculateCost(cnWiseMaterialGroupWeight, ratePerMt, minGuaranteeWeight, freightCost)
        
        // Log the results
        console.log(costPerMaterial)

    } catch (e) {
        // Handle and log any errors
        console.log(`Error: ${e.message}`)
    }
}

// Execute the main function with sample shipment and cost data
main(shipment, shipmentCost)
