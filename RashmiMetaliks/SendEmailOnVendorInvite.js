//Written by Sahil - 6 Feb 2025
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIwMjA5NzQsInVzZXJJZCI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm9yZ0lkIjoiMjA4YWZkYWQtZGVhYi00Yzc2LThkNDktMzBhNzBmNDIwZjM1IiwibmFtZSI6IkJvdCB0b2tlbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.g5BbII_VTjjjucZL-VhW5gznhBLVdxa5dqcStjFCQM0";
const ORGID = "208afdad-deab-4c76-8d49-30a70f420f35";
const rp = require("request-promise");
const FRT_PUB_BASE_URL = "https://apis.fretron.com";
let auction = {
    "orderId": "TEST_AUC_05",
    "isShowTopRankToOthers": null,
    "uuid": "192d0d7b-d30a-480b-a596-36769bde0253",
    "purchaseEnquiries": null,
    "branch": null,
    "issues": null,
    "allowedVehicleTypes": [
        "9MT"
    ],
    "alternateOrigins": [],
    "totalQuantity": 90,
    "placedStdQuantity": {
        "volume": null,
        "packageMeasurement": null,
        "weight": {
            "actualDeliveredQuantity": null,
            "density": null,
            "netQuantity": 63,
            "moisture": null,
            "claimQuantity": 0,
            "unitOfMeasurment": "Metric Tonnes",
            "standardQuantity": 63,
            "actualLoadedQuantity": null,
            "measurmentType": "Weight",
            "grossQuantity": 63,
            "shortage": null,
            "temperature": null,
            "plannedLoadQuantity": null,
            "frieghtDeductableQuantity": 0
        },
        "containers": null,
        "trucks": null
    },
    "price": 1,
    "enquiries": null,
    "legType": "DirectLeg",
    "bidToleranceAmount": 0,
    "customerName": "Ghumarwin TRANSPORT",
    "fuMappings": [
        {
            "lineItemId": "dad0cdc2-e8b9-4395-958e-30e3ac4f7d70",
            "uuid": "0c0ef893-c422-4ca8-806a-11b73c4fe88d"
        },
        {
            "lineItemId": "62fe6e28-be41-4bd9-9eae-80360e6c71b7",
            "uuid": "2f9348e9-52e9-48a5-827a-2fa278b7f74a"
        },
        {
            "lineItemId": "794195e3-be1b-4919-8a47-ffc0b64b778f",
            "uuid": "3952b0a8-3caf-4f70-92ed-5f9e38f5948e"
        },
        {
            "lineItemId": "a36611c4-6196-49fc-b180-202f016598fe",
            "uuid": "51b70aa5-a00b-476f-8416-6269ffaabddb"
        },
        {
            "lineItemId": "4d6e6df3-23f0-4916-b3c0-aa22d0477f86",
            "uuid": "5c0f6fca-8881-46e4-99e8-a444d1095df7"
        },
        {
            "lineItemId": "2fc6f384-c5bd-4d10-834f-24f9e58d0263",
            "uuid": "6c2e12c7-db53-4893-9b14-3c1a0bbcfe28"
        },
        {
            "lineItemId": "69d1e8d3-bb3d-4d1b-bbfe-14d952666830",
            "uuid": "91e53562-1d81-45f4-a4f7-1f339420606d"
        },
        {
            "lineItemId": "eb77f1fe-861b-4b27-8aff-f88af17451f6",
            "uuid": "abbe6e8e-25e0-442a-a8e7-019c87ca97d5"
        },
        {
            "lineItemId": "1ec23955-571b-407b-9df2-5454eaed087d",
            "uuid": "c11f469a-9396-4e36-b174-4c5c7802cc4f"
        },
        {
            "lineItemId": "ea0963e7-4420-4f40-8bc1-258b9171c70d",
            "uuid": "fecb968e-fb91-4ace-9f93-588e3b7c8856"
        }
    ],
    "allowedTransporters": [
        "f49caec4-0c86-45d7-b89e-be49fd2c4418",
        "c8dfddcb-2e1c-46b0-b5da-fd3d490ff053",
        "78e660c9-3b85-45da-89fe-1bdf413bf2f8",
        "39fcf617-4d49-47f3-974a-a5121ffb97cc",
        "e8a3cd44-ba2c-4bf6-880b-83d9b238fcdd"
    ],
    "route": null,
    "numberOfVehicles": 10,
    "bids": [
        {
            "businessPartnerId": "f49caec4-0c86-45d7-b89e-be49fd2c4418",
            "amount": 11000,
            "partnerName": "DEBOJIT SARKAR",
            "partnerExternalId": null,
            "source": "Auction",
            "uuid": "2477e3f2-7cae-4ce3-913f-17c309019c9c",
            "bidUpdateCount": 1,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 3,
            "rank": 3,
            "time": 1739173091956,
            "vendorExecutive": null,
            "contacts": [],
            "vehicleType": "9MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "c8dfddcb-2e1c-46b0-b5da-fd3d490ff053",
            "amount": 9000,
            "partnerName": "KAUSHAL ENTERPRISES",
            "partnerExternalId": null,
            "source": "Auction",
            "uuid": "5796edf1-acb6-4b44-bfeb-3027f155715b",
            "bidUpdateCount": 2,
            "purchaseOrderId": "27f5ee31-224a-4b53-abe4-a6a2272f6b4d",
            "termAcceptanceStatus": null,
            "numberOfVehicles": 7,
            "rank": 1,
            "time": 1739173976333,
            "vendorExecutive": null,
            "contacts": [],
            "vehicleType": "9MT",
            "status": "ACCEPTED"
        },
        {
            "businessPartnerId": "78e660c9-3b85-45da-89fe-1bdf413bf2f8",
            "amount": 11000,
            "partnerName": "SHIVKRUPA TRANSPORT CO.",
            "partnerExternalId": null,
            "source": "Auction",
            "uuid": "4a01e64c-379a-46dc-a4b2-a2d0986b9683",
            "bidUpdateCount": 2,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 6,
            "rank": 4,
            "time": 1739175045782,
            "vendorExecutive": null,
            "contacts": [],
            "vehicleType": "9MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "39fcf617-4d49-47f3-974a-a5121ffb97cc",
            "amount": 10500,
            "partnerName": "INLAND WORLD LOGISTICS (P)",
            "partnerExternalId": null,
            "source": "Auction",
            "uuid": "5bb2c794-7355-4c8a-b87b-8f649ea9efe5",
            "bidUpdateCount": 2,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 1,
            "rank": 2,
            "time": 1739175107804,
            "vendorExecutive": null,
            "contacts": [],
            "vehicleType": "9MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "e8a3cd44-ba2c-4bf6-880b-83d9b238fcdd",
            "amount": null,
            "partnerName": "MEENAKSHI ROADLINES",
            "partnerExternalId": null,
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [],
            "vehicleType": "9MT",
            "status": null
        }
    ],
    "tnCs": [
        {
            "description": "Any ",
            "type": "Terms 1",
            "uuid": null
        },
        {
            "description": "Any",
            "type": "Terms 2",
            "uuid": null
        },
        {
            "description": "Any",
            "type": "Terms 3",
            "uuid": null
        },
        {
            "description": "Any ",
            "type": "Terms 4",
            "uuid": null
        },
        {
            "description": "Any",
            "type": "Terms 5",
            "uuid": null
        },
        {
            "description": "Any",
            "type": "Terms 6",
            "uuid": null
        },
        {
            "description": "Any ",
            "type": "Terms 7",
            "uuid": null
        },
        {
            "description": "Any",
            "type": "Terms 8",
            "uuid": null
        },
        {
            "description": "Any",
            "type": "Terms 9",
            "uuid": null
        },
        {
            "description": "Any ",
            "type": "Terms 10",
            "uuid": null
        },
        {
            "description": "Any",
            "type": "Terms 11",
            "uuid": null
        },
        {
            "description": "Any",
            "type": "Terms 12",
            "uuid": null
        }
    ],
    "bidToleranceMethod": "Manual",
    "status": "OPEN",
    "salesOrderMappings": [
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "f44b717b-dff6-4337-a0fe-02acecdb4454",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "dad0cdc2-e8b9-4395-958e-30e3ac4f7d70",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "9fe74115-9661-464a-861c-46895c07878d",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "62fe6e28-be41-4bd9-9eae-80360e6c71b7",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "80efbdeb-0835-4dd2-abaa-6ed1bb57ba1e",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "794195e3-be1b-4919-8a47-ffc0b64b778f",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "82df19fb-fa18-4889-bb4a-4e265fd9808e",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "a36611c4-6196-49fc-b180-202f016598fe",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "bb5bfa4e-34cc-4fc6-8aba-748e95690fa2",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "4d6e6df3-23f0-4916-b3c0-aa22d0477f86",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "2ce203b4-a773-456e-a75a-c0df649c5687",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "2fc6f384-c5bd-4d10-834f-24f9e58d0263",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "c6a5a220-4368-4106-b0e7-545341e52b34",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "69d1e8d3-bb3d-4d1b-bbfe-14d952666830",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "8ffff399-0202-48b6-8519-783b1c510b75",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "eb77f1fe-861b-4b27-8aff-f88af17451f6",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "17af6841-ed01-48fb-ba80-9dd5d17d8420",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "1ec23955-571b-407b-9df2-5454eaed087d",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        },
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 9,
                    "moisture": null,
                    "claimQuantity": 0,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 9,
                    "actualLoadedQuantity": null,
                    "measurmentType": "Weight",
                    "grossQuantity": 9,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": 0
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "6b9c1e3e-b59c-4638-8aba-9107325ea3b6",
            "lineItemId": "cea2ae5d-56b3-407a-b731-8df496a062f3",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "74270237-adc9-442f-9762-636cb6dccbed",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "ea0963e7-4420-4f40-8bc1-258b9171c70d",
                    "shipmentId": null,
                    "legId": "DirectLeg#1.0",
                    "legStatus": "PENDING"
                }
            ]
        }
    ],
    "optimisationBasis": "weight",
    "customFields": [
        {
            "indexedValue": [
                "Maximum Bid Count_15"
            ],
            "fieldKey": "Maximum Bid Count",
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
            "value": "15",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "9MT_f49caec4-0c86-45d7-b89e-be49fd2c4418",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "arrayOfJson",
            "options": [],
            "fieldType": "json[]",
            "value": "[[{\"description\":\"Any \",\"type\":\"Terms 1\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 2\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 3\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 4\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 5\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 6\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 7\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 8\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 9\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 10\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 11\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 12\",\"uuid\":null}]]",
            "isRemark": false
        },
        {
            "indexedValue": [
                "Advanced Payment Mode_cashmode",
                "Advanced Payment Mode_chequemode",
                "Advanced Payment Mode_bankMode",
                "Advanced Payment Mode_petroCardmode"
            ],
            "fieldKey": "Advanced Payment Mode",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "arrayOfString",
            "options": [],
            "fieldType": "string[]",
            "value": "[\"cashmode\",\"chequemode\",\"bankMode\",\"petroCardmode\"]",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "9MT_78e660c9-3b85-45da-89fe-1bdf413bf2f8",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "arrayOfJson",
            "options": [],
            "fieldType": "json[]",
            "value": "[[{\"description\":\"Any \",\"type\":\"Terms 1\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 2\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 3\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 4\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 5\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 6\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 7\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 8\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 9\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 10\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 11\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 12\",\"uuid\":null}]]",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "9MT_39fcf617-4d49-47f3-974a-a5121ffb97cc",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": null,
            "required": false,
            "accessType": null,
            "input": "",
            "unit": "",
            "valueType": "arrayOfJson",
            "options": [],
            "fieldType": "json[]",
            "value": "[[{\"description\":\"Any \",\"type\":\"Terms 1\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 2\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 3\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 4\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 5\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 6\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 7\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 8\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 9\",\"uuid\":null},{\"description\":\"Any \",\"type\":\"Terms 10\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 11\",\"uuid\":null},{\"description\":\"Any\",\"type\":\"Terms 12\",\"uuid\":null}]]",
            "isRemark": false
        }
    ],
    "origin": {
        "hubId": null,
        "boundary": null,
        "address": null,
        "accessibility": null,
        "addedBy": null,
        "center": {
            "latitude": 16.506936,
            "longitude": 81.7404134
        },
        "suggestedRadius": 0,
        "isOwned": null,
        "centerCoordinates": [
            81.7404134,
            16.506936
        ],
        "placeId": "a167ecb0-7e4d-4987-89b5-d3b756666d1f",
        "geoJsonBoundry": null,
        "externalId": "",
        "source": null,
        "places": null,
        "viewport": null,
        "district": null,
        "name": "WEST GODAVRI-PADMA PETRO PRODUCTS",
        "state": null,
        "category": "Unloading Point",
        "subDistrict": null,
        "controllingBranchId": null
    },
    "destination": {
        "hubId": null,
        "boundary": null,
        "address": null,
        "accessibility": null,
        "addedBy": null,
        "center": {
            "latitude": 16.7186177,
            "longitude": 77.1255055
        },
        "suggestedRadius": 0,
        "isOwned": null,
        "centerCoordinates": [
            77.1255055,
            16.7186177
        ],
        "placeId": "bf80e27a-4ae8-42f4-a207-8bc6f4210909",
        "geoJsonBoundry": null,
        "externalId": "",
        "source": null,
        "places": null,
        "viewport": null,
        "district": null,
        "name": "YADGIR-DIVISIONAL CONTROLLER NEKRTC - YADGIR DIVISION",
        "state": null,
        "category": "Unloading Point",
        "subDistrict": null,
        "controllingBranchId": null
    },
    "updates": {
        "traceID": "423cadcc8760c9a2d2dc1021cc60733b",
        "resourceId": "192d0d7b-d30a-480b-a596-36769bde0253",
        "updatedBy": "USER",
        "changes": [],
        "sourceOfInformation": "User",
        "description": "Allotted 7 vehicles to KAUSHAL ENTERPRISES.",
        "forwardReasons": [
            "auction.bid.accepted.event"
        ],
        "userId": "5694f502-af14-42d9-990b-f962c6296522",
        "uuid": "ea9b90be-c794-4601-9d4f-ef9ace15afcc",
        "revision": 1,
        "time": 1739355870602,
        "forwardedFrom": "c8dfddcb-2e1c-46b0-b5da-fd3d490ff053",
        "resourceType": "Auction",
        "updateType": null
    },
    "orgId": "ef300683-901b-4774-bf0e-955d49e796bc",
    "freightType": "perVehicle",
    "alternateDestinations": [],
    "completedRounds": [
        {
            "roundNumber": 1,
            "startTime": 1739172511210,
            "endTime": 1739176529596,
            "status": "Completed"
        }
    ],
    "isConsiderReferencePrice": false,
    "totalStdQuantity": {
        "volume": null,
        "packageMeasurement": null,
        "weight": {
            "actualDeliveredQuantity": null,
            "density": null,
            "netQuantity": 90,
            "moisture": null,
            "claimQuantity": 0,
            "unitOfMeasurment": "Metric Tonnes",
            "standardQuantity": 90,
            "actualLoadedQuantity": null,
            "measurmentType": "Weight",
            "grossQuantity": 90,
            "shortage": null,
            "temperature": null,
            "plannedLoadQuantity": null,
            "frieghtDeductableQuantity": 0
        },
        "containers": null,
        "trucks": null
    },
    "isAllowCounterOffer": false,
    "auctionType": "Planned",
    "allowedMaterial": [
        "TestMaterialName1"
    ],
    "createDate": 1739172525944,
    "routeDistance": null,
    "externalId": null,
    "placedQuantity": 63,
    "statusDescription": null,
    "placementDate": 1739630061000,
    "round": {
        "roundNumber": 1,
        "startTime": 1739172511210,
        "endTime": 1739176529596,
        "status": "Completed"
    },
    "isNegotiable": true,
    "allocatedVehicles": 7,
    "secondaryStatus": "CLOSE",
    "numberOfBidRequiredToMarkWON": 0,
    "isCritical": null,
    "remarks": []
}

