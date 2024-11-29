const rp = require('request-promise')
const FREIGHT_CHARGE_NAME = "Freight";
const RATE_PER_MT_SUFFIX = "ratePerMt";
const FRT_PUB_BASE_URL = "https://apis.fretron.com"

const shipment = {
    customFields: [
        {
            indexedValue: ["MaterialGroup1_ratePerMt"],
            fieldKey: "MaterialGroup1",
            value: 0.5
        },
        {
            indexedValue: ["MaterialGroup2_ratePerMt"],
            fieldKey: "MaterialGroup2",
            value: 1
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
        "amount": 3000,
        "charge": {
            "amount": 3000,
            "name": "Unloading Detention"
        },
    },
    {
        "amount": 12,
        "charge": {
            "amount": 12,
            "name": "Freight",
            "rateUnit": "Fixed",
        },
        "uuid": "27ed7ab0-88c3-432d-9278-18fd28b748c8",
        "lineItems": [
            {
                "amount": 3,
                "charge": {
                    "amount": 3,
                    "name": "Freight"
                },
                "consignmentId": "cn1",
            },
            {
                "amount": 9,
                "charge": {
                    "amount": 9,
                    "name": "Freight"
                },
                "consignmentId": "cn2",
            }
        ]
    }
]

async function extractPerCnMaterialGroupWiseQuantity(shipment, freightCost) {
    let results = [];
    shipment.consignments.forEach(consignment => {
        let cnCost = freightCost.lineItems.find(lineItem => consignment.uuid === lineItem.consignmentId)
        let consignmentData = { cnId: consignment.uuid, cnCost: cnCost.amount, totalWeight: 0, MaterialGroups: [] };
        let materialGroupData = {};
        consignment.lineItems.forEach(lineItem => {
            let materialGroup = lineItem.material?.materialGroup;
            let lineItemID = lineItem.uuid;
            let orderMapping = consignment.orderMappings.find(order => order.consignmentLineItemId === lineItemID);
            let netQuantity = orderMapping?.quantity?.weight?.netQuantity || 0;
            consignmentData.totalWeight += netQuantity;
            if (!materialGroupData[materialGroup]) {
                materialGroupData[materialGroup] = {};
            }
            materialGroupData[materialGroup] = {
                MaterialGroup: materialGroup,
                Qty: (materialGroupData[materialGroup].Qty || 0) + netQuantity
            }
        });
        consignmentData.MaterialGroups = Object.entries(materialGroupData).map(([key, value]) => ({
            [key]: value
        }));
        results.push(consignmentData);
    });
    return results;
}

async function getShCostByShId(shId) {
    try {
        let options = {
            method: 'GET',
            uri: `${FRT_PUB_BASE_URL}/shipment-cost/v1/costs?shipmentId=${shId}`,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        }
        let res = await rp(options)
        if (res.data != null && res.status == 200) {
            return res.data
        } else {
            throw new Error(`Couldn't find Shipment Cost for Shipment ID: ${shId}`)
        }
    } catch (error) {
        throw error
    }
}

function getRatePerMtFields(shipment) {
    const ratePerMtFields = shipment.customFields.filter(field => field.indexedValue[0].endsWith(RATE_PER_MT_SUFFIX));
    const ratePerMtValues = ratePerMtFields.map(field => ({
        fieldKey: field.fieldKey,
        value: field.value
    }));

    return ratePerMtValues;
}

async function calculateCost(cnWiseMaterialGroupWeight, ratePetMt, minGuaranteeWeight) {
    let cnWiseMatWiseCost = await calculateCnWiseMatWiseCost(cnWiseMaterialGroupWeight, ratePetMt.length ? ratePetMt : null);
    let materialWiseCost = await mergeConsignmentMaterial(cnWiseMatWiseCost)
    const totalWeight = materialWiseCost.reduce((total, group) => total + group.Qty, 0);
    if (minGuaranteeWeight > totalWeight) {
        let actualCostRatio = totalWeight / minGuaranteeWeight
        if (ratePetMt != null) {
            let totalCost = materialWiseCost.reduce((total, group) => total + group.Qty, 0);
            let actualMatCost = actualCostRatio * totalCost
            materialWiseCost.forEach(group => {
                group.actualCost = (group.Qty / totalWeight) * actualMatCost;
                group.extraCost = group.totalMaterialCost - group.actualCost;
            });
        } else {
            let actualMatCost = actualCostRatio * freightCost.amount
            materialWiseCost.forEach(group => {
                group.actualCost = (group.Qty / totalWeight) * actualMatCost;
                group.extraCost = group.totalMaterialCost - group.actualCost;
            });
        }
    } else {
        materialWiseCost.forEach(group => {
            group.extraCost = 0;
            group.actualCost = group.totalMaterialCost
        });
    }
    return materialWiseCost
}

async function mergeConsignmentMaterial(cnWiseMatWiseCost) {
    return Object.values(
        cnWiseMatWiseCost.reduce((mergedResult, consignment) => {
            consignment.MaterialGroups.forEach(group => {
                const [materialGroupName, materialData] = Object.entries(group)[0];

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


function calculateCnWiseMatWiseCost(cnWiseMaterialGroupWeight, ratePerMt) {
    return cnWiseMaterialGroupWeight.map(consignment => {
        const totalWeight = consignment.MaterialGroups.reduce((sum, group) => {
            const [_, materialData] = Object.entries(group)[0];
            return sum + materialData.Qty;
        }, 0);

        const ratePerMtPerConsignment = totalWeight > 0 ? consignment.cnCost / totalWeight : 0;
        const updatedMaterialGroups = consignment.MaterialGroups.map(group => {
            const [materialGroupName, materialData] = Object.entries(group)[0];

            if (ratePerMt && ratePerMt.length > 0) {
                const rate = ratePerMt.find(rate => rate.fieldKey === materialGroupName)?.value || 0;
                const materialCost = materialData.Qty * rate;

                return {
                    [materialGroupName]: {
                        ...materialData,
                        totalMaterialCost: materialCost
                    }
                };
            } else {
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



async function main(shipment, shipmentCost) {
    try {
        if (!shipment || !shipmentCost) {
            throw new Error('Invalid input: shipment or shipmentCost is missing');
        }
        // let shipmentCost = await getShCostByShId(shipment.uuid)
        let freightCost = shipmentCost.find(cost => cost.charge.name == FREIGHT_CHARGE_NAME)
        if (!freightCost) {
            throw new Error('Freight cost not found');
        }
        let minGuaranteeWeight = shipment?.minGuaranteeWeight ?? 0;
        let cnWiseMaterialGroupWeight = await extractPerCnMaterialGroupWiseQuantity(shipment, freightCost);
        let ratePetMt = await getRatePerMtFields(shipment);
        let costPerMaterial = await calculateCost(cnWiseMaterialGroupWeight, ratePetMt, minGuaranteeWeight)
        console.log(costPerMaterial)

    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
}

main(shipment, shipmentCost)