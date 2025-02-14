const SHIPMENT_ID = "ae1c0369-766e-4bbf-b813-073f0856f620"
const FRT_PUB_BASE_URL = "https://apis.fretron.com"
const rp = require("request-promise")
const _ = require("lodash")
const ORG_ID = "d255a000-f271-489e-9408-b9fb7d592b44"
const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODExMTQyMTYsInVzZXJJZCI6ImJvdHVzZXItLWZmYjNlZjBlLWI2MTUtNDkzNC1hNmY5LTVhYzEzYzZlNmRiZSIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLWZmYjNlZjBlLWI2MTUtNDkzNC1hNmY5LTVhYzEzYzZlNmRiZSIsIm9yZ0lkIjoiZDI1NWEwMDAtZjI3MS00ODllLTk0MDgtYjlmYjdkNTkyYjQ0IiwibmFtZSI6IlNISVBNRU5UX1RPS0VOIiwib3JnVHlwZSI6IkZMRUVUX09XTkVSIiwiaXNHb2QiOmZhbHNlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.0DNhxf1UDvoZvO-fJaZiNcsbBkJUhcotQ7GsTdR7yCM"

let $event = {
    "creationTime": 1739447302633,
    "customFields": [
        {
            "indexedValue": [
                "FO Number_6100113296"
            ],
            "fieldKey": "FO Number",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "66c10b06-db6d-4a14-9f57-055bdee7ac35",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "6100113296",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Freight Order Type_Hisar : Outbound Road Freight Order"
            ],
            "fieldKey": "Freight Order Type",
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
            "value": "Hisar : Outbound Road Freight Order",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Prod Frt Group_HRCR"
            ],
            "fieldKey": "Prod Frt Group",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "facea5ae-e97d-43f7-8428-ddd8663a610e",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "HRCR",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Destination_1010005010"
            ],
            "fieldKey": "Destination",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "24dd117e-810b-4658-80a9-941970a455bb",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "1010005010",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Plant_SP1200"
            ],
            "fieldKey": "Plant",
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
            "value": "SP1200",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Vehicle Type_H18TU10W1"
            ],
            "fieldKey": "Vehicle Type",
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
            "value": "H18TU10W1",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Transit Days_1"
            ],
            "fieldKey": "Transit Days",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": "00943628-1ba0-473d-b1e3-6ceea6e26fd5",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "1",
            "isRemark": false
        },
        {
            "indexedValue": [
                "InvalidDestinationLocation_No"
            ],
            "fieldKey": "InvalidDestinationLocation",
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
            "fieldType": "yes-no",
            "value": "No",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Fleet Type_Market"
            ],
            "fieldKey": "Fleet Type",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "0f3b4b8d-ba02-495a-90d4-3bea8639b251",
            "required": false,
            "accessType": null,
            "input": "text",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "text",
            "value": "Market",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Destination Plant_1010005010"
            ],
            "fieldKey": "Destination Plant",
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
            "value": "1010005010",
            "isRemark": false
        },
        {
            "indexedValue": [
                "TrackingModeType_Portable"
            ],
            "fieldKey": "TrackingModeType",
            "multiple": false,
            "description": "",
            "remark": null,
            "uuid": "97fb6236-b604-4196-9f12-dd8c980f34f4",
            "required": false,
            "accessType": null,
            "input": null,
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "Portable",
            "isRemark": false
        },
        {
            "indexedValue": [
                "DL Number_UP6220020003703"
            ],
            "fieldKey": "DL Number",
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
            "fieldType": "text",
            "value": "UP6220020003703",
            "isRemark": false
        },
        {
            "indexedValue": [
                "DL Expiry_07-03-25"
            ],
            "fieldKey": "DL Expiry",
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
            "fieldType": "string",
            "value": "07-03-25",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Aadhar No_"
            ],
            "fieldKey": "Aadhar No",
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
            "fieldType": "text",
            "value": "",
            "isRemark": false
        },
        {
            "indexedValue": [
                "External Id_DID5437606"
            ],
            "fieldKey": "External Id",
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
            "fieldType": "text",
            "value": "DID5437606",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Initial Battery %_UNKNOWN%"
            ],
            "fieldKey": "Initial Battery %",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "1e3041d3-3bf5-4c92-bbfe-a18826e3dc42",
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "UNKNOWN%",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "Bilty Image",
            "multiple": true,
            "description": "",
            "remark": "",
            "uuid": "359988df-be6f-4067-8d74-edad52544750",
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "arrayOfJson",
            "options": [],
            "fieldType": "camera",
            "value": "[{\"resourceId\":null,\"customFields\":null,\"downloadUrl\":\"https://storage.googleapis.com/fretron-document-bucket/uploads/d255a000-f271-489e-9408-b9fb7d592b44/e605e562-67da-4701-9efb-68d7f47e212d@Image.jpg\",\"updates\":{\"traceID\":\"d9176436-6cd8-43c7-86f6-8cd2cd4d0fc8\",\"resourceId\":\"e605e562-67da-4701-9efb-68d7f47e212d\",\"updatedBy\":\"USER\",\"changes\":null,\"sourceOfInformation\":\"created\",\"description\":\"document created\",\"forwardReasons\":[\"document.added\"],\"userId\":\"fe555cb8-324e-4878-8f62-56cb217c6c54\",\"uuid\":\"9febe98f-093e-4166-83a9-2f970f651fca\",\"revision\":null,\"time\":1739456206118,\"forwardedFrom\":null,\"resourceType\":\"Document\",\"updateType\":null},\"uuid\":\"e605e562-67da-4701-9efb-68d7f47e212d\",\"orgId\":\"d255a000-f271-489e-9408-b9fb7d592b44\",\"docPath\":\"/uploads/d255a000-f271-489e-9408-b9fb7d592b44/e605e562-67da-4701-9efb-68d7f47e212d@Image.jpg\",\"createdAt\":1739456206118,\"isExpirable\":false,\"previewString\":null,\"createdBy\":\"fe555cb8-324e-4878-8f62-56cb217c6c54\",\"name\":\"Image.jpg\",\"expireDate\":null,\"resourceType\":\"FILE\"}]",
            "isRemark": false
        },
        {
            "indexedValue": [
                "GateInTime_1739458266000"
            ],
            "fieldKey": "GateInTime",
            "multiple": false,
            "description": null,
            "remark": null,
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "date",
            "unit": null,
            "valueType": "string",
            "options": null,
            "fieldType": "dateTime",
            "value": "1739458266000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Delay Reason_"
            ],
            "fieldKey": "Delay Reason",
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
                "LONG_DISCONNECTED_NO"
            ],
            "fieldKey": "LONG_DISCONNECTED",
            "multiple": true,
            "description": "LONG_DISCONNECTED",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "string",
            "value": "NO",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Battery_80%"
            ],
            "fieldKey": "Battery",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "80%",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Edd_15-02-2025"
            ],
            "fieldKey": "Edd",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "15-02-2025",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Device Tracking Status_YES"
            ],
            "fieldKey": "Device Tracking Status",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "string",
            "unit": "",
            "valueType": "string",
            "options": null,
            "fieldType": "text",
            "value": "YES",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Device Submitted?_null"
            ],
            "fieldKey": "Device Submitted?",
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
                "No",
                "Jodhpur"
            ],
            "fieldType": "select",
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": [
                "Device Submit Date(dd/mm/yyyy)_"
            ],
            "fieldKey": "Device Submit Date(dd/mm/yyyy)",
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
                "Reverse Logistics_null"
            ],
            "fieldKey": "Reverse Logistics",
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
                "FRETRON",
                "TRANSPORTER"
            ],
            "fieldType": "select",
            "value": null,
            "isRemark": false
        }
    ],
    "transportationMode": "ByRoad",
    "freightUnitLineItemId": null,
    "lastSyncUpTime": 1739512173262,
    "updates": {
        "traceID": "tripPointEventsTopicByImei_6_74616028",
        "resourceId": "ae1c0369-766e-4bbf-b813-073f0856f620",
        "updatedBy": "USER",
        "changes": null,
        "sourceOfInformation": null,
        "description": null,
        "forwardReasons": [
            "gps.state.updated"
        ],
        "userId": "868ac373-ed4f-407d-9a26-b6b0e17fae1f",
        "uuid": "7b299c40-fe52-439c-a449-9b5b3f7bce3b",
        "revision": 466,
        "time": 1739531410869,
        "forwardedFrom": null,
        "resourceType": "ShipmentObject",
        "updateType": "Enroute For Delivery"
    },
    "isActive": true,
    "uuid": "ae1c0369-766e-4bbf-b813-073f0856f620",
    "issues": null,
    "branch": {
        "companyCode": null,
        "address": ",Jindal Tower,MDR107,Hisar,Hisar,Haryana,125001,India,in",
        "updatedBy": null,
        "customFields": null,
        "regionName": null,
        "externalId": "CRD",
        "branchName": null,
        "type": [
            "Operation"
        ],
        "updates": null,
        "orgId": "d255a000-f271-489e-9408-b9fb7d592b44",
        "areaId": null,
        "geoLocation": null,
        "regionId": null,
        "areaName": null,
        "name": "CRD",
        "zoneId": null,
        "_id": "6f029200-72ec-48d2-83c2-0cc6fc2656a2",
        "zoneName": null,
        "contacts": [],
        "officeType": null,
        "materialServices": null
    },
    "orgId": "d255a000-f271-489e-9408-b9fb7d592b44",
    "shipmentType": "DirectLeg",
    "completionTime": null,
    "orderNumbers": [],
    "routeId": null,
    "shipmentTrackingStatus": "Enroute For Delivery",
    "lastForwardTime": 1739530797471,
    "runningStatus": null,
    "delayTrackingStatus": "UP TO DATE",
    "delayReasonLastUpdateTime": null,
    "links": null,
    "shipmentDate": 1739447302496,
    "delayReason": null,
    "shipmentNumber": "FRETSH000065715",
    "originalEdd": 1739644140000,
    "edd": 1739644140000,
    "delayReasonUpdateExpiryTime": null,
    "externalShipmentId": "6100113296",
    "fleetInfo": {
        "isTrackingEnable": null,
        "forwardingAgent": {
            "geoFence": null,
            "documents": null,
            "customFields": null,
            "isPortalEnabled": true,
            "type": "vendor",
            "updates": null,
            "uuid": "a4b7de3e-9f61-4c88-9271-c407698b38c4",
            "orgId": "d255a000-f271-489e-9408-b9fb7d592b44",
            "firmType": "INDIVISUAL",
            "gstn": null,
            "voterId": null,
            "verificationTicketId": null,
            "companyCodes": null,
            "group": {
                "name": "Transporter",
                "partnerType": null,
                "uuid": null,
                "orgId": null
            },
            "address": "{\"address\":\"\",\"city\":\"\",\"state\":null,\"pincode\":null}",
            "verificationStatus": "unverified",
            "externalId": "8003349",
            "panNumber": null,
            "aadharNo": null,
            "parentId": null,
            "places": null,
            "route": null,
            "name": "GANESH ROADLINES PVT LTD-",
            "location": null,
            "fretronId": null,
            "contacts": [
                {
                    "emails": [
                        "contracts@ganeshroadlines.com"
                    ],
                    "address": null,
                    "mobileNumbers": [],
                    "mobileNumber": null,
                    "name": "GANESH ROADLINES",
                    "type": null
                },
                {
                    "emails": [
                        "ashwani@ganeshroadlines.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "9896395260"
                    ],
                    "mobileNumber": null,
                    "name": "Ashwini Singhal",
                    "type": null
                },
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "9227200038"
                    ],
                    "mobileNumber": null,
                    "name": "CHANDER MOHAN",
                    "type": null
                },
                {
                    "emails": [
                        "billing@ganeshroadlines.com"
                    ],
                    "address": null,
                    "mobileNumbers": [],
                    "mobileNumber": null,
                    "name": "JASBIR ",
                    "type": null
                },
                {
                    "emails": [
                        "harpal@ganeshroadlines.com"
                    ],
                    "address": null,
                    "mobileNumbers": [],
                    "mobileNumber": null,
                    "name": "HARPAL",
                    "type": null
                },
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "7206811138"
                    ],
                    "mobileNumber": null,
                    "name": "Parmod Bansal",
                    "type": null
                },
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "9996629338"
                    ],
                    "mobileNumber": null,
                    "name": "inderjit singh",
                    "type": null
                },
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "8307430635"
                    ],
                    "mobileNumber": null,
                    "name": "Jatin Yadav",
                    "type": null
                }
            ],
            "status": "ACTIVE"
        },
        "verificationStatus": null,
        "trackingMode": "VTS",
        "broker": null,
        "uuid": "0f2d164b-1d1c-4b46-a809-f2adb9a54e57",
        "orgId": null,
        "vehicle": {
            "vtsDeviceId": null,
            "kmDriven": null,
            "secondaryDriverId": null,
            "attachedDocs": [
                "073bf006-dd43-463b-aee5-bca2b15f99ea",
                "b6ee0cf3-b1d2-4271-bf86-b5fd1971ccc3",
                "8887ed96-2b9d-484b-9871-c2b339f8c046",
                "e7d0fdf3-2b02-49da-b198-10108a1eac8a",
                "4ff13234-ffe0-4070-bb6f-204faa488f32"
            ],
            "customFields": [],
            "floorType": null,
            "description": null,
            "source": "FRETRON",
            "isTrackingEnabled": false,
            "updates": null,
            "uuid": null,
            "branch": null,
            "orgId": "d255a000-f271-489e-9408-b9fb7d592b44",
            "vehicleLoadType": null,
            "associatedWith": null,
            "isDeleted": null,
            "customerId": null,
            "vehicleModel": null,
            "mileageEmpty": null,
            "mileageLoaded": null,
            "vehicleType": "hire",
            "groups": null,
            "externalId": null,
            "updateTime": null,
            "sharedWith": [],
            "baseLocationId": null,
            "vehicleMake": null,
            "vehicleRegistrationNumber": "DL1GC5468",
            "chassisNumber": "MAT448022FAF07399",
            "driverId": null,
            "createTime": null,
            "loadCapacity": null,
            "truckLength": null,
            "category": null,
            "groupsExtended": null
        },
        "driver": {
            "pincode": null,
            "dlExpiryTime": 1741372200000,
            "attachedDocs": [],
            "isEmployee": false,
            "pfNumber": null,
            "address": null,
            "mobileNumbers": null,
            "dlNumber": "UP6220020003703",
            "mobileNumber": "9220842941",
            "customFields": [],
            "externalId": "DID5437606",
            "updates": null,
            "aadharNo": null,
            "type": null,
            "uuid": "e4da7129-f143-4be5-b891-b1d8905a2501",
            "branch": null,
            "orgId": "d255a000-f271-489e-9408-b9fb7d592b44",
            "vehicleRegistrationNumber": null,
            "dob": null,
            "name": "RAMCHET SINGH",
            "vehicleId": null,
            "associatedUserId": null,
            "status": "Active"
        },
        "fleetType": "Market",
        "fleetOwner": {
            "geoFence": null,
            "documents": null,
            "customFields": null,
            "isPortalEnabled": true,
            "type": "vendor",
            "updates": null,
            "uuid": "f5f1644c-db39-4378-bc94-3fe0e17b3a82",
            "orgId": null,
            "firmType": null,
            "gstn": null,
            "voterId": null,
            "verificationTicketId": null,
            "companyCodes": null,
            "group": {
                "name": "lorryOwner",
                "partnerType": null,
                "uuid": null,
                "orgId": null
            },
            "address": "{\"address\":null,\"city\":null,\"state\":null,\"pincode\":null}",
            "verificationStatus": null,
            "externalId": null,
            "panNumber": null,
            "aadharNo": null,
            "parentId": null,
            "places": null,
            "route": null,
            "name": "Transporters Union JSL Hisar",
            "location": null,
            "fretronId": null,
            "contacts": null,
            "status": "ACTIVE"
        },
        "trainInfo": null,
        "lbsNumber": "9220842941",
        "secondaryDriver": null,
        "device": {
            "branchId": null,
            "isSuspended": null,
            "mobileNumber": null,
            "manufacturerName": null,
            "groups": null,
            "attachedResourceNumber": null,
            "externalId": null,
            "updateTime": 1739505489483,
            "isAssociated": null,
            "sharedWith": null,
            "type": null,
            "updates": null,
            "uuid": "9566e706-8211-4be0-994b-4ccf7fecd46d",
            "orgId": "d255a000-f271-489e-9408-b9fb7d592b44",
            "attachedResourceId": null,
            "isDeleted": null,
            "createTime": 1739455923949,
            "serviceProvider": "AIRTEL",
            "imei": "353549092630143",
            "usedBy": null,
            "status": "ALLOWED"
        },
        "status": null
    },
    "syncUpDueTime": 1834120173264,
    "billingStatus": null,
    "currentLocation": {
        "isFillingEnabled": false,
        "address": null,
        "lngLat": [
            76.94575999999999,
            28.68194888888889
        ],
        "odometer": null,
        "latitude": 28.68194888888889,
        "course": 13,
        "imei": "353549092630143",
        "decoder": "Concox",
        "time": 1739531407355,
        "vehicleId": null,
        "speed": 0,
        "longitude": 76.94575999999999
    },
    "alerts": [],
    "equipments": null,
    "tripType": "Shipment",
    "lastDelayCalculationTime": null,
    "delayReasonUpdateDueTime": null,
    "locationTrackingStatus": "UP TO DATE",
    "poLineItemId": null,
    "consignments": [],
    "customContacts": null,
    "shipmentStages": [
        {
            "departureTime": 1739509201000,
            "gateInTime": 1739458266000,
            "actualActivityStartTime": null,
            "actualActivityEndTime": null,
            "preActWtTime": null,
            "uuid": "e20cc813-b294-4a60-989f-e98ecd3c065a",
            "consignmentDelivered": null,
            "resourceDropOff": null,
            "resourcePickup": null,
            "eta": null,
            "stageName": "SP1200",
            "hub": null,
            "arrivalTime": 1739458360000,
            "expectedActivityStartTime": null,
            "secondaryStatus": null,
            "consignmentPickUps": [
                "8a63716c-ef69-4a0f-8570-5f52623014bd",
                "af69a761-bf40-4352-997a-597aa87726c6"
            ],
            "postActWtTime": null,
            "tripPoint": {
                "outOfTrackSince": null,
                "creationTime": 1739508499505,
                "purpose": "Pickup",
                "plannedArrival": null,
                "currentGpsState": {
                    "numberOfRecord": 3,
                    "totalTime": 267000,
                    "averageSpeeds": 4.278904252862887,
                    "eventType": "StateDetected",
                    "uuid": "9684ce08-76e1-4dc3-b8ef-9e842707fa2e",
                    "isDisconnected": false,
                    "startLocation": {
                        "isFillingEnabled": false,
                        "address": "Inner Satrod Rd, Satrod, Satrod Khurd, Hisar, Haryana 125011, India",
                        "lngLat": [
                            75.77290666666667,
                            29.130237777777776
                        ],
                        "odometer": null,
                        "latitude": 29.130237777777776,
                        "course": 190,
                        "imei": "353549092630143",
                        "decoder": "Concox",
                        "time": 1739508934000,
                        "vehicleId": null,
                        "speed": 0,
                        "longitude": 75.77290666666667
                    },
                    "isNoGpsZone": false,
                    "mean": {
                        "isFillingEnabled": false,
                        "address": "Inner Satrod Rd, Satrod, Satrod Khurd, Hisar, Haryana 125011, India",
                        "lngLat": [
                            75.7739288888889,
                            29.12994
                        ],
                        "odometer": null,
                        "latitude": 29.12994,
                        "course": null,
                        "imei": "",
                        "decoder": null,
                        "time": 1739509084666,
                        "vehicleId": "",
                        "speed": 0,
                        "longitude": 75.7739288888889
                    },
                    "imei": "353549092630143",
                    "startTime": 1739508934000,
                    "endTime": 1739509201000,
                    "vehicleId": null,
                    "state": "Moving",
                    "totalDistance": 317.35206542066413,
                    "endLocation": {
                        "isFillingEnabled": false,
                        "address": "Inner Satrod Rd, Satrod, Satrod Khurd, Hisar, Haryana 125011, India",
                        "lngLat": [
                            75.77598222222223,
                            29.12937333333333
                        ],
                        "odometer": null,
                        "latitude": 29.12937333333333,
                        "course": 101,
                        "imei": "353549092630143",
                        "decoder": "Concox",
                        "time": 1739509201000,
                        "vehicleId": null,
                        "speed": 27,
                        "longitude": 75.77598222222223
                    }
                },
                "updates": {
                    "traceID": "vehiclegpsstatetopic_16_134546215",
                    "resourceId": "e20cc813-b294-4a60-989f-e98ecd3c065a",
                    "updatedBy": "SYSTEM",
                    "changes": null,
                    "sourceOfInformation": null,
                    "description": "From AT to COMPLETED",
                    "forwardReasons": [
                        "trippoint.current.location.updated",
                        "gps.state.detected"
                    ],
                    "userId": null,
                    "uuid": "ab822d33-c322-4c81-9064-3dcb82dac01a",
                    "revision": 5,
                    "time": 1739509242948,
                    "forwardedFrom": null,
                    "resourceType": "TripPoint",
                    "updateType": null
                },
                "uuid": "e20cc813-b294-4a60-989f-e98ecd3c065a",
                "sequenceId": null,
                "isDisconnected": false,
                "isOutOfTrack": false,
                "routeDeviationMinimumDistanceConstraint": null,
                "eta": null,
                "routeId": null,
                "expectedActivityStartTime": null,
                "actualDeparture": 1739509201000,
                "vehicleId": "353549092630143",
                "place": {
                    "hubId": null,
                    "boundary": null,
                    "address": "36A, Sirsa Rd, BHP colony, Industrial Area, Hisar, Haryana 125011, India",
                    "accessibility": "public",
                    "addedBy": "d255a000-f271-489e-9408-b9fb7d592b44",
                    "center": {
                        "latitude": 29.1301033,
                        "longitude": 75.7728275
                    },
                    "suggestedRadius": 0,
                    "isOwned": false,
                    "centerCoordinates": [
                        75.7728275,
                        29.1301033
                    ],
                    "placeId": null,
                    "geoJsonBoundry": {
                        "coordinates": [
                            [
                                [
                                    75.77555908989245,
                                    29.13293264465239
                                ],
                                [
                                    75.77374845193387,
                                    29.12978375284765
                                ],
                                [
                                    75.77310741104807,
                                    29.12994776000994
                                ],
                                [
                                    75.77243150380137,
                                    29.130078965551412
                                ],
                                [
                                    75.77157317178316,
                                    29.130425722247885
                                ],
                                [
                                    75.7706343923446,
                                    29.1307771636523
                                ],
                                [
                                    75.76979218499727,
                                    29.131189520035107
                                ],
                                [
                                    75.76886947682105,
                                    29.131648733151234
                                ],
                                [
                                    75.76813457825524,
                                    29.1319954845532
                                ],
                                [
                                    75.7684888152043,
                                    29.13719661523118
                                ],
                                [
                                    75.77271582895284,
                                    29.136962335725755
                                ],
                                [
                                    75.77482940965658,
                                    29.13699982048251
                                ],
                                [
                                    75.77598786633328,
                                    29.136934222149208
                                ],
                                [
                                    75.77555908989245,
                                    29.13293264465239
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Jindal Stainless Limited-CRD",
                    "state": null,
                    "category": "Manufacturing Plant/Factory/Yard",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "isOverSpeed": false,
                "remainingDistance": 0,
                "actualActivityStartTime": null,
                "forShipmentStages": [
                    "e20cc813-b294-4a60-989f-e98ecd3c065a"
                ],
                "actualActivityEndTime": 1739509201000,
                "actualArrival": 1739458360000,
                "purposedDistance": null,
                "plannedDeparture": null,
                "currentLocation": {
                    "isFillingEnabled": false,
                    "address": "Inner Satrod Rd, Satrod, Satrod Khurd, Hisar, Haryana 125011, India",
                    "lngLat": [
                        75.77598222222223,
                        29.12937333333333
                    ],
                    "odometer": null,
                    "latitude": 29.12937333333333,
                    "course": 101,
                    "imei": "353549092630143",
                    "decoder": "Concox",
                    "time": 1739509201000,
                    "vehicleId": null,
                    "speed": 27,
                    "longitude": 75.77598222222223
                },
                "isAutoCompleted": true,
                "coveredDistance": 3050.071890227635,
                "hub": {
                    "hubId": null,
                    "boundary": null,
                    "address": "36A, Sirsa Rd, BHP colony, Industrial Area, Hisar, Haryana 125011, India",
                    "accessibility": "public",
                    "addedBy": "d255a000-f271-489e-9408-b9fb7d592b44",
                    "center": {
                        "latitude": 29.1301033,
                        "longitude": 75.7728275
                    },
                    "suggestedRadius": 0,
                    "isOwned": false,
                    "centerCoordinates": [
                        75.7728275,
                        29.1301033
                    ],
                    "placeId": null,
                    "geoJsonBoundry": {
                        "coordinates": [
                            [
                                [
                                    75.77555908989245,
                                    29.13293264465239
                                ],
                                [
                                    75.77374845193387,
                                    29.12978375284765
                                ],
                                [
                                    75.77310741104807,
                                    29.12994776000994
                                ],
                                [
                                    75.77243150380137,
                                    29.130078965551412
                                ],
                                [
                                    75.77157317178316,
                                    29.130425722247885
                                ],
                                [
                                    75.7706343923446,
                                    29.1307771636523
                                ],
                                [
                                    75.76979218499727,
                                    29.131189520035107
                                ],
                                [
                                    75.76886947682105,
                                    29.131648733151234
                                ],
                                [
                                    75.76813457825524,
                                    29.1319954845532
                                ],
                                [
                                    75.7684888152043,
                                    29.13719661523118
                                ],
                                [
                                    75.77271582895284,
                                    29.136962335725755
                                ],
                                [
                                    75.77482940965658,
                                    29.13699982048251
                                ],
                                [
                                    75.77598786633328,
                                    29.136934222149208
                                ],
                                [
                                    75.77555908989245,
                                    29.13293264465239
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Jindal Stainless Limited-CRD",
                    "state": null,
                    "category": "Manufacturing Plant/Factory/Yard",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "overSpeedSince": null,
                "imei": "353549092630143",
                "assosiatedShipmentsId": [
                    "ae1c0369-766e-4bbf-b813-073f0856f620"
                ],
                "status": "COMPLETED"
            },
            "place": {
                "hubId": null,
                "boundary": null,
                "address": "36A, Sirsa Rd, BHP colony, Industrial Area, Hisar, Haryana 125011, India",
                "accessibility": "public",
                "addedBy": "d255a000-f271-489e-9408-b9fb7d592b44",
                "center": {
                    "latitude": 29.1301033,
                    "longitude": 75.7728275
                },
                "suggestedRadius": 0,
                "isOwned": false,
                "centerCoordinates": [
                    75.7728275,
                    29.1301033
                ],
                "placeId": null,
                "geoJsonBoundry": {
                    "coordinates": [
                        [
                            [
                                75.77555908989245,
                                29.13293264465239
                            ],
                            [
                                75.77374845193387,
                                29.12978375284765
                            ],
                            [
                                75.77310741104807,
                                29.12994776000994
                            ],
                            [
                                75.77243150380137,
                                29.130078965551412
                            ],
                            [
                                75.77157317178316,
                                29.130425722247885
                            ],
                            [
                                75.7706343923446,
                                29.1307771636523
                            ],
                            [
                                75.76979218499727,
                                29.131189520035107
                            ],
                            [
                                75.76886947682105,
                                29.131648733151234
                            ],
                            [
                                75.76813457825524,
                                29.1319954845532
                            ],
                            [
                                75.7684888152043,
                                29.13719661523118
                            ],
                            [
                                75.77271582895284,
                                29.136962335725755
                            ],
                            [
                                75.77482940965658,
                                29.13699982048251
                            ],
                            [
                                75.77598786633328,
                                29.136934222149208
                            ],
                            [
                                75.77555908989245,
                                29.13293264465239
                            ]
                        ]
                    ],
                    "type": "Polygon"
                },
                "externalId": null,
                "source": "FRETRON",
                "places": null,
                "viewport": null,
                "district": null,
                "name": "Jindal Stainless Limited-CRD",
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
            "uuid": "c621ea36-9559-4164-be9b-15313c8fe10f",
            "consignmentDelivered": [
                "8a63716c-ef69-4a0f-8570-5f52623014bd"
            ],
            "resourceDropOff": null,
            "resourcePickup": null,
            "eta": null,
            "stageName": null,
            "hub": null,
            "arrivalTime": null,
            "expectedActivityStartTime": null,
            "secondaryStatus": null,
            "consignmentPickUps": null,
            "postActWtTime": null,
            "tripPoint": {
                "outOfTrackSince": null,
                "creationTime": 1739511974241,
                "purpose": "Delivery",
                "plannedArrival": null,
                "currentGpsState": {
                    "numberOfRecord": 29,
                    "totalTime": 7107000,
                    "averageSpeeds": 36.60426605768457,
                    "eventType": "StateUpdated",
                    "uuid": "221dbfde-755f-4c22-aa58-b4091c8ba663",
                    "isDisconnected": false,
                    "startLocation": {
                        "isFillingEnabled": false,
                        "address": "Rohtak - Hansi - Hisar Road, Haryana 124001, India",
                        "lngLat": [
                            76.40166222222223,
                            28.938206666666666
                        ],
                        "odometer": null,
                        "latitude": 28.938206666666666,
                        "course": 77,
                        "imei": "353549092630143",
                        "decoder": "Concox",
                        "time": 1739523863000,
                        "vehicleId": null,
                        "speed": 0,
                        "longitude": 76.40166222222223
                    },
                    "isNoGpsZone": false,
                    "mean": {
                        "isFillingEnabled": false,
                        "address": "",
                        "lngLat": [
                            76.73702743295023,
                            28.786222452107282
                        ],
                        "odometer": null,
                        "latitude": 28.786222452107282,
                        "course": null,
                        "imei": "",
                        "decoder": null,
                        "time": 1739527338408,
                        "vehicleId": "",
                        "speed": 0,
                        "longitude": 76.73702743295023
                    },
                    "imei": "353549092630143",
                    "startTime": 1739523863000,
                    "endTime": 1739530970000,
                    "vehicleId": null,
                    "state": "Moving",
                    "totalDistance": 72262.92190887895,
                    "endLocation": {
                        "isFillingEnabled": false,
                        "address": null,
                        "lngLat": [
                            77.02888888888889,
                            28.68262
                        ],
                        "odometer": null,
                        "latitude": 28.68262,
                        "course": 102,
                        "imei": "353549092630143",
                        "decoder": "Concox",
                        "time": 1739530970000,
                        "vehicleId": null,
                        "speed": 5,
                        "longitude": 77.02888888888889
                    }
                },
                "updates": {
                    "traceID": "vehiclegpsstatetopic_16_134611970",
                    "resourceId": "c621ea36-9559-4164-be9b-15313c8fe10f",
                    "updatedBy": "SYSTEM",
                    "changes": null,
                    "sourceOfInformation": null,
                    "description": "From UPCOMING to UPCOMING",
                    "forwardReasons": [
                        "trippoint.current.location.updated",
                        "gps.state.updated",
                        "trippoint.updated"
                    ],
                    "userId": null,
                    "uuid": "2ae3810f-6f7d-422e-bf61-b7ea0baf27d0",
                    "revision": 83,
                    "time": 1739531410858,
                    "forwardedFrom": null,
                    "resourceType": "TripPoint",
                    "updateType": null
                },
                "uuid": "c621ea36-9559-4164-be9b-15313c8fe10f",
                "sequenceId": null,
                "isDisconnected": false,
                "isOutOfTrack": false,
                "routeDeviationMinimumDistanceConstraint": null,
                "eta": null,
                "routeId": null,
                "expectedActivityStartTime": null,
                "actualDeparture": null,
                "vehicleId": "353549092630143",
                "place": {
                    "hubId": null,
                    "boundary": null,
                    "address": "KHSARA NO 212 , GURUDWARA ROAD NEW DELHI 110042",
                    "accessibility": "public",
                    "addedBy": "495b8728-c761-4fa7-83fe-db75a7d63221",
                    "center": {
                        "latitude": 28.7656999483334,
                        "longitude": 77.1396271378953
                    },
                    "suggestedRadius": 500,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.1396271378953,
                        28.7656999483334
                    ],
                    "placeId": null,
                    "geoJsonBoundry": null,
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "SHRIOM CUTTERS & WAREHOUSE",
                    "state": null,
                    "category": "Pick up - Delivery Area",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "isOverSpeed": false,
                "remainingDistance": 25289.157,
                "actualActivityStartTime": null,
                "forShipmentStages": [
                    "c621ea36-9559-4164-be9b-15313c8fe10f"
                ],
                "actualActivityEndTime": null,
                "actualArrival": null,
                "purposedDistance": null,
                "plannedDeparture": null,
                "currentLocation": {
                    "isFillingEnabled": false,
                    "address": null,
                    "lngLat": [
                        77.02888888888889,
                        28.68262
                    ],
                    "odometer": null,
                    "latitude": 28.68262,
                    "course": 102,
                    "imei": "353549092630143",
                    "decoder": "Concox",
                    "time": 1739530970000,
                    "vehicleId": null,
                    "speed": 5,
                    "longitude": 77.02888888888889
                },
                "isAutoCompleted": false,
                "coveredDistance": 132212.50071480282,
                "hub": {
                    "hubId": null,
                    "boundary": null,
                    "address": "KHSARA NO 212 , GURUDWARA ROAD NEW DELHI 110042",
                    "accessibility": "public",
                    "addedBy": "495b8728-c761-4fa7-83fe-db75a7d63221",
                    "center": {
                        "latitude": 28.7656999483334,
                        "longitude": 77.1396271378953
                    },
                    "suggestedRadius": 500,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.1396271378953,
                        28.7656999483334
                    ],
                    "placeId": null,
                    "geoJsonBoundry": null,
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "SHRIOM CUTTERS & WAREHOUSE",
                    "state": null,
                    "category": "Pick up - Delivery Area",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "overSpeedSince": null,
                "imei": "353549092630143",
                "assosiatedShipmentsId": [
                    "ae1c0369-766e-4bbf-b813-073f0856f620"
                ],
                "status": "UPCOMING"
            },
            "place": {
                "hubId": null,
                "boundary": null,
                "address": "KHSARA NO 212 , GURUDWARA ROAD NEW DELHI 110042",
                "accessibility": "public",
                "addedBy": "495b8728-c761-4fa7-83fe-db75a7d63221",
                "center": {
                    "latitude": 28.7656999483334,
                    "longitude": 77.1396271378953
                },
                "suggestedRadius": 500,
                "isOwned": false,
                "centerCoordinates": [
                    77.1396271378953,
                    28.7656999483334
                ],
                "placeId": null,
                "geoJsonBoundry": null,
                "externalId": null,
                "source": "FRETRON",
                "places": null,
                "viewport": null,
                "district": null,
                "name": "SHRIOM CUTTERS & WAREHOUSE",
                "state": null,
                "category": "Pick up - Delivery Area",
                "subDistrict": null,
                "controllingBranchId": null
            },
            "controllingBranchId": null,
            "gateOutTime": null,
            "status": "UPCOMING"
        },
        {
            "departureTime": null,
            "gateInTime": null,
            "actualActivityStartTime": null,
            "actualActivityEndTime": null,
            "preActWtTime": null,
            "uuid": "77d33dcf-9070-4b27-a559-328ba3036922",
            "consignmentDelivered": [
                "af69a761-bf40-4352-997a-597aa87726c6"
            ],
            "resourceDropOff": null,
            "resourcePickup": null,
            "eta": 1739644140000,
            "stageName": null,
            "hub": null,
            "arrivalTime": null,
            "expectedActivityStartTime": null,
            "secondaryStatus": null,
            "consignmentPickUps": null,
            "postActWtTime": null,
            "tripPoint": {
                "outOfTrackSince": null,
                "creationTime": null,
                "purpose": "Delivery",
                "plannedArrival": 1739644140000,
                "currentGpsState": null,
                "updates": null,
                "uuid": "77d33dcf-9070-4b27-a559-328ba3036922",
                "sequenceId": null,
                "isDisconnected": false,
                "isOutOfTrack": false,
                "routeDeviationMinimumDistanceConstraint": null,
                "eta": 1739644140000,
                "routeId": null,
                "expectedActivityStartTime": null,
                "actualDeparture": null,
                "vehicleId": "353549092630143",
                "place": {
                    "hubId": null,
                    "boundary": null,
                    "address": "B-30, GROUP INDUSTRIAL AREA,,,WAZIRPUR,,110052,Delhi",
                    "accessibility": "public",
                    "addedBy": "495b8728-c761-4fa7-83fe-db75a7d63221",
                    "center": {
                        "latitude": 28.70125,
                        "longitude": 77.1704573
                    },
                    "suggestedRadius": 500,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.1704573,
                        28.70125
                    ],
                    "placeId": null,
                    "geoJsonBoundry": null,
                    "externalId": null,
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "JROP INTERNATIONAL - DELHI",
                    "state": null,
                    "category": "Pick up - Delivery Area",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "isOverSpeed": false,
                "remainingDistance": null,
                "actualActivityStartTime": null,
                "forShipmentStages": [
                    "77d33dcf-9070-4b27-a559-328ba3036922"
                ],
                "actualActivityEndTime": null,
                "actualArrival": null,
                "purposedDistance": null,
                "plannedDeparture": null,
                "currentLocation": null,
                "isAutoCompleted": false,
                "coveredDistance": null,
                "hub": null,
                "overSpeedSince": null,
                "imei": "353549092630143",
                "assosiatedShipmentsId": [
                    "ae1c0369-766e-4bbf-b813-073f0856f620"
                ],
                "status": "NEXT"
            },
            "place": {
                "hubId": null,
                "boundary": null,
                "address": "B-30, GROUP INDUSTRIAL AREA,,,WAZIRPUR,,110052,Delhi",
                "accessibility": "public",
                "addedBy": "495b8728-c761-4fa7-83fe-db75a7d63221",
                "center": {
                    "latitude": 28.70125,
                    "longitude": 77.1704573
                },
                "suggestedRadius": 500,
                "isOwned": false,
                "centerCoordinates": [
                    77.1704573,
                    28.70125
                ],
                "placeId": null,
                "geoJsonBoundry": null,
                "externalId": null,
                "source": "FRETRON",
                "places": null,
                "viewport": null,
                "district": null,
                "name": "JROP INTERNATIONAL - DELHI",
                "state": null,
                "category": "Pick up - Delivery Area",
                "subDistrict": null,
                "controllingBranchId": null
            },
            "controllingBranchId": null,
            "gateOutTime": null,
            "status": "NEXT"
        }
    ],
    "remarks": null,
    "syncUpExpiryTime": null,
    "shipmentStatus": "Created"
}

const CUSTOMER_EMAIL_PHONE_INFO = [
    {
        "shipToPartyCode": "1100002670",
        "shipToPartyName": "SAHIL TEST",
        "shipToCity": "BHIWADI",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["7056032744"]
    },
    {
        "shipToPartyCode": "1010002719",
        "shipToPartyName": "GILLETTE INDIA LIMITED",
        "shipToCity": "BHIWADI",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1100001584",
        "shipToPartyName": "ACE PERSONAL CARE P LTD",
        "shipToCity": "HYDERABAD",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010014024",
        "shipToPartyName": "PPAP Automotive",
        "shipToCity": "NOIDA",
        "emails": ["mayank.goyal@jindalstainless.com"],
        "phone": ["7230091323"]
    },
    {
        "shipToPartyCode": "1010019258",
        "shipToPartyName": "RKRM INTERNATIONAL PRODUCTS",
        "shipToCity": "UNA",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010004759",
        "shipToPartyName": "ALFA FLEXI TUBES",
        "shipToCity": "BAHADURGARH",
        "emails": ["mayank.goyal@jindalstainless.com"],
        "phone": ["7230091323"]
    },
    {
        "shipToPartyCode": "1010018761",
        "shipToPartyName": "VNS PROTECH",
        "shipToCity": "SAMBA",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010017073",
        "shipToPartyName": "SUPREME SHAVERS INDIA PRIVATE LIMIT",
        "shipToCity": "SONIPAT",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010009226",
        "shipToPartyName": "GreatWhite Global Pvt Ltd",
        "shipToCity": "HARIDWAR",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010012953",
        "shipToPartyName": "Zircon Global Manufacturing (LLP)",
        "shipToCity": "JAMMU",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1100002119",
        "shipToPartyName": "DHRUV EXIM",
        "shipToCity": "",
        "emails": [],
        "phone": ["9820094706"]
    },
    {
        "shipToPartyCode": "1010016697",
        "shipToPartyName": "SHREE VENKTESH WIRES & STEELS PVT.L",
        "shipToCity": "",
        "emails": [],
        "phone": ["9769760407"]
    },
    {
        "shipToPartyCode": "1010000571",
        "shipToPartyName": "SHREE VENKTESH WIRES & STEELS PVT.L",
        "shipToCity": "",
        "emails": [],
        "phone": ["9769760407"]
    },
    {
        "shipToPartyCode": "1010021393",
        "shipToPartyName": "UJALA STAINLESS PRIVATE LIMITED",
        "shipToCity": "",
        "emails": [],
        "phone": ["9899026236"]
    },
    {
        "shipToPartyCode": "1010011865",
        "shipToPartyName": "D M METALLOYS PRIVATE LIMITED",
        "shipToCity": "",
        "emails": [],
        "phone": ["9324042086"]
    },
    {
        "shipToPartyCode": "1010011047",
        "shipToPartyName": "D M METALLOYS PRIVATE LIMITED",
        "shipToCity": "",
        "emails": [],
        "phone": ["9324042086"]
    },
    {
        "shipToPartyCode": "1010017453",
        "shipToPartyName": "M.M.METALS",
        "shipToCity": "",
        "emails": [],
        "phone": ["9324042086"]
    },
    {
        "shipToPartyCode": "1010000342",
        "shipToPartyName": "LARSEN & TOUBRO LTD",
        "shipToCity": "HAZIRA",
        "emails": ["supriyo.paul@jindalstainless.com"],
        "phone": ["8167533539"]
    },
    {
        "shipToPartyCode": "1010001057",
        "shipToPartyName": "KOCH ENGINEERED SOLUTIONS",
        "shipToCity": "BARODA",
        "emails": ["supriyo.paul@jindalstainless.com", "vedant.jalan@jindalstainless.com"],
        "phone": ["8167533539", "8303810195"]
    },
    {
        "shipToPartyCode": "1010002560",
        "shipToPartyName": "MASROS ENGINEERS",
        "shipToCity": "FARIDABAD",
        "emails": ["mayank.goyal@jindalstainless.com", "vedant.jalan@jindalstainless.com"],
        "phone": ["7230091323", "8303810195"]
    },
    {
        "shipToPartyCode": "1010002598",
        "shipToPartyName": "AEROFLEX",
        "shipToCity": "TALOJA",
        "emails": ["supriyo.paul@jindalstainless.com", "vedant.jalan@jindalstainless.com"],
        "phone": ["8167533539", "8303810195"]
    },
    {
        "shipToPartyCode": "1010003360",
        "shipToPartyName": "SHARDA MOTOR",
        "shipToCity": "KANCHIPURAM",
        "emails": ["vedant.jalan@jindalstainless.com", "supriyo.paul@jindalstainless.com"],
        "phone": ["8303810195", "8167533539"]
    },
    {
        "shipToPartyCode": "1010003443",
        "shipToPartyName": "SHREE MPF",
        "shipToCity": "CHENNAI",
        "emails": ["vedant.jalan@jindalstainless.com", "supriyo.paul@jindalstainless.com"],
        "phone": ["8303810195", "8167533539"]
    },
    {
        "shipToPartyCode": "1010003486",
        "shipToPartyName": "NEEL METAL",
        "shipToCity": "GURGAON",
        "emails": ["supriyo.paul@jindalstainless.com"],
        "phone": ["8167533539"]
    },
    {
        "shipToPartyCode": "1010003519",
        "shipToPartyName": "ELRINGKLINGER AUTOMOTIVE",
        "shipToCity": "PUNE",
        "emails": ["vedant.jalan@jindalstainless.com"],
        "phone": ["8303810195"]
    },
    {
        "shipToPartyCode": "1010003663",
        "shipToPartyName": "VICTOR",
        "shipToCity": "PUNE",
        "emails": ["vedant.jalan@jindalstainless.com"],
        "phone": ["8303810195"]
    },
    {
        "shipToPartyCode": "1010003714",
        "shipToPartyName": "INGRESS AUTO",
        "shipToCity": "MANESAR",
        "emails": ["supriyo.paul@jindalstainless.com"],
        "phone": ["8167533539"]
    },
    {
        "shipToPartyCode": "1010005703",
        "shipToPartyName": "FINEPAC",
        "shipToCity": "PUNE",
        "emails": ["vedant.jalan@jindalstainless.com"],
        "phone": ["8303810195"]
    }
]


const CUSTOMER_INFO = [
    {
        "ship_to_part_code": "1010003294",
        "ship_party_name": "JOHNSON LIFTS PVT LTD",
        "ship_to_city": "Kanchip",
        "email_ids": "gokul@johnsonliftsltd.com",
        "kam_name": "Keerthish VB"
    },
    {
        "ship_to_part_code": "1010009906",
        "ship_party_name": "JOHNSON LIFTS PVT LTD",
        "ship_to_city": "Butiburi",
        "email_ids": "rahul@johnsonliftsltd.com",
        "kam_name": "Keerthish VB"



    },
    {
        "ship_to_part_code": "1010001532",
        "ship_party_name": "VRV ASIA PACIFIC PVT LTD",
        "ship_to_city": "Sricity",
        "email_ids": "sridhar.gl@chartindustries.com",
        "kam_name": "Arun CK"



    },

    {
        "ship_to_part_code": "1010002063",
        "ship_party_name": "CRYOLOR ASIA PACIFIC PVT LTD",
        "ship_to_city": "Chengalpettu-Chennai",
        "email_ids": "muthukumaran.d@airliquide.com",
        "kam_name": "Arun CK"



    },

    {
        "ship_to_part_code": "1100001508",
        "ship_party_name": "NIPPON SLIT AND CUTTING LINE",
        "ship_to_city": "Chennai",
        "email_ids": "nagarajt@hyundai-steel.com",
        "kam_name": "Keerthish VB"



    },

    {
        "ship_to_part_code": "1100001805",
        "ship_party_name": "METAL ONE CORPORATION INDIA",
        "ship_to_city": "Chennai",
        "email_ids": "s.rohini@metalone.co.in",
        "kam_name": "Keerthish VB"



    },

    {
        "ship_to_part_code": "1100001805",
        "ship_party_name": "METAL ONE CORPORATION INDIA",
        "ship_to_city": "Chennai",
        "email_ids": "kasi.vishwanath@metalone.co.in",
        "kam_name": "Keerthish VB"



    },

    {
        "ship_to_part_code": "1010003605",
        "ship_party_name": "Tube investments",
        "ship_to_city": "Chennai",
        "email_ids": "rameshk@tii.murugappa.com",
        "kam_name": "Keerthish VB"



    },

    {
        "ship_to_part_code": "1010003698",
        "ship_party_name": "India Government Mint",
        "ship_to_city": "HYDERABAD",
        "email_ids": "ashwani@jindalstainless.com",
        "kam_name": "Ashwani Awasthi"

    },

    {
        "ship_to_part_code": "1010001699",
        "ship_party_name": "India Government Mint",
        "ship_to_city": "KOLKATA",
        "email_ids": "ashwani@jindalstainless.com",
        "kam_name": "Ashwani Awasthi"

    },
    {
        "ship_to_part_code": "1010010287",
        "ship_party_name": "India Government Mint",
        "ship_to_city": "MUMBAI",
        "email_ids": "ashwani@jindalstainless.com",
        "kam_name": "Ashwani Awasthi"
    }

]
const NEW_CUSTOMER_CODES = [
    "1010000342",
    "1010000624",
    "1010000805",
    "1010001057",
    "1010001669",
    "1010002560",
    "1010002598",
    "1010002874",
    "1010002921",
    "1010003360",
    "1010003443",
    "1010003486",
    "1010003519",
    "1010003663",
    "1010003714",
    "1010003761",
    "1010003798",
    "1010005703",
    "1010007834",
    "1010008463",
    "1010009343",
    "1010010252",
    "1010011641",
    "1010012609",
    "1010012953",
    "1010014157",
    "1010014813",
    "1010016181",
    "1010017073",
    "1010017103",
    "1010017178",
    "1010017425",
    "1010017623",
    "1010018535",
    "1010018761",
    "1010019332",
    "1010019547",
    "1010019567",
    "1030000012",
    "1030000158",
    "1030000160",
    "1030000198",
    "1090000009",
    "1100001814",
    "1010019462",
    "1010013864",
    "1010000624",
    "1010010715",
    "1010003758",
    "1010011317",
    "1100000859",
    "1010020151",
    "1090000113",
    "1010008997",
    "1010008551",
    "1010010807",
    "1100002020",
    "1010018991",
    "1100002119",
    "1010016697",
    "1010000571",
    "1010021393",
    "1010011865",
    "1010011047",
    "1010017453",
    "1090000118",
    "1010003074",
    "1010002626"
]

// console.log($event.shipmentNumber)
async function main() {
    if ($event.shipmentTrackingStatus == "Enroute For Delivery") {

        try {
            const cns = await getCnsByShId(SHIPMENT_ID);

            if (!cns || !cns.length) {
                console.log("No Consignments")
                return
            }
            const customerCodes = _.uniq(cns.map((cn) => cn.customFields?.find((e) => e.fieldKey == "Ship to Party")?.value))
            console.log({ customerCodes })

            for (const customerCode of customerCodes) {
                // if (!customerCode || (!CUSTOMER_INFO.find((e) => e.ship_to_part_code == customerCode) && !NEW_CUSTOMER_CODES.includes(customerCode))) {
                //     console.log(`Customer not found ${customerCode}`)
                //     continue
                // }

                const customerMaster = await getBpByKeyValue("externalId", customerCode)

                const shipmentDate = formatDate($event.shipmentDate)
                const vehicleNo = $event.fleetInfo.vehicle.vehicleRegistrationNumber
                const customer = customerMaster?.name
                const origin = _.first($event.shipmentStages)?.place?.name ?? _.first($event.shipmentStages)?.hub?.name ?? ""
                const destination = _.last($event.shipmentStages)?.place?.name ?? _.last($event.shipmentStages)?.hub?.name ?? ""
                const trackingLink = `https://test.fretron.com/shared-shipment?uuid=${SHIPMENT_ID}`

                const liveLocData = await getLiveLocation(SHIPMENT_ID)
                const smsLiveLocationLink = liveLocData?.data ?
                    `https://alpha.fretron.com/shared-shipment/v4?code=${liveLocData?.data}` : '';

                // const customerEmails = customerMaster.contacts?.find((e) => e.name.includes("(KAM)"))?.emails

                // let to = customerEmails ? customerEmails : [CUSTOMER_INFO.find((e) => e.ship_to_part_code == customerCode)?.email_ids]
                // if (NEW_CUSTOMER_CODES.includes(customerCode)) {
                //     console.log("Customer Found From Latest Records")
                //     to = ["supriyo.paul@jindalstainless.com"]
                // }
                // const cc = [
                //     'nishant.girdhar@jindalstainless.com',
                //     'dariya.singh@jindalstainless.com',
                //     'ankita.saxena@jindalstainless.com',
                //     'monu.khan@fretron.com',
                //     'devendra.singh@fretron.com'
                // ]
                // const subject = `Shipment Tracking link - ${vehicleNo} - ${customer}`
                // const html = _generateHTML({ shipmentDate, vehicleNo, shipToParty: customer, origin, destination, trackingLink })
                // const emailRes = await sendEmail(to, cc, subject, null, html)
                // console.log(emailRes)

                try {
                    const customerInfo = CUSTOMER_EMAIL_PHONE_INFO.find(info => info.shipToPartyCode === customerCode)
                    if (customerInfo && customerInfo.phone && customerInfo.phone.length > 0) {
                        const smsContent = `Shipment No. - ${$event.shipmentNumber} Shipment Date. - ${shipmentDate} Vehicle No. - ${vehicleNo} Shipment origin. - ${origin} Destination - ${destination} Link - ${smsLiveLocationLink}`
                        console.log(smsContent)
                        for (const phoneNumber of customerInfo.phone) {
                            const smsRes = await sendSms(smsContent, phoneNumber)
                            console.log(`SMS sent to ${phoneNumber}:`, smsRes)
                        }
                    } else {
                        console.log(`No phone numbers found for customer code: ${customerCode}`)
                    }
                } catch (error) {
                    console.log(`Error sending SMS for customer ${customerCode}:`, error.message)
                }
            }
        } catch (e) {
            console.log(`Cathed Error : ${e.message}`)
        }
    }

}

async function getCnsByShId(shId) {
    const response = await rp({
        uri: `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${shId}/consignments`,
        method: "GET",
        json: true,
        headers: {
            Authorization: token,
        },
    });
    return response.data;
}

async function sendEmail(to, cc, subject, content, html) {
    let url = `${FRT_PUB_BASE_URL}/notifications/ses/email`;
    let reqObj = {
        to: to.join(),
        cc: cc.join(),
        subject: subject ? subject : "",
        content: content ? content : "",
        html: html ? html : "",
    };
    let res = await rp({
        method: "POST",
        uri: url,
        headers: {
            "Content-Type": "application/json",
        },
        formData: reqObj,
        timeout: 10000,
    });
    return res;
}

async function getBpByKeyValue(key, value) {
    let url = `${FRT_PUB_BASE_URL}/business-partners/v2/admin/partner?key=${key}&value=${value}&orgId=${ORG_ID}`
    try {
        let res = await rp({
            method: "GET",
            uri: url,
            json: true
        })

        if (res.status == 200) {
            return res.data
        }
    } catch (e) {
        console.log(`Catched error in getting bp by ${key} ${value}  : ${e.message}`)
    }
    return null
}

function _generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>Shipment Details and Tracking Link</title>
      <style>
        table {
          border-collapse: collapse;
          border: 1px solid black;
        }
    
        th,
        td {
          border: 1px solid black;
          padding: 5px;
          text-align: left;
        }
      </style>
    </head>
    
    <body>
      <p>Hello Team,</p>
      <p>Greetings from Fretron!!</p>
      <p>Please find the shipment details and tracking link below:</p>
      <table>
        <thead>
          <tr>
            <th>Shipment Date</th>
            <th>Vehicle Number</th>
            <th>Customer Name</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Tracking Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${data.shipmentDate}</td>
            <td>${data.vehicleNo}</td>
            <td>${data.shipToParty}</td>
            <td>${data.origin}</td>
            <td>${data.destination}</td>
            <td><a href="${data.trackingLink}">link</a></td>
          </tr>
        </tbody>
      </table>
    </body>
    
    </html>
        `
}

function formatDate(epoch) {
    const date = new Date(epoch);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}-${month}-${year}`;
}

async function sendSms(content, mobileNumber) {
    let res = await rp({
        method: "post",
        uri: `${FRT_PUB_BASE_URL}/notifications/smsing/sms`,
        body: {
            to: mobileNumber,
            content: content,
        },
        json: true,
    });
    return res;
}

async function getLiveLocation(shipmentId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/share-sh`
        let options = {
            method: "POST",
            uri: url,
            headers: {
                'Authorization': token
            },
            body: {
                "shId": shipmentId,
                "orgName": "Jindal Stainless Ltd",
                "emails": [],
                "domainName": "https://alpha.fretron.com",
                "mobileNos": [],
                "html": "Link:"
            },
            json: true
        }
        let res = await rp(options)
        if (res?.status === 200) {
            return res
        }
    } catch (err) {
        console.log(`Error in sharing shipment details: ${err.message}`)
        return null
    }
}

main()