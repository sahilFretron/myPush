const SHIPMENT_ID = $event.uuid
const ORG_ID = "d255a000-f271-489e-9408-b9fb7d592b44"
const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODExMTQyMTYsInVzZXJJZCI6ImJvdHVzZXItLWZmYjNlZjBlLWI2MTUtNDkzNC1hNmY5LTVhYzEzYzZlNmRiZSIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLWZmYjNlZjBlLWI2MTUtNDkzNC1hNmY5LTVhYzEzYzZlNmRiZSIsIm9yZ0lkIjoiZDI1NWEwMDAtZjI3MS00ODllLTk0MDgtYjlmYjdkNTkyYjQ0IiwibmFtZSI6IlNISVBNRU5UX1RPS0VOIiwib3JnVHlwZSI6IkZMRUVUX09XTkVSIiwiaXNHb2QiOmZhbHNlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.0DNhxf1UDvoZvO-fJaZiNcsbBkJUhcotQ7GsTdR7yCM"

//****************************************

const CUSTOMER_EMAIL_PHONE_INFO = [
    {
        "shipToPartyCode": "1010002719",
        "shipToPartyName": "GILLETTE INDIA LIMITED",
        "shipToCity": "BHIWADI",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1100001584",
        "shipToPartyName": "ACE PERSONAL CARE P LTD",
        "shipToCity": "HYDERABAD",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010014024",
        "shipToPartyName": "PPAP Automotive",
        "shipToCity": "NOIDA",
        "emails": ["mayank.goyal@jindalstainless.com"],
        "phone": ["7230091323"]
    },
    {
        "shipToPartyCode": "1010019258",
        "shipToPartyName": "RKRM INTERNATIONAL PRODUCTS",
        "shipToCity": "UNA",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010004759",
        "shipToPartyName": "ALFA FLEXI TUBES",
        "shipToCity": "BAHADURGARH",
        "emails": ["mayank.goyal@jindalstainless.com"],
        "phone": ["7230091323"]
    },
    {
        "shipToPartyCode": "1010018761",
        "shipToPartyName": "VNS PROTECH",
        "shipToCity": "SAMBA",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010017073",
        "shipToPartyName": "SUPREME SHAVERS INDIA PRIVATE LIMIT",
        "shipToCity": "SONIPAT",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010009226",
        "shipToPartyName": "GreatWhite Global Pvt Ltd",
        "shipToCity": "HARIDWAR",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1010012953",
        "shipToPartyName": "Zircon Global Manufacturing (LLP)",
        "shipToCity": "JAMMU",
        "emails": ["shailesh.arya@jindalstainless.com", "pradyumn.mattu@jindalstainless.com"],
        "phone": ["9958654400", "9971595973"]
    },
    {
        "shipToPartyCode": "1100002119",
        "shipToPartyName": "DHRUV EXIM",
        "shipToCity": "",
        "emails": [],
        "phone": ["9820094706"]
    },
    {
        "shipToPartyCode": "1010016697",
        "shipToPartyName": "SHREE VENKTESH WIRES & STEELS PVT.L",
        "shipToCity": "",
        "emails": [],
        "phone": ["9769760407"]
    },
    {
        "shipToPartyCode": "1010000571",
        "shipToPartyName": "SHREE VENKTESH WIRES & STEELS PVT.L",
        "shipToCity": "",
        "emails": [],
        "phone": ["9769760407"]
    },
    {
        "shipToPartyCode": "1010021393",
        "shipToPartyName": "UJALA STAINLESS PRIVATE LIMITED",
        "shipToCity": "",
        "emails": [],
        "phone": ["9899026236"]
    },
    {
        "shipToPartyCode": "1010011865",
        "shipToPartyName": "D M METALLOYS PRIVATE LIMITED",
        "shipToCity": "",
        "emails": [],
        "phone": ["9324042086"]
    },
    {
        "shipToPartyCode": "1010011047",
        "shipToPartyName": "D M METALLOYS PRIVATE LIMITED",
        "shipToCity": "",
        "emails": [],
        "phone": ["9324042086"]
    },
    {
        "shipToPartyCode": "1010017453",
        "shipToPartyName": "M.M.METALS",
        "shipToCity": "",
        "emails": [],
        "phone": ["9324042086"]
    },
    {
        "shipToPartyCode": "1010000342",
        "shipToPartyName": "LARSEN & TOUBRO LTD",
        "shipToCity": "HAZIRA",
        "emails": ["supriyo.paul@jindalstainless.com"],
        "phone": ["8167533539"]
    },
    {
        "shipToPartyCode": "1010001057",
        "shipToPartyName": "KOCH ENGINEERED SOLUTIONS",
        "shipToCity": "BARODA",
        "emails": ["supriyo.paul@jindalstainless.com", "vedant.jalan@jindalstainless.com"],
        "phone": ["8167533539", "8303810195"]
    },
    {
        "shipToPartyCode": "1010002560",
        "shipToPartyName": "MASROS ENGINEERS",
        "shipToCity": "FARIDABAD",
        "emails": ["mayank.goyal@jindalstainless.com", "vedant.jalan@jindalstainless.com"],
        "phone": ["7230091323", "8303810195"]
    },
    {
        "shipToPartyCode": "1010002598",
        "shipToPartyName": "AEROFLEX",
        "shipToCity": "TALOJA",
        "emails": ["supriyo.paul@jindalstainless.com", "vedant.jalan@jindalstainless.com"],
        "phone": ["8167533539", "8303810195"]
    },
    {
        "shipToPartyCode": "1010003360",
        "shipToPartyName": "SHARDA MOTOR",
        "shipToCity": "KANCHIPURAM",
        "emails": ["vedant.jalan@jindalstainless.com", "supriyo.paul@jindalstainless.com"],
        "phone": ["8303810195", "8167533539"]
    },
    {
        "shipToPartyCode": "1010003443",
        "shipToPartyName": "SHREE MPF",
        "shipToCity": "CHENNAI",
        "emails": ["vedant.jalan@jindalstainless.com", "supriyo.paul@jindalstainless.com"],
        "phone": ["8303810195", "8167533539"]
    },
    {
        "shipToPartyCode": "1010003486",
        "shipToPartyName": "NEEL METAL",
        "shipToCity": "GURGAON",
        "emails": ["supriyo.paul@jindalstainless.com"],
        "phone": ["8167533539"]
    },
    {
        "shipToPartyCode": "1010003519",
        "shipToPartyName": "ELRINGKLINGER AUTOMOTIVE",
        "shipToCity": "PUNE",
        "emails": ["vedant.jalan@jindalstainless.com"],
        "phone": ["8303810195"]
    },
    {
        "shipToPartyCode": "1010003663",
        "shipToPartyName": "VICTOR",
        "shipToCity": "PUNE",
        "emails": ["vedant.jalan@jindalstainless.com"],
        "phone": ["8303810195"]
    },
    {
        "shipToPartyCode": "1010003714",
        "shipToPartyName": "INGRESS AUTO",
        "shipToCity": "MANESAR",
        "emails": ["supriyo.paul@jindalstainless.com"],
        "phone": ["8167533539"]
    },
    {
        "shipToPartyCode": "1010005703",
        "shipToPartyName": "FINEPAC",
        "shipToCity": "PUNE",
        "emails": ["vedant.jalan@jindalstainless.com"],
        "phone": ["8303810195"]
    }
]


