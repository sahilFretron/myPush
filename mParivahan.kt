package com.fretron.partnerfleet.services

import com.fretron.Logger.Log
import com.fretron.Model.Document
import com.fretron.Model.FleetInfo
import com.fretron.Model.LiteCustomFields
import com.fretron.PARTNER_FLEET_DOC_RESOURCE_TYPE
import com.fretron.partnerfleet.extensions.addIfNotNull
import com.fretron.partnerfleet.extensions.mapStringValueToLiteCf
import com.fretron.partnerfleet.repositories.PartnerFleetRepository
import com.fretron.partnerfleet.services.gateways.DocumentManagerService
import com.fretron.partnerfleet.services.gateways.KafkaService
import com.fretron.partnerfleet.services.gateways.VerifiedVehicle
import com.google.gson.Gson
import java.io.File
import java.util.HashMap
import javax.inject.Inject

class VehicleDocVerificationPariVahanSvc @Inject constructor(
    private val gson : Gson,
    private val documentManagerService: DocumentManagerService,
    private val partnerFleetService: PartnerFleetService,
    private val partnerFleetRepository: PartnerFleetRepository,
    private val kafkaService: KafkaService
) {

    fun updateExpiredDocsAndAddNewOnes(request: String, resourceId: String, token :String): FleetInfo {
        val verifiedVehicle = gson.fromJson(request, VerifiedVehicle::class.java)
        val partnerFleet = partnerFleetService.getPartnerFleetByResourceId(resourceId)

        val existingDocs = documentManagerService.getDocumentByIds(partnerFleet.getVehicle().getAttachedDocs())
        val mParivahanDocs = maxDocsFromMPariVahanData(verifiedVehicle, resourceId)
        val (updateDocs,createDocs) = compareAndProcessDocuments(existingDocs, mParivahanDocs)
        if(updateDocs.size > 0){
            documentManagerService.updateFleetDocuments(updateDocs, token)
        }
        val createdDocsIds = mutableListOf<String>()
        createDocs.forEach {
            try {
                val emptyFile = File.createTempFile("empty_doc", null).apply {
                    deleteOnExit()
                }
                val createdDoc = documentManagerService.createFleetDocuments(it, emptyFile.inputStream(), token)
                createdDocsIds.add(createdDoc.getUuid())


            }catch (e :Exception){
                Log.error("Error in creating document for ${it.getName()}")
            }
        }
        Log.info("Docs To be created: ${createDocs.size}, Actual Created : ${createdDocsIds.size} , Updated DOcs : ${updateDocs.size}")

        val attachedDocIds = partnerFleet.getVehicle().getAttachedDocs()
        attachedDocIds.addAll(updateDocs.map { it.getUuid() })
        attachedDocIds.addAll(createdDocsIds)

        partnerFleet.getVehicle().setAttachedDocs(attachedDocIds.toSet().toList())
        val updatedFleet = partnerFleetRepository.upDatePartnerFleet(partnerFleet)
        kafkaService.producePartnerFleet(partnerFleet.getUuid(), updatedFleet)
        return updatedFleet
    }

    fun compareAndProcessDocuments(
        existingDocs: List<Document>,
        mParivahanDocs: MutableMap<String, Document>
    ): Pair<MutableList<Document>,MutableList<Document>> {

        val docsToBeUpdated = mutableListOf<Document>()
        val docsToBeCreated = mutableListOf<Document>()

        val mParivahanDocsKeys = mParivahanDocs.keys
        val existingDocsKeys = existingDocs.map { it.getName() }.toSet()

        val docsToCreateKeys = mParivahanDocsKeys.subtract(existingDocsKeys)
        docsToBeCreated.addAll(mParivahanDocs.filter { docsToCreateKeys.contains(it.key) }.map { it.value })

        val docsToUpdateKeys = mParivahanDocsKeys.intersect(existingDocsKeys)

        docsToUpdateKeys.forEach { name ->
            val existingDoc = existingDocs.find { it.getName() == name }
            val mParivahanDoc = mParivahanDocs[name]

            if (existingDoc != null) {
                if(mParivahanDoc != null){
                    existingDoc.updateCfFieldsIfNeeded(mParivahanDoc)
                }
                existingDoc.updateExpiryIfNeeded()


//                var isUpdateNeeded = false
//
//                val mParivahanDocExpiryCf = mParivahanDoc.getCustomFields()?.find { it.getFieldKey() in FLEET_VEHICLE_EXPIRY_DATE_KEYS }
//                val mParivahanDocIdCf = mParivahanDoc.getCustomFields()?.find { it.getFieldKey() in FLEET_VEHICLE_ID_KEYS }
//
//                if (mParivahanDocExpiryCf != null || mParivahanDocIdCf != null) {
//                    val existingDocExpiryCf = existingDoc.getCustomFields()?.find { it.getFieldKey() == mParivahanDocExpiryCf?.getFieldKey() }
//                    val existingDocIdCf = existingDoc.getCustomFields()?.find { it.getFieldKey() == mParivahanDocIdCf?.getFieldKey() }
//
//                    if (existingDocExpiryCf != null || existingDocIdCf != null) {
//                        val existingDocExpiryDate = existingDocExpiryCf?.getValue()?.toLongOrNull()
//                        val mParivahanDocExpiryDate = mParivahanDocExpiryCf?.getValue()?.toLongOrNull()
//                        val existingDocId = existingDocIdCf?.getValue()
//                        val mParivahanDocId = mParivahanDocIdCf?.getValue()
//
//                        if (mParivahanDocExpiryDate != null && mParivahanDocExpiryDate != existingDocExpiryDate) {
//                            isUpdateNeeded = true
//                        }
//                        if(mParivahanDocId != null && mParivahanDocId != existingDocId){
//                            isUpdateNeeded = true
//                        }
//                        if ((existingDocExpiryDate != null && existingDoc.getIsExpirable() == false) ||
//                            existingDocExpiryDate != existingDoc.getExpireDate()) {
//                            isUpdateNeeded = true
//                        }
//                    }else{
//                        isUpdateNeeded = true
//                    }
//                }
//
//                if (isUpdateNeeded) {
//                    copyChangedFields(mParivahanDoc, existingDoc)
//                    docsToBeUpdated.add(existingDoc)
//                }
            }
        }

        return Pair(docsToBeUpdated,docsToBeCreated)
    }

    fun Document.updateCfFieldsIfNeeded(serverDoc: Document){
        val keysToLookFor = docTypeWiseFields.getOrDefault(this.getName(), mutableListOf())
        val toAddCfs = serverDoc.getCustomFields()?.filter { keysToLookFor.contains(it.getFieldKey())}?.toList() ?: listOf()
        this.getCustomFields()?.filter { toAddCfs.map { it.getFieldKey() }.contains(it.getFieldKey()).not() }?.toMutableList()?.addAll(toAddCfs)
    }

    fun  Document.updateExpiryIfNeeded(){
        val oldExpiry = this.getExpireDate()
        val newExpiry = this.getCustomFields()?.find { it.getFieldKey() == docTypeWiseExpiry.getOrDefault(this.getName(),"X") }?.getValue()?.toLongOrNull()
        if(newExpiry!=null){
            if((oldExpiry ?: 0L ) < newExpiry){
                this.setExpireDate(newExpiry)
            }
        }
        if(this.getExpireDate()!=null){
            this.setIsExpirable(true)
        }
    }

    private fun maxDocsFromMPariVahanData(vehicleData: VerifiedVehicle, resourceId: String): HashMap<String, Document> {
        val map = hashMapOf<String, Document>()

        val allDocs = docTypeWiseFields.keys
        for(docName in allDocs){
            val cfs = mutableListOf<LiteCustomFields>()
            val expiryFieldName = when (docName){
                VEHICLE_RC-> {
                    cfs.addIfNotNull(mapStringValueToLiteCf(RC_ID,vehicleData.rcNumber))
                    cfs.addIfNotNull(mapStringValueToLiteCf(RC_EXPIRY_DATE,vehicleData.rcExpiryDate.toString(), "date" ))
                    RC_EXPIRY_DATE
                }
                VEHICLE_INSURANCE->{
                    cfs.addIfNotNull(mapStringValueToLiteCf(INSURANCE_NO,vehicleData.insuranceNumber))
                    cfs.addIfNotNull(mapStringValueToLiteCf(INSURANCE_EXPIRY_DATE,vehicleData.insuranceExpiryDate.toString(), "date" ))
                    INSURANCE_EXPIRY_DATE
                }
                else->{
                    "X"
                }
            }
            mapToDocumentObject(resourceId, docName ,cfs , cfs.find { it.getFieldKey() == expiryFieldName }?.getValue()?.toLongOrNull())
        }

        if (vehicleData.rcNumber != null || vehicleData.rcExpiryDate != null) {
            val cfs = mutableListOf<LiteCustomFields>()
            cfs.addIfNotNull(mapStringValueToLiteCf(RC_ID,vehicleData.rcNumber))
            cfs.addIfNotNull(mapStringValueToLiteCf(RC_EXPIRY_DATE,vehicleData.rcExpiryDate.toString(), "date" ))

            val doc = mapToDocumentObject(resourceId, VEHICLE_RC ,cfs, vehicleData.rcExpiryDate)
            map[VEHICLE_RC] = doc
        }

        if (vehicleData.insuranceNumber  != null || vehicleData.insuranceExpiryDate  != null) {
            val cfs = mutableListOf<LiteCustomFields>()
            cfs.addIfNotNull(mapStringValueToLiteCf(INSURANCE_NO,vehicleData.insuranceNumber))
            cfs.addIfNotNull(mapStringValueToLiteCf(INSURANCE_EXPIRY_DATE,vehicleData.insuranceExpiryDate.toString(), "date" ))

            val doc = mapToDocumentObject(resourceId, VEHICLE_INSURANCE ,cfs, vehicleData.insuranceExpiryDate)
            map[VEHICLE_INSURANCE] = doc
        }

        if (vehicleData.pollutionNumber  != null || vehicleData.pollutionExpiryDate  != null) {
            val cfs = mutableListOf<LiteCustomFields>()
            cfs.addIfNotNull(mapStringValueToLiteCf(POLLUTION_NO,vehicleData.pollutionNumber))
            cfs.addIfNotNull(mapStringValueToLiteCf(POLLUTION_EXPIRY_DATE,vehicleData.pollutionExpiryDate.toString(), "date" ))

            val doc = mapToDocumentObject(resourceId, VEHICLE_POLLUTION ,cfs, vehicleData.pollutionExpiryDate)
            map[VEHICLE_POLLUTION] = doc
        }

        if (vehicleData.permitNumber  != null || vehicleData.permitValidUpto  != null) {
            val cfs = mutableListOf<LiteCustomFields>()
            cfs.addIfNotNull(mapStringValueToLiteCf(PERMIT_NO,vehicleData.permitNumber))
            cfs.addIfNotNull(mapStringValueToLiteCf(PERMIT_EXPIRY_DATE,vehicleData.permitValidUpto.toString(), "date" ))

            val doc = mapToDocumentObject(resourceId, VEHICLE_PERMIT ,cfs, vehicleData.permitValidUpto)
            map[VEHICLE_PERMIT] = doc
        }

        if (vehicleData.nationalPermitNumber  != null || vehicleData.nationalPermitValidUpto  != null) {
            val cfs = mutableListOf<LiteCustomFields>()
            cfs.addIfNotNull(mapStringValueToLiteCf(ALL_INDIA_PERMIT_NO,vehicleData.nationalPermitNumber))
            cfs.addIfNotNull(mapStringValueToLiteCf(ALL_INDIA_PERMIT_EXPIRY_DATE,vehicleData.nationalPermitValidUpto.toString(), "date" ))

            val doc = mapToDocumentObject(resourceId, VEHICLE_ALL_INDIA_PERMIT ,cfs, vehicleData.nationalPermitValidUpto)
            map[VEHICLE_ALL_INDIA_PERMIT] = doc
        }

        return map
    }

    private fun mapToDocumentObject(resourceId: String, key : String, cfs : List<LiteCustomFields>, expirydate :Long?): Document {
        return  Document().apply {
            this.setName(key)
            this.setCustomFields(cfs)
            this.setResourceType(PARTNER_FLEET_DOC_RESOURCE_TYPE)
            this.setResourceId(resourceId)
            this.setExpireDate(expirydate)
            expirydate?.let { this.setIsExpirable(true) }
        }
    }

    private fun copyChangedFields(mParivahanDoc: Document, existingDoc: Document) {
        val mParivahanDocCfs = mParivahanDoc.getCustomFields() ?: return
        val existingDocCfs = (existingDoc.getCustomFields()?.associateBy { it.getFieldKey() } ?: return).toMutableMap()

        mParivahanDocCfs.forEach { mParivahanDocCf ->
            val existingDocCf = existingDocCfs[mParivahanDocCf.getFieldKey()]
            if (existingDocCf == null || mParivahanDocCf.getValue() != existingDocCf.getValue()) {
                existingDocCfs[mParivahanDocCf.getFieldKey()] = mParivahanDocCf
            }
        }
        existingDoc.setCustomFields(existingDocCfs.values.toList())
        val existingExpiryDate = existingDoc.getCustomFields()
            ?.find { customField ->
                FLEET_VEHICLE_EXPIRY_DATE_KEYS.any { expiryKey ->
                    customField.getFieldKey()?.equals(expiryKey, ignoreCase = true) == true
                }
            }?.getValue()?.toLongOrNull()
        if (existingExpiryDate != null) {
            existingDoc.setExpireDate(existingExpiryDate) //Setting Top Level Expire Date to Expiry Date from Custom Field
        }
        if (existingDoc.getExpireDate() != null && existingDoc.getIsExpirable() == false) {
            existingDoc.setIsExpirable(true)
        }
    }

    companion object {
        const val VEHICLE_RC = "VEHICLE_RC"
        const val VEHICLE_INSURANCE = "VEHICLE_INSURANCE"
        const val VEHICLE_POLLUTION = "VEHICLE_POLLUTION"
        const val VEHICLE_PERMIT = "VEHICLE_PERMITT"
        const val VEHICLE_ALL_INDIA_PERMIT = "VEHICLE_ALL_INDIA_PERMITT"
        const val RC_ID = "RC ID"
        const val RC_EXPIRY_DATE = "RC Expire Date"
        const val INSURANCE_NO = "Insurance No."
        const val INSURANCE_EXPIRY_DATE = "Insurance Expiry Date"
        const val POLLUTION_NO = "Pollution No."
        const val POLLUTION_EXPIRY_DATE = "Pollution Expiry Date"
        const val PERMIT_NO = "Permit No."
        const val PERMIT_EXPIRY_DATE = "Permit Expiry Date"
        const val ALL_INDIA_PERMIT_NO = "All India Permit No."
        const val ALL_INDIA_PERMIT_EXPIRY_DATE = "All India Permit Expiry Date"
        val FLEET_VEHICLE_EXPIRY_DATE_KEYS = mutableListOf(RC_EXPIRY_DATE, POLLUTION_EXPIRY_DATE, INSURANCE_EXPIRY_DATE, ALL_INDIA_PERMIT_EXPIRY_DATE, PERMIT_EXPIRY_DATE)
        val FLEET_VEHICLE_ID_KEYS = mutableListOf(RC_ID, INSURANCE_NO, POLLUTION_NO, PERMIT_NO, ALL_INDIA_PERMIT_NO)
        val docTypeWiseFields = hashMapOf(VEHICLE_RC to mutableListOf(RC_ID, RC_EXPIRY_DATE), VEHICLE_INSURANCE to mutableListOf(
            INSURANCE_NO, INSURANCE_EXPIRY_DATE))
        val docTypeWiseExpiry = hashMapOf( VEHICLE_RC to RC_EXPIRY_DATE , VEHICLE_POLLUTION to POLLUTION_EXPIRY_DATE)
    }
}