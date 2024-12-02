const rp = require("request-promise")
const common = require("../../configs/common")
const shViewBaseUrl = common.config()["sh_view_service_base_url"]
const logger = require('../../logger')

logger.info(`Shipment View service Base url is ${shViewBaseUrl}`)

async function getLatLong(pincode, token) {
  let url = `${shViewBaseUrl}/places/search/by-postal-code?pincode=${pincode}&backOffToGoogle=true`
  logger.info(url)
  let response = await rp({
    url: url,
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      "Authorization": token
    },
    json: true
  })
  logger.info(response)
  if (typeof response != "string" && response.length != 0) {
    return [response[0].center.latitude, response[0].center.longitude]
  } else {
    return []
  }
}

module.exports = {
  getLatLong: getLatLong
}