const token = ``;
import rp from 'request-promise';
const FRT_PUB_BASE_URL = "http://apis.fretron.com"


function getCfObj(key, value, valueType = "string", fieldType = "text") {
    return {
        fieldKey: key,
        valueType: valueType,
        fieldType: fieldType,
        value: value,
    };
}

async function main(sh) {
    try {
        console.log(`Executing for sh ${sh.shipmentNumber}`);
        let cfsToUpdate = [];

        cfsToUpdate.push(
            getCfObj("Loading Delay Remark", ""),
            getCfObj("Remark", ""),
            getCfObj("Driver Remark", ""),
            getCfObj("Last Disconnection Remark", ""),
            getCfObj("Customer Remark", "")
        );

        let freightUnit = null;
        let orderIdValue = null;
        let orderObject = null;

        const fuLineItemId = sh.freightUnitLineItemId;

        if (fuLineItemId) {
            freightUnit = await getfuLineItemById(fuLineItemId);

            if (!freightUnit?.length) {
                console.log(`No freight unit found by this id: ${fuLineItemId}`);
            } else {
                orderIdValue =
                    freightUnit[0]?.lineItems[0]?.salesOrderMappings[0]?.orderId ?? "";
                orderObject = await getOrderById(orderIdValue);
            }
        } else console.log(`Fu item not found ${sh.shipmentNumber}`);

        if (!orderObject) {
            console.log("No order found against id - " + orderIdValue);
        } else {
            let materialIds = orderObject.lineItems?.map(_ => _.material?.linkedMaterialId ?? null)?.filter(id => id)
            let materialTypesValue = [...new Set(materialIds ?? [])].join(",");
            console.log(`Material types: ${materialTypesValue}`)

            cfsToUpdate.push(
                getCfObj("Customer Name", orderObject?.customer?.name ?? ""),
                getCfObj("LR SOFT COPY UPLOAD", null, "arrayOfJson", "camera"),
                getCfObj("Material Type", materialTypesValue)
            );
        }
        let vehicleCfs = await addVehicleDocCfs(sh)
        cfsToUpdate.push(...vehicleCfs)
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

async function addVehicleDocCfs(sh) {
    if (sh?.fleetInfo && sh.fleetInfo?.vehicle) {
        const attachedDocs = sh.fleetInfo.vehicle.attachedDocs ?? [];
        const cfs = [];
        for (const docId of attachedDocs) {
            try {
                const doc = await getDocumentById(docId);
                if (doc && doc.customFields) {
                    cfs.push(...doc.customFields);
                }
            } catch (error) {
                console.error(`Error processing document ${docId}:`, error);
            }
        }

        console.log('All documents processed:', processedDocuments);
        return cfs;
    }
}

async function getDocumentById(documentId) {
    const options = {
        uri: `${FRT_PUB_BASE_URL}/documents/v2/document/${documentId}`,
        method: 'GET',
        headers: {
            'Authorization': token,
        },
        json: true
    };

    try {
        const response = await rp(options);
        if (response && response.data) {
            return response.data;
        } else {
            console.log(`No Document found for ${documentId}`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching Document for ${documentId}:`, error);
        return null;
    }
}

try {
    await main($event);
} catch (e) {
    console.log(`catched error in Automation : ${e.message}`);
}
