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
        throw e
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
    }
}


async function main() {
    if (sh.shipmentTrackingStatus == "Departed From Delivery Point") {
        let hasInternalMovement = false
        let hasLoadedTrip = false
        
        if (sh.customFields && Array.isArray(sh.customFields)) {
            for (let cf of sh.customFields) {
                if (cf.indexedValue && Array.isArray(cf.indexedValue)) {
                    if (cf.indexedValue[0] === "Trip Type_Internal Movement") {
                        hasInternalMovement = true
                    }
                    if (cf.indexedValue[0] === "Trip Load_loaded") {
                        hasLoadedTrip = true
                    }
                }
            }
        }
        if (hasInternalMovement && hasLoadedTrip) {
            let podStatus = false
            for (let cn of sh.consignments) {
                let pod = await ensurePod(cn.uuid, token)
                if (pod.status == "SUBMITTED") {
                    podStatus = true
                } else {
                    podStatus = false
                }
            }
            if (podStatus) {
                let stageId = null
                for (let stage of sh.shipmentStages) {
                    if (stage.tripPoint && stage.tripPoint.purpose === "Delivery") {
                        stageId = stage.uuid
                        break
                    }
                }
                await markShipmentComplete(sh.uuid, stageId, token)
            }
        }
    }
    return null
}

return await main()