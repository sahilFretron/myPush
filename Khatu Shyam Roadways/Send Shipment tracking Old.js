// QA url :     // let url = `https://api-staging.fareyeconnect.com/connector/v1/gps/ping`
// QA Token : "Bearer b346fa53-60eb-4c26-a21f-b39167de5576"

async function sendTrackingDetails(payload) {
    let url = `https://api-staging.fareyeconnect.com/setu/fretron/v1/gps-webhook`
    try {
        let res = await rp({
            method: "POST",
            uri: url,
            headers: {
                Authorization: "Bearer b346fa53-60eb-4c26-a21f-b39167de5576"
            },
            body: payload,
            json: true
        })
        console.log(`Sending tracking details api res : ${JSON.stringify(res)}`)
    } catch (e) {
        console.log(`Catched error sending tracking details : ${e.message}`)
    }
}

async function task(sh) {
    try {
        console.log(`ShNo : ${sh.shipmentNumber}`)
        let branchName = sh.branch?.name
        if (branchName?.trim() == "BKT TYRES") {
            let fleetInfo = sh?.fleetInfo
            let currentLocation = sh?.currentLocation
            let vehicleNo = fleetInfo?.vehicle?.vehicleRegistrationNumber ?? ""
            if (!currentLocation) {
                let shipmentStages = sh?.shipmentStages ?? []
                let currentStage = shipmentStages?.find(stage => ["AT", "UPCOMING"].includes(stage.status))
                currentLocation = currentStage?.tripPoint?.currentLocation
                if (!currentLocation) {
                    currentLocation = currentStage?.tripPoint?.currentGpsState?.endLocation
                }
            }
            let transporter = fleetInfo?.fleetOwner ?? fleetInfo?.broker ?? fleetInfo?.forwardingAgent
            let timestamp = currentLocation?.time ? moment(currentLocation?.time).format("YYYY-MM-DD HH:mm:ss") : ""
            console.log(`Epoch ${currentLocation?.time}, timestring : ${timestamp}`)
            let payload = [
                {
                    "vehicle_no": vehicleNo,
                    "latitude": currentLocation?.latitude,
                    "longitude": currentLocation?.longitude,
                    "timestamp": timestamp,
                    "speed": currentLocation?.speed,
                    "client_code": "TEST Carriers Pvt. Ltd.",
                    "transporter_name": transporter?.name,
                    "transporter_code": transporter?.externalId ?? "",
                    "vendor_code": transporter?.externalId ?? "",
                    "location": currentLocation?.address,
                    "battery_strength": 0,
                    "odometer_km": 0,
                    "timezone": "UTC+05:30",
                    "others": {}
                }
            ]
            console.log(`Payload : ${JSON.stringify(payload)}`)
            return await sendTrackingDetails(payload)
        } else {
            console.log(`Not sending shTracking details as Branch name is ${branchName}`)
        }
    } catch (e) {
        console.log(`Catched error : ${e.message}`)
    }
}

return await task($event)