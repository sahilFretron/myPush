package com.fretron.shcostmanager.services

import com.fretron.Model.*
import com.fretron.shcostmanager.INVOICE_SUBMISSION_PENDING
import com.fretron.shcostmanager.exceptions.NotAllowedException
import com.fretron.shcostmanager.models.*
import com.fretron.shcostmanager.models.ResourceInfo
import com.fretron.shcostmanager.services.gateways.RevenueGateway
import com.google.gson.GsonBuilder
import org.json.JSONArray
import org.json.JSONObject
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import javax.inject.Inject

class RevenueService @Inject constructor(
    private val revenueGateway: RevenueGateway
) {
    private val rateUnitToUOMMap = mapOf(
        "perMT" to "TO",
        "Fixed" to "EA",
        "perVehicle" to "TLD",
        "perKG" to "KG",
        "perKM" to "KM",
        "perMonth" to "MON",
        "perCFT" to "FT3",
        "perKMperMT" to "K/T",
        "perKiloLitre" to "KL",
        "perLitre" to "L",
        "perBOX" to "BOX",
        "perBag" to "BAG",
        "Percentage" to "%"
    )

    fun sendRevenueDocToSap(revenueDoc: RevenueDoc, token: String): JSONObject? {
        val revenueUuid = revenueDoc.uuid
        val deliveryUuid = revenueDoc.lineItems?.firstOrNull()?.consignmentId
        val chargeCode = revenueDoc.charge?.chargeCode
        val chargeAmount = revenueDoc.charge?.amount
        val rate = revenueDoc.charge?.rate
        val rateUnit = revenueDoc.charge?.rateUnit
        val uom = rateUnitToUOMMap[rateUnit]
        val uuid = revenueDoc.updates?.getUuid()

        val user = uuid?.let { getUserById(it) }

        val jsonObject = JSONObject()
        jsonObject.put("revenueUUid", revenueUuid)
        jsonObject.put("deliveryUUid", deliveryUuid)
        jsonObject.put("chargeCode", chargeCode)
        jsonObject.put("chargeAmount", chargeAmount)
        jsonObject.put("rate", rate)
        jsonObject.put("uom", uom)
        jsonObject.put("userMailId", user?.getEmail())
        jsonObject.put("userName", user?.getName())

        return revenueGateway.sendRevenueDocToSap(jsonObject, token)

    }

    fun createInvoice(invoice: Invoice, token: String): JSONObject?{
        val invoiceDate = invoice.billDate
        val branchCode = invoice.billingBranch?.externalId
        val uuid = invoice.uuid
        val userUuid = invoice.updates?.getUuid()
        val currentYear = LocalDate.now().year
        val currentDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"))
        val user = userUuid?.let { getUserById(it) }
        val jsonObject = JSONObject()
        jsonObject.put("invoiceDate",invoiceDate)
        jsonObject.put("branchCode",branchCode)
        jsonObject.put("uuid",uuid)
        jsonObject.put("invoiceTypeId","main")
        jsonObject.put("userMailId", user?.getEmail())
        jsonObject.put("userName", user?.getName())
        jsonObject.put("year", currentYear)
        jsonObject.put("pricingDate ", currentDate)
        val itemDetailArray = JSONArray()
        invoice.lineItems?.forEach { lineIt ->
            val consignmentNumber = lineIt?.cnDetails?.get(0)?.consignmentNo
            if (consignmentNumber != null) {
                val itemDetailObject = JSONObject()
                itemDetailObject.put("deliveryNo", consignmentNumber)
                itemDetailArray.put(itemDetailObject)
            }
        }
        jsonObject.put("itemDetail", itemDetailArray)

        val conditionTypesArray = JSONArray()
        invoice.lineItems?.forEach { lineIt ->
            val consignmentNumber = lineIt?.cnDetails?.get(0)?.consignmentNo
            val charge = lineIt?.revenueDocs?.get(0)?.charge
            val chargeCode = charge?.chargeCode
            val ratePerUnit = charge?.rate ?: 0.0
            val fixedRate = charge?.amount ?: 0.0

            if (consignmentNumber != null && chargeCode != null) {
                val conditionTypeObject = JSONObject()
                conditionTypeObject.put("deliveryNo", consignmentNumber)
                conditionTypeObject.put("conditionType", chargeCode)
                conditionTypeObject.put("ratePerUnit", ratePerUnit)
                conditionTypeObject.put("fixedRate", fixedRate)
                conditionTypesArray.put(conditionTypeObject)
            }
        }
        jsonObject.put("conditionTypes", conditionTypesArray)
        return revenueGateway.createInvoice(jsonObject, token)
    }

    private fun getUserById(uuid: String): User {
        return User().apply {
            this.setEmail("")
            this.setName("")
        }
    }


    data class Invoice(
        var uuid: String?,
        var orgId: String?,
        var billDate: Long?,
        var billingStatus: String?,
        var amount: Double?,
        var status: String?,
        var documents: MutableList<Document>?,
        var lineItems: MutableList<InvoiceItem>?,
        var customer: LiteBuisnessPartner?,
        var invoiceNumber: String?,
        var billFeedingType: String?,
        var ticketId: String?,
        var isOverDue: Boolean?,
        var overDueAt: Long?,
        var onHoldReason: String?,
        var totalPaid: Double?,
        var totalPayable: Double?,
        var remarks: String?,
        var customFields: MutableList<CustomFields>?,
        var updates: Updates?,
        var approvalDate: Long?,
        var creationTime: Long?,
        var tax: Tax?,
        var submissionStatus:String? = INVOICE_SUBMISSION_PENDING,
        var submissionMeta: InvoiceSubmissionMeta?=null,
        var isRoundOffApplicable: Boolean?,
        var roundedDeltaAmount: Double?,
        var isReconsiledByGst:Boolean?=null,
        var isCarryForward:Boolean=false,
        var type : String= InvoiceType.Invoice.name
    ) : BaseAccounting(){
        constructor() : this(
            null, null, null, null, null, null,
            null, null, null, null, null,
            null, null, null, null, null,
            null, null, mutableListOf(), null, null, null,null,  INVOICE_SUBMISSION_PENDING, null, false, null,
        )

        override fun toString(): String {
            return GsonBuilder().serializeNulls().create().toJson(this)
        }

        override fun validateEntityForPosting() {
            super.validateEntityForPosting()
            if(this.lineItems?.any { !isValidGstInfoProvided(it.gstInfo ?: mutableListOf()) } == true){
                throw NotAllowedException("Invalid Gst Info Provided")
            }
        }
    }

    data class InvoiceItem(
        var uuid: String?,
        var amount: Double?,
        var remarks: String?,
        var hsnOrSacCode: String?,
        var exemptedReason: String?,
        var revenueDocs: MutableList<RevenueDoc> = mutableListOf(),
        var gstInfo: MutableList<GstInfo>? = mutableListOf(),
        var customFields: MutableList<LiteCustomFields>? = mutableListOf(),
        var entityInfo: ResourceInfo?,
        var entityCfs: MutableList<CustomFields>? = null,
        var cnDetails: MutableList<cnInfo>?
    ) {
        constructor() : this(null, null, null, null, null, mutableListOf(), mutableListOf(), mutableListOf(), null, null, null)

        override fun toString(): String {
            return GsonBuilder().serializeNulls().create().toJson(this)
        }
    }

    data class cnInfo(
        var consignmentDate: String?,
        var consignmentNo: String?
    ) {
        constructor() : this(null, null)

        override fun toString(): String {
            return GsonBuilder().serializeNulls().create().toJson(this)
        }
    }
}
