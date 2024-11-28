// const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzI3NzA5NjQsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiJlOTBlOTI3My0xNGNjLTRlNzMtOWM4ZS0wOTlkZmMxNWNjN2IiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.90kA2GDEJSjfSHeC14EpaLEWz274DWyvTV3V4aSBYfE';
// const orgId = 'e90e9273-14cc-4e73-9c8e-099dfc15cc7b'
const FRT_PUB_BASE_URL = "https://apis.fretron.com"
const rp = require('request-promise')
const moment = require('moment');


const requestBody = {
    "vehicleNumber": "DL8SDK1212", // Subjected to update
    "transporterCode": "3014", // Subjected to update
    "transporterName": "SAHILTEST",// Subjected to update
    "plantCode": "3012",
    "destinationCode": "3013",
    "shipmentDate": "27-11-2024",
    "driverName": "SAHILDRIIIIVER", // Subjected to update
    "driverMobileNumber": "7056070569", // Subjected to update
    "foNumber": "TEST2EXT"
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
        "vehicleNumber",// Subjected to update
        "transporterCode", // Subjected to update
        "transporterName",// Subjected to update
        "plantCode",
        "destinationCode",
        "shipmentDate",
        "driverName", // Subjected to update
        "driverMobileNumber", // Subjected to update
        "foNumber"
    ];

    const missingFields = requiredFields.filter(field => !data[field]);
    if (missingFields.length > 0) {
        console.log("Validation failed. Missing or invalid fields:", missingFields.join(", "));
        return false;
    }
    return true;
}

const populateBPartner = async (transporterCode, sh) => {
    if (!transporterCode) {
        console.log("Missing transporterCode");
        return null;
    }
    const apiUrl = `${FRT_PUB_BASE_URL}/business-partners/v2/partner/by-name/ext-id/comp-code?externalId=${transporterCode}`;
    const options = {
        method: 'GET',
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };
    try {
        const response = await rp(options);
        if (response.status == 200 && response.data  != null) {
            sh.fleetInfo.fleetOwner = response.data;
        } else {
            console.log("No BP data found" + response.error);
        }
        return true;
    } catch (error) {
        console.log("Error in getBPartnerByTpCode:", error.message);
        return null;
    }
};

const populateShipmentStages = async (placeId, purpose, sh) => {
    if (!placeId || !purpose) {
        console.log("Invalid placeId, purpose");
        return null;
    }
    const apiUrl = `${FRT_PUB_BASE_URL}/business-partners/v2/partner/by-name/ext-id/comp-code?externalId=${placeId}`;
    const options = {
        method: 'GET',
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };
    try {
        const response = await rp(options);
        if (response.status == 200 && response.data != null && response.data.places[0]) {
            sh.shipmentStages.push({
                "hub": null,
                "place": response.data.places[0],
                "actualActivityStartTime": null,
                "status": null,
                "tripPoint": {
                    "purpose": purpose
                },
                "eta": null
            })
            return true;
        } else {
            throw new Error(`Place data for ${purpose} not found`);
        }
    } catch (error) {
        console.log(`Error in getting Business Partner with ${purpose}:`, error.message);
        return null;
    }
};

const createShipment = async (sh) => {
    if (!sh) {
        console.log("Invalid shipment data");
        return null;
    }
    const apiUrl = `${FRT_PUB_BASE_URL}/shipment/v1/shipment`;
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
        const response = await rp(options);
        if (response && response.status === 200) {
            if (sh.fleetInfo.driver && sh.fleetInfo.driver.mobileNumber) {
                await sendConsent(sh.fleetInfo.driver.mobileNumber, sh.uuid);
            } else {
                console.log("Driver mobile number missing, consent not sent.");
            }
            return response.data.shipmentNumber
        } else {
            console.log("Failed to create shipment:", response);
        }
    } catch (error) {
        console.log("Error in createShipment:", error.message);
    }
};

const sendConsent = async (mobileNumber, referenceId) => {
    if (!mobileNumber) {
        console.log("Invalid mobile number for sending consent");
        return;
    }
    const apiUrl = `${FRT_PUB_BASE_URL}/lbs-manager/v1/lbs-consent/consent?number=${mobileNumber}&referenceResourceId=${referenceId}&resourceId=${referenceId}`;
    const options = {
        method: 'GET',
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };
    try {
        const response = await rp(options);
        if (response && response.status === 200) {
        } else {
            console.log("Failed to send consent:", response);
        }
    } catch (error) {
        console.log("Error in sendConsent:", error.message);
    }
};

