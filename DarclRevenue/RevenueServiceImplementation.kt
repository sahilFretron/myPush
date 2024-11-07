package com.fretron.shcostmanager.services.gateways

import com.fretron.Logger.Log
import com.fretron.shcostmanager.utils.RequestHelper
import org.json.JSONObject

abstract class RevenueServiceImplementation(
    private val requestHelper: RequestHelper
    ) : RevenueGateway
{
    override fun sendRevenueDocToSap(revenueDocJSON: JSONObject, token: String): JSONObject? {
        val url = "https://tms-test.cjdarcl.com:60008/inv/saveInvoicePricing"
        val headers = hashMapOf("Authorization" to "Bearer $token","Content-Type" to "application/json")
        var response: String? = null
        try {
            response = requestHelper.makePostRequestAndGetData(url, JSONObject(revenueDocJSON.toString()),headers,18000)
            val responseJson = JSONObject(response)
            if (responseJson.getInt("status")==200 && !responseJson.isNull("data")) {
                val data = responseJson.getJSONObject("data")
                return data
            } else {
                val errorMSg = if (responseJson.isNull("error").not()) responseJson.getString("error") else "Some server error"
                Log.warning("Error message $errorMSg")
            }
        } catch (e: Exception) {
            Log.error(e.toString())
        }
        Log.error("Failed Request $revenueDocJSON , response $response")
        return null
    }

    override fun createInvoice(invoice: JSONObject, token: String): JSONObject? {
        val url = "https://tms-test.cjdarcl.com:60008/inv/createMainInvoice"
        val headers = hashMapOf("Authorization" to "Bearer $token","Content-Type" to "application/json")
        var response: String? = null
        try {
            response = requestHelper.makePostRequestAndGetData(url, JSONObject(invoice.toString()),headers,18000)
            val responseJson = JSONObject(response)
            if (responseJson.getInt("status")==200 && !responseJson.isNull("data")) {
                val data = responseJson.getJSONObject("data")
                return data
            } else {
                val errorMSg = if (responseJson.isNull("error").not()) responseJson.getString("error") else "Some server error"
                Log.warning("Error message $errorMSg")
            }
        } catch (e: Exception) {
            Log.error(e.toString())
        }
        Log.error("Failed Request $invoice , response $response")
        return null
    }

}
