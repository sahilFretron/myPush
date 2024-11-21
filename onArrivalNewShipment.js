const rp = require("request-promise");
const baseApiUrl = `https://apis.fretron.com`
const syncApiUrl = `${baseApiUrl}/shipment/v1/shipment/bulk/sync`;
const createShApiUrl = `${baseApiUrl}/shipment/v1/shipment/with/consignments`;
const TOKEN = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIwODUwNTQsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiI0OTViODcyOC1jNzYxLTRmYTctODNmZS1kYjc1YTdkNjMyMjEiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.T6-8I8NS-IO2q9d8FoAZ6U-q6uwkqQLTsItZZ1_0x3E"

async function validateMappedShipment(mappedShipment) {
    if (!mappedShipment || !mappedShipment.shipment) {
        throw new Error("Shipment object is missing.");
    }
    if (!mappedShipment.shipment.shipmentStages || mappedShipment.shipment.shipmentStages.length === 0 || !mappedShipment.shipment.shipmentStages[0].hub) {
        throw new Error("Shipment stages must have at least one stage with a valid hub.");
    }
    if (!mappedShipment.shipment.fleetInfo || Object.keys(mappedShipment.shipment.fleetInfo).length === 0) {
        throw new Error("Fleet information is missing.");
    }

    return true;
}

async function markAsArrived(shId, shStageId, TOKEN) {
    let body = {
      shipmentId: shId,
      updates: [
        {
          keyToUpdate: "arrivalTime",
          updatedValue: Date.now(),
          stageId: shStageId
        }
      ]
    };
  
    let options = {
      method: 'POST',
      uri: syncApiUrl,
      headers: {
        'Authorization': TOKEN
      },
      body: body,
      json: true
    };
  
    try {
      let response = await rp(options);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

async function sendShipmentRequest(TOKEN, deliverySh) {
    let mappedShipment = {
        shipment: {
            shipmentNumber: null,
            consignments: [],
            shipmentDate: new Date().setHours(0, 0, 0, 0),
            shipmentStages: [
                {
                    hub: deliverySh.shipmentStages?.[deliverySh.shipmentStages.length - 1]?.hub || null,
                    place: null,
                    actualActivityStartTime: null,
                    status: null,
                    tripPoint: {
                        purpose: "Pickup"
                    }
                }
            ],
            fleetInfo: deliverySh.fleetInfo,
            edd: null,
            shipmentStatus: "Planned",
            shipmentTrackingStatus: "At Pickup Point",
            transportationMode: "ByRoad",
            shipmentType: "DirectLeg",
            customFields: [],
            uuid: null,
            branch: null,
            originalEdd: null
        },
        consignments: []
    };

    try {
        await validateMappedShipment(mappedShipment);

        let options = {
            method: "POST",
            uri: createShApiUrl,
            headers: {
                "Authorization": TOKEN
            },
            body: mappedShipment,
            json: true
        };

        let response = await rp(options);
        await markAsArrived(response.data.uuid, response.data.shipmentStages[0].uuid, TOKEN)
        console.log("Response:", response);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

sendShipmentRequest(TOKEN, shipment);
