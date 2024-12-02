const rp = require('request-promise')
const FREIGHT_CHARGE_NAME = "Freight";
const RATE_PER_MT_SUFFIX = "ratePerMt";
const FRT_PUB_BASE_URL = "https://apis.fretron.com"
const TOKEN = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzMxMjQ3MjQsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiJhOWIyMTMzNC1hZjRiLTRlNmMtODdhZS04NTlhMmIxMjM3YmUiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.4RHkHKq0Zctpdlbn-aEg6gGkUTLyh8zgRiWu8U178lo"

// const shipment = {
//     customFields: [
//         {
//             indexedValue: ["MaterialGroup1_"],
//             fieldKey: "MaterialGroup1",
//             value: 100
//         },
//         {
//             indexedValue: ["MaterialGroup2_"],
//             fieldKey: "MaterialGroup2",
//             value: 200
//         }
//     ],
//     consignments: [
//         {
//             uuid: "cn1",
//             lineItems: [
//                 {
//                     material: {
//                         materialGroup: 'MaterialGroup1'
//                     },
//                     uuid: 'lineItem1'
//                 },
//                 {
//                     material: {
//                         materialGroup: 'MaterialGroup1'
//                     },
//                     uuid: 'lineItem2'
//                 }
//             ],
//             orderMappings: [
//                 {
//                     consignmentLineItemId: 'lineItem1',
//                     quantity: {
//                         weight: {
//                             netQuantity: 1
//                         }
//                     }
//                 },
//                 {
//                     consignmentLineItemId: 'lineItem2',
//                     quantity: {
//                         weight: {
//                             netQuantity: 2
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             uuid: "cn2",
//             lineItems: [
//                 {
//                     material: {
//                         materialGroup: 'MaterialGroup2'
//                     },
//                     uuid: 'lineItem4'
//                 },
//                 {
//                     material: {
//                         materialGroup: 'MaterialGroup1'
//                     },
//                     uuid: 'lineItem5'
//                 }
//             ],
//             orderMappings: [
//                 {
//                     consignmentLineItemId: 'lineItem4',
//                     quantity: {
//                         weight: {
//                             netQuantity: 4
//                         }
//                     }
//                 },
//                 {
//                     consignmentLineItemId: 'lineItem5',
//                     quantity: {
//                         weight: {
//                             netQuantity: 5
//                         }
//                     }
//                 }
//             ]
//         }
//     ],
//     fleetInfo: {
//         vehicle: {
//             vehicleLoadType: {
//                 passingCapacityMT: 25
//             }
//         }
//     },
//     minGuaranteeWeight: 18,
//     uuid: "fb2b2bb1-af42-48a2-bdaa-4db59870ee5b"
// };

