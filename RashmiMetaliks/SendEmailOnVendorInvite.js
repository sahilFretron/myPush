//Written by Sahil - 6 Feb 2025
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzU5OTEwNTcsInVzZXJJZCI6ImJvdHVzZXItLTg2ZWMwZDgwLWJlM2ItNDA2OC04OTUzLWMzODRmZGFhMTQxYSIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTg2ZWMwZDgwLWJlM2ItNDA2OC04OTUzLWMzODRmZGFhMTQxYSIsIm9yZ0lkIjoiMzIxODg3YjYtOGY0My00Mjk5LThiNzUtNDdkM2VkMDM5ZDRlIiwibmFtZSI6IkludGVncmF0aW9uIEludGVybmFsIE1vdmVtZW50IHRva2VuIiwib3JnVHlwZSI6IkZMRUVUX09XTkVSIiwiaXNHb2QiOmZhbHNlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.nGvbEGdhak95n4u2nn8qysxAY-ImSuzAXkBCEcpEZPY";
const ORGID = "208afdad-deab-4c76-8d49-30a70f420f35";
const rp = require("request-promise");
const INVITE_EVENT = "auction.transporter.invite.event"
const AUCTION_CLOSED_EVENT = "auction.closed.status.event"
const FRT_PUB_BASE_URL = "https://apis.fretron.com";
let auction = {
    "orderId": "FRSO0000028",
    "isShowTopRankToOthers": null,
    "uuid": "286edef4-59a4-43a3-a2fb-1484dfc1734c",
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
        "TRUCK 20 MT"
    ],
    "alternateOrigins": [],
    "totalQuantity": 100,
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
    "price": 1000,
    "enquiries": null,
    "legType": "DirectLeg",
    "bidToleranceAmount": 20,
    "customerName": "Rashmi Bidding ",
    "fuMappings": [
        {
            "lineItemId": "dbdb1bf8-6f50-49cf-8e2e-2d8a7ca8850d",
            "uuid": "33a3e25a-de45-4193-810b-c8be722c386f"
        },
        {
            "lineItemId": "552f304e-58d7-4d12-aad0-75fbc81f5e2d",
            "uuid": "7c3416c1-caff-43fb-81f9-c63bf26fd729"
        },
        {
            "lineItemId": "eb4d69aa-254e-4532-9d9c-f37903e7581b",
            "uuid": "a7da5fb5-56cd-40b3-b53b-cf00b22afe3a"
        },
        {
            "lineItemId": "4a23f454-14d9-43d7-9e86-6fa8cb2334d2",
            "uuid": "ba1e262e-7d68-4471-aa3b-d259774f386b"
        },
        {
            "lineItemId": "d1655ab3-adf2-4839-b7de-a6384a2aeec6",
            "uuid": "fc95d586-0c65-4f2d-80a9-7d48ffb0cf06"
        }
    ],
    "allowedTransporters": [
        "0051de78-577e-457e-8e99-23435e4f60ee"
    ],
    "route": null,
    "numberOfVehicles": 5,
    "bids": [
        {
            "businessPartnerId": "0051de78-577e-457e-8e99-23435e4f60ee",
            "amount": null,
            "partnerName": "Rashmi-Bidding User",
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
                "7406070000"
            ],
            "vehicleType": "TRUCK 20 MT",
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
            "description": "CONDITION OF GPS (ONLY WITH WIRE DEVICE ALLOWED). IF DEVICE IS     PRE-INSTALLED THEN TRANSPORTER MUST PROVIDE API INTERGRATION TO RML     GPS PROVIDER/ PORTAL. IF GPS DEVICE IS NOT PRE-INSTALLED IN THE     VEHICLE, THEN TRANSPORTER MUST INSTALLED GPS DEVICES FROM THE VENDOR     NOMINATED BY RML. AFTER DELIVERY OF SHIPMENT TO RETURN GPS DEVICE TO     GPS SERVICE PROVIDER WILL BE SOLE RESPONSIBILITY OF TRNSPORTERS",
            "type": "VEHICLE MUST HAVE WORKING",
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
            "description": "TRANSPORTER'S SUPERVISOR OR     DRIVER MUST FOLLOW THE SAFETY RULE INSIDE THE PLANT OR IN TRANSIT AS     PER COMPANY POLICY.",
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
                    "netQuantity": 20,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 20,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 20,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "85ae2efa-c488-49d2-ad65-27c85425947e",
            "lineItemId": "fe1308f3-8bd0-4d0d-a49c-d48dddda5427",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "d9e2a15f-f374-46f5-a346-0f120d803566",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "dbdb1bf8-6f50-49cf-8e2e-2d8a7ca8850d",
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
                    "netQuantity": 20,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 20,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 20,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "85ae2efa-c488-49d2-ad65-27c85425947e",
            "lineItemId": "fe1308f3-8bd0-4d0d-a49c-d48dddda5427",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "baf463e1-6bab-4c3e-89fd-5886d793e90b",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "552f304e-58d7-4d12-aad0-75fbc81f5e2d",
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
                    "netQuantity": 20,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 20,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 20,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "85ae2efa-c488-49d2-ad65-27c85425947e",
            "lineItemId": "fe1308f3-8bd0-4d0d-a49c-d48dddda5427",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "f6842f41-a9f0-40a0-bd33-89920e99d8a1",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "eb4d69aa-254e-4532-9d9c-f37903e7581b",
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
                    "netQuantity": 20,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 20,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 20,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "85ae2efa-c488-49d2-ad65-27c85425947e",
            "lineItemId": "fe1308f3-8bd0-4d0d-a49c-d48dddda5427",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "beea5680-a09b-4d3b-8537-915db7c7ed35",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "4a23f454-14d9-43d7-9e86-6fa8cb2334d2",
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
                    "netQuantity": 20,
                    "moisture": null,
                    "claimQuantity": null,
                    "unitOfMeasurment": "Metric Tonnes",
                    "standardQuantity": 20,
                    "actualLoadedQuantity": null,
                    "measurmentType": "weight",
                    "grossQuantity": 20,
                    "shortage": null,
                    "temperature": null,
                    "plannedLoadQuantity": null,
                    "frieghtDeductableQuantity": null
                },
                "containers": null,
                "trucks": null
            },
            "orderId": "85ae2efa-c488-49d2-ad65-27c85425947e",
            "lineItemId": "fe1308f3-8bd0-4d0d-a49c-d48dddda5427",
            "legType": "DirectLeg",
            "consignmentId": null,
            "originLegId": null,
            "isFullyUtilized": null,
            "consignmentLineItemId": null,
            "source": "Order",
            "containerId": null,
            "uuid": "4cfd7ada-4243-40b4-b4ba-dfe72a54b0e1",
            "fuMappings": [
                {
                    "executionPlanId": null,
                    "legType": "DirectLeg",
                    "fuLineItemId": "d1655ab3-adf2-4839-b7de-a6384a2aeec6",
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
        "address": "Darwha Town",
        "accessibility": "private",
        "addedBy": "321887b6-8f43-4299-8b75-47d3ed039d4e",
        "center": {
            "latitude": 20.35256068,
            "longitude": 77.72208229999998
        },
        "suggestedRadius": 1000,
        "isOwned": null,
        "centerCoordinates": [
            77.72208229999998,
            20.35256068
        ],
        "placeId": "af6bdaa4-0dc6-4eb0-a54d-5f5990d718b2",
        "geoJsonBoundry": null,
        "externalId": "21006626",
        "source": "FRETRON",
        "places": [],
        "viewport": null,
        "district": "YAVATMAL",
        "name": "YAVATMAL-21006626",
        "state": "",
        "category": "Unloading Point",
        "subDistrict": "445202",
        "controllingBranchId": null
    },
    "updates": {
        "traceID": "9dbd1342-045c-4192-96a1-d4f003258495",
        "resourceId": "286edef4-59a4-43a3-a2fb-1484dfc1734c",
        "updatedBy": "USER",
        "changes": [],
        "sourceOfInformation": "Agent",
        "description": "Invited transporter Rashmi-Bidding User.",
        "forwardReasons": [
            "auction.transporter.invite.event"
        ],
        "userId": "7d6539ac-5dd0-48d4-80d7-251fbdb86158",
        "uuid": "1123a12d-c6d8-40cd-a290-5e787c49aa32",
        "revision": 1,
        "time": 1739513995367,
        "forwardedFrom": "0051de78-577e-457e-8e99-23435e4f60ee",
        "resourceType": "Auction",
        "updateType": null
    },
    "orgId": "321887b6-8f43-4299-8b75-47d3ed039d4e",
    "freightType": "perMT",
    "alternateDestinations": [],
    "completedRounds": null,
    "isConsiderReferencePrice": false,
    "totalStdQuantity": {
        "volume": null,
        "packageMeasurement": null,
        "weight": {
            "actualDeliveredQuantity": null,
            "density": null,
            "netQuantity": 100,
            "moisture": null,
            "claimQuantity": null,
            "unitOfMeasurment": "Metric Tonnes",
            "standardQuantity": 100,
            "actualLoadedQuantity": null,
            "measurmentType": "weight",
            "grossQuantity": 100,
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
    "createDate": 1739513171597,
    "routeDistance": null,
    "externalId": null,
    "placedQuantity": 0,
    "statusDescription": null,
    "placementDate": 1740162599000,
    "round": {
        "roundNumber": 1,
        "startTime": 1739513156607,
        "endTime": 1739514956607,
        "status": "PLANNED"
    },
    "isNegotiable": true,
    "allocatedVehicles": 0,
    "secondaryStatus": "OPEN",
    "numberOfBidRequiredToMarkWON": 0,
    "isCritical": null,
    "remarks": []
}

console.log(auction.orderId)

let partnerIndex = "bpartners"
const partnerQuery = (uuids) => {
    return {
        "_source": ["contacts", "name", "type", "uuid"],
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
            console.log(`Sending Json to Excel email api res error : ${res.error}`);
        }
    } catch (e) {
        console.log(`Catched Error in sending json to excel email : ${e.message}`);
    }
    return "Mail Sent"
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

async function createExcelReportConsolidated(auction, forwardedReasons) {
    try {
        const defaultRecipients = [
            "sahil.aggarwal@fretron.com"
        ];
        if (forwardedReasons.includes(INVITE_EVENT || CREATE_EVENT)) {
            let bPartners = await getDataFromElastic(partnerIndex, partnerQuery(auction.allowedTransporters));

            // Send individual emails to each business partner
            for (const bp of bPartners) {
                const bpPortalToken = await getTokenForVendorPortal(bp.uuid, bp.type);
                const data = await createAuctionDataObject(auction, bpPortalToken);
                const partnerName = bp?.name || "Valued Partner";
                const partnerEmails = bp?.contacts?.flatMap(contact => contact?.emails || []) || [];

                if (partnerEmails.length > 0) {
                    console.log(`Sending Mail to ${partnerName}:`, partnerEmails);
                    // const to = [...new Set([...partnerEmails, ...defaultRecipients])];
                    const to = ["sahil.aggarwal@fretron.com"]

                    if (data) {
                        let subject = `Invitation for Bidding on Outbound Freight Requirement`
                        let content = convertJSONtoHTMLInvite(data, partnerName);
                        await sendEmail(subject, content, [data], to);
                        console.log("Mail Sent")
                    }
                } else {
                    console.log(`No Email Found for ${partnerName}`)
                }
            }
        }
        if (forwardedReasons.includes(AUCTION_CLOSED_EVENT)) {
            let subject = `Auction (#${auction.orderId}) Ended – Winner Selection Required`;
            let linkJson = {
                "orderId": auction.uuid,
                "orderNo": auction.orderId
            }
            // let to = ["Gyanendra.Jha@rashmigroup.com", "monu.khan@fretron.com"]
            let to = ["sahil.aggarwal@fretron.com"]
            let portalLink = `https://alpha.fretron.com/tracknet/sales/bidding/detail?data=${btoa(JSON.stringify(linkJson))}`
            let data = await createAuctionDataObject(auction, portalLink);
            let content = convertJSONtoHTMLBidAccepted(auction.orderId, portalLink);
            await sendEmail(subject, content, [data], to);
            console.log("Mail Sent")
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
            <p>Dear Gyanendra Ji,</p>
            
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