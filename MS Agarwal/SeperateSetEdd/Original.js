const DIESEL_FUCREATION_ID = "0c792fd4-d746-4682-af6c-1b9fb50508fe";
const DESTINATION_WISE_FUCREATION_ID = "ea34274d-5492-4678-aaad-f3fd46dabe02";

const freight_Id = "f3ad2bab-b172-4745-9dd3-40b746ad7447";
const DIESEL_FREIGHT_ID = "97b410a5-fed7-4270-a233-8501ab6755e4";
const FREIGHT_CHARGE = "ActualFreight";
const ROUTE_KM_CHARGE = "routeKm";
const SH_COST_CHARGE = "freight";
const SH_FREIGHT_RATE_CF = "Freight Rate"

const TOKEN = "";

const chargeSettings = {
    amount: null,
    rateValueRuleId: null,
    isCalculated: true,
    baseValueRuleId: null,
    rateUnit: "perMT",
    amountValueRuleId: null,
    vendorFeedingType: "User",
    chargeApplicableFor: null,
    chargeBillingType: ["VendorBill", "DebitNote", "CreditNote"],
    baseValueFeedingType: "User",
    distributionBasis: "Weight",
    amountFeedingType: "User",
    rate: null,
    chargeId: "1bc11855-969d-42fc-83f7-af55e080e462",
    vendor: null,
    applicability: "Shipment",
    chargeName: "freight",
    rateFeedingType: "User",
    base: null,
    vendorRuleId: null,
};

async function getShWithCn(shId, token) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${shId}?skipCn=false`;
        let res = await rp({
            uri: url,
            method: "GET",
            json: true,
            headers: {
                authorization: token,
            },
        });
        if (res?.error) {
            console.log(`Error Sh-Cn Get ${JSON.stringify(res.error)}`);
        }
        return res.status == 200 ? res.data : null;
    } catch (e) {
        console.log(`Caught Error Getting Shipment ${e.message}`);
    }
}

async function getFreightUnitByLineItemId(lineItemId, token) {
    try {
        let body = [lineItemId];
        let res = await rp({
            method: "POST",
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight-units/by/linItemIds`,
            json: true,
            body: body,
            headers: {
                Authorization: token,
            },
        });

        return res?.status == 200 ? res.data : null;
    } catch (e) {
        console.log(`catched Error in getting fu ${e.message}`);
    }
    return null;
}

async function getConditionRecords(filters, freightId, token) {
    try {
        let url = `${FRT_PUB_BASE_URL}/freight-pricing/v1/filtered/condition-records/v2?priceTableId=${freightId}`;
        let res = await rp({
            url: url,
            method: "POST",
            body: filters,
            json: true,
            headers: { Authorization: token },
        });

        if (res.error) {
            console.log(`Error in getting condition records ${res.error}`);
        }
        return res?.status == 200 ? res.data : null;
    } catch (err) {
        console.log(`Error getting charge- ${err.message}`);
    }
}

async function getShCostOnShipment(shipmentId, chargeName = null, token) {
    try {
        var url = `${FRT_PUB_BASE_URL}/shipment-cost/v1/costs?shipmentId=${shipmentId}`;
        var options = {
            headers: {
                Authorization: token,
            },
            json: true
        };
        var res = await rp.get(url, options);
        if (res.error) {
            console.log(`Incoming error in response of getting shipment cost on shipment ID- ${shipmentId} ----- ${res.error}`);
        } else {
            return chargeName
                ? res.data?.find((_) => _?.charge?.name === chargeName)
                : res?.data;
        }
    } catch (err) {
        console.log(`Catched error in getting shipment cost present on shipment- ${err.message}`);
    }
    return null;
}

async function autoFillCharge(shId, chargeSettings, token) {
    let url = `${FRT_PUB_BASE_URL}/shipment-cost/v1/auto-fill/cost-detail?shipmentId=${shId}`;
    return await rp({
        url: url,
        json: true,
        method: "POST",
        body: chargeSettings,
        headers: { Authorization: token },
    })
        .then((res) => {
            if (res?.data) {
                return res.data;
            }
        })
        .catch((err) => {
            console.log(`Caught error getting Sh Cost: ${shId} : ${err.message}`);
        });
}

