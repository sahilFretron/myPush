const rp = require("request-promise")
const common = require("../../configs/common")
const bpMasterBaseUrl = common.config()["bp_master_service_base_url"]
const logger = require('../../logger')

logger.info(`BP Master base url is - ${bpMasterBaseUrl}`)

async function getBusinessPartnerByKeyValue(key, value, orgId, partnerType = null) {
    let url = `${bpMasterBaseUrl}/business-partners/v2/admin/partner?key=${key}&value=${value}&orgId=${orgId}`
    if (partnerType) url = url + `&type=${partnerType}`
    try {
        let res = await rp({
            method: "GET",
            uri: url,
            json: true
        })
        logger.info(`Get bp by ${key} ${value} api res status : ${res.status}`)
        if (res.status == 200) {
            return res.data
        } else {
            logger.info(`Get bp by ${key} ${value} api res error : ${res.error}`)
        }
    } catch (e) {
        logger.info(`Catched error in getting bp by ${key} ${value}  : ${e.message}`)
    }
    return null
}

async function addBpContact(contact, bpId, token) {
    let url = `${bpMasterBaseUrl}/business-partners/v2/partner/contact?partnerId=${bpId}`
    try {
        let res = await rp({
            method: "POST",
            uri: url,
            headers: {
                Authorization: token
            },
            body: contact,
            json: true
        })
        logger.info(`Updating bp contact info api res status : ${res.status}`)
        if (res.status == 200) {
            return res.data
        } else {
            logger.info(`Some error in updating bp contact info api res error : ${res.error}`)
        }
    } catch (e) {
        logger.info(`Catched error in updating Bp contactInfo : ${e.message}`)
        throw e
    }
    return null
}

async function createBp(payload, token) {
    let url = `${bpMasterBaseUrl}/business-partners/v2/partner`
    try {
        let res = await rp({
            method: "POST",
            uri: url,
            headers: {
                Authorization: token,
                "traceID": "sahil"
            },
            body: payload,
            json: true
        })
        logger.info(`Create bp with extId ${payload.externalId} res api status : ${res.status}`)
        if (res.status == 200) {
            return res.data
        } else {
            logger.info(`Create bp with extId ${payload.externalId} res api error : ${res.error}`)
            throw new Error(`Failed to Create BP: ${res.error}`)
        }
    } catch (e) {
        logger.info(`Catched error in creating bp with extId ${payload.externalId} : ${e.message}`)
        throw e
    }
}

async function updatePlaceOnPartner(partnerId, place, token) {
    let url = `${bpMasterBaseUrl}/business-partners/v2/partner/update/place/?partnerId=${partnerId}`
    try {
        let res = await rp({
            method: "PUT",
            uri: url,
            headers: {
                Authorization: token
            },
            body: place,
            json: true
        });
        logger.info(`Update place ${place.name} on partnerId ${partnerId} api res status : ${res.status}`)
        if (res.status == 200) {
            return res.data
        } else {
            logger.error(`Update place ${place.name} on partnerId ${partnerId} api res error : ${res.error}`)
            throw new Error(res.error)
        }
    } catch (e) {
        logger.error(`Catched error in updating place ${place.name} on partnerId ${partnerId} : ${e.message}`)
        throw e
    }
}

async function deleteOldContacts(bpId, names, token) {
    let url = `${bpMasterBaseUrl}/business-partners/v2/partner/remove/contacts?partnerId=${bpId}`
    try {
        let res = await rp({
            method: "PUT",
            uri: url,
            headers: {
                Authorization: token
            },
            body : names,
            json: true
        })
        logger.info(`Deleting bp contact info api res status : ${res.status}`)
        if (res.status == 200) {
            return res.data
        } else {
            logger.info(`Some error in deleting bp contact info api res error : ${res.error}`)
        }
    } catch (e) {
        logger.info(`Catched error in deleting Bp contactInfo : ${e.message}`)
    }
    return null
}




module.exports = {
    getBusinessPartnerByKeyValue: getBusinessPartnerByKeyValue,
    createBp: createBp,
    addBpContact: addBpContact,
    updatePlaceOnPartner: updatePlaceOnPartner,
    deleteOldContacts: deleteOldContacts
}