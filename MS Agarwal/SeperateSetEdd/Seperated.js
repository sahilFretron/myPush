const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTEwMTkzMTYsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiZjE5NTU3NWQtOGIxYi00ZDRiLTgzYTAtMjdlYzgxMTE5Mzk2IiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.RKE4mNlU9bqfS7wSLhvfDp4HJXZCoX7oHv8gUwk3XYU";

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

async function calculateEdd(shipment, token) {
    try {
        let totalKm = 0
        if (!totalKm) { totalKm = await calculateTotalDistanceViaShStages(shipment) }
        console.log(`Total KM Calculated- ${totalKm}`)
        if (totalKm) { await setEdd(shipment, totalKm, token); }
    } catch (e) {
        console.log(`Catched error in calculating edd: ${e.message}`)
    }
    return "Done"
}

async function main(event) {
    try {
        let token = TOKEN;

        let shId = event?.body?.shipmentId;
        let shipment = null;
        if (!shId) {
            shipment = event.body.shipment;
        } else {
            shipment = await getShWithCn(shId, token);
        }
        if (shipment) {
            await calculateEdd(shipment, token)
        } else {
            throw new Error("Sh Not Found")
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
    let res = await main($event)
    return { "status": 200, "data": "Edd Updated Successfully", "error": null }
} catch (e) {
    console.log("Error " + e.message)
    return { "status": 400, "data": null, "error": e.message }
}