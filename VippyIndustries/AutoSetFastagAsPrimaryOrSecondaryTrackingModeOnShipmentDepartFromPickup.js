const TOKEN = ""
const sh = $event

async function setFastagAsPrimary(shId) {
    try {
        let options = {
            uri: `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${shId}/switch-tracking/FASTAG`,
            method: "POST",
            headers: {
                "Authorization": TOKEN
            },
            body: {},
            json: true
        }
        let res = await rp(options)
        if (res.status != 200) {
            throw new Error(`${res.error}`)
        }
    } catch (e) {
        throw new Error(`Error Setting FASTAG as Primary Tracking Mode: ${e.message} `)
    }
}

async function setFastagAsSecondary(shId) {
    try {
        let options = {
            uri: `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`,
            method: "POST",
            headers: {
                "Authorization": TOKEN
            },
            body: {
                "shipmentId": shId,
                "updates": [
                    {
                        "keyToUpdate": "trackingvalue",
                        "updatedValue": "FASTAG",
                        "isLbs": true
                    }
                ]
            },
            json: true
        }
        let res = await rp(options)
        if (res.status != 200) {
            throw new Error(`${res.error}`)
        }
    } catch (e) {
        throw new Error(`Error Setting FASTAG as Secondary Tracking Mode: ${e.message} `)
    }
}

try {
    if (sh.fleetInfo.trackingMode == "MANUAL") {
        if (sh.fleetInfo.lbsNumber == null) {
            await setFastagAsPrimary(sh.uuid)
            console.log("Fastag Set as Primary")
        }
        else {
            console.log(`Manual with LBS : ${sh.fleetInfo.lbsNumber} - not processing `)
        }

    } else if (sh.fleetInfo.trackingMode == "FASTAG") {
        console.log("Already FASTAG as Primary")
    } else {
        await setFastagAsSecondary(sh.uuid)
        console.log("Fastag Set as Secondary")
    }
} catch (e) {
    console.log(e)
}