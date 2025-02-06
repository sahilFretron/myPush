const BASE_URL = "http://122.180.251.100:3091"
const rp = require("request-promise")
// QA Token
const QA_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjM0ODEwMzYsInVzZXJJZCI6ImJvdHVzZXItLTRmNTJmMDQxLWRjNWMtNGQxNC04M2Y2LWEwNDM5NmQ0ZWZhYyIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTRmNTJmMDQxLWRjNWMtNGQxNC04M2Y2LWEwNDM5NmQ0ZWZhYyIsIm9yZ0lkIjoiN2Q3MzA0ZjAtNTYzOC00NzBiLWJlODgtNmZhNmY5YmUyNGI0IiwibmFtZSI6IkludGVncmF0aW9uIEJvdCIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.GgoluwLRUN6MmUWuch1wugNhO0beTRlctswx3SqEMus"

async function orderSync(payload) {
    try {
        let res = await rp({
            method: "POST",
            uri: `${BASE_URL}/opil/sap-to-fretron/order-sync`,
            headers: {
                Authorization: QA_TOKEN
            },
            body: payload,
            json: true
        })
        if (res.status == 200) {
            return { data: res.data?.externalId, status: 200, error: null }
        } else {
            return res
        }
    } catch (e) {
        console.log(`Caught Error - ${e.message}`)
        return { data: null, error: "Some server error", status: 400 }
    }
}
let materials = [
    {
        "unitOfMeasurement": "Metric Tonnes",
        "measuredQuantity": null,
        "partnerName": null,
        "materialType": "Material",
        "externalId": "4TG170W_TDG",
        "updates": {
            "traceID": "00000000000000000000000000000000",
            "resourceId": "ffc8d96b-2e0c-4911-a44e-ca100ee8e902",
            "updatedBy": "USER",
            "changes": null,
            "sourceOfInformation": null,
            "description": "",
            "forwardReasons": [
                "material.updated.event"
            ],
            "userId": "3f67e6af-e920-4cf7-a15b-b3278f78f1d2",
            "uuid": "ed312570-0275-494b-9aa1-f9bcf7e83524",
            "revision": null,
            "time": 1738824445174,
            "forwardedFrom": null,
            "resourceType": "Material",
            "updateType": null
        },
        "taxCode": null,
        "uuid": "ffc8d96b-2e0c-4911-a44e-ca100ee8e902",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "pricePerUnit": null,
        "materialDescription": "SOFT TISSUE DELUXE(TG)WHITE",
        "division": "4.7",
        "controlCode": "170",
        "materialGroup": "SOFT TISSUE",
        "materialGroupId": "91b5cace-b178-45fc-b33f-a379a22ffccf",
        "name": "TDG",
        "measurementType": "weight",
        "companyCodes": null,
        "partnerId": null,
        "linkedMaterialId": null
    },
    {
        "unitOfMeasurement": "Metric Tonnes",
        "measuredQuantity": null,
        "partnerName": null,
        "materialType": "Material",
        "externalId": "1CW057W_CWS",
        "updates": {
            "traceID": "00000000000000000000000000000000",
            "resourceId": "ff532f44-3f72-427d-a0d0-5c353c6768bf",
            "updatedBy": "USER",
            "changes": null,
            "sourceOfInformation": null,
            "description": "",
            "forwardReasons": [
                "material.updated.event"
            ],
            "userId": "3f67e6af-e920-4cf7-a15b-b3278f78f1d2",
            "uuid": "4a8f8b8a-2557-45a2-ab72-8d0cdbb890d0",
            "revision": null,
            "time": 1738824498391,
            "forwardedFrom": null,
            "resourceType": "Material",
            "updateType": null
        },
        "taxCode": null,
        "uuid": "ff532f44-3f72-427d-a0d0-5c353c6768bf",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "pricePerUnit": null,
        "materialDescription": "CREAM WOVE (SHEET)",
        "division": "1.45",
        "controlCode": "057",
        "materialGroup": "WPP",
        "materialGroupId": "f931ad2a-cb3f-4b2f-a40e-b960335dd985",
        "name": "CWS",
        "measurementType": "weight",
        "companyCodes": null,
        "partnerId": null,
        "linkedMaterialId": null
    },
    {
        "unitOfMeasurement": "Metric Tonnes",
        "measuredQuantity": null,
        "partnerName": null,
        "materialType": "Material",
        "externalId": "3CF400W_CFD",
        "updates": {
            "traceID": "00000000000000000000000000000000",
            "resourceId": "fecb479e-8ab6-457d-9c6e-378a98a1701c",
            "updatedBy": "USER",
            "changes": null,
            "sourceOfInformation": null,
            "description": "",
            "forwardReasons": [
                "material.updated.event"
            ],
            "userId": "3f67e6af-e920-4cf7-a15b-b3278f78f1d2",
            "uuid": "9eac86fb-ce93-48c2-8f2d-90c4ca73a57c",
            "revision": null,
            "time": 1738824512721,
            "forwardedFrom": null,
            "resourceType": "Material",
            "updateType": null
        },
        "taxCode": null,
        "uuid": "fecb479e-8ab6-457d-9c6e-378a98a1701c",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "pricePerUnit": null,
        "materialDescription": "C.FOLD DELUXE(HAND TOWEL GRD)WHITE",
        "division": "3.3",
        "controlCode": "400",
        "materialGroup": "KT/C-FOLD",
        "materialGroupId": "d5edd84a-db3c-4ae1-a8c3-c52e064f171b",
        "name": "CFD",
        "measurementType": "weight",
        "companyCodes": null,
        "partnerId": null,
        "linkedMaterialId": null
    },
    {
        "unitOfMeasurement": "Metric Tonnes",
        "measuredQuantity": null,
        "partnerName": null,
        "materialType": "Material",
        "externalId": "5MF090W_MFW",
        "updates": {
            "traceID": "00000000000000000000000000000000",
            "resourceId": "fe7fe0d1-59ca-4ac6-b3c2-91ed3c126a01",
            "updatedBy": "USER",
            "changes": null,
            "sourceOfInformation": null,
            "description": "",
            "forwardReasons": [
                "material.updated.event"
            ],
            "userId": "3f67e6af-e920-4cf7-a15b-b3278f78f1d2",
            "uuid": "2a161afe-52d8-42d4-9351-bb66334a95b3",
            "revision": null,
            "time": 1738824526193,
            "forwardedFrom": null,
            "resourceType": "Material",
            "updateType": null
        },
        "taxCode": null,
        "uuid": "fe7fe0d1-59ca-4ac6-b3c2-91ed3c126a01",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "pricePerUnit": null,
        "materialDescription": "M.F. COVER PAPER WHITE",
        "division": "1.5",
        "controlCode": "090",
        "materialGroup": "WPP",
        "materialGroupId": "f931ad2a-cb3f-4b2f-a40e-b960335dd985",
        "name": "MFW",
        "measurementType": "weight",
        "companyCodes": null,
        "partnerId": null,
        "linkedMaterialId": null
    },
    {
        "unitOfMeasurement": "Metric Tonnes",
        "measuredQuantity": null,
        "partnerName": null,
        "materialType": "Material",
        "externalId": "2TB160R_TBDGR",
        "updates": {
            "traceID": "00000000000000000000000000000000",
            "resourceId": "fe614c97-18ae-4f7c-bf3e-9cd709437f33",
            "updatedBy": "USER",
            "changes": null,
            "sourceOfInformation": null,
            "description": "",
            "forwardReasons": [
                "material.updated.event"
            ],
            "userId": "3f67e6af-e920-4cf7-a15b-b3278f78f1d2",
            "uuid": "e84b5c43-09db-48e4-9484-34824338c249",
            "revision": null,
            "time": 1738824537925,
            "forwardedFrom": null,
            "resourceType": "Material",
            "updateType": null
        },
        "taxCode": null,
        "uuid": "fe614c97-18ae-4f7c-bf3e-9cd709437f33",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "pricePerUnit": null,
        "materialDescription": "BAMBOO TOILET BROWN",
        "division": "4.6",
        "controlCode": "160",
        "materialGroup": "SOFT TISSUE",
        "materialGroupId": "91b5cace-b178-45fc-b33f-a379a22ffccf",
        "name": "TBDGR",
        "measurementType": "weight",
        "companyCodes": null,
        "partnerId": null,
        "linkedMaterialId": null
    },
    {
        "unitOfMeasurement": "Metric Tonnes",
        "measuredQuantity": null,
        "partnerName": null,
        "materialType": "Material",
        "externalId": "3CF400L_CFD",
        "updates": {
            "traceID": "00000000000000000000000000000000",
            "resourceId": "fc9cd850-66bf-4765-a0ae-6fc21bf7f397",
            "updatedBy": "USER",
            "changes": null,
            "sourceOfInformation": null,
            "description": "",
            "forwardReasons": [
                "material.updated.event"
            ],
            "userId": "3f67e6af-e920-4cf7-a15b-b3278f78f1d2",
            "uuid": "e9656aee-01ca-4b16-a65d-018c22d1e77f",
            "revision": null,
            "time": 1738824559144,
            "forwardedFrom": null,
            "resourceType": "Material",
            "updateType": null
        },
        "taxCode": null,
        "uuid": "fc9cd850-66bf-4765-a0ae-6fc21bf7f397",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "pricePerUnit": null,
        "materialDescription": "C.FOLD DELUXE(HAND TOWEL GRD)WHITE",
        "division": "3.2",
        "controlCode": "400",
        "materialGroup": "KT/C-FOLD",
        "materialGroupId": "d5edd84a-db3c-4ae1-a8c3-c52e064f171b",
        "name": "CFD",
        "measurementType": "weight",
        "companyCodes": null,
        "partnerId": null,
        "linkedMaterialId": null
    },
    {
        "unitOfMeasurement": "Metric Tonnes",
        "measuredQuantity": null,
        "partnerName": null,
        "materialType": "Material",
        "externalId": "1OW061W_OWR",
        "updates": {
            "traceID": "00000000000000000000000000000000",
            "resourceId": "fca05c7b-993c-49f6-9216-ae29327838f2",
            "updatedBy": "USER",
            "changes": null,
            "sourceOfInformation": null,
            "description": "",
            "forwardReasons": [
                "material.updated.event"
            ],
            "userId": "3f67e6af-e920-4cf7-a15b-b3278f78f1d2",
            "uuid": "b4698807-750c-469a-b907-09ca0de16be0",
            "revision": null,
            "time": 1738824575311,
            "forwardedFrom": null,
            "resourceType": "Material",
            "updateType": null
        },
        "taxCode": null,
        "uuid": "fca05c7b-993c-49f6-9216-ae29327838f2",
        "orgId": "7d7304f0-5638-470b-be88-6fa6f9be24b4",
        "pricePerUnit": null,
        "materialDescription": "ORIENT PLATINUM WATER MARK",
        "division": "1.45",
        "controlCode": "061",
        "materialGroup": "WPP",
        "materialGroupId": "f931ad2a-cb3f-4b2f-a40e-b960335dd985",
        "name": "OWR",
        "measurementType": "weight",
        "companyCodes": null,
        "partnerId": null,
        "linkedMaterialId": null
    }
]