async function saveShCost(shId, shCostPayload, token) {
    let url = `${FRT_PUB_BASE_URL}/shipment-cost/v1/cost?shipmentId=${shId}`;
    return await rp({
        url: url,
        json: true,
        method: "POST",
        body: shCostPayload,
        headers: { Authorization: token },
    })
        .then((res) => {
            if (res?.data) {
                return res.data;
            } else {
                console.log(
                    `Incoming error in adding/updating cost- ${res?.error ?? ""}`
                );
            }
        })
        .catch((err) => {
            console.log(`Caught error getting charge: ${shId} : ${err.message}`);
        });
}

async function updateCostOnShipment(shipment,vendor,shCostJson,chargeName,token) {
    if (!vendor) {
        console.log(`Vendor not found on SH`);
        return;
    }

    //First Getting the charge from Shipment via Charge Name
    var shipmentCost = await getShCostOnShipment(
        shipment.uuid,
        chargeName,
        token
    );
    if (!shipmentCost) {
        console.log("Sh doesnt have any shCost attached! will add from autofill");
        shipmentCost = await autoFillCharge(shipment.uuid, chargeSettings, token);
    }

    if (chargeSettings && shipmentCost) {
        shipmentCost.amount = shipmentCost.charge.amount = String(shCostJson.amount);
        if (shCostJson.base) shipmentCost.charge.base = shCostJson.base;
        if (shCostJson.rate) shipmentCost.charge.rate = shCostJson.rate;
        shipmentCost.vendor = vendor;

        let shCostPayload = {
            chargeSetting: chargeSettings,
            shipmentCost: shipmentCost,
        };

        let res = await saveShCost(shipment.uuid, shCostPayload, token);
        if (res) {
            console.log(`${chargeName} charge added successfully`);
        }
        return res;
    } else {
        console.log(`${chargeName} not found in Sh charges`);
    }
    return null;
}

async function getUpdatedFreightCost(
    fuCreationDate,
    vendorExtId,
    freightCost,
    token
) {
    try {
        let dieselPriceTableFilter = {
            fixed: [
                {
                    key: "Vendor External Id",
                    values: [vendorExtId, "ANY_VALUE"],
                },
            ],
            fixedRanges: [
                {
                    min: fuCreationDate,
                    max: fuCreationDate,
                    uuid: DIESEL_FUCREATION_ID,
                },
            ],
        };

        console.log(
            `Diesel Esc Price Table Filter ${JSON.stringify(dieselPriceTableFilter)}`
        );
        let dieselPriceRecords = await getConditionRecords(
            dieselPriceTableFilter,
            DIESEL_FREIGHT_ID,
            token
        );

        if (!dieselPriceRecords?.length) {
            console.log(`Diesel Price Records not found`);
        } else {
            let dieselBaseRate = dieselPriceRecords[0]?.chargeTypes.find(
                (charge) => charge.name == "Diesel Base Rate"
            )?.amount;

            let newDieselRate = dieselPriceRecords[0]?.chargeTypes.find(
                (charge) => charge.name == "NewDieselRate"
            )?.amount;

            let diffPercent = calculatePercentageDifference(
                dieselBaseRate,
                newDieselRate
            );

            if (diffPercent) {
                console.log(`Diesel Base Rate Changed`);
                if (diffPercent >= 2 || diffPercent <= -2) {
                    console.log(`Diesel Price Changed and updating Freight Cost`);
                    let newFreightCost =
                        (freightCost * 0.3 * diffPercent) / dieselBaseRate;
                    freightCost = freightCost + newFreightCost;

                    console.log(`updated Freight Cost ${freightCost}`);
                }
            }
        }
    } catch (e) {
        console.log(`catched error in getting updated freight cost ${e.message}`);
    }
    return freightCost;
}

