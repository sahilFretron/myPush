package com.fretron.shcostmanager.services.gateways

import org.json.JSONObject

interface RevenueGateway {
    fun sendRevenueDocToSap(revenueDocJSON: JSONObject, token: String): JSONObject?
    fun createInvoice(invoice: JSONObject, token: String): JSONObject?
}
