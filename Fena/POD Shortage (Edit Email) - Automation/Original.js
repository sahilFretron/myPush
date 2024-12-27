/**
 * 1. Send Email on pod feeding mark completed & send pod Data to SAP.
 * 2. Try to Depart shipment from current stage
 */

const base_url = "http://34.93.148.238"
// const base_url = "http://35.192.123.13"

const dipatchWiseMailContact = {
    "SURAJPUR": {
        "mobile": "9540368585",
        "mail": "rksharma@fena.com"
    },
    "ROORKEE": {
        "mobile": "9639004217",
        "mail": "sandeeppal@fena.com"
    },
    "PONDICHERRY": {
        "mobile": "9894800148",
        "mail": "ssuresh@fena.com"
    },
    "HOWRAH": {
        "mobile": "8001294506",
        "mail": "santukoley@fena.com"
    },
    "SILVASSA": {
        "mobile": "9737878805",
        "mail": "srpatil@fena.com"
    },
    "GUWAHATI": {
        "mobile": "8472896160",
        "mail": "ashokdas@fena.com"
    }
}


console.log(`Consignment No- ${$event.consignmentNo}`)

const TOKEN = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzY0NDEwOTEsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiM2U0Y2RlZTktMGIzYi00NmRkLTliOTgtZGYwZTM4YTAyNzFjIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.QhhipbIJe0x9xhsuZeGmcwq2A3ThrMQmwUQebvrRVSk"

async function forwardEmail(subject, to, cc, html) {
    try {
        await rp({
            uri: FRT_PUB_BASE_URL + '/notifications/ses/email',
            method: "POST",
            body: {
                cc: cc,
                to: to,
                subject: subject,
                html: html,
            },
            timeout: 2000,
            json: true,
        });
    } catch (err) {
        console.log(`Some error in forwarding email- ${err.message}`)
    }
    return "Forward Mail Called!"
}

function formateDate(date) {
    if (date != "N/A") {
        date = new Date(date);
        return `${String(date.getDate()).padStart(2, "0")}-${String(
            date.getMonth() + 1,
        ).padStart(2, "0")}-${String(date.getFullYear())}`;
    }
    return "N/A";
}

async function ensurePod(cnUuid) {
    try {
        let res = await rp({
            url:
                `${FRT_PUB_BASE_URL}/pod/v1/action/ensure-pod?consignmentId=` +
                cnUuid,
            json: true,
            headers: {
                Authorization: TOKEN,
            },
        });
        if (res.status == 200) {
            return res.data
        } else {
            console.log(`EnsurePod api res error : ${res.error}`)
        }
    } catch (e) {
        console.log(`Catched error in ensurePod : ${e.message}`)
    }
    return null
}

async function produceAndSendPodData(cnExtId) {
    let url = `${base_url}:8084/fena/pod-data?cnExtId=${cnExtId}`
    try {
        let res = await rp({
            method: "GET",
            uri: url,
            json: true
        });
        console.log(`Produce and Send Pod Data from integration manager to SAP : ${JSON.stringify(res)}`)
    } catch (e) {
        console.log(`Catched error in Producing and Sending Pod Data from integration manager to SAP : ${e.message}`)
    }
}

async function shGET(shId, token) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${shId}?skipCn=true`;

        let options = {
            uri: url,
            method: "get",
            json: true,
            headers: {
                Authorization: token,
            },
        };

        let res = await rp(options);

        if (res.error) {
            console.log(`Error in fetch ${res.error}`);
            return null;
        }

        return res.data;
    } catch (err) {
        console.log(`Some error fetching sh ${err.message}`);
        return null;
    }
}

async function tryToChangeShStage(cn) {
    try {
        let shId = cn?.associatedShipments?.[0];

        if (!shId) {
            console.log(`Shipment Id not provided`);
            return null;
        }

        let shMaster = await shGET(shId, TOKEN);

        if (!shMaster) {
            return null;
        }
        var shipmentStages = shMaster.shipmentStages;
        let currentStage = shipmentStages.filter(({ status }) => status === "AT");
        if (!currentStage.length) {
            console.log(`Some error cannot find AT stage`);
            return null;
        }
        var payload = {
            shipmentId: shId,
            updates: [
                {
                    keyToUpdate: "departureTime",
                    updatedValue: Date.now(),
                    stageId: currentStage[0].uuid,
                },
            ],
        };
        if (shipmentStages.indexOf(currentStage[0]) == shipmentStages.length - 1) {
            payload.updates[0].markComplete = true;
        }
        let stageId = currentStage[0].uuid;
        let res = await bulkSync(payload, TOKEN, stageId);
        console.log(res);
    } catch (error) {
        console.log(`Some error in tryToChangeShStage ${error.message}`);
    }
}

async function bulkSync(payload, token, stageId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`;

        let options = {
            uri: url,
            method: "POST",
            json: true,
            headers: {
                Authorization: token,
            },
            body: payload,
        };
        let res = await rp(options);
        if (res.error) {
            console.log(`Some error in res ${res.error}`);
            return null;
        }
        let shStageFilter = res.data.shipmentStages.filter(({ uuid }) => uuid === stageId);
        if (shStageFilter.length && shStageFilter[0].status === "COMPLETED") {
            return "Updated";
        } else {
            return "Not updated";
        }
    } catch (error) {
        console.log(`Some error in bulk sync ${error.message}`);
        return null;
    }
}

