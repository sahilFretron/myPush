const rp = require("request-promise")
const common = require("../../configs/common")
const baseUrl = common.config()["consignment_service_base_url"];
const logger = require('../../logger')

async function createConsignment(cnPayload, token) {
    const url = `${baseUrl}/consignment/v1/consignment`;
    const options = {
        uri: url,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: cnPayload,
        json: true
    };
    try {
        const result = await rp(options);
        logger.info(`Consignment create status ${result.status}`);
        if (result.status === 200) {
            return result.data;
        } else {
            logger.info(`Consignment create error-- ${result.error} CN NO ${cnPayload.consignmentNo}`);
            return null;
        }
    } catch (error) {
        logger.error(`catched error in cn ${cnPayload.consignmentNo} create ${error.message}`);
        return null;
    }
}

async function getCnByExternalId(externalId, orgId) {
    let url = `${baseUrl}/consignment/v1/admin/org/${orgId}/consignment/externalid/${externalId}`
    logger.info(url)
    try {
        let res = await rp({
            method: "GET",
            uri: url,
            json: true
        })
        logger.info(`Get Cn by externalId api res status : ${res.status}`)
        if (res.status == 200) {
            return res.data
        } else {
            logger.info(`Get Cn by externalId api res error : ${res.error}`)
        }
    } catch (e) {
        logger.info(`Catched error in getting cn by externalId : ${e.message}`)
    }
    return null
}

module.exports = {
    createConsignment: createConsignment,
    getCnByExternalId: getCnByExternalId
}
