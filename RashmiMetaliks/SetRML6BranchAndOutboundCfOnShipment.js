const rp = require("request-promise")
const FRT_PUB_BASE_URL = "https://apis.fretron.com"
const TOKEN = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzYyMzYxNzYsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiIzMjE4ODdiNi04ZjQzLTQyOTktOGI3NS00N2QzZWQwMzlkNGUiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.SUX9ggee_LbnDbl3Um9JNqFVQXoI-zaMGCVhe91TU_c"
const ORGID = "321887b6-8f43-4299-8b75-47d3ed039d4e"
const index = "shipments_v2"
const query = {
    "_source": ["uuid"],
    "size": 100,
    "query": {
        "bool": {
            "must": [
                {
                    "term": {
                        "orgId.keyword": ORGID
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
async function getDataFromElastic(index, query) {
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

async function getShipmentById(shipmentId) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${shipmentId}?skipCn=true`
        let options = {
            method: "GET",
            uri: url,
            headers: {
                'Authorization': TOKEN,
                'Content-Type': 'application/json'
            },
            json: true
        }
        let res = await rp(options)
        return res?.data ?? null
    } catch (err) {
        console.log(`Error getting shipment by ID: ${err.message}`)
        return null
    }
}

async function updateShipment(shipment) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment`
        let options = {
            method: "PUT",
            uri: url,
            body: shipment,
            json: true,
            headers: {
                'Authorization': TOKEN
            }
        }
        let res = await rp(options)
        return res?.data ?? null
    } catch (err) {
        console.log(`Error updating shipment: ${err.message}`)
        return null
    }
}

async function main() {
    let data = await getDataFromElastic(index, query)
    console.log(data)
    let shipmentIds = data.map(shipment => shipment._source.uuid)
    for (let shipmentId of shipmentIds) {
        let shipment = await getShipmentById(shipmentId)
        shipment.branch = {
            "companyCode": null,
            "address": "Kolaghat - Pansila - Cuttack Road, Khatranga, West Bengal 721301, India",
            "updatedBy": "22b14948-4444-4e9e-8aa2-8c1d6ec9e5d4",
            "customFields": [
                {
                    "indexedValue": [
                        "FCM_GSTN_null"
                    ],
                    "fieldKey": "FCM_GSTN",
                    "valueType": "string",
                    "fieldType": "text",
                    "value": null,
                    "definitionId": null
                },
                {
                    "indexedValue": [
                        "RCM_GSTN_null"
                    ],
                    "fieldKey": "RCM_GSTN",
                    "valueType": "string",
                    "fieldType": "text",
                    "value": null,
                    "definitionId": null
                },
                {
                    "indexedValue": [
                        "STATE_NAME_West Bengal"
                    ],
                    "fieldKey": "STATE_NAME",
                    "valueType": "string",
                    "fieldType": "text",
                    "value": "West Bengal",
                    "definitionId": null
                }
            ],
            "regionName": null,
            "externalId": "P1104",
            "branchName": null,
            "type": [
                "IT",
                "Operation",
                "Sales"
            ],
            "updates": {
                "traceID": null,
                "resourceId": "12e0d624-e856-4f3d-94d1-555b531e16c6",
                "updatedBy": "USER",
                "changes": null,
                "sourceOfInformation": null,
                "description": "",
                "forwardReasons": [
                    "office.updated"
                ],
                "userId": "22b14948-4444-4e9e-8aa2-8c1d6ec9e5d4",
                "uuid": "99a6dfe0-1618-4405-8a3f-7d4ad6bf1854",
                "revision": null,
                "time": 1736233275353,
                "forwardedFrom": null,
                "resourceType": "branch",
                "updateType": null
            },
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
        }
        if (shipment.customFields) {
            let index = shipment.customFields.findIndex(field => field.fieldKey === "Trip Type")
            if (index > -1) {
                shipment.customFields.splice(index, 1)
            }
        }
        shipment.customFields.push({
            "indexedValue": [
                "Trip Type_Outbound Movement"
            ],
            "fieldKey": "Trip Type",
            "multiple": false,
            "description": "",
            "remark": "",
            "uuid": "d84f5780-d313-4f42-a89a-359db0b6ec8d",
            "required": true,
            "accessType": "mandatory_on_create",
            "input": "",
            "unit": "",
            "valueType": "string",
            "options": [
                "UNKNOWN",
                "Internal Movement",
                "Outbound Movement"
            ],
            "fieldType": "select",
            "value": "Outbound Movement",
            "isRemark": false
        })
        let updatedShipment = await updateShipment(shipment)
        console.log(updatedShipment)
    }
}

main()