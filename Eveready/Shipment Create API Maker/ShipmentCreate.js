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

const getShipmentSkeleton = () => ({
    "shipmentNumber": null,
    "consignments": [],
    "shipmentDate": null,
    "shipmentStages": [],
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
});

function validateDataFields(data) {
    const requiredFields = [
        "vehicleNumber",
        "transporterCode",
        "transporterName",
        "plantCode",
        "destinationCode",
        "shipmentDate",
        "driverName",
        "driverMobileNumber"
    ];

    const missingFields = requiredFields.filter(field => !data[field]);
    if (missingFields.length > 0) {
        console.error("Validation failed. Missing or invalid fields:", missingFields.join(", "));
        return false;
    }
    return true;
}

const getBPartnerByTpCode = async (transporterCode, sh) => {
    if (!transporterCode) {
        console.error("Missing transporterCode");
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
        return true;
    } catch (error) {
        console.error("Error in getBPartnerByTpCode:", error.message);
        return null;
    }
};

const populateShipmentStages = async (placeId, purpose, sh) => {
    if (!placeId || !purpose) {
        console.error("Invalid placeId, purpose");
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
        if (response[0] == null) {
            throw new Error(`Place data for ${purpose} not found`);
        }
        sh.shipmentStages.push({
            "hub": null,
            "place": response[0],
            "actualActivityStartTime": null,
            "status": null,
            "tripPoint": {
                "purpose": purpose
            },
            "eta": null
        })
        return true;
    } catch (error) {
        console.error("Error in getPlace:", error.message);
        return null;
    }
};


const createShipment = async (sh) => {
    if (!sh ) {
        console.error("Invalid shipment data");
        return null;
    }
    const apiUrl = `${baseApiUrl}/shipment/v1/shipment`;
    const options = {
        method: 'POST',
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        body: sh,
        json: true
    };
    try {
        const response = await request(options);
        if (response && response.status === 200) {
            // console.log("Shipment created successfully:", response);
            if (sh.fleetInfo.driver && sh.fleetInfo.driver.mobileNumber) {
                await sendConsent(sh.fleetInfo.driver.mobileNumber);
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

const sendConsent = async (mobileNumber) => {
    if (!mobileNumber) {
        console.error("Invalid mobile number for sending consent");
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
        } else {
            console.warn("Failed to send consent:", response);
        }
    } catch (error) {
        console.error("Error in sendConsent:", error.message);
    }
};

const setDetails = async (data, sh) => {
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
        name: data.driverName,
        mobileNumber: data.driverMobileNumber
    };
    sh.fleetInfo.device = {
        orgId: orgId,
        imei: data.driverMobileNumber
    };
    sh.fleetInfo.vehicle = {
        vehicleRegistrationNumber: data.vehicleNumber
    };
    const shNo = await createShipment(sh);
    return shNo
};

async function executeAllFunctions() {
    if (!validateDataFields(data)) {
        console.error("Data validation failed. Exiting process.");
        return;
    }

    try {
        if (!data || typeof data !== 'object') {
            throw new Error("Missing or invalid input data for executing functions");
        }
        const shipment = getShipmentSkeleton();        
        const plantPlace = await populateShipmentStages(data.plantCode, "Pickup", shipment);
        if (!plantPlace) {
            throw new Error("Failed to retrieve plantCode place information. Exiting process.");
        }   
        const destPlace = await populateShipmentStages(data.destinationCode, "Delivery", shipment)
        if (!destPlace) {
            throw new Error("Failed to retrieve destinationCode place information. Exiting process.");
        }   
        const bPartner = await getBPartnerByTpCode(data.transporterCode, shipment)
        if (!bPartner) {
            throw new Error("Failed to retrieve Business Partner. Exiting process.");
        }   
        const shNo = await setDetails(data, shipment);
        return shNo
    } catch (error) {
        console.error("Error executing function:", error.message);
    }
}

executeAllFunctions().then(shipmentNumber => {
    if (shipmentNumber) {
        console.log("Shipment Number:", shipmentNumber);
    } else {
        console.warn("Failed to create shipment.");
    }
});