const shipment = {
    "creationTime": 1729862737246,
    "customFields": [
        {
            "indexedValue": [
                "FreightCost_1.0"
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
            "value": "1.0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "FreightType_perVehicle"
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
            "value": "perVehicle",
            "isRemark": false
        },
        {
            "indexedValue": [
                "PONo_477b1d40-a6b3-4e09-a8fd-b18ff7d113a1"
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
            "value": "477b1d40-a6b3-4e09-a8fd-b18ff7d113a1",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gate Entry Number_60001102"
            ],
            "fieldKey": "Gate Entry Number",
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
            "value": "60001102",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gate Entry Time_25.10.2024 11:26:23"
            ],
            "fieldKey": "Gate Entry Time",
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
            "value": "25.10.2024 11:26:23",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Tare Weight (Gate Entry)_0"
            ],
            "fieldKey": "Tare Weight (Gate Entry)",
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
            "value": "0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gross Weight (Gate Entry)_0"
            ],
            "fieldKey": "Gross Weight (Gate Entry)",
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
            "value": "0",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gross Vehicle Weight (Gate Entry)_null"
            ],
            "fieldKey": "Gross Vehicle Weight (Gate Entry)",
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
            "value": null,
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice No's_900001,900002"
            ],
            "fieldKey": "Invoice No's",
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
            "value": "900001,900002",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Cancelled Invoices_900001"
            ],
            "fieldKey": "Cancelled Invoices",
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
            "value": "900001",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice 900001 Date Time_1729794600000"
            ],
            "fieldKey": "Invoice 900001 Date Time",
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
            "value": "1729794600000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice 900002 Date Time_1729794600000"
            ],
            "fieldKey": "Invoice 900002 Date Time",
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
            "value": "1729794600000",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gate Out Time_25.10.2024 19:21"
            ],
            "fieldKey": "Gate Out Time",
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
            "value": "25.10.2024 19:21",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Tare Weight (Gate Out)_10"
            ],
            "fieldKey": "Tare Weight (Gate Out)",
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
            "value": "10",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gross Weight (Gate Out)_20"
            ],
            "fieldKey": "Gross Weight (Gate Out)",
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
            "value": "20",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Empty Gate Out_No"
            ],
            "fieldKey": "Empty Gate Out",
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
            "value": "No",
            "isRemark": false
        }
    ],
    "transportationMode": "ByRoad",
    "freightUnitLineItemId": "cd9609a2-658b-483d-8264-ab9d48ef0d5f",
    "lastSyncUpTime": 1731135922938,
    "updates": {
        "traceID": "consignmentTopic_8_5503013",
        "resourceId": "4a8ac7ab-8674-4317-a081-f8dafe15e07c",
        "updatedBy": "SYSTEM",
        "changes": null,
        "sourceOfInformation": null,
        "description": null,
        "forwardReasons": [
            "shipment.consignment.updated"
        ],
        "userId": null,
        "uuid": "8131fb1f-7d68-4c63-8a06-5ea4c925791f",
        "revision": 600,
        "time": 1731136888204,
        "forwardedFrom": "ff221515-c064-4329-bc2a-85af73a28064",
        "resourceType": "ShipmentObject",
        "updateType": null
    },
    "isActive": false,
    "uuid": "4a8ac7ab-8674-4317-a081-f8dafe15e07c",
    "issues": null,
    "branch": null,
    "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
    "shipmentType": "DirectLeg",
    "completionTime": 1731135923554,
    "orderNumbers": [
        "TEST0004"
    ],
    "routeId": "Waiting For GateOut",
    "shipmentTrackingStatus": null,
    "lastForwardTime": 1731136888250,
    "runningStatus": null,
    "delayTrackingStatus": null,
    "delayReasonLastUpdateTime": null,
    "links": null,
    "shipmentDate": 1729862737164,
    "delayReason": null,
    "shipmentNumber": "FRETSH000000018",
    "originalEdd": 1730209860000,
    "edd": 1730209860000,
    "delayReasonUpdateExpiryTime": null,
    "externalShipmentId": "60001102",
    "fleetInfo": {
        "isTrackingEnable": null,
        "forwardingAgent": null,
        "verificationStatus": null,
        "trackingMode": "MANUAL",
        "broker": {
            "geoFence": null,
            "documents": null,
            "customFields": null,
            "isPortalEnabled": false,
            "type": null,
            "updates": null,
            "uuid": "6e7ba6fa-221e-4847-af9c-ccf11d1078a3",
            "orgId": null,
            "firmType": null,
            "gstn": null,
            "voterId": null,
            "verificationTicketId": null,
            "companyCodes": null,
            "group": null,
            "address": null,
            "verificationStatus": null,
            "externalId": "2000149",
            "panNumber": null,
            "aadharNo": null,
            "parentId": null,
            "places": null,
            "route": null,
            "name": "AXN LOGISTIC",
            "location": null,
            "fretronId": null,
            "contacts": [
                {
                    "emails": [
                        "axnlogistic01@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "9893483041"
                    ],
                    "mobileNumber": null,
                    "name": "Amit Mishra",
                    "type": null
                },
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "7999044859"
                    ],
                    "mobileNumber": null,
                    "name": "Pankaj Mishra",
                    "type": null
                },
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "9826529621"
                    ],
                    "mobileNumber": null,
                    "name": "Anil Mishra",
                    "type": null
                }
            ],
            "status": "ACTIVE"
        },
        "uuid": null,
        "orgId": null,
        "vehicle": {
            "vtsDeviceId": null,
            "kmDriven": null,
            "secondaryDriverId": null,
            "attachedDocs": null,
            "customFields": null,
            "floorType": null,
            "description": null,
            "source": "FRETRON",
            "isTrackingEnabled": null,
            "updates": null,
            "uuid": null,
            "branch": null,
            "orgId": null,
            "vehicleLoadType": {
                "bodyType": "CLOSE",
                "passingCapacityMT": 10,
                "minLength": 22,
                "updates": {
                    "traceID": null,
                    "resourceId": "89751582-f0ff-4bb0-b394-cf8ebcd24149",
                    "updatedBy": "USER",
                    "changes": null,
                    "sourceOfInformation": null,
                    "description": "Created Load Type.",
                    "forwardReasons": [
                        "load.type.created.event"
                    ],
                    "userId": "a0a838f0-2758-4c0c-ae90-6e3338242bae",
                    "uuid": "1fee821d-3ee6-4867-be02-e6b9909e17f0",
                    "revision": null,
                    "time": 1726641964039,
                    "forwardedFrom": null,
                    "resourceType": "LoadTypes",
                    "updateType": null
                },
                "vehicleCategories": null,
                "type": "FTL",
                "uuid": "89751582-f0ff-4bb0-b394-cf8ebcd24149",
                "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "vehicleCategory": "SMALL",
                "includeMaxLength": false,
                "minHeight": 8,
                "maxHeight": 8,
                "passingCapacityCFT": 1408,
                "bodyTypes": null,
                "partnerName": null,
                "includeMinLength": false,
                "partnerExternalId": null,
                "externalId": "2",
                "chassisTypes": null,
                "numberOfWheels": null,
                "chassisType": "TRUCK",
                "includeMinHeight": false,
                "name": "22 FT SXL 10 MT",
                "partnerId": null,
                "includeMaxHeight": false,
                "dimensionString": "22*8*8",
                "maxLength": 22
            },
            "associatedWith": null,
            "isDeleted": null,
            "customerId": null,
            "vehicleModel": null,
            "mileageEmpty": null,
            "mileageLoaded": null,
            "vehicleType": "22 FT SXL 10 MT",
            "groups": null,
            "externalId": null,
            "updateTime": null,
            "sharedWith": null,
            "baseLocationId": null,
            "vehicleMake": null,
            "vehicleRegistrationNumber": "TE02ST2356",
            "chassisNumber": null,
            "driverId": null,
            "createTime": null,
            "loadCapacity": 10,
            "truckLength": null,
            "category": null,
            "groupsExtended": null
        },
        "driver": {
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
            "dob": 923337000000,
            "name": "Raj Kumar",
            "vehicleId": null,
            "associatedUserId": null,
            "status": null
        },
        "fleetType": "Market",
        "fleetOwner": {
            "geoFence": null,
            "documents": null,
            "customFields": null,
            "isPortalEnabled": false,
            "type": null,
            "updates": null,
            "uuid": "6e7ba6fa-221e-4847-af9c-ccf11d1078a3",
            "orgId": null,
            "firmType": null,
            "gstn": null,
            "voterId": null,
            "verificationTicketId": null,
            "companyCodes": null,
            "group": null,
            "address": null,
            "verificationStatus": null,
            "externalId": "2000149",
            "panNumber": null,
            "aadharNo": null,
            "parentId": null,
            "places": null,
            "route": null,
            "name": "AXN LOGISTIC",
            "location": null,
            "fretronId": null,
            "contacts": [
                {
                    "emails": [
                        "axnlogistic01@gmail.com"
                    ],
                    "address": null,
                    "mobileNumbers": [
                        "9893483041"
                    ],
                    "mobileNumber": null,
                    "name": "Amit Mishra",
                    "type": null
                },
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "7999044859"
                    ],
                    "mobileNumber": null,
                    "name": "Pankaj Mishra",
                    "type": null
                },
                {
                    "emails": [],
                    "address": null,
                    "mobileNumbers": [
                        "9826529621"
                    ],
                    "mobileNumber": null,
                    "name": "Anil Mishra",
                    "type": null
                }
            ],
            "status": "ACTIVE"
        },
        "trainInfo": null,
        "lbsNumber": null,
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
        "device": null,
        "status": null
    },
    "syncUpDueTime": null,
    "billingStatus": "Pending",
    "currentLocation": null,
    "alerts": [],
    "equipments": null,
    "tripType": "Shipment",
    "lastDelayCalculationTime": null,
    "delayReasonUpdateDueTime": null,
    "locationTrackingStatus": null,
    "poLineItemId": "bad42cdd-5132-4c74-b0da-695b639fea5d",
    "consignments": [
        {
            "salesOrderId": null,
            "fuLineItemIds": null,
            "pod": {
                "receivedBy": null,
                "unloadingFinishDate": null,
                "documents": [
                    {
                        "resourceId": "2a739056-01ff-4f31-adbb-483000b9ea77",
                        "customFields": null,
                        "downloadUrl": "https://storage.googleapis.com/fretron-document-bucket/uploads/c24f7c91-30ba-4533-b86d-9eca644e6605/4d1f2ee4-fb03-40f4-b15c-8fd1ea252835@E-pod-summary.jpg",
                        "updates": {
                            "traceID": "0d4dce70-4975-420c-bae0-ccfd9c4f6d80",
                            "resourceId": "4d1f2ee4-fb03-40f4-b15c-8fd1ea252835",
                            "updatedBy": "USER",
                            "changes": null,
                            "sourceOfInformation": "created",
                            "description": "document created",
                            "forwardReasons": [
                                "document.added"
                            ],
                            "userId": "a42e539c-88f3-42cf-a1e7-d13e0b60833d",
                            "uuid": "6833496d-b46c-46cb-a6e9-a6d222ee72b4",
                            "revision": null,
                            "time": 1731135863263,
                            "forwardedFrom": null,
                            "resourceType": "Document",
                            "updateType": null
                        },
                        "uuid": "4d1f2ee4-fb03-40f4-b15c-8fd1ea252835",
                        "orgId": "c24f7c91-30ba-4533-b86d-9eca644e6605",
                        "docPath": "/uploads/c24f7c91-30ba-4533-b86d-9eca644e6605/4d1f2ee4-fb03-40f4-b15c-8fd1ea252835@E-pod-summary.jpg",
                        "createdAt": 1731135863263,
                        "isExpirable": false,
                        "previewString": null,
                        "createdBy": "a42e539c-88f3-42cf-a1e7-d13e0b60833d",
                        "name": "E-pod-summary.jpg",
                        "expireDate": null,
                        "resourceType": "SHIPMENT_POD"
                    }
                ],
                "trackingDetail": null,
                "consignmentId": "b5569c48-8de5-41c4-85bb-46b7da5db3d1",
                "receiveDate": null,
                "externalId": null,
                "submissionDate": 1731135922484,
                "expectedSubmissionDate": null,
                "feedingStatus": "CREATED",
                "updates": {
                    "traceID": "40634388-5b74-48d2-960a-3f2a699892c0",
                    "resourceId": "2a739056-01ff-4f31-adbb-483000b9ea77",
                    "updatedBy": "USER",
                    "changes": null,
                    "sourceOfInformation": null,
                    "description": "Updated Pod reporting date to 12:30 PM | 09-11-24",
                    "forwardReasons": [
                        "pod.reporting.date.updated"
                    ],
                    "userId": "a42e539c-88f3-42cf-a1e7-d13e0b60833d",
                    "uuid": "02443d08-4714-4071-96ca-5ca33eda5f5b",
                    "revision": 0,
                    "time": 1731136887964,
                    "forwardedFrom": null,
                    "resourceType": "POD",
                    "updateType": null
                },
                "type": "POD",
                "issues": [
                    ""
                ],
                "uuid": "2a739056-01ff-4f31-adbb-483000b9ea77",
                "customField": null,
                "deliveryItems": [
                    {
                        "estimatedShortageAmount": null,
                        "material": null,
                        "documents": null,
                        "orderMapping": {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": 4,
                                    "density": null,
                                    "netQuantity": 5,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 5,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": null,
                                    "grossQuantity": 4,
                                    "shortage": 1,
                                    "temperature": null,
                                    "plannedLoadQuantity": 5,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "cce580d8-cbf0-4607-bcd2-5e9fc1b5dd30",
                            "lineItemId": "72a89a55-3b34-44a9-8776-5805d1db8629",
                            "legType": "DirectLeg",
                            "consignmentId": "b5569c48-8de5-41c4-85bb-46b7da5db3d1",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": "9481d83b-6888-4a5a-ba6d-94a4a638e949",
                            "source": "Order",
                            "containerId": null,
                            "uuid": "b3a55cd0-91c1-486e-a086-182083d8b47b",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "cd9609a2-658b-483d-8264-ab9d48ef0d5f",
                                    "shipmentId": null,
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "FINALIZED"
                                }
                            ]
                        },
                        "estimatedDamangedAmount": null,
                        "damageReason": null,
                        "issues": [
                            "Shortage"
                        ],
                        "remarks": null,
                        "status": "NOT OK",
                        "shortageReason": null
                    }
                ],
                "unloadingStartDate": null,
                "vehicleReleaseDate": null,
                "shipmentId": null,
                "reportingDate": 1731135608185,
                "submissionPlace": null,
                "remarks": "",
                "status": "SUBMITTED"
            },
            "creationTime": 1729864187417,
            "customFields": [
                {
                    "indexedValue": [
                        "LR Number_MPS000T1"
                    ],
                    "fieldKey": "LR Number",
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
                    "value": "MPS000T1",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Invoice No's_900001"
                    ],
                    "fieldKey": "Invoice No's",
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
                    "value": "900001",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Gate Entry Number_60001102"
                    ],
                    "fieldKey": "Gate Entry Number",
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
                    "value": "60001102",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Invoice 900001 Date Time_25.10.2024"
                    ],
                    "fieldKey": "Invoice 900001 Date Time",
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
                    "value": "25.10.2024",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Invoice 900001 Eway Bill Exp Number_1234567890"
                    ],
                    "fieldKey": "Invoice 900001 Eway Bill Exp Number",
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
                    "value": "1234567890",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Invoice 900001 Eway Bill Exp Date_26.10.2024"
                    ],
                    "fieldKey": "Invoice 900001 Eway Bill Exp Date",
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
                    "value": "26.10.2024",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "DriverVerificationStatus_VERIFIED"
                    ],
                    "fieldKey": "DriverVerificationStatus",
                    "multiple": false,
                    "description": "Driver Verification Status",
                    "remark": null,
                    "uuid": null,
                    "required": false,
                    "accessType": null,
                    "input": null,
                    "unit": null,
                    "valueType": "string",
                    "options": [
                        "VERIFIED",
                        "UNVERIFIED"
                    ],
                    "fieldType": "select",
                    "value": "VERIFIED",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Pod Shortage Qty_1.000"
                    ],
                    "fieldKey": "Pod Shortage Qty",
                    "multiple": false,
                    "description": null,
                    "remark": null,
                    "uuid": null,
                    "required": false,
                    "accessType": null,
                    "input": "number",
                    "unit": null,
                    "valueType": "string",
                    "options": null,
                    "fieldType": "text",
                    "value": "1.000",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Pod Damaged Qty_0.000"
                    ],
                    "fieldKey": "Pod Damaged Qty",
                    "multiple": false,
                    "description": null,
                    "remark": null,
                    "uuid": null,
                    "required": false,
                    "accessType": null,
                    "input": "number",
                    "unit": null,
                    "valueType": "string",
                    "options": null,
                    "fieldType": "text",
                    "value": "0.000",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Pod Received Qty_4.000"
                    ],
                    "fieldKey": "Pod Received Qty",
                    "multiple": false,
                    "description": null,
                    "remark": null,
                    "uuid": null,
                    "required": false,
                    "accessType": null,
                    "input": "number",
                    "unit": null,
                    "valueType": "string",
                    "options": null,
                    "fieldType": "text",
                    "value": "4.000",
                    "isRemark": false
                }
            ],
            "loadInfo": {
                "material": "NRG",
                "valueOfGoods": 0,
                "standardMeasurement": {
                    "volume": null,
                    "packageMeasurement": null,
                    "weight": {
                        "actualDeliveredQuantity": null,
                        "density": null,
                        "netQuantity": 5,
                        "moisture": null,
                        "claimQuantity": null,
                        "unitOfMeasurment": "Metric Tonnes",
                        "standardQuantity": 5,
                        "actualLoadedQuantity": null,
                        "measurmentType": null,
                        "grossQuantity": 5,
                        "shortage": null,
                        "temperature": null,
                        "plannedLoadQuantity": 5,
                        "frieghtDeductableQuantity": null
                    },
                    "containers": null,
                    "trucks": null
                },
                "currency": null,
                "measurements": [
                    {
                        "actualDeliveredQuantity": null,
                        "density": null,
                        "netQuantity": 5,
                        "moisture": null,
                        "claimQuantity": null,
                        "unitOfMeasurment": "Metric Tonnes",
                        "standardQuantity": 5,
                        "actualLoadedQuantity": null,
                        "measurmentType": null,
                        "grossQuantity": 5,
                        "shortage": null,
                        "temperature": null,
                        "plannedLoadQuantity": null,
                        "frieghtDeductableQuantity": null
                    }
                ]
            },
            "customerPsnNo": null,
            "invoiceValue": "0.0",
            "updates": {
                "traceID": "69120f1f-cd19-4d94-8321-2b5ecd3fddb3",
                "resourceId": "b5569c48-8de5-41c4-85bb-46b7da5db3d1",
                "updatedBy": "SYSTEM",
                "changes": null,
                "sourceOfInformation": null,
                "description": null,
                "forwardReasons": [
                    "ensure.lineitem.and.mapping"
                ],
                "userId": null,
                "uuid": "76201827-6fab-422f-a99e-0b37d3ceec3e",
                "revision": 54,
                "time": 1731137162614,
                "forwardedFrom": null,
                "resourceType": "Consignment",
                "updateType": null
            },
            "uuid": "b5569c48-8de5-41c4-85bb-46b7da5db3d1",
            "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
            "consigner": {
                "geoFence": null,
                "documents": null,
                "customFields": null,
                "isPortalEnabled": false,
                "type": "customer",
                "updates": null,
                "uuid": "ded7f941-a5c6-4aeb-b836-4591a22d10c2",
                "orgId": null,
                "firmType": null,
                "gstn": null,
                "voterId": null,
                "verificationTicketId": null,
                "companyCodes": null,
                "group": {
                    "name": "Consignor",
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
                "places": [
                    {
                        "hubId": null,
                        "boundary": null,
                        "address": null,
                        "accessibility": null,
                        "addedBy": null,
                        "center": {
                            "latitude": 23.197871636791923,
                            "longitude": 81.58799238066777
                        },
                        "suggestedRadius": 0,
                        "isOwned": null,
                        "centerCoordinates": [
                            81.58799238066777,
                            23.197871636791923
                        ],
                        "placeId": "ee5a623b-c714-4848-8589-229b35989d43",
                        "geoJsonBoundry": null,
                        "externalId": null,
                        "source": "GOOGLE",
                        "places": null,
                        "viewport": null,
                        "district": null,
                        "name": "Orient Paper,P.O. Amlai Paper Mills, Madhya Pradesh 484117",
                        "state": null,
                        "category": "Hub",
                        "subDistrict": null,
                        "controllingBranchId": null
                    }
                ],
                "route": null,
                "name": "ORIENT PAPER MILLS - Amlai",
                "location": null,
                "fretronId": null,
                "contacts": null,
                "status": "ACTIVE"
            },
            "lineItems": [
                {
                    "itemNumber": "900001_10",
                    "transportationServiceId": null,
                    "material": {
                        "unitOfMeasurement": "Metric Tonnes",
                        "measuredQuantity": null,
                        "partnerName": null,
                        "materialType": "Material",
                        "externalId": null,
                        "updates": {
                            "traceID": "00000000000000000000000000000000",
                            "resourceId": "f5ebec09-b9c8-47ab-9470-6fdc5ed05d26",
                            "updatedBy": "USER",
                            "changes": null,
                            "sourceOfInformation": null,
                            "description": "Added material NRG ",
                            "forwardReasons": [
                                "material.created.event"
                            ],
                            "userId": "a0a838f0-2758-4c0c-ae90-6e3338242bae",
                            "uuid": "7ed2e975-c632-484c-a50c-259ef07e4c3b",
                            "revision": null,
                            "time": 1726057095970,
                            "forwardedFrom": null,
                            "resourceType": "Material",
                            "updateType": null
                        },
                        "taxCode": null,
                        "uuid": "f5ebec09-b9c8-47ab-9470-6fdc5ed05d26",
                        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                        "pricePerUnit": null,
                        "materialDescription": "SOFT TISSUE REGULAR",
                        "division": null,
                        "controlCode": null,
                        "materialGroup": "SOFT TISSUE",
                        "materialGroupId": "91b5cace-b178-45fc-b33f-a379a22ffccf",
                        "name": "NRG",
                        "measurementType": "weight",
                        "companyCodes": null,
                        "partnerId": null,
                        "linkedMaterialId": null
                    },
                    "valueOfGoods": null,
                    "customFields": [
                        {
                            "indexedValue": null,
                            "fieldKey": "Invoice Date",
                            "valueType": "string",
                            "fieldType": "text",
                            "value": "25.10.2024",
                            "definitionId": null
                        },
                        {
                            "indexedValue": null,
                            "fieldKey": "Gate Entry Number",
                            "valueType": "string",
                            "fieldType": "text",
                            "value": "60001102",
                            "definitionId": null
                        },
                        {
                            "indexedValue": null,
                            "fieldKey": "Reel Dia",
                            "valueType": "string",
                            "fieldType": "text",
                            "value": "0",
                            "definitionId": null
                        },
                        {
                            "indexedValue": null,
                            "fieldKey": "Sheet Size",
                            "valueType": "string",
                            "fieldType": "text",
                            "value": "89.00X00.00",
                            "definitionId": null
                        }
                    ],
                    "externalId": "900001_10",
                    "invoiceNo": "900001",
                    "customerMaterial": null,
                    "uuid": "9481d83b-6888-4a5a-ba6d-94a4a638e949"
                }
            ],
            "pssNo": null,
            "eWayBillNumber": null,
            "billingType": null,
            "podDocument": null,
            "invoiceNo": "MPS000T1",
            "deliveryDate": 1731135923554,
            "associatedShipments": [
                "4a8ac7ab-8674-4317-a081-f8dafe15e07c"
            ],
            "originalEdd": null,
            "consignee": {
                "geoFence": null,
                "documents": null,
                "customFields": [
                    {
                        "indexedValue": [
                            "State GST Code_9"
                        ],
                        "fieldKey": "State GST Code",
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
                        "value": "9",
                        "isRemark": false
                    },
                    {
                        "indexedValue": [
                            "Category_ShipTo"
                        ],
                        "fieldKey": "Category",
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
                        "value": "ShipTo",
                        "isRemark": false
                    }
                ],
                "isPortalEnabled": false,
                "type": "customer",
                "updates": {
                    "traceID": "0965e672-cd29-4b08-b8c6-050768254ab9",
                    "resourceId": "65a53fa3-8d98-4bca-a4fd-2d7f1157d9f2",
                    "updatedBy": "USER",
                    "changes": [
                        {
                            "lastValue": "KOLKATA,WEST BENGAL",
                            "fieldName": "Place",
                            "fieldType": "String",
                            "currentValue": "KOLKATA,WEST BENGAL"
                        }
                    ],
                    "sourceOfInformation": null,
                    "description": "updated place KOLKATA,WEST BENGAL",
                    "forwardReasons": [
                        "business.partner.update.event",
                        "business.partner.places.update"
                    ],
                    "userId": "botuser--4f52f041-dc5c-4d14-83f6-a04396d4efac",
                    "uuid": "ad394338-a764-4eaa-95a5-e6054f5c8646",
                    "revision": null,
                    "time": 1729862145254,
                    "forwardedFrom": null,
                    "resourceType": "Business-Partner",
                    "updateType": null
                },
                "uuid": "65a53fa3-8d98-4bca-a4fd-2d7f1157d9f2",
                "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "firmType": null,
                "gstn": "0000000000",
                "voterId": null,
                "verificationTicketId": null,
                "companyCodes": null,
                "group": {
                    "name": "Consignee",
                    "partnerType": "customer",
                    "uuid": "424ec4f4-289d-4179-ab85-2a46c7043333",
                    "orgId": "a9b21334-af4b-4e6c-87ae-859a2b1237be"
                },
                "address": "{\"pincode\":\"\",\"address\":\"KOLKATA, WEST BENGAL\",\"city\":\"\",\"state\":\"\"}",
                "verificationStatus": "unverified",
                "externalId": "005000001",
                "panNumber": null,
                "aadharNo": null,
                "parentId": null,
                "places": [
                    {
                        "hubId": null,
                        "boundary": null,
                        "address": "KOLKATA, WEST BENGAL",
                        "accessibility": null,
                        "addedBy": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                        "center": {
                            "latitude": 22.55501537222935,
                            "longitude": 88.35268535053918
                        },
                        "suggestedRadius": 1000,
                        "isOwned": null,
                        "centerCoordinates": [
                            88.35268535053918,
                            22.55501537222935
                        ],
                        "placeId": "33b58f7e-bc19-4157-a872-bbf49d0522cd",
                        "geoJsonBoundry": null,
                        "externalId": "585",
                        "source": "FRETRON",
                        "places": null,
                        "viewport": null,
                        "district": "KOLKATA",
                        "name": "KOLKATA,WEST BENGAL",
                        "state": "WEST BENGAL",
                        "category": "Unloading Point",
                        "subDistrict": "700001",
                        "controllingBranchId": null
                    }
                ],
                "route": null,
                "name": "SUNITA TRADING CO",
                "location": null,
                "fretronId": null,
                "contacts": [
                    {
                        "emails": [
                            "sunitatrading2011@gmail.com"
                        ],
                        "address": null,
                        "mobileNumbers": [
                            "9748740501"
                        ],
                        "mobileNumber": null,
                        "name": "SUNITA",
                        "type": null
                    }
                ],
                "status": "ACTIVE"
            },
            "address": null,
            "edd": null,
            "salesOffice": null,
            "consignmentDate": 1729794600000,
            "externalId": "MPS000T1",
            "eWayBillExpiryDate": null,
            "activeShipment": null,
            "consignmentNo": "MPS000T1",
            "currentLocation": null,
            "billToParty": {
                "geoFence": null,
                "documents": null,
                "customFields": null,
                "isPortalEnabled": false,
                "type": "customer",
                "updates": null,
                "uuid": "65a53fa3-8d98-4bca-a4fd-2d7f1157d9f2",
                "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "firmType": null,
                "gstn": "0000000000",
                "voterId": null,
                "verificationTicketId": null,
                "companyCodes": null,
                "group": {
                    "name": "Consignee",
                    "partnerType": null,
                    "uuid": null,
                    "orgId": null
                },
                "address": "{\"address\":\"KOLKATA, WEST BENGAL\",\"state\":\"WEST BENGAL\",\"city\":\"KOLKATA\",\"pincode\":\"700001\"}",
                "verificationStatus": "unverified",
                "externalId": "005000001",
                "panNumber": null,
                "aadharNo": null,
                "parentId": null,
                "places": [
                    {
                        "hubId": null,
                        "boundary": null,
                        "address": "KOLKATA, WEST BENGAL",
                        "accessibility": null,
                        "addedBy": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                        "center": {
                            "latitude": 22.55501537222935,
                            "longitude": 88.35268535053918
                        },
                        "suggestedRadius": 1000,
                        "isOwned": null,
                        "centerCoordinates": [
                            88.35268535053918,
                            22.55501537222935
                        ],
                        "placeId": "d869525f-3400-4a4e-9329-b3900de7e82c",
                        "geoJsonBoundry": null,
                        "externalId": null,
                        "source": "FRETRON",
                        "places": null,
                        "viewport": null,
                        "district": "KOLKATA",
                        "name": "KOLKATA,WEST BENGAL",
                        "state": "WEST BENGAL",
                        "category": "Unloading Point",
                        "subDistrict": "700001",
                        "controllingBranchId": null
                    }
                ],
                "route": null,
                "name": "SUNITA TRADING CO",
                "location": null,
                "fretronId": null,
                "contacts": [
                    {
                        "emails": [
                            "sunitatrading2011@gmail.com"
                        ],
                        "address": null,
                        "mobileNumbers": [
                            "9748740501"
                        ],
                        "mobileNumber": null,
                        "name": "SUNITA",
                        "type": null
                    }
                ],
                "status": "ACTIVE"
            },
            "equipments": null,
            "orderMappings": [
                {
                    "quantity": {
                        "volume": null,
                        "packageMeasurement": null,
                        "weight": {
                            "actualDeliveredQuantity": null,
                            "density": null,
                            "netQuantity": 5,
                            "moisture": null,
                            "claimQuantity": null,
                            "unitOfMeasurment": "Metric Tonnes",
                            "standardQuantity": 5,
                            "actualLoadedQuantity": null,
                            "measurmentType": null,
                            "grossQuantity": 5,
                            "shortage": null,
                            "temperature": null,
                            "plannedLoadQuantity": 5,
                            "frieghtDeductableQuantity": null
                        },
                        "containers": null,
                        "trucks": null
                    },
                    "orderId": "cce580d8-cbf0-4607-bcd2-5e9fc1b5dd30",
                    "lineItemId": "72a89a55-3b34-44a9-8776-5805d1db8629",
                    "legType": "DirectLeg",
                    "consignmentId": "b5569c48-8de5-41c4-85bb-46b7da5db3d1",
                    "originLegId": null,
                    "isFullyUtilized": null,
                    "consignmentLineItemId": "9481d83b-6888-4a5a-ba6d-94a4a638e949",
                    "source": "Order",
                    "containerId": null,
                    "uuid": "b3a55cd0-91c1-486e-a086-182083d8b47b",
                    "fuMappings": [
                        {
                            "executionPlanId": null,
                            "legType": "DirectLeg",
                            "fuLineItemId": "cd9609a2-658b-483d-8264-ab9d48ef0d5f",
                            "shipmentId": null,
                            "legId": "DirectLeg#1.0",
                            "legStatus": "FINALIZED"
                        }
                    ]
                }
            ],
            "contractId": null,
            "workOrderNumber": null,
            "trackingStatus": "Delivered at KOLKATA,WEST BENGAL",
            "eWayBillRegistrationDate": null,
            "contractToParty": null,
            "invoiceStatus": null,
            "poNumber": null,
            "status": "Delivered"
        },
        {
            "salesOrderId": null,
            "fuLineItemIds": null,
            "pod": {
                "receivedBy": null,
                "unloadingFinishDate": null,
                "documents": [
                    {
                        "resourceId": "b1de7719-dc31-46af-8c01-4d55b0fcc4f3",
                        "customFields": null,
                        "downloadUrl": "https://storage.googleapis.com/fretron-document-bucket/uploads/c24f7c91-30ba-4533-b86d-9eca644e6605/9c930c6a-1987-48e1-9437-268b69cfe35c@E-pod-summary.jpg",
                        "updates": {
                            "traceID": "ce76c22f-ec1f-4d7e-8e45-8a0e7acf64b8",
                            "resourceId": "9c930c6a-1987-48e1-9437-268b69cfe35c",
                            "updatedBy": "USER",
                            "changes": null,
                            "sourceOfInformation": "created",
                            "description": "document created",
                            "forwardReasons": [
                                "document.added"
                            ],
                            "userId": "a42e539c-88f3-42cf-a1e7-d13e0b60833d",
                            "uuid": "e59d81de-b3e1-4e53-9b87-8a9fce1e0a3c",
                            "revision": null,
                            "time": 1731135898236,
                            "forwardedFrom": null,
                            "resourceType": "Document",
                            "updateType": null
                        },
                        "uuid": "9c930c6a-1987-48e1-9437-268b69cfe35c",
                        "orgId": "c24f7c91-30ba-4533-b86d-9eca644e6605",
                        "docPath": "/uploads/c24f7c91-30ba-4533-b86d-9eca644e6605/9c930c6a-1987-48e1-9437-268b69cfe35c@E-pod-summary.jpg",
                        "createdAt": 1731135898236,
                        "isExpirable": false,
                        "previewString": null,
                        "createdBy": "a42e539c-88f3-42cf-a1e7-d13e0b60833d",
                        "name": "E-pod-summary.jpg",
                        "expireDate": null,
                        "resourceType": "SHIPMENT_POD"
                    }
                ],
                "trackingDetail": null,
                "consignmentId": "ff221515-c064-4329-bc2a-85af73a28064",
                "receiveDate": null,
                "externalId": null,
                "submissionDate": 1731135922590,
                "expectedSubmissionDate": null,
                "feedingStatus": "CREATED",
                "updates": {
                    "traceID": "40634388-5b74-48d2-960a-3f2a699892c0",
                    "resourceId": "b1de7719-dc31-46af-8c01-4d55b0fcc4f3",
                    "updatedBy": "USER",
                    "changes": null,
                    "sourceOfInformation": null,
                    "description": "Updated Pod reporting date to 12:30 PM | 09-11-24",
                    "forwardReasons": [
                        "pod.reporting.date.updated"
                    ],
                    "userId": "a42e539c-88f3-42cf-a1e7-d13e0b60833d",
                    "uuid": "4f41a296-ad1f-4a26-88ba-3926d1baa600",
                    "revision": 0,
                    "time": 1731136888112,
                    "forwardedFrom": null,
                    "resourceType": "POD",
                    "updateType": null
                },
                "type": "POD",
                "issues": [
                    ""
                ],
                "uuid": "b1de7719-dc31-46af-8c01-4d55b0fcc4f3",
                "customField": null,
                "deliveryItems": [
                    {
                        "estimatedShortageAmount": null,
                        "material": null,
                        "documents": null,
                        "orderMapping": {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 5,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 5,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": null,
                                    "grossQuantity": 5,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": 5,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "cce580d8-cbf0-4607-bcd2-5e9fc1b5dd30",
                            "lineItemId": "72a89a55-3b34-44a9-8776-5805d1db8629",
                            "legType": "DirectLeg",
                            "consignmentId": "ff221515-c064-4329-bc2a-85af73a28064",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": "bdb2d19a-1df0-4dc7-9cb7-d4aacc95c158",
                            "source": "Order",
                            "containerId": null,
                            "uuid": "493f3982-13b2-4eb7-9e4a-c7a194b49149",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "cd9609a2-658b-483d-8264-ab9d48ef0d5f",
                                    "shipmentId": null,
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "FINALIZED"
                                }
                            ]
                        },
                        "estimatedDamangedAmount": null,
                        "damageReason": null,
                        "issues": [],
                        "remarks": null,
                        "status": "OK",
                        "shortageReason": null
                    }
                ],
                "unloadingStartDate": null,
                "vehicleReleaseDate": null,
                "shipmentId": null,
                "reportingDate": 1731135608185,
                "submissionPlace": null,
                "remarks": "",
                "status": "SUBMITTED"
            },
            "creationTime": 1729864273423,
            "customFields": [
                {
                    "indexedValue": [
                        "LR Number_MPS000T2"
                    ],
                    "fieldKey": "LR Number",
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
                    "value": "MPS000T2",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Invoice No's_900002"
                    ],
                    "fieldKey": "Invoice No's",
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
                    "value": "900002",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Gate Entry Number_60001102"
                    ],
                    "fieldKey": "Gate Entry Number",
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
                    "value": "60001102",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Invoice 900002 Date Time_25.10.2024"
                    ],
                    "fieldKey": "Invoice 900002 Date Time",
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
                    "value": "25.10.2024",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Invoice 900002 Eway Bill Exp Number_1234567890"
                    ],
                    "fieldKey": "Invoice 900002 Eway Bill Exp Number",
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
                    "value": "1234567890",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Invoice 900002 Eway Bill Exp Date_26.10.2024"
                    ],
                    "fieldKey": "Invoice 900002 Eway Bill Exp Date",
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
                    "value": "26.10.2024",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "DriverVerificationStatus_VERIFIED"
                    ],
                    "fieldKey": "DriverVerificationStatus",
                    "multiple": false,
                    "description": "Driver Verification Status",
                    "remark": null,
                    "uuid": null,
                    "required": false,
                    "accessType": null,
                    "input": null,
                    "unit": null,
                    "valueType": "string",
                    "options": [
                        "VERIFIED",
                        "UNVERIFIED"
                    ],
                    "fieldType": "select",
                    "value": "VERIFIED",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Pod Shortage Qty_0.000"
                    ],
                    "fieldKey": "Pod Shortage Qty",
                    "multiple": false,
                    "description": null,
                    "remark": null,
                    "uuid": null,
                    "required": false,
                    "accessType": null,
                    "input": "number",
                    "unit": null,
                    "valueType": "string",
                    "options": null,
                    "fieldType": "text",
                    "value": "0.000",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Pod Damaged Qty_0.000"
                    ],
                    "fieldKey": "Pod Damaged Qty",
                    "multiple": false,
                    "description": null,
                    "remark": null,
                    "uuid": null,
                    "required": false,
                    "accessType": null,
                    "input": "number",
                    "unit": null,
                    "valueType": "string",
                    "options": null,
                    "fieldType": "text",
                    "value": "0.000",
                    "isRemark": false
                },
                {
                    "indexedValue": [
                        "Pod Received Qty_5.000"
                    ],
                    "fieldKey": "Pod Received Qty",
                    "multiple": false,
                    "description": null,
                    "remark": null,
                    "uuid": null,
                    "required": false,
                    "accessType": null,
                    "input": "number",
                    "unit": null,
                    "valueType": "string",
                    "options": null,
                    "fieldType": "text",
                    "value": "5.000",
                    "isRemark": false
                }
            ],
            "loadInfo": {
                "material": "HWD",
                "valueOfGoods": 0,
                "standardMeasurement": {
                    "volume": null,
                    "packageMeasurement": null,
                    "weight": {
                        "actualDeliveredQuantity": null,
                        "density": null,
                        "netQuantity": 5,
                        "moisture": null,
                        "claimQuantity": null,
                        "unitOfMeasurment": "Metric Tonnes",
                        "standardQuantity": 5,
                        "actualLoadedQuantity": null,
                        "measurmentType": null,
                        "grossQuantity": 5,
                        "shortage": null,
                        "temperature": null,
                        "plannedLoadQuantity": 5,
                        "frieghtDeductableQuantity": null
                    },
                    "containers": null,
                    "trucks": null
                },
                "currency": null,
                "measurements": [
                    {
                        "actualDeliveredQuantity": null,
                        "density": null,
                        "netQuantity": 5,
                        "moisture": null,
                        "claimQuantity": null,
                        "unitOfMeasurment": "Metric Tonnes",
                        "standardQuantity": 5,
                        "actualLoadedQuantity": null,
                        "measurmentType": null,
                        "grossQuantity": 5,
                        "shortage": null,
                        "temperature": null,
                        "plannedLoadQuantity": null,
                        "frieghtDeductableQuantity": null
                    }
                ]
            },
            "customerPsnNo": null,
            "invoiceValue": "0.0",
            "updates": {
                "traceID": "5d6e0773-653e-4e53-92f6-0ec573300345",
                "resourceId": "ff221515-c064-4329-bc2a-85af73a28064",
                "updatedBy": "SYSTEM",
                "changes": null,
                "sourceOfInformation": null,
                "description": null,
                "forwardReasons": [
                    "ensure.lineitem.and.mapping"
                ],
                "userId": null,
                "uuid": "ca825bff-682f-49e8-a4e3-0a8da14f7460",
                "revision": 76,
                "time": 1731326985768,
                "forwardedFrom": null,
                "resourceType": "Consignment",
                "updateType": null
            },
            "uuid": "ff221515-c064-4329-bc2a-85af73a28064",
            "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
            "consigner": {
                "geoFence": null,
                "documents": null,
                "customFields": null,
                "isPortalEnabled": false,
                "type": "customer",
                "updates": null,
                "uuid": "ded7f941-a5c6-4aeb-b836-4591a22d10c2",
                "orgId": null,
                "firmType": null,
                "gstn": null,
                "voterId": null,
                "verificationTicketId": null,
                "companyCodes": null,
                "group": {
                    "name": "Consignor",
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
                "places": [
                    {
                        "hubId": null,
                        "boundary": null,
                        "address": null,
                        "accessibility": null,
                        "addedBy": null,
                        "center": {
                            "latitude": 23.197871636791923,
                            "longitude": 81.58799238066777
                        },
                        "suggestedRadius": 0,
                        "isOwned": null,
                        "centerCoordinates": [
                            81.58799238066777,
                            23.197871636791923
                        ],
                        "placeId": "ee5a623b-c714-4848-8589-229b35989d43",
                        "geoJsonBoundry": null,
                        "externalId": null,
                        "source": "GOOGLE",
                        "places": null,
                        "viewport": null,
                        "district": null,
                        "name": "Orient Paper,P.O. Amlai Paper Mills, Madhya Pradesh 484117",
                        "state": null,
                        "category": "Hub",
                        "subDistrict": null,
                        "controllingBranchId": null
                    }
                ],
                "route": null,
                "name": "ORIENT PAPER MILLS - Amlai",
                "location": null,
                "fretronId": null,
                "contacts": null,
                "status": "ACTIVE"
            },
            "lineItems": [
                {
                    "itemNumber": "900002_10",
                    "transportationServiceId": null,
                    "material": {
                        "unitOfMeasurement": "Metric Tonnes",
                        "measuredQuantity": null,
                        "partnerName": null,
                        "materialType": "Material",
                        "externalId": null,
                        "updates": {
                            "traceID": "00000000000000000000000000000000",
                            "resourceId": "f4eb94ba-8224-4bb4-98f2-28963c5360f3",
                            "updatedBy": "USER",
                            "changes": null,
                            "sourceOfInformation": null,
                            "description": "Added material HWD ",
                            "forwardReasons": [
                                "material.created.event"
                            ],
                            "userId": "a0a838f0-2758-4c0c-ae90-6e3338242bae",
                            "uuid": "93ce7ab8-b226-4210-bcab-eb512697f22b",
                            "revision": null,
                            "time": 1726057095615,
                            "forwardedFrom": null,
                            "resourceType": "Material",
                            "updateType": null
                        },
                        "taxCode": null,
                        "uuid": "f4eb94ba-8224-4bb4-98f2-28963c5360f3",
                        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                        "pricePerUnit": null,
                        "materialDescription": "TOWEL",
                        "division": null,
                        "controlCode": null,
                        "materialGroup": "KT/C-FOLD",
                        "materialGroupId": "d5edd84a-db3c-4ae1-a8c3-c52e064f171b",
                        "name": "HWD",
                        "measurementType": "weight",
                        "companyCodes": null,
                        "partnerId": null,
                        "linkedMaterialId": null
                    },
                    "valueOfGoods": null,
                    "customFields": [
                        {
                            "indexedValue": null,
                            "fieldKey": "Invoice Date",
                            "valueType": "string",
                            "fieldType": "text",
                            "value": "25.10.2024",
                            "definitionId": null
                        },
                        {
                            "indexedValue": null,
                            "fieldKey": "Gate Entry Number",
                            "valueType": "string",
                            "fieldType": "text",
                            "value": "60001102",
                            "definitionId": null
                        },
                        {
                            "indexedValue": null,
                            "fieldKey": "Reel Dia",
                            "valueType": "string",
                            "fieldType": "text",
                            "value": "0",
                            "definitionId": null
                        },
                        {
                            "indexedValue": null,
                            "fieldKey": "Sheet Size",
                            "valueType": "string",
                            "fieldType": "text",
                            "value": "89.00X00.00",
                            "definitionId": null
                        }
                    ],
                    "externalId": "900002_10",
                    "invoiceNo": "900002",
                    "customerMaterial": null,
                    "uuid": "bdb2d19a-1df0-4dc7-9cb7-d4aacc95c158"
                }
            ],
            "pssNo": null,
            "eWayBillNumber": null,
            "billingType": null,
            "podDocument": null,
            "invoiceNo": "MPS000T2",
            "deliveryDate": 1731135923554,
            "associatedShipments": [
                "4a8ac7ab-8674-4317-a081-f8dafe15e07c"
            ],
            "originalEdd": null,
            "consignee": {
                "geoFence": null,
                "documents": null,
                "customFields": [
                    {
                        "indexedValue": [
                            "State GST Code_9"
                        ],
                        "fieldKey": "State GST Code",
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
                        "value": "9",
                        "isRemark": false
                    },
                    {
                        "indexedValue": [
                            "Category_ShipTo"
                        ],
                        "fieldKey": "Category",
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
                        "value": "ShipTo",
                        "isRemark": false
                    }
                ],
                "isPortalEnabled": false,
                "type": "customer",
                "updates": {
                    "traceID": "0965e672-cd29-4b08-b8c6-050768254ab9",
                    "resourceId": "65a53fa3-8d98-4bca-a4fd-2d7f1157d9f2",
                    "updatedBy": "USER",
                    "changes": [
                        {
                            "lastValue": "KOLKATA,WEST BENGAL",
                            "fieldName": "Place",
                            "fieldType": "String",
                            "currentValue": "KOLKATA,WEST BENGAL"
                        }
                    ],
                    "sourceOfInformation": null,
                    "description": "updated place KOLKATA,WEST BENGAL",
                    "forwardReasons": [
                        "business.partner.update.event",
                        "business.partner.places.update"
                    ],
                    "userId": "botuser--4f52f041-dc5c-4d14-83f6-a04396d4efac",
                    "uuid": "ad394338-a764-4eaa-95a5-e6054f5c8646",
                    "revision": null,
                    "time": 1729862145254,
                    "forwardedFrom": null,
                    "resourceType": "Business-Partner",
                    "updateType": null
                },
                "uuid": "65a53fa3-8d98-4bca-a4fd-2d7f1157d9f2",
                "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "firmType": null,
                "gstn": "0000000000",
                "voterId": null,
                "verificationTicketId": null,
                "companyCodes": null,
                "group": {
                    "name": "Consignee",
                    "partnerType": "customer",
                    "uuid": "424ec4f4-289d-4179-ab85-2a46c7043333",
                    "orgId": "a9b21334-af4b-4e6c-87ae-859a2b1237be"
                },
                "address": "{\"pincode\":\"\",\"address\":\"KOLKATA, WEST BENGAL\",\"city\":\"\",\"state\":\"\"}",
                "verificationStatus": "unverified",
                "externalId": "005000001",
                "panNumber": null,
                "aadharNo": null,
                "parentId": null,
                "places": [
                    {
                        "hubId": null,
                        "boundary": null,
                        "address": "KOLKATA, WEST BENGAL",
                        "accessibility": null,
                        "addedBy": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                        "center": {
                            "latitude": 22.55501537222935,
                            "longitude": 88.35268535053918
                        },
                        "suggestedRadius": 1000,
                        "isOwned": null,
                        "centerCoordinates": [
                            88.35268535053918,
                            22.55501537222935
                        ],
                        "placeId": "33b58f7e-bc19-4157-a872-bbf49d0522cd",
                        "geoJsonBoundry": null,
                        "externalId": "585",
                        "source": "FRETRON",
                        "places": null,
                        "viewport": null,
                        "district": "KOLKATA",
                        "name": "KOLKATA,WEST BENGAL",
                        "state": "WEST BENGAL",
                        "category": "Unloading Point",
                        "subDistrict": "700001",
                        "controllingBranchId": null
                    }
                ],
                "route": null,
                "name": "SUNITA TRADING CO",
                "location": null,
                "fretronId": null,
                "contacts": [
                    {
                        "emails": [
                            "shivam.kumar@fretron.com"
                        ],
                        "address": null,
                        "mobileNumbers": [
                            "7807265948"
                        ],
                        "mobileNumber": null,
                        "name": "Pradeep",
                        "type": null
                    }
                ],
                "status": "ACTIVE"
            },
            "address": null,
            "edd": null,
            "salesOffice": null,
            "consignmentDate": 1729794600000,
            "externalId": "MPS000T2",
            "eWayBillExpiryDate": null,
            "activeShipment": null,
            "consignmentNo": "MPS000T2",
            "currentLocation": null,
            "billToParty": {
                "geoFence": null,
                "documents": null,
                "customFields": null,
                "isPortalEnabled": false,
                "type": "customer",
                "updates": null,
                "uuid": "65a53fa3-8d98-4bca-a4fd-2d7f1157d9f2",
                "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "firmType": null,
                "gstn": "0000000000",
                "voterId": null,
                "verificationTicketId": null,
                "companyCodes": null,
                "group": {
                    "name": "Consignee",
                    "partnerType": null,
                    "uuid": null,
                    "orgId": null
                },
                "address": "{\"address\":\"KOLKATA, WEST BENGAL\",\"state\":\"WEST BENGAL\",\"city\":\"KOLKATA\",\"pincode\":\"700001\"}",
                "verificationStatus": "unverified",
                "externalId": "005000001",
                "panNumber": null,
                "aadharNo": null,
                "parentId": null,
                "places": [
                    {
                        "hubId": null,
                        "boundary": null,
                        "address": "KOLKATA, WEST BENGAL",
                        "accessibility": null,
                        "addedBy": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                        "center": {
                            "latitude": 22.55501537222935,
                            "longitude": 88.35268535053918
                        },
                        "suggestedRadius": 1000,
                        "isOwned": null,
                        "centerCoordinates": [
                            88.35268535053918,
                            22.55501537222935
                        ],
                        "placeId": "d869525f-3400-4a4e-9329-b3900de7e82c",
                        "geoJsonBoundry": null,
                        "externalId": null,
                        "source": "FRETRON",
                        "places": null,
                        "viewport": null,
                        "district": "KOLKATA",
                        "name": "KOLKATA,WEST BENGAL",
                        "state": "WEST BENGAL",
                        "category": "Unloading Point",
                        "subDistrict": "700001",
                        "controllingBranchId": null
                    }
                ],
                "route": null,
                "name": "SUNITA TRADING CO",
                "location": null,
                "fretronId": null,
                "contacts": [
                    {
                        "emails": [
                            "sunitatrading2011@gmail.com"
                        ],
                        "address": null,
                        "mobileNumbers": [
                            "9748740501"
                        ],
                        "mobileNumber": null,
                        "name": "SUNITA",
                        "type": null
                    }
                ],
                "status": "ACTIVE"
            },
            "equipments": null,
            "orderMappings": [
                {
                    "quantity": {
                        "volume": null,
                        "packageMeasurement": null,
                        "weight": {
                            "actualDeliveredQuantity": null,
                            "density": null,
                            "netQuantity": 5,
                            "moisture": null,
                            "claimQuantity": null,
                            "unitOfMeasurment": "Metric Tonnes",
                            "standardQuantity": 5,
                            "actualLoadedQuantity": null,
                            "measurmentType": null,
                            "grossQuantity": 5,
                            "shortage": null,
                            "temperature": null,
                            "plannedLoadQuantity": 5,
                            "frieghtDeductableQuantity": null
                        },
                        "containers": null,
                        "trucks": null
                    },
                    "orderId": "cce580d8-cbf0-4607-bcd2-5e9fc1b5dd30",
                    "lineItemId": "72a89a55-3b34-44a9-8776-5805d1db8629",
                    "legType": "DirectLeg",
                    "consignmentId": "ff221515-c064-4329-bc2a-85af73a28064",
                    "originLegId": null,
                    "isFullyUtilized": null,
                    "consignmentLineItemId": "bdb2d19a-1df0-4dc7-9cb7-d4aacc95c158",
                    "source": "Order",
                    "containerId": null,
                    "uuid": "493f3982-13b2-4eb7-9e4a-c7a194b49149",
                    "fuMappings": [
                        {
                            "executionPlanId": null,
                            "legType": "DirectLeg",
                            "fuLineItemId": "cd9609a2-658b-483d-8264-ab9d48ef0d5f",
                            "shipmentId": null,
                            "legId": "DirectLeg#1.0",
                            "legStatus": "FINALIZED"
                        }
                    ]
                }
            ],
            "contractId": null,
            "workOrderNumber": null,
            "trackingStatus": "Delivered at KOLKATA,WEST BENGAL",
            "eWayBillRegistrationDate": null,
            "contractToParty": null,
            "invoiceStatus": null,
            "poNumber": null,
            "status": "Delivered"
        }
    ],
    "customContacts": null,
    "shipmentStages": [
        {
            "departureTime": 1729864260000,
            "gateInTime": null,
            "actualActivityStartTime": null,
            "actualActivityEndTime": null,
            "preActWtTime": null,
            "uuid": "bbd2ae6e-45fb-4b3d-984d-a26ac0ab6820",
            "consignmentDelivered": null,
            "resourceDropOff": null,
            "resourcePickup": null,
            "eta": null,
            "stageName": "ORIENT PAPER MILLS - Amlai, Orient Paper,P.O. Amlai Paper Mills, Madhya Pradesh 484117",
            "hub": {
                "hubId": null,
                "boundary": null,
                "address": null,
                "accessibility": null,
                "addedBy": null,
                "center": {
                    "latitude": 23.197871636791923,
                    "longitude": 81.58799238066777
                },
                "suggestedRadius": 0,
                "isOwned": null,
                "centerCoordinates": [
                    81.58799238066777,
                    23.197871636791923
                ],
                "placeId": "ee5a623b-c714-4848-8589-229b35989d43",
                "geoJsonBoundry": null,
                "externalId": null,
                "source": "GOOGLE",
                "places": null,
                "viewport": null,
                "district": null,
                "name": "Orient Paper,P.O. Amlai Paper Mills, Madhya Pradesh 484117",
                "state": null,
                "category": "Hub",
                "subDistrict": null,
                "controllingBranchId": null
            },
            "arrivalTime": 1729835783000,
            "expectedActivityStartTime": null,
            "secondaryStatus": null,
            "consignmentPickUps": [
                "ff221515-c064-4329-bc2a-85af73a28064",
                "b5569c48-8de5-41c4-85bb-46b7da5db3d1"
            ],
            "postActWtTime": null,
            "tripPoint": {
                "outOfTrackSince": null,
                "creationTime": null,
                "purpose": "Pickup",
                "plannedArrival": null,
                "currentGpsState": null,
                "updates": null,
                "uuid": "bbd2ae6e-45fb-4b3d-984d-a26ac0ab6820",
                "sequenceId": null,
                "isDisconnected": false,
                "isOutOfTrack": false,
                "routeDeviationMinimumDistanceConstraint": null,
                "eta": null,
                "routeId": null,
                "expectedActivityStartTime": null,
                "actualDeparture": 1729864260000,
                "vehicleId": null,
                "place": null,
                "isOverSpeed": false,
                "remainingDistance": null,
                "actualActivityStartTime": null,
                "forShipmentStages": [
                    "bbd2ae6e-45fb-4b3d-984d-a26ac0ab6820"
                ],
                "actualActivityEndTime": null,
                "actualArrival": 1729835783000,
                "purposedDistance": null,
                "plannedDeparture": null,
                "currentLocation": null,
                "isAutoCompleted": false,
                "coveredDistance": null,
                "hub": {
                    "hubId": null,
                    "boundary": null,
                    "address": null,
                    "accessibility": null,
                    "addedBy": null,
                    "center": {
                        "latitude": 23.197871636791923,
                        "longitude": 81.58799238066777
                    },
                    "suggestedRadius": 0,
                    "isOwned": null,
                    "centerCoordinates": [
                        81.58799238066777,
                        23.197871636791923
                    ],
                    "placeId": "ee5a623b-c714-4848-8589-229b35989d43",
                    "geoJsonBoundry": null,
                    "externalId": null,
                    "source": "GOOGLE",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Orient Paper,P.O. Amlai Paper Mills, Madhya Pradesh 484117",
                    "state": null,
                    "category": "Hub",
                    "subDistrict": null,
                    "controllingBranchId": null
                },
                "overSpeedSince": null,
                "imei": null,
                "assosiatedShipmentsId": [
                    "4a8ac7ab-8674-4317-a081-f8dafe15e07c"
                ],
                "status": "COMPLETED"
            },
            "place": null,
            "controllingBranchId": null,
            "gateOutTime": null,
            "status": "COMPLETED"
        },
        {
            "departureTime": 1731135923683,
            "gateInTime": null,
            "actualActivityStartTime": null,
            "actualActivityEndTime": null,
            "preActWtTime": null,
            "uuid": "2109ec6c-1daa-49d6-bff0-ca9c4cd0d3e5",
            "consignmentDelivered": [
                "ff221515-c064-4329-bc2a-85af73a28064",
                "b5569c48-8de5-41c4-85bb-46b7da5db3d1"
            ],
            "resourceDropOff": null,
            "resourcePickup": null,
            "eta": null,
            "stageName": "KOLKATA,WEST BENGAL",
            "hub": null,
            "arrivalTime": 1731135608185,
            "expectedActivityStartTime": null,
            "secondaryStatus": null,
            "consignmentPickUps": null,
            "postActWtTime": null,
            "tripPoint": {
                "outOfTrackSince": null,
                "creationTime": null,
                "purpose": "Delivery",
                "plannedArrival": null,
                "currentGpsState": null,
                "updates": null,
                "uuid": "2109ec6c-1daa-49d6-bff0-ca9c4cd0d3e5",
                "sequenceId": null,
                "isDisconnected": false,
                "isOutOfTrack": false,
                "routeDeviationMinimumDistanceConstraint": null,
                "eta": null,
                "routeId": null,
                "expectedActivityStartTime": null,
                "actualDeparture": null,
                "vehicleId": null,
                "place": {
                    "hubId": null,
                    "boundary": null,
                    "address": "KOLKATA, WEST BENGAL",
                    "accessibility": null,
                    "addedBy": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                    "center": {
                        "latitude": 22.55501537222935,
                        "longitude": 88.35268535053918
                    },
                    "suggestedRadius": 1000,
                    "isOwned": null,
                    "centerCoordinates": [
                        88.35268535053918,
                        22.55501537222935
                    ],
                    "placeId": "33b58f7e-bc19-4157-a872-bbf49d0522cd",
                    "geoJsonBoundry": null,
                    "externalId": "585",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": "KOLKATA",
                    "name": "KOLKATA,WEST BENGAL",
                    "state": "WEST BENGAL",
                    "category": "Unloading Point",
                    "subDistrict": "700001",
                    "controllingBranchId": null
                },
                "isOverSpeed": false,
                "remainingDistance": 0,
                "actualActivityStartTime": null,
                "forShipmentStages": [
                    "2109ec6c-1daa-49d6-bff0-ca9c4cd0d3e5"
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
                "imei": null,
                "assosiatedShipmentsId": [
                    "4a8ac7ab-8674-4317-a081-f8dafe15e07c"
                ],
                "status": "COMPLETED"
            },
            "place": {
                "hubId": null,
                "boundary": null,
                "address": "KOLKATA, WEST BENGAL",
                "accessibility": null,
                "addedBy": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "center": {
                    "latitude": 22.55501537222935,
                    "longitude": 88.35268535053918
                },
                "suggestedRadius": 1000,
                "isOwned": null,
                "centerCoordinates": [
                    88.35268535053918,
                    22.55501537222935
                ],
                "placeId": "33b58f7e-bc19-4157-a872-bbf49d0522cd",
                "geoJsonBoundry": null,
                "externalId": "585",
                "source": "FRETRON",
                "places": null,
                "viewport": null,
                "district": "KOLKATA",
                "name": "KOLKATA,WEST BENGAL",
                "state": "WEST BENGAL",
                "category": "Unloading Point",
                "subDistrict": "700001",
                "controllingBranchId": null
            },
            "controllingBranchId": null,
            "gateOutTime": null,
            "status": "COMPLETED"
        }
    ],
    "remarks": null,
    "syncUpExpiryTime": null,
    "shipmentStatus": "Completed",
    "minGuaranteeWeight": 20
}
// const shipmentCost = [
//     {
//         "amount": 1600,
//         "charge": {
//             "amount": 1600,
//             "name": "Unloading Detention"
//         },
//     },
//     {
//         "amount": 1600,
//         "charge": {
//             "amount": 1600,
//             "name": "Freight",
//             "rateUnit": "Fixed",
//         },
//         "uuid": "27ed7ab0-88c3-432d-9278-18fd28b748c8",
//         "lineItems": [
//             {
//                 "amount": 300,
//                 "charge": {
//                     "amount": 300,
//                     "name": "Freight"
//                 },
//                 "consignmentId": "cn1",
//             },
//             {
//                 "amount": 1300,
//                 "charge": {
//                     "amount": 1300,
//                     "name": "Freight"
//                 },
//                 "consignmentId": "cn2",
//             }
//         ]
//     }
// ]