async function bulkSync(payload, token) {
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

async function setEdd(shipment, totalKm, token) {
    try {
        let edd = shipment.edd
        if (edd) { throw new Error('EDD already present on shipment!') }
        let transitDays = 0;
        let shTime =
            shipment?.shipmentStages[0]?.departureTime ??
            shipment?.shipmentStages[0]?.arrivalTime ??
            shipment.creationTime;

        if (totalKm < 200) {
            transitDays = 1;
        } else if (totalKm <= 750) {
            transitDays = totalKm / 200;
        } else if (totalKm > 750) {
            transitDays = totalKm / 250;
        }
        if (transitDays) {
            console.log(`transitDays: ${transitDays}`);
            let transitDaysInMillisec = null;
            if (transitDays > 0) {
                transitDaysInMillisec = shTime + transitDays * 24 * 60 * 60 * 1000;
            } else {
                transitDaysInMillisec = shTime;
            }
            let eddPayload = {
                shipmentId: shipment.uuid,
                updates: [
                    {
                        keyToUpdate: "edd",
                        updatedValue: transitDaysInMillisec,
                    }
                ]
            };
            console.log(`transitDaysInMillisec: ${transitDaysInMillisec}`);
            await bulkSync(eddPayload, token);
        }
    } catch (e) {
        console.log(`catched error in setting Edd ${e.message}`);
    }
}

async function ensureShCost(shipment, token) {
    try {
        console.log(`Ensuring ShCost of shipment ${shipment?.shipmentNumber}`);
        if (!_.first(shipment.shipmentStages)?.departureTime) {
            throw new Error("Unable to calculate shipment cost: Shipment yet not departed form origin.");
        }
        let consignments = shipment?.consignments;
        let vendor =
            shipment?.fleetInfo?.broker ??
            shipment?.fleetInfo?.forwardingAgent ??
            shipment?.fleetInfo?.fleetOwner;
        if (!vendor) {
            console.log(`Vendor not found on Shipment ${shipment.shipmentNumber}`);
            throw new Error(`Vendor not found on Shipment ${shipment.shipmentNumber}`);
        }

        if (!consignments?.length) {
            throw new Error("Unable to calculate shipment cost: No consignments found for this shipment.");
        } else {
            let vendorExtId = vendor?.externalId;
            if (!vendorExtId) {
                console.log(`Vendor External Id not found`);
                throw new Error(`Vendor External Id not found for ${vendor?.name}`);
            }
            let totalWeight = 0;
            for (let cn of consignments) {
                totalWeight += cn?.loadInfo?.standardMeasurement?.weight?.netQuantity;
            }
            let freightRate = shipment?.customFields?.find(cf => cf.fieldKey == SH_FREIGHT_RATE_CF)?.value
            if (!freightRate || isNaN(freightRate)) {
                throw new Error("Unable to calculate shipment cost: Freight not found on shipment.")
            }
            let shCostJson = {
                base: totalWeight,
                rate: Number(freightRate),
                amount: totalWeight * Number(freightRate),
            };
            await updateCostOnShipment(shipment,vendor,shCostJson,SH_COST_CHARGE,token);
        }
    } catch (e) {
        console.log(`catched error in ensuring shipment cost ${e.message}`);
        throw new Error(e)
    }
}

async function calculateTotalDistanceViaShStages(shipment) {
    let totalKm = 0

    let shipmentStages = shipment.shipmentStages

    for (let index = 0; index < shipmentStages.length; index += 1) {
        let stage = shipmentStages[index]

        let currStagePlace = stage?.place ?? stage?.hub
        let nextStagePlace = null

        if (shipmentStages[index + 1]) {
            nextStagePlace = shipmentStages[index + 1]?.place ?? shipmentStages[index + 1]?.hub
        }

        if (nextStagePlace) {
            let currLat = currStagePlace?.center?.latitude
            let currLong = currStagePlace?.center?.longitude

            let nextLat = nextStagePlace?.center?.latitude
            let nextLong = nextStagePlace?.center?.longitude

            if (currLat && currLong && nextLat && nextLong) {
                let distanceViaLatLong = await calculateDistanceViaLatLong(currLat, currLong, nextLat, nextLong) //API Return in Meters

                if (distanceViaLatLong) {
                    totalKm += (distanceViaLatLong / 1000)
                }
            }
        }
    }

    let origin = shipmentStages[0]?.place ?? shipmentStages[0]?.hub
    let destination = _.last(shipmentStages)?.place ?? _.last(shipmentStages)?.hub

    if (origin && destination) {
        let originLat = origin?.center?.latitude
        let originLong = origin?.center?.longitude

        let destLat = destination?.center?.latitude
        let destLong = destination?.center?.longitude

        if (originLat && originLong && destLat && destLong) {
            let distanceViaLatLong = await calculateDistanceViaLatLong(originLat, originLong, destLat, destLong) //API Return in Meters

            if (distanceViaLatLong) {
                totalKm = distanceViaLatLong / 1000
            }
        }

    }

    return totalKm
}

async function calculateDistanceViaLatLong(originLat, originLong, destLat, destLong) {
    try {
        let url = `${FRT_PUB_BASE_URL}/itinerary/admin/calculateDistance?originLat=${originLat}&originLng=${originLong}&destinationLat=${destLat}&destinationLng=${destLong}`

        let options = {
            uri: url,
            json: true,
            method: 'GET'
        }

        let res = await rp(options)

        //Response in meters --> Convert to KM

        if (res.error) {
            console.log(`Incoming error in calculating distance- ${res.error}`)
        }

        return res.status == 200 ? !isNaN(res.data) ? Number(res.data) : 0 : null

    } catch (err) {
        console.log(`Some error in calculating distance via lat long- ${err.message}`)
    }

    return null
}

// Update Freight cost on FU

async function getBpById(bpId, token) {
    try {
        let res = await rp({
            uri: `${FRT_PUB_BASE_URL}/business-partners/v2/partner/${bpId}`,
            json: true,
            headers: {
                Authorization: token,
            },
            method: "GET",
        });
        if (res?.error) {
            console.log(`Getting Transporter Error ${res?.error}`);
        }
        return res?.status == 200 ? res.data : null;
    } catch (e) {
        console.log(`Catched Error while getting Tranporter ${e.message}`);
    }
    return null;
}

async function getOrderByIds(uuids) {
    try {
        let res = await rp({
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/v1/admin/sales-orders/by_uuids`,
            method: "POST",
            headers: {},
            json: true,
            body: uuids,
        });
        if (res.status == 200) {
            return res.data;
        } else {
            return [];
        }
    } catch (e) {
        console.log(
            `catched error while fetching orderby ids ${(uuids.join(","), e.message)}`
        );
    }
    return [];
}

async function getOriginAndDestinationHubByDispatch(fu) {
    try {
        let orderIds = fu.lineItems[0].salesOrderMappings?.map((_) => _.orderId);
        if (!orderIds?.length) {
            console.log(`Order ids not found`);
            return [];
        }
        orderIds = _.uniq(orderIds);

        let orders = await getOrderByIds(orderIds);

        let destinationHubs = [];
        let originHubs = []
        orders.forEach((order) => {
            order?.lineItems?.map((item) => {
                let destination = item?.consignee?.places?.[0]?.name
                destination = destination?.split("-")[0];
                if (destination) {
                    destinationHubs.push(destination)
                    destinationHubs.push(destination.toUpperCase())

                }

                let origin = item?.consigner?.places?.[0]?.name
                // origin = origin?.split("-")[0];
                if (origin) {
                    originHubs.push(origin)
                    originHubs.push(origin.toUpperCase())

                }

            });
        });

        return {
            destinationHubs: destinationHubs?.length ? [...new Set(destinationHubs)] : [],
            originHubs: originHubs?.length ? [...new Set(originHubs)] : []
        }
    } catch (e) {
        console.log(`catched Error while getting origin and destination hub by dispatch ${e.message}`);
    }
    return {
        destinationHubs: [],
        originHubs: []
    };
}

function calculatePercentageDifference(oldRate, newRate) {
    const difference = newRate - oldRate;
    const percentageDifference = (difference / oldRate) * 100;
    return percentageDifference;
}

async function saveFreightCostOnFreightUnit(payload, token) {
    try {
        let url = `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight`;
        let res = await rp({
            uri: url,
            method: "PUT",
            json: true,
            body: payload,
            headers: {
                Authorization: token,
            },
        });

        if (res.error) {
            console.log(`Error while saving freight cost ${res.error}`);
        }
        return res?.status == 200 ? res.data : null;
    } catch (e) {
        console.log(`catched Error while saving freight cost ${e.message}`);
    }
}

async function ensureFreightCostOnDispatch(dispatch, token) {
    try {
        console.log(`executing dispatch ${dispatch?.documentNumber}`);

        let fuCreationDate = dispatch?.documentDate;
        let totalQty = dispatch?.totalQuantity?.weight?.netQuantity;
        if (!totalQty) {
            console.log(`Total Qty not found`);
            throw new Error("Total Qty not found");
        }
        let vendorId = dispatch?.lineItems?.[0]?.transporterId;

        if (!vendorId) {
            console.log(`transporterId not found`);
            throw new Error("transporterId  not found");
        }

        let vendor = await getBpById(vendorId, token);
        if (!vendor) {
            console.log(`vendor not found by id ${vendorId}`);
            throw new Error(`vendor not found by id ${vendorId}`);
        }

        let vendorExtId = vendor?.externalId

        if (!vendorExtId) {
            console.log(`vendor ExternalId not found`);
            throw new Error("vendor ExternalId not found");
        }

        let { originHubs, destinationHubs } = await getOriginAndDestinationHubByDispatch(dispatch);

        if (!destinationHubs?.length) {
            console.log(`Destination hub not found`);
            //   throw new Error("Destination hub not found");
        }

        let destinationWisePriceFilter = {
            fixed: [
                {
                    key: "Vendor External Id",
                    values: [vendorExtId, "ANY_VALUE"],
                },
                {
                    key: "destinationHub",
                    values: [...destinationHubs, "ANY_VALUE"],
                },
                {
                    key: "originHub",
                    values: [...originHubs, "ANY_VALUE"],
                },
            ],
            fixedRanges: [
                {
                    min: fuCreationDate,
                    max: fuCreationDate,
                    uuid: DESTINATION_WISE_FUCREATION_ID,
                },
            ],
        };

        console.log(
            `Destination Wise PriceTable Filter ${JSON.stringify(
                destinationWisePriceFilter
            )}`
        );

        let records = await getConditionRecords(
            destinationWisePriceFilter,
            freight_Id,
            token
        );

        if (!records?.length) {
            console.log(`No records found`);
            throw new Error(
                `No records found for vendor ${vendorExtId} destination ${destinationHubs.join(
                    ","
                )}`
            );
        }
        let record = records[0];

        let actualFreightCharge = record?.chargeTypes?.find(
            (charge) => charge?.name == FREIGHT_CHARGE
        );

        let rate = actualFreightCharge?.rate;
        let base = totalQty;
        let freightCost = rate * base;

        console.log(`freight cost ${freightCost}`);

        freightCost = await getUpdatedFreightCost(
            fuCreationDate,
            vendorExtId,
            freightCost,
            token
        );

        let freightCostSavePayload = {
            freightUnitId: dispatch?.uuid,
            freightUnitLineItemId: dispatch?.lineItems?.[0]?.uuid,
            freightCost: freightCost,
            freightType: "perVehicle",
        };

        console.log(
            `freightCostSavePayload ${JSON.stringify(freightCostSavePayload)}`
        );
        return await saveFreightCostOnFreightUnit(freightCostSavePayload, token);
    } catch (e) {
        console.log(`catched error in ensuring freight cost ${e.message}`);
        throw new Error(e)
    }
}

async function calculateEdd(shipment,token){
    try{
        let totalKm = 0
        if (!totalKm) { totalKm = await calculateTotalDistanceViaShStages(shipment) }
        console.log(`Total KM Calculated- ${totalKm}`)
        if (totalKm) { await setEdd(shipment, totalKm, token); }
    }catch(e){
        console.log(`Catched error in calculating edd: ${e.message}`)
    }
    return "Done"
}

async function main(event) {
    try {
        let type = event?.body?.via ?? "viaSh"
        let token = TOKEN;

        if (type == "viaSh") {
            let shId = event?.body?.shipmentId;
            let shipment = null;
            if (!shId) {
                shipment = event.body.shipment;
            } else {
                shipment = await getShWithCn(shId, token);
            }
            if (shipment) {
                await calculateEdd(shipment,token)
                await ensureShCost(shipment, token);
            } else {
                throw new Error("Sh Not Found")
            }
        } else {
            let dispatch = event?.body?.dispatch;
            if (!dispatch) {
                console.log(`dispatch not found`);
            } else {
                await ensureFreightCostOnDispatch(dispatch, token);
            }
        }
    } catch (e) {
        console.log(`catched error in main ${e.message}`);
        throw new Error(e)
    }
}

try {
    console.log("Via : " + $event?.body?.via ?? "Blank")
    console.log("SH Id " + $event?.body?.shipmentId)
    console.log("SH No " + $event?.body?.shipment?.shipmentNumber)
    console.log("Dispatch No  " + $event?.body?.dispatch?.documentNumber)
    let res = await main($event)
    return { "status": 200, "data": "Cost Added Succesfully", "error": null }
} catch (e) {
    console.log("Error " + e.message)
    return { "status": 400, "data": null, "error": e.message }
}