const orderIndex = "salesorders_v2";
const finalFuIndex = "freightunits_v1";
const orgId = "a9b21334-af4b-4e6c-87ae-859a2b1237be";
const FRT_PUB_BASE_URL = "https://apis.fretron.com";

function getFinalFuElasticQuery() {
    return {
        "_source": ["uuid", "documentNumber", "lineItems.salesOrderMappings", "lineItems.shipmentId", "documentDate","lineItems.uuid"],
        "size": 100,
        "query": {
            "bool": {
                "must": [
                    {
                        "term": {
                            "lineItems.status.keyword": "FINALIZED"
                        }
                    },
                    {
                        "term": {
                            "orgId.keyword": orgId
                        }
                    }
                ],
                "must_not": {
                    "terms": {
                        "type.keyword": ["Deleted"]
                    }
                }
            }
        }
    }
}

function getOrderElasticQuery(uuidArray) {
    return {
        "_source": ["uuid", "orderNumber", "lineItems.loadInfo", "lineItems.externalId"],
        "size": 100,
        "query": {
            "bool": {
                "must": [
                    {
                        "term": {
                            "orgId.keyword": orgId
                        }
                    },
                    {
                        "terms": {
                            "uuid.keyword": uuidArray
                        }
                    }
                ],
                "must_not": {
                    "terms": {
                        "shipmentStatus.keyword": ["DELETED"]
                    }
                }
            }
        }
    }
}