// Function to extract material group quantities for each consignment

async function extractPerCnMaterialGroupWiseQuantity(shipment, freightCost) {
    let results = [];
    // Iterate through each consignment
    shipment.consignments?.forEach(consignment => {
        // Find the corresponding freight cost for this consignment
        let cnCost = freightCost.lineItems?.find(lineItem => consignment?.uuid === lineItem?.consignmentId)
        
        // Create a data object to store consignment details
        let consignmentData = { cnId: consignment?.uuid, cnCost: cnCost?.amount, totalWeight: 0, MaterialGroups: [] };
        let materialGroupData = {};
        // Process each line item in the consignment
        consignment.lineItems.forEach(lineItem => {
            // Extract material group and line item details
            let materialGroup = lineItem?.material?.materialGroup;
            let lineItemID = lineItem?.uuid;
            
            // Find corresponding order mapping for weight calculation
            let orderMapping = consignment?.orderMappings?.find(order => order.consignmentLineItemId === lineItemID);
            
            // Get net quantity, default to 0 if not found
            let netQuantity = orderMapping?.quantity?.weight?.netQuantity || 0;
            
            // Accumulate total weight for consignment
            consignmentData.totalWeight += netQuantity;
            
            // Initialize material group data if not exists
            if (!materialGroupData[materialGroup]) {
                materialGroupData[materialGroup] = {};
            }
            
            // Accumulate quantity for each material group
            materialGroupData[materialGroup] = {
                MaterialGroup: materialGroup,
                Qty: (materialGroupData[materialGroup].Qty || 0) + netQuantity
            }
        });
        
        // Transform material group data into an array of objects
        consignmentData.MaterialGroups = Object.entries(materialGroupData).map(([key, value]) => ({
            [key]: value
        }));
        
        results.push(consignmentData);
    });
    
    return results;
}

