const TOKEN = '';
const orgId = '977ed31c-d791-4493-b5aa-0b683247f95d'

const requestBody = $event.body

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

const getBpSkeleton = () => (
    {
        "geoFence": null,
        "documents": [],
        "customFields": [],
        "isPortalEnabled": false,
        "type": "vendor",
        "updates": null,
        "uuid": null,
        "orgId": null,
        "firmType": "INDIVISUAL",
        "gstn": null,
        "voterId": null,
        "verificationTicketId": null,
        "companyCodes": null,
        "group": {
            "name": "lorryOwner",
            "partnerType": "vendor",
            "uuid": "dc04a4d6-2f34-464b-9000-bba5574cc56e",
            "orgId": "977ed31c-d791-4493-b5aa-0b683247f95d"
        },
        "address": "{\"address\":null,\"city\":null,\"state\":null,\"pincode\":null}",
        "verificationStatus": null,
        "externalId": null,
        "panNumber": null,
        "aadharNo": null,
        "parentId": null,
        "places": [],
        "route": null,
        "name": "SAHIL",
        "location": null,
        "fretronId": null,
        "contacts": null,
        "status": null
    }
);

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
        "foNumber",
        "meansOfTransportDescription"
    ];

    const missingFields = requiredFields.filter(field => !data[field] || data[field] == "null" || data[field] == "undefined");
    if (missingFields.length > 0) {
        console.log("Validation failed. Missing or invalid fields: " + missingFields.join(", "));
        throw new Error(`Validation failed. Missing or invalid fields: ${missingFields.join(", ")}`)
    }
}

const createBp = async (extId, tName) => {
    let partner = getBpSkeleton()
    partner.externalId = extId
    partner.name = tName
    try {
        let options = {
            method: 'POST',
            uri: `${FRT_PUB_BASE_URL}/business-partners/v2/partner`,
            headers: {
                "Authorization": TOKEN
            },
            body: partner,
            json: true
        }
        let res = await rp(options)
        if (res.data && res.status == 200) {
            return res.data
        } else {
            console.log("Error Creating BPartner: " + res.error)
        }
    } catch (error) {
        throw new Error("Business Partner Not Created")
    }
}

const populateBPartner = async (transporterCode, transporterName, sh) => {
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
        if (response.data != null && response.status == 200) {
            if (response.data.name == null) response.data.name = transporterName
            sh.fleetInfo.fleetOwner = response.data;
        } else {
            console.log(`No BP Found with ${transporterCode}, Creating new BP `);
            let newBp = await createBp(transporterCode, transporterName)
            if (newBp) sh.fleetInfo.fleetOwner = newBp
            else throw new Error("BPartner not Found and Not Able to Create New One")
        }
        return true;
    } catch (error) {
        console.log("Error in getBPartnerByTpCode: " + error.message);
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
        console.log(`Error in getting Business Partner with ${purpose} :` + error.message);
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
        if (response.data != null && response.status === 200) {
            return response.data
        } else {
            console.log("Failed to create shipment:" + response);
        }
    } catch (error) {
        console.log("Error in createShipment:" + error.message);
    }
};

const sendConsent = async (mobileNumber, referenceId, shNo) => {
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
            return response.data.consentStatus
        } else {
            return "INVALID PHONE NUMBER"
        }
    } catch (error) {
        throw new Error("Shipment Created:" + shNo + ". Error in Sending Consent:" + error.message);
    }
};

const setDetails = async (data, sh) => {
    if (!data || typeof data !== 'object') {
        console.log("Invalid data for setting details");
        return null;
    }
    const date = moment(data.shipmentDate, 'DD-MM-YYYY');
    if (!date.isValid()) {
        console.log(`Invalid shipment date format`)
        throw new Error("Invalid shipment date format");
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
        vehicleRegistrationNumber: data.vehicleNumber,
        vehicleType: data.meansOfTransportDescription
    };
    sh.shipmentNumber = data.foNumber
    sh.externalShipmentId = data.foNumber

    const ship = await createShipment(sh);
    return ship
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
            return null
        }
    } catch (error) {
        console.log(`Some Error while getting Shipment by Ext ID` + error.message)
        throw error
    }
}

