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

async function shipmentsFromFilter(filter, token, searchName = null,_source = null,isCount = false) {
  var url = `${shViewBaseUrl}/shipments/v1?filters=${encodeURIComponent(
    JSON.stringify(filter)
  )}`;

  if (searchName) {
    url += `&search=${searchName}`;
  }

  if (_source) {
    url += `&allFields=true`;
  }

  if (isCount) {
    url += `&count=true`;
  }

  try {
    var options = {
      url: url,
      json: true,
      method: "get",
      headers: {
        Authorization: token,
      },
    };

    const res = await rp(options);

    return res;
  } catch (error) {
    logger.error(`Catched error in shipmentsFromFilter ${error.message}`);
    return null;
  }
}

module.exports = {
  getLatLong: getLatLong,
  shipmentsFromFilter: shipmentsFromFilter
}