const rp = require("request-promise")
const common = require("../../configs/common")
const orderV2BaseUrl = common.config()["order_manager_v2_base_url"]
const shViewBaseUrl = common.config()["sh_view_service_base_url"]
const logger = require('../../logger')


async function getOrdersByfilters(filters, token, source) {
    try {
        filters = JSON.stringify(filters)
        if (source) source = JSON.stringify(source)
        const url = `${shViewBaseUrl}/sales/v2/orders?limit=50&filters=${filters}` + (source ? `&source=${source}` : "")

        let res = await rp({
            method: "GET",
            uri: url,
            headers: {
                Authorization: token
            },
            json: true
        })
        logger.info(`Get orders by filters: ${JSON.stringify(filters)} length: ${res.length}`)
        return res
    } catch (e) {
        logger.info(`Caught error Get orders by filters: ${JSON.stringify(filters)} : ${e.message}`)
    }
    return null
}

async function getOrderByNumber(orderNumber, token) {
    try {
        const url = `${orderV2BaseUrl}/sales-orders/v1/order/orderNumber/${encodeURIComponent(orderNumber)}`
        const options = {
            method: "GET",
            uri: url,
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            json: true, // Automatically stringifies the body to JSON
        };

        const response = await rp(options);
        logger.info("Order get Status " + response.status);

        if (response.status == 200) {
            return response.data;
        } else {
            logger.info("Error in Order get " + response.error);
            return null;
        }
    } catch (e) {
        logger.error("Caught Error order get " + e.message);
        return null;
    }
}

module.exports = {
    getOrdersByfilters: getOrdersByfilters,
    getOrderByNumber: getOrderByNumber
}