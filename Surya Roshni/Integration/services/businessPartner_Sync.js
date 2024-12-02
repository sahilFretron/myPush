const utils = require("../utils")
const bpGtwService = require("./gateways/businesspartnerGtw_service")
const placeManagerGtwService = require("./gateways/placeManagerGtw_service")
const shViewGtwService = require("./gateways/shViewGtw_service")
const { customerSyncValidation, transporterSyncValidation } = require('../services/validation_service')
const VENDOR_PARTNER_TYPE = utils.VENDOR_PARTNER_TYPE
const CUSTOMER_PARTNER_TYPE = utils.CUSTOMER_PARTNER_TYPE
const common = require("../configs/common")
const CUSTOMER_GROUP_TYPE_NAME = common.config()["CUSTOMER_GROUP_TYPE_NAME"]
const CUSTOMER_GROUP_TYPE_UUID = common.config()["CUSTOMER_GROUP_TYPE_UUID"]
const VENDOR_GROUP_TYPE_NAME = common.config()["VENDOR_GROUP_TYPE_NAME"]
const VENDOR_GROUP_TYPE_UUID = common.config()["VENDOR_GROUP_TYPE_UUID"]
const logger = require('../logger')


function getContactFromPayload(bpData, partnerType) {
    if (bpData.contactNumber || bpData.email) {
        let alternateContactName = (partnerType == CUSTOMER_PARTNER_TYPE) ? bpData.customerName : bpData.transporterName
        return {
            emails: bpData?.email ? [bpData.email] : [],
            mobileNumbers: bpData?.contactNumber ? [bpData.contactNumber] : [],
            name: bpData?.contactPersonName ?? alternateContactName,
            address: null,
            mobileNumber: bpData?.contactNumber
        };
    }
}

async function mapDataToBusinessPartner(data, partnerType, externalId, orgId, token) {
    let place, address;
    if (partnerType == CUSTOMER_PARTNER_TYPE) {
        logger.info(`Partner data ${JSON.stringify(data)}`)
        address = {
            city: data.destinationCity,
            state: data.destinationState,
            pincode: data.pincode
        }
        let placeName = data.destinationCity && data.customerName ? `${data.destinationCity}-${data.customerName}` : data.destinationCity
        place = await createPlaceByPincode(data.pincode, placeName, externalId, orgId, token, data.destinationState, address);
    }
    let contact = getContactFromPayload(data, partnerType);
    return {
        "address": address ? JSON.stringify(address) : null,
        "contacts": contact ? [contact] : null,
        "customFields": null,
        "documents": [],
        "externalId": externalId,
        "fretronId": null,
        "geoFence": null,
        "isPortalEnabled": false,
        "location": null,
        "name": (partnerType == CUSTOMER_PARTNER_TYPE) ? data.customerName : data.transporterName,
        "orgId": orgId,
        "places": (partnerType == CUSTOMER_PARTNER_TYPE) ? [place] : null,
        "type": partnerType,
        "uuid": null,
        "route": null,
        "group": {
            "name": (partnerType == CUSTOMER_PARTNER_TYPE) ? CUSTOMER_GROUP_TYPE_NAME : VENDOR_GROUP_TYPE_NAME,
            "partnerType": partnerType,
            "uuid": (partnerType == CUSTOMER_PARTNER_TYPE) ? CUSTOMER_GROUP_TYPE_UUID : VENDOR_GROUP_TYPE_UUID,
            "orgId": orgId
        },
        "status": data.status,
        "verificationStatus": null,
        "panNumber": data.pan,
        "aadharNo": null,
        "firmType": "INDIVISUAL",
        "parentId": null,
        "gstn": data.gst
    }
}

async function createPlaceByPincode(pincode, placeName, externalId, orgId, token, state = null, address = null, district = null) {
    placeName = placeName.toUpperCase()
    let masterHub = await placeManagerGtwService.getHubByKeyValue("name", placeName, token)
    if (masterHub) {
        logger.info(`Master hub found by name ${placeName}`)
        return masterHub
    }
    pincode = pincode.toString()
    let latLongVal = await shViewGtwService.getLatLong(pincode, token)
    if (latLongVal.length == 0) {
        throw new Error("Lat Long not found!")
    }
    let payload = {
        "hubId": null,
        "boundary": null,
        "address": address ? JSON.stringify(address) : null,
        "accessibility": "public",
        "addedBy": orgId,
        "center": {
            "latitude": latLongVal[0],
            "longitude": latLongVal[1]
        },
        "suggestedRadius": 10000,
        "isOwned": false,
        "centerCoordinates": [latLongVal[1], latLongVal[0]],
        "placeId": null,
        "externalId": externalId,
        "geoJsonBoundry": null,
        "source": "FRETRON",
        "places": null,
        "viewport": null,
        "district": district,
        "name": placeName,
        "state": state,
        "category": "Hub",
        "subDistrict": null
    }
    return await placeManagerGtwService.createHub(payload, token);
}

