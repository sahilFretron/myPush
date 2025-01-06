const VENDOR_PARTNER_TYPE = "vendor"
const CUSTOMER_PARTNER_TYPE = "customer"

async function delay(t, v) {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
    });
}

module.exports = {
    delay: delay,
    VENDOR_PARTNER_TYPE : VENDOR_PARTNER_TYPE,
    CUSTOMER_PARTNER_TYPE : CUSTOMER_PARTNER_TYPE
}