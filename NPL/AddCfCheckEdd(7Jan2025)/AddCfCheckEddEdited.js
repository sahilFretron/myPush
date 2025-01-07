


const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTAxMTU1MDcsInVzZXJJZCI6ImJvdHVzZXItLTVlYjIwNmY2LTBlMjAtNDdmOS05NDllLTEzZmNhNGJiY2RmNiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTVlYjIwNmY2LTBlMjAtNDdmOS05NDllLTEzZmNhNGJiY2RmNiIsIm9yZ0lkIjoiNDZjMDczNjMtY2M1MS00Y2FiLTlkMTAtYmJlMTU3M2RhMmQ4IiwibmFtZSI6IkZpbmFsaXplIEJvdCIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.dQNQKIXgx2O0v7H2l7z_LJxpSzh5exsykQNTlAGLMP8"

const sh = $event
console.log(sh.shipmentNumber)

try {
      
    console.log("Shipment Number- " + $event.shipmentNumber);
    const monthMap = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let uuid = $event.uuid;
    
    let billingDaysRes = await billingDays(TOKEN);
    console.log(billingDaysRes);
    let payload = [
        {
            indexedValue: [],
            fieldKey: "Shipment Completion",
            multiple: true,
            description: "",
            remark: "",
            uuid: null,
            required: false,
            accessType: null,
            input: "date",
            unit: "",
            valueType: "string",
            options: [],
            fieldType: "date",
            value: String(Date.now()),
            isRemark: false,
        },
        {
            indexedValue: [],
            fieldKey: "Completion Month",
            multiple: false,
            description: "",
            remark: "",
            required: false,
            accessType: null,
            input: "string",
            unit: "",
            valueType: "string",
            options: [],
            fieldType: "text",
            value: monthMap[new Date().getMonth()] + "-" + new Date().getFullYear(),
            isRemark: false,
        },
        {
            indexedValue: [],
            fieldKey: "Billing Dates",
            multiple: false,
            description: "",
            remark: "",
            required: false,
            accessType: null,
            input: "string",
            unit: "",
            valueType: "string",
            options: [],
            fieldType: "text",
            value: billingDaysRes,
            isRemark: false,
        },
    ];
    let shDelayedStatus = checkShDelayedStatus(sh)
    if (shDelayedStatus) {
        payload.push({
            fieldKey: "Delay Status",
            value: shDelayedStatus,
            indexedValue: [],
            multiple: false,
            description: "",
            remark: "",
            required: false,
            accessType: null,
            input: "string",
            unit: "",
            valueType: "string",
            options: [],
            fieldType: "text",
            isRemark: false,
        })
    }
    let cfUpdateRes = await cfUpdate(uuid, payload);
    console.log(cfUpdateRes);

    async function cfUpdate(shUUID, payload) {
        let response = await rp({
            method: "POST",
            uri:
                `${FRT_PUB_BASE_URL}/shipment/v1/admin/shipment/` +
                shUUID +
                "/add/customFields",
            body: payload,
            json: true,
        });

        return response.status == 200
            ? "Shipment Updated Successfully"
            : response.error;
    }

    async function billingDays(TOKEN) {
        try {
            let data = $event;
            let shUuid = data.uuid;
            console.log("Shipment Number- " + data.shipmentNumber);
            console.log("Shipment UUID- " + shUuid);
            try {
                var response = await getLastPingDate(shUuid, TOKEN);
            } catch (e) {
                console.log("Error in getLastPingDate- " + e.message);
                return "";
            }
            if (response.length) {
                response = response.filter((v) => {
                    if (
                        v.sourceOfInformation &&
                        v.description
                    ) {
                        if (
                            v.description.indexOf("updated in-consistent Enroute Location") !=
                            -1 ||
                            v.description.indexOf("updated Enroute Location") != -1 ||
                            v.sourceOfInformation.indexOf("Phone is out of coverage") != -1 ||
                            v.sourceOfInformation.indexOf("Phone is switched off") != -1
                        ) {
                            return true;
                        }
                    }
                    return false;
                });
                var dataArray = [];
                var dates = [];
                for (let i in response) {
                    var dateString = new Date((response[i].time + 19800000));
                    let dateData =
                        dateString.getDate() +
                        "-" +
                        (dateString.getMonth() + 1) +
                        "-" +
                        dateString.getFullYear();
                    dataArray.push({
                        resourceId: response[i].resourceId,
                        updatedBy: response[i].updatedBy,
                        description: response[i].description,
                        userId: response[i].userId,
                        time: dateData,
                    });
                }

                let groupedData = _.groupBy(dataArray, "time");
                for (let j in groupedData) {
                    dates.push(j);
                }
                console.log("Billing Dates- " + dates.join());

                return dates.join();
            } else {
                console.log("No Ping where fetched for the shipment");
                return "";
            }

            //Functions
            async function getLastPingDate(uuid, token) {
                let response = await rp({
                    method: "GET",
                    uri:
                        `${FRT_PUB_BASE_URL}/shipment/v1/shipment/` +
                        uuid +
                        "/update-trail",
                    headers: { Authorization: token },
                    json: true,
                });
                console.log("Error while calling getLastPingDate- " + response.error);
                return response.status == 200 ? response.data : response.error;
            }
        } catch (e) {
            console.log("Error executing main function- " + e.message);
            return "Error executing main function- " + e.message;
        }
    }

    console.log("--- adding shipment cost ---")

    await addShipmentCost(sh.uuid, sh.freightUnitLineItemId,sh)

} catch (e) {
    console.log(`Caught Error: ${e.message}`)
}

