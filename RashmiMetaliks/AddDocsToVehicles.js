const rp = require("request-promise");
const BASE_URL = "https://apis.fretron.com";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIwMjA5NzQsInVzZXJJZCI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm9yZ0lkIjoiMjA4YWZkYWQtZGVhYi00Yzc2LThkNDktMzBhNzBmNDIwZjM1IiwibmFtZSI6IkJvdCB0b2tlbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.g5BbII_VTjjjucZL-VhW5gznhBLVdxa5dqcStjFCQM0";

const vehicleData = [
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "5cf159a1-57df-4223-a16c-7b3c7bfac7c4",
        "_score": 8.441172,
        "_source": {
            "uuid": "5cf159a1-57df-4223-a16c-7b3c7bfac7c4",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55M2821"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "63152cfb-a5d0-4ae4-8ae0-0d6be8c0e078",
        "_score": 8.441172,
        "_source": {
            "uuid": "63152cfb-a5d0-4ae4-8ae0-0d6be8c0e078",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38S3348"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "9c6681da-7635-48ad-98e8-6babeb5eb7cd",
        "_score": 8.441172,
        "_source": {
            "uuid": "9c6681da-7635-48ad-98e8-6babeb5eb7cd",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38W0858"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "00d3d2cb-6e70-4b88-a0a6-fb3d87243065",
        "_score": 8.441172,
        "_source": {
            "uuid": "00d3d2cb-6e70-4b88-a0a6-fb3d87243065",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55M2814"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "8f7b8d53-523e-4f29-8e8e-11ccb2cbdc31",
        "_score": 8.441172,
        "_source": {
            "uuid": "8f7b8d53-523e-4f29-8e8e-11ccb2cbdc31",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AB7390"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "b9214f17-9ab0-4f4f-af88-0e10f2e9eb38",
        "_score": 8.441172,
        "_source": {
            "uuid": "b9214f17-9ab0-4f4f-af88-0e10f2e9eb38",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38Z0363"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "69ed14f5-9e4a-48b6-9fa7-0df8125f793c",
        "_score": 8.441172,
        "_source": {
            "uuid": "69ed14f5-9e4a-48b6-9fa7-0df8125f793c",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38U7759"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "1913f030-aafc-4d9e-9a50-8e73439db632",
        "_score": 8.441172,
        "_source": {
            "uuid": "1913f030-aafc-4d9e-9a50-8e73439db632",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55Y8477"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "cbf3c8a7-9803-4b1e-9a6e-6226cbe0980f",
        "_score": 8.441172,
        "_source": {
            "uuid": "cbf3c8a7-9803-4b1e-9a6e-6226cbe0980f",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38U5807"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e1f4cf1c-a971-4770-bddb-761aa2f11791",
        "_score": 8.441172,
        "_source": {
            "uuid": "e1f4cf1c-a971-4770-bddb-761aa2f11791",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55W7177"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a6e31ca3-74c8-4e3c-a726-a60cf055e7a6",
        "_score": 8.441172,
        "_source": {
            "uuid": "a6e31ca3-74c8-4e3c-a726-a60cf055e7a6",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38R6892"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a4a3da7e-8dcb-4ff5-b7ca-fc2d50972cf5",
        "_score": 8.441172,
        "_source": {
            "uuid": "a4a3da7e-8dcb-4ff5-b7ca-fc2d50972cf5",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38R6895"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "7fb7d1b3-cd33-4dbe-9c95-ce54a1fffd81",
        "_score": 8.40249,
        "_source": {
            "uuid": "7fb7d1b3-cd33-4dbe-9c95-ce54a1fffd81",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38X9566"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "65bc53d1-f447-45ac-8e02-32a304ba3aeb",
        "_score": 8.40249,
        "_source": {
            "uuid": "65bc53d1-f447-45ac-8e02-32a304ba3aeb",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38S3346"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "de59f807-7692-4c6d-8187-3a3c936b0b62",
        "_score": 8.40249,
        "_source": {
            "uuid": "de59f807-7692-4c6d-8187-3a3c936b0b62",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38S3349"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "c1452f55-c0bf-4378-8533-f85b022bfc0a",
        "_score": 8.40249,
        "_source": {
            "uuid": "c1452f55-c0bf-4378-8533-f85b022bfc0a",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38Z8611"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "968cdf03-716b-4d83-b487-121c8c030f46",
        "_score": 8.40249,
        "_source": {
            "uuid": "968cdf03-716b-4d83-b487-121c8c030f46",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38U7600"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "5e091683-e827-45cf-91f0-b40c5a7c6fea",
        "_score": 8.40249,
        "_source": {
            "uuid": "5e091683-e827-45cf-91f0-b40c5a7c6fea",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AB6088"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "c42afd95-346e-4da8-916b-47b5672bcfba",
        "_score": 8.40249,
        "_source": {
            "uuid": "c42afd95-346e-4da8-916b-47b5672bcfba",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38V7024"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "ce28bdc6-9b0a-4a61-ae31-7635fbf638ef",
        "_score": 8.40249,
        "_source": {
            "uuid": "ce28bdc6-9b0a-4a61-ae31-7635fbf638ef",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55W3777"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3317e185-25a9-4499-8cc6-a7758cb2e1c3",
        "_score": 8.40249,
        "_source": {
            "uuid": "3317e185-25a9-4499-8cc6-a7758cb2e1c3",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AB5614"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "2a747c51-8627-4556-a82c-a565944012d9",
        "_score": 8.40249,
        "_source": {
            "uuid": "2a747c51-8627-4556-a82c-a565944012d9",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55V0432"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "21da82b2-3bb3-42b3-907c-b5610e85b39c",
        "_score": 8.40249,
        "_source": {
            "uuid": "21da82b2-3bb3-42b3-907c-b5610e85b39c",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38R6894"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "09a69236-0a91-4d78-b12a-bb5dfd57df89",
        "_score": 8.40249,
        "_source": {
            "uuid": "09a69236-0a91-4d78-b12a-bb5dfd57df89",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55V5373"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "52a08ecb-6b8d-438f-a24d-32426169809f",
        "_score": 8.40249,
        "_source": {
            "uuid": "52a08ecb-6b8d-438f-a24d-32426169809f",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AH1186"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3937a040-35f1-422b-ad73-cd5201c1cb1e",
        "_score": 8.40249,
        "_source": {
            "uuid": "3937a040-35f1-422b-ad73-cd5201c1cb1e",
            "vehicle": {
                "vehicleRegistrationNumber": "UP64AT0187"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "4d0b7c45-4051-4ea9-84b7-ea483b804254",
        "_score": 8.40249,
        "_source": {
            "uuid": "4d0b7c45-4051-4ea9-84b7-ea483b804254",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AG0438"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "163b1e3c-5cc4-49d9-a57f-2cef33631ed6",
        "_score": 8.40249,
        "_source": {
            "uuid": "163b1e3c-5cc4-49d9-a57f-2cef33631ed6",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55T6544"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "34c1bbc8-2d02-453f-bbdf-4a33b495644d",
        "_score": 8.40249,
        "_source": {
            "uuid": "34c1bbc8-2d02-453f-bbdf-4a33b495644d",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38W8894"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "ebd66307-b99d-47ca-a5b6-d2d4c61187b1",
        "_score": 8.3586445,
        "_source": {
            "uuid": "ebd66307-b99d-47ca-a5b6-d2d4c61187b1",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AH4332"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e872119f-5288-4a07-9811-e3472c9334f8",
        "_score": 8.3586445,
        "_source": {
            "uuid": "e872119f-5288-4a07-9811-e3472c9334f8",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38V3110"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "bc86f768-a55f-466b-8ddb-74f4da23f2ea",
        "_score": 8.3586445,
        "_source": {
            "uuid": "bc86f768-a55f-466b-8ddb-74f4da23f2ea",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38V5774"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a1c540ab-6c93-4882-861d-c8514383a370",
        "_score": 8.3586445,
        "_source": {
            "uuid": "a1c540ab-6c93-4882-861d-c8514383a370",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AH0425"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "db2c4c02-3325-4a1e-8be7-5fa4d171d50a",
        "_score": 8.3586445,
        "_source": {
            "uuid": "db2c4c02-3325-4a1e-8be7-5fa4d171d50a",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AG0720"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d3a18040-0634-4b1f-9ff9-2321f23f577d",
        "_score": 8.3586445,
        "_source": {
            "uuid": "d3a18040-0634-4b1f-9ff9-2321f23f577d",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38U0233"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "897c92ec-bbff-4f8a-afcb-822d88133895",
        "_score": 8.3586445,
        "_source": {
            "uuid": "897c92ec-bbff-4f8a-afcb-822d88133895",
            "vehicle": {
                "vehicleRegistrationNumber": "UP58T6901"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "6aaf6f3d-71f4-4eb1-abcb-55dce9f0ac23",
        "_score": 8.3586445,
        "_source": {
            "uuid": "6aaf6f3d-71f4-4eb1-abcb-55dce9f0ac23",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38Y8471"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "0749fc08-679d-4ee8-b855-251882f94fe4",
        "_score": 8.3586445,
        "_source": {
            "uuid": "0749fc08-679d-4ee8-b855-251882f94fe4",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38S3345"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "4112454e-3437-42b9-8f6f-487fe742cb44",
        "_score": 8.3586445,
        "_source": {
            "uuid": "4112454e-3437-42b9-8f6f-487fe742cb44",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55W8738"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "02150215-5b76-4b59-a849-62390303ec84",
        "_score": 8.3586445,
        "_source": {
            "uuid": "02150215-5b76-4b59-a849-62390303ec84",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38Z9396"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "5486e388-8aeb-4181-8364-ffec6ef20b12",
        "_score": 8.3586445,
        "_source": {
            "uuid": "5486e388-8aeb-4181-8364-ffec6ef20b12",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38V2931"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "46ab1571-4aaa-4a05-90fe-cfe679e38269",
        "_score": 8.3586445,
        "_source": {
            "uuid": "46ab1571-4aaa-4a05-90fe-cfe679e38269",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AG7934"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "46078e38-7ba7-4da5-a372-86fa65b346ea",
        "_score": 8.3586445,
        "_source": {
            "uuid": "46078e38-7ba7-4da5-a372-86fa65b346ea",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38R6893"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "84802737-580d-42a6-a6f9-e9e39b112cd0",
        "_score": 8.308471,
        "_source": {
            "uuid": "84802737-580d-42a6-a6f9-e9e39b112cd0",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38Z2975"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "65eb6eaf-222e-48a7-bb62-8a48d94cb694",
        "_score": 8.308471,
        "_source": {
            "uuid": "65eb6eaf-222e-48a7-bb62-8a48d94cb694",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55W4007"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "6b80c67b-ab2c-4c34-b77e-3402653c4427",
        "_score": 8.308471,
        "_source": {
            "uuid": "6b80c67b-ab2c-4c34-b77e-3402653c4427",
            "vehicle": {
                "vehicleRegistrationNumber": "UP51AT5288"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "5146642c-b26d-4d34-a02f-39ca85e1b1cd",
        "_score": 8.308471,
        "_source": {
            "uuid": "5146642c-b26d-4d34-a02f-39ca85e1b1cd",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AG0825"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "1d1c2957-a017-4089-b647-22f88b6bda24",
        "_score": 8.308471,
        "_source": {
            "uuid": "1d1c2957-a017-4089-b647-22f88b6bda24",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38V5320"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3bcc0b69-1181-44cb-ad68-410e36ad8c80",
        "_score": 8.308471,
        "_source": {
            "uuid": "3bcc0b69-1181-44cb-ad68-410e36ad8c80",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38V7030"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "47a22ccb-1f5c-45ba-80e3-236bf9c01d06",
        "_score": 8.308471,
        "_source": {
            "uuid": "47a22ccb-1f5c-45ba-80e3-236bf9c01d06",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AG0393"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d0ef5010-99ea-4365-a9a0-deb25673cd4d",
        "_score": 8.308471,
        "_source": {
            "uuid": "d0ef5010-99ea-4365-a9a0-deb25673cd4d",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55V7496"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "8dd96f8d-e396-4516-be32-5b02e654963a",
        "_score": 8.308471,
        "_source": {
            "uuid": "8dd96f8d-e396-4516-be32-5b02e654963a",
            "vehicle": {
                "vehicleRegistrationNumber": "HR58B6080"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "99e75076-5d70-4934-b0f7-9a76c965f8e2",
        "_score": 8.308471,
        "_source": {
            "uuid": "99e75076-5d70-4934-b0f7-9a76c965f8e2",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55M2812"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "b1486ccf-9f1d-486f-b7bf-35db84c47818",
        "_score": 8.308471,
        "_source": {
            "uuid": "b1486ccf-9f1d-486f-b7bf-35db84c47818",
            "vehicle": {
                "vehicleRegistrationNumber": "PB13BQ4938"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "97460ce9-d935-4bd7-8699-142171db742c",
        "_score": 8.308471,
        "_source": {
            "uuid": "97460ce9-d935-4bd7-8699-142171db742c",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55W5377"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "8d916010-35db-41b8-b7cb-04a6615c1512",
        "_score": 8.308471,
        "_source": {
            "uuid": "8d916010-35db-41b8-b7cb-04a6615c1512",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AG1784"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e95c9a64-80c7-42d8-9ad3-6b1456976447",
        "_score": 8.308471,
        "_source": {
            "uuid": "e95c9a64-80c7-42d8-9ad3-6b1456976447",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38W9666"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "b99b7b83-4a33-4303-ade9-584bb4df5ea5",
        "_score": 7.9726415,
        "_source": {
            "uuid": "b99b7b83-4a33-4303-ade9-584bb4df5ea5",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55M3475"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "dd6c0666-4d1f-4492-a559-21b83f019388",
        "_score": 7.9726415,
        "_source": {
            "uuid": "dd6c0666-4d1f-4492-a559-21b83f019388",
            "vehicle": {
                "vehicleRegistrationNumber": "UP71AT5483"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d8006778-ce77-4cee-a6bd-1fd5a84b8ee3",
        "_score": 7.9726415,
        "_source": {
            "uuid": "d8006778-ce77-4cee-a6bd-1fd5a84b8ee3",
            "vehicle": {
                "vehicleRegistrationNumber": "HR55V9841"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "bf128ae9-3485-47bd-ab21-befddecebe2d",
        "_score": 7.9726415,
        "_source": {
            "uuid": "bf128ae9-3485-47bd-ab21-befddecebe2d",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AH7030"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "c80255dc-9878-4954-84bf-f25d1dca5c09",
        "_score": 7.9726415,
        "_source": {
            "uuid": "c80255dc-9878-4954-84bf-f25d1dca5c09",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AB0930"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "61f22e66-3a85-4c97-8816-ec295df4db2f",
        "_score": 7.9726415,
        "_source": {
            "uuid": "61f22e66-3a85-4c97-8816-ec295df4db2f",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AG0696"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "71ad20b9-cbf8-4324-8f10-988c7eb67041",
        "_score": 7.9726415,
        "_source": {
            "uuid": "71ad20b9-cbf8-4324-8f10-988c7eb67041",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AB3761"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "006fca4f-b784-4cdc-957c-d45d069a2f1b",
        "_score": 7.9726415,
        "_source": {
            "uuid": "006fca4f-b784-4cdc-957c-d45d069a2f1b",
            "vehicle": {
                "vehicleRegistrationNumber": "PB13BT8429"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "1a07df66-8b42-4b1e-b950-45c4cee8b927",
        "_score": 7.9726415,
        "_source": {
            "uuid": "1a07df66-8b42-4b1e-b950-45c4cee8b927",
            "vehicle": {
                "vehicleRegistrationNumber": "HR58B6480"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3e9a7ff9-8c7e-4200-9ce0-facfc0aa3661",
        "_score": 7.9726415,
        "_source": {
            "uuid": "3e9a7ff9-8c7e-4200-9ce0-facfc0aa3661",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38U2938"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "1796cac5-7420-4996-92b2-683d684070d3",
        "_score": 7.9726415,
        "_source": {
            "uuid": "1796cac5-7420-4996-92b2-683d684070d3",
            "vehicle": {
                "vehicleRegistrationNumber": "UP64AT0085"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "586f637e-ff6d-4f4c-bd4e-d0da00389665",
        "_score": 7.9726415,
        "_source": {
            "uuid": "586f637e-ff6d-4f4c-bd4e-d0da00389665",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38AH1774"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "91f95ea8-7e7c-4fe0-ab22-a5ea6a8a8026",
        "_score": 7.9726415,
        "_source": {
            "uuid": "91f95ea8-7e7c-4fe0-ab22-a5ea6a8a8026",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38U3090"
            },
            "status": "ACTIVE"
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "ecde8f24-d3b4-49ee-97ba-831f5db9d6a5",
        "_score": 7.9726415,
        "_source": {
            "uuid": "ecde8f24-d3b4-49ee-97ba-831f5db9d6a5",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38Z1581"
            },
            "status": "ACTIVE"
        }
    }
]


async function addDocsToVehicle(vehicleDetails, resourceId, vehicleNumber) {
    const options = {
        method: 'POST',
        uri: `${BASE_URL}/partner-fleet/v2/sync/via-parivahan?resourceId=${resourceId}`,
        headers: {
            'Authorization': TOKEN
        },
        body: vehicleDetails,
        json: true
    };

    try {
        const response = await rp(options);
        if (response.status === 200) {
            console.log(`Done for ${vehicleNumber}`);
            return response.data;
        }
        else throw response.error;
    } catch (error) {
        console.error("Error adding docs to vehicle:", error);
    }

}

async function getVerifiedVehicle(vehicleNumber) {
    const options = {
        method: 'GET',
        uri: `${BASE_URL}/partner-fleet/v2/vehicle/registration/details/v2?vehicleNumber=${vehicleNumber}`,
        headers: {
            'Authorization': TOKEN,
        },
        json: true
    };

    try {
        const response = await rp(options);
        if (response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Error fetching vehicle details:", vehicleNumber, error);
    }
}

async function main() {
    for (const vehicle of vehicleData) {
        const vehicleNumber = vehicle._source.vehicle.vehicleRegistrationNumber;
        const vehicleDetails = await getVerifiedVehicle(vehicleNumber);
        
        if (vehicleDetails) {
            await addDocsToVehicle(vehicleDetails, vehicle._source.uuid, vehicleNumber);
        }
    }
}

main();