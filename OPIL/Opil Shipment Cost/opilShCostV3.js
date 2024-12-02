const rp = require('request-promise')
const FREIGHT_CHARGE_NAME = "Freight";
const RATE_PER_MT_SUFFIX = "ratePerMt";
const MIN_GRT_WEIGHT = "minGrtWt"
const FRT_PUB_BASE_URL = "https://apis.fretron.com"

const shipment = {
    // customFields: [
    //     {
    //         fieldKey: "MaterialGroup1_ratePerMt",
    //         value: 2000
    //     },
    //     {
    //         fieldKey: "MaterialGroup2_ratePerMt",
    //         value: 1000
    //     },
    //     {
    //         fieldKey: "MaterialGroup1_minGrtWt",
    //         value: 1.2
    //     },
    //     {
    //         fieldKey: "MaterialGroup2_minGrtWt",
    //         value: 0.8
    //     }
    // ],
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
                        materialGroup: 'MaterialGroup2'
                    },
                    uuid: 'lineItem2'
                }
            ],
            orderMappings: [
                {
                    consignmentLineItemId: 'lineItem1',
                    quantity: {
                        weight: {
                            netQuantity: 3
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
                        materialGroup: 'MaterialGroup1'
                    },
                    uuid: 'lineItem4'
                },
                {
                    material: {
                        materialGroup: 'MaterialGroup2'
                    },
                    uuid: 'lineItem5'
                }
            ],
            orderMappings: [
                {
                    consignmentLineItemId: 'lineItem4',
                    quantity: {
                        weight: {
                            netQuantity: 3
                        }
                    }
                },
                {
                    consignmentLineItemId: 'lineItem5',
                    quantity: {
                        weight: {
                            netQuantity: 2
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
    minGuaranteeWeight: 12,
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
        "amount": 19200,
        "charge": {
            "amount": 19200,
            "name": "Freight",
            "rateUnit": "Fixed",
        },
        "uuid": "27ed7ab0-88c3-432d-9278-18fd28b748c8",
    }
]

async function extractMaterialGroupWiseQuantity(shipment, freightCost) {
    let materialGroupData = {};
    let totalFreightCost = freightCost?.amount ?? freightCost?.charge?.amount;
    if(!totalFreightCost){
        throw new Error("Freight Cost Not Found")
    }

    shipment.consignments?.forEach(consignment => {
        consignment.lineItems.forEach(lineItem => {
            let materialGroup = lineItem.material?.materialGroup;
            let lineItemID = lineItem?.uuid;

            let orderMapping = consignment?.orderMappings.find(order => order.consignmentLineItemId === lineItemID);

            let netQuantity = orderMapping?.quantity?.weight?.netQuantity || 0;

            if (!materialGroupData[materialGroup]) {
                materialGroupData[materialGroup] = {
                    MaterialGroup: materialGroup,
                    actualQty: 0
                };
            }

            materialGroupData[materialGroup].actualQty += netQuantity;
        });
    });

    let results = Object.entries(materialGroupData).map(([key, value]) => ({
        ...value,
        freightCost: totalFreightCost
    }));

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

async function getMatCfs(shipment) {
    let ratePerMtFields = shipment.customFields?.filter(field => field.fieldKey.endsWith(RATE_PER_MT_SUFFIX));
    let minGuaranteeWeight = shipment.customFields?.filter(field => field.fieldKey.endsWith(MIN_GRT_WEIGHT));
    const ratePerMtValues = ratePerMtFields?.map(field => ({
        fieldKey: field.fieldKey,
        value: field.value
    }));
    const minGuaranteeWeightValues = minGuaranteeWeight?.map(field => ({
        fieldKey: field.fieldKey,
        value: field.value
    }));

    return {
        ratePerMtValues,
        minGuaranteeWeightValues
    };
}

async function calculateCost(matGroupWiseArray) {
    const totalTotalQty = matGroupWiseArray.reduce((total, group) => total + group.totalQty, 0);

    matGroupWiseArray.forEach(group => {
        if (group.ratePerMt != 0 && group.ratePerMt != null) {
            group.actualCost = group.actualQty * group.ratePerMt
            group.minGrtCost = group.minGuaranteeWeight * group.ratePerMt
            group.totalCost = group.totalQty * group.ratePerMt
        } else {
            group.actualCost = (group.actualQty * group.freightCost) / totalTotalQty
            group.minGrtCost = (group.minGuaranteeWeight * group.freightCost) / totalTotalQty
            group.totalCost = (group.totalQty * group.freightCost) / totalTotalQty
        }
        delete group.freightCost;
    })

    return matGroupWiseArray
}


function addMatCfs(materialGroups, matCfs) {
    const { ratePerMtValues, minGuaranteeWeightValues } = matCfs;

    materialGroups.forEach(group => {
        const materialGroupName = group.MaterialGroup;

        const ratePerMt = ratePerMtValues.find(rate =>
            rate.fieldKey.includes(materialGroupName)
        )?.value || 0;

        const minGuaranteeWeight = minGuaranteeWeightValues.find(weight =>
            weight.fieldKey.includes(materialGroupName)
        )?.value || 0;

        group.ratePerMt = ratePerMt || 0;
        group.minGuaranteeWeight = minGuaranteeWeight || 0;
        group.totalQty = group.actualQty + group.minGuaranteeWeight;
    });

    return materialGroups;
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

        let materialCfs = await getMatCfs(shipment);

        let matGroupWiseArray = await extractMaterialGroupWiseQuantity(shipment, freightCost);

        matGroupWiseArray = await addMatCfs(matGroupWiseArray, materialCfs)

        let costPerMaterial = await calculateCost(matGroupWiseArray)

        console.log(costPerMaterial)

    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
}

main(shipment, shipmentCost)