const setDetails = async (data, sh) => {
    if (!data || typeof data !== 'object') {
        console.log("Invalid data for setting details");
        return null;
    }
    const date = moment(data.shipmentDate, 'DD-MM-YYYY');
    if (!date.isValid()) {
        console.log("Invalid shipment date format");
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
    sh.shipmentNumber = data.foNumber
    sh.externalShipmentId = data.foNumber

    const shNo = await createShipment(sh);
    return shNo
};

const getShByExtId = async (extId) => {
    const apiUrl = `${FRT_PUB_BASE_URL}/shipment/v1/admin/shipmentbyexternalId?orgUuid=${orgId}&externalId=${extId}`
    const options = {
        method: "GET",
        uri: apiUrl,
        json: true
    };
    try {
        let res = await rp(options)
        if (res.status == 200) {
            return res.data
        } else {
            console.log(`Shipment with ${extId} not Found`)
        }
    } catch (error) {
        console.log(`Some Error while getting Shipment by Ext ID`, error.message)
        throw error
    }
}

const populateUpdatedFields = async (sh, payload) => {
    if (!sh.fleetInfo) throw new Error("fleetInfo is missing in the Shipment object.");
    if (!sh.fleetInfo.vehicle) throw new Error("Vehicle information is missing in fleetInfo.");
    if (!sh.fleetInfo.fleetOwner) throw new Error("Broker information is missing in fleetInfo.");
    if (!sh.fleetInfo.driver) throw new Error("Driver information is missing in fleetInfo.");

    const updateMappings = [
        { source: payload.vehicleNumber, target: sh.fleetInfo.vehicle, key: 'vehicleRegistrationNumber' },
        { source: payload.transporterCode, target: sh.fleetInfo.fleetOwner, key: 'externalId' },
        { source: payload.transporterName, target: sh.fleetInfo.fleetOwner, key: 'name' },
        { source: payload.driverName, target: sh.fleetInfo.driver, key: 'name' },
        { source: payload.driverMobileNumber, target: sh.fleetInfo.driver, key: 'mobileNumber' }
    ];

    let isToBeUpdated = false;
    const updatedFields = [];

    updateMappings.forEach(({ source, target, key }) => {
        if (source !== undefined && target?.[key] !== source) {
            updatedFields.push({ field: key, oldValue: target[key], newValue: source });
            target[key] = source;
            isToBeUpdated = true;
        }
    });
    if (updatedFields.length) {
        console.log("Updated Fields:", updatedFields);
    } else {
        console.log("No Fields to Update")
    }
    return isToBeUpdated;
};

const updateShipment = async (sh) => {
    const apiUrl = `${FRT_PUB_BASE_URL}/shipment/v1/admin/shipment`
    const options = {
        method: "PUT",
        uri: apiUrl,
        headers: {
            "Authorization": TOKEN
        },
        body: sh,
        json: true
    };
    try {
        let res = await rp(options)
        if (res.status == 200) {
            return res.data.shipmentNumber
        } else {
            console.log(`Shipment with ${extId} not Found`)
        }
    } catch (error) {
        console.log(`Some Error while updating Shipment by Ext ID`, error.message)
        throw error
    }
};

async function executeAllFunctions() {
    let data = null;
    let status = 400;
    let error = null;

    try {

        if (!requestBody || typeof requestBody !== 'object') {
            throw new Error("Invalid HTTP request method - please use POST and send payload");
        }
        if (!validateDataFields(requestBody)) {
            throw new Error("Data validation failed. Exiting process.");
        }
        // TODO get shipment by externalId
        const existingShByExtId = await getShByExtId(requestBody.foNumber)
        if (existingShByExtId) {
            let isToBeUpdated = await populateUpdatedFields(existingShByExtId, requestBody)
            if (isToBeUpdated) {
                const shNo = await updateShipment(existingShByExtId)
                if (shNo) {
                    data = shNo;
                    status = 200;
                } else {
                    throw new Error("Failed to Update shipment.");
                }
            } else {
                console.log("Shipment Already Exists with Provided Field Values")
            }
        } else {
            const shipment = getShipmentSkeleton();
            const isPlantPlacePopulated = await populateShipmentStages(requestBody.plantCode, "Pickup", shipment);
            if (!isPlantPlacePopulated) {
                throw new Error("Failed to retrieve plantCode place information");
            }
            const isDestPlacePopulated = await populateShipmentStages(requestBody.destinationCode, "Delivery", shipment)
            if (!isDestPlacePopulated) {
                throw new Error("Failed to retrieve destinationCode place information");
            }
            const isBPartnerPopulated = await populateBPartner(requestBody.transporterCode, shipment)
            if (!isBPartnerPopulated) {
                throw new Error("Failed to retrieve Business Partner");
            }
            const shNo = await setDetails(requestBody, shipment);
            if (shNo) {
                data = shNo;
                status = 200;
            } else {
                throw new Error("Failed to create shipment.");
            }
        }
        return { data: data, error: error, status: status }
    } catch (error) {
        console.log("Error executing function:", error.message);
        return { data: null, error: error.message, status: 400 }
    }
}

executeAllFunctions()