let payload = {
    "orders": [
        {
            "orderNumber": "TEST4000001484",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "TDG",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.5,
                    "remainingQuantity": 2.5,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "24.12.2024",
                    "status": "OPEN",
                    "materialCode": "4TG170W_TDG",
                    "materialDesc": "SOFT TISSUE DELUXE(TG)WHITE",
                    "orderRegion": "621"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "CWS",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 1.8,
                    "remainingQuantity": 1.8,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "24.12.2024",
                    "status": "OPEN",
                    "materialCode": "1CW057W_CWS",
                    "materialDesc": "CREAM WOVE (SHEET)",
                    "orderRegion": "621"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001485",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "CFD",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 3.2,
                    "remainingQuantity": 3.2,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "26.12.2024",
                    "status": "OPEN",
                    "materialCode": "3CF400W_CFD",
                    "materialDesc": "C.FOLD DELUXE(HAND TOWEL GRD)WHITE",
                    "orderRegion": "622"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "MFW",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.1,
                    "remainingQuantity": 2.1,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "26.12.2024",
                    "status": "OPEN",
                    "materialCode": "5MF090W_MFW",
                    "materialDesc": "M.F. COVER PAPER WHITE",
                    "orderRegion": "622"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001486",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "TBDGR",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 4.0,
                    "remainingQuantity": 4.0,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "27.12.2024",
                    "status": "OPEN",
                    "materialCode": "2TB160R_TBDGR",
                    "materialDesc": "BAMBOO TOILET BROWN",
                    "orderRegion": "623"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "CFD",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.8,
                    "remainingQuantity": 2.8,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "27.12.2024",
                    "status": "OPEN",
                    "materialCode": "3CF400L_CFD",
                    "materialDesc": "C.FOLD DELUXE(HAND TOWEL GRD)WHITE",
                    "orderRegion": "623"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001487",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "OWR",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 3.5,
                    "remainingQuantity": 3.5,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "28.12.2024",
                    "status": "OPEN",
                    "materialCode": "1OW061W_OWR",
                    "materialDesc": "ORIENT PLATINUM WATER MARK",
                    "orderRegion": "624"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "TDG",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.2,
                    "remainingQuantity": 2.2,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "28.12.2024",
                    "status": "OPEN",
                    "materialCode": "4TG170W_TDG",
                    "materialDesc": "SOFT TISSUE DELUXE(TG)WHITE",
                    "orderRegion": "624"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001488",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "MFW",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.7,
                    "remainingQuantity": 2.7,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "29.12.2024",
                    "status": "OPEN",
                    "materialCode": "5MF090W_MFW",
                    "materialDesc": "M.F. COVER PAPER WHITE",
                    "orderRegion": "625"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "CFD",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 1.9,
                    "remainingQuantity": 1.9,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "29.12.2024",
                    "status": "OPEN",
                    "materialCode": "3CF400W_CFD",
                    "materialDesc": "C.FOLD DELUXE(HAND TOWEL GRD)WHITE",
                    "orderRegion": "625"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001489",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "CWS",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 3.1,
                    "remainingQuantity": 3.1,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "30.12.2024",
                    "status": "OPEN",
                    "materialCode": "1CW057W_CWS",
                    "materialDesc": "CREAM WOVE (SHEET)",
                    "orderRegion": "626"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "TBDGR",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.4,
                    "remainingQuantity": 2.4,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "30.12.2024",
                    "status": "OPEN",
                    "materialCode": "2TB160R_TBDGR",
                    "materialDesc": "BAMBOO TOILET BROWN",
                    "orderRegion": "626"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001490",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "CFD",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.9,
                    "remainingQuantity": 2.9,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "31.12.2024",
                    "status": "OPEN",
                    "materialCode": "3CF400L_CFD",
                    "materialDesc": "C.FOLD DELUXE(HAND TOWEL GRD)WHITE",
                    "orderRegion": "627"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "OWR",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 3.3,
                    "remainingQuantity": 3.3,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "31.12.2024",
                    "status": "OPEN",
                    "materialCode": "1OW061W_OWR",
                    "materialDesc": "ORIENT PLATINUM WATER MARK",
                    "orderRegion": "627"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001491",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "TDG",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.6,
                    "remainingQuantity": 2.6,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "02.01.2025",
                    "status": "OPEN",
                    "materialCode": "4TG170W_TDG",
                    "materialDesc": "SOFT TISSUE DELUXE(TG)WHITE",
                    "orderRegion": "628"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "MFW",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 1.7,
                    "remainingQuantity": 1.7,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "02.01.2025",
                    "status": "OPEN",
                    "materialCode": "5MF090W_MFW",
                    "materialDesc": "M.F. COVER PAPER WHITE",
                    "orderRegion": "628"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001492",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "CFD",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 3.4,
                    "remainingQuantity": 3.4,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "03.01.2025",
                    "status": "OPEN",
                    "materialCode": "3CF400W_CFD",
                    "materialDesc": "C.FOLD DELUXE(HAND TOWEL GRD)WHITE",
                    "orderRegion": "629"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "TBDGR",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.3,
                    "remainingQuantity": 2.3,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "03.01.2025",
                    "status": "OPEN",
                    "materialCode": "2TB160R_TBDGR",
                    "materialDesc": "BAMBOO TOILET BROWN",
                    "orderRegion": "629"
                },
                {
                    "itemNumber": "30",
                    "materialGrp": "CWS",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 1.6,
                    "remainingQuantity": 1.6,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "03.01.2025",
                    "status": "OPEN",
                    "materialCode": "1CW057W_CWS",
                    "materialDesc": "CREAM WOVE (SHEET)",
                    "orderRegion": "629"
                }
            ]
        },
        {
            "orderNumber": "TEST4000001493",
            "billToPartyCode": "5000024",
            "lineItems": [
                {
                    "itemNumber": "10",
                    "materialGrp": "OWR",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 2.0,
                    "remainingQuantity": 2.0,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "04.01.2025",
                    "status": "OPEN",
                    "materialCode": "1OW061W_OWR",
                    "materialDesc": "ORIENT PLATINUM WATER MARK",
                    "orderRegion": "630"
                },
                {
                    "itemNumber": "20",
                    "materialGrp": "CFD",
                    "reelDia": 0,
                    "sheetSize": "58.00X00.00",
                    "totalQuantity": 3.0,
                    "remainingQuantity": 3.0,
                    "shipToPartyCode": "5000024",
                    "shipToPartyPincode": "834001",
                    "shipToPartyCity": "Ranchi",
                    "shipToPartyStateGstCode": "20",
                    "shipToPartyState": "Jharkhand",
                    "shipToPartyAddress": "UPPER BAZAR,RANCHI,834001,20,IN",
                    "scheduleTime": "04.01.2025",
                    "status": "OPEN",
                    "materialCode": "3CF400L_CFD",
                    "materialDesc": "C.FOLD DELUXE(HAND TOWEL GRD)WHITE",
                    "orderRegion": "630"
                }
            ]
        }
    ]
}

async function sendOrders() {
    console.log("Starting to send orders...")
    for (let order of payload.orders) {
        try {
            console.log(`Processing order: ${order.orderNumber}`)
            let singleOrderPayload = order
            let result = await orderSync(singleOrderPayload)
            console.log(`Order ${order.orderNumber} result:`, result)
            // Add a small delay between requests
        } catch (error) {
            console.log(`Error processing order ${order.orderNumber}:`, error.message)
        }
    }
    console.log("Finished sending all orders")
}

// Execute the function
sendOrders()



