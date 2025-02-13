const TOKEN = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzkxNzgxODAsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiJjYTExMmFlNi1iNzA3LTRmYTctOWUyYi0yMzk5ZGIxMTBkODIiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.8v_jyRDjPlFpTq-KsWnaeWZ0Hck8G0bKrz0xpEH66bg"
const FRT_PUB_API_URL = "https://apis.fretron.com"
import rp from "request-promise";

async function reloadPendingConsentShipments() {
    try {
        const url = `${FRT_PUB_API_URL}/shipment-view/shipments/v1`;
        const filters = {
            deviceStatus: ["PENDING"],
            __version: 2
        };

        const options = {
            method: "GET",
            uri: `${url}?filters=${encodeURIComponent(JSON.stringify(filters))}`,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        };

        let res = await rp(options);
        if(res.length > 0){
            return res;
        }else{
            return [];
        }
    } catch (error) {
        console.error("Error fetching pending consent shipments:", error);
        throw error;
    }
}

async function getShipmentDetails(shipmentId) {
    try {
        const options = {
            method: "GET",
            uri: `${FRT_PUB_API_URL}/shipment/v1/shipment/${shipmentId}?skipCn=true`,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        };

        let res = await rp(options);
        if(res.status === 200){
            return res;
        }else{
            return [];
        }

    } catch (error) {
        console.error("Error fetching shipment details:", error);
        throw error;
    }
}

try {
    const pendingConsentShipments = await reloadPendingConsentShipments();
    if(pendingConsentShipments.length > 0){
        for(let i = 0; i < pendingConsentShipments.length; i++){
            let shipmentId = pendingConsentShipments[i].uuid;
            let shipmentDetails = await getShipmentDetails(shipmentId);
            console.log(shipmentDetails.shipment.number);
        }
    }
} catch (error) {
    console.error("Error:", error);
}