
const TOKEN = ""
const PRICE_ID = "182f840f-8a96-404b-ac5d-6b2dbfea615d"


try {
    let sh = $event
    let shStages = sh.shipmentStages ?? []
    if (shStages.length > 1) {
        if (shStages[0].status == "COMPLETED" && shStages[1].status == "UPCOMING") {
            await calculateEdd(sh)
            await callAPIMaker(sh.uuid)
        } else if (shStages[0].status == "AT") {
            await callCreateDiApiMaker(sh.uuid, TOKEN)
        } else {
            console.log(`shStages Status : ${shStages.map(it => it.status)}`)
        }

    } else {
        console.log(`shStages Status : ${shStages.map(it => it.status)}`)
    }
} catch (e) {
    console.log(`Catched error : ${e.message}`)
}

async function calculateEdd(sh) {
    let originalEdd = sh.edd ?? sh.originalEdd
    let lastDeliveryStage = _.last(sh.shipmentStages?.filter(stage => stage.tripPoint.purpose == "Delivery"))

    let destinationHub = (lastDeliveryStage?.place?.name ?? lastDeliveryStage?.hub?.name)?.split(",")?.[0] ?? ""
    let destinationState = (lastDeliveryStage?.place?.name ?? lastDeliveryStage?.hub?.name)?.split(",")?.[1] ?? ""

    let conditionFiltes = [
        {
            "key": "destinationHub",
            "values": [destinationHub]
        },
        {
            "key": "destinationState",
            "values": [destinationState, "ANY_VALUE"]
        }
    ]

    let condRecords = await getConditionRecords(conditionFiltes, PRICE_ID)

    if (condRecords.length) {
        let record = condRecords[0]

        let transitDays = record?.chargeTypes?.find(charge => charge.name == "Transit Time Days")?.amount ?? 0
        let edd = _.first(sh.shipmentStages)?.departureTime + Number(transitDays) * 24 * 60 * 60 * 1000

        if (originalEdd && edd == originalEdd) {
            console.log(`No need to update edd already updated`)
            return "No need to update edd already updated"
        }
        let eddPayload = {
            "shipmentId": sh.uuid,
            "updates": [
                {
                    "keyToUpdate": "edd",
                    "updatedValue": edd,
                    "stageId": _.last(sh.shipmentStages).uuid
                }
            ]
        }
        await bulkSync(eddPayload)

    } else {
        console.log(`Condition not found - ${JSON.stringify(condRecords)}`)
    }
    return "Done"
}

async function bulkSync(eddPayload) {

    let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`
    let res = await rp({
        url: url,
        json: true,
        method: "POST",
        body: eddPayload,
        headers: {
            Authorization: TOKEN
        }
    });

    console.log(`Bulk Sync response status - ${res.status} and error ${res.error}`)
    return res.data
}

async function getConditionRecords(filters, freightId) {
    try {
        let traceID = `opil_${Date.now()}`
        console.log("TraceId " + traceID)
        let url = `${FRT_PUB_BASE_URL}/freight-pricing/v1/price/conditions?freightId=${freightId}&filters=${JSON.stringify(filters)}`
        return await rp({
            url: url,
            method: "GET",
            json: true,
            headers: { Authorization: TOKEN, "traceID": traceID }
        }).then((_) => {
            if (_.status === 200) {
                return _.data
            }
            return []
        }).catch((err) => {
            console.log(`error getting order - ${err}`)
            return []
        })

    } catch (err) {
        console.log(`Error getting charge- ${err.message}`)
    }
}

// Ensure Detention on Shipment
async function callAPIMaker(shipmentId) {
    let res = await rp({
        uri: FRT_PUB_BASE_URL + "/automate/autoapi/run/6dfc2c06-0a60-4ccc-b5ed-32f5c499fbee",
        "method": "POST",
        json: true,
        body: {
            shipmentId,
        }
    })

    return res
}

// create DI Api Maker
async function callCreateDiApiMaker(shipmentId, token){
    let res = await rp({
        uri: FRT_PUB_BASE_URL + "/automate/autoapi/run/269936eb-a9c0-410d-8c80-065693dfb917",
        "method": "POST",
        json: true,
        body: {
            shipmentId,
        }
    })

    return res
}