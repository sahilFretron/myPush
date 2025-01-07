/**
 * Use Google API and Redis to Calulate Total Km
*/
import rp from "request-promise"
import { ceil } from "mathjs"
const FRT_PUB_BASE_URL = "https://apis.fretron.com"

const G_API_KEY = "AIzaSyCQXxluKgwcmdPbkkpZkkELHP17GsQeGqE"

async function calKm(shipment) {
    let shipmentStages = shipment.shipmentStages;
    let len = shipmentStages ? shipmentStages.length : 0;
    let totalKmRun = 0;
    for (let i = 0; i < len - 1; i++) {
        let center1 =
            shipmentStages[i].place && shipmentStages[i].place.name
                ? shipmentStages[i].place.name
                : (shipmentStages[i].hub && shipmentStages[i].hub.name
                    ? shipmentStages[i].hub.name
                    : null);
        let center2 =
            shipmentStages[i + 1].hub && shipmentStages[i + 1].hub.name
                ? shipmentStages[i + 1].hub.name
                : shipmentStages[i + 1].place && shipmentStages[i + 1].place.name
                    ? shipmentStages[i + 1].place.name
                    : null;
        if (center1 && center2) {
            if (center2.indexOf("-") != -1) {
                center2 = center2.split("-")[0]
            }
            let redisKey = `${center1}#${center2}`
            // let distanceFromDb = await kv.get(redisKey)
            let distanceFromDb = null
            let getFromApi = true
            if (distanceFromDb != null && distanceFromDb != undefined) {
                if (Number(distanceFromDb) > 0.0) {
                    console.log(`From redis via key ${redisKey}`)
                    totalKmRun += Number(distanceFromDb) / 1000;
                    getFromApi = false
                }
                else {
                    console.log(`${distanceFromDb} : distance : From redis via key ${redisKey} : so ignoring`)
                }
            }
            if (getFromApi) {
                totalKmRun = await getKmFromApi(encodeURIComponent(`${center1},India`), encodeURIComponent(`${center2},India`))
                if (!totalKmRun || totalKmRun == 0 || totalKmRun == -1) {
                    center1 = shipmentStages[i].place ? 
                        `${shipmentStages[i].place.center.latitude},${shipmentStages[i].place.center.longitude}` :
                        `${shipmentStages[i].hub.center.latitude},${shipmentStages[i].hub.center.longitude}`;
                        
                    center2 = shipmentStages[i + 1].hub ?
                        `${shipmentStages[i + 1].hub.center.latitude},${shipmentStages[i + 1].hub.center.longitude}` :
                        `${shipmentStages[i + 1].place.center.latitude},${shipmentStages[i + 1].place.center.longitude}`;
                        
                    totalKmRun = await getKmFromApi(center1, center2)
                }
                // await kv.set(redisKey, totalKmRun + "")
                totalKmRun = (totalKmRun / 1000);
            }

        } else {
            console.log(`Shipment stage:[${i}] or [${i + 1}] centers are null`);
        }
    }
    return ceil(totalKmRun);
}

async function getKmFromApi(center1, center2) {
    let url = `${FRT_PUB_BASE_URL}/itinerary/admin/calculateDistance/via-key?origin=${center1}&destination=${center2}&apiKey=${G_API_KEY}`
    console.log(`URL : ${url}`)
    let res = await rp({
        method: "GET",
        uri: url,
        json: true,
    });
    console.log(`CalKm by shipment Stage status : ${res.status}`);
    if (res.status == 200) {
        return res.data
    }
}


