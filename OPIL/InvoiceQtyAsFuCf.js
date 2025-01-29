const rp = require('request-promise');
const shipmentIndex = "shipments_v2"
const fuIndex = "freightunits_v1"
const TOKEN = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzgxMzMzOTMsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiI3ZDczMDRmMC01NjM4LTQ3MGItYmU4OC02ZmE2ZjliZTI0YjQiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.Oia20r_SdTAZ2wtEH1oPxDNv59c7WqX2LpwYwAoFRDo"
const createEvent = "consignment.created.event"
const deleteEvent = "consignment.deleted.event"
const cn = {
    "salesOrderId": null,
    "fuLineItemIds": null,
    "pod": {
        "receivedBy": null,
        "unloadingFinishDate": 1736841558400,
        "documents": [
            {
                "resourceId": "7569c438-a420-461e-9b03-7ae7d75d777b",
                "customFields": null,
                "downloadUrl": "https://storage.googleapis.com/fretron-document-bucket/uploads/c24f7c91-30ba-4533-b86d-9eca644e6605/23a51d96-9a0e-4970-bf3a-3d2a68d9e000@E-pod-summary.jpg",
                "updates": {
                    "traceID": "4328717c-4221-4c5e-8418-189e5cc2d79a",
                    "resourceId": "23a51d96-9a0e-4970-bf3a-3d2a68d9e000",
                    "updatedBy": "USER",
                    "changes": null,
                    "sourceOfInformation": "created",
                    "description": "document created",
                    "forwardReasons": [
                        "document.added"
                    ],
                    "userId": "a42e539c-88f3-42cf-a1e7-d13e0b60833d",
                    "uuid": "d7e0a200-0eaa-44e4-bdd2-d51e7de0e094",
                    "revision": null,
                    "time": 1736841478390,
                    "forwardedFrom": null,
                    "resourceType": "Document",
                    "updateType": null
                },
                "uuid": "23a51d96-9a0e-4970-bf3a-3d2a68d9e000",
                "orgId": "c24f7c91-30ba-4533-b86d-9eca644e6605",
                "docPath": "/uploads/c24f7c91-30ba-4533-b86d-9eca644e6605/23a51d96-9a0e-4970-bf3a-3d2a68d9e000@E-pod-summary.jpg",
                "createdAt": 1736841478390,
                "isExpirable": false,
                "previewString": null,
                "createdBy": "a42e539c-88f3-42cf-a1e7-d13e0b60833d",
                "name": "E-pod-summary.jpg",
                "expireDate": null,
                "resourceType": "SHIPMENT_POD"
            }
        ],
        "trackingDetail": null,
        "consignmentId": "a43c44cf-8a7b-43e4-8511-9afe4598a918",
        "receiveDate": null,
        "externalId": null,
        "submissionDate": 1736841558676,
        "expectedSubmissionDate": null,
        "feedingStatus": "CREATED",
        "updates": {
            "traceID": "281a3515-6c77-4754-ad23-3536664d0268",
            "resourceId": "7569c438-a420-461e-9b03-7ae7d75d777b",
            "updatedBy": "SYSTEM",
            "changes": null,
            "sourceOfInformation": null,
            "description": "started pod feeding 1:29 PM | 14-01-25",
            "forwardReasons": [
                "pod.feeding.marked.started"
            ],
            "userId": null,
            "uuid": "8675aba2-b587-4b75-a9fe-ef342a304b27",
            "revision": 1,
            "time": 1736841577461,
            "forwardedFrom": null,
            "resourceType": "POD",
            "updateType": null
        },
        "type": "POD",
        "issues": [
            ""
        ],
        "uuid": "7569c438-a420-461e-9b03-7ae7d75d777b",
        "customField": null,
        "deliveryItems": [
            {
                "estimatedShortageAmount": null,
                "material": null,
                "documents": null,
                "orderMapping": {
                    "quantity": {
                        "volume": {
                            "actualDeliveredQuantity": null,
                            "density": null,
                            "netQuantity": 1.45,
                            "moisture": null,
                            "claimQuantity": null,
                            "unitOfMeasurment": "Cubic meter",
                            "standardQuantity": 1.45,
                            "actualLoadedQuantity": null,
                            "measurmentType": "Volume",
                            "grossQuantity": 1.45,
                            "shortage": null,
                            "temperature": null,
                            "plannedLoadQuantity": 1.45,
                            "frieghtDeductableQuantity": null
                        },
                        "packageMeasurement": null,
                        "weight": {
                            "actualDeliveredQuantity": null,
                            "density": null,
                            "netQuantity": 1,
                            "moisture": null,
                            "claimQuantity": null,
                            "unitOfMeasurment": "Metric Tonnes",
                            "standardQuantity": 1,
                            "actualLoadedQuantity": null,
                            "measurmentType": "Weight",
                            "grossQuantity": 1,
                            "shortage": null,
                            "temperature": null,
                            "plannedLoadQuantity": 1,
                            "frieghtDeductableQuantity": null
                        },
                        "containers": null,
                        "trucks": null
                    },
                    "orderId": "e5b8ac95-ffb5-4dd7-b22a-c3fe4f7ba174",
                    "lineItemId": "69bf6498-7819-4c74-b1c3-aa0738a38926",
                    "legType": "DirectLeg",
                    "consignmentId": "a43c44cf-8a7b-43e4-8511-9afe4598a918",
                    "originLegId": null,
                    "isFullyUtilized": null,
                    "consignmentLineItemId": "94e3b953-18d5-47fb-bafc-11f7afc2401f",
                    "source": "Order",
                    "containerId": null,
                    "uuid": "3218de8d-d402-4d89-a120-bb09ae52993f",
                    "fuMappings": [
                        {
                            "executionPlanId": null,
                            "legType": "DirectLeg",
                            "fuLineItemId": "80661fb3-f930-475e-b042-9f9fc6525574",
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
        "unloadingStartDate": 1736841558400,
        "vehicleReleaseDate": null,
        "shipmentId": null,
        "reportingDate": 1736841558400,
        "submissionPlace": null,
        "remarks": "",
        "status": "SUBMITTED"
    },
    "creationTime": 1734602093892,
    "customFields": [
        {
            "indexedValue": [
                "LR Number_LR167899"
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
            "value": "LR167899",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice No's_9000001510"
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
            "value": "9000001510",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Gate Entry Number_6000001125"
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
            "value": "6000001125",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice 9000001510 Date Time_15.11.2024"
            ],
            "fieldKey": "Invoice 9000001510 Date Time",
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
            "value": "15.11.2024",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice 9000001510 Eway Bill Exp Number_swrd"
            ],
            "fieldKey": "Invoice 9000001510 Eway Bill Exp Number",
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
            "value": "swrd",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Invoice 9000001510 Eway Bill Exp Date_15.11.2024"
            ],
            "fieldKey": "Invoice 9000001510 Eway Bill Exp Date",
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
            "value": "15.11.2024",
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
                "Pod Received Qty_1.000"
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
            "value": "1.000",
            "isRemark": false
        }
    ],
    "loadInfo": {
        "material": "OPR",
        "valueOfGoods": 0,
        "standardMeasurement": {
            "volume": {
                "actualDeliveredQuantity": null,
                "density": null,
                "netQuantity": 1.45,
                "moisture": null,
                "claimQuantity": null,
                "unitOfMeasurment": "Cubic meter",
                "standardQuantity": 1.45,
                "actualLoadedQuantity": null,
                "measurmentType": "Volume",
                "grossQuantity": 1.45,
                "shortage": null,
                "temperature": null,
                "plannedLoadQuantity": 1.45,
                "frieghtDeductableQuantity": null
            },
            "packageMeasurement": null,
            "weight": {
                "actualDeliveredQuantity": null,
                "density": null,
                "netQuantity": 1,
                "moisture": null,
                "claimQuantity": null,
                "unitOfMeasurment": "Metric Tonnes",
                "standardQuantity": 1,
                "actualLoadedQuantity": null,
                "measurmentType": "Weight",
                "grossQuantity": 1,
                "shortage": null,
                "temperature": null,
                "plannedLoadQuantity": 1,
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
                "netQuantity": 1,
                "moisture": null,
                "claimQuantity": null,
                "unitOfMeasurment": "Metric Tonnes",
                "standardQuantity": 1,
                "actualLoadedQuantity": null,
                "measurmentType": "Weight",
                "grossQuantity": 1,
                "shortage": null,
                "temperature": null,
                "plannedLoadQuantity": null,
                "frieghtDeductableQuantity": null
            },
            {
                "actualDeliveredQuantity": null,
                "density": null,
                "netQuantity": 1.45,
                "moisture": null,
                "claimQuantity": null,
                "unitOfMeasurment": "Cubic meter",
                "standardQuantity": 1.45,
                "actualLoadedQuantity": null,
                "measurmentType": "Volume",
                "grossQuantity": 1.45,
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
        "traceID": "ad89412e-9cab-4e95-a510-2ff38f132722",
        "resourceId": "a43c44cf-8a7b-43e4-8511-9afe4598a918",
        "updatedBy": "SYSTEM",
        "changes": null,
        "sourceOfInformation": null,
        "description": null,
        "forwardReasons": [
            "ensure.lineitem.and.mapping"
        ],
        "userId": null,
        "uuid": "9af89f0b-06b4-4807-8167-b922886d3144",
        "revision": 26,
        "time": 1738144825949,
        "forwardedFrom": null,
        "resourceType": "Consignment",
        "updateType": null
    },
    "uuid": "a43c44cf-8a7b-43e4-8511-9afe4598a918",
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
            "itemNumber": "9000001510_10",
            "transportationServiceId": null,
            "material": {
                "unitOfMeasurement": "Metric Tonnes",
                "measuredQuantity": null,
                "partnerName": null,
                "materialType": "Material",
                "externalId": "1OP057L_OPR",
                "updates": null,
                "taxCode": null,
                "uuid": "1e21f8a6-2ae1-420b-8ef0-3a42e20e03e7",
                "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "pricePerUnit": null,
                "materialDescription": "LB ORIENT PLATINUM  (REEL)",
                "division": "1.45",
                "controlCode": "057",
                "materialGroup": "WPP",
                "materialGroupId": "f931ad2a-cb3f-4b2f-a40e-b960335dd985",
                "name": "OPR",
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
                    "value": "15.11.2024",
                    "definitionId": null
                },
                {
                    "indexedValue": null,
                    "fieldKey": "Gate Entry Number",
                    "valueType": "string",
                    "fieldType": "text",
                    "value": "6000001125",
                    "definitionId": null
                },
                {
                    "indexedValue": null,
                    "fieldKey": "Reel Dia",
                    "valueType": "string",
                    "fieldType": "text",
                    "value": "98CM",
                    "definitionId": null
                },
                {
                    "indexedValue": null,
                    "fieldKey": "Sheet Size",
                    "valueType": "string",
                    "fieldType": "text",
                    "value": "58.00X00.00",
                    "definitionId": null
                }
            ],
            "externalId": "9000001510_10",
            "invoiceNo": "9000001510",
            "customerMaterial": null,
            "uuid": "94e3b953-18d5-47fb-bafc-11f7afc2401f"
        }
    ],
    "pssNo": null,
    "eWayBillNumber": null,
    "billingType": null,
    "podDocument": null,
    "invoiceNo": "LR167899",
    "deliveryDate": null,
    "associatedShipments": [
        "92b4498d-f413-4cd0-9ef3-ab6ae4255995"
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
            "traceID": null,
            "resourceId": "1b35685e-5e75-4bb8-86ab-dc639266502e",
            "updatedBy": "SYSTEM",
            "changes": null,
            "sourceOfInformation": null,
            "description": "update place",
            "forwardReasons": [
                "place update"
            ],
            "userId": null,
            "uuid": null,
            "revision": null,
            "time": null,
            "forwardedFrom": null,
            "resourceType": null,
            "updateType": null
        },
        "uuid": "1b35685e-5e75-4bb8-86ab-dc639266502e",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "firmType": null,
        "gstn": "09AACCR1635F1ZK",
        "voterId": null,
        "verificationTicketId": null,
        "companyCodes": null,
        "group": {
            "name": "Consignee",
            "partnerType": "customer",
            "uuid": "424ec4f4-289d-4179-ab85-2a46c7043333",
            "orgId": "a9b21334-af4b-4e6c-87ae-859a2b1237be"
        },
        "address": "{\"pincode\":\"\",\"address\":\"AMINABAD,LUCKNOW,226018,09,IN\",\"city\":\"\",\"state\":\"\"}",
        "verificationStatus": "unverified",
        "externalId": "5000027",
        "panNumber": null,
        "aadharNo": null,
        "parentId": null,
        "places": [
            {
                "hubId": null,
                "boundary": null,
                "address": "UPPER BAZAR,RANCHI,834001,20,IN",
                "accessibility": null,
                "addedBy": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "center": {
                    "latitude": 23.374395033050163,
                    "longitude": 85.33934938973789
                },
                "suggestedRadius": 1000,
                "isOwned": null,
                "centerCoordinates": [
                    85.33934938973789,
                    23.374395033050163
                ],
                "placeId": "21e3c00c-ab84-4550-8c67-723434924f8f",
                "geoJsonBoundry": null,
                "externalId": "656",
                "source": "FRETRON",
                "places": null,
                "viewport": null,
                "district": "AHMEDABAD",
                "name": "AHMEDABAD,JHARKHAND",
                "state": "JHARKHAND",
                "category": "Unloading Point",
                "subDistrict": "226018",
                "controllingBranchId": null
            }
        ],
        "route": null,
        "name": "SAARTHAK VANIJYA INDIA PVT. LTD. .",
        "location": null,
        "fretronId": null,
        "contacts": [
            {
                "emails": [],
                "address": null,
                "mobileNumbers": [
                    "9082503198"
                ],
                "mobileNumber": null,
                "name": "Anujit",
                "type": null
            }
        ],
        "status": "ACTIVE"
    },
    "address": null,
    "edd": null,
    "salesOffice": null,
    "consignmentDate": 1731609000000,
    "externalId": "LR167899",
    "eWayBillExpiryDate": null,
    "activeShipment": "92b4498d-f413-4cd0-9ef3-ab6ae4255995",
    "consignmentNo": "LR167899",
    "currentLocation": null,
    "billToParty": {
        "geoFence": null,
        "documents": null,
        "customFields": null,
        "isPortalEnabled": false,
        "type": "customer",
        "updates": null,
        "uuid": "1b35685e-5e75-4bb8-86ab-dc639266502e",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "firmType": null,
        "gstn": "09AACCR1635F1ZK",
        "voterId": null,
        "verificationTicketId": null,
        "companyCodes": null,
        "group": {
            "name": "Consignee",
            "partnerType": null,
            "uuid": null,
            "orgId": null
        },
        "address": "{\"pincode\":\"\",\"address\":\"AMINABAD,LUCKNOW,226018,09,IN\",\"city\":\"\",\"state\":\"\"}",
        "verificationStatus": "unverified",
        "externalId": "5000027",
        "panNumber": null,
        "aadharNo": null,
        "parentId": null,
        "places": [
            {
                "hubId": null,
                "boundary": null,
                "address": "UPPER BAZAR,RANCHI,834001,20,IN",
                "accessibility": null,
                "addedBy": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
                "center": {
                    "latitude": 23.374395033050163,
                    "longitude": 85.33934938973789
                },
                "suggestedRadius": 1000,
                "isOwned": null,
                "centerCoordinates": [
                    85.33934938973789,
                    23.374395033050163
                ],
                "placeId": "21e3c00c-ab84-4550-8c67-723434924f8f",
                "geoJsonBoundry": null,
                "externalId": "656",
                "source": "FRETRON",
                "places": null,
                "viewport": null,
                "district": "AHMEDABAD",
                "name": "AHMEDABAD,JHARKHAND",
                "state": "JHARKHAND",
                "category": "Unloading Point",
                "subDistrict": "226018",
                "controllingBranchId": null
            }
        ],
        "route": null,
        "name": "SAARTHAK VANIJYA INDIA PVT. LTD. .",
        "location": null,
        "fretronId": null,
        "contacts": [
            {
                "emails": [],
                "address": null,
                "mobileNumbers": [
                    "9082503198"
                ],
                "mobileNumber": null,
                "name": "Anujit",
                "type": null
            }
        ],
        "status": "ACTIVE"
    },
    "equipments": null,
    "orderMappings": [
        {
            "quantity": {
                "volume": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 1.45,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Cubic meter",
                    "standardQuantity": 1.45,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Volume",
                    "grossQuantity": 1.45,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": 1.45,
                    "frieghtDeductableQuantity": null
                },
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 1,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 1,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 1,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": 1,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "e5b8ac95-ffb5-4dd7-b22a-c3fe4f7ba174",
            "lineItemId": "69bf6498-7819-4c74-b1c3-aa0738a38926",
            "legType": "DirectLeg",
            "consignmentId": "a43c44cf-8a7b-43e4-8511-9afe4598a918",
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": "94e3b953-18d5-47fb-bafc-11f7afc2401f",
            "source": "Order",
            "containerId": null,
            "uuid": "3218de8d-d402-4d89-a120-bb09ae52993f",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "80661fb3-f930-475e-b042-9f9fc6525574",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "FINALIZED"
                }
            ]
        }
    ],
    "contractId": null,
    "workOrderNumber": null,
    "trackingStatus": "In Transit to AHMEDABAD,JHARKHAND",
    "eWayBillRegistrationDate": null,
    "contractToParty": null,
    "invoiceStatus": null,
    "poNumber": null,
    "status": "In Transit"
}

