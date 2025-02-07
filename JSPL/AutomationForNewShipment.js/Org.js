/**
    Written By Harshit
 */

console.log(`HIT for ${$event.shipmentNumber}`);

const TOKEN =
    "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDUzMDE4OTEsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiMDEyNmY0MDUtZGQzNi00YzUyLTlkMjEtNGMwOTVmYzJlMmQwIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.j2Df92epuWq9kmTkPNzt0S9QFVpqneUZismF7muRIiY";

const RAILWAY_SLIDING = "RAILWAY SIDING";
const MILIS_LOC_NAME = "Millis Loc -A";
const ORG_ID = "0126f405-dd36-4c52-9d21-4c095fc2e2d0";

const RAILWAY_SLIDING_STAGE = {
    departureTime: null,
    gateInTime: null,
    actualActivityStartTime: null,
    actualActivityEndTime: null,
    preActWtTime: null,
    consignmentDelivered: null,
    resourceDropOff: null,
    resourcePickup: null,
    eta: null,
    stageName: null,
    hub: null,
    arrivalTime: null,
    expectedActivityStartTime: null,
    secondaryStatus: null,
    consignmentPickUps: null,
    postActWtTime: null,
    tripPoint: {
        outOfTrackSince: null,
        creationTime: null,
        purpose: "Delivery",
        plannedArrival: null,
        sequenceId: null,
        isDisconnected: false,
        isOutOfTrack: false,
        routeDeviationMinimumDistanceConstraint: null,
        eta: null,
        routeId: null,
        expectedActivityStartTime: null,
        actualDeparture: null,
        place: {
            hubId: null,
            boundary: null,
            address: "Ranchi Patratu Ramgarh Rd, Patratu, Jharkhand 829143, India",
            accessibility: "private",
            addedBy: ORG_ID,
            center: {
                latitude: 23.636717,
                longitude: 85.321588,
            },
            suggestedRadius: 0,
            isOwned: false,
            centerCoordinates: [85.321588, 23.636717],
            placeId: "d2c07ab0-fddc-4ba8-878f-7162472ed2e7",
            geoJsonBoundry: {
                coordinates: [
                    [
                        [85.3260630541979, 23.635781754111807],
                        [85.32606317044005, 23.635767010879277],
                        [85.32515108585359, 23.635840727025354],
                        [85.32280683674539, 23.636155248782266],
                        [85.32044649124147, 23.636504170472257],
                        [85.31909735502997, 23.636698288474644],
                        [85.31925292315283, 23.637538644101536],
                        [85.32541394704955, 23.6363960539917],
                        [85.32621604378718, 23.636236336300207],
                        [85.3260630541979, 23.635781754111807],
                    ],
                ],
                type: "Polygon",
            },
            externalId: null,
            source: "FRETRON",
            places: null,
            viewport: null,
            district: null,
            name: "RAILWAY SIDING",
            state: null,
            category: "Unloading Point",
            subDistrict: null,
            controllingBranchId: null,
        },
        remainingDistance: 0,
        actualActivityStartTime: null,
        forShipmentStages: [],
        actualActivityEndTime: null,
        actualArrival: null,
        purposedDistance: null,
        plannedDeparture: null,
        currentLocation: null,
        isAutoCompleted: false,
        coveredDistance: null,
        hub: null,
        assosiatedShipmentsId: [],
        status: "NEXT",
    },
    place: {
        hubId: null,
        boundary: null,
        address: "Ranchi Patratu Ramgarh Rd, Patratu, Jharkhand 829143, India",
        accessibility: "private",
        addedBy: ORG_ID,
        center: {
            latitude: 23.636717,
            longitude: 85.321588,
        },
        suggestedRadius: 0,
        isOwned: false,
        centerCoordinates: [85.321588, 23.636717],
        placeId: "d2c07ab0-fddc-4ba8-878f-7162472ed2e7",
        geoJsonBoundry: {
            coordinates: [
                [
                    [85.3260630541979, 23.635781754111807],
                    [85.32606317044005, 23.635767010879277],
                    [85.32515108585359, 23.635840727025354],
                    [85.32280683674539, 23.636155248782266],
                    [85.32044649124147, 23.636504170472257],
                    [85.31909735502997, 23.636698288474644],
                    [85.31925292315283, 23.637538644101536],
                    [85.32541394704955, 23.6363960539917],
                    [85.32621604378718, 23.636236336300207],
                    [85.3260630541979, 23.635781754111807],
                ],
            ],
            type: "Polygon",
        },
        externalId: null,
        source: "FRETRON",
        places: null,
        viewport: null,
        district: null,
        name: "RAILWAY SIDING",
        state: null,
        category: "Unloading Point",
        subDistrict: null,
        controllingBranchId: null,
    },
    controllingBranchId: null,
    gateOutTime: null,
    status: "NEXT",
};
const MILIS_LOC_STAGE = {
    departureTime: null,
    gateInTime: null,
    actualActivityStartTime: null,
    actualActivityEndTime: null,
    preActWtTime: null,
    consignmentDelivered: null,
    resourceDropOff: null,
    resourcePickup: null,
    eta: null,
    stageName: null,
    hub: {
        hubId: null,
        boundary: [
            [
                [85.32793527032156, 23.630744509207194],
                [85.32834297518195, 23.63398794102455],
                [85.32078971703439, 23.634892225230814],
                [85.32003865911979, 23.631707638515895],
                [85.32793527032156, 23.630744509207194],
            ],
        ],
        address: null,
        accessibility: "private",
        addedBy: ORG_ID,
        center: {
            latitude: 23.63241536463713,
            longitude: 85.32500837839585,
        },
        suggestedRadius: 0,
        isOwned: null,
        centerCoordinates: [85.32500837839585, 23.63241536463713],
        placeId: "bb42d22a-2390-4f1a-9b75-2ca2af373061",
        geoJsonBoundry: null,
        externalId: null,
        source: "GOOGLE",
        places: [
            {
                hubId: "bb42d22a-2390-4f1a-9b75-2ca2af373061",
                boundary: null,
                address: "Unnamed Road, Patratu, Jharkhand 829143, India",
                accessibility: "public",
                addedBy: ORG_ID,
                center: {
                    latitude: 23.632306,
                    longitude: 85.326023,
                },
                suggestedRadius: 0,
                isOwned: false,
                centerCoordinates: [85.326023, 23.632306],
                placeId: "6069f06d-b0c6-4209-a80d-1d2af5e73699",
                geoJsonBoundry: {
                    coordinates: [
                        [
                            [85.32455489513028, 23.632041818161788],
                            [85.32450450147404, 23.631562664661732],
                            [85.32772063640572, 23.63120635792978],
                            [85.32792313302312, 23.632493956068036],
                            [85.32466017955569, 23.632874847990657],
                            [85.32455489513028, 23.632041818161788],
                        ],
                    ],
                    type: "Polygon",
                },
                externalId: null,
                source: "FRETRON",
                places: null,
                viewport: null,
                district: null,
                name: "WRM",
                state: null,
                category: "Loading Point",
                subDistrict: null,
                controllingBranchId: null,
            },
            {
                hubId: "bb42d22a-2390-4f1a-9b75-2ca2af373061",
                boundary: null,
                address: "Jharkhand State Highway 2, Patratu, Jharkhand 829143, India",
                accessibility: "public",
                addedBy: ORG_ID,
                center: {
                    latitude: 23.631785940627918,
                    longitude: 85.31827804627599,
                },
                suggestedRadius: 0,
                isOwned: false,
                centerCoordinates: [85.31827804627599, 23.631785940627918],
                placeId: "2ab1d3f4-090f-42e0-b231-86a7d8ef5e45",
                geoJsonBoundry: {
                    coordinates: [
                        [
                            [85.32114915774473, 23.63466126370742],
                            [85.32099365559714, 23.634022383307123],
                            [85.32083264765595, 23.63331469676314],
                            [85.32055903877382, 23.63202709060177],
                            [85.32264062618268, 23.63181085015737],
                            [85.32283373423587, 23.633078800398483],
                            [85.32305907278077, 23.634474514374393],
                            [85.32114915774473, 23.63466126370742],
                        ],
                    ],
                    type: "Polygon",
                },
                externalId: null,
                source: "FRETRON",
                places: null,
                viewport: null,
                district: null,
                name: "BILLET YARD",
                state: null,
                category: "Unloading Point",
                subDistrict: null,
                controllingBranchId: null,
            },
            {
                hubId: "bb42d22a-2390-4f1a-9b75-2ca2af373061",
                boundary: null,
                address: "Unnamed Road, Patratu, Jharkhand 829143, India",
                accessibility: "public",
                addedBy: ORG_ID,
                center: {
                    latitude: 23.63355476070245,
                    longitude: 85.32587524249857,
                },
                suggestedRadius: 0,
                isOwned: false,
                centerCoordinates: [85.32587524249857, 23.63355476070245],
                placeId: "5e03a805-6e6e-429b-a451-4728905d9425",
                geoJsonBoundry: {
                    coordinates: [
                        [
                            [85.3237831482601, 23.633147603548743],
                            [85.32389652990841, 23.63428285030827],
                            [85.32794248551612, 23.63393883717814],
                            [85.32782979974985, 23.63270038242583],
                            [85.3237831482601, 23.633147603548743],
                        ],
                    ],
                    type: "Polygon",
                },
                externalId: null,
                source: "FRETRON",
                places: null,
                viewport: null,
                district: null,
                name: "BAR MILL",
                state: null,
                category: "Loading Point",
                subDistrict: null,
                controllingBranchId: null,
            },
        ],
        viewport: null,
        district: "Hazaribag",
        name: "Millis Loc -A",
        state: "Jharkhand",
        category: "Hub",
        subDistrict: null,
        controllingBranchId: null,
    },
    arrivalTime: null,
    expectedActivityStartTime: null,
    secondaryStatus: null,
    consignmentPickUps: null,
    postActWtTime: null,
    tripPoint: {
        outOfTrackSince: null,
        creationTime: null,
        purpose: "Delivery",
        plannedArrival: null,
        currentGpsState: null,
        updates: null,
        sequenceId: null,
        isDisconnected: false,
        isOutOfTrack: false,
        routeDeviationMinimumDistanceConstraint: null,
        eta: null,
        routeId: null,
        expectedActivityStartTime: null,
        actualDeparture: null,
        place: null,
        remainingDistance: null,
        actualActivityStartTime: null,
        forShipmentStages: ["56372265-9be9-412b-bf71-14b358fcc3b2"],
        actualActivityEndTime: null,
        actualArrival: null,
        purposedDistance: null,
        plannedDeparture: null,
        currentLocation: null,
        isAutoCompleted: false,
        coveredDistance: null,
        hub: {
            hubId: null,
            boundary: [
                [
                    [85.32793527032156, 23.630744509207194],
                    [85.32834297518195, 23.63398794102455],
                    [85.32078971703439, 23.634892225230814],
                    [85.32003865911979, 23.631707638515895],
                    [85.32793527032156, 23.630744509207194],
                ],
            ],
            address: null,
            accessibility: "private",
            addedBy: ORG_ID,
            center: {
                latitude: 23.63241536463713,
                longitude: 85.32500837839585,
            },
            suggestedRadius: 0,
            isOwned: null,
            centerCoordinates: [85.32500837839585, 23.63241536463713],
            placeId: "bb42d22a-2390-4f1a-9b75-2ca2af373061",
            geoJsonBoundry: null,
            externalId: null,
            source: "GOOGLE",
            places: [
                {
                    hubId: "bb42d22a-2390-4f1a-9b75-2ca2af373061",
                    boundary: null,
                    address: "Unnamed Road, Patratu, Jharkhand 829143, India",
                    accessibility: "public",
                    addedBy: ORG_ID,
                    center: {
                        latitude: 23.632306,
                        longitude: 85.326023,
                    },
                    suggestedRadius: 0,
                    isOwned: false,
                    centerCoordinates: [85.326023, 23.632306],
                    placeId: "6069f06d-b0c6-4209-a80d-1d2af5e73699",
                    geoJsonBoundry: {
                        coordinates: [
                            [
                                [85.32455489513028, 23.632041818161788],
                                [85.32450450147404, 23.631562664661732],
                                [85.32772063640572, 23.63120635792978],
                                [85.32792313302312, 23.632493956068036],
                                [85.32466017955569, 23.632874847990657],
                                [85.32455489513028, 23.632041818161788],
                            ],
                        ],
                        type: "Polygon",
                    },
                    externalId: null,
                    source: "FRETRON",
                    places: null,
                    viewport: null,
                    district: null,
                    name: "WRM",
                    state: null,
                    category: "Loading Point",
                    subDistrict: null,
                    controllingBranchId: null,
                },
                {
                    hubId: "bb42d22a-2390-4f1a-9b75-2ca2af373061",
                    boundary: null,
                    address:
                        "Jharkhand State Highway 2, Patratu, Jharkhand 829143, India",
                    accessibility: "public",
                    addedBy: ORG_ID,
                    center: {
                        latitude: 23.631785940627918,
                        longitude: 85.31827804627599,
                    },
                    suggestedRadius: 0,
                    isOwned: false,
                    centerCoordinates: [85.31827804627599, 23.631785940627918],
                    placeId: "2ab1d3f4-090f-42e0-b231-86a7d8ef5e45",
                    geoJsonBoundry: {
                        coordinates: [
                            [
                                [85.32114915774473, 23.63466126370742],
                                [85.32099365559714, 23.634022383307123],
                                [85.32083264765595, 23.63331469676314],
                                [85.32055903877382, 23.63202709060177],
                                [85.32264062618268, 23.63181085015737],
                                [85.32283373423587, 23.633078800398483],
                                [85.32305907278077, 23.634474514374393],
                                [85.32114915774473, 23.63466126370742],
                            ],
                        ],
                        type: "Polygon",
                    },
                    externalId: null,
                    source: "FRETRON",
                    places: null,
                    viewport: null,
                    district: null,
                    name: "BILLET YARD",
                    state: null,
                    category: "Unloading Point",
                    subDistrict: null,
                    controllingBranchId: null,
                },
            ],
            viewport: null,
            district: "Hazaribag",
            name: "Millis Loc -A",
            state: "Jharkhand",
            category: "Hub",
            subDistrict: null,
            controllingBranchId: null,
        },
        assosiatedShipmentsId: [],
        status: "NEXT",
    },
    place: null,
    controllingBranchId: null,
    gateOutTime: null,
    status: "NEXT",
};