const populateUpdatedFields = async (sh, payload) => {
    try {
        if (!sh.fleetInfo) throw new Error("fleetInfo is missing in the Shipment object.");
        if (!sh.fleetInfo.vehicle) throw new Error("Vehicle information is missing in fleetInfo.");
        if (!sh.fleetInfo.fleetOwner) throw new Error("Broker information is missing in fleetInfo.");
        if (!sh.fleetInfo.driver) throw new Error("Driver information is missing in fleetInfo.");

        const updateMappings = [
            { source: payload.vehicleNumber, target: sh.fleetInfo.vehicle, key: 'vehicleRegistrationNumber' },
            { source: payload.meansOfTransportDescription, target: sh.fleetInfo.vehicle, key: 'vehicleType' },
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
            if (updatedFields.some(field => field.field === 'externalId')) {
                await populateBPartner(payload.transporterCode, payload.transporterName, sh)
            }
            if (updatedFields.some(field => field.field === 'mobileNumber')) {
                sh.fleetInfo.device.imei = payload.driverMobileNumber;
                let consent = await sendConsent(payload.driverMobileNumber, sh.uuid, sh.shipmentNumber);
                sh.customFields = [...[getCfObj("Tracking Status", consent)]]
            }
            console.log("Updated Fields:" + JSON.stringify(updatedFields));
        } else {
            console.log("No Fields to Update")
        }
        return isToBeUpdated;
    } catch (error) {
        throw error
    }
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
        console.log(`Some Error while updating Shipment by Ext ID` + error.message)
        throw error
    }
};

async function bulkSync(payload) {
    try {
        let options = {
            uri: `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`,
            method: "POST",
            body: payload,
            headers: {
                "Authorization": TOKEN,
            },
            json: true,
        }
        let res = await rp(options)
        if (res.status === 200) {
            return res.data;
        } else {
            throw new Error(`Custom Fields Not Updated ${res.error}`);
        }
    } catch (e) {
        throw new Error(`Custom Field not Updated ${e.message}`);
    }
}

function getCfObj(key, value, valueType = "string", fieldType = "text") {
    return {
        fieldKey: key,
        valueType: valueType,
        fieldType: fieldType,
        value: value,
    };
}

async function createCfs(consent, sh) {
    let customFields = getCfObj("Tracking Status", consent)
    console.log(`Total Cfs to update ${customFields?.length}`);
    let cf = {
        shipmentId: sh?.uuid,
        updates: [
            {
                keyToUpdate: "customfields",
                updatedValue: [customFields],
            },
        ],
    };
    sh = await bulkSync(cf);
    return sh
}


async function executeAllFunctions() {
    let data = null;
    let status = 400;
    let error = null;

    try {

        if (!requestBody || typeof requestBody !== 'object') {
            throw new Error("Invalid HTTP request method - please use POST and send payload");
        }
        validateDataFields(requestBody)
        // TODO get shipment by externalId
        const existingShByExtId = await getShByExtId(requestBody.foNumber)
        if (existingShByExtId) {
            let isToBeUpdated = await populateUpdatedFields(existingShByExtId, requestBody)
            if (isToBeUpdated) {
                const shNo = await updateShipment(existingShByExtId)
                if (shNo) {
                    data = `Shipment Updated: ${shNo}`;
                    status = 200;
                } else {
                    throw new Error("Failed to Update shipment.");
                }
            } else {
                console.log(`Shipment Already Exists with Provided Field Values`)
                error = `Shipment Already Exists with Provided Field Values`
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
            const isBPartnerPopulated = await populateBPartner(requestBody.transporterCode, requestBody.transporterName, shipment)
            if (!isBPartnerPopulated) {
                throw new Error("Failed to retrieve Business Partner");
            }
            const ship = await setDetails(requestBody, shipment);
            if (ship) {
                console.log(`Shipment Created with Shipment Number : ${ship.shipmentNumber}`)
                data = ship.shipmentNumber;
                status = 200;
            } else {
                throw new Error("Failed to create shipment.");
            }
            if (requestBody.driverMobileNumber) {
                let consent = await sendConsent(requestBody.driverMobileNumber, ship.uuid, ship.shipmentNumber);
                await createCfs(consent, ship)
            } else {
                console.log("Driver mobile number missing, consent not sent.");
            }
        }
        return { data: data, error: error, status: status }
    } catch (error) {
        console.log("Error executing function:" + error.message);
        return { data: null, error: error.message, status: 400 }
    }
}

return await executeAllFunctions()
