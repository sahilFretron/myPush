let token = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzMxMjAyOTksInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiMjA4YWZkYWQtZGVhYi00Yzc2LThkNDktMzBhNzBmNDIwZjM1IiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.p4j4acI9MBIjnTn-xWcgJlvIaZdzTbs4d4-_n84wdaQ"
let sh = $event

async function markShipmentActive(shId, token) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/admin/shipment/${shId}/mark?isActive=true`
        let res = await rp({
            uri: url,
            method: "GET",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            json: true
        })
        console.log(`Mark shipment active API response: ${res.status}`)
        return res
    } catch (e) {
        console.log(`Error in marking shipment active: ${e.message}`)
        return null
    }
}

// return await markShipmentActive(sh.uuid, token)