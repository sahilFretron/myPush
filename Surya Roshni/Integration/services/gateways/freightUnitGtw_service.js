const rp = require("request-promise")
const common = require("../../configs/common")
const orderV2BaseUrl = common.config()["order_manager_v2_base_url"]
const logger = require('../../logger')

logger.info(`Order Manager service V2 Base url is ${orderV2BaseUrl}`)

async function getFreightUnitByLineItemId(lineItemIds, token) {
    let options = {
        method: "POST",
        uri: `${orderV2BaseUrl}/freight-units/v1/freight-units/by/linItemIds`,
        json: true,
        body: lineItemIds,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    };
    try {
        const response = await rp(options);
        if (response.status != 200) {
            logger.info("Error in get freight unit " + response.error);
            return null;
        }
        return response.data[0];
    } catch (e) {
        logger.info("Error in get freight unit " + e.message);
        return null;
    }
}

async function updateFuMapping(soMappings, fuId, fuItemId, token) {
    try {
        let body = {
            'mappings': soMappings,
            'lineItemId': fuItemId,
            'freightUnitId': fuId,
            'allowOverUtilization': true
        }
        let res = await rp({
            'uri': `${orderV2BaseUrl}/freight-units/v1/add/mappings?skipValidation=true&considerFinalization=false`,
            'body': body,
            'method': 'POST',
            'headers': {
                'Authorization': token,
            },
            'json': true
        })
        logger.info("update mapping res : " + res.status)
        if (res.status == 200) {
            return res.data
        } else {
            logger.info("update mapping error : " + res.error)
        }
    }
    catch (e) {
        logger.info(`catche Error update FU mapping :  ` + e.message)
    }
}

async function finalizeTruck(fuId, sh, cns, token) {
    sh.syncUpDueTime = null
    let url = `${orderV2BaseUrl}/freight-units/v1/finalizeTruck?applyPrehook=false`
    let payload = {
        "truckLoadId": fuId,
        'distributionBy': 'weight',
        "shipment": sh,
        "consignments": cns
    }
    try {
        let res = await rp({
            method: "POST",
            uri: url,
            headers: {
                Authorization: token
            },
            body: payload,
            json: true
        })
        logger.info(`Finalize truck res status : ${res.status}`)
        if (res.status == 200) {
            return res.data
        } else {
            logger.info(`Finalize truck res error : ${res.error}`)
        }
    } catch (e) {
        logger.info(`Catched error in Finalizing truck : ${e.message}`)
    }
    return null
}



module.exports = {
    getFreightUnitByLineItemId: getFreightUnitByLineItemId,
    updateFuMapping: updateFuMapping,
    finalizeTruck: finalizeTruck
}