//***************************************

const CUSTOMER_INFO = [
    {
        "ship_to_part_code": "1010003294",
        "ship_party_name": "JOHNSON LIFTS PVT LTD",
        "ship_to_city": "Kanchip",
        "email_ids": "gokul@johnsonliftsltd.com",
        "kam_name": "Keerthish VB"
    },
    {
        "ship_to_part_code": "1010009906",
        "ship_party_name": "JOHNSON LIFTS PVT LTD",
        "ship_to_city": "Butiburi",
        "email_ids": "rahul@johnsonliftsltd.com",
        "kam_name": "Keerthish VB"



    },
    {
        "ship_to_part_code": "1010001532",
        "ship_party_name": "VRV ASIA PACIFIC PVT LTD",
        "ship_to_city": "Sricity",
        "email_ids": "sridhar.gl@chartindustries.com",
        "kam_name": "Arun CK"



    },

    {
        "ship_to_part_code": "1010002063",
        "ship_party_name": "CRYOLOR ASIA PACIFIC PVT LTD",
        "ship_to_city": "Chengalpettu-Chennai",
        "email_ids": "muthukumaran.d@airliquide.com",
        "kam_name": "Arun CK"



    },

    {
        "ship_to_part_code": "1100001508",
        "ship_party_name": "NIPPON SLIT AND CUTTING LINE",
        "ship_to_city": "Chennai",
        "email_ids": "nagarajt@hyundai-steel.com",
        "kam_name": "Keerthish VB"



    },

    {
        "ship_to_part_code": "1100001805",
        "ship_party_name": "METAL ONE CORPORATION INDIA",
        "ship_to_city": "Chennai",
        "email_ids": "s.rohini@metalone.co.in",
        "kam_name": "Keerthish VB"



    },

    {
        "ship_to_part_code": "1100001805",
        "ship_party_name": "METAL ONE CORPORATION INDIA",
        "ship_to_city": "Chennai",
        "email_ids": "kasi.vishwanath@metalone.co.in",
        "kam_name": "Keerthish VB"



    },

    {
        "ship_to_part_code": "1010003605",
        "ship_party_name": "Tube investments",
        "ship_to_city": "Chennai",
        "email_ids": "rameshk@tii.murugappa.com",
        "kam_name": "Keerthish VB"



    },

    {
        "ship_to_part_code": "1010003698",
        "ship_party_name": "India Government Mint",
        "ship_to_city": "HYDERABAD",
        "email_ids": "ashwani@jindalstainless.com",
        "kam_name": "Ashwani Awasthi"

    },

    {
        "ship_to_part_code": "1010001699",
        "ship_party_name": "India Government Mint",
        "ship_to_city": "KOLKATA",
        "email_ids": "ashwani@jindalstainless.com",
        "kam_name": "Ashwani Awasthi"

    },
    {
        "ship_to_part_code": "1010010287",
        "ship_party_name": "India Government Mint",
        "ship_to_city": "MUMBAI",
        "email_ids": "ashwani@jindalstainless.com",
        "kam_name": "Ashwani Awasthi"
    }

]
const NEW_CUSTOMER_CODES = [
    "1010000342",
    "1010000624",
    "1010000805",
    "1010001057",
    "1010001669",
    "1010002560",
    "1010002598",
    "1010002874",
    "1010002921",
    "1010003360",
    "1010003443",
    "1010003486",
    "1010003519",
    "1010003663",
    "1010003714",
    "1010003761",
    "1010003798",
    "1010005703",
    "1010007834",
    "1010008463",
    "1010009343",
    "1010010252",
    "1010011641",
    "1010012609",
    "1010012953",
    "1010014157",
    "1010014813",
    "1010016181",
    "1010017073",
    "1010017103",
    "1010017178",
    "1010017425",
    "1010017623",
    "1010018535",
    "1010018761",
    "1010019332",
    "1010019547",
    "1010019567",
    "1030000012",
    "1030000158",
    "1030000160",
    "1030000198",
    "1090000009",
    "1100001814",
    "1010019462",
    "1010013864",
    "1010000624",
    "1010010715",
    "1010003758",
    "1010011317",
    "1100000859",
    "1010020151",
    "1090000113",
    "1010008997",
    "1010008551",
    "1010010807",
    "1100002020",
    "1010018991",
    "1100002119",
    "1010016697",
    "1010000571",
    "1010021393",
    "1010011865",
    "1010011047",
    "1010017453",
    "1090000118",
    "1010003074",
    "1010002626"
]

