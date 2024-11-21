const rp = require("request-promise");
const baseApiUrl = `https://apis.fretron.com`
const createShApiUrl = `${baseApiUrl}/shipment/v1/shipment/with/consignments`;
const TOKEN = ""

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

async function sendShipmentRequest(TOKEN, shipment) {
  let mappedShipment = {
    shipment: {
      shipmentNumber: null,
      consignments: [],
      shipmentDate: new Date().setHours(0, 0, 0, 0),
      shipmentStages: [
        {
          arrivalTime: Date.now(),
          hub: shipment.shipmentStages?.[shipment.shipmentStages.length - 1]?.hub || null,
          place: null,
          actualActivityStartTime: null,
          status: null,
          tripPoint: {
            purpose: "Pickup"
          }
        }
      ],
      fleetInfo: shipment.fleetInfo,
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
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

sendShipmentRequest(TOKEN, shipment);