async function getOrderNumbers(orderIds) {
    try {
        let filters = { "uuid.keyword": orderIds }
        let url = `${FRT_PUB_BASE_URL}/shipment-view/sales/v2/orders?source=["orderNumber"]&filters=${JSON.stringify(filters)}`
        let res = await rp({
            url: url,
            method: "GET",
            json: true,
            headers: { Authorization: TOKEN }
        })
        if (res?.length) {
            let orderNumbers = res.map((v) => { return v.orderNumber })
            if (orderNumbers.length) {
                return _.uniq(orderNumbers)?.join(",")
            }
        }
        return "N/A"
    } catch (err) {
        console.log(`Error getting orders: ${err.message}`)
        return "N/A"
    }
}

async function getCnPOD(cnId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/pod/v1/action/ensure-pod?consignmentId=${cnId}`;
        let res = await rp({
            uri: url,
            method: "GET",
            json: true,
            headers: {
                authorization: TOKEN,
            },
        });
        if (res?.error) {
            console.log(`Some Error in Ensure Pod ${res?.error}`);
        }
        return res?.status == 200 ? res.data : null;
    } catch (e) {
        console.log(`catched Error in Ensure Pod ${e.message}`);
    }
    return null;
}

async function ensureMailAndCfForPodShortage(cn) {
    try {
        const TO = [
            "nkjha1@fena.com",
            "rohtastanwar@fena.com",
            "suraj@fena.com",
            "pkchaturvedi@fena.com",
            "jitendrakumar4@fena.com",
        ];
        const CC = [
            "varunsharma@fena.com",
            "shankararya@fena.com",
            "akmehta@fena.com",
            "sagar.soni@fretron.com"
        ];
        console.log(
            `Mail For Pod Shortage Executing For Cn ${cn?.consignmentNo}`
        );
        let cnId = cn?.uuid;
        let cnLineItems = cn?.lineItems;
        let podData = await getCnPOD(cnId);
        if (!podData) {
            console.log(`Pod Data Not Found for cn ${cnId}`);

            return null;
        }
        let remainingHtml = "";
        let shortageQty = false;
        let deliveryItems = podData?.deliveryItems;

        console.log(`Total Delivery Items- ${deliveryItems?.length ?? 0}`);

        deliveryItems = deliveryItems?.filter((e) => e.status == "NOT OK") ?? [];

        console.log(`Total Delivery Items Filtered- ${deliveryItems.length}`);

        for (let delItem of deliveryItems) {
            let shortage = delItem.orderMapping.quantity.weight?.shortage;
            if (!shortage) {
                continue;
            } else {
                shortageQty = true;
                let consignmentLineItemId =
                    delItem?.orderMapping?.consignmentLineItemId;
                let foundItem = cnLineItems.find(
                    (item) => item.uuid == consignmentLineItemId
                );
                let materialName = foundItem?.material?.name ?? '';
                let itemNo = foundItem?.externalId ?? '';

                remainingHtml += `
                    <tr>
                    <td>${materialName}</td>
                    <td>${itemNo}</td>
                    <td>${shortage}</td>              
                    </tr>
                    `;
            }
        }
        if (!shortageQty) {
            console.log(
                "No Shortage Qty found on delivery items, will not send email!"
            );
            return;
        }
        let html = `
          <html>
          <head>
          <style>
          table,tbody,th,td {
              border: 1px solid black;
              border-collapse: collapse;
              width: 500px;
              margin-left: auto;
              margin-right: auto;
              }
              th, td {
              padding: 2px;
              text-align: center;
              }
          </style>
          </head>
          <body>
          <p>Dear Team,</p>
          <p>There were some shortage found after POD submission. Please find the details below :-</p>
          <table>
          <tr style="background: rgb(97, 176, 169)">
          <th>Material Name</th>                                  
          <th>Item No</th>
          <th>Shortage Qty</th>
          </tr>
          ${remainingHtml}
          </table>
          </body>
          </html>`;
        let subject = `SHORTAGE IN Invoice ${cn?.consignmentNo}`;

        await forwardEmail(subject, TO, CC, html);
        await setCfsOnCn(cn);
    } catch (e) {
        console.log(`catched Error in main ${e.message}`);
    }
}

function getCfObj(fieldKey) {
    return {
        fieldKey: fieldKey,
        multiple: false,
        description: "",
        remark: "",
        required: false,
        accessType: null,
        input: "string",
        unit: "",
        valueType: "string",
        options: [],
        fieldType: "text",
        value: null,
        isRemark: false,
    };
}

async function actionSync(payload) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/consignment/actions/sync`;
        let res = await rp({
            uri: url,
            method: "POST",
            json: true,
            body: payload,
            headers: {
                authorization: TOKEN,
            },
        });

        if (res?.error) {
            console.log(`Some Error in Action Sync Api ${res.error}`);
        }
        console.log(`Action Sync Api Status ${res?.status}`);
    } catch (e) {
        console.log(`catched Error in action Sync ${e.message}`);
    }
}

