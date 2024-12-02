const express = require("express")
const router = express.Router()
const bpSyncSvc = require('../services/businessPartner_Sync')

router.post("/sales_order", function (req, res) {
    //TODO
})

router.post("/Purchase_order", function (req, res) {
    //TODO
})

router.post("/customer", async function (req, res) {
    try {
        let payload = req.body
        let tokenInfo = req["tokenInfo"]
        if (!tokenInfo) { throw new Error(`Token info not found`) }
        let { orgId, token } = tokenInfo
        if (!orgId || !token) { throw new Error(`orgId or token missing`) }
        let customer = await bpSyncSvc.createOrUpdateCustomer(payload, token, orgId)
        res.send({
            data: {
                customer
            },
            status: 200,
            error: null
        })
    }
    catch (error) {
        res.send({ data: null, status: 400, error: error.message })
    }
})


router.post("/transporter", async function (req, res) {
    try {
        let payload = req.body
        let tokenInfo = req["tokenInfo"]
        if (!tokenInfo) { throw new Error(`Token info not found`) }
        let { orgId, token } = tokenInfo
        if (!orgId || !token) { throw new Error(`orgId or token missing`) }
        let transporter = await bpSyncSvc.createOrUpdateTransporter(payload, token, orgId)
        res.send({
            data: {
                transporter
            },
            status: 200,
            error: null
        })
    }
    catch (error) {
        res.send({ data: null, status: 400, error: error.message })
    }
})

module.exports = router