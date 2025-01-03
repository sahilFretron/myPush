const rp = require("request-promise");
const FRT_PUB_BASE_URL = "https://apis.fretron.com";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIwMjA5NzQsInVzZXJJZCI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm9yZ0lkIjoiMjA4YWZkYWQtZGVhYi00Yzc2LThkNDktMzBhNzBmNDIwZjM1IiwibmFtZSI6IkJvdCB0b2tlbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.g5BbII_VTjjjucZL-VhW5gznhBLVdxa5dqcStjFCQM0";
const alertTypePickup = "shipment.standby.limit.reached.pickup";
const alertTypeDelivery = "shipment.standby.limit.reached.delivery";
const index = "shipments_v2";
const XLSX = require('xlsx');
const fs = require('fs');

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
        "fleetInfo.driver.mobileNumber",
        "consignments.lineItems.material.name"
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
            console.log(`Successfully shared shipment details for shipmentId: ${shipmentId}`)
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
        if (res?.status === 200) {
            console.log(`Standy By Limit Reached alert successfully added on shipmentNo : ${sh?.shipmentNumber}`)
        } else {
            console.log(`Some error in adding Standy By Limit Reached alert on shipmentNo : ${sh?.shipmentNumber}, error: ${res?.error}`)
        }
    }
    catch (e) {
        console.log(`Some catched error in adding Standy By Limit Reached alert on shipmentNo : ${sh?.shipmentNumber}, error: ${e?.message}`)
    }
}

async function sendEmailWithAttachment(filePath) {
    try {
        let url = `${FRT_PUB_BASE_URL}/notifications/ses/email`;
        let reqObj = {
            to: ['sahil.aggarwal@fretron.com'],
            subject: "Delayed Shipments Report",
            content: "Please find attached the report for delayed shipments.",
            file: fs.createReadStream(filePath)
        };

        var options = {
            method: "POST",
            uri: url,
            headers: {
                "Content-Type": "application/json",
            },
            formData: reqObj,
            json: true,
        };
        let res = await rp(options);
        if (res == "SMTP: Email sent to successfully.") {
            fs.unlinkSync(filePath);
            console.log("Email sent successfully and file deleted");
            return res;
        } else {
            throw new Error(res.error);
        }
    } catch (error) {
        console.log("Error sending mail- " + error.message);
        return null;
    }
}

async function createExcelReport(shipmentsToAlert) {
    try {
        const data = await Promise.all(shipmentsToAlert?.map(async sh => {
            let liveLocData = await getLiveLocation(sh?.uuid);

            const liveLocationLink = liveLocData?.status === 200 && liveLocData?.data
                ? `https://alpha.fretron.com/shared-shipment/v4?code=${liveLocData.data}`
                : '';

            return {
                'Vehicle Number': sh?.fleetInfo?.vehicle?.vehicleRegistrationNumber,
                'Shipment No': sh?.shipmentNumber,
                'Trip Status': sh?.shipmentTrackingStatus,
                'Material': sh?.consignments?.flatMap(c => c?.lineItems?.map(item => item?.material?.name))?.filter(Boolean)?.join(" "),
                'Transporter Name': sh?.fleetInfo?.fleetOwner?.name,
                'Driver No.': sh?.fleetInfo?.driver?.mobileNumber,
                'Origin': sh?.shipmentStages?.[0]?.place?.name || sh?.shipmentStages?.[0]?.hub?.name,
                'Destination': sh?.shipmentStages?.slice(1)?.map(stage => stage?.place?.name || stage?.hub?.name)?.filter(Boolean)?.join(', '),
                'Live Location Link': liveLocationLink,
                'Standy By Since': ((Date.now() - sh?.shipmentStages?.[0]?.arrivalTime) / (1000 * 60 * 60))?.toFixed(2) + ' hours',
                'Loaded/Unloaded Status': sh?.customFields?.find(field => field?.fieldKey === 'Trip Load')?.value || ''
            };
        }));
        console.log(`total shipments to generate excel report: ${data?.length}`);
        if (data?.length > 0) {
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Delayed Shipments');
    
            const fileName = `Delayed_Shipments_${Date.now()}.xlsx`;
            XLSX.writeFile(workbook, fileName);
            console.log(`Excel report generated: ${fileName}`);
    
            await sendEmailWithAttachment(fileName);
        }


    } catch (error) {
        console.log(`Error creating Excel report: ${error.message}`);
    }
}

async function main() {
    let shipmentsFromElastic = await getDataFromElasticV2(index, query);
    let shipments = shipmentsFromElastic?.map(ship => ship?._source);
    if (!shipments) {
        console.log("No shipments found");
        return;
    }

    const fourHoursInMs = 4 * 60 * 60 * 1000;
    const currentTime = Date.now();
    const delayedShipments = shipments?.filter(shipment => {
        const arrivalTime = shipment?.shipmentStages?.[0]?.arrivalTime;
        if (!arrivalTime) return false;

        const timeDifference = currentTime - arrivalTime;
        return timeDifference > fourHoursInMs;
    });
    console.log(`total delayed shipments: ${delayedShipments?.length}`);
    const shipmentsToAlert = delayedShipments?.filter(shipment => {
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
    await createExcelReport(shipmentsToAlert);

}
main();