const ALLOWED_USER_IDS = [
    "868ac373-ed4f-407d-9a26-b6b0e17fae1f", // SYSTEM  Trip Id
    "a42e539c-88f3-42cf-a1e7-d13e0b60833d", // System Integration,
    "7f671e31-a0e7-46c1-8c4b-eb0245684e48", // Sagar Maruti
    "69a70ee3-34b1-4d82-9318-2eefea484214" // Vivek Kumar
];

async function getShById(shId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/admin/shipment/${shId}`;
        let res = await rp({
            uri: url,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: TOKEN,
            },
            json: true,
        });
        if (res.data) {
            return res.data;
        } else {
            return null;
        }
    } catch (e) {
        console.log(`catched Error while getting sh by Id ${e.message}`)
    }
    return null

}

async function getShByExtId(extId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/admin/shipmentsbyexternalId?orgId=${ORG_ID}&externalId=${extId}&includeDeleted=false`;
        let res = await rp({
            uri: url,
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            json: true,
        });
        if (res.data) {
            return res.data;
        } else {
            return null;
        }
    } catch (e) {
        console.log(`catched Error while getting sh by Id ${e.message}`)
    }
    return null

}

async function main(sh, userId, fwdReasons) {
    try {
        let vehicleNo = sh.fleetInfo?.vehicle?.vehicleRegistrationNumber ?? "N/A";
        console.log(`Sh No : ${sh.shipmentNumber} ,Vehicle No : ${vehicleNo} Fwd reason : ${fwdReasons}`);

        if (ALLOWED_USER_IDS.includes(userId)) {
            let lastStage = _.last(sh.shipmentStages ?? []);

            await ensureOrCreateShipment(sh, lastStage);
        } else {
            if (fwdReasons.includes("system.forwarded.round.trip")) {
                console.log("System forwarded case via api maker")
                let lastStage = _.last(sh.shipmentStages ?? []);

                await ensureOrCreateShipment(sh, lastStage);
            } else {
                console.log(
                    "Only System Trip Id or Some Users Who Complete Shipments Creates Round Trip " +
                    userId
                );
            }
        }
    } catch (error) {
        console.log("error : " + error);
    }
    return null
}

