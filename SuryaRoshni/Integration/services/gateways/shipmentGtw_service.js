const rp = require("request-promise")
const common = require("../../configs/common")
const baseUrl = common.config()["shipment_service_base_url"];
const logger = require('../../logger')

async function bulkSync(payload, token) {
    try {
        let res = await rp({
            method: 'POST',
            uri: `${baseUrl}/shipment/v1/shipment/bulk/sync`,
            headers: {
                'Authorization': token,
            },
            body: payload,
            json: true
        })
        logger.info(`Bulk sync shipment status : ${res.status}`)
        if (res.status == 200) {
            return res.data;
        } else {
            logger.info(`Bulk sync shipment error : ${res.error}`)
            return null
        }
    } catch (err) {
        logger.info(`Catched Error in bulk Sync shipment api:- ${err.message}`)
        return null
    }
}

async function shCnMappingUpdate(payload, token, isInternal=false) {
    let url = `${baseUrl}/shipment/v1/shipment/stage/cn/mapping?isInternal=${isInternal}`;
    try {
        var options = {
            uri: url,
            method: "post",
            headers: {
                Authorization: token,
                "traceID" : "sahil"
            },
            body: payload,
            json: true
        };
        const res = await rp(options);
        if (res.error) {
            logger.info(`Error in sh cn Mapping update ${payload.shipmentId} ${res.error}`);
            return null;
        }
        return res.data;
    } catch (error) {
        logger.error(`Catched error in sh Cn Mapping Update for shipment ${payload.shipmentId} ${error.message}`);
        return null;
    }
}

  

module.exports = {
    bulkSync: bulkSync,
    shCnMappingUpdate: shCnMappingUpdate
}