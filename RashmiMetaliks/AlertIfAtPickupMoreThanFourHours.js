const rp = require("request-promise");
const FRT_PUB_BASE_URL = "https://apis.fretron.com";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIwMjA5NzQsInVzZXJJZCI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm9yZ0lkIjoiMjA4YWZkYWQtZGVhYi00Yzc2LThkNDktMzBhNzBmNDIwZjM1IiwibmFtZSI6IkJvdCB0b2tlbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.g5BbII_VTjjjucZL-VhW5gznhBLVdxa5dqcStjFCQM0";
const alertTypePickup = "shipment.standby.limit.reached.pickup";
const alertTypeDelivery = "shipment.standby.limit.reached.delivery";
const index = "shipments_v2";
const ORGID = "208afdad-deab-4c76-8d49-30a70f420f35";

const query = {
    "_source": [
        "uuid",
        "shipmentTrackingStatus",
        "customFields.fieldKey",
        "customFields.value",
        "shipmentStages.arrivalTime",
        "shipmentStages.place.name",
        "shipmentStages.hub.name",
        "alerts",
        "shipmentNumber",
        "fleetInfo.vehicle.vehicleRegistrationNumber",
        "fleetInfo.fleetOwner.name",
        "fleetInfo.fleetOwner.uuid",
        "fleetInfo.fleetOwner.contacts",
        "fleetInfo.driver.mobileNumber",
        "consignments.lineItems.material.name",
        "consignments.consignee.name",
        "currentLocation.address"
    ],
    "size": 200,
    "query": {
        "bool": {
            "must": [
                {
                    "terms": {
                        "shipmentTrackingStatus.keyword": ["At Pickup Point", "At Delivery Point"]
                    }
                },
                {
                    "term": {
                        "orgId.keyword": {
                            "value": "208afdad-deab-4c76-8d49-30a70f420f35"
                        }
                    }
                },
                {
                    "bool": {
                        "must": [

                            {
                                terms: {
                                    "customFields.indexedValue.keyword": [
                                        "Trip Type_Internal Movement",
                                    ],
                                },
                            }
                        ]
                    }
                }
            ],
            "must_not": {
                "terms": {
                    "shipmentStatus.keyword": ["DELETED"]
                }
            }
        }
    }
}

function getAlertSkeleton(type) {
    return {
        "closedBy": null,
        "createdAt": Date.now(),
        "issueId": null,
        "createdBy": null,
        "snoozTime": null,
        "description": "Standy By Limit Reached",
        "type": type,
        "status": "OPEN",
        "updatedAt": null
    };
}

