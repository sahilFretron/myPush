const request = require('request-promise');
const moment = require('moment');

const baseApiUrl = 'https://apis.fretron.com';
const TOKEN = '';
const orgId = 'e90e9273-14cc-4e73-9c8e-099dfc15cc7b'

const data = {
    "vehicleNumber": "RJ07EF1234",
    "transporterCode": "SAHILLLLLL",
    "transporterName": "SAHIL",
    "plantCode": "gurugramtest",
    "destinationCode": "gurugramtest1",
    "shipmentDate": "07-11-2024",
    "driverName": "SAHIL",
    "driverMobileNumber": "8591483735"
}

var sh = {
    "shipmentNumber": null,
    "consignments": [],
    "shipmentDate": null,
    "shipmentStages": [
        {
            "hub": {},
            "place": null,
            "actualActivityStartTime": null,
            "status": null,
            "tripPoint": {
                "purpose": "Pickup"
            }
        },
        {
            "hub": {},
            "place": null,
            "actualActivityStartTime": null,
            "tripPoint": {
                "purpose": "Delivery"
            },
            "status": null,
            "eta": null
        }
    ],
    "fleetInfo": {
        "device": {
            "imei": null,
            "type": "lbs",
            "orgId": null,
        },
        "lbsNumber": null,
        "trackingMode": "VTS-LBS",
        "vehicle": {
            "vehicleRegistrationNumber": null,
            "vehicleType": null
        },
        "driver": {
            "name": null,
            "mobileNumber": null,
            "dlNumber": null
        },
        "fleetOwner": {},
        "fleetType": "Market",
        "forwardingAgent": null
    },
    "edd": null,
    "shipmentStatus": "Planned",
    "transportationMode": "ByRoad",
    "shipmentType": "DirectLeg",
    "customFields": [],
    "uuid": null,
    "branch": null,
    "originalEdd": null
}

const getBPartnerByTpCode = async (transporterCode, TOKEN) => {
    if (!transporterCode || !TOKEN) {
        console.error("Missing transporterCode or TOKEN");
        return null;
    }
    const apiUrl = `${baseApiUrl}/business-partners/v2/partner/by-name/ext-id/comp-code?externalId=${transporterCode}`;
    const options = {
        method: 'GET',
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };
    try {
        const response = await request(options);
        if (response && typeof response === 'object') {
            sh.fleetInfo.fleetOwner = response.data ;
        } else {
            console.warn("No response data found, setting default partner info.");
        }
        return sh;
    } catch (error) {
        console.error("Error in getBPartnerByTpCode:", error.message);
        return null;
    }
};

const getPlace = async (placeId, stageIndex, TOKEN) => {
    if (!placeId || isNaN(stageIndex) || !TOKEN) {
        console.error("Invalid placeId, stageIndex, or TOKEN");
        return null;
    }
    let filters = encodeURIComponent(JSON.stringify({ "externalId.keyword": [placeId] }));
    const apiUrl = `${baseApiUrl}/shipment-view/places/page/places?filters=${filters}`;
    const options = {
        method: 'GET',
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };
    try {
        const response = await request(options);
        if (response && sh.shipmentStages) {
            sh.shipmentStages[stageIndex].place = response[0] ;
            // console.log("Updated PLACE at index", stageIndex);
        } else {
            console.warn(`Invalid stage index or no data found for placeId: ${placeId}`);
        }
        // console.log(JSON.stringify(sh));
    } catch (error) {
        console.error("Error in getPlace:", error.message);
        return null;
    }
};

const createShipment = async (shipment, TOKEN) => {
    if (!shipment || !TOKEN) {
        console.error("Invalid shipment data or TOKEN");
        return null;
    }
    const apiUrl = `${baseApiUrl}/shipment/v1/shipment`;
    const options = {
        method: 'POST',
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        body: shipment,
        json: true
    };
    try {
        const response = await request(options);
        if (response && response.status === 200) {
            // console.log("Shipment created successfully:", response);
            if (sh.fleetInfo.driver && sh.fleetInfo.driver.mobileNumber) {
                await sendConsent(sh.fleetInfo.driver.mobileNumber, TOKEN);
            } else {
                console.warn("Driver mobile number missing, consent not sent.");
            }
            return response.data.shipmentNumber
        } else {
            console.warn("Failed to create shipment:", response);
        }
    } catch (error) {
        console.error("Error in createShipment:", error.message);
    }
};

const sendConsent = async (mobileNumber, TOKEN) => {
    if (!mobileNumber || !TOKEN) {
        console.error("Invalid mobile number or TOKEN for sending consent");
        return;
    }
    const apiUrl = `${baseApiUrl}/lbs-manager/v1/lbs-consent/consent?number=${mobileNumber}&referenceResourceId=shipment-creation`;
    const options = {
        method: 'GET',
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };
    try {
        const response = await request(options);
        if (response && response.status === 200) {
            // console.log("Consent sent successfully:", JSON.stringify(response));
        } else {
            console.warn("Failed to send consent:", response);
        }
    } catch (error) {
        console.error("Error in sendConsent:", error.message);
    }
};

const setDetails = async (data) => {
    if (!data || typeof data !== 'object') {
        console.error("Invalid data for setting details");
        return null;
    }
    const date = moment(data.shipmentDate, 'DD-MM-YYYY');
    if (!date.isValid()) {
        console.error("Invalid shipment date format");
        return null;
    }
    sh.shipmentDate = date.valueOf();
    sh.fleetInfo.driver = {
        name: data.driverName || "Unknown Driver",
        mobileNumber: data.driverMobileNumber || "Unknown Mobile"
    };
    sh.fleetInfo.device = {
        orgId: orgId || "Unknown Org ID",
        imei: data.driverMobileNumber || "Unknown IMEI"
    };
    sh.fleetInfo.vehicle = {
        vehicleRegistrationNumber: data.vehicleNumber || "Unknown Vehicle Number"
    };
    const shNo = await createShipment(sh, TOKEN);
    return shNo
};

async function executeAllFunctions() {
    try {
        if (!data || typeof data !== 'object') {
            throw new Error("Missing or invalid input data for executing functions");
        }

        const results = await Promise.all([
            getPlace(data.plantCode, 0, TOKEN),
            getPlace(data.destinationCode, 1, TOKEN),
            getBPartnerByTpCode(data.transporterCode, TOKEN),
        ]);

        if (results.some(result => result === null)) {
            console.warn("One or more API calls failed.");
            return;
        }
        const shNo = await setDetails(data);
        return shNo
    } catch (error) {
        console.error("Error executing functions:", error.message);
    }
}

executeAllFunctions().then(shipmentNumber => {
    if (shipmentNumber) {
        console.log("Shipment Number:", shipmentNumber);
    } else {
        console.warn("Failed to create shipment.");
    }
});



