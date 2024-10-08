const rp = require('request-promise');
const FRT_PUB_BASE_URL = "https://apis.fretron.com";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjgzODI1NDUsInVzZXJJZCI6ImExYzg1MWQ0LTZkMWItNGZiZi1hZDllLWRiNmJhOWViZTI3ZCIsImVtYWlsIjoiaGFyc2hpdC5ndXB0YUBmcmV0cm9uLmNvbSIsIm1vYmlsZU51bWJlciI6Ijg5NTUxMTcwMDMiLCJvcmdJZCI6IjQ2NGQ0ZTZhLTRkNjItNDI5Zi1hNjYwLTg2YTQ4ODM5YzdhZiIsIm5hbWUiOiJIYXJzaGl0IEd1cHRhIiwib3JnVHlwZSI6IkZMRUVUX09XTkVSIiwiaXNHb2QiOnRydWUsInBvcnRhbFR5cGUiOiJiYXNpYyJ9.5dHOhVRMeqq23YnKTuZH5wosRKrtADrydHFrdnwvIX0";
const STATUS_PENDING = 'PENDING';
const STATUS_PLACED = 'PLACED';
const STATUS_AUCTIONED = 'AUCTIONED';
const STATUS_INDENT = 'INDENT';
const STATUS_ALLOCATED = 'ALLOCATED'
const filterFrom = 1716977760000;
const filterTill = 1730369760000;
let failureList = []
let successList = []

