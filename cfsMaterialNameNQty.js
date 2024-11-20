const token = `Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIxMDEzNzIsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiI0NjRkNGU2YS00ZDYyLTQyOWYtYTY2MC04NmE0ODgzOWM3YWYiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.cW8LkY9PaTsl4U3ueYd5K8-sjQAJ6S6OwaObHJvKxLU`;
import rp from 'request-promise';
const FRT_PUB_BASE_URL = "https://apis.fretron.com"

async function main(shId) {
    try {
        let cfsToUpdate = [];
        let freightUnit = null;
        let materialsCommaSeparated = null;
        let quantitiesCommaSeparated = null;
        let sh = await getShipmentById(shId)
        const fuLineItemId = sh.freightUnitLineItemId;

        if (fuLineItemId) {
            freightUnit = await getfuLineItemById(fuLineItemId);

            if (!freightUnit?.length) {
                console.log(`No freight unit found by this id: ${fuLineItemId}`);
            } else {
                let orderIds = [];
                let lineItemIds = [];
                let lineItem = freightUnit[0]?.lineItems[0];
                lineItem?.salesOrderMappings?.forEach((salesOrderMapping) => {
                    orderIds.push(salesOrderMapping?.orderId ?? "");
                    lineItemIds.push(salesOrderMapping?.lineItemId ?? "");
                });
                let materialNames = [];
                let quantities = [];
                let materialWiseQty = {}
                if (orderIds.length > 0) {
                    for (let i = 0; i < orderIds.length; i++) {
                        try {
                            let orderObject = await getOrderById(orderIds[i]);
                            console.log(`Fetched order for orderId: ${orderIds[i]}`);
                            orderObject?.lineItems?.forEach((orderLineItem, index) => {
                                if (lineItemIds[i] === orderLineItem?.uuid) {
                                    let materialName = orderLineItem?.loadInfo?.material;
                                    let grossQuantity = orderLineItem?.loadInfo?.standardMeasurement?.weight?.grossQuantity;
                                    materialNames.push(materialName);
                                    quantities.push(grossQuantity);
                                    materialWiseQty[materialName] = (materialWiseQty[materialName] ? materialWiseQty[materialName] : 0 ) + grossQuantity
                                }
                            });
                        } catch (error) {
                            console.error(`Error fetching order for orderId: ${orderIds[i]}`, error);
                        }
                    }
                }
                materialsCommaSeparated = Object.keys(materialWiseQty).join(", ");
                quantitiesCommaSeparated = Object.values(materialWiseQty).join(", ");

                console.log("Materials:", materialsCommaSeparated);
                console.log("Quantities:", quantitiesCommaSeparated);
            }
        } else {
            console.log(`Fu item not found ${sh.shipmentNumber}`);
        }

        cfsToUpdate.push(
            getCfObj("DispatchMaterial", materialsCommaSeparated),
            getCfObj("DispatchQty", quantitiesCommaSeparated)
        );

        if (cfsToUpdate.length) {
            console.log(`Total Cfs to update ${cfsToUpdate?.length}`);
            let payloadAddCf = {
                shipmentId: sh?.uuid,
                updates: [
                    {
                        keyToUpdate: "customfields",
                        updatedValue: cfsToUpdate,
                    },
                ],
            };

            await bulkSync(payloadAddCf);
        } else {
            console.log(`No Cfs found to update on shipment`);
        }
    } catch (e) {
        console.log(`Catched Error in main ${e.message}`)
    }
}

function getCfObj(key, value, valueType = "string", fieldType = "text") {
    return {
        fieldKey: key,
        valueType: valueType,
        fieldType: fieldType,
        value: value
    };
}

async function getfuLineItemById(id) {
    try {
        let res = await rp({
            method: "POST",
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight-units/by/linItemIds`,
            headers: { Authorization: token },
            body: [id],
            json: true,
        });

        if (res?.error) {
            console.log(`Some Error in Get FuLineItem By Id ${id}`);
        }
        return res?.status == 200 ? res.data : [];
    } catch (e) {
        console.log(`catched error in getting FU bu Id ${e.message}`);
    }
}

async function getOrderById(orderId) {
    try {
        let res = await rp({
            method: "GET",
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/sales-orders/v1/order/${orderId}`,
            headers: { Authorization: token },
            json: true,
        });

        if (res?.error) {
            console.log(`Some Error in getting order by Id ${orderId}`);
        }
        return res?.status == 200 ? res.data : null;
    } catch (e) {
        console.log(`catched Error in getting order by Id ${e.message}`);
    }
    return null;
}

async function bulkSync(payload) {
    let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`;
    try {
        let res = await rp({
            uri: url,
            method: "POST",
            body: payload,
            headers: {
                authorization: token,
            },
            json: true,
        });
        console.log(
            `Bulk Sync api res status for sh ${payload.shipmentId} : ${res.status}`
        );
        if (res.status === 200) {
            return res.data;
        } else {
            console.log(
                `Bulk Sync api res error for sh ${payload.shipmentId} : ${res.error}`
            );
        }
    } catch (e) {
        console.log(
            `Catched error in bulkSync api for sh ${payload.shipmentId} : ${e.message}`
        );
    }
    return null;
}

async function getShipmentById(id) {
    try {
        let res = await rp({
            method: "GET",
            uri: `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${id}?skipCn=true`,
            headers: { Authorization: token },
            json: true
        });

        if (res?.error) {
            console.log(`Some Error in getting Shipment By Id ${id}`);
        }
        return res?.status == 200 ? res.data : [];
    } catch (e) {
        console.log(`catched error in getting Shipment by Id ${e.message}`);
    }
}

const shId = "a3711189-6427-4303-b50b-37e4ddc97d1b"

try {
    await main(shId);
} catch (e) {
    console.log(`catched error in Automation : ${e.message}`);
}