async function createOrUpdateTransporter(bpData, token, orgId) {
    try {
        transporterSyncValidation(bpData)
        let externalId = bpData.transporterId
        logger.info(`Transporter update / create ${externalId}`)
        let bpMaster = await bpGtwService.getBusinessPartnerByKeyValue("externalId", externalId, orgId, VENDOR_PARTNER_TYPE)
        if (bpMaster) {
            logger.info(`Transporter extId ${externalId} Update Contact case`)
            let contactNames = bpMaster.contacts?.map(contact => contact.name).filter(name => name);
            if (contactNames?.length) {
                await bpGtwService.deleteOldContacts(bpMaster.uuid, contactNames, token)
            }
            let contact = getContactFromPayload(bpData, VENDOR_PARTNER_TYPE)
            if (contact) {
                let updatedBp = await bpGtwService.addBpContact(contact, bpMaster.uuid, token)
                if (updatedBp) {
                    bpMaster = updatedBp
                } else {
                    throw new Error(`Some server error in updating contact of transporter with extId ${externalId}`)
                }
            }
        } else {
            logger.info(`Create Transporter with extId ${externalId}`)
            let bpPayload = await mapDataToBusinessPartner(bpData, VENDOR_PARTNER_TYPE, externalId, orgId, token)
            bpMaster = await bpGtwService.createBp(bpPayload, token)
        }
        return bpMaster
    } catch (e) {
        logger.info(`Catched error in creating bp : ${e.message}`)
        throw e
    }
}

async function ensurePlaceOnPartner(bpMaster, data, externalId, orgId, token) {
    try {
        let newplaceName = data.destinationCity && data.customerName ? `${data.destinationCity}-${data.customerName}` : data.destinationCity
        let oldPlace = bpMaster.places?.length ? bpMaster.places[0] : null
        if (newplaceName != null && (newplaceName.toUpperCase() != oldPlace?.name?.toUpperCase())) {
            logger.info(`Updating place for partner ${bpMaster.uuid} from ${oldPlace.name} to ${newplaceName}`)
            let address = {
                city: data.destinationCity,
                state: data.destinationState,
                pincode: data.pincode
            }
            let place = await createPlaceByPincode(data.pincode, newplaceName, externalId, orgId, token, data.state, address)
            return await bpGtwService.updatePlaceOnPartner(bpMaster.uuid, place, token)
        } else {
            logger.info(`No need to update place on partner ${bpMaster.uuid}`)
            return bpMaster
        }
    } catch (e) {
        logger.error(`Catched error in ensuring place on partner ${bpMaster.uuid} : ${e.message}`)
        throw e
    }
}

async function createOrUpdateCustomer(bpData, token, orgId) {
    try {
        customerSyncValidation(bpData)
        let externalId = bpData.customerId
        logger.info(`Customer update / create ${externalId}`)
        let bpMaster = await bpGtwService.getBusinessPartnerByKeyValue("externalId", externalId, orgId, CUSTOMER_PARTNER_TYPE)
        if (bpMaster) {
            bpMaster = await ensurePlaceOnPartner(bpMaster, bpData, externalId, orgId, token)
            logger.info(`Customer extId ${externalId} Update Contact case`)
            let contactNames = bpMaster.contacts?.map(contact => contact.name).filter(name => name);
            if (contactNames?.length) {
                await bpGtwService.deleteOldContacts(bpMaster.uuid, contactNames, token)
            }   
            const contact = getContactFromPayload(bpData, CUSTOMER_PARTNER_TYPE)
            if (contact) {
                let updatedBp = await bpGtwService.addBpContact(contact, bpMaster.uuid, token)
                if (updatedBp) {
                    bpMaster = updatedBp
                } else {
                    throw new Error(`Some server error in updating contact of customer with extId ${externalId}`)
                }
            }
        } else {
            logger.info(`Create customer with extId ${externalId}`)
            let bpPayload = await mapDataToBusinessPartner(bpData, CUSTOMER_PARTNER_TYPE, externalId, orgId, token)
            bpMaster = await bpGtwService.createBp(bpPayload, token)
        }
        return bpMaster
    } catch (e) {
        logger.info(`Catched error in creating bp : ${e.message}`)
        throw e
    }
}

module.exports = {
    createOrUpdateTransporter: createOrUpdateTransporter,
    createOrUpdateCustomer: createOrUpdateCustomer
}