// Async function to retrieve shipment cost by shipment ID from API
async function getShCostByShId(shId) {
    try {
        // Prepare request options for API call
        let options = {
            method: 'GET',
            uri: `${FRT_PUB_BASE_URL}/shipment-cost/v1/costs?shipmentId=${shId}`,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        }
        
        // Make the API request
        let res = await rp(options)
        
        // Validate and return response
        if (res.data != null && res.status == 200) {
            return res.data
        } else {
            throw new Error(`Couldn't find Shipment Cost for Shipment ID: ${shId}`)
        }
    } catch (error) {
        throw error
    }
}

// Function to extract rate per metric ton fields from shipment custom fields
function getRatePerMtFields(shipment) {
    // Filter custom fields that end with 'ratePerMt'
    const ratePerMtFields = shipment.customFields?.filter(field => field.fieldKey.endsWith(RATE_PER_MT_SUFFIX));
    
    // Map filtered fields to key-value pairs
    const ratePerMtValues = ratePerMtFields.map(field => ({
        fieldKey: field.fieldKey,
        value: field.value
    }));

    return ratePerMtValues;
}

// Function to calculate cost allocation across material groups
async function calculateCost(cnWiseMaterialGroupWeight, ratePerMt, minGuaranteeWeight, freightCost) {
    // Calculate cost per consignment and material group
    let cnWiseMatWiseCost = await calculateCnWiseMatWiseCost(cnWiseMaterialGroupWeight, ratePerMt.length ? ratePerMt : null);
    
    // Merge consignment material costs
    let materialWiseCost = await mergeConsignmentMaterial(cnWiseMatWiseCost)
    
    // Calculate total weight across all material groups
    const totalWeight = materialWiseCost.reduce((total, group) => total + group.Qty, 0);
    
    // Different cost allocation strategies based on rate per metric ton
    if (ratePerMt.length != 0) {
        // Calculate total cost and extra cost distribution when specific rates are provided
        let totalCost = materialWiseCost.reduce((total, group) => total + group.totalMaterialCost, 0);
        let totalMatExtraCost = freightCost.amount - totalCost
        
        // Distribute extra cost proportionally
        materialWiseCost.forEach(group => {
            group.actualCost = group.totalMaterialCost
            group.extraCost = (totalMatExtraCost / totalCost) * group.actualCost
            group.totalMaterialCost = group.actualCost + group.extraCost
        });
    } else {
        // Cost allocation when no specific rate per metric ton is provided
        if (minGuaranteeWeight > totalWeight) {
            // Adjust cost based on minimum guarantee weight
            let actualCostRatio = totalWeight / minGuaranteeWeight;
            let actualMatCostPerMt = (actualCostRatio * freightCost.amount) / totalWeight
            
            materialWiseCost.forEach(group => {
                group.actualCost = group.Qty * actualMatCostPerMt;
                group.extraCost = group.totalMaterialCost - group.actualCost;
            });
        }
        else {
            // Distribute cost equally when total weight meets or exceeds minimum
            materialWiseCost.forEach(group => {
                group.extraCost = 0;
                group.actualCost = group.totalMaterialCost
            });
        }
    }
    return materialWiseCost
}