console.log($event.shipmentNumber)


//*************************************************************************** */
async function sendSms(content, mobileNumber) {
    let res = await rp({
        method: "post",
        uri: `${FRT_PUB_BASE_URL}/notifications/smsing/sms`,
        body: {
            to: mobileNumber,
            content: content,
        },
        json: true,
    });
    return res;
}

async function getLiveLocation(shipmentId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/share-sh`
        let options = {
            method: "POST",
            uri: url,
            headers: {
                'Authorization': token
            },
            body: {
                "shId": shipmentId,
                "orgName": "Jindal Stainless Ltd",
                "emails": [],
                "domainName": "https://alpha.fretron.com",
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

async function getCnsByShId(shId) {
    const response = await rp({
        uri: `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${shId}/consignments`,
        method: "GET",
        json: true,
        headers: {
            Authorization: token,
        },
    });
    return response.data;
}

async function sendEmail(to, cc, subject, content, html) {
    let url = `${FRT_PUB_BASE_URL}/notifications/ses/email`;
    let reqObj = {
        to: to.join(),
        cc: cc.join(),
        subject: subject ? subject : "",
        content: content ? content : "",
        html: html ? html : "",
    };
    let res = await rp({
        method: "POST",
        uri: url,
        headers: {
            "Content-Type": "application/json",
        },
        formData: reqObj,
        timeout: 10000,
    });
    return res;
}

async function getBpByKeyValue(key, value) {
    let url = `${FRT_PUB_BASE_URL}/business-partners/v2/admin/partner?key=${key}&value=${value}&orgId=${ORG_ID}`
    try {
        let res = await rp({
            method: "GET",
            uri: url,
            json: true
        })

        if (res.status == 200) {
            return res.data
        }
    } catch (e) {
        console.log(`Catched error in getting bp by ${key} ${value}  : ${e.message}`)
    }
    return null
}

function _generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>Shipment Details and Tracking Link</title>
      <style>
        table {
          border-collapse: collapse;
          border: 1px solid black;
        }
    
        th,
        td {
          border: 1px solid black;
          padding: 5px;
          text-align: left;
        }
      </style>
    </head>
    
    <body>
      <p>Hello Team,</p>
      <p>Greetings from Fretron!!</p>
      <p>Please find the shipment details and tracking link below:</p>
      <table>
        <thead>
          <tr>
            <th>Shipment Date</th>
            <th>Vehicle Number</th>
            <th>Customer Name</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Tracking Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${data.shipmentDate}</td>
            <td>${data.vehicleNo}</td>
            <td>${data.shipToParty}</td>
            <td>${data.origin}</td>
            <td>${data.destination}</td>
            <td><a href="${data.trackingLink}">link</a></td>
          </tr>
        </tbody>
      </table>
    </body>
    
    </html>
        `
}

