const rp = require("request-promise");

async function getFreightUnitByLineItemId(lineItemIds, token) {
    let options = {
        url: `https://apis.fretron.com/order-manager-v2/freight-units/v1/freight-units/by/linItemIds`,
        method: "POST",
        json:true,
        body: lineItemIds,
        headers: {
            "Content-Type": `application/json`,
            "Authorization": token,
        }
    }
    try {
        const response = await rp(options);
        if (response.status != 200) {
            console.log("Error in get freight unit: " + response.error)
            return null
        }
        return response.data[0];
    } catch (e) {
        console.log("Error in get freight unit " + e.message);
        return null;
    }
}

const lineItemIds = ["7d98e3d0-730f-4b8f-bb81-8e0d75afa1a5"];
const token = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzgyMTQ4NDgsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiJjYTExMmFlNi1iNzA3LTRmYTctOWUyYi0yMzk5ZGIxMTBkODIiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.u-qpXxPHsA-QsfufQehUcUqNLW6m3Jb7HpbiswXfUGw"
getFreightUnitByLineItemId(lineItemIds, token)
    .then(data => console.log("Freight Unit:", data))
    .catch(err => console.error("API Error:", err));