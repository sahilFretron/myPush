//Written by Sahil - 13 Feb 2025
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mzk1MTg0OTEsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiMzIxODg3YjYtOGY0My00Mjk5LThiNzUtNDdkM2VkMDM5ZDRlIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.Mh0dCQs-3BiRLJlRL7_WyIKqokDPdnSsDi_GXjwKk18";
const ORGID = "321887b6-8f43-4299-8b75-47d3ed039d4e";
const INVITE_EVENT = "auction.transporter.invite.event"
const AUCTION_CLOSED_EVENT = "auction.closed.status.event"
const AUCTION_OPEN_EVENT = "auction.opened.status.event"
const CREATE_EVENT = "auction.created.event"
const rp = require("request-promise")
const FRT_PUB_BASE_URL = "https://apis.fretron.com"

let auction = {
    "orderId": "FRSO0000077",
    "isShowTopRankToOthers": null,
    "uuid": "037752b8-09da-40b1-989d-40d3fa061bf1",
    "purchaseEnquiries": null,
    "branch": {
        "companyCode": null,
        "address": "Kolaghat - Pansila - Cuttack Road, Khatranga, West Bengal 721301, India",
        "updatedBy": null,
        "customFields": null,
        "regionName": null,
        "externalId": "P1104",
        "branchName": null,
        "type": [
            "IT",
            "Operation",
            "Sales"
        ],
        "updates": null,
        "orgId": "321887b6-8f43-4299-8b75-47d3ed039d4e",
        "areaId": null,
        "geoLocation": [
            87.39822688015033,
            22.32408342195501
        ],
        "regionId": null,
        "areaName": null,
        "name": "Rashmi Metaliks Limited-RML6",
        "zoneId": null,
        "_id": "12e0d624-e856-4f3d-94d1-555b531e16c6",
        "zoneName": "EAST",
        "contacts": [],
        "officeType": null,
        "materialServices": null
    },
    "issues": null,
    "allowedVehicleTypes": [
        "TRAILER 23 MT"
    ],
    "alternateOrigins": [],
    "totalQuantity": 115,
    "placedStdQuantity": {
        "volume": null,
        "packageMeasurement": null,
        "weight": {
            "actualDeliveredQuantity": null,
            "density": null,
            "netQuantity": 0,
            "moisture": null,
            "claimQuantity": null,
            "unitOfMeasurment": "Metric Tonnes",
            "standardQuantity": 0,
            "actualLoadedQuantity": null,
            "measurmentType": "weight",
            "grossQuantity": 0,
            "shortage": null,
            "temperature": null,
            "plannedLoadQuantity": null,
            "frieghtDeductableQuantity": null
        },
        "containers": null,
        "trucks": null
    },
    "price": 8000,
    "enquiries": null,
    "legType": "DirectLeg",
    "bidToleranceAmount": 20,
    "customerName": "Rashmi Bidding ",
    "fuMappings": [
        {
            "lineItemId": "6504c57a-fef1-4195-a92e-58d23893d7d3",
            "uuid": "623419d9-a4e6-4fe9-a1f8-a17f074a4e49"
        },
        {
            "lineItemId": "111e8342-f773-4397-9521-2cbc0cea9858",
            "uuid": "b1cb5997-df42-4980-8ba1-f744d19923f5"
        },
        {
            "lineItemId": "f1e5b7ea-b6ff-4322-8c36-6b5ac43fa48a",
            "uuid": "d1911726-884e-4e78-837a-f209e48772f7"
        },
        {
            "lineItemId": "f053f418-7498-484a-b9a8-da89ceff877e",
            "uuid": "f57d6b1e-fc81-495f-bf5f-d31c484e5ab9"
        },
        {
            "lineItemId": "d185a970-291f-4e68-af92-a7a2135a3e55",
            "uuid": "fffe9c26-b022-4ede-a5ad-e8ab4e908d49"
        }
    ],
    "allowedTransporters": [
        "3403a461-d3e2-4c5a-a735-bc70754a1cec",
        "e6350d39-be4f-4e02-9f18-7d722e5f719d",
        "30fea656-ead2-45e5-a375-65ad8752bc7c",
        "65c052cd-11ef-4085-837b-ad4e8fd59536",
        "5f86effb-0cc9-4920-a9c3-fafd11cd51e6",
        "9a7c3454-fc3d-490b-9cfa-8b7b43d6b0b7",
        "b3507fee-084e-4729-8aec-1eae7d2d008b",
        "167074a3-228b-43ea-87bc-b437fe4f482c",
        "c2569a43-7315-4fc1-acae-a21bf2b5eecc",
        "2448f7f7-32cc-4818-8610-4ea0331eec59",
        "5d22052a-95a2-4b00-bc43-cc3966237bb7",
        "4db37704-c18f-4305-8a7d-c20bc423a671",
        "8ce0b3c7-7892-41d6-826d-8020cae69af7",
        "d360b164-c84e-4b25-baf9-f04b10b3cbde",
        "6db65c75-ec13-4a50-8712-80c179aad947",
        "2cf8f105-a3ab-4233-b6c0-fca5c3eb80ce",
        "0334c176-84d4-4a00-ae14-40f553da4c81",
        "a50e20e2-149a-4969-aff2-a1c9b1acf1f7",
        "6eb2bc37-da40-495d-8dbe-49d9eb643e61",
        "63602b27-a888-4724-87b6-e837dd3832db",
        "01ddefc6-4973-4de5-adbb-36710c85b931",
        "b5b61941-561a-46be-a071-d9876a11e24f",
        "99c74c32-be12-4875-8cca-de1b3d8dfe44",
        "9c0d4126-7bc2-4324-9d34-a4b724b4f683",
        "774736be-f820-4f43-9006-69a014f4ff9d",
        "0aca2f2f-0c8b-480e-a9dc-27a97884175f",
        "159c1823-13f9-40cf-b135-304789c9be0e",
        "e31a5bf7-a370-4e99-9311-8ced8f7b5846",
        "78651d03-4990-484f-b6c9-2e290c4f7418",
        "4e3776e3-afcf-47eb-b28b-f7c962399fb0",
        "f693e90c-481e-4597-b45e-2689016cdd7d",
        "0051de78-577e-457e-8e99-23435e4f60ee",
        "4c5fe20c-e9f3-4221-90a9-f17d625e6c34",
        "25616790-e04e-4f86-8c1e-9570f40d3ae5",
        "a52f2e00-e327-49b5-9685-4bb72b43e6fa",
        "70eb2bc3-ea10-44ac-b7b7-df1ba08ef80c",
        "4c56d040-51a9-4066-8464-ab03059146fd",
        "b4fd0e35-55db-4d38-8c20-c1bf238d3e7d",
        "89b8af2b-b067-4a3b-85b0-bee6f398b9e8",
        "3d053406-17ba-46d4-97f3-83d08a186e25",
        "19d44113-e371-4cee-9e7a-bfe889ee4b20",
        "2aa5fe0c-cbeb-4449-af51-2f0ac4193f4d",
        "cf4e5ea8-4509-40f5-a1b6-1d964fe25b90",
        "a5ba0ffd-5b76-4b74-920d-0b3506c4c098",
        "51e1eb06-a6ef-45fa-8a5f-89fd1a7388b4",
        "94cd8e1c-e1db-4be2-b202-487a45c49e04",
        "faf6702e-3600-4069-b055-50934ccae368",
        "a3ef8b1b-6e65-4418-8bd1-f37e76351816",
        "d9fe17cb-3901-426b-9f86-c631f8d2a8cd",
        "28006b2a-4817-488f-8595-726320cdb78e",
        "325b3525-d14b-4b77-8393-49844bd165a9",
        "7cdb9561-7f99-4d3a-ab64-13c43b4a7fed",
        "7bea0994-1f82-438b-bcdd-77359ac524c8",
        "09498a65-fd4d-4abb-8eeb-6e8ce076a0ad",
        "346ec7fc-d72e-494f-8b6b-bc5bfd608ffb",
        "9e4a3932-5a0a-4d32-a92f-86763231be60",
        "9dcb5870-1cc2-4450-ae91-12ddffd8a4de",
        "99676183-fc40-4489-9070-65e00628e06f"
    ],
    "route": null,
    "numberOfVehicles": 5,
    "bids": [
        {
            "businessPartnerId": "3403a461-d3e2-4c5a-a735-bc70754a1cec",
            "amount": null,
            "partnerName": "SHIV TRANSPORT",
            "partnerExternalId": "6001492",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "e6350d39-be4f-4e02-9f18-7d722e5f719d",
            "amount": null,
            "partnerName": "Rashmi Metaliks Limited-RML1",
            "partnerExternalId": "P1102",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "30fea656-ead2-45e5-a375-65ad8752bc7c",
            "amount": null,
            "partnerName": "VP LOGISTICS PVT LTD",
            "partnerExternalId": "8000210",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7015226496"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "65c052cd-11ef-4085-837b-ad4e8fd59536",
            "amount": null,
            "partnerName": "MONDAL LOGISTICS",
            "partnerExternalId": "8000224",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9614353462",
                "9614353462",
                "9434507920"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "5f86effb-0cc9-4920-a9c3-fafd11cd51e6",
            "amount": null,
            "partnerName": "Anjani Cargo Service",
            "partnerExternalId": "8000263",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9331294200"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "9a7c3454-fc3d-490b-9cfa-8b7b43d6b0b7",
            "amount": null,
            "partnerName": "SAIZAR ENTERPRISE PVT. LTD.",
            "partnerExternalId": "8000175",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9771488689",
                "8434895999"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "b3507fee-084e-4729-8aec-1eae7d2d008b",
            "amount": null,
            "partnerName": "UGC SUPPLY CHAIN SOLUTIONS PVT LTD",
            "partnerExternalId": "8000261",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7601879752",
                "7601879752"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "167074a3-228b-43ea-87bc-b437fe4f482c",
            "amount": null,
            "partnerName": "SHAH WAYS PRIVATE LIMITED",
            "partnerExternalId": "8000240",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "c2569a43-7315-4fc1-acae-a21bf2b5eecc",
            "amount": null,
            "partnerName": "SMOOTH LOGISTICS",
            "partnerExternalId": "8000239",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9836867711"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "2448f7f7-32cc-4818-8610-4ea0331eec59",
            "amount": null,
            "partnerName": "VIKSIT LOGISTICS PVT LTD",
            "partnerExternalId": "8000038",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9830149876",
                "9830149876"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "5d22052a-95a2-4b00-bc43-cc3966237bb7",
            "amount": null,
            "partnerName": "EFC LOGISTICS INDIA PRIVATE LIMITED",
            "partnerExternalId": "8000192",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9748823331",
                "9506805575",
                "9331216641"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "4db37704-c18f-4305-8a7d-c20bc423a671",
            "amount": null,
            "partnerName": "JS Transport",
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
            "contacts": [
                "7008712866"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "8ce0b3c7-7892-41d6-826d-8020cae69af7",
            "amount": 7700,
            "partnerName": "KRISHNA CARRIERS",
            "partnerExternalId": "8000087",
            "source": "Portal",
            "uuid": "bfeabd02-04cf-42ce-be42-fb1c418042d3",
            "bidUpdateCount": 6,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 5,
            "rank": 1,
            "time": 1739705432183,
            "vendorExecutive": null,
            "contacts": [
                "9331041631",
                "9331041631"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "d360b164-c84e-4b25-baf9-f04b10b3cbde",
            "amount": null,
            "partnerName": "AWAGAMAN ROAD CARRIERS LIMITED",
            "partnerExternalId": "8000202",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9331242583",
                "8444989086",
                "9840457877"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "6db65c75-ec13-4a50-8712-80c179aad947",
            "amount": null,
            "partnerName": "MONDAL TRANSPORT AGENCY",
            "partnerExternalId": "8000235",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "2cf8f105-a3ab-4233-b6c0-fca5c3eb80ce",
            "amount": null,
            "partnerName": "SHREE KRISHNA LOGISTICS",
            "partnerExternalId": "8000211",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9674610195"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "0334c176-84d4-4a00-ae14-40f553da4c81",
            "amount": null,
            "partnerName": "SPEED GO LOGISTICS",
            "partnerExternalId": "8000110",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "8348697755",
                "9903463016"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "a50e20e2-149a-4969-aff2-a1c9b1acf1f7",
            "amount": null,
            "partnerName": "CJ DARCL PVT LTD",
            "partnerExternalId": "8000068",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7015226496",
                "9315132001",
                "9315132001",
                "9331973007",
                "9339475501",
                "9771431095"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "6eb2bc37-da40-495d-8dbe-49d9eb643e61",
            "amount": null,
            "partnerName": "MAHESHWARI ROAD CARRIERS PRIVATE LI",
            "partnerExternalId": "8000260",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9831366603",
                "6297621596",
                "7003830989"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "63602b27-a888-4724-87b6-e837dd3832db",
            "amount": 8550,
            "partnerName": "DHTC INDIA LIMITED",
            "partnerExternalId": "8000249",
            "source": "Portal",
            "uuid": "b83b8e2f-1dae-4f23-8eff-a0512b27224f",
            "bidUpdateCount": 5,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 5,
            "rank": 8,
            "time": 1739705172993,
            "vendorExecutive": null,
            "contacts": [
                "8336024535",
                "9038628124",
                "9836510005"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "01ddefc6-4973-4de5-adbb-36710c85b931",
            "amount": null,
            "partnerName": "Radha Krishna Roadlines",
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
            "contacts": [
                "9437334911"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "b5b61941-561a-46be-a071-d9876a11e24f",
            "amount": null,
            "partnerName": "TRANSLOG ENT",
            "partnerExternalId": "8000002",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9339111330"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "99c74c32-be12-4875-8cca-de1b3d8dfe44",
            "amount": null,
            "partnerName": "SUPERLINE LOGISTICS",
            "partnerExternalId": "6000747",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7779857927"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "9c0d4126-7bc2-4324-9d34-a4b724b4f683",
            "amount": null,
            "partnerName": "Rashmi Metaliks Limited-RML8",
            "partnerExternalId": "P1107",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "774736be-f820-4f43-9006-69a014f4ff9d",
            "amount": null,
            "partnerName": "READY WHEELS SUPPLY CHAIN PRIVATE LIMITED",
            "partnerExternalId": "8000242",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9007667995"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "0aca2f2f-0c8b-480e-a9dc-27a97884175f",
            "amount": null,
            "partnerName": "fake Transporter",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "159c1823-13f9-40cf-b135-304789c9be0e",
            "amount": null,
            "partnerName": "MANOJ LOGISTICS-Testing",
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
            "contacts": [
                "9630858246"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "e31a5bf7-a370-4e99-9311-8ced8f7b5846",
            "amount": null,
            "partnerName": "RML GUPTAMONI",
            "partnerExternalId": "P1111",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                ""
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "78651d03-4990-484f-b6c9-2e290c4f7418",
            "amount": null,
            "partnerName": "FAREX TRANSPORT",
            "partnerExternalId": "8000176",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9312917531",
                "9896992554"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "4e3776e3-afcf-47eb-b28b-f7c962399fb0",
            "amount": null,
            "partnerName": "SANDEEP TRUCKING",
            "partnerExternalId": "8000008",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9391112227",
                "9885421313"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "f693e90c-481e-4597-b45e-2689016cdd7d",
            "amount": 7834,
            "partnerName": "PRAGATI PARIVAHAN PVT LTD",
            "partnerExternalId": "8000183",
            "source": "Portal",
            "uuid": "fb927eec-cf2a-4283-9d27-fd16a7871107",
            "bidUpdateCount": 7,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 5,
            "rank": 4,
            "time": 1739705432537,
            "vendorExecutive": null,
            "contacts": [
                "9073375306",
                "9073375309",
                "9073375307",
                "9073375308",
                "9073375301"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "0051de78-577e-457e-8e99-23435e4f60ee",
            "amount": 8200,
            "partnerName": "Rashmi-Bidding User",
            "partnerExternalId": null,
            "source": "Portal",
            "uuid": "f4171a34-245d-4f99-ba25-26ea20177676",
            "bidUpdateCount": 1,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 5,
            "rank": 6,
            "time": 1739704867939,
            "vendorExecutive": null,
            "contacts": [
                "7406070000",
                "9851855369"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "4c5fe20c-e9f3-4221-90a9-f17d625e6c34",
            "amount": null,
            "partnerName": "KK TRANSPORT",
            "partnerExternalId": "8000258",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "25616790-e04e-4f86-8c1e-9570f40d3ae5",
            "amount": null,
            "partnerName": "G R LOGISTICS",
            "partnerExternalId": "8000111",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9231682292"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "a52f2e00-e327-49b5-9685-4bb72b43e6fa",
            "amount": null,
            "partnerName": "AIRWAYS LOGISTICS PVT LTD",
            "partnerExternalId": "8000270",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9431302026"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "70eb2bc3-ea10-44ac-b7b7-df1ba08ef80c",
            "amount": null,
            "partnerName": "DYNAMIC LOGISTICS",
            "partnerExternalId": "8000257",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9088353533",
                "9163555533"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "4c56d040-51a9-4066-8464-ab03059146fd",
            "amount": 7800,
            "partnerName": "Shreeji Translogistics Limited ",
            "partnerExternalId": "8000266",
            "source": "Portal",
            "uuid": "4f9d67f8-dec0-426f-bbec-5b7fd2f19846",
            "bidUpdateCount": 4,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 5,
            "rank": 3,
            "time": 1739705426311,
            "vendorExecutive": null,
            "contacts": [
                "9324602683",
                "9324602683"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "b4fd0e35-55db-4d38-8c20-c1bf238d3e7d",
            "amount": 8098,
            "partnerName": "SUPER SONIC CARRIER PVT LTD",
            "partnerExternalId": "8000088",
            "source": "Portal",
            "uuid": "84c67215-0f23-4868-99d6-8f108c9de53c",
            "bidUpdateCount": 9,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 5,
            "rank": 5,
            "time": 1739705084478,
            "vendorExecutive": null,
            "contacts": [
                "9051099691",
                "9051099691",
                "9614062600",
                "9593321921"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "89b8af2b-b067-4a3b-85b0-bee6f398b9e8",
            "amount": null,
            "partnerName": "Kaba Express Private  Limited",
            "partnerExternalId": "8000264",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9681977801",
                "9163605400"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "3d053406-17ba-46d4-97f3-83d08a186e25",
            "amount": null,
            "partnerName": "ROAD CARGO MOVERS PVT LTD",
            "partnerExternalId": "8000191",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9831347800",
                "7908695998"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "19d44113-e371-4cee-9e7a-bfe889ee4b20",
            "amount": null,
            "partnerName": "DOT TIME LOGISTICS",
            "partnerExternalId": "8000216",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7003530852",
                "9831050711"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "2aa5fe0c-cbeb-4449-af51-2f0ac4193f4d",
            "amount": null,
            "partnerName": "AMAN ENTERPRISE",
            "partnerExternalId": "6000476",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9732885217"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "cf4e5ea8-4509-40f5-a1b6-1d964fe25b90",
            "amount": null,
            "partnerName": "Rashmi Metaliks Limited-RML3",
            "partnerExternalId": "P1103",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "a5ba0ffd-5b76-4b74-920d-0b3506c4c098",
            "amount": null,
            "partnerName": "GERMICIDE HOSUEKEEPING PVT LTD.",
            "partnerExternalId": "12345",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "51e1eb06-a6ef-45fa-8a5f-89fd1a7388b4",
            "amount": null,
            "partnerName": "MAA KALI ENTERPRISE",
            "partnerExternalId": "6001727",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "94cd8e1c-e1db-4be2-b202-487a45c49e04",
            "amount": null,
            "partnerName": "GURJEET LOGISTICS",
            "partnerExternalId": "8000126",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9339111330",
                "9433048787"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "faf6702e-3600-4069-b055-50934ccae368",
            "amount": null,
            "partnerName": "PRAGATI ROADWAYS",
            "partnerExternalId": "6000488",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7001695042"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "a3ef8b1b-6e65-4418-8bd1-f37e76351816",
            "amount": null,
            "partnerName": "LOKESH KUMAR SINGH TRANSPORT",
            "partnerExternalId": "8000220",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9647033000"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "d9fe17cb-3901-426b-9f86-c631f8d2a8cd",
            "amount": null,
            "partnerName": "TILAK ROADLINES",
            "partnerExternalId": "6000490",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9830008010"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "28006b2a-4817-488f-8595-726320cdb78e",
            "amount": 7740,
            "partnerName": "UMA ROAD CARRIER PVT.LTD.",
            "partnerExternalId": "8000116",
            "source": "Portal",
            "uuid": "822fbd21-6cdf-4fca-9d39-db0c089582e5",
            "bidUpdateCount": 10,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 10,
            "rank": 2,
            "time": 1739705442085,
            "vendorExecutive": null,
            "contacts": [
                "6292288549",
                "6292288549",
                "9830146170",
                "8100196708"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "325b3525-d14b-4b77-8393-49844bd165a9",
            "amount": 8250,
            "partnerName": "RK Trailor Service",
            "partnerExternalId": "8000268",
            "source": "Portal",
            "uuid": "8b821044-f794-49e9-bf8c-b0c57f46e62c",
            "bidUpdateCount": 7,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": 5,
            "rank": 7,
            "time": 1739704929431,
            "vendorExecutive": null,
            "contacts": [
                "8980042648"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": "PENDING"
        },
        {
            "businessPartnerId": "7cdb9561-7f99-4d3a-ab64-13c43b4a7fed",
            "amount": null,
            "partnerName": "ATC LOGISTICAL SOLUTIONS PVT.LTD.",
            "partnerExternalId": "8000213",
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
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "7bea0994-1f82-438b-bcdd-77359ac524c8",
            "amount": null,
            "partnerName": "ALOK TRANSPORT PVT LTD",
            "partnerExternalId": "8000012",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7204342423"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "09498a65-fd4d-4abb-8eeb-6e8ce076a0ad",
            "amount": null,
            "partnerName": "MAA ANNAPURNA TRANSPORT AGENCY PVT LTD",
            "partnerExternalId": "8000251",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7605025478",
                "7603031213",
                "7603065236"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "346ec7fc-d72e-494f-8b6b-bc5bfd608ffb",
            "amount": null,
            "partnerName": "MOHIT CARGO MOVERS",
            "partnerExternalId": "8000107",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "7003530852",
                "7003530852",
                "7439387119"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "9e4a3932-5a0a-4d32-a92f-86763231be60",
            "amount": null,
            "partnerName": "NEW PUNJAB MOTOR TRANSPORT",
            "partnerExternalId": "8000271",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9470345085"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "9dcb5870-1cc2-4450-ae91-12ddffd8a4de",
            "amount": null,
            "partnerName": "RADHA KRISHNA ROADWAYS",
            "partnerExternalId": "8000028",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "9330900444"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        },
        {
            "businessPartnerId": "99676183-fc40-4489-9070-65e00628e06f",
            "amount": null,
            "partnerName": "HARSH ROAD CARGO PRIVATE LIMITED",
            "partnerExternalId": "8000090",
            "source": null,
            "uuid": null,
            "bidUpdateCount": null,
            "purchaseOrderId": null,
            "termAcceptanceStatus": null,
            "numberOfVehicles": null,
            "rank": null,
            "time": null,
            "vendorExecutive": null,
            "contacts": [
                "8001217176",
                "8972737661",
                "7364864040",
                "8001217176"
            ],
            "vehicleType": "TRAILER 23 MT",
            "status": null
        }
    ],
    "tnCs": [
        {
            "description": "YOUR BID RATE SHOULD     BE VALID FOR 7 DAYS FOR ORDER CONFIRMATION. ",
            "type": "VALIDITY",
            "uuid": null
        },
        {
            "description": "AT LEAST 80% OF     ORDER QTY. TO BE PLACED AS PER THE ORDER ALLOTMENT DATE &     BALANCE TO BE COMPLETED ON VERY NEXT DAY / OR AVERAGE OF MINIMUM 10     NO.S VEH PLACEMENT TO BE MAINTAINED, UNLESS PLACEMENT IS HOLD BY     RML- OTHERWISE BID WILL BE AWARDED TO L2 OR L3 VENDOR OR FROM OPEN     MARKET  AND DIFFERENTIAL FREIGHT AMOUNT WILL BE DEBITED TO L1     VENDOR.  ",
            "type": "PLACEMENT",
            "uuid": null
        },
        {
            "description": "HE FREIGHT SHALL BE RELEASED     WITHIN 60 DAYS FROM THE DATE OF SUBMISSION OF BILLS WITH US, ALONG     WITH ALL RELATED DOCUMENTS LIKE POD ETC IN ORIGINAL. ",
            "type": "FREIGHT PAYMENT (with Reverse     Charge Mechanism(RCM) under GST )",
            "uuid": null
        },
        {
            "description": "TO CANCEL/ REJECT/ NEGOTIATE ANY OF THE BID (AS IT SEEMS FIT), AT     ANY STAGE WITHOUT ASSIGNING ANY REASON, WHAT SO EVER",
            "type": "MANAGEMENT RESERVES THE RIGHT",
            "uuid": null
        },
        {
            "description": "VENDOR     MUST REACH TO THE DESTINATIONS ON THE GIVEN TRANSIT DAYS. IN CASE OF     MORE THAN 24 HOURS DELAY IN TRANSIT WITHOUT PRIOR INTIMATION TO RML     THEN PENALTY @ RS 2000 PER DAY FOR TRUCK AND RS 3000 PER DAY WILL     LEVIED ON THE TRANSPORTER ",
            "type": "TRANSIT TIME COMPLINACE",
            "uuid": null
        },
        {
            "description": "SHALL BE APPLICABLE AS PER THE POLICY SUBJECT TO AVAILABILITY OF     PROPER SUPPORTING DOCUMENTS. ",
            "type": "VEHICLE DETENTION CHARGES",
            "uuid": null
        },
        {
            "description": "VEHICLE MUST HAVE WORKING CONDITION OF GPS (ONLY WITH WIRE DEVICE ALLOWED). IF DEVICE IS     PRE-INSTALLED THEN TRANSPORTER MUST PROVIDE API INTERGRATION TO RML     GPS PROVIDER/ PORTAL. IF GPS DEVICE IS NOT PRE-INSTALLED IN THE     VEHICLE, THEN TRANSPORTER MUST INSTALLED GPS DEVICES FROM THE VENDOR     NOMINATED BY RML. AFTER DELIVERY OF SHIPMENT TO RETURN GPS DEVICE TO     GPS SERVICE PROVIDER WILL BE SOLE RESPONSIBILITY OF TRNSPORTERS",
            "type": "GPS COMPLIANCE",
            "uuid": null
        },
        {
            "description": "A participant starting bid and final bid     shouldn't be more than 10 % for a particular auction. Any deviation     from the same will be considered void.",
            "type": "Following rule is implement transportation bidding",
            "uuid": null
        },
        {
            "description": "Transport bills of any month     work done to submit by 15th of next month. ",
            "type": "Transport bills Submission",
            "uuid": null
        },
        {
            "description": "Detention charges (if any) to     be paid as follows: for Trucks - 28 hours detention free period,     thereafter Rs.1000/ Day, for Trailers- 53 hours detention free     period, thereafter Rs.1500/ Day. ",
            "type": "Detention charges",
            "uuid": null
        },
        {
            "description": "TRANSPORTER’S SUPERVISOR OR     DRIVER MUST FOLLOW THE SAFETY RULE INSIDE THE PLANT OR IN TRANSIT AS     PER COMPANY POLICY.",
            "type": "SAFETY RULE",
            "uuid": null
        },
        {
            "description": "The driver must possess a valid driving license. The vehicle must have the following valid documents: Registration Certificate (RC) Pollution Under Control (PUC) Certificate Fitness Certificate Insurance",
            "type": "Vehicle Entry into the Plant for Loading",
            "uuid": null
        }
    ],
    "bidToleranceMethod": "Fixed",
    "status": "OPEN",
    "salesOrderMappings": [
        {
            "quantity": {
                "volume": null,
                "packageMeasurement": null,
                "weight": {
                    "actualDeliveredQuantity": null,
                    "density": null,
                    "netQuantity": 23,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 23,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 23,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "23947ce5-1c79-40f8-ba7d-c3b9b233597a",
            "lineItemId": "dd575059-fb3e-4819-a38a-57d7c7e20b58",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "f7d2261e-0dd9-4ffe-afac-271f6aa2b030",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "6504c57a-fef1-4195-a92e-58d23893d7d3",
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
                    "netQuantity": 23,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 23,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 23,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "23947ce5-1c79-40f8-ba7d-c3b9b233597a",
            "lineItemId": "dd575059-fb3e-4819-a38a-57d7c7e20b58",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "a373cc1f-84ad-40be-b32b-f8bc01741e3a",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "111e8342-f773-4397-9521-2cbc0cea9858",
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
                    "netQuantity": 23,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 23,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 23,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "23947ce5-1c79-40f8-ba7d-c3b9b233597a",
            "lineItemId": "dd575059-fb3e-4819-a38a-57d7c7e20b58",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "a0830419-488e-4c80-9072-db04bcc010a0",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "f1e5b7ea-b6ff-4322-8c36-6b5ac43fa48a",
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
                    "netQuantity": 23,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 23,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 23,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "23947ce5-1c79-40f8-ba7d-c3b9b233597a",
            "lineItemId": "dd575059-fb3e-4819-a38a-57d7c7e20b58",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "8e796a1a-7954-41dd-9988-29cf01f17314",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "f053f418-7498-484a-b9a8-da89ceff877e",
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
                    "netQuantity": 23,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 23,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 23,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "23947ce5-1c79-40f8-ba7d-c3b9b233597a",
            "lineItemId": "dd575059-fb3e-4819-a38a-57d7c7e20b58",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "c3ddce32-b7a4-41fb-8d76-4f5dd9d8a999",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "d185a970-291f-4e68-af92-a7a2135a3e55",
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
                "Maximum Bid Count_10"
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
            "value": "10",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "TRAILER 23 MT_325b3525-d14b-4b77-8393-49844bd165a9",
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
            "value": "[{\"description\":\"YOUR BID RATE SHOULD     BE VALID FOR 7 DAYS FOR ORDER CONFIRMATION. \",\"type\":\"VALIDITY\",\"uuid\":null},{\"description\":\"AT LEAST 80% OF     ORDER QTY. TO BE PLACED AS PER THE ORDER ALLOTMENT DATE &     BALANCE TO BE COMPLETED ON VERY NEXT DAY / OR AVERAGE OF MINIMUM 10     NO.S VEH PLACEMENT TO BE MAINTAINED, UNLESS PLACEMENT IS HOLD BY     RML- OTHERWISE BID WILL BE AWARDED TO L2 OR L3 VENDOR OR FROM OPEN     MARKET  AND DIFFERENTIAL FREIGHT AMOUNT WILL BE DEBITED TO L1     VENDOR.  \",\"type\":\"PLACEMENT\",\"uuid\":null},{\"description\":\"HE FREIGHT SHALL BE RELEASED     WITHIN 60 DAYS FROM THE DATE OF SUBMISSION OF BILLS WITH US, ALONG     WITH ALL RELATED DOCUMENTS LIKE POD ETC IN ORIGINAL. \",\"type\":\"FREIGHT PAYMENT (with Reverse     Charge Mechanism(RCM) under GST )\",\"uuid\":null},{\"description\":\"TO CANCEL/ REJECT/ NEGOTIATE ANY OF THE BID (AS IT SEEMS FIT), AT     ANY STAGE WITHOUT ASSIGNING ANY REASON, WHAT SO EVER\",\"type\":\"MANAGEMENT RESERVES THE RIGHT\",\"uuid\":null},{\"description\":\"VENDOR     MUST REACH TO THE DESTINATIONS ON THE GIVEN TRANSIT DAYS. IN CASE OF     MORE THAN 24 HOURS DELAY IN TRANSIT WITHOUT PRIOR INTIMATION TO RML     THEN PENALTY @ RS 2000 PER DAY FOR TRUCK AND RS 3000 PER DAY WILL     LEVIED ON THE TRANSPORTER \",\"type\":\"TRANSIT TIME COMPLINACE\",\"uuid\":null},{\"description\":\"SHALL BE APPLICABLE AS PER THE POLICY SUBJECT TO AVAILABILITY OF     PROPER SUPPORTING DOCUMENTS. \",\"type\":\"VEHICLE DETENTION CHARGES\",\"uuid\":null},{\"description\":\"VEHICLE MUST HAVE WORKING CONDITION OF GPS (ONLY WITH WIRE DEVICE ALLOWED). IF DEVICE IS     PRE-INSTALLED THEN TRANSPORTER MUST PROVIDE API INTERGRATION TO RML     GPS PROVIDER/ PORTAL. IF GPS DEVICE IS NOT PRE-INSTALLED IN THE     VEHICLE, THEN TRANSPORTER MUST INSTALLED GPS DEVICES FROM THE VENDOR     NOMINATED BY RML. AFTER DELIVERY OF SHIPMENT TO RETURN GPS DEVICE TO     GPS SERVICE PROVIDER WILL BE SOLE RESPONSIBILITY OF TRNSPORTERS\",\"type\":\"GPS COMPLIANCE\",\"uuid\":null},{\"description\":\"A participant starting bid and final bid     shouldn't be more than 10 % for a particular auction. Any deviation     from the same will be considered void.\",\"type\":\"Following rule is implement transportation bidding\",\"uuid\":null},{\"description\":\"Transport bills of any month     work done to submit by 15th of next month. \",\"type\":\"Transport bills Submission\",\"uuid\":null},{\"description\":\"Detention charges (if any) to     be paid as follows: for Trucks - 28 hours detention free period,     thereafter Rs.1000/ Day, for Trailers- 53 hours detention free     period, thereafter Rs.1500/ Day. \",\"type\":\"Detention charges\",\"uuid\":null},{\"description\":\"TRANSPORTER’S SUPERVISOR OR     DRIVER MUST FOLLOW THE SAFETY RULE INSIDE THE PLANT OR IN TRANSIT AS     PER COMPANY POLICY.\",\"type\":\"SAFETY RULE\",\"uuid\":null},{\"description\":\"The driver must possess a valid driving license. The vehicle must have the following valid documents: Registration Certificate (RC) Pollution Under Control (PUC) Certificate Fitness Certificate Insurance\",\"type\":\"Vehicle Entry into the Plant for Loading\",\"uuid\":null}]",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "TRAILER 23 MT_b4fd0e35-55db-4d38-8c20-c1bf238d3e7d",
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
            "value": "[{\"description\":\"YOUR BID RATE SHOULD     BE VALID FOR 7 DAYS FOR ORDER CONFIRMATION. \",\"type\":\"VALIDITY\",\"uuid\":null},{\"description\":\"AT LEAST 80% OF     ORDER QTY. TO BE PLACED AS PER THE ORDER ALLOTMENT DATE &     BALANCE TO BE COMPLETED ON VERY NEXT DAY / OR AVERAGE OF MINIMUM 10     NO.S VEH PLACEMENT TO BE MAINTAINED, UNLESS PLACEMENT IS HOLD BY     RML- OTHERWISE BID WILL BE AWARDED TO L2 OR L3 VENDOR OR FROM OPEN     MARKET  AND DIFFERENTIAL FREIGHT AMOUNT WILL BE DEBITED TO L1     VENDOR.  \",\"type\":\"PLACEMENT\",\"uuid\":null},{\"description\":\"HE FREIGHT SHALL BE RELEASED     WITHIN 60 DAYS FROM THE DATE OF SUBMISSION OF BILLS WITH US, ALONG     WITH ALL RELATED DOCUMENTS LIKE POD ETC IN ORIGINAL. \",\"type\":\"FREIGHT PAYMENT (with Reverse     Charge Mechanism(RCM) under GST )\",\"uuid\":null},{\"description\":\"TO CANCEL/ REJECT/ NEGOTIATE ANY OF THE BID (AS IT SEEMS FIT), AT     ANY STAGE WITHOUT ASSIGNING ANY REASON, WHAT SO EVER\",\"type\":\"MANAGEMENT RESERVES THE RIGHT\",\"uuid\":null},{\"description\":\"VENDOR     MUST REACH TO THE DESTINATIONS ON THE GIVEN TRANSIT DAYS. IN CASE OF     MORE THAN 24 HOURS DELAY IN TRANSIT WITHOUT PRIOR INTIMATION TO RML     THEN PENALTY @ RS 2000 PER DAY FOR TRUCK AND RS 3000 PER DAY WILL     LEVIED ON THE TRANSPORTER \",\"type\":\"TRANSIT TIME COMPLINACE\",\"uuid\":null},{\"description\":\"SHALL BE APPLICABLE AS PER THE POLICY SUBJECT TO AVAILABILITY OF     PROPER SUPPORTING DOCUMENTS. \",\"type\":\"VEHICLE DETENTION CHARGES\",\"uuid\":null},{\"description\":\"VEHICLE MUST HAVE WORKING CONDITION OF GPS (ONLY WITH WIRE DEVICE ALLOWED). IF DEVICE IS     PRE-INSTALLED THEN TRANSPORTER MUST PROVIDE API INTERGRATION TO RML     GPS PROVIDER/ PORTAL. IF GPS DEVICE IS NOT PRE-INSTALLED IN THE     VEHICLE, THEN TRANSPORTER MUST INSTALLED GPS DEVICES FROM THE VENDOR     NOMINATED BY RML. AFTER DELIVERY OF SHIPMENT TO RETURN GPS DEVICE TO     GPS SERVICE PROVIDER WILL BE SOLE RESPONSIBILITY OF TRNSPORTERS\",\"type\":\"GPS COMPLIANCE\",\"uuid\":null},{\"description\":\"A participant starting bid and final bid     shouldn't be more than 10 % for a particular auction. Any deviation     from the same will be considered void.\",\"type\":\"Following rule is implement transportation bidding\",\"uuid\":null},{\"description\":\"Transport bills of any month     work done to submit by 15th of next month. \",\"type\":\"Transport bills Submission\",\"uuid\":null},{\"description\":\"Detention charges (if any) to     be paid as follows: for Trucks - 28 hours detention free period,     thereafter Rs.1000/ Day, for Trailers- 53 hours detention free     period, thereafter Rs.1500/ Day. \",\"type\":\"Detention charges\",\"uuid\":null},{\"description\":\"TRANSPORTER’S SUPERVISOR OR     DRIVER MUST FOLLOW THE SAFETY RULE INSIDE THE PLANT OR IN TRANSIT AS     PER COMPANY POLICY.\",\"type\":\"SAFETY RULE\",\"uuid\":null},{\"description\":\"The driver must possess a valid driving license. The vehicle must have the following valid documents: Registration Certificate (RC) Pollution Under Control (PUC) Certificate Fitness Certificate Insurance\",\"type\":\"Vehicle Entry into the Plant for Loading\",\"uuid\":null}]",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "TRAILER 23 MT_0051de78-577e-457e-8e99-23435e4f60ee",
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
            "value": "[{\"description\":\"YOUR BID RATE SHOULD     BE VALID FOR 7 DAYS FOR ORDER CONFIRMATION. \",\"type\":\"VALIDITY\",\"uuid\":null},{\"description\":\"AT LEAST 80% OF     ORDER QTY. TO BE PLACED AS PER THE ORDER ALLOTMENT DATE &     BALANCE TO BE COMPLETED ON VERY NEXT DAY / OR AVERAGE OF MINIMUM 10     NO.S VEH PLACEMENT TO BE MAINTAINED, UNLESS PLACEMENT IS HOLD BY     RML- OTHERWISE BID WILL BE AWARDED TO L2 OR L3 VENDOR OR FROM OPEN     MARKET  AND DIFFERENTIAL FREIGHT AMOUNT WILL BE DEBITED TO L1     VENDOR.  \",\"type\":\"PLACEMENT\",\"uuid\":null},{\"description\":\"HE FREIGHT SHALL BE RELEASED     WITHIN 60 DAYS FROM THE DATE OF SUBMISSION OF BILLS WITH US, ALONG     WITH ALL RELATED DOCUMENTS LIKE POD ETC IN ORIGINAL. \",\"type\":\"FREIGHT PAYMENT (with Reverse     Charge Mechanism(RCM) under GST )\",\"uuid\":null},{\"description\":\"TO CANCEL/ REJECT/ NEGOTIATE ANY OF THE BID (AS IT SEEMS FIT), AT     ANY STAGE WITHOUT ASSIGNING ANY REASON, WHAT SO EVER\",\"type\":\"MANAGEMENT RESERVES THE RIGHT\",\"uuid\":null},{\"description\":\"VENDOR     MUST REACH TO THE DESTINATIONS ON THE GIVEN TRANSIT DAYS. IN CASE OF     MORE THAN 24 HOURS DELAY IN TRANSIT WITHOUT PRIOR INTIMATION TO RML     THEN PENALTY @ RS 2000 PER DAY FOR TRUCK AND RS 3000 PER DAY WILL     LEVIED ON THE TRANSPORTER \",\"type\":\"TRANSIT TIME COMPLINACE\",\"uuid\":null},{\"description\":\"SHALL BE APPLICABLE AS PER THE POLICY SUBJECT TO AVAILABILITY OF     PROPER SUPPORTING DOCUMENTS. \",\"type\":\"VEHICLE DETENTION CHARGES\",\"uuid\":null},{\"description\":\"VEHICLE MUST HAVE WORKING CONDITION OF GPS (ONLY WITH WIRE DEVICE ALLOWED). IF DEVICE IS     PRE-INSTALLED THEN TRANSPORTER MUST PROVIDE API INTERGRATION TO RML     GPS PROVIDER/ PORTAL. IF GPS DEVICE IS NOT PRE-INSTALLED IN THE     VEHICLE, THEN TRANSPORTER MUST INSTALLED GPS DEVICES FROM THE VENDOR     NOMINATED BY RML. AFTER DELIVERY OF SHIPMENT TO RETURN GPS DEVICE TO     GPS SERVICE PROVIDER WILL BE SOLE RESPONSIBILITY OF TRNSPORTERS\",\"type\":\"GPS COMPLIANCE\",\"uuid\":null},{\"description\":\"A participant starting bid and final bid     shouldn't be more than 10 % for a particular auction. Any deviation     from the same will be considered void.\",\"type\":\"Following rule is implement transportation bidding\",\"uuid\":null},{\"description\":\"Transport bills of any month     work done to submit by 15th of next month. \",\"type\":\"Transport bills Submission\",\"uuid\":null},{\"description\":\"Detention charges (if any) to     be paid as follows: for Trucks - 28 hours detention free period,     thereafter Rs.1000/ Day, for Trailers- 53 hours detention free     period, thereafter Rs.1500/ Day. \",\"type\":\"Detention charges\",\"uuid\":null},{\"description\":\"TRANSPORTER’S SUPERVISOR OR     DRIVER MUST FOLLOW THE SAFETY RULE INSIDE THE PLANT OR IN TRANSIT AS     PER COMPANY POLICY.\",\"type\":\"SAFETY RULE\",\"uuid\":null},{\"description\":\"The driver must possess a valid driving license. The vehicle must have the following valid documents: Registration Certificate (RC) Pollution Under Control (PUC) Certificate Fitness Certificate Insurance\",\"type\":\"Vehicle Entry into the Plant for Loading\",\"uuid\":null}]",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "TRAILER 23 MT_4c56d040-51a9-4066-8464-ab03059146fd",
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
            "value": "[{\"description\":\"YOUR BID RATE SHOULD     BE VALID FOR 7 DAYS FOR ORDER CONFIRMATION. \",\"type\":\"VALIDITY\",\"uuid\":null},{\"description\":\"AT LEAST 80% OF     ORDER QTY. TO BE PLACED AS PER THE ORDER ALLOTMENT DATE &     BALANCE TO BE COMPLETED ON VERY NEXT DAY / OR AVERAGE OF MINIMUM 10     NO.S VEH PLACEMENT TO BE MAINTAINED, UNLESS PLACEMENT IS HOLD BY     RML- OTHERWISE BID WILL BE AWARDED TO L2 OR L3 VENDOR OR FROM OPEN     MARKET  AND DIFFERENTIAL FREIGHT AMOUNT WILL BE DEBITED TO L1     VENDOR.  \",\"type\":\"PLACEMENT\",\"uuid\":null},{\"description\":\"HE FREIGHT SHALL BE RELEASED     WITHIN 60 DAYS FROM THE DATE OF SUBMISSION OF BILLS WITH US, ALONG     WITH ALL RELATED DOCUMENTS LIKE POD ETC IN ORIGINAL. \",\"type\":\"FREIGHT PAYMENT (with Reverse     Charge Mechanism(RCM) under GST )\",\"uuid\":null},{\"description\":\"TO CANCEL/ REJECT/ NEGOTIATE ANY OF THE BID (AS IT SEEMS FIT), AT     ANY STAGE WITHOUT ASSIGNING ANY REASON, WHAT SO EVER\",\"type\":\"MANAGEMENT RESERVES THE RIGHT\",\"uuid\":null},{\"description\":\"VENDOR     MUST REACH TO THE DESTINATIONS ON THE GIVEN TRANSIT DAYS. IN CASE OF     MORE THAN 24 HOURS DELAY IN TRANSIT WITHOUT PRIOR INTIMATION TO RML     THEN PENALTY @ RS 2000 PER DAY FOR TRUCK AND RS 3000 PER DAY WILL     LEVIED ON THE TRANSPORTER \",\"type\":\"TRANSIT TIME COMPLINACE\",\"uuid\":null},{\"description\":\"SHALL BE APPLICABLE AS PER THE POLICY SUBJECT TO AVAILABILITY OF     PROPER SUPPORTING DOCUMENTS. \",\"type\":\"VEHICLE DETENTION CHARGES\",\"uuid\":null},{\"description\":\"VEHICLE MUST HAVE WORKING CONDITION OF GPS (ONLY WITH WIRE DEVICE ALLOWED). IF DEVICE IS     PRE-INSTALLED THEN TRANSPORTER MUST PROVIDE API INTERGRATION TO RML     GPS PROVIDER/ PORTAL. IF GPS DEVICE IS NOT PRE-INSTALLED IN THE     VEHICLE, THEN TRANSPORTER MUST INSTALLED GPS DEVICES FROM THE VENDOR     NOMINATED BY RML. AFTER DELIVERY OF SHIPMENT TO RETURN GPS DEVICE TO     GPS SERVICE PROVIDER WILL BE SOLE RESPONSIBILITY OF TRNSPORTERS\",\"type\":\"GPS COMPLIANCE\",\"uuid\":null},{\"description\":\"A participant starting bid and final bid     shouldn't be more than 10 % for a particular auction. Any deviation     from the same will be considered void.\",\"type\":\"Following rule is implement transportation bidding\",\"uuid\":null},{\"description\":\"Transport bills of any month     work done to submit by 15th of next month. \",\"type\":\"Transport bills Submission\",\"uuid\":null},{\"description\":\"Detention charges (if any) to     be paid as follows: for Trucks - 28 hours detention free period,     thereafter Rs.1000/ Day, for Trailers- 53 hours detention free     period, thereafter Rs.1500/ Day. \",\"type\":\"Detention charges\",\"uuid\":null},{\"description\":\"TRANSPORTER’S SUPERVISOR OR     DRIVER MUST FOLLOW THE SAFETY RULE INSIDE THE PLANT OR IN TRANSIT AS     PER COMPANY POLICY.\",\"type\":\"SAFETY RULE\",\"uuid\":null},{\"description\":\"The driver must possess a valid driving license. The vehicle must have the following valid documents: Registration Certificate (RC) Pollution Under Control (PUC) Certificate Fitness Certificate Insurance\",\"type\":\"Vehicle Entry into the Plant for Loading\",\"uuid\":null}]",
            "isRemark": false
        },
        {
            "indexedValue": [],
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
            "value": "[]",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "TRAILER 23 MT_8ce0b3c7-7892-41d6-826d-8020cae69af7",
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
            "value": "[{\"description\":\"YOUR BID RATE SHOULD     BE VALID FOR 7 DAYS FOR ORDER CONFIRMATION. \",\"type\":\"VALIDITY\",\"uuid\":null},{\"description\":\"AT LEAST 80% OF     ORDER QTY. TO BE PLACED AS PER THE ORDER ALLOTMENT DATE &     BALANCE TO BE COMPLETED ON VERY NEXT DAY / OR AVERAGE OF MINIMUM 10     NO.S VEH PLACEMENT TO BE MAINTAINED, UNLESS PLACEMENT IS HOLD BY     RML- OTHERWISE BID WILL BE AWARDED TO L2 OR L3 VENDOR OR FROM OPEN     MARKET  AND DIFFERENTIAL FREIGHT AMOUNT WILL BE DEBITED TO L1     VENDOR.  \",\"type\":\"PLACEMENT\",\"uuid\":null},{\"description\":\"HE FREIGHT SHALL BE RELEASED     WITHIN 60 DAYS FROM THE DATE OF SUBMISSION OF BILLS WITH US, ALONG     WITH ALL RELATED DOCUMENTS LIKE POD ETC IN ORIGINAL. \",\"type\":\"FREIGHT PAYMENT (with Reverse     Charge Mechanism(RCM) under GST )\",\"uuid\":null},{\"description\":\"TO CANCEL/ REJECT/ NEGOTIATE ANY OF THE BID (AS IT SEEMS FIT), AT     ANY STAGE WITHOUT ASSIGNING ANY REASON, WHAT SO EVER\",\"type\":\"MANAGEMENT RESERVES THE RIGHT\",\"uuid\":null},{\"description\":\"VENDOR     MUST REACH TO THE DESTINATIONS ON THE GIVEN TRANSIT DAYS. IN CASE OF     MORE THAN 24 HOURS DELAY IN TRANSIT WITHOUT PRIOR INTIMATION TO RML     THEN PENALTY @ RS 2000 PER DAY FOR TRUCK AND RS 3000 PER DAY WILL     LEVIED ON THE TRANSPORTER \",\"type\":\"TRANSIT TIME COMPLINACE\",\"uuid\":null},{\"description\":\"SHALL BE APPLICABLE AS PER THE POLICY SUBJECT TO AVAILABILITY OF     PROPER SUPPORTING DOCUMENTS. \",\"type\":\"VEHICLE DETENTION CHARGES\",\"uuid\":null},{\"description\":\"VEHICLE MUST HAVE WORKING CONDITION OF GPS (ONLY WITH WIRE DEVICE ALLOWED). IF DEVICE IS     PRE-INSTALLED THEN TRANSPORTER MUST PROVIDE API INTERGRATION TO RML     GPS PROVIDER/ PORTAL. IF GPS DEVICE IS NOT PRE-INSTALLED IN THE     VEHICLE, THEN TRANSPORTER MUST INSTALLED GPS DEVICES FROM THE VENDOR     NOMINATED BY RML. AFTER DELIVERY OF SHIPMENT TO RETURN GPS DEVICE TO     GPS SERVICE PROVIDER WILL BE SOLE RESPONSIBILITY OF TRNSPORTERS\",\"type\":\"GPS COMPLIANCE\",\"uuid\":null},{\"description\":\"A participant starting bid and final bid     shouldn't be more than 10 % for a particular auction. Any deviation     from the same will be considered void.\",\"type\":\"Following rule is implement transportation bidding\",\"uuid\":null},{\"description\":\"Transport bills of any month     work done to submit by 15th of next month. \",\"type\":\"Transport bills Submission\",\"uuid\":null},{\"description\":\"Detention charges (if any) to     be paid as follows: for Trucks - 28 hours detention free period,     thereafter Rs.1000/ Day, for Trailers- 53 hours detention free     period, thereafter Rs.1500/ Day. \",\"type\":\"Detention charges\",\"uuid\":null},{\"description\":\"TRANSPORTER’S SUPERVISOR OR     DRIVER MUST FOLLOW THE SAFETY RULE INSIDE THE PLANT OR IN TRANSIT AS     PER COMPANY POLICY.\",\"type\":\"SAFETY RULE\",\"uuid\":null},{\"description\":\"The driver must possess a valid driving license. The vehicle must have the following valid documents: Registration Certificate (RC) Pollution Under Control (PUC) Certificate Fitness Certificate Insurance\",\"type\":\"Vehicle Entry into the Plant for Loading\",\"uuid\":null}]",
            "isRemark": false
        },
        {
            "indexedValue": [],
            "fieldKey": "TRAILER 23 MT_d360b164-c84e-4b25-baf9-f04b10b3cbde",
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
            "value": "[{\"description\":\"YOUR BID RATE SHOULD     BE VALID FOR 7 DAYS FOR ORDER CONFIRMATION. \",\"type\":\"VALIDITY\",\"uuid\":null},{\"description\":\"AT LEAST 80% OF     ORDER QTY. TO BE PLACED AS PER THE ORDER ALLOTMENT DATE &     BALANCE TO BE COMPLETED ON VERY NEXT DAY / OR AVERAGE OF MINIMUM 10     NO.S VEH PLACEMENT TO BE MAINTAINED, UNLESS PLACEMENT IS HOLD BY     RML- OTHERWISE BID WILL BE AWARDED TO L2 OR L3 VENDOR OR FROM OPEN     MARKET  AND DIFFERENTIAL FREIGHT AMOUNT WILL BE DEBITED TO L1     VENDOR.  \",\"type\":\"PLACEMENT\",\"uuid\":null},{\"description\":\"HE FREIGHT SHALL BE RELEASED     WITHIN 60 DAYS FROM THE DATE OF SUBMISSION OF BILLS WITH US, ALONG     WITH ALL RELATED DOCUMENTS LIKE POD ETC IN ORIGINAL. \",\"type\":\"FREIGHT PAYMENT (with Reverse     Charge Mechanism(RCM) under GST )\",\"uuid\":null},{\"description\":\"TO CANCEL/ REJECT/ NEGOTIATE ANY OF THE BID (AS IT SEEMS FIT), AT     ANY STAGE WITHOUT ASSIGNING ANY REASON, WHAT SO EVER\",\"type\":\"MANAGEMENT RESERVES THE RIGHT\",\"uuid\":null},{\"description\":\"VENDOR     MUST REACH TO THE DESTINATIONS ON THE GIVEN TRANSIT DAYS. IN CASE OF     MORE THAN 24 HOURS DELAY IN TRANSIT WITHOUT PRIOR INTIMATION TO RML     THEN PENALTY @ RS 2000 PER DAY FOR TRUCK AND RS 3000 PER DAY WILL     LEVIED ON THE TRANSPORTER \",\"type\":\"TRANSIT TIME COMPLINACE\",\"uuid\":null},{\"description\":\"SHALL BE APPLICABLE AS PER THE POLICY SUBJECT TO AVAILABILITY OF     PROPER SUPPORTING DOCUMENTS. \",\"type\":\"VEHICLE DETENTION CHARGES\",\"uuid\":null},{\"description\":\"VEHICLE MUST HAVE WORKING CONDITION OF GPS (ONLY WITH WIRE DEVICE ALLOWED). IF DEVICE IS     PRE-INSTALLED THEN TRANSPORTER MUST PROVIDE API INTERGRATION TO RML     GPS PROVIDER/ PORTAL. IF GPS DEVICE IS NOT PRE-INSTALLED IN THE     VEHICLE, THEN TRANSPORTER MUST INSTALLED GPS DEVICES FROM THE VENDOR     NOMINATED BY RML. AFTER DELIVERY OF SHIPMENT TO RETURN GPS DEVICE TO     GPS SERVICE PROVIDER WILL BE SOLE RESPONSIBILITY OF TRNSPORTERS\",\"type\":\"GPS COMPLIANCE\",\"uuid\":null},{\"description\":\"A participant starting bid and final bid     shouldn't be more than 10 % for a particular auction. Any deviation     from the same will be considered void.\",\"type\":\"Following rule is implement transportation bidding\",\"uuid\":null},{\"description\":\"Transport bills of any month     work done to submit by 15th of next month. \",\"type\":\"Transport bills Submission\",\"uuid\":null},{\"description\":\"Detention charges (if any) to     be paid as follows: for Trucks - 28 hours detention free period,     thereafter Rs.1000/ Day, for Trailers- 53 hours detention free     period, thereafter Rs.1500/ Day. \",\"type\":\"Detention charges\",\"uuid\":null},{\"description\":\"TRANSPORTER’S SUPERVISOR OR     DRIVER MUST FOLLOW THE SAFETY RULE INSIDE THE PLANT OR IN TRANSIT AS     PER COMPANY POLICY.\",\"type\":\"SAFETY RULE\",\"uuid\":null},{\"description\":\"The driver must possess a valid driving license. The vehicle must have the following valid documents: Registration Certificate (RC) Pollution Under Control (PUC) Certificate Fitness Certificate Insurance\",\"type\":\"Vehicle Entry into the Plant for Loading\",\"uuid\":null}]",
            "isRemark": false
        }
    ],
    "origin": {
        "hubId": null,
        "boundary": null,
        "address": "Kolaghat - Pansila - Cuttack Road, Khatranga, West Bengal 721301, India",
        "accessibility": "public",
        "addedBy": "321887b6-8f43-4299-8b75-47d3ed039d4e",
        "center": {
            "latitude": 22.32430396437423,
            "longitude": 87.40121501714329
        },
        "suggestedRadius": 0,
        "isOwned": false,
        "centerCoordinates": [
            87.39822688015033,
            22.32408342195501
        ],
        "placeId": "a5abc237-ba48-4142-abd2-7164690fc57e",
        "geoJsonBoundry": {
            "coordinates": [
                [
                    [
                        87.39665145545963,
                        22.326040563800277
                    ],
                    [
                        87.39615316392326,
                        22.327987065273916
                    ],
                    [
                        87.39857871733953,
                        22.327927502217708
                    ],
                    [
                        87.39982278434142,
                        22.328185603130272
                    ],
                    [
                        87.40160463746791,
                        22.32836350268331
                    ],
                    [
                        87.40431904792786,
                        22.328104859517925
                    ],
                    [
                        87.40507006645203,
                        22.325812298456064
                    ],
                    [
                        87.40532755851747,
                        22.323857140862042
                    ],
                    [
                        87.40511298179628,
                        22.322060753644823
                    ],
                    [
                        87.40480184555055,
                        22.319867343422207
                    ],
                    [
                        87.40440487861633,
                        22.31818008133157
                    ],
                    [
                        87.40123987197876,
                        22.318795438104086
                    ],
                    [
                        87.4001883564235,
                        22.321057649081943
                    ],
                    [
                        87.398298435895,
                        22.322279100287037
                    ],
                    [
                        87.39665145545963,
                        22.326040563800277
                    ]
                ]
            ],
            "type": "Polygon"
        },
        "externalId": "P1104",
        "source": "FRETRON",
        "places": null,
        "viewport": null,
        "district": null,
        "name": "Rashmi Metaliks Limited-RML6",
        "state": null,
        "category": "Warehouse",
        "subDistrict": null,
        "controllingBranchId": null
    },
    "destination": {
        "hubId": null,
        "boundary": null,
        "address": "Kochi - Kerala",
        "accessibility": "private",
        "addedBy": "321887b6-8f43-4299-8b75-47d3ed039d4e",
        "center": {
            "latitude": 10.261597957493375,
            "longitude": 76.35182847190381
        },
        "suggestedRadius": 1000,
        "isOwned": null,
        "centerCoordinates": [
            76.35182847190381,
            10.261597957493375
        ],
        "placeId": "eafe9604-5334-4201-9985-a23c24e0c1fd",
        "geoJsonBoundry": null,
        "externalId": "21001868",
        "source": "FRETRON",
        "places": [],
        "viewport": null,
        "district": "KOCHI,KERALA",
        "name": "KOCHI,KERALA-21001868",
        "state": "",
        "category": "Unloading Point",
        "subDistrict": "680308",
        "controllingBranchId": null
    },
    "updates": {
        "traceID": "ac9c3261-c370-42b8-955d-2378cdc098ac",
        "resourceId": "037752b8-09da-40b1-989d-40d3fa061bf1",
        "updatedBy": "USER",
        "changes": [],
        "sourceOfInformation": "Portal",
        "description": "Update Bid, Amount 7740.0 for UMA ROAD CARRIER PVT.LTD., vehicleType TRAILER 23 MT.",
        "forwardReasons": [
            "auction.closed.status.event"
        ],
        "userId": "ce50cbc7-06c5-46c3-bc19-ffe98b643871",
        "uuid": "4b90db34-2c45-4dcd-ac08-d5888c55a347",
        "revision": 1,
        "time": 1739705442087,
        "forwardedFrom": "28006b2a-4817-488f-8595-726320cdb78e",
        "resourceType": "Auction",
        "updateType": null
    },
    "orgId": "321887b6-8f43-4299-8b75-47d3ed039d4e",
    "freightType": "perMT",
    "alternateDestinations": [],
    "completedRounds": [
        {
            "roundNumber": 1,
            "startTime": 1739701837000,
            "endTime": 1739705437000,
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
            "netQuantity": 115,
            "moisture": null,
            "claimQuantity": null,
            "unitOfMeasurment": "Metric Tonnes",
            "standardQuantity": 115,
            "actualLoadedQuantity": null,
            "measurmentType": "weight",
            "grossQuantity": 115,
            "shortage": null,
            "temperature": null,
            "plannedLoadQuantity": null,
            "frieghtDeductableQuantity": null
        },
        "containers": null,
        "trucks": null
    },
    "isAllowCounterOffer": false,
    "auctionType": "Planned",
    "allowedMaterial": [
        "DI PIPE"
    ],
    "createDate": 1739699250238,
    "routeDistance": null,
    "externalId": null,
    "placedQuantity": 0,
    "statusDescription": null,
    "placementDate": 1739816940000,
    "round": {
        "roundNumber": 1,
        "startTime": 1739701837000,
        "endTime": 1739705437000,
        "status": "Completed"
    },
    "isNegotiable": true,
    "allocatedVehicles": 0,
    "secondaryStatus": "CLOSE",
    "numberOfBidRequiredToMarkWON": 1,
    "isCritical": null,
    "remarks": [
        "5 TRAILER X 23 MT ( WITH HEIGHT SIDE ) TRANSPORTATION OF DI PIPE FROM KHARAGPUR TO THEVARA, COCHIN, KERALA \n\n(BASE PRICE: 8000)",
        "5 TRAILER X 23 MT ( WITH HEIGHT SIDE ) TRANSPORTATION OF DI PIPE FROM KHARAGPUR TO THEVARA, COCHIN, KERALA\n\nBASE PRICE: 8000"
    ]
}
console.log(auction.orderId)
console.log(auction.updates.forwardReasons.join(', '))

let partnerIndex = "bpartners"
const partnerQuery = (uuids) => {
    return {
        "_source": ["contacts", "name", "type", "uuid"],
        "size": 500,
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

function btoa(str) {
    return Buffer.from(str).toString('base64');
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

async function getTokenForVendorPortal(bpId, partnerType) {
    try {
        let url = `${FRT_PUB_BASE_URL}/users/v1/user/agent/token?bpId=${bpId}&partnerType=${partnerType}`
        let options = {
            method: "GET",
            uri: url,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        }
        let response = await rp(options)
        if (response?.status != 200) {
            console.log("Error in getting vendor portal token")
        }
        return response.data
    } catch (err) {
        console.error("Error getting vendor portal token:", err.message)
    }
    return null
}

async function sendEmail(subject, html, jsonArr, to, cc = []) {
    cc.push("sahil.aggarwal@fretron.com")
    let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/json/email`;
    let payload = {
        data: jsonArr,
        emailInfo: {
            to: to,
            cc: cc,
            subject: subject,
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
            console.log(`Sending Json to Excel email api res error to ${to.join(', ')} : ${res.error}`);
        } else if (res.status == 200) {
            return "Mail Sent"
        }
    } catch (e) {
        console.log(`Catched Error in sending json to excel email to ${to.join(', ')}: ${e.message}`);
    }
}

async function createAuctionDataObject(auction, bpPortalToken) {
    let portalLink = "NA"
    if (bpPortalToken) {
        portalLink = `https://portal.fretron.com/auth?_token=${bpPortalToken}`
    }
    return {
        'Order Numbers': auction?.orderId,
        'Dispatch from Location': auction?.origin?.name,
        'Destination': auction?.destination?.name,
        'Required Total Trucks': auction?.numberOfVehicles ?? 1,
        'Total Tonnage': auction?.totalQuantity,
        'Vehicle Types': auction?.allowedVehicleTypes.join(" | "),
        'Bidding Link': portalLink
    };
}

async function createExcelReportConsolidated(auction, forwardReasons) {
    try {
        const defaultRecipients = [
            "sahil.aggarwal@fretron.com",
            "monu.khan@fretron.com",
            "sagar.soni@fretron.com"
        ];
        if (forwardReasons.includes(INVITE_EVENT) ||
            forwardReasons.includes(CREATE_EVENT) ||
            forwardReasons.includes(AUCTION_OPEN_EVENT)) {
            let bPartners = []
            if (forwardReasons.includes(CREATE_EVENT) || forwardReasons.includes(AUCTION_OPEN_EVENT)) {
                bPartners = await getDataFromElastic(partnerIndex, partnerQuery(auction.allowedTransporters));
            } else if (forwardReasons.includes(INVITE_EVENT)) {
                bPartners = await getDataFromElastic(partnerIndex, partnerQuery([auction.updates.forwardedFrom]))
            }
            // Send individual emails to each business partner
            for (const bp of bPartners) {
                const bpPortalToken = await getTokenForVendorPortal(bp.uuid, bp.type);
                const data = await createAuctionDataObject(auction, bpPortalToken);
                const partnerName = bp?.name || "Valued Partner";
                const partnerEmails = bp?.contacts?.flatMap(contact => contact?.emails || []) || [];

                if (partnerEmails.length > 0) {
                    const to = [...new Set([...partnerEmails, ...defaultRecipients])];
                    // const to = ["sahil.aggarwal@fretron.com"]

                    if (data) {
                        let subject = `Invitation for Bidding on Outbound Freight Requirement`
                        let content = convertJSONtoHTMLInvite(data, partnerName);
                        let emailRes = await sendEmail(subject, content, [data], to);
                        if (emailRes == "Mail Sent") {
                            console.log(`Mail Sent to ${partnerName}: ${partnerEmails.join(', ')}`)
                        }
                    }
                } else {
                    console.log(`No Email Found for ${partnerName}`)
                }
            }
        }
        if (forwardReasons.includes(AUCTION_CLOSED_EVENT)) {
            let subject = `Auction (#${auction.orderId}) Ended - Winner Selection Required for ${auction?.destination?.name}`;
            let linkJson = {
                "orderId": auction.uuid,
                "orderNo": auction.orderId
            }
            let to = ["Gyanendra.Jha@rashmigroup.com", ...defaultRecipients]
            // let to = ["sahil.aggarwal@fretron.com"]
            let portalLink = `https://alpha.fretron.com/tracknet/sales/bidding/detail?data=${btoa(JSON.stringify(linkJson))}`
            let data = await createAuctionDataObject(auction, portalLink);
            let content = convertJSONtoHTMLBidAccepted(auction.orderId, portalLink);
            let emailRes = await sendEmail(subject, content, [data], to);
            if (emailRes == "Mail Sent") {
                console.log(`Mail Sent to Gyanendra.Jha@rashmigroup.com`)
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
                        <td style="border: 1px solid #ddd; padding: 8px; color: #333;">
                            ${header === 'Bidding Link'
            ? jsonData[header] === 'NA'
                ? 'NA'
                : `<a href="${jsonData[header]}" style="color: #0066cc;">Portal Link</a>`
            : jsonData[header] || ''}
                        </td>
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

function convertJSONtoHTMLBidAccepted(auctionNum, portalLink) {

    let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div style="font-family: Arial, sans-serif;">
            <p>Dear Sir,</p>
            
            <p>The auction ${auctionNum} has now concluded as per the schedule and requires you to mark the winner.</p>
            
            <p>Please review the details and select the winner using the <a href="${portalLink}" style="color: #0066cc;">Auction Link</a></p>

            <p>Your prompt action would be greatly appreciated. Let us know if you need any further information.</p>
            
            <p>Best regards</p>
        </div>
    </body>
    </html>`;

    return htmlContent;
}



createExcelReportConsolidated(auction, auction.updates.forwardReasons);
