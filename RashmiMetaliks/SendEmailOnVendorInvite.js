//Written by Sahil - 6 Feb 2025
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzkzNTUwMDEsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiIyMDhhZmRhZC1kZWFiLTRjNzYtOGQ0OS0zMGE3MGY0MjBmMzUiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.5mz4dHa2TcYEyVsF9MfR6SZNAuXZKmM4xgwCLeChYHQ";
const ORGID = "208afdad-deab-4c76-8d49-30a70f420f35";
const rp = require("request-promise");
const INVITE_EVENT = "auction.transporter.invite.event"
const AUCTION_CLOSED_EVENT = "auction.closed.status.event"
const FRT_PUB_BASE_URL = "https://apis.fretron.com";
let auction = $event

let partnerIndex = "bpartners"
const partnerQuery = (uuids) => {
    return {
        "_source": ["contacts", "name", "type"],
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
            throw new Error("Error in getting vendor portal token")
        }
        return response.data
    } catch (err) {
        console.error("Error getting vendor portal token:", err.message)
        throw err
    }
}

async function sendEmail(subject, html, jsonArr, to, cc = []) {
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
            "monu.khan@fretron.com"
        ];
        if (forwardedReasons.includes(INVITE_EVENT)) {
            let bPartners = await getDataFromElastic(partnerIndex, partnerQuery(auction.allowedTransporters));

            // Send individual emails to each business partner
            for (const bp of bPartners) {
                const bpPortalToken = await getTokenForVendorPortal(bp.uuid, bp.type);
                const data = await createAuctionDataObject(auction, bpPortalToken);
                const partnerName = bp?.name || "Valued Partner";
                const partnerEmails = bp?.contacts?.flatMap(contact => contact?.emails || []) || [];

                if (partnerEmails.length === 0) {
                    console.log(`Sending Mail to ${partnerName}:`, partnerEmails);
                    const to = [...new Set([...partnerEmails, ...defaultRecipients])];

                    if (data) {
                        let subject = `Invitation for Bidding on Outbound Freight Requirement`
                        let content = convertJSONtoHTMLInvite(data, partnerName);
                        await sendEmail(subject, content, [data], to);
                        console.log("Mail Sent")
                    }
                }
            }
        }
        if (forwardedReasons.includes(AUCTION_CLOSED_EVENT)) {
            let subject = `Auction (#${auction.orderId}) Ended – Winner Selection Required`;
            let data = await createAuctionDataObject(auction, "NONE");
            let linkJson = {
                "orderId": auction.uuid,
                "orderNo": auction.orderId
            }
            let to = ["Gyanendra.Jha@rashmigroup.com","monu.khan@fretron.com"]
            let portalLink = `https://alpha.fretron.com/tracknet/sales/bidding/detail?data=${btoa(JSON.stringify(linkJson))}`
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
                                ? `<a href="${jsonData[header]}" style="color: #0066cc;">Portal Link</a>`
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