async function addShipmentCost(shId, fuLineItemId,shipment) {
    try {
        const CHARGE_SETTING = {
            "amount": null,
            "rateValueRuleId": null,
            "isCalculated": false,
            "baseValueRuleId": null,
            "rateUnit": null,
            "amountValueRuleId": null,
            "vendorFeedingType": "Broker",
            "chargeApplicableFor": null,
            "chargeBillingType": [],
            "baseValueFeedingType": null,
            "distributionBasis": "Volume",
            "amountFeedingType": "User",
            "rate": null,
            "chargeId": "f53b0b46-0f4c-4178-bf9d-c1de5901b8a3",
            "vendor": null,
            "applicability": "Shipment",
            "chargeName": "Freight",
            "rateFeedingType": "User",
            "base": null,
            "vendorRuleId": null
        }
        let shCostList = await getShCostListForSh(shId)
        let shipmentCost = shCostList.find(_ => _.charge.name === CHARGE_SETTING.chargeName)
        if (!shipmentCost) {
            shipmentCost = await autoFillCharge(shId, CHARGE_SETTING)
        }

        const fu = await getFreightUnitByLineItemId(fuLineItemId)
        let amount = fu.lineItems[0].expectedFreightINR
        shipmentCost.charge.amount = amount + ""
        shipmentCost.amount = amount
        let cf = (shipment.customFields ?? []).find(_=>_.fieldKey == "Invoice Type")?.value ?? "Customer"
        if(cf != "Customer"){
            let res = await saveShipmentCost(shId, shipmentCost, CHARGE_SETTING)
        }
        else{
            console.log(`Skipping Cost Calculation : CustomerInvoiceType`)
        }
    } catch (e) {
        // console.log(e.stack)
        console.log(`Error adding shipment cost: ${e.message}`)
    }
    return 1
}

async function autoFillCharge(shId, chargeSetting) {
    let url = `${FRT_PUB_BASE_URL}/shipment-cost/v1/auto-fill/cost-detail?shipmentId=${shId}`
    let res = await rp({
        'uri': url,
        'method': 'POST',
        'headers': {
            'Authorization': TOKEN,
        },
        'body': chargeSetting,
        'json': true
    })

    if (res.status == 200) {
        return res.data
    }
    throw new Error(`error in autofill charge: ${res.error}`)
}

async function saveShipmentCost(shId, shipmentCost, chargeSetting) {
    let payload = {
        "shipmentCost": shipmentCost,
        "chargeSetting": chargeSetting
    }
    let url = `${FRT_PUB_BASE_URL}/shipment-cost/v1/cost?shipmentId=${shId}`
    let res = await rp({
        'uri': url,
        'method': 'POST',
        'headers': {
            'Authorization': TOKEN,
        },
        'body': payload,
        'json': true
    })
    console.log(`Save cost res ${res.status} : error ${res.error}`)
    if (res.status == 200) {
        return res.data
    }
    throw new Error(`error in create cost: ${res.error}`)

}

async function getShCostListForSh(shId) {
    let path = `${FRT_PUB_BASE_URL}/shipment-cost/v1/costs?shipmentId=${shId}`;
    try {
        let res = await rp({
            method: "GET",
            uri: path,
            json: true,
            headers: {
                "Content-Type": "application/json",
                Authorization: TOKEN,
            },
        });

        if (res.status === 200) {
            return res.data;
        }
    } catch (e) {
        console.log(`Error while getting shipment cost list : ${e.message}`);
        throw e
    }
    return [];
}

async function getFreightUnitByLineItemId(lineItemId) {
    let body = [lineItemId];
    let options = {
        method: "POST",
        uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/freight-units/by/linItemIds`,
        json: true,
        body: body,
        headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
        },
    };

    return rp(options)
        .then((result) => {
            if (result.status != 200) {
                console.log("Error in get freight unit " + result.error);
                return null;
            }
            return result.data[0];
        })
        .catch((e) => {
            console.log("Error in get freight unit " + e);
            return null;
        });
}

function checkShDelayedStatus(sh) {
    let lastStage = sh.shipmentStages[sh.shipmentStages.length - 1];
    if (lastStage?.arrivalTime && sh?.edd) {
        if (lastStage.arrivalTime > sh.edd) {
            return "Delayed"
        } else {
            return "On Time"
        }
    } else {
        return null
    }
}