let sh = {
    "creationTime": 1735564529689,
    "customFields": [
        {
            "indexedValue": [
                "FreightCost_0.0"
            ],
            "fieldKey": "FreightCost",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "0.0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "FreightType_perMT"
            ],
            "fieldKey": "FreightType",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "perMT",
            "isRemark": false
        },
        {
            "indexedValue": [
                "PONo_0938196e-65df-4350-a338-e3fc90a4533c"
            ],
            "fieldKey": "PONo",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "0938196e-65df-4350-a338-e3fc90a4533c",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Insurance No._180600312410000299"
            ],
            "fieldKey": "Insurance No.",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "180600312410000299",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Insurance Valid From_1718649000000"
            ],
            "fieldKey": "Insurance Valid From",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "date",
            "value": "1718649000000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Insurance Expiry Date_1750530600000"
            ],
            "fieldKey": "Insurance Expiry Date",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "date",
            "value": "1750530600000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Pollution No._UP06700300003020"
            ],
            "fieldKey": "Pollution No.",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "3bd460ec-a26f-486f-a589-a28d858f9fae",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "UP06700300003020",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Pollution Valid From_1708194600000"
            ],
            "fieldKey": "Pollution Valid From",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "4b5f60d0-aed7-4922-91c3-cbdd92d7c5cf",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "date",
            "value": "1708194600000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Pollution Expiry Date_1739730600000"
            ],
            "fieldKey": "Pollution Expiry Date",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "363bfff2-935b-4113-b29d-697ca2818b15",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "date",
            "value": "1739730600000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "RC ID_"
            ],
            "fieldKey": "RC ID",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "",
            "isRemark": false
        },
        {
            "indexedValue": [
                "RC Valid From_null"
            ],
            "fieldKey": "RC Valid From",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "date",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": [
                "RC Expire Date_null"
            ],
            "fieldKey": "RC Expire Date",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "date",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant Tracking_Yes"
            ],
            "fieldKey": "Plant Tracking",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": [
                "Yes",
                "No"
            ],
            "fieldType": "yes-no",
            "value": "Yes",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Tracking Radius_1000.0"
            ],
            "fieldKey": "Tracking Radius",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": "1000.0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant Tracking Eligibility_No"
            ],
            "fieldKey": "Plant Tracking Eligibility",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": [
                "Yes",
                "No"
            ],
            "fieldType": "yes-no",
            "value": "Yes",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant Tracking Last Update_1736055312533"
            ],
            "fieldKey": "Plant Tracking Last Update",
            "multiple": true,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": [],
            "fieldType": "dateTime",
            "value": "1736227466793",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Color_#324aa8"
            ],
            "fieldKey": "Color",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": "#324aa8",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Shipment Created By_OM PRAKASH KUMAR"
            ],
            "fieldKey": "Shipment Created By",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "81a529af-fea3-4f40-b442-e5f6570efe92",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "OM PRAKASH KUMAR",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Reason - Manual shipment closure_null"
            ],
            "fieldKey": "Reason - Manual shipment closure",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "e35646fb-92b7-4bc0-8820-c3dd3d4c3bdf",
            "required": true,
            "accessType": "mandatory_on_completion",
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": [
                "Arrived by Geofence but exited with disabled GPS",
                "Arrived with disabled GPS",
                "Route Deviation/ Customer unloads the material in different locations",
                "Two/More customer/location material",
                "Edited arrival/ departure time or Shipment Details",
                "New Customer/ Geofence not done",
                "Consignment Issue/ PT/ PTD Vehicle",
                "Customer stopped the vehicle before unloading point",
                "Geofence not hit or on time",
                "Vehicle exited from Geofence area before unloading",
                "Stopped at Geofence area for a long time after unloading"
            ],
            "fieldType": "select",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": null,
            "fieldKey": "POD Image (Front)",
            "multiple": true,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "arrayOfJson",
            "options": null,
            "fieldType": "camera",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": null,
            "fieldKey": "POD Image (Back)",
            "multiple": true,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "arrayOfJson",
            "options": null,
            "fieldType": "camera",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": [
                "POD Remark_null"
            ],
            "fieldKey": "POD Remark",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": [
                "Lead Distance_0"
            ],
            "fieldKey": "Lead Distance",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "66ad97c5-2eca-42ec-9840-16f9b28ff66c",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Material_REBAR_FE550D_10.0DIA_12"
            ],
            "fieldKey": "Material",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "6d0afe9d-f7c1-4093-9195-58b87f72b745",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "text",
            "options": null,
            "fieldType": "text",
            "value": "REBAR_FE550D_10.0DIA_12",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Customer Name_DILIP BUILDCON LIMITED"
            ],
            "fieldKey": "Customer Name",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "6ff7f20c-be7d-40e8-80b4-00ac5ba2565f",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "DILIP BUILDCON LIMITED",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Customer City_CHAMOLI-DILIP BUILDCON LIMITED"
            ],
            "fieldKey": "Customer City",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "text",
            "options": null,
            "fieldType": "text",
            "value": "CHAMOLI-DILIP BUILDCON LIMITED",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Quantity_33"
            ],
            "fieldKey": "Quantity",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "404a34f0-284e-4f5f-8e53-bb181f751125",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "text",
            "options": null,
            "fieldType": "text",
            "value": "33",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Material Type_TMT"
            ],
            "fieldKey": "Material Type",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "78aa10fd-ad54-4a7f-88c2-627e9852ad79",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": [
                "WIRE ROD",
                "WELD MESH",
                "TMT",
                "CUT & BEND",
                "U BEND",
                "FLAT",
                "ROUND",
                "TMT COIL",
                "COAL",
                "WOOD",
                "SCRAP",
                "MILL SCALE"
            ],
            "fieldType": "select",
            "value": "TMT",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Route Km_1154"
            ],
            "fieldKey": "Route Km",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "1154",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Driver GPS Advance_450"
            ],
            "fieldKey": "Driver GPS Advance",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "1e177911-7120-4ca6-9fd8-ef31d13428d7",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "450",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Transportation Type_CT"
            ],
            "fieldKey": "Transportation Type",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "1c8ac8ca-1340-4b2c-bbd9-d6fe22143777",
            "required": true,
            "accessType": "mandatory_on_create",
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": [
                "PT",
                "PTD",
                "CT"
            ],
            "fieldType": "select",
            "value": "CT",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Driver Remark_Now Rudrapur, Uttrakhand, driver was at home."
            ],
            "fieldKey": "Driver Remark",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "66ec1fb9-70c9-44e6-8506-fb3ace5dbb1a",
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": "Now Rudrapur, Uttrakhand, driver was at home.",
            "isRemark": false
        },
        {
            "indexedValue": [
                "In Plant Remark_null"
            ],
            "fieldKey": "In Plant Remark",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "8e0069eb-b20b-4645-a92b-eaa342b2a7a3",
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": [
                "Vehicle Stage_In Transit"
            ],
            "fieldKey": "Vehicle Stage",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "85930cbf-3eb2-48e9-8609-ec574dca56e0",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "In Transit",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "Driver Image",
            "multiple": true,
            "description": "",
            "remark": "",
            "uuid": "6ecf7031-f259-48c5-81ce-ded0e755fee9",
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "arrayOfJson",
            "options": [],
            "fieldType": "camera",
            "value": "[{\"resourceId\":null,\"customFields\":null,\"downloadUrl\":\"https://storage.googleapis.com/fretron-document-bucket/uploads/823947a3-02c0-4e65-8f4e-21da370ea6cd/a2cd6d69-3d9a-4cc2-a7e2-9c09d7c12b0a@Image.jpg\",\"updates\":{\"traceID\":\"4bfa266f-37a8-4e1b-a5a4-df6f036667f3\",\"resourceId\":\"a2cd6d69-3d9a-4cc2-a7e2-9c09d7c12b0a\",\"updatedBy\":\"USER\",\"changes\":null,\"sourceOfInformation\":\"created\",\"description\":\"document created\",\"forwardReasons\":[\"document.added\"],\"userId\":\"80c9acf3-3cbd-47aa-987b-3482e99b6422\",\"uuid\":\"cba150d5-be8f-4021-b7ce-16fc398df4ae\",\"revision\":null,\"time\":1735564660194,\"forwardedFrom\":null,\"resourceType\":\"Document\",\"updateType\":null},\"uuid\":\"a2cd6d69-3d9a-4cc2-a7e2-9c09d7c12b0a\",\"orgId\":\"823947a3-02c0-4e65-8f4e-21da370ea6cd\",\"docPath\":\"/uploads/823947a3-02c0-4e65-8f4e-21da370ea6cd/a2cd6d69-3d9a-4cc2-a7e2-9c09d7c12b0a@Image.jpg\",\"createdAt\":1735564660194,\"isExpirable\":false,\"previewString\":null,\"createdBy\":\"80c9acf3-3cbd-47aa-987b-3482e99b6422\",\"name\":\"Image.jpg\",\"expireDate\":null,\"resourceType\":\"FILE\"}]",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "GPS Installation",
            "multiple": true,
            "description": "",
            "remark": "",
            "uuid": "89bf77e2-3f01-423f-a38e-06d19c6550bc",
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "arrayOfJson",
            "options": [],
            "fieldType": "camera",
            "value": "[{\"resourceId\":null,\"customFields\":null,\"downloadUrl\":\"https://storage.googleapis.com/fretron-document-bucket/uploads/823947a3-02c0-4e65-8f4e-21da370ea6cd/3a6ca374-d94b-4687-8c8a-a7e8cbcb85c8@Image.jpg\",\"updates\":{\"traceID\":\"39009a68-342e-4216-b9f9-fd42e02c8b11\",\"resourceId\":\"3a6ca374-d94b-4687-8c8a-a7e8cbcb85c8\",\"updatedBy\":\"USER\",\"changes\":null,\"sourceOfInformation\":\"created\",\"description\":\"document created\",\"forwardReasons\":[\"document.added\"],\"userId\":\"105e084f-26b8-4e7e-addc-83c9741e107f\",\"uuid\":\"24cb1776-058e-483d-a41b-8bdc12392b93\",\"revision\":null,\"time\":1735570711119,\"forwardedFrom\":null,\"resourceType\":\"Document\",\"updateType\":null},\"uuid\":\"3a6ca374-d94b-4687-8c8a-a7e8cbcb85c8\",\"orgId\":\"823947a3-02c0-4e65-8f4e-21da370ea6cd\",\"docPath\":\"/uploads/823947a3-02c0-4e65-8f4e-21da370ea6cd/3a6ca374-d94b-4687-8c8a-a7e8cbcb85c8@Image.jpg\",\"createdAt\":1735570711119,\"isExpirable\":false,\"previewString\":null,\"createdBy\":\"105e084f-26b8-4e7e-addc-83c9741e107f\",\"name\":\"Image.jpg\",\"expireDate\":null,\"resourceType\":\"FILE\"}]",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Device Connection_Fuse Box/Battery"
            ],
            "fieldKey": "Device Connection",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "2e4b9ef3-33a1-4f88-9ab9-0f19e0b9a071",
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": [
                "Fuse Box/Battery",
                "Others",
                "Installed (Fuse Box/Battery)",
                "Installed (Others)"
            ],
            "fieldType": "select",
            "value": "Fuse Box/Battery",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Disconnection Remark _null"
            ],
            "fieldKey": "Disconnection Remark ",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "c9319ab4-fedd-4f51-8491-dd9056214433",
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": [
                "DO ISSUED_D.O. Issued"
            ],
            "fieldKey": "DO ISSUED",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "f31b50cc-3363-45ac-b8a6-a92d1233e3ea",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": null,
            "options": [
                "D.O. Issued",
                "Not Issued"
            ],
            "fieldType": "radio-button",
            "value": "D.O. Issued",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Incoterm DO_0072179577_ZFT"
            ],
            "fieldKey": "Incoterm DO_0072179577",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "ZFT",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Route DO_0072179577_PTUKCH"
            ],
            "fieldKey": "Route DO_0072179577",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "PTUKCH",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MeansOfTransType DO_0072179577_ZTRL"
            ],
            "fieldKey": "MeansOfTransType DO_0072179577",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "ZTRL",
            "isRemark": false
        },
        {
            "indexedValue": [
                "ShipingPoint DO_0072179577_7126"
            ],
            "fieldKey": "ShipingPoint DO_0072179577",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "7126",
            "isRemark": false
        },
        {
            "indexedValue": [
                "City DO_0072179577_CHAMOLI"
            ],
            "fieldKey": "City DO_0072179577",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "CHAMOLI",
            "isRemark": false
        },
        {
            "indexedValue": [
                "ShipingType DO_0072179577_Underload"
            ],
            "fieldKey": "ShipingType DO_0072179577",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "Underload",
            "isRemark": false
        },
        {
            "indexedValue": [
                "DoTotalWT DO_0072179577_34.000 "
            ],
            "fieldKey": "DoTotalWT DO_0072179577",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "34.000 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MaterialCode DO_0072179577 : 000110_REBAR_FE550D_16.0DIA_12"
            ],
            "fieldKey": "MaterialCode DO_0072179577 : 000110",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "REBAR_FE550D_16.0DIA_12",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MaterialDesc DO_0072179577 : 000110_RIB BAR GRADE FE550D 16.0 DIA_12MTR"
            ],
            "fieldKey": "MaterialDesc DO_0072179577 : 000110",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "RIB BAR GRADE FE550D 16.0 DIA_12MTR",
            "isRemark": false
        },
        {
            "indexedValue": [
                "DOItemWT DO_0072179577 : 000110_34.000 "
            ],
            "fieldKey": "DOItemWT DO_0072179577 : 000110",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "34.000 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Do Numbers_0072179577"
            ],
            "fieldKey": "Do Numbers",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "bbcfb69c-4da9-401b-8249-a825203b3fe7",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "0072179577",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Do Creation Time SAP_1735567495000"
            ],
            "fieldKey": "Do Creation Time SAP",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "d5db4856-4add-45b2-924e-00570590d436",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735567495000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "GateInDone_Yes"
            ],
            "fieldKey": "GateInDone",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "4f052728-d3f0-49e2-a4ce-3b32cb4b1765",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": [
                "Yes",
                "No"
            ],
            "fieldType": "yes-no",
            "value": "Yes",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Tracking Mode Updated By_OM PRAKASH KUMAR"
            ],
            "fieldKey": "Tracking Mode Updated By",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "OM PRAKASH KUMAR",
            "isRemark": false
        },
        {
            "indexedValue": [
                "GPS Assign Time_1735567229563"
            ],
            "fieldKey": "GPS Assign Time",
            "multiple": true,
            "description": "GPS Assign Time",
            "remark": "",
            "uuid": "c5026bd7-d23a-4b83-a052-6e41f8876554",
            "required": false,
            "accessType": null,
            "input": "date",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "dateTime",
            "value": "1735567229563",
            "isRemark": false
        },
        {
            "indexedValue": [
                "GPS Assigned by_OM PRAKASH KUMAR"
            ],
            "fieldKey": "GPS Assigned by",
            "multiple": false,
            "description": "GPS Assigned by",
            "remark": "",
            "uuid": "71a00204-bd5b-4dd6-a56e-22017336b6d4",
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": "OM PRAKASH KUMAR",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant Processing Stage_BAR MILL LOADING POINT"
            ],
            "fieldKey": "Plant Processing Stage",
            "multiple": true,
            "description": "Plant Processing Stage",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "BAR MILL LOADING POINT",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant Stage Name_WB"
            ],
            "fieldKey": "Plant Stage Name",
            "multiple": true,
            "description": "Plant Stage Name",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "WB",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant Boundary Name_WB NO 4-5 NEAR GATE A"
            ],
            "fieldKey": "Plant Boundary Name",
            "multiple": true,
            "description": "Plant Boundary Name",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "WB NO 4-5 NEAR GATE A",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gate In Time SAP_1735570562000"
            ],
            "fieldKey": "Gate In Time SAP",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "7ebd919b-c4ac-4b2c-8e92-df4151efc466",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735570562000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gate Entry Number_7110209533"
            ],
            "fieldKey": "Gate Entry Number",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "a25f8a4f-c70d-486b-b447-b810b8e8bff3",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "7110209533",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Tare Weight Time SAP_1735571325000"
            ],
            "fieldKey": "Tare Weight Time SAP",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "77f2e771-3304-41f2-90de-30482bee88da",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735571325000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Tare Weight_13.17 "
            ],
            "fieldKey": "Tare Weight",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "35adc8cb-5193-4e69-b1ad-ead34759f2d8",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "13.17 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant Loading Start Time_1735571965000"
            ],
            "fieldKey": "Plant Loading Start Time",
            "multiple": false,
            "description": "Plant Loading Start Time",
            "remark": "",
            "uuid": "2edad136-1b4d-45c6-bbe6-852726d70d6e",
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735571965000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant Loading End Time_1735616515000"
            ],
            "fieldKey": "Plant Loading End Time",
            "multiple": false,
            "description": "Plant Loading End Time",
            "remark": "",
            "uuid": "144fca27-0c30-4cad-a602-98416b574478",
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735616515000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "LoadingStartTime_1735571952000"
            ],
            "fieldKey": "LoadingStartTime",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "b9778ca9-838f-4938-a0ab-30d466a611d2",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735571952000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "LoadingSinceFourHour_Yes"
            ],
            "fieldKey": "LoadingSinceFourHour",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "88b124dc-795c-40d4-8919-5fa4680f4863",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": [
                "Yes"
            ],
            "fieldType": "yes-no",
            "value": "Yes",
            "isRemark": false
        },
        {
            "indexedValue": [
                "LoadingEndTime_1735613192000"
            ],
            "fieldKey": "LoadingEndTime",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "e5acefd0-f623-4da0-90e5-6a79f6474cef",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735613192000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gross Weight_12.500 "
            ],
            "fieldKey": "Gross Weight",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "dfbf9de9-0658-4878-93a7-79c7ccca3708",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "12.500 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gross Weight Time_1735618583000"
            ],
            "fieldKey": "Gross Weight Time",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735618583000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "PGI Time DO Item 0072179616_1735621386000"
            ],
            "fieldKey": "PGI Time DO Item 0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735621386000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "TC Time DO Item 000100_1735622040000"
            ],
            "fieldKey": "TC Time DO Item 000100",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735622040000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "TC Time DO Item 000110_1735622041000"
            ],
            "fieldKey": "TC Time DO Item 000110",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735622041000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "TC Time DO Item 000140_1735622042000"
            ],
            "fieldKey": "TC Time DO Item 000140",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735622042000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice 1107342325 Time_1735622171000"
            ],
            "fieldKey": "Invoice 1107342325 Time",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735622171000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "TotalINVAmount DO_0072179616_2286023.44"
            ],
            "fieldKey": "TotalINVAmount DO_0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "2286023.44",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Incoterm DO_0072179616_ZFT"
            ],
            "fieldKey": "Incoterm DO_0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "ZFT",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Route DO_0072179616_PTUKCH"
            ],
            "fieldKey": "Route DO_0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "PTUKCH",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MeansOfTransType DO_0072179616_ZTRL"
            ],
            "fieldKey": "MeansOfTransType DO_0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "ZTRL",
            "isRemark": false
        },
        {
            "indexedValue": [
                "ShipingPoint DO_0072179616_7126"
            ],
            "fieldKey": "ShipingPoint DO_0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "7126",
            "isRemark": false
        },
        {
            "indexedValue": [
                "City DO_0072179616_CHAMOLI"
            ],
            "fieldKey": "City DO_0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "CHAMOLI",
            "isRemark": false
        },
        {
            "indexedValue": [
                "ShipingType DO_0072179616_Underload"
            ],
            "fieldKey": "ShipingType DO_0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "Underload",
            "isRemark": false
        },
        {
            "indexedValue": [
                "DoTotalWT DO_0072179616_34.130 "
            ],
            "fieldKey": "DoTotalWT DO_0072179616",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "34.130 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MaterialCode DO_0072179616 : 000100_REBAR_FE550D_10.0DIA_12"
            ],
            "fieldKey": "MaterialCode DO_0072179616 : 000100",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "REBAR_FE550D_10.0DIA_12",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MaterialDesc DO_0072179616 : 000100_RIB BAR GRADE FE550D 10.0 DIA_12MTR"
            ],
            "fieldKey": "MaterialDesc DO_0072179616 : 000100",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "RIB BAR GRADE FE550D 10.0 DIA_12MTR",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MaterialCode DO_0072179616 : 000110_REBAR_FE550D_16.0DIA_12"
            ],
            "fieldKey": "MaterialCode DO_0072179616 : 000110",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "REBAR_FE550D_16.0DIA_12",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MaterialDesc DO_0072179616 : 000110_RIB BAR GRADE FE550D 16.0 DIA_12MTR"
            ],
            "fieldKey": "MaterialDesc DO_0072179616 : 000110",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "RIB BAR GRADE FE550D 16.0 DIA_12MTR",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MaterialCode DO_0072179616 : 000140_REBAR_FE550D_32.0DIA_12"
            ],
            "fieldKey": "MaterialCode DO_0072179616 : 000140",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "REBAR_FE550D_32.0DIA_12",
            "isRemark": false
        },
        {
            "indexedValue": [
                "MaterialDesc DO_0072179616 : 000140_RIB BAR GRADE FE550D 32.0 DIA_12MTR"
            ],
            "fieldKey": "MaterialDesc DO_0072179616 : 000140",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "RIB BAR GRADE FE550D 32.0 DIA_12MTR",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Net Wt Order 0707746444 : 000100_12.376 "
            ],
            "fieldKey": "Net Wt Order 0707746444 : 000100",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "12.376 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Freight PerMt Order 0707746444 : 000100_0.00 "
            ],
            "fieldKey": "Freight PerMt Order 0707746444 : 000100",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "0.00 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Net Wt Order 0707746444 : 000110_9.873 "
            ],
            "fieldKey": "Net Wt Order 0707746444 : 000110",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "9.873 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Freight PerMt Order 0707746444 : 000110_0.00 "
            ],
            "fieldKey": "Freight PerMt Order 0707746444 : 000110",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "0.00 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Net Wt Order 0707746444 : 000140_11.881 "
            ],
            "fieldKey": "Net Wt Order 0707746444 : 000140",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "11.881 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Freight PerMt Order 0707746444 : 000140_0.00 "
            ],
            "fieldKey": "Freight PerMt Order 0707746444 : 000140",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "0.00 ",
            "isRemark": false
        },
        {
            "indexedValue": [
                "LR Number_JSPL/PAT/SHTC/24-25/073428"
            ],
            "fieldKey": "LR Number",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "41241c4f-b464-423b-b8fe-65d42b6a7a73",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "JSPL/PAT/SHTC/24-25/073428",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gate Out Time SAP_1735628038000"
            ],
            "fieldKey": "Gate Out Time SAP",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "d31d3fe8-faa9-436e-ab34-1bd4f144bfe8",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735628038000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice Numbers_1107342325"
            ],
            "fieldKey": "Invoice Numbers",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "c01591d8-b7a2-4b99-ab0c-8e6c3a3511c1",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "1107342325",
            "isRemark": false
        },
        {
            "indexedValue": [
                "SAP Total Weight_34.129999999999995"
            ],
            "fieldKey": "SAP Total Weight",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "34.129999999999995",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Applicable MGT Via Vehicle capacity_34.129999999999995"
            ],
            "fieldKey": "Applicable MGT Via Vehicle capacity",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "34.129999999999995",
            "isRemark": false
        },
        {
            "indexedValue": [
                "VehiclePassingCapcity_33.3"
            ],
            "fieldKey": "VehiclePassingCapcity",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "33.3",
            "isRemark": false
        },
        {
            "indexedValue": [
                "VehicleUnloadenWeight_12.2"
            ],
            "fieldKey": "VehicleUnloadenWeight",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "12.2",
            "isRemark": false
        },
        {
            "indexedValue": [
                "VehicleLoadedWt_45.5"
            ],
            "fieldKey": "VehicleLoadedWt",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "45.5",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant LoadingEndTime_1735613192000"
            ],
            "fieldKey": "Plant LoadingEndTime",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "366df6c9-6754-498f-b3c2-a09db37b2ae0",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735613192000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant LoadingStartTime_1735582921000"
            ],
            "fieldKey": "Plant LoadingStartTime",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "dcfa7a28-4964-4e72-ac30-f647232ec76f",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735582921000",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "Route Assigned By",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "arrayOfString",
            "options": [
                "System",
                "User"
            ],
            "fieldType": "select",
            "value": "System",
            "isRemark": false
        },
        {
            "indexedValue": [
                "FASTAG_TRACKING_ENABLED_Yes"
            ],
            "fieldKey": "FASTAG_TRACKING_ENABLED",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "yes-no",
            "value": "Yes",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Disconnection Time_0"
            ],
            "fieldKey": "Disconnection Time",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "55b72664-f516-4e64-9fa1-45fb5eb36bcd",
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": "0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Disconnection KM_0"
            ],
            "fieldKey": "Disconnection KM",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "fd837c90-cdae-4d00-bf85-7d672ccd4e7e",
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": "0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Power Cut Count_0"
            ],
            "fieldKey": "Power Cut Count",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "b5f03f24-20b4-49f1-a537-cb7ae0393ec4",
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": "0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Last Route Deviation Time_1735672779716"
            ],
            "fieldKey": "Last Route Deviation Time",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1735672779716",
            "isRemark": false
        },
        {
            "indexedValue": [
                "FASTAG_CONNECTED_Yes"
            ],
            "fieldKey": "FASTAG_CONNECTED",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "yes-no",
            "value": "Yes",
            "isRemark": false
        }
    ],
    "transportationMode": "ByRoad",
    "freightUnitLineItemId": "cdbb03ab-2be9-4f39-ac1c-b6287396cdd4",
    "lastSyncUpTime": 1735628041215,
    "updates": {
        "traceID": "tripPointEventsTopicByImei_2_72621173",
        "resourceId": "a44dd774-bb61-4327-8ffe-a6a014831506",
        "updatedBy": "USER",
        "changes": null,
        "sourceOfInformation": null,
        "description": null,
        "forwardReasons": [
            "gps.state.updated"
        ],
        "userId": "868ac373-ed4f-407d-9a26-b6b0e17fae1f",
        "uuid": "06a141e0-74ba-4688-8a3f-1d4bbc701c52",
        "revision": 4765,
        "time": 1736231065384,
        "forwardedFrom": null,
        "resourceType": "ShipmentObject",
        "updateType": "At Delivery Point"
    },
    "isActive": true,
    "uuid": "a44dd774-bb61-4327-8ffe-a6a014831506",
    "issues": null,
    "branch": {
        "companyCode": null,
        "address": "Unnamed Road, Patratu, Jharkhand 829143, India",
        "updatedBy": null,
        "customFields": null,
        "regionName": "East",
        "externalId": null,
        "branchName": null,
        "type": [
            "IT",
            "Operation",
            "Sales"
        ],
        "updates": null,
        "orgId": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
        "areaId": null,
        "geoLocation": null,
        "regionId": null,
        "areaName": null,
        "name": "JSPL Plant Patratu",
        "zoneId": null,
        "_id": "aab6d4f1-5601-4958-9a79-c9bab687c7e1",
        "zoneName": "East Zone",
        "contacts": [],
        "officeType": null,
        "materialServices": null
    },
    "orgId": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
    "shipmentType": "DirectLeg",
    "completionTime": null,
    "orderNumbers": [
        "FRVR0086623",
        "FRVR0086562"
    ],
    "routeId": "420e478c-3e25-4cdd-a03b-feb98b2bd98c",
    "shipmentTrackingStatus": "At Delivery Point",
    "lastForwardTime": 1736230250234,
    "runningStatus": null,
    "delayTrackingStatus": "UP TO DATE",
    "delayReasonLastUpdateTime": 1735799656492,
    "links": null,
    "shipmentDate": 1735564529330,
    "delayReason": "Driver at Home",
    "shipmentNumber": "FRETSH000073750",
    "originalEdd": 1735714438000,
    "edd": 1735714438000,
    "delayReasonUpdateExpiryTime": null,
    "externalShipmentId": null,
    "fleetInfo": {
        "isTrackingEnable": false,
        "forwardingAgent": null,
        "verificationStatus": null,
        "trackingMode": "VTS",
        "broker": {
            "geoFence": null,
            "documents": [],
            "customFields": null,
            "isPortalEnabled": true,
            "type": "vendor",
            "updates": null,
            "uuid": "9be9ea50-0867-4bd3-9bf0-a7fe9199423a",
            "orgId": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
            "firmType": "INDIVISUAL",
            "gstn": "20ADIFS7660P1ZJ",
            "voterId": null,
            "verificationTicketId": null,
            "companyCodes": null,
            "group": {
                "name": "lorryOwner",
                "partnerType": null,
                "uuid": null,
                "orgId": null
            },
            "address": "{\"pincode\":\"\",\"address\":\"JAY SHIV APARTMENT DIMNA BUS STOP (OPP SHIV MANDIR) DIMNA ROAD, MANGO\",\"city\":\"JAMSHEDUR\",\"state\":\"JHARKHAND\"}",
            "verificationStatus": "unverified",
            "externalId": "63766",
            "panNumber": "ADIFS7660P",
            "aadharNo": null,
            "parentId": null,
            "places": null,
            "route": null,
            "name": "SHIVA",
            "location": null,
            "fretronId": null,
            "contacts": [
                {
                    "emails": [
                        "sunnyksingh146@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "8210034480"
                    ],
                    "mobileNumber": null,
                    "name": "Sunny Singh",
                    "type": null
                },
                {
                    "emails": [
                        "sonugoutam0058@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "7909017706"
                    ],
                    "mobileNumber": null,
                    "name": "sonu goutam",
                    "type": null
                },
                {
                    "emails": [
                        "pandeymr99@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "9523913940"
                    ],
                    "mobileNumber": null,
                    "name": "MANISH RAJ PANDEY",
                    "type": null
                },
                {
                    "emails": [
                        "yadavgautam7266019380@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "7266019380"
                    ],
                    "mobileNumber": null,
                    "name": "GAUTAM YADAV",
                    "type": null
                },
                {
                    "emails": [
                        "amitarush22@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "7631660033"
                    ],
                    "mobileNumber": null,
                    "name": "AMIT KUMAR",
                    "type": null
                },
                {
                    "emails": [
                        "raghukumar919@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "9931855425"
                    ],
                    "mobileNumber": null,
                    "name": "RAGHU KUMAR\t",
                    "type": null
                },
                {
                    "emails": [
                        "tsrinivasrao1042@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "8709049282"
                    ],
                    "mobileNumber": null,
                    "name": "T SRINIVAS RAO",
                    "type": null
                },
                {
                    "emails": [
                        "sonusinhaushamartin9244@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "8271217170"
                    ],
                    "mobileNumber": null,
                    "name": "SONU KUMAR SINHA",
                    "type": null
                },
                {
                    "emails": [
                        "Kailashkumarsingh815@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "6203687500"
                    ],
                    "mobileNumber": null,
                    "name": "Kailash Kumar Singh ",
                    "type": null
                },
                {
                    "emails": [
                        "akash.prajapati8615@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "7717758918"
                    ],
                    "mobileNumber": null,
                    "name": "Akash Prajapati",
                    "type": null
                },
                {
                    "emails": [
                        "deepusharma97642@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "9991135662"
                    ],
                    "mobileNumber": null,
                    "name": "RAHUL SHARMA ",
                    "type": null
                },
                {
                    "emails": [
                        "rishusinha9905@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "9905656496"
                    ],
                    "mobileNumber": null,
                    "name": "RISHU SINHA",
                    "type": null
                },
                {
                    "emails": [
                        "rs896469@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "8003101247"
                    ],
                    "mobileNumber": null,
                    "name": "Rohit Kumar",
                    "type": null
                }
            ],
            "status": "ACTIVE"
        },
        "uuid": "f9043cdb-6683-49c0-9280-f1c9710582cd",
        "orgId": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
        "vehicle": {
            "vtsDeviceId": null,
            "kmDriven": null,
            "secondaryDriverId": null,
            "attachedDocs": [],
            "customFields": [],
            "floorType": null,
            "description": null,
            "source": "FRETRON",
            "isTrackingEnabled": false,
            "updates": null,
            "uuid": null,
            "branch": null,
            "orgId": null,
            "vehicleLoadType": null,
            "associatedWith": null,
            "isDeleted": null,
            "customerId": null,
            "vehicleModel": null,
            "mileageEmpty": null,
            "mileageLoaded": null,
            "vehicleType": null,
            "groups": null,
            "externalId": null,
            "updateTime": null,
            "sharedWith": [],
            "baseLocationId": null,
            "vehicleMake": null,
            "vehicleRegistrationNumber": "NL01N7745",
            "chassisNumber": null,
            "driverId": null,
            "createTime": null,
            "loadCapacity": null,
            "truckLength": null,
            "category": null,
            "groupsExtended": null
        },
        "driver": {
            "pincode": null,
            "dlExpiryTime": 1816799400000,
            "attachedDocs": [],
            "isEmployee": false,
            "pfNumber": null,
            "address": null,
            "mobileNumbers": null,
            "dlNumber": "JH06 20060130782",
            "mobileNumber": "7766001917",
            "customFields": [
                {
                    "indexedValue": [
                        "Smart Phone_NO"
                    ],
                    "fieldKey": "Smart Phone",
                    "valueType": "string",
                    "fieldType": "yes-no",
                    "value": "NO",
                    "definitionId": null
                }
            ],
            "externalId": null,
            "updates": {
                "traceID": "cc7d2a23-e4eb-4ea7-844d-bba77ee807cb",
                "resourceId": "2fc6d7f7-430d-4055-925a-d9a93450bfbd",
                "updatedBy": "USER",
                "changes": null,
                "sourceOfInformation": null,
                "description": "added new Driver MAHENDRA YADAV",
                "forwardReasons": [
                    "driver.add.event"
                ],
                "userId": "9388767b-7bd2-432c-8316-b45ed7c835b0",
                "uuid": "7d8d30f5-8725-4ba6-87c5-e15f9a45b0f5",
                "revision": null,
                "time": 1706947257906,
                "forwardedFrom": null,
                "resourceType": "Driver",
                "updateType": null
            },
            "aadharNo": null,
            "type": null,
            "uuid": "2fc6d7f7-430d-4055-925a-d9a93450bfbd",
            "branch": null,
            "orgId": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
            "vehicleRegistrationNumber": null,
            "dob": null,
            "name": "MAHENDRA YADAV",
            "vehicleId": null,
            "associatedUserId": null,
            "status": "Active"
        },
        "fleetType": "Market",
        "fleetOwner": {
            "geoFence": null,
            "documents": [],
            "customFields": null,
            "isPortalEnabled": true,
            "type": "vendor",
            "updates": null,
            "uuid": "9be9ea50-0867-4bd3-9bf0-a7fe9199423a",
            "orgId": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
            "firmType": "INDIVISUAL",
            "gstn": "20ADIFS7660P1ZJ",
            "voterId": null,
            "verificationTicketId": null,
            "companyCodes": null,
            "group": {
                "name": "lorryOwner",
                "partnerType": null,
                "uuid": null,
                "orgId": null
            },
            "address": "{\"pincode\":\"\",\"address\":\"JAY SHIV APARTMENT DIMNA BUS STOP (OPP SHIV MANDIR) DIMNA ROAD, MANGO\",\"city\":\"JAMSHEDPUR\",\"state\":\"JHARKHAND\"}",
            "verificationStatus": "unverified",
            "externalId": "63766",
            "panNumber": "ADIFS7660P",
            "aadharNo": null,
            "parentId": null,
            "places": null,
            "route": null,
            "name": "SHYAM KISHORE ",
            "location": null,
            "fretronId": null,
            "contacts": [
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "7766001917"
                    ],
                    "mobileNumber": null,
                    "name": "SHYAM KISHORE ",
                    "type": null
                }
            ],
            "status": "ACTIVE"
        },
        "trainInfo": null,
        "lbsNumber": "7766001917",
        "secondaryDriver": {
            "pincode": null,
            "dlExpiryTime": null,
            "attachedDocs": null,
            "isEmployee": false,
            "pfNumber": null,
            "address": null,
            "mobileNumbers": null,
            "dlNumber": null,
            "mobileNumber": null,
            "customFields": null,
            "externalId": null,
            "updates": null,
            "aadharNo": null,
            "type": null,
            "uuid": null,
            "branch": null,
            "orgId": null,
            "vehicleRegistrationNumber": null,
            "dob": null,
            "name": null,
            "vehicleId": null,
            "associatedUserId": null,
            "status": null
        },
        "device": {
            "branchId": null,
            "isSuspended": null,
            "mobileNumber": null,
            "manufacturerName": null,
            "groups": null,
            "attachedResourceNumber": null,
            "externalId": null,
            "updateTime": null,
            "isAssociated": null,
            "sharedWith": null,
            "type": "lbs",
            "updates": null,
            "uuid": "6be401ce-234a-4ca9-a452-e7c82ce6f82c",
            "orgId": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
            "attachedResourceId": null,
            "isDeleted": null,
            "createTime": 1735565586892,
            "serviceProvider": "JIO",
            "imei": "355172105466567",
            "usedBy": null,
            "status": "EXPIRED"
        },
        "status": "ACTIVE"
    },
    "syncUpDueTime": null,
    "billingStatus": "Pending",
    "currentLocation": {
        "isFillingEnabled": false,
        "address": "Beside Bharat Dharam Kanta, Shail Vihar, Haridwar Bypass Road, Rishikesh, Uttarakhand 249201, India",
        "lngLat": [
            78.27932444444444,
            30.10889111111111
        ],
        "odometer": null,
        "latitude": 30.10889111111111,
        "course": 37,
        "imei": "355172105466567",
        "decoder": "Concox",
        "time": 1736103392000,
        "vehicleId": null,
        "speed": 0,
        "longitude": 78.27932444444444
    },
    "alerts": [
        {
            "closedBy": null,
            "createdAt": 1735672779716,
            "issueId": null,
            "createdBy": null,
            "snoozTime": null,
            "description": "Vehicle has been deviated from desired route",
            "type": "shipment.route.deviation.notification",
            "uuid": "a298c2ab-ee11-4c5a-a9f1-e38ce5d04208",
            "status": "CLOSED",
            "updatedAt": 1735672820731
        },
        {
            "closedBy": null,
            "createdAt": 1735674074792,
            "issueId": null,
            "createdBy": null,
            "snoozTime": null,
            "description": "Vehicle has been deviated from desired route",
            "type": "shipment.route.deviation.notification",
            "uuid": "247af67a-9d93-43c9-9794-94af1139db91",
            "status": "CLOSED",
            "updatedAt": 1735677782309
        },
        {
            "closedBy": null,
            "createdAt": 1735718432177,
            "issueId": null,
            "createdBy": null,
            "snoozTime": null,
            "description": "Edd Passed ",
            "type": "shipment.edd.passed.notification",
            "uuid": "380b72f5-de2c-449e-897c-073f6acf5877",
            "status": "CLOSED",
            "updatedAt": 1736103402705
        },
        {
            "closedBy": null,
            "createdAt": 1736050761947,
            "issueId": null,
            "createdBy": null,
            "snoozTime": null,
            "description": "Vehicle has been deviated from desired route",
            "type": "shipment.route.deviation.notification",
            "uuid": "ca6336ed-9b14-4f47-8fa4-6a6c217ce850",
            "status": "CLOSED",
            "updatedAt": 1736067680372
        }
    ],
    "equipments": null,
    "tripType": "Shipment",
    "lastDelayCalculationTime": null,
    "delayReasonUpdateDueTime": null,
    "locationTrackingStatus": "UP TO DATE",
    "poLineItemId": "adcb48b3-0ec9-439b-88da-5f31c6247447",
    "consignments": [],
    "customContacts": null,
    "shipmentStages": [
        {
            "departureTime": 1735628038000,
            "gateInTime": 1735570562000,
            "actualActivityStartTime": 1735571952000,
            "actualActivityEndTime": 1735613192000,
            "preActWtTime": null,
            "uuid": "3430f3d5-7089-4525-9e7b-8096fd8bd937",
            "consignmentDelivered": null,
            "resourceDropOff": null,
            "resourcePickup": null,
            "eta": null,
            "stageName": "JSPL Patratu, JSPL Patratu",
            "hub": null,
            "arrivalTime": 1735564529689,
            "expectedActivityStartTime": null,
            "secondaryStatus": null,
            "consignmentPickUps": [
                "517dcd5b-3778-4676-9a5f-0cfe178f900b"
            ],
            "postActWtTime": 1735618583000,
            "tripPoint": {
                "outOfTrackSince": null,
                "creationTime": 1735567229650,
                "purpose": "Pickup",
                "plannedArrival": null,
                "currentGpsState": {
                    "numberOfRecord": 29,
                    "totalTime": 746649,
                    "averageSpeeds": 9.530601336350935,
                    "eventType": "StateUpdated",
                    "uuid": "09311668-d727-4e18-8a17-089e455d6a72",
                    "isDisconnected": false,
                    "startLocation": {
                        "isFillingEnabled": false,
                        "address": "Jharkhand State Highway 2, Patratu, Jharkhand 829143, India",
                        "lngLat": [
                            85.31772444444445,
                            23.63132
                        ],
                        "odometer": null,
                        "latitude": 23.63132,
                        "course": 163,
                        "imei": "355172105466567",
                        "decoder": "Concox",
                        "time": 1735627028538,
                        "vehicleId": null,
                        "speed": 0,
                        "longitude": 85.31772444444445
                    },
                    "isNoGpsZone": false,
                    "mean": {
                        "isFillingEnabled": false,
                        "address": "",
                        "lngLat": [
                            85.31775325670502,
                            23.631688582375478
                        ],
                        "odometer": null,
                        "latitude": 23.631688582375478,
                        "course": null,
                        "imei": "",
                        "decoder": null,
                        "time": 1735627102706,
                        "vehicleId": "",
                        "speed": 0,
                        "longitude": 85.31775325670502
                    },
                    "imei": "355172105466567",
                    "startTime": 1735627028538,
                    "endTime": 1735627775187,
                    "vehicleId": null,
                    "state": "Moving",
                    "totalDistance": 318.9098050498629,
                    "endLocation": {
                        "isFillingEnabled": false,
                        "address": "Jharkhand State Highway 2, Patratu, Jharkhand 829143, India",
                        "lngLat": [
                            85.31679111111112,
                            23.631677777777778
                        ],
                        "odometer": null,
                        "latitude": 23.631677777777778,
                        "course": 257,
                        "imei": "355172105466567",
                        "decoder": "Concox",
                        "time": 1735627149000,
                        "vehicleId": null,
                        "speed": 9,
                        "longitude": 85.31679111111112
                    }
                },
                "updates": {
                    "traceID": "vehiclegpsstatetopic_12_119924985",
                    "resourceId": "3430f3d5-7089-4525-9e7b-8096fd8bd937",
                    "updatedBy": "SYSTEM",
                    "changes": null,
                    "sourceOfInformation": null,
                    "description": "From AT to AT",
                    "forwardReasons": [
                        "trippoint.current.location.updated",
                        "gps.state.updated",
                        "trippoint.updated"
                    ],
                    "userId": null,
                    "uuid": "f440f866-616d-48f5-8d95-e8c56dd0a47e",
                    "revision": 230,
                    "time": 1735627777146,
                    "forwardedFrom": null,
                    "resourceType": "TripPoint",
                    "updateType": null
                },
                "uuid": "3430f3d5-7089-4525-9e7b-8096fd8bd937",
                "sequenceId": null,
                "isDisconnected": false,
                "isOutOfTrack": false,
                "routeDeviationMinimumDistanceConstraint": 5000,
                "eta": null,
                "routeId": "Waiting For Gate In",
                "expectedActivityStartTime": null,
                "actualDeparture": null,
                "vehicleId": "355172105466567",
                "place": {
                    "hubId": null,
                    "boundary": null,
                    "address": "Unnamed Road, Patratu, Jharkhand 829143, India",
                    "accessibility": "public",
                    "addedBy": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
                    "center": {
                        "latitude": 23.633114,
                        "longitude": 85.322884
                    },
                    "suggestedRadius": 502,
                    "isOwned": false,
                    "centerCoordinates": [
                        85.322884,
                        23.633114
                    ],
                    "placeId": "50630ff4-0f01-4935-8580-c155c7a93c4b",
                    "geoJsonBoundry": null,
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "JSPL Patratu",
                    "state": null,
                    "category": "Manufacturing Plant/Factory/Yard",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "isOverSpeed": false,
                "remainingDistance": 0,
                "actualActivityStartTime": null,
                "forShipmentStages": [
                    "3430f3d5-7089-4525-9e7b-8096fd8bd937"
                ],
                "actualActivityEndTime": null,
                "actualArrival": 1735564529689,
                "purposedDistance": null,
                "plannedDeparture": null,
                "currentLocation": {
                    "isFillingEnabled": false,
                    "address": "Jharkhand State Highway 2, Patratu, Jharkhand 829143, India",
                    "lngLat": [
                        85.31679111111112,
                        23.631677777777778
                    ],
                    "odometer": null,
                    "latitude": 23.631677777777778,
                    "course": 257,
                    "imei": "355172105466567",
                    "decoder": "Concox",
                    "time": 1735627149000,
                    "vehicleId": null,
                    "speed": 9,
                    "longitude": 85.31679111111112
                },
                "isAutoCompleted": false,
                "coveredDistance": 31.510015969832846,
                "hub": {
                    "hubId": null,
                    "boundary": null,
                    "address": "Unnamed Road, Patratu, Jharkhand 829143, India",
                    "accessibility": "public",
                    "addedBy": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
                    "center": {
                        "latitude": 23.633114,
                        "longitude": 85.322884
                    },
                    "suggestedRadius": 502,
                    "isOwned": false,
                    "centerCoordinates": [
                        85.322884,
                        23.633114
                    ],
                    "placeId": "50630ff4-0f01-4935-8580-c155c7a93c4b",
                    "geoJsonBoundry": null,
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "JSPL Patratu",
                    "state": null,
                    "category": "Manufacturing Plant/Factory/Yard",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "overSpeedSince": null,
                "imei": "355172105466567",
                "assosiatedShipmentsId": [
                    "a44dd774-bb61-4327-8ffe-a6a014831506"
                ],
                "status": "COMPLETED"
            },
            "place": {
                "hubId": null,
                "boundary": null,
                "address": "Unnamed Road, Patratu, Jharkhand 829143, India",
                "accessibility": "public",
                "addedBy": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
                "center": {
                    "latitude": 23.633114,
                    "longitude": 85.322884
                },
                "suggestedRadius": 502,
                "isOwned": false,
                "centerCoordinates": [
                    85.322884,
                    23.633114
                ],
                "placeId": "50630ff4-0f01-4935-8580-c155c7a93c4b",
                "geoJsonBoundry": null,
                "externalId": null,
                "source": "FRETRON",
                "places": null,
                "viewport": null,
                "district": null,
                "name": "JSPL Patratu",
                "state": null,
                "category": "Manufacturing Plant/Factory/Yard",
                "subDistrict": null,
                "controllingBranchId": null
            },
            "controllingBranchId": null,
            "gateOutTime": null,
            "status": "COMPLETED"
        },
        {
            "departureTime": null,
            "gateInTime": null,
            "actualActivityStartTime": null,
            "actualActivityEndTime": null,
            "preActWtTime": null,
            "uuid": "a450eb2d-8a7b-4868-9933-bb7c6e81339e",
            "consignmentDelivered": [
                "517dcd5b-3778-4676-9a5f-0cfe178f900b"
            ],
            "resourceDropOff": null,
            "resourcePickup": null,
            "eta": null,
            "stageName": null,
            "hub": null,
            "arrivalTime": 1736103392000,
            "expectedActivityStartTime": null,
            "secondaryStatus": "WaitingForGateIn",
            "consignmentPickUps": null,
            "postActWtTime": null,
            "tripPoint": {
                "outOfTrackSince": null,
                "creationTime": 1735628040809,
                "purpose": "Delivery",
                "plannedArrival": null,
                "currentGpsState": {
                    "numberOfRecord": 5,
                    "totalTime": 87559308,
                    "averageSpeeds": 0.6069363672992142,
                    "eventType": "StateUpdated",
                    "uuid": "09704018-dd22-404c-973b-dd69ecc6d1f2",
                    "isDisconnected": false,
                    "startLocation": {
                        "isFillingEnabled": false,
                        "address": "Beside Bharat Dharam Kanta, Shail Vihar, Haridwar Bypass Road, Rishikesh, Uttarakhand 249201, India",
                        "lngLat": [
                            78.27945777777778,
                            30.110722222222222
                        ],
                        "odometer": null,
                        "latitude": 30.110722222222222,
                        "course": 295,
                        "imei": "355172105466567",
                        "decoder": "Concox",
                        "time": 1736143505000,
                        "vehicleId": null,
                        "speed": 7,
                        "longitude": 78.27945777777778
                    },
                    "isNoGpsZone": false,
                    "mean": {
                        "isFillingEnabled": false,
                        "address": "",
                        "lngLat": [
                            78.27939377777777,
                            30.111117777777782
                        ],
                        "odometer": null,
                        "latitude": 30.111117777777782,
                        "course": null,
                        "imei": "",
                        "decoder": null,
                        "time": 1736143724000,
                        "vehicleId": "",
                        "speed": 0,
                        "longitude": 78.27939377777777
                    },
                    "imei": "355172105466567",
                    "startTime": 1736143505000,
                    "endTime": 1736231064308,
                    "vehicleId": null,
                    "state": "Stopped",
                    "totalDistance": 58.16473519950803,
                    "endLocation": {
                        "isFillingEnabled": false,
                        "address": "Beside Bharat Dharam Kanta, Shail Vihar, Haridwar Bypass Road, Rishikesh, Uttarakhand 249201, India",
                        "lngLat": [
                            78.27937777777778,
                            30.111213333333335
                        ],
                        "odometer": null,
                        "latitude": 30.111213333333335,
                        "course": 12,
                        "imei": "355172105466567",
                        "decoder": "Concox",
                        "time": 1736143850000,
                        "vehicleId": null,
                        "speed": 0,
                        "longitude": 78.27937777777778
                    }
                },
                "updates": {
                    "traceID": "vehiclegpsstatetopic_12_121651160",
                    "resourceId": "a450eb2d-8a7b-4868-9933-bb7c6e81339e",
                    "updatedBy": "SYSTEM",
                    "changes": null,
                    "sourceOfInformation": null,
                    "description": "From AT to AT",
                    "forwardReasons": [
                        "trippoint.current.location.updated",
                        "gps.state.updated",
                        "trippoint.updated"
                    ],
                    "userId": null,
                    "uuid": "30887274-2866-4470-81f2-0ff475d7dbc8",
                    "revision": 4019,
                    "time": 1736231065311,
                    "forwardedFrom": null,
                    "resourceType": "TripPoint",
                    "updateType": null
                },
                "uuid": "a450eb2d-8a7b-4868-9933-bb7c6e81339e",
                "sequenceId": null,
                "isDisconnected": false,
                "isOutOfTrack": false,
                "routeDeviationMinimumDistanceConstraint": 5000,
                "eta": null,
                "routeId": "420e478c-3e25-4cdd-a03b-feb98b2bd98c",
                "expectedActivityStartTime": null,
                "actualDeparture": null,
                "vehicleId": "355172105466567",
                "place": {
                    "hubId": null,
                    "boundary": null,
                    "address": "CHAMOLI",
                    "accessibility": "public",
                    "addedBy": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
                    "center": {
                        "latitude": 30.111154,
                        "longitude": 78.281324
                    },
                    "suggestedRadius": 3500,
                    "isOwned": false,
                    "centerCoordinates": [
                        78.281324,
                        30.111154
                    ],
                    "placeId": "5a2a2fe4-00be-45dd-8407-bf25b45966f4",
                    "geoJsonBoundry": null,
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "CHAMOLI-DILIP BUILDCON LIMITED",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "isOverSpeed": false,
                "remainingDistance": 0,
                "actualActivityStartTime": 1736103392000,
                "forShipmentStages": [
                    "a450eb2d-8a7b-4868-9933-bb7c6e81339e"
                ],
                "actualActivityEndTime": null,
                "actualArrival": 1736103392000,
                "purposedDistance": null,
                "plannedDeparture": null,
                "currentLocation": {
                    "isFillingEnabled": false,
                    "address": "Beside Bharat Dharam Kanta, Shail Vihar, Haridwar Bypass Road, Rishikesh, Uttarakhand 249201, India",
                    "lngLat": [
                        78.27937777777778,
                        30.111213333333335
                    ],
                    "odometer": null,
                    "latitude": 30.111213333333335,
                    "course": 12,
                    "imei": "355172105466567",
                    "decoder": "Concox",
                    "time": 1736143850000,
                    "vehicleId": null,
                    "speed": 0,
                    "longitude": 78.27937777777778
                },
                "isAutoCompleted": false,
                "coveredDistance": 1299695.948282544,
                "hub": {
                    "hubId": null,
                    "boundary": null,
                    "address": "CHAMOLI",
                    "accessibility": "public",
                    "addedBy": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
                    "center": {
                        "latitude": 30.111154,
                        "longitude": 78.281324
                    },
                    "suggestedRadius": 3500,
                    "isOwned": false,
                    "centerCoordinates": [
                        78.281324,
                        30.111154
                    ],
                    "placeId": "5a2a2fe4-00be-45dd-8407-bf25b45966f4",
                    "geoJsonBoundry": null,
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "CHAMOLI-DILIP BUILDCON LIMITED",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "overSpeedSince": null,
                "imei": "355172105466567",
                "assosiatedShipmentsId": [
                    "a44dd774-bb61-4327-8ffe-a6a014831506"
                ],
                "status": "AT"
            },
            "place": {
                "hubId": null,
                "boundary": null,
                "address": "CHAMOLI",
                "accessibility": "public",
                "addedBy": "823947a3-02c0-4e65-8f4e-21da370ea6cd",
                "center": {
                    "latitude": 30.111154,
                    "longitude": 78.281324
                },
                "suggestedRadius": 3500,
                "isOwned": false,
                "centerCoordinates": [
                    78.281324,
                    30.111154
                ],
                "placeId": "5a2a2fe4-00be-45dd-8407-bf25b45966f4",
                "geoJsonBoundry": null,
                "externalId": null,
                "source": "FRETRON",
                "places": null,
                "viewport": null,
                "district": null,
                "name": "CHAMOLI-DILIP BUILDCON LIMITED",
                "state": null,
                "category": "Unloading Point",
                "subDistrict": null,
                "controllingBranchId": null
            },
            "controllingBranchId": null,
            "gateOutTime": null,
            "status": "AT"
        }
    ],
    "remarks": null,
    "syncUpExpiryTime": null,
    "shipmentStatus": "Created"
}
let totalKm = await calKm(sh)
console.log(`total km ${totalKm} for sh ${sh.shipmentNumber} : ${sh.uuid} `)