let index = "bpartners"
const query = (uuids) => {
    return {
        "_source": ["contacts","name"],
        "size": 20,
        "query": {
            "bool": {
                "must": [
                    {
                        "terms": {
                            "uuid.keyword": uuids
                        }
                    }
                ]
            }
        }
    }
}

async function getDataFromElastic(index, query) {
    if (!index || !query) {
        console.log("Invalid parameters: index or query is missing");
        return null;
    }

    try {
        let url = `${FRT_PUB_BASE_URL}/shipment-view/proxy/to/elastic`
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

async function sendEmail(html, jsonArr, to, cc = []) {
    let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/json/email`;
    let payload = {
        data: jsonArr,
        emailInfo: {
            to: to,
            cc: cc,
            subject: "Rashmi Metaliks: Vendor Invitation",
            html: html
        },
        orgId: ORGID,
    };
    try {
        let res = await rp({
            method: "POST",
            uri: url,
            body: payload,
            json: true,
        });
        if (res.status != 200) {
            console.log(`Sending Json to Excel email api res error : ${res.error}`);
        }
    } catch (e) {
        console.log(`Catched Error in sending json to excel email : ${e.message}`);
    }
    return "Mail Sent"
}

async function createAuctionDataObject(auction, transporterName = null) {
    return {
        'Order Number': auction?.orderId,
        'Dispatch from Location': auction?.origin?.name,
        'Destination': auction?.destination?.name,
        'Required Total Trucks': auction?.allowedVehicleTypes.join(" | ")
    };
}

async function createExcelReportConsolidated(auction) {
    try {
        const defaultRecipients = [
            // "monu.khan@fretron.com",
            "sahil.aggarwal@fretron.com"
        ];
        
        let bPartners = await getDataFromElastic(index, query(auction.allowedTransporters));
        const data = await createAuctionDataObject(auction);
        
        // Send individual emails to each business partner
        for (const bp of bPartners) {
            const partnerName = bp?.name || "Valued Partner";
            const partnerEmails = bp?.contacts?.flatMap(contact => contact?.emails || []) || [];
            
            if (partnerEmails.length === 0) {
                console.log(`Sending Mail to ${partnerName}:`, partnerEmails);
                
                // Combine partner emails with default recipients
                const to = [...new Set([...partnerEmails, ...defaultRecipients])];
                
                if (data) {
                    let content = convertJSONtoHTMLInvite(data, partnerName);
                    await sendEmail(content, [data], to);
                    console.log("Mail Sent")
                }
            }
        }
    } catch (error) {
        console.log(`Error creating Excel report: ${error.message}`);
    }
}

function convertJSONtoHTMLInvite(jsonData, name) {
    if (!jsonData) {
        return '';
    }

    const headers = Object.keys(jsonData);

    let htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div style="font-family: Arial, sans-serif;">
        <p>Dear ${name},</p>
        
        <p>Please participate in the bidding process and submit your freight rates as per the details mentioned below:</p>
        
        <div style="overflow-x: auto;">
            <table style="border-collapse: collapse; width: 100%; min-width: 600px; border: 1px solid #ddd;">
                <tr style="background-color: #f8f9fa;">
                    ${headers.map(header => `
                        <th style="border: 1px solid #ddd; padding: 12px 8px; text-align: left; color: #333;">${header}</th>
                    `).join('')}
                </tr>
                <tr>
                    ${headers.map(header => `
                        <td style="border: 1px solid #ddd; padding: 8px; color: #333;">${jsonData[header] || ''}</td>
                    `).join('')}
                </tr>
            </table>
        </div>

        <p style="margin-top: 20px;">
            Regards<br>
            Rashmi Metalils Ltd.-Unit-06 Kharagpur, West Bengal
        </p>
    </div>
</body>
</html>`;

    return htmlContent;
}

createExcelReportConsolidated(auction);
