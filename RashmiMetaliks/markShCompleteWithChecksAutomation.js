let sh = $event
// let FRT_BASE_URL = "https://apis.fretron.com"
// let token = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzcxMjI3NTMsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiIzMjE4ODdiNi04ZjQzLTQyOTktOGI3NS00N2QzZWQwMzlkNGUiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.b4X2RnnXu-NsQ7m6FGYBBF1FyhcQSu_K4Vpq1qWwj9U"
// import rp from "request-promise"

async function ensurePod(cnId, token) {
    try {
        let res = await rp({
            "uri": `${FRT_BASE_URL}/pod/v1/action/ensure-pod?consignmentId=${cnId}`,
            "method": `GET`,
            "json": true,
            headers: { Authorization: token }
        })
        if (res.status == 200) {
            return res.data
        } else {
            console.log(`Some error in ensuring pod ${cnId}: ${res.error}`)
            throw new Error(res.error)
        }
    } catch (e) {
        console.log(`Catched error in getting pod object: ${e.message}`)
        return null
    }
}

async function markShipmentComplete(shId, stageId, token) {
    try {
        let url = `${FRT_BASE_URL}/shipment/v1/shipment/bulk/sync`
        let payload = {
            "shipmentId": shId,
            "updates": [
                {
                    "keyToUpdate": "markcomplete",
                    "updatedValue": Date.now(),
                    "stageId": stageId
                }
            ]
        }
        let res = await rp({
            uri: url,
            method: "POST",
            body: payload,
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            json: true
        })
        console.log(`Mark shipment complete API response: ${JSON.stringify(res)}`)
        return res
    } catch (e) {
        console.log(`Error in marking shipment complete: ${e.message}`)
        return null
    }
}

function isInternalMovementLoadedTrip(customFields) {
    if (!customFields?.length) return false
    
    let hasInternalMovement = false
    let hasLoadedTrip = false
    
    for (let cf of customFields) {
        if (!cf.indexedValue?.length) continue
        const value = cf.indexedValue[0]
        
        if (value === "Trip Type_Internal Movement") hasInternalMovement = true
        if (value === "Trip Load_loaded") hasLoadedTrip = true
    }
    
    return hasInternalMovement && hasLoadedTrip
}

async function areAllPodsSubmitted(consignments, token) {
    for (let cn of consignments) {
        const pod = await ensurePod(cn.uuid, token)
        if (pod.status !== "SUBMITTED") return false
    }
    return true
}

function getDeliveryStageId(stages) {
    for (let stage of stages) {
        if (stage.tripPoint?.purpose === "Delivery") {
            return stage.uuid
        }
    }
    return null
}

async function main() {
    if (sh.shipmentTrackingStatus !== "Departed From Delivery Point") {
        console.log(`Shipment's Status is ${sh.shipmentTrackingStatus}`)
        return null
    }

    if (!isInternalMovementLoadedTrip(sh.customFields)) {
        console.log(`Shipment's custom fields are not valid`)
        return null
    }

    if (!await areAllPodsSubmitted(sh.consignments, token)) {
        console.log(`Not all pods are submitted`)
        return null
    }

    const stageId = getDeliveryStageId(sh.shipmentStages)
    if (stageId) {
        console.log(`Marking shipment complete`)
        return await markShipmentComplete(sh.uuid, stageId, token)
    }

    return null
}

return await main()