async function task(sh) {
    console.log(`updates : ${sh.updates?.forwardReasons} : user ${sh.updates?.userId}`)
    let updates = sh.updates;
    let fwdReasons = sh.updates.forwardReasons
    let userId = updates.userId;
    await main(sh, userId, fwdReasons);
}
// async function getShipments(filter, vehicleNo) {
//     try {
//         let allFields = ["shipmentNumber", "uuid"];
//         let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/v1?filters=${encodeURIComponent(
//             JSON.stringify(filter)
//         )}&allFields=${encodeURIComponent(
//             JSON.stringify(allFields)
//         )}&search=${vehicleNo}`;
//         let res = await rp({
//             uri: url,
//             method: "GET",
//             json: true,
//             headers: {
//                 authorization: TOKEN,
//             },
//         });
//         return res?.length ? res : [];
//     } catch (e) {
//         console.log(`Error getting Shipment ${e.message}`);
//     }
//     return [];
// }

async function createShipment(payload, retryCount = 0) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/with/consignments`;
        let res = await rp({
            url: url,
            method: "POST",
            body: payload,
            headers: {
                Authorization: TOKEN,
            },
            json: true,
        });
        console.log(`Sh create status ${res.status} : err ${res.error}`)
        return res;
    } catch (err) {
        console.log(`Caught Error creating sh- ${err.message}`);
        retryCount = retryCount + 1
        if (retryCount < 3) {
            await delay(retryCount * 1000)
            console.log(`shipment creation retry count: ${retryCount}`);
            return await createShipment(payload, retryCount);
        }
    }
    return { 'data': null, 'status': 400, 'error': 'Some error - not able to create shipment' };
}

async function ensureOrCreateShipment(sh, lastStage) {
    try {
        // let vehicleNo = sh.fleetInfo?.vehicle.vehicleRegistrationNumber;

        // let filter = {
        //     __version: 2,
        //     _not: {
        //         _shipmentStatus_: {
        //             shipmentStatus: ["Completed"],
        //         },
        //     },
        //     "fleetInfo.vehicle.vehicleRegistrationNumber": [vehicleNo],
        // };

        // let shs = await getShipments(filter, vehicleNo);

        // let otherShs = shs.filter((_) => _.shipmentNumber != sh.shipmentNumber);
        // let shIds = otherShs.map((_) => _.uuid);
        // let notCompletedShs = [];
        // for (let shId of shIds) {
        //     let shMaster = await getShById(shId);
        //     if (shMaster?.shipmentStatus != "Completed") {
        //         notCompletedShs.push(shMaster);
        //     }
        // }
        // if (notCompletedShs.length) {
        //     console.log(
        //         "Shipment Already  Created " +
        //         otherShs.map(({ shipmentNumber }) => shipmentNumber)
        //     );
        // } 
        let shNumber = sh.shipmentNumber;
        let shByExtId = await getShByExtId(shNumber);
        if (shByExtId && shByExtId.shipmentStatus != "Completed") {
            console.log(`Shipment ${shNumber} already exists`);
            return;
        } else {
            console.log("creating Shipment");

            let newShStages = [
                {
                    hub: RAILWAY_SLIDING_STAGE.hub,
                    place: RAILWAY_SLIDING_STAGE.place,
                    status: "COMPLETED",
                    arrivalTime: lastStage.arrivalTime,
                    departureTime: lastStage.departureTime,
                },
                {
                    hub: MILIS_LOC_STAGE.hub,
                    place: MILIS_LOC_STAGE.place,
                    status: "UPCOMING",
                },
                {
                    hub: RAILWAY_SLIDING_STAGE.hub,
                    place: RAILWAY_SLIDING_STAGE.place,
                    status: "NEXT",
                },
            ];

            console.log("finally new stages length: " + newShStages.length);

            let shCreatePayload = {
                shipment: {
                    shipmentNumber: null,
                    consignments: [],
                    shipmentDate: Date.now(),
                    shipmentStages: newShStages,
                    fleetInfo: sh.fleetInfo,
                    edd: null,
                    shipmentStatus: "Planned",
                    transportationMode: sh.transportationMode,
                    shipmentType: sh.shipmentType,
                    customFields: [],
                    uuid: null,
                    shipmentTrackingStatus: "Enroute For Delivery",
                    externalShipmentId: shNumber,
                },
                consignments: [],
            };

            let shRes = await createShipment(shCreatePayload);
            if (shRes?.status == 200) {
                let newSh = shRes?.data;
                console.log(`SH- ${newSh?.shipmentNumber} created successfully`);
            } else {
                console.log("Error:  " + shRes?.error);
            }
        }
    } catch (e) {
        console.log(`catched error while ensure or create shipment ${e.message}`)
    }
    return null
}

try {
    await task($event);
} catch (error) {
    console.log("Error in main: " + error.message);
}