async function getDataFromElastic(index, query) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment-view/proxy/to/elastic`
        let options = {
            method: "POST",
            uri: url,
            body: {
                index: index,
                query: query,
            },
            json: true
        }
        let res = await rp(options)
        return res?.hits?.hits ?? null
    } catch (err) {
        console.log(`Catched Error in getting Data From Elastic ${err.message}`)
        return null
    }
}

async function extractOrderIdsAndGetOrders(suggestedFu, finalFu) {
    let orderIdsFromSuggested = suggestedFu.flatMap(freight =>
        freight.lineItems?.flatMap(lineItem =>
            lineItem.salesOrderMappings?.map(mapping => mapping.orderId)
        )?.filter(Boolean) ?? []
    );
    let orderIdsFromFinal = finalFu.flatMap(freight =>
        freight.lineItems?.flatMap(lineItem =>
            lineItem.salesOrderMappings?.map(mapping => mapping.orderId)
        )?.filter(Boolean) ?? []
    );
    let uniqueOrderIds = [...new Set([...orderIdsFromSuggested, ...orderIdsFromFinal])];

    if (!uniqueOrderIds.length) {
        return null;
    }

    let query = getOrderElasticQuery(uniqueOrderIds);
    let elasticData = await getDataFromElastic(orderIndex, query);

    return elasticData;
}

async function getSuggestedFuByItemIds(lineItemIds) {
    try {
        let url = `${FRT_PUB_BASE_URL}/order-manager-v2/suggested-freight-units/v1/fu-by-itemIds`;
        let options = {
            method: "POST",
            uri: url,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzQ0MzI4NjksInVzZXJJZCI6Ijg2ZWM4MDUwLTc3NzYtNGQ4Ny1hOGI0LTNmYTliM2ExNTIzNyIsImVtYWlsIjoic2hpdmFtLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiNzAxODUxMDE4MSIsIm9yZ0lkIjoiZWYzMDA2ODMtOTAxYi00Nzc0LWJmMGUtOTU1ZDQ5ZTc5NmJjIiwibmFtZSI6IlNoaXZhbSIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.ZYtCp1FedQE8t2egNCgm-wkG_dlNz98wLtdwJhaS_Us"
            },
            body: {
                lineItemIds: lineItemIds,
                exclude: ["documentNumber"]
            },
            json: true
        };
        let res = await rp(options);
        return res;
    } catch (err) {
        console.log(`Error getting suggested FU by item IDs: ${err.message}`);
        return null;
    }
}

function createOrderLineItemMap(orders, suggestedFu, finalFu) {
    let orderMap = new Map(orders.map(order => [order._source.uuid, order]));
    let processFuList = (fuList) => {
        return fuList?.flatMap(fu =>
            fu.lineItems?.[0]?.salesOrderMappings
                ?.filter(mapping => mapping.orderId && mapping.lineItemId)
                ?.map(mapping => ({
                    key: `${mapping.orderId}_${mapping.lineItemId}`,
                    orderId: mapping.orderId,
                    lineItemId: mapping.lineItemId
                })) ?? []
        );
    };
    let allMappings = [...processFuList(suggestedFu), ...processFuList(finalFu)];
    return new Map(
        allMappings.map(({ key, orderId, lineItemId }) => {
            let order = orderMap.get(orderId);
            let lineItem = order?._source.lineItems?.find(item => item.uuid === lineItemId);

            return [key, {
                orderNumber: order?._source.orderNumber ?? null,
                lineItem: lineItem ?? null
            }];
        })
    );
}

function createComparisonMap(fuMap, orderLineItemMap) {
    let comparisonMap = new Map();

    for (let { suggested, final } of fuMap) {
        let docNumber = suggested.documentNumber;
        let comparisonObj = compareFreightUnits(suggested, final, orderLineItemMap);
        comparisonMap.set(docNumber, comparisonObj);
    }

    return comparisonMap;
}

function compareFreightUnits(suggested, final, orderLineItemMap) {
    let comparisonObj = {
        suggestedAndFinal: [],
        suggestedOnly: [],
        finalOnly: []
    };

    // Get mappings from both FUs
    let suggestedMappings = suggested.lineItems?.[0]?.salesOrderMappings ?? [];
    let finalMappings = final.lineItems?.[0]?.salesOrderMappings ?? [];

    // Create sets of unique keys for comparison
    let suggestedKeys = new Set(suggestedMappings.map(m => `${m.orderId}_${m.lineItemId}`));
    let finalKeys = new Set(finalMappings.map(m => `${m.orderId}_${m.lineItemId}`));

    // Find items present in both suggested and final
    for (let key of suggestedKeys) {
        let orderLineItem = orderLineItemMap.get(key);
        if (!orderLineItem) continue;

        if (finalKeys.has(key)) {
            comparisonObj.suggestedAndFinal.push({
                suggested: orderLineItem,
                final: orderLineItem
            });
        } else {
            comparisonObj.suggestedOnly.push(orderLineItem);
        }
    }

    // Find items present only in final
    for (let key of finalKeys) {
        if (!suggestedKeys.has(key)) {
            let orderLineItem = orderLineItemMap.get(key);
            if (orderLineItem) {
                comparisonObj.finalOnly.push(orderLineItem);
            }
        }
    }

    return comparisonObj;
}

async function main(suggestedFu, finalFu) {

    let finalFu = await getDataFromElastic(finalFuIndex, getFinalFuElasticQuery());
    let finalFuLineItemUuids = finalFu.map(fu => fu?.lineItems?.[0]?.uuid).filter(Boolean);
    let suggestedFu = await getSuggestedFuByItemIds(finalFuLineItemUuids);
    let orders = await extractOrderIdsAndGetOrders(suggestedFu, finalFu);
    let fuMap = [];
    let suggestedFuMap = new Map(suggestedFu.map(fu => [fu.documentNumber, fu]));
    let finalFuMap = new Map(finalFu.map(fu => [fu.documentNumber, fu]));

    for (let [docNumber, suggestedFuObj] of suggestedFuMap) {
        if (finalFuMap.has(docNumber)) {
            fuMap.push({
                suggested: suggestedFuObj,
                final: finalFuMap.get(docNumber)
            });
        }
    }

    let orderLineItemMap = createOrderLineItemMap(orders, suggestedFu, finalFu);
    let comparisonMap = createComparisonMap(fuMap, orderLineItemMap);
}

main(suggestedFu, finalFu);
