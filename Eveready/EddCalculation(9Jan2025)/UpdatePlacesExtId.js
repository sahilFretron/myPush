import rp from "request-promise"

let bPartners = [
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "dcbfd5a1-0ddb-4a1e-b275-701ab8a51245",
        "_score": 8.961904,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "110041",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 28.676056,
                        "longitude": 77.013528
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.013528,
                        28.676056
                    ],
                    "placeId": "b5b99605-7434-454b-a7ff-8036df3bce28",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Delhi Godown-LED/Lighting DRRP",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3016"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "5a64a2e6-4586-48b0-8b6f-a2fdb2727e9f",
        "_score": 8.961904,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "226017",
                    "accessibility": "Loading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.838833,
                        "longitude": 80.894
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        80.894,
                        26.838833
                    ],
                    "placeId": "e2649ef4-6c2c-40b9-8291-8fcf8411eac7",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Lucknow Plant",
                    "state": null,
                    "category": "Loading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "2001"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "388abb04-2b62-4a5b-a4d4-291fde4c501b",
        "_score": 8.961904,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "700088",
                    "accessibility": "Loading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 22.522528,
                        "longitude": 88.310694
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        88.310694,
                        22.522528
                    ],
                    "placeId": "9feac954-8c8a-43e9-9632-5609f980b453",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "METCO Kolkata Plant",
                    "state": null,
                    "category": "Loading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "2002"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "e02c00ff-fd6e-4d65-9bde-213c41a6f0af",
        "_score": 8.961904,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "753011",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 20.410056,
                        "longitude": 85.878806
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        85.878806,
                        20.410056
                    ],
                    "placeId": "96921bdf-ef34-4547-853e-3d65b3d1ca1a",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Cuttack Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3006"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "bd1519cf-70e9-4d77-9f75-1260b0d46180",
        "_score": 8.961904,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "800002",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 25.5785,
                        "longitude": 85.097917
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        85.097917,
                        25.5785
                    ],
                    "placeId": "c28f19a6-fd1c-4e02-a631-bfc471f6dc2c",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Patna Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3024"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "9b807930-6857-4fbb-8865-c38a458e35ff",
        "_score": 8.961904,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "144025",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 31.369972,
                        "longitude": 75.647861
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        75.647861,
                        31.369972
                    ],
                    "placeId": "5e4873a1-a2ad-44a3-bbde-c53e8f380487",
                    "geoJsonBoundry": null,
                    "externalId": "3012",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Johal New Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3012"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "04f5662d-f9b7-47a8-80e0-ed677f680611",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "500076",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 17.430611,
                        "longitude": 78.557472
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        78.557472,
                        17.430611
                    ],
                    "placeId": "8d966068-e864-4d40-95a9-5dae1be4e204",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Secunderabad Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3017"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "3f9e1796-201e-453c-94df-268216536fd5",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "682024",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 10.028139,
                        "longitude": 76.316583
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        76.316583,
                        10.028139
                    ],
                    "placeId": "aeedace1-3803-46a2-8d29-1a3846de125c",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Cochin Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3020"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "aecf8888-9c3d-4fdd-bdc3-bb9b1fcd9177",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "600110",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 13.148056,
                        "longitude": 80.216722
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        80.216722,
                        13.148056
                    ],
                    "placeId": "d3e8443b-f54a-4142-a0d5-7d0da2103d3c",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Chennai Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3021"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "11550b2b-a9be-45de-8c25-a4aae399d33c",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "201001",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 28.69125,
                        "longitude": 77.428278
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.428278,
                        28.69125
                    ],
                    "placeId": "149854af-77f9-41c0-a09a-d09739bda31b",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Ghaziabad Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3022"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "c45600c5-acc5-4a7e-8c58-5c2a5738d621",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "248001",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 30.282694,
                        "longitude": 77.989194
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.989194,
                        30.282694
                    ],
                    "placeId": "26ac9571-131b-4ae6-887a-4e0221a53892",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Dehradun Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3023"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "26569b84-f521-4171-ac8d-b83220eeeb72",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "834010",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 23.3165,
                        "longitude": 85.38375
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        85.38375,
                        23.3165
                    ],
                    "placeId": "3b003bb6-83fb-4bae-8d37-85dd79c81563",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Ranchi New Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3003"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "a5e72abd-a07a-4987-82be-ca61bdb126e3",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "482001",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 23.19875,
                        "longitude": 79.873944
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        79.873944,
                        23.19875
                    ],
                    "placeId": "9617d8df-3d8d-4221-961d-70f2489d477d",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Jabalpur Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3027"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "c7dd574b-2371-4233-884a-d04f5f54b5d4",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "124001",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 28.901,
                        "longitude": 76.550194
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        76.550194,
                        28.901
                    ],
                    "placeId": "6b3dba43-ea79-44ea-9704-de0e08bace68",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Rohtak Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3013"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "acf0e51c-d28c-42aa-978b-4e03753ee564",
        "_score": 8.937594,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "249403",
                    "accessibility": "Loading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 29.94775,
                        "longitude": 78.078278
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        78.078278,
                        29.94775
                    ],
                    "placeId": "c469acba-f049-4574-98a6-fcce9667b351",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "NATCO Haridwar Plant",
                    "state": null,
                    "category": "Loading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "2006"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "d5d70562-3596-48b2-8eaf-b239062b672a",
        "_score": 8.755137,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "711302",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 22.561861,
                        "longitude": 88.178444
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        88.178444,
                        22.561861
                    ],
                    "placeId": "b4b2f83f-8fe3-4bb8-b632-d7dca4e86f8a",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Dhulagarh Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3001"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "e4aa3c84-1d20-4a2d-9a00-4f4876c6b02b",
        "_score": 8.755137,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "781028",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.110722,
                        "longitude": 91.760833
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        91.760833,
                        26.110722
                    ],
                    "placeId": "af736879-f148-409e-8de8-42b4a1925954",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Guwahati Sales Godown-Matia",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3005"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "63a8438a-34c1-4f7a-97ee-e147c143fb29",
        "_score": 8.755137,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "795002",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 24.856806,
                        "longitude": 93.933417
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        93.933417,
                        24.856806
                    ],
                    "placeId": "b5c0e5ac-6143-4319-8e43-3e2995b42f3e",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Imphal Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3007"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "60b9baa4-a25b-4005-9dac-7d4c026de75a",
        "_score": 8.755137,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "842001",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.125528,
                        "longitude": 85.357917
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        85.357917,
                        26.125528
                    ],
                    "placeId": "82bdce74-91f3-4cf9-abb6-dc80ab458d2c",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Muzaffarpur Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3025"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "9a6696df-429e-498f-804f-7bc5181bc632",
        "_score": 8.755137,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "493221",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 21.289056,
                        "longitude": 81.619417
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        81.619417,
                        21.289056
                    ],
                    "placeId": "45923a01-c2ed-47ef-b598-fa42d8bf4753",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Raipur Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3026"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "4a89dead-9812-4be2-aba5-33a24e648c8e",
        "_score": 8.755137,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "440023",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 21.172028,
                        "longitude": 78.984333
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        78.984333,
                        21.172028
                    ],
                    "placeId": "2ef48fe3-7ac3-4d91-b865-85b2e2b7d8a8",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Nagpur Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3010"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "70c8f1aa-6da3-4334-8fe5-b8dec2125b8a",
        "_score": 8.755137,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "783101",
                    "accessibility": "Loading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.094444,
                        "longitude": 90.742444
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        90.742444,
                        26.094444
                    ],
                    "placeId": "b879ee42-c57d-488a-85ce-3d5ec7d2610c",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "NATCO Matia Plant",
                    "state": null,
                    "category": "Loading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "2007"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "e9f23ad8-3bf5-46f9-8541-db769f8b5e83",
        "_score": 8.688059,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "382427",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 22.918056,
                        "longitude": 72.598
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        72.598,
                        22.918056
                    ],
                    "placeId": "99e599f0-fdec-4b64-a9d9-e8907c03fa89",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Aslali Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3011"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "52ecb544-e8b2-4f5a-9b43-021f4de181d1",
        "_score": 8.688059,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "110081",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 28.690028,
                        "longitude": 76.999889
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        76.999889,
                        28.690028
                    ],
                    "placeId": "6df002b0-b9c5-4078-a928-cee30b0123af",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Delhi Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3015"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "dfc9315e-aeb6-4fc6-a7a2-e913d2f3b3dd",
        "_score": 8.688059,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "201305",
                    "accessibility": "Loading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 28.552139,
                        "longitude": 77.40575
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.40575,
                        28.552139
                    ],
                    "placeId": "3d568415-3d74-4900-9ebf-a16e5acf5740",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Noida Batteries Plant",
                    "state": null,
                    "category": "Loading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "2003"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "a48acb3d-7ef7-4eb0-8d0c-27a5630fb833",
        "_score": 8.688059,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "226012",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.778167,
                        "longitude": 80.890278
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        80.890278,
                        26.778167
                    ],
                    "placeId": "7a517332-4456-4190-a71e-b8489542b6c1",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Lucknow Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3030"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "a13742d2-dac3-4548-9a97-59e391ebeebe",
        "_score": 8.688059,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "226012",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.778167,
                        "longitude": 80.890278
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        80.890278,
                        26.778167
                    ],
                    "placeId": "1cf0d863-0bc1-4002-9f83-f421f7bcc139",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Lucknow HUB Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3501"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "dc9a913e-07e7-4a10-98f3-d7a331a9af70",
        "_score": 8.688059,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "412308",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 18.421389,
                        "longitude": 73.983472
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        73.983472,
                        18.421389
                    ],
                    "placeId": "ca03c02f-4b54-4f6e-ac5f-674fdcc61038",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Pune Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3009"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "b7ed0e4e-61b2-48fb-b359-1ce61759d8a7",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "734015",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.670028,
                        "longitude": 88.416361
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        88.416361,
                        26.670028
                    ],
                    "placeId": "340366a1-45ee-4acf-9e02-c19defcbed8c",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Siliguri Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3002"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "ba63952c-068b-4fb7-b3f2-f61c983c0704",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "781028",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.110722,
                        "longitude": 91.760833
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        91.760833,
                        26.110722
                    ],
                    "placeId": "b69beddc-cf13-4dab-ab2f-985e0c0d9b07",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Guwahati Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3004"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "63e09bed-c3dc-4939-a167-b7a4fb0957c7",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "452010",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 22.774111,
                        "longitude": 75.906278
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        75.906278,
                        22.774111
                    ],
                    "placeId": "cb739874-9e0e-4043-b07f-1a6d6f91d16e",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Indore Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3028"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "9d82e11d-f1d3-4167-aff3-284d4344c4e0",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "221302",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 25.27675,
                        "longitude": 82.889056
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        82.889056,
                        25.27675
                    ],
                    "placeId": "604862ff-9369-4f36-b17a-16e933d28bb1",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Varanasi New Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3029"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "4dd91f47-d696-4187-b114-be22c3749a4b",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "201305",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 28.552306,
                        "longitude": 77.400667
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.400667,
                        28.552306
                    ],
                    "placeId": "ec36cc64-aba5-4593-962a-b39156d1007d",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Noida PP HUB",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3502"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "1b794727-9777-4c65-b7ee-ee097a0a4e34",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "302013",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 26.990306,
                        "longitude": 75.784139
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        75.784139,
                        26.990306
                    ],
                    "placeId": "225ee3b5-2f0a-4b9c-8119-61907a4e59f5",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Jaipur Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3014"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "e8bcd488-771f-4ef4-8207-27e29ef4a5ba",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "520012",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 16.546306,
                        "longitude": 80.605083
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        80.605083,
                        16.546306
                    ],
                    "placeId": "7f6a6ad3-15fd-43cc-a913-127342f75d9c",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Vijayawada Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3018"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "f316137f-d9e1-4af8-b5c1-8d9121423d76",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "562123",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 13.051806,
                        "longitude": 77.459139
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.459139,
                        13.051806
                    ],
                    "placeId": "fe5448f4-669a-4f0d-9eff-eb4a5fef962d",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Bangalore Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3019"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "cdab3a5a-191f-4289-80d7-421e78bc7c59",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "799004",
                    "accessibility": "Unloading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 23.822889,
                        "longitude": 91.317389
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        91.317389,
                        23.822889
                    ],
                    "placeId": "eabc03a0-6844-4df5-ab3b-d91928be8595",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Agartala Sales Godown",
                    "state": null,
                    "category": "Unloading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "3008"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "037af807-1168-4bfd-9deb-550c3d236535",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "201305",
                    "accessibility": "Loading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 28.552139,
                        "longitude": 77.401167
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.401167,
                        28.552139
                    ],
                    "placeId": "24088e76-e450-485b-a768-3b532733db34",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Noida Lighting Plant",
                    "state": null,
                    "category": "Loading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "2004"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "80c4fae7-ad3f-4418-aa09-1bc48c5b1634",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "571428",
                    "accessibility": "Loading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 12.615722,
                        "longitude": 77.072861
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.072861,
                        12.615722
                    ],
                    "placeId": "112ca3a8-8f06-455b-b4fa-2764f86c3d72",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "Maddur Plant",
                    "state": null,
                    "category": "Loading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "2005"
        }
    },
    {
        "_index": "bpartners",
        "_type": "kafka-connect",
        "_id": "dd1ad5bf-45f3-42df-adc4-ed25ff34d74f",
        "_score": 8.541894,
        "_source": {
            "places": [
                {
                    "hubId": null,
                    "boundary": null,
                    "address": "571428",
                    "accessibility": "Loading Point",
                    "addedBy": "e90e9273-14cc-4e73-9c8e-099dfc15cc7b",
                    "center": {
                        "latitude": 12.615722,
                        "longitude": 77.072861
                    },
                    "suggestedRadius": 750.0,
                    "isOwned": false,
                    "centerCoordinates": [
                        77.072861,
                        12.615722
                    ],
                    "placeId": "5ec8a2f8-65ec-4202-8130-b12e03156d5a",
                    "geoJsonBoundry": null,
                    "externalId": "",
                    "source": "FRETRON",
                    "places": null,
                    "viewport": null,
                    "district": null,
                    "name": "CMS Plant",
                    "state": null,
                    "category": "Loading Point",
                    "subDistrict": null,
                    "controllingBranchId": null
                }
            ],
            "externalId": "2999"
        }
    }
]

async function updatePlace(place){
    let options = {
        method: 'PUT',
        url: 'https://apis.fretron.com/place-manager/v2/place',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzYzNDMwMzksInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiJlOTBlOTI3My0xNGNjLTRlNzMtOWM4ZS0wOTlkZmMxNWNjN2IiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.AFqw08HxN63j26FdZCiV81TdUlJkc84hTJd1x1CMYr4'
        },
        body: place,
        json: true
    };

    try {
        const response = await rp(options);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function main(){
    for(let bPartner of bPartners.map(bp => bp._source)){
        let place = bPartner.places[0]
        place.externalId = bPartner.externalId
        let res = await updatePlace(place)
        console.log(res)
    }
}
main()