// Function to merge material group costs across consignments
async function mergeConsignmentMaterial(cnWiseMatWiseCost) {
    return Object.values(
        cnWiseMatWiseCost.reduce((mergedResult, consignment) => {
            consignment.MaterialGroups.forEach(group => {
                // Extract material group name and data
                const [materialGroupName, materialData] = Object.entries(group)[0];

                // Merge or create material group entry
                mergedResult[materialGroupName] = mergedResult[materialGroupName]
                    ? {
                        MaterialGroup: materialGroupName,
                        Qty: mergedResult[materialGroupName].Qty + materialData.Qty,
                        totalMaterialCost: mergedResult[materialGroupName].totalMaterialCost + (materialData.totalMaterialCost || 0)
                    }
                    : {
                        MaterialGroup: materialGroupName,
                        Qty: materialData.Qty,
                        totalMaterialCost: materialData.totalMaterialCost || 0
                    };
            });
            return mergedResult;
        }, {})
    );
}

// Function to calculate cost per consignment and material group
function calculateCnWiseMatWiseCost(cnWiseMaterialGroupWeight, ratePerMt) {
    return cnWiseMaterialGroupWeight.map(consignment => {
        // Calculate total weight for the consignment
        const totalWeight = consignment.MaterialGroups.reduce((sum, group) => {
            const [_, materialData] = Object.entries(group)[0];
            return sum + materialData.Qty;
        }, 0);

        // Calculate rate per metric ton for the consignment
        const ratePerMtPerConsignment = totalWeight > 0 ? consignment.cnCost / totalWeight : 0;
        
        // Update material groups with cost calculations
        const updatedMaterialGroups = consignment.MaterialGroups.map(group => {
            const [materialGroupName, materialData] = Object.entries(group)[0];

            if (ratePerMt && ratePerMt.length > 0) {
                // Calculate cost using specific rate per metric ton
                const rate = ratePerMt.find(rate => rate.fieldKey === materialGroupName)?.value || 0;
                const materialCost = materialData.Qty * rate;

                return {
                    [materialGroupName]: {
                        ...materialData,
                        totalMaterialCost: materialCost
                    }
                };
            } else {
                // Calculate cost using consignment-level rate per metric ton
                const materialCost = materialData.Qty * ratePerMtPerConsignment;

                return {
                    [materialGroupName]: {
                        ...materialData,
                        totalMaterialCost: materialCost
                    }
                };
            }
        });

        return {
            MaterialGroups: updatedMaterialGroups
        };
    });
}

