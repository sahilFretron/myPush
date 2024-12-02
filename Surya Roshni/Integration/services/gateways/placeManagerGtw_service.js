const rp = require("request-promise")
const common = require("../../configs/common")
const config = common.config()
const placeManagerBaseUrl = config["place_man_service_base_url"]
const FRT_BASE_URL = config["FRT_BASE_URL"]
const logger = require('../../logger')

logger.info(`Place Manager service Base url is ${placeManagerBaseUrl}`)

async function createHub(payload, token) {
    try {
        let url = `${FRT_BASE_URL}/hubs/v1/hub`
        var res = await rp({
            url: url,
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": token
            },
            json: true,
            body: payload
        })
    } catch (err) {
        logger.info("Error creating hub- " + err.message)
        throw new Error("Error Creating Hub" + err.message)
    } finally {
        if (res) {
            return res.status == 200 ? res.data : payload
        }
        return payload
    }
}


async function getHubByKeyValue(key,value, token){
    let url = `${FRT_BASE_URL}/hubs/v1/hub?key=${key}&value=${value}`
    try {
        let res = await rp({
            method : "GET",
            uri : url,
            headers : {
                Authorization : token
            },
            json : true
        });
        if(res.status == 200){
            return res.data
        }else{
            logger.info(`Error in getting hub by ${key} : ${res.error}`)
        }
    } catch (e) {
        logger.info(`Catched error in getting hub by ${key} : ${e.message}`)
    }
    return null
}

module.exports = {
    createHub : createHub,
    getHubByKeyValue : getHubByKeyValue
}