async function getLiveLocation(shipmentId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/share-sh`
        let options = {
            method: "POST",
            uri: url,
            headers: {
                'Authorization': TOKEN
            },
            body: {
                "shId": shipmentId,
                "orgName": "QA-Rashmi Metaliks Ltd.",
                "emails": [],
                "domainName": "https://test.fretron.com",
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

async function getDataFromElasticV2(index, query) {
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
        return res?.hits?.hits ?? null
    } catch (err) {
        console.log(`Catched Error in getting Data From Elastic ${err.message}`)
        return null
    }
}

async function generateAlert(alert, sh) {
    try {
        let res = await rp({
            'uri': `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${sh.uuid}/alert`,
            'method': 'POST',
            'headers': {
                'Authorization': TOKEN
            },
            'json': true,
            'body': alert
        })
        if (res?.status != 200) {
            console.log(`Some error in adding Standy By Limit Reached alert on shipmentNo : ${sh?.shipmentNumber}, error: ${res?.error}`)
        }
    }
    catch (e) {
        console.log(`Some catched error in adding Standy By Limit Reached alert on shipmentNo : ${sh?.shipmentNumber}, error: ${e?.message}`)
    }
}

async function getBPartner(fleetOwnerUuid) {
    try {
        let url = `${FRT_PUB_BASE_URL}/business-partners/v2/partner/${fleetOwnerUuid}`;
        let options = {
            method: "GET",
            uri: url,
            headers: {
                'Authorization': TOKEN
            },
            json: true
        };
        let res = await rp(options);
        if (res?.status === 200) {
            return res.data;
        }
        return null;
    } catch (err) {
        console.log(`Error fetching fleet owner details: ${err.message}`);
        return null;
    }
}

async function sendEmail(jsonArr, to, cc = []) {
    let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/json/email`;
    let payload = {
        data: jsonArr,
        emailInfo: {
            to: to,
            cc: cc,
            subject: "Standy By Limit Reached: Excel Report",
            content: "Please find the attached excel report",
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
    return "Some error in sending email"
}

async function createShipmentDataObject(sh, transporterName = null) {
    let liveLocData = await getLiveLocation(sh?.uuid);
    
    const liveLocationLink = (await getLiveLocation(sh?.uuid))?.data ? 
        `https://alpha.fretron.com/shared-shipment/v4?code=${liveLocData?.data}` : '';

    let currLocation = sh?.currentLocation?.address || '';
    const stageIndex = sh?.shipmentTrackingStatus === "At Pickup Point" ? 0 : 1;
    currLocation += ` (${sh?.shipmentStages?.[stageIndex]?.place?.name || sh?.shipmentStages?.[stageIndex]?.hub?.name || ''})`;

    return {
        'Vehicle Number': sh?.fleetInfo?.vehicle?.vehicleRegistrationNumber || '',
        'Shipment No': sh?.shipmentNumber || '',
        'Trip Status': sh?.shipmentTrackingStatus || '',
        'Material': [...new Set(sh?.consignments?.flatMap(c => c?.lineItems?.map(item => item?.material?.name))?.filter(Boolean))].join(" ") || '',
        'Transporter Name': transporterName || sh?.fleetInfo?.fleetOwner?.name || '',
        'Driver No.': sh?.fleetInfo?.driver?.mobileNumber || '',
        'Origin': sh?.shipmentStages?.[0]?.place?.name || sh?.shipmentStages?.[0]?.hub?.name || '',
        'Destination': sh?.shipmentStages?.[1]?.place?.name || sh?.shipmentStages?.[1]?.hub?.name || '',
        'Customer Name': [...new Set(sh?.consignments?.flatMap(c => c?.consignee?.name)?.filter(Boolean))].join(', ') || '',
        'Live Location Link': liveLocationLink,
        'Current Location': currLocation,
        'Standy By Since': ((Date.now() - sh?.shipmentStages?.[sh?.shipmentTrackingStatus === "At Pickup Point" ? 0 : 1]?.arrivalTime) / (1000 * 60 * 60))?.toFixed(2) + ' hours' || '',
        'Loaded/Unloaded Status': sh?.customFields?.find(field => field?.fieldKey === 'Trip Load')?.value || ''
    };
}

async function createExcelReportConsolidated(shipmentsToAlert) {
    try {
        const to = [
            "sahil.aggarwal@fretron.com"
        ]
        const data = await Promise.all(shipmentsToAlert?.map(sh => createShipmentDataObject(sh)));
        console.log(`total shipments to generate excel report: ${data?.length}`);
        if (data?.length > 0) {
            await sendEmail(data, to);
        }
    } catch (error) {
        console.log(`Error creating Excel report: ${error.message}`);
    }
}

async function createExcelReportTransporterWise(shipmentsToAlert) {
    try {
        const shipmentsByTransporter = shipmentsToAlert.reduce((acc, sh) => {
            const fleetOwnerUuid = sh?.fleetInfo?.fleetOwner?.uuid;

            if (!fleetOwnerUuid) return acc;

            if (!acc[fleetOwnerUuid]) {
                acc[fleetOwnerUuid] = {
                    shipments: [],
                    name: sh?.fleetInfo?.fleetOwner?.name,
                    contacts: sh?.fleetInfo?.fleetOwner?.contacts || []
                };
            }
            acc[fleetOwnerUuid].shipments.push(sh);
            return acc;
        }, {});

        for (const [fleetOwnerUuid, group] of Object.entries(shipmentsByTransporter)) {
            if (!group.contacts?.length) {
                let bPartner = await getBPartner(fleetOwnerUuid);
                group.contacts = bPartner?.contacts || [];
            }

            const data = await Promise.all(group.shipments?.map(sh => createShipmentDataObject(sh, group.name)));

            if (data?.length > 0) {
                const transporterEmails = [...new Set(
                    group.contacts
                        ?.flatMap(contact => contact?.emails || [])
                        ?.filter(Boolean)
                )] || [];

                if (transporterEmails.length > 0) {
                    console.log(`Sending report to transporter ${group.name} with ${data.length} shipments`);
                    await sendEmail(data, ["sahil.aggarwal@fretron.com"]);
                }
            }
        }
    } catch (error) {
        console.log(`Error creating transporter-wise Excel reports: ${error.message}`);
    }
}

async function main() {
    const shipments = (await getDataFromElasticV2(index, query))?.map(ship => ship?._source);
    if (!shipments) {
        console.log("No shipments found");
        return;
    }
    const fourHoursInMs = 4 * 60 * 60 * 1000;
    const currentTime = Date.now();
    const shipmentsToAlert = shipments?.filter(shipment => {
        const arrivalTime = shipment?.shipmentStages?.[0]?.arrivalTime;
        if (!arrivalTime) return false;

        const timeDifference = currentTime - arrivalTime;
        if (timeDifference <= fourHoursInMs) return false;

        const alerts = shipment?.alerts || [];
        const status = shipment?.shipmentTrackingStatus;
        const alertType = status === "At Pickup Point" ? alertTypePickup : alertTypeDelivery;
        return !alerts?.some(alert => alert?.type === alertType);
    });

    console.log(`total shipments to alert: ${shipmentsToAlert?.length}`);
    for (let sh of shipmentsToAlert) {
        const status = sh?.shipmentTrackingStatus;
        const alertType = status === "At Pickup Point" ? alertTypePickup : alertTypeDelivery;
        let alert = getAlertSkeleton(alertType);
        await generateAlert(alert, sh);
    }
    console.log("-----Generating and Sending Consolidated Excel reports-----");
    await createExcelReportConsolidated(shipmentsToAlert);
    console.log("-----Generating and Sending Transporter Wise Excel reports-----");
    await createExcelReportTransporterWise(shipmentsToAlert);
}

main();