function formatDate(epoch) {
    const date = new Date(epoch);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}-${month}-${year}`;
}

if ($event.shipmentTrackingStatus == "Enroute For Delivery" && $event.updates.description.includes("Marked vehicle departed from")) {

    try {
        const cns = await getCnsByShId(SHIPMENT_ID);

        if (!cns || !cns.length) {
            console.log("No Consignments")
            return
        }
        const customerCodes = _.uniq(cns.map((cn) => cn.customFields?.find((e) => e.fieldKey == "Ship to Party")?.value))
        console.log({ customerCodes })

        for (const customerCode of customerCodes) {
            if (!customerCode || (!CUSTOMER_INFO.find((e) => e.ship_to_part_code == customerCode) && !NEW_CUSTOMER_CODES.includes(customerCode))) {
                console.log(`Customer not found ${customerCode}`)
                continue
            }

            const customerMaster = await getBpByKeyValue("externalId", customerCode)

            const shipmentDate = formatDate($event.shipmentDate)
            const vehicleNo = $event.fleetInfo.vehicle.vehicleRegistrationNumber
            const customer = customerMaster?.name
            const origin = _.first($event.shipmentStages)?.place?.name ?? _.first($event.shipmentStages)?.hub?.name ?? ""
            const destination = _.last($event.shipmentStages)?.place?.name ?? _.last($event.shipmentStages)?.hub?.name ?? ""
            const trackingLink = `https://test.fretron.com/shared-shipment?uuid=${SHIPMENT_ID}`

            //************************************************** */
            const liveLocData = await getLiveLocation(SHIPMENT_ID)
                const smsLiveLocationLink = liveLocData?.data ?
                    `https://alpha.fretron.com/shared-shipment/v4?code=${liveLocData?.data}` : '';

            //************************************************** */

            const customerEmails = customerMaster.contacts?.find((e) => e.name.includes("(KAM)"))?.emails

            let to = customerEmails ? customerEmails : [CUSTOMER_INFO.find((e) => e.ship_to_part_code == customerCode)?.email_ids]
            if (NEW_CUSTOMER_CODES.includes(customerCode)) {
                console.log("Customer Found From Latest Records")
                to = ["supriyo.paul@jindalstainless.com"]
            }
            const cc = [
                'nishant.girdhar@jindalstainless.com',
                'dariya.singh@jindalstainless.com',
                'ankita.saxena@jindalstainless.com',
                'monu.khan@fretron.com',
                'devendra.singh@fretron.com'        
            ]
            const subject = `Shipment Tracking link - ${vehicleNo} - ${customer}`
            const html = _generateHTML({ shipmentDate, vehicleNo, shipToParty: customer, origin, destination, trackingLink })
            if(to.length>0){
                const emailRes = await sendEmail(to, cc, subject, null, html)
                console.log(emailRes)
            } else {
                console.log(`No emails found for customer code: ${customerCode}`)
            }


            //************************************************** */
            try {
                const customerInfo = CUSTOMER_EMAIL_PHONE_INFO.find(info => info.shipToPartyCode === customerCode)
                if (customerInfo && customerInfo.phone && customerInfo.phone.length > 0) {
                    const smsContent = `Shipment No. - ${$event.shipmentNumber} Shipment Date. - ${shipmentDate} Vehicle No. - ${vehicleNo} Shipment origin. - ${origin} Destination - ${destination} Link - ${smsLiveLocationLink}`
                    console.log(smsContent)
                    for (const phoneNumber of customerInfo.phone) {
                        const smsRes = await sendSms(smsContent, phoneNumber)
                        console.log(`SMS sent to ${phoneNumber}:`, smsRes)
                    }
                    to = customerInfo.emails
                    if(to.length > 0){
                        await sendEmail(to, cc, subject, null, html)
                    }
                } else {
                    console.log(`No phone numbers found for customer code: ${customerCode}`)
                }
            } catch (error) {
                console.log(`Error sending SMS for customer ${customerCode}:`, error.message)
            }
            //************************************************** */
        }
    } catch (e) {
        console.log(`Cathed Error : ${e.message}`)
    }
}
