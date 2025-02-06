//Written by Sahil - 6 Feb 2025
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzU5OTEwNTcsInVzZXJJZCI6ImJvdHVzZXItLTg2ZWMwZDgwLWJlM2ItNDA2OC04OTUzLWMzODRmZGFhMTQxYSIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTg2ZWMwZDgwLWJlM2ItNDA2OC04OTUzLWMzODRmZGFhMTQxYSIsIm9yZ0lkIjoiMzIxODg3YjYtOGY0My00Mjk5LThiNzUtNDdkM2VkMDM5ZDRlIiwibmFtZSI6IkludGVncmF0aW9uIEludGVybmFsIE1vdmVtZW50IHRva2VuIiwib3JnVHlwZSI6IkZMRUVUX09XTkVSIiwiaXNHb2QiOmZhbHNlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.nGvbEGdhak95n4u2nn8qysxAY-ImSuzAXkBCEcpEZPY";
const ORGID = "321887b6-8f43-4299-8b75-47d3ed039d4e";
let shipment = $event
console.log(shipment.shipmentNumber)
// let events = shipment.updates.forwardReasons
// events = events.join(", ")
// console.log(events)

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
                "orgName": "Rashmi Metaliks Ltd",
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

async function sendEmail(html, jsonArr, to, cc = []) {
    let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/json/email`;
    let payload = {
        data: jsonArr,
        emailInfo: {
            to: to,
            cc: cc,
            subject: "Route Deviation: Excel Report",
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
        console.log(res)
    } catch (e) {
        console.log(`Catched Error in sending json to excel email : ${e.message}`);
    }
    return "Mail Sent"
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
        'Material': [...new Set(sh?.consignments?.flatMap(c => c?.lineItems?.map(item => item?.material?.name))?.filter(Boolean))].join(" ") || '',
        'Fleet Owner Name': transporterName || sh?.fleetInfo?.fleetOwner?.name || '',
        'Driver No.': sh?.fleetInfo?.driver?.mobileNumber || '',
        'Source': sh?.shipmentStages?.[0]?.place?.name || sh?.shipmentStages?.[0]?.hub?.name || '',
        'Destination': sh?.shipmentStages?.[1]?.place?.name || sh?.shipmentStages?.[1]?.hub?.name || '',
        'Live Location Link': liveLocationLink,
        'Current Location': currLocation,
        'Utilization %': sh?.customFields?.find(field => field?.fieldKey === "Utilization Percentage")?.value || '',
        'Vehicle': sh?.fleetInfo?.vehicle?.vehicleLoadType?.name || '',
        'Invoice No.': sh?.consignments?.flatMap(c => c?.invoiceNo)?.filter(Boolean).join(", ") || ''
    };
}

async function createExcelReportConsolidated(shipment) {
    try {
        const to = [
            "logistics.kgp@rashmigroup.com",
            "logistichead@rashmigroup.com",
            "dipdispatchcommon@rashmigroup.com",
            "Rishi.Prasad@rashmigroup.com",
            "Manoj.Sharaf@rashmigroup.com",
            "Ramez.Raza@rashmigroup.com",
            "abhishek.kumar1@rashmigroup.com",
            "finishing.kgp@rashmigroup.com",
            "biswajit.karmakar@fretron.com",
            "Gyanendra.Jha@rashmigroup.com",
            "monu.khan@fretron.com",
            "sahil.aggarwal@fretron.com"
        ]
        let bPartner = await getBPartner(shipment?.fleetInfo?.fleetOwner?.uuid);
        let contacts = bPartner?.contacts.flatMap(contact => contact?.emails || []) || [];
        to.push(...contacts);
        console.log("Sending Mail to:")
        to.forEach(mail => console.log(mail))
        const data = await createShipmentDataObject(shipment);
        if (data) {
            let content = convertJSONtoHTML(data);
            await sendEmail(content, [data], to);
        }
    } catch (error) {
        console.log(`Error creating Excel report: ${error.message}`);
    }
}

function convertJSONtoHTML(jsonData) {
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
        <h2 style="color: #333;">Route Deviation Report</h2>
        <div style="overflow-x: auto;">
            <table style="border-collapse: collapse; width: 100%; min-width: 600px; border: 1px solid #ddd;">
                ${headers.map((header, index) => `
                    <tr style="background-color: ${index % 2 === 0 ? '#ffffff' : '#f8f9fa'}">
                        <th style="border: 1px solid #ddd; padding: 12px 8px; text-align: left; color: #333; width: 200px;">${header}</th>
                        <td style="border: 1px solid #ddd; padding: 8px; color: #333;">${jsonData[header] || ''}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This is an automated report. Please do not reply to this email.
        </p>
    </div>
</body>
</html>`;

    return htmlContent;
}

async function main(shipment) {
    let loadedCf = shipment?.customFields?.find(cf => cf?.indexedValue?.[0] === "Trip Load_loaded");
    if (loadedCf) {
        console.log("Trip Type: Loaded");
        console.log("Sending Report")
        await createExcelReportConsolidated(shipment);
    } else {
        console.log("Trip Type is not Loaded");
        console.log("Not Sending Report")
    }
}

return await main(shipment);
