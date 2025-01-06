
const rp = require("request-promise")
const common = require("../../configs/common")
const sh_view_service_base_url = common.config()["sh_view_service_base_url"]
const logger = require('../../logger')


async function getMaterialByExtId(externalId,token,allFields = true) {
    try {
        const filters = JSON.stringify({ "externalId": [externalId]})
        const res = await rp({
            url: `${sh_view_service_base_url}/materials/materials?filters=${encodeURIComponent(filters)}&allFields=${allFields}`,
            json: true,
            method: "GET",
            headers: {
                authorization: token
            }
        })
        logger.info(`GET materials by externalId length ${externalId} :- ${res.length}`)
        return res?.[0] ?? null
    } catch (error) {
        logger.error(`Caught Error get Material By externalId ${externalId} : ${error.message}`)
    }
    return null
}

module.exports = {
    getMaterialByExtId:getMaterialByExtId
}