async function setCfsOnCn(cn) {
    try {
        let cfsNameToAdd = [
            "Debit Note No",
            "Debit Note Amt",
            "Credit Note No",
            "Credit Note Amt",
        ];
        let cnCfs = cn?.customFields;
        let cfsToAdd = [];

        for (let cfName of cfsNameToAdd) {
            if (!cnCfs?.find((cf) => cf?.fieldKey == cfName)) {
                cfsToAdd.push(getCfObj(cfName));
            }
        }

        if (cfsToAdd.length) {
            console.log(`Cfs updating for cn ${cn?.consignmentNo}`);
            let cfsPaylaod = {
                cnUuid: cn?.uuid,
                updates: [
                    {
                        keyToUpdate: "cfs",
                        updatedValue: cfsToAdd,
                    },
                ],
            };
            await actionSync(cfsPaylaod);
        } else {
            console.log(`Cfs already updated on cn ${cn?.consignmentNo}`);
        }
    } catch (e) {
        console.log(
            `catched Error in setting Cf on cn ${cn?.consignmentNo} ${e.message}`
        );
    }
}

async function main() {
    try {
        let ccArray = []
        let cnId = $event.uuid
        let cnNo = $event.consignmentNo ?? "N/A"
        let updates = $event.updates
        let updateTime = updates?.time
        let pod = await ensurePod(cnId)
        let orderIds = $event.orderMappings?.map((v) => {
            return v.orderId
        }) ?? []
        let orderNumbers = await getOrderNumbers(orderIds)
        let origin = $event.consigner?.places?.length ? $event.consigner?.places[0]?.name : "N/A"
        let destination = $event.consignee?.places?.length ? $event.consignee?.places[0]?.name : "N/A"
        if (pod) {

            let date = pod.receiveDate ?? pod.unloadingFinishDate ?? updateTime ?? "N/A"
            let formatedDate = formateDate(date)

            let htmlString = `
                 <html>
                 <body>
                 <p>Dear Sir,</p>
                 <br>
                 <p>Material has been delivered & POD has been completed for the Invoice ${cnNo} on ${formatedDate}.</p> 
                 <p>OrderNo.: ${orderNumbers}<br/>
                 Origin: ${origin}<br/>
                 Destination: ${destination}</p>
                 </body>         
                 </html>`


            if (dipatchWiseMailContact[origin]) {
                ccArray.push(dipatchWiseMailContact[origin].mail)
            }
            let mailSubject = "Material has been delivered & POD has been completed for the Invoice"
            let toArray = ["guptaJi@fretron.com"]

            ccArray = _.uniq(ccArray)
            let emailRes = await forwardEmail(mailSubject, toArray, ccArray, htmlString)
            console.log(emailRes);
        }
    } catch (e) {
        console.log("Error executing automation- " + e.message)
    }
}

try {
    await main()
}
catch (e) {
    console.log(`Some error in sending email ${e.message} : ${e}`)
}



// Send pod data to SAP
try {
    let cnId = $event?.uuid
    let cnExtId = $event?.externalId ?? null
    let pod = await ensurePod(cnId)
    let status = pod?.status
    let isCurrptedCase = (pod?.deliveryItems ?? []).filter(item => item?.status == "PENDING")?.length > 0
    console.log(`Pod Status : ${status}, isCurrptedCase : ${isCurrptedCase}, cnExtId : ${cnExtId}`)
    if (cnExtId && (status == "SUBMITTED" || isCurrptedCase == false)) {
        await produceAndSendPodData(cnExtId)
    } else {
        console.log(`CnExtId ${cnExtId}`)
    }
} catch (e) {
    console.log(e.message)
}

// Try to Depart/Complete current stage of shipment
try {
    let cn = $event
    await tryToChangeShStage(cn)
} catch (err) {
    console.log(`Error completing shipment ${err.message}`)
}

//Ensure Shortage Mailer and CF on consignment
try {
    await ensureMailAndCfForPodShortage($event)
} catch (err) {
    console.log(`Some error in ensuring shortage mailer and cf on consignment- ${err.message}`)
}