//--------------------------------------------------------------------------------------------
async function getFreightUnitByLineItemId(fuItemId) {
    try {
        const res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight-units/by/linItemIds`,
            body: [fuItemId],
            headers: {
                'Authorization': TOKEN
            },
            method: 'POST',
            json: true
        });
        if (res.status === 200 && res.data?.length > 0) {
            return res.data[0];
        } else {
            throw new Error('No freight unit data available.');
        }
    } catch (error) {
        console.log(`Error in getting freight unit by item ${fuItemId}: ${error.message}`);
        return null;
    }
}
//--------------------------------------------------------------------------------------------
async function getData() {
    const dataList = [];

    let lastTimestamp = null;
    let lastUuid = null;

    while (true) {
        const options = {
            uri: `${FRT_PUB_BASE_URL}/shipment-view/dispatch-management/dispatches`,
            qs: {
                size: 50,
                filters: `{"lineItems.status":[],"lineItems.transporterId":[],"lineItems.loadTypeId":[],"documentDate":{"from":null,"till":null},"_customeField":null,"_not":{"type":["Temporary"],"lineItems.status":["FINALIZED","FINALIZATION_IN_PROGRESS"],"documentDate":{"from":${filterFrom},"till":${filterTill}}}}`,
                soFilters: '{"secondaryStatus":[],"salesBranch":[],"customer":[],"orderDate":{"from":null,"till":null},"route":[],"salesOffice.zoneName":[],"salesOffice.regionName":[],"contractBranch.name":[],"_not":{"lineItems.status":["CLOSED"]},"orderNumber":[],"_nested":{"_path":"lineItems","lineItems.status":[],"consignee":[],"consigner":[],"origin":[],"destination":[],"_include_nested_hits":true}}',
                from: lastTimestamp ? `[${lastTimestamp}, "${lastUuid}"]` : undefined
            },
            headers: {
                'Authorization': TOKEN,
                'Content-Type': 'application/json'
            },
            json: true
        };

        try {
            const dispatchData = await rp(options);
            if (dispatchData.size === 0) {
                console.log(`Found ${dataList.length} Records`);
                break;
            }

            dispatchData.forEach(item => {
                const lineItem = item.lineItems[0];
                if (lineItem?.uuid && lineItem?.status) {
                    dataList.push({
                        uuid: item.uuid,
                        lineItemUuid: lineItem.uuid,
                        purchaseOrderLineItemId: lineItem.purchaseLineItemId,
                        auctionId: lineItem.auctionId,
                        lineItemStatus: lineItem.status
                    });
                }
            });

            lastTimestamp = dispatchData[dispatchData.length - 1].documentDate;
            lastUuid = dispatchData[dispatchData.length - 1].uuid;

        } catch (error) {
            failureLog.push(`Error fetching data: ${error.message}`);
            break;
        }
    }
    console.log(dataList.length)
    return dataList
}
//-------------------------------------------------------------------------------------
async function deleteFreightUnitIfPending(freightUnitUuid) {
    try {
        const res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight-unit/${freightUnitUuid}`,
            headers: {
                'Authorization': TOKEN
            },
            method: 'DELETE',
            json: true
        });
        if (res.status == 200) {
            return res.data;
        } else {
            console.log("Error " + res.error);
            return null;
        }

    } catch (error) {
        console.log(`Error deleting Freight Unit:\nUUID: ${freightUnitUuid}\n${error.message}`);
        return null
    }

}
//--------------------------------------------------------------------------------------------
async function cancelAuction(auctionId, uuid) {
    try {
        const res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/auctions/v1/auction/${auctionId}/cancel`,
            headers: {
                'Authorization': TOKEN,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            json: true,
            body: {}
        });
        if (res.status == 200) {
            return res.data;
        } else {
            console.log("Error " + res.error);
            return null;
        }
    } catch (error) {
        console.log(`Error canceling auction:\nUUID: ${uuid}\n${error.message}`);
        return null;
    }
}
//--------------------------------------------------------------------------------------------
async function finalizeVehicle(purchaseOrderLineItemId, uuid) {
    try {
        const res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/finalizeVehicle`,
            headers: {
                'Authorization': TOKEN,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            json: true,
            body: {
                purchaseOrderLineItemId: purchaseOrderLineItemId
            }
        });
        if (res.status == 200) {
            return res.data;
        } else {
            console.log("Error " + res.error);
            return null;
        }
    } catch (error) {
        console.log(`Error finalizing vehicle:\nUUID: ${uuid}\n${error.message}`);
        return null;
    }
}
//--------------------------------------------------------------------------------------------
async function rejectIndent(freightUnitId, lineItemId, reason) {
    try {
        const res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/rejectIndent`,
            headers: {
                'Authorization': TOKEN,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            json: true,
            body: {
                freightUnitId: freightUnitId,
                lineItemId: lineItemId,
                reason: reason
            }
        });
        if (res.status == 200) {
            return res.data;
        } else {
            console.log("Error " + res.error);
            return null;
        }
    } catch (error) {
        console.log(`Error rejecting indent:\nUUID: ${freightUnitId}\n${error.message}`);
        return null;
    }
}
//-------------------------------------------------------------------------------------------
async function forceCloseOrders(uniqueOrderIdsArray) {
    try {
        console.log(uniqueOrderIdsArray);
        const res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/v1/admin/orders/force-close`,
            method: 'POST',
            body: [uniqueOrderIdsArray],
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        });
        if (res.status == 200) {
            return res.data;
        } else {
            console.log("Error " + res.error);
            return null;
        }
    } catch (error) {
        console.log('Error calling forceCloseOrders API:', error);
        return null;
    }
}
//--------------------------------------------------------------------------------------------
async function cancelOrder(orderId, reason, uuid) {
    try {
        const res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/purchase-orders/v1/order/${orderId}/cancelOrder`,
            headers: {
                'Authorization': TOKEN,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            json: true,
            body: {
                reason: reason
            }
        });
        if (res.status == 200) {
            return res.data;
        } else {
            console.log("Error " + res.error);
            return null;
        }
    } catch (error) {
        console.log(`Error cancelling order:\nUUID: ${orderId}\n${error.message}`);
        return null;
    }
}
//--------------------------------------------------------------------------------------------
function successAndFailList(res, uuid) {
    if (res) successList.push[uuid];
    else failureList.push[uuid];
}
//--------------------------------------------------------------------------------------------
async function main() {

    let dataList = await getData();

    // let status = dataList.map(_ => _.lineItemStatus)

    // let uniqueStatus = new Set(status)
    // console.log("Unique STatus "+JSON.stringify(Array.from(uniqueStatus)))

    const uniqueOrderIds = new Set();

    let fuNotFOundInDb = []
    let res

    for (let i = 0; i < dataList.length; i++) {
        let data = dataList[i];
        console.log(`Process Running for ${i} Freight Unit`);
        const reason = "Bulk Removed";
        const freightUnit = await getFreightUnitByLineItemId(data.lineItemUuid);

        if (!freightUnit) {
            fuNotFOundInDb.push(data.uuid)
        }

        if (data.lineItemStatus === STATUS_PENDING || data.lineItemStatus === STATUS_AUCTIONED || data.lineItemStatus === STATUS_ALLOCATED || data.lineItemStatus === STATUS_INDENT) {

            if (freightUnit && freightUnit.lineItems[0]?.salesOrderMappings) {
                freightUnit.lineItems[0].salesOrderMappings.forEach(mapping => {
                    if (mapping.orderId) {
                        uniqueOrderIds.add(mapping.orderId);
                    }
                });
            }
        }
        switch (data.lineItemStatus) {
            case STATUS_PENDING:
                res = await deleteFreightUnitIfPending(data.uuid);
                successAndFailList(res, data.uuid)
                break;
            case STATUS_PLACED:
                res = await finalizeVehicle(data.purchaseOrderLineItemId, data.uuid);
                successAndFailList(res, data.uuid)
                break;
            case STATUS_AUCTIONED:
                res = await cancelAuction(data.auctionId, data.uuid);
                successAndFailList(res, data.uuid)
                res = await deleteFreightUnitIfPending(data.uuid);
                successAndFailList(res, data.uuid)
                break;
            case STATUS_INDENT:
                res = await rejectIndent(data.uuid, data.lineItemUuid, reason);
                successAndFailList(res, data.uuid)
                res = await deleteFreightUnitIfPending(data.uuid);
                successAndFailList(res, data.uuid)
                break;
            case STATUS_ALLOCATED:
                res = await cancelOrder(data.purchaseOrderLineItemId, reason, data.uuid);
                successAndFailList(res, data.uuid)
                res = await deleteFreightUnitIfPending(data.uuid);
                successAndFailList(res, data.uuid)
                break;
            default:
                console.log(`${data.lineItemStatus} No Action Required`);
                break;
        }
    }

    await forceCloseOrders(Array.from(uniqueOrderIds));
}

(async () => {
    await main() ;

    console.log("===== Success Log =====");
    successLog.forEach(log => console.log(log));

    console.log("===== Failure Log =====");
    failureLog.forEach(log => console.log(log));
})();
