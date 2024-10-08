const { last } = require('lodash');
const rp = require('request-promise');
const FRT_PUB_BASE_URL = "https://apis.fretron.com";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjgyOTI2NTEsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiI0OTViODcyOC1jNzYxLTRmYTctODNmZS1kYjc1YTdkNjMyMjEiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6ZmFsc2UsInBvcnRhbFR5cGUiOiJiYXNpYyJ9.jgUrk_hkLUYTS-D9MrdKGMuVGhNDqoZob-9tsgTR3fU";
const dataList = [];
const STATUS_PENDING = 'PENDING';
const STATUS_PLACED = 'PLACED';
const STATUS_AUCTIONED = 'AUCTIONED';
const STATUS_INDENT = 'INDENT';
const STATUS_ALLOCATED = 'ALLOCATED'
const filterFrom = 1650522600000;
const filterTill = 1651300200000;

let successLog = [];
let failureLog = [];

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
        failureLog.push(`Error in getting freight unit by item ${fuItemId}: ${error.message}`);
        return null;
    }
}
//--------------------------------------------------------------------------------------------
async function getData() {
    let lastTimestamp = null;
    let lastUuid = null;

    while (true) {
        const options = {
            uri: `${FRT_PUB_BASE_URL}/shipment-view/dispatch-management/dispatches`,
            qs: {
                size: 50,
                filters: `{"lineItems.status":[],"lineItems.transporterId":[],"lineItems.loadTypeId":[],"companyCode":[],"documentDate":{"from":${filterFrom},"till":${filterTill}},"_customeField":null,"_not":{"type":["Temporary"],"lineItems.status":["FINALIZED","FINALIZATION_IN_PROGRESS"]},"updates.time":{"from":null,"till":null}}`,
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
                successLog.push("Successfully fetched all dispatches");
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
    console.log(dataList)
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
        if (res.status === 200) successLog.push(`Deleted Freight Unit:\nUUID: ${freightUnitUuid}`);
        else { failureLog.push(`Error Deleting Freight Unit:\nUUID: ${freightUnitUuid}\nError: ${res.error}`) }
    } catch (error) {
        failureLog.push(`Error deleting Freight Unit:\nUUID: ${freightUnitUuid}\n${error.message}`);
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
        if (res.status === 200) successLog.push(`Canceled Auction:\nUUID: ${uuid}`);
        else { failureLog.push(`Error Canceling Auction:\nUUID: ${uuid}\nError: ${res.error}`) }
    } catch (error) {
        failureLog.push(`Error canceling auction:\nUUID: ${uuid}\n${error.message}`);
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
        if (res.status === 200) successLog.push(`Finalized Vehicle for Purchase Order:\nUUID:${uuid}`);
        else { failureLog.push(`Error Finalizing Vehicle for Purchase Order:\nUUID:${uuid}\nError: ${res.error}`) }
    } catch (error) {
        failureLog.push(`Error finalizing vehicle:\nUUID: ${uuid}\n${error.message}`);
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
        if (res.status === 200) successLog.push(`Rejected Indent for Freight Unit:\nUUID:${freightUnitId}`);
        else { failure.log(`Error Rejecting Indent for Freight Unit:\nUUID:${freightUnitId}\nError: ${res.error}`) }
    } catch (error) {
        failureLog.push(`Error rejecting indent:\nUUID: ${freightUnitId}\n${error.message}`);
    }
}
//-------------------------------------------------------------------------------------------
async function forceCloseOrders(uniqueOrderIdsArray) {
    try {
        const res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/v1/admin/orders/force-close`,
            method: 'POST',
            body: [uniqueOrderIdsArray],
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        });
        if (res.status === 200) successLog.push(`-------------FORCE CLOSING ORDERS----------------\nOrder Closed for: ${uniqueOrderIdsArray}`);
        else { failureLog.push(`-------------FORCE CLOSING ORDERS----------------\nError Closing Order for: ${uniqueOrderIdsArray}\nError: ${res.error}`) }
    } catch (error) {
        failureLog.push('Error calling forceCloseOrders API:', error);
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
                reason: reason // Send the cancellation reason in the body
            }
        });
        if (res.status === 200) successLog.push(`Order Cancelled for Freight Unit:\nUUID: ${uuid}`);
        else { failureLog.push(`Order Cancelled for Freight Unit:\nUUID: ${uuid}\nError: ${res.error}`) }
    } catch (error) {
        failureLog.push(`Error cancelling order:\nUUID: ${orderId}\n${error.message}`);
    }
}
//--------------------------------------------------------------------------------------------
async function main() {
    const uniqueOrderIds = new Set();

    for (let data = 0; data < dataList.length; data++) {
        const reason = "Bulk Removed";
        const freightUnit = await getFreightUnitByLineItemId(dataList[data].lineItemUuid);
        successLog.push(`${data}----------------------------------------------`)
        failureLog.push(`${data}----------------------------------------------`)
        if (dataList[data].lineItemStatus === STATUS_PENDING || dataList[data].lineItemStatus === STATUS_AUCTIONED || dataList[data].lineItemStatus === STATUS_ALLOCATED || dataList[data].lineItemStatus === STATUS_INDENT) {

            if (freightUnit && freightUnit.lineItems[0]?.salesOrderMappings) {
                freightUnit.lineItems[0].salesOrderMappings.forEach(mapping => {
                    if (mapping.orderId) {
                        uniqueOrderIds.add(mapping.orderId);
                    }
                });
            }
        }
        switch (dataList[data].lineItemStatus) {
            case STATUS_PENDING:
                await deleteFreightUnitIfPending(dataList[data].uuid);
                break;
            case STATUS_PLACED:
                await finalizeVehicle(dataList[data].purchaseOrderLineItemId, dataList[data].uuid);
                break;
            case STATUS_AUCTIONED:
                await cancelAuction(dataList[data].auctionId, dataList[data].uuid);
                await deleteFreightUnitIfPending(dataList[data].uuid);
                break;
            case STATUS_INDENT:
                await rejectIndent(dataList[data].uuid, dataList[data].lineItemUuid, reason);
                await deleteFreightUnitIfPending(dataList[data].uuid);
                break;
            case STATUS_ALLOCATED:
                await cancelOrder(dataList[data].purchaseOrderLineItemId, reason, dataList[data].uuid);
                await deleteFreightUnitIfPending(dataList[data].uuid);
                break;
            default:
                console.log(`${dataList[data].lineItemStatus} No Action Required`);
                break;
        }
    }

    await forceCloseOrders(Array.from(uniqueOrderIds));
}

(async () => {
    await getData();
    await main();

    console.log("===== Success Log =====");
    successLog.forEach(log => console.log(log));

    console.log("===== Failure Log =====");
    failureLog.forEach(log => console.log(log));
})();