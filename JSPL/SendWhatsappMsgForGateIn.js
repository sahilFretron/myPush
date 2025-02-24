let $event = {
    "shipmentId": "1c6ae50b-b0e5-4d49-be21-b66a91b9a819",
    "cfs": [
        {
            "indexedValue": [],
            "fieldKey": "Gate In Time for Do Issue Sh",
            "multiple": true,
            "description": "",
            "remark": "",
            "uuid": "b88a5a02-cec7-4e99-8ab7-69b6f8b09d4e",
            "required": false,
            "accessType": null,
            "input": "date",
            "unit": "",
            "valueType": "string",
            "options": [],
            "fieldType": "dateTime",
            "value": 1740373834872,
            "isRemark": false
        }
    ],
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDAxMzg0NzMsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiI4MjM5NDdhMy0wMmMwLTRlNjUtOGY0ZS0yMWRhMzcwZWE2Y2QiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.94--hXMsI2jLCuKmXxidNRdlWz9ZpIHSaYMnO96e5d4"
}

let shId = $event.shipmentId
let cfTime = $event.cfs
let TOKEN = $event.token
let orgId = "823947a3-02c0-4e65-8f4e-21da370ea6cd"
// let mobile = ["9262290898", "8112874181", "9934010695", "9771437491"]
let mobile = ["7056032744", "8591483735"]
let rp = require("request-promise")
let FRT_PUB_BASE_URL = "https://apis.fretron.com"


function getWhatsappPayload(message) {
    return {
        "type": "template",
        "templateName": "cn_tracking",
        "components": [
            {
                "type": "body",
                "parameters": [
                    {
                        "type": "text",
                        "text": message.obdNumber
                    },
                    {
                        "type": "text",
                        "text": message.vehicleNumber
                    },
                    {
                        "type": "text",
                        "text": message.materialDetails
                    },
                    {
                        "type": "text",
                        "text": message.specifiedTime
                    },
                    {
                        "type": "text",
                        "text": message.gateInTime
                    }
                ]
            }
        ]
    }
}

async function getShWithCn(shId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${shId}?skipCn=true`;
        let res = await rp({
            uri: url,
            method: "GET",
            json: true,
            headers: {
                authorization: `Bearer ${TOKEN}`,
            },
        });

        if (res?.error) {
            console.log(`Error: ${JSON.stringify(res.error)}`);
            return null;
        }
        return res.data;
    } catch (e) {
        console.log(`Error Getting Shipment: ${e.message}`);
        return null;
    }
}

async function sendWhatsappMessage(payload) {
    let options = {
        url: `${FRT_PUB_BASE_URL}/notification-manager/admin/whatsapp?orgId=${orgId}`,
        method: "POST",
        json: true,
        body: payload
    }
    try {
        let res = await rp(options);
        if (res?.error) {
            console.log(`Error sending WhatsApp message: ${JSON.stringify(res.error)}`);
            return false;
        }
        return true;
    } catch (e) {
        console.log(`Error sending WhatsApp message: ${e.message}`);
        return false;
    }
}

async function main(shId) {
    let shipment = await getShWithCn(shId)

    shipment.customFields.push({
        "indexedValue": [
            "MaterialCode DO_0072187626 : 000011_WR_SAE10B35-S_10.0DIA"
        ],
        "fieldKey": "MaterialCode DO_0072187626 : 000011",
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
        "value": "WR_SAE10B35-S_10.0DIA",
        "isRemark": false
    })
    shipment.customFields.push({
        "indexedValue": [
            "DOItemWT DO_0072187626 : 000011_20.000 "
        ],
        "fieldKey": "DOItemWT DO_0072187626 : 000011",
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
        "value": "20.000 ",
        "isRemark": false
    })
    if (shipment) {
        let doIssued = shipment.customFields.find(cf => cf.indexedValue?.some(val => val === "DO ISSUED_D.O. Issued"))
        if (doIssued) {
            let obdNumber = shipment.customFields.find(cf => cf.fieldKey === "Do Numbers")?.value
            let vehicleNumber = shipment?.fleetInfo?.vehicle?.vehicleRegistrationNumber
            let materialDetails = shipment.customFields
                .filter(cf => cf.fieldKey.startsWith("MaterialCode DO_"))
                .map(cf => {
                    let doNumber = cf.fieldKey.split(" ")[1]
                    let itemNumber = cf.fieldKey.split(":")[1].trim()
                    let weight = shipment.customFields.find(wcf =>
                        wcf.fieldKey === `DOItemWT ${doNumber} : ${itemNumber}`
                    )?.value || ""
                    return `${cf.value} - ${weight} MT`
                })
                .join(", ")

            const dateOptions = {
                day: '2-digit', month: 'short', year: 'numeric',
                hour: '2-digit', minute: '2-digit', hour12: false
            }
            let gateInTime = new Date(cfTime[0].value).toLocaleString('en-IN', dateOptions)
            let specifiedTime = new Date(cfTime[0].value - 1800000).toLocaleString('en-IN', dateOptions)
            let payload = getWhatsappPayload({
                obdNumber,
                vehicleNumber,
                materialDetails,
                specifiedTime,
                gateInTime
            })
            for (let i = 0; i < mobile.length; i++) {
                payload.to = mobile[i]
                let res = await sendWhatsappMessage(payload)
                if (res) {
                    console.log(`Message sent to ${mobile[i]}`)
                } else {
                    console.log(`Message not sent to ${mobile[i]}`)
                }
            }
        }
    }
}

main(shId)