// Main function to orchestrate the cost calculation process
async function main(shipment) {
    try {
        // Validate input
        if (!shipment) {
            throw new Error('Invalid input: shipment is missing');
        }
        
        // Find freight cost from shipment costs
        let shipmentCost = await getShCostByShId(shipment.uuid)

        // Validate input
        if (!shipmentCost) {
            throw new Error('Cant get shipmentCost');
        }

        let freightCost = shipmentCost.find(cost => cost.charge.name == FREIGHT_CHARGE_NAME)
        if (!freightCost) {
            throw new Error('Freight cost not found');
        }
        
        // Get minimum guarantee weight (default to 0 if not provided)
        //Assuming this field will be on the Top Level of Shipment
        let minGuaranteeWeight = shipment?.minGuaranteeWeight ?? 0;
        
        // Extract material group quantities per consignment
        let cnWiseMaterialGroupWeight = await extractPerCnMaterialGroupWiseQuantity(shipment, freightCost);
        
        // Get rates per metric ton from custom fields
        //Assuming there will be CustomFields with Suffix (ratePerMt)
        let ratePerMt = await getRatePerMtFields(shipment);
        
        // Calculate final cost per material group
        let costPerMaterial = await calculateCost(cnWiseMaterialGroupWeight, ratePerMt, minGuaranteeWeight, freightCost)
        
        // Log the results
        console.log(costPerMaterial)

    } catch (e) {
        // Handle and log any errors
        console.log(`Error: ${e.message}`)
    }
}

// Execute the main function with sample shipment and cost data
main(shipment)