const orgId = cn.orgId

function getCfObj(key, value, valueType = "string", fieldType = "text") {
    return {
        fieldKey: key,
        valueType: valueType,
        fieldType: fieldType,
        value: value,
    };
}

const getFuQuery = (freightUnitLineItemId) => {
    return {
        "_source": ["lineItems.salesOrderMappings.orderId", "lineItems.salesOrderMappings.lineItemId", "customFields", "uuid"],
        "size": 10,
        "query": {
            "bool": {
                "must": [
                    {
                        "term": {
                            "orgId.keyword": orgId

                        }
                    },
                    {
                        "term": {
                            "lineItems.uuid.keyword": freightUnitLineItemId

                        }
                    }
                ],
                "must_not": [
                    {
                        "term": {
                            "type.keyword": "Deleted"
                        }
                    }
                ]
            }
        }
    }
}

const getShQuery = (shExtNum) => {
    return {
        "_source": ["shipmentNumber", "uuid", "freightUnitLineItemId"],
        "size": 1,
        "query": {
            "bool": {
                "must": [
                    {
                        "term": {
                            "orgId.keyword": orgId
                        }
                    },
                    {
                        "term": {
                            "externalShipmentId": shExtNum
                        }
                    }
                ],
                "must_not": [
                    {
                        "term": {
                            "shipmentStatus.keyword": "DELETED"
                        }
                    }
                ]
            }
        }
    }
}

async function updateCfToDispatch(cf, uuid) {
    try {
        let options = {
            uri: `https://apis.fretron.com/order-manager-v2/freight-units/v1/custom-fields/?uuid=${uuid}`,
            method: "PUT",
            headers: {
                "Authorization": TOKEN
            },
            body: cf,
            json: true
        }
        let res = await rp(options)
        if (res.status == 200) {
            console.log("Custom Field Added")
            return res.data.customFields
        } else {
            throw new Error(res.error)
        }
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

async function getDataFromElastic(index, query) {
    if (!index || !query) {
        console.log("Invalid parameters: index or query is missing");
        return null;
    }

    try {
        let url = `https://apis.fretron.com/shipment-view/proxy/to/elastic`
        let options = {
            method: "POST",
            uri: url,
            body: {
                index: index,
                query: query,
            },
            json: true
        }
        let res = await rp(options)
        if (res?.hits?.hits?.length === 0) {
            throw new Error("No data found in elastic search response");
        }
        return res.hits.hits.map(hit => hit._source)
    } catch (err) {
        throw new Error(`Error in getting Data From Elastic: ${err.message}`)
    }
}

async function main(consignment) {
    let event = consignment.updates.forwardReasons[0]
    let cfsToUpdate = []
    let shExternalNumber = consignment.customFields.find(cf => cf.fieldKey === "Gate Entry Number").value
    let query = getShQuery(shExternalNumber)
    let shData = await getDataFromElastic(shipmentIndex, query)
    let freightUnitLineItemId = shData[0].freightUnitLineItemId
    let fuQuery = getFuQuery(freightUnitLineItemId)
    let fuData = await getDataFromElastic(fuIndex, fuQuery)
    let existingCf = fuData[0].customFields.find(cf => cf.fieldKey === "Mapping Info")
    if (existingCf) {
        existingCf.value = JSON.parse(existingCf.value)
    } else {
        if (event === createEvent) {
            existingCf = getCfObj("Mapping Info", null)
            existingCf.value = {}
        } else {
            console.log("No Mapping Info custom field found")
            return null
        }
    }
    for (let mapping of fuData[0].lineItems[0].salesOrderMappings) {
        let cfKey = `${mapping.orderId}_${mapping.lineItemId}_SAHIL3`
        if (event === createEvent) {
            if (existingCf.value[cfKey]) {
                existingCf.value[cfKey].invoicedQty = cn.orderMappings[0].quantity.weight.netQuantity
            } else {
                let newObject = {
                    [cfKey]: {
                        invoicedQty: cn.orderMappings[0].quantity.weight.netQuantity
                    }
                }
                existingCf.value = { ...existingCf.value, ...newObject }
            }
        } else {
            if (existingCf.value[cfKey]) {
                existingCf.value[cfKey].invoicedQty = 0
            }
        }
    }
    existingCf.value = JSON.stringify(existingCf.value)
    cfsToUpdate.push(existingCf)
    if (cfsToUpdate.length > 0) {
        let res = await updateCfToDispatch(cfsToUpdate, fuData[0].uuid)
        console.log(res)
    }
}

main(cn, deleteEvent)