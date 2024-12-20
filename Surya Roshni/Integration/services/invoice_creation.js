const { shCnMappingUpdate } = require("./gateways/shipmentGtw_service");
const { shipmentsFromFilter } = require("./gateways/shViewGtw_service");
const { getCnByExternalId, createConsignment } = require("./gateways/consignmentGtw_service");
const logger = require("../logger");
const _ = require("lodash");
const { v4: uuidv4 } = require("uuid");
const { getOrdersByfilters } = require("./gateways/order_managerGtw_service");
const { sendReport } = require('./reports/send_report')
const { getFreightUnitByLineItemId, updateFuMapping, finalizeTruck } = require("./gateways/freightUnitGtw_service")
const moment = require('moment')
const { invoiceCreationPayloadValidation } = require("./validation_service")
const { getFileBuffer } = require("./gateways/docManagerGTw_service")
const xlsx = require('xlsx');
const { delay } = require("../utils")

const payload = [
    {
        "Invoice No.": "RKI232401086",
        "Invoice Date": "10-10-2023",
        "Dispatch Date": "11-10-2023",
        "Origin": "KASHIPUR",
        "Destination": "PATNA",
        "Material Code": "FG0311876301DL0388",
        "Material Name": "2W PRIME SPOT 6500K ROUND LED DL-50 P",
        "Package Qty": 400,
        "Weight": 520,
        "Lr. No.": "LRNo5",
        "Lr. Date": "11-10-2023",
        "EWBNo.": "351669533645",
        "Vehicle No": "UP32QN9110",
        "Volume": 0.84,
        "Order Number": "LB48029083",
        "Sold To Party": "0000002430",
        "Sold To Name": "SURYA ROSHNI LIMITED",
        "Ship To Party": "0000002430",
        "Ship To Name": "SURYA ROSHNI LIMITED"
    },
    {
        "Invoice No.": "RKI232401086",
        "Invoice Date": "10-10-2023",
        "Dispatch Date": "11-10-2023",
        "Origin": "KASHIPUR",
        "Destination": "PATNA",
        "Material Code": "FG0311876301DL0091",
        "Material Name": "10W MOON PRO 6500K LED D/L",
        "Package Qty": 1500,
        "Weight": 2270,
        "Lr. No.": "LRNo6",
        "Lr. Date": "11-10-2023",
        "EWBNo.": "351669533645",
        "Vehicle No": "UP32QN9110",
        "Volume": 35.82,
        "Order Number": "LB48029083",
        "Sold To Party": "0000002430",
        "Sold To Name": "SURYA ROSHNI LIMITED",
        "Ship To Party": "0000002430",
        "Ship To Name": "SURYA ROSHNI LIMITED"
    }
]

function createCfAddIfNotNull(key, input, fieldType, value) {
    return {
        fieldKey: key,
        multiple: false,
        required: false,
        input: input,
        valueType: "string",
        fieldType: fieldType,
        value: value,
        isRemark: false,
    };
}

function populateCnTopLevelCfs(payload) {
    let cfs = [];
    try {
        let lrDate = payload[0]?.["Lr. Date"];
        let shipToParty = payload[0]?.["Ship To Party"]
        let soldToParty = payload[0]?.["Sold To Party"]
        let shipToName = payload[0]?.["Ship To Name"]
        let soldToName = payload[0]?.["Sold To Name"]
        let deliveryNo = payload[0]?.["Delivery No."]
        let billingRefNo = payload[0]?.["Billing Ref. No."]
        if (lrDate) { cfs.push(createCfAddIfNotNull("Lr Date", "date", "date", new Date(lrDate).valueOf())); }
        if (shipToParty) { cfs.push(createCfAddIfNotNull("Ship To Party", "string", "text", shipToParty)) }
        if (soldToParty) { cfs.push(createCfAddIfNotNull("Sold To Party", "string", "text", soldToParty)) }
        if (shipToName) { cfs.push(createCfAddIfNotNull("Ship To Name", "string", "text", shipToName)) }
        if (soldToName) { cfs.push(createCfAddIfNotNull("Sold To Name", "string", "text", soldToName)) }
        if (deliveryNo) { cfs.push(createCfAddIfNotNull("Delivery No.", "string", "text", deliveryNo)) }
        if (billingRefNo) { cfs.push(createCfAddIfNotNull("Billing Ref. No.", "string", "text", billingRefNo)) }
    } catch (error) {
        logger.info(`Catched ${error} in populating cn top level cfs for cn ${payload[0].Invoice_Number}`);
    }
    return cfs;
}

function populateCnItemLevelCfs(data) {
    let customFields = [];
    try {
        if (data["Order Number"]) {
            customFields.push(
                createCfAddIfNotNull(
                    "Order Number",
                    "string",
                    "text",
                    data["Order Number"]
                )
            );
        }
    } catch (error) {
        logger.info(
            `Catched Error in populating cnItem ${data.Item_number} Cfs ${error}`
        );
    }
    return customFields;
}

async function produceCnItemsAndOM(shipment, payload, cnId, token, ptlCase = false) {
    let lineItems = [];
    let orderMappings = [];
    try {
        let orders = await getOrdersByfilters({ "orderNumber": shipment.orderNumbers }, token)
        if (!orders.length) {
            throw new Error("No Orders Found")
        }
        let consignee = null
        let consigner = null
        let flag = false
        for (let data of payload) {
            invoiceCreationPayloadValidation(data)
            let order = orders.find(order => order.orderNumber === data["Order Number"])
            let orderId = order?.uuid
            let itemId = null;
            let orderLineItem = null;
            if (order) {
                orderLineItem = order.lineItems.find(lineItem =>
                    lineItem.material.externalId === data["Material Code"]
                );
                if (!orderLineItem) {
                    throw new Error(`Order Line Item not Found in Order ${order.orderNumber}`)
                }
                itemId = orderLineItem.uuid
                if (!flag) {
                    consignee = orderLineItem?.consignee
                    consigner = orderLineItem?.consigner
                    flag = true
                }
            } else {
                throw new Error(`Order Not Found ${data["Order Number"]}`)
            }
            let customFields = populateCnItemLevelCfs(data);
            let lineItemId = uuidv4();

            let item = {
                material: orderLineItem.material,
                valueOfGoods: null,
                customFields: customFields,
                externalId: null,
                invoiceNo: data["Invoice No."],
                customerMaterial: null,
                uuid: lineItemId,
                itemNumber: null,
                transportationServiceId: null,
            }

            lineItems.push(item);

            orderMappings.push({
                quantity: {
                    weight: {
                        netQuantity: data["Weight"],
                        unitOfMeasurment: "Kilograms",
                        standardQuantity: data["Weight"],
                        measurmentType: "weight",
                        grossQuantity: data["Weight"],
                    },
                    volume: {
                        netQuantity: data["Volume"],
                        unitOfMeasurment: "Cubic Feet",
                        standardQuantity: data["Volume"],
                        measurmentType: "volume",
                        grossQuantity: data["Volume"],
                    },
                    packageMeasurement: {
                        netQuantity: data["Package Qty"],
                        unitOfMeasurment: "Units",
                        standardQuantity: data["Package Qty"],
                        measurmentType: "package",
                        grossQuantity: data["Package Qty"],
                    }
                },
                orderId: orderId,
                lineItemId: itemId,
                legType: null,
                consignmentId: cnId,
                originLegId: null,
                isFullyUtilized: null,
                consignmentLineItemId: lineItemId,
                source: null,
                uuid: uuidv4(),
                fuMappings: null,
            });
        }
        return {
            lineItems: lineItems,
            orderMappings: orderMappings,
            consignee: consignee,
            consigner: consigner
        };
    } catch (error) {
        logger.error(`Catched Error getting lineItems and orderMappings for cn ${cnId} : ${error.message}`);
        throw new Error(error.message);
    }
}

async function getActiveShipmentForVehicle(vehicleNo, token) {
    try {
        let shFilter = {
            "_shipmentStatus_": { "shipmentStatus": ["Planned"] }, "__version": 2,
            "fleetInfo.vehicle.vehicleRegistrationNumber": [vehicleNo],
        };
        let shs = await shipmentsFromFilter(shFilter, token, null, true, false);
        if (!shs?.length) {
            throw new Error(`Vehicle ${vehicleNo} not Found for Planned Status`);
        } else if (shs?.length > 1) {
            throw new Error(`More than One vehicle Found for Planned Status`);
        } else {
            return shs[0];
        }
    } catch (e) {
        logger.error(`Catched error in getting active sh for vehicle ${vehicleNo} : ${e.message}`)
        throw e
    }
}

async function ensureOrCreateCns(cnWiseGrpData, shipment, orgId, token) {
    let cns = []
    for (let lrNo in cnWiseGrpData) {
        try {
            let cnData = cnWiseGrpData[lrNo];
            cnData.forEach(obj => { Object.keys(obj).forEach(_ => obj[_] = obj[_]?.toString()?.trim()) })
            let consignment = await getCnByExternalId(lrNo, orgId);
            if (!consignment) {
                let cnId = uuidv4();
                let customFields = populateCnTopLevelCfs(cnData);
                let invoiceDate = cnData[0]?.["Invoice Date"];
                let ewayBillNo = cnData[0]?.["EWBNo."];
                let { lineItems, orderMappings, consignee, consigner } = await produceCnItemsAndOM(shipment, cnData, cnId, token);
                let uniqInvoiceNos = [...new Set(lineItems.reduce((acc, cv) => {
                    if (cv?.invoiceNo) { acc.push(cv.invoiceNo) };
                    return acc;
                }, []))]?.join()
                let material = [...new Set(lineItems.reduce((acc, cv) => {
                    if (cv?.material?.name) { acc.push(cv.material.name) };
                    return acc;
                }, []))]?.join()
                let { valueOfGoods, netPackage, netWeight, netVolume } = (orderMappings ?? []).reduce((acc, om, idx) => {
                    acc.valueOfGoods += lineItems[idx]?.valueOfGoods ?? 0.0
                    acc.netPackage += om?.quantity?.packageMeasurement?.netQuantity ?? 0.0
                    acc.netWeight += om?.quantity?.weight?.netQuantity ?? 0.0
                    acc.netVolume += om?.quantity?.volume?.netQuantity ?? 0.0
                    return acc
                }, { valueOfGoods: 0.0, netPackage: 0.0, netWeight: 0.0, netVolume: 0.0 })
                let cnCreatepayload = {
                    consignmentDate: new Date(invoiceDate).valueOf(),
                    consigner: consigner,
                    consignee: consignee,
                    loadInfo: {
                        material: material,
                        valueOfGoods: valueOfGoods,
                        measurements: null,
                        standardMeasurement: {
                            volume: netVolume > 0.0 ? {
                                measurmentType: "volume",
                                unitOfMeasurment: "Litres",
                                netQuantity: netVolume,
                                grossQuantity: netVolume,
                                standardQuantity: netVolume,
                            } : null,
                            packageMeasurement: netPackage > 0.0 ? {
                                measurmentType: "package",
                                unitOfMeasurment: "unit",
                                netQuantity: netPackage,
                                grossQuantity: netPackage,
                                standardQuantity: netPackage,
                            } : null,
                            weight: netWeight > 0.0 ? {
                                netQuantity: netWeight,
                                unitOfMeasurment: "Kilograms",
                                standardQuantity: netWeight,
                                measurmentType: "Weight",
                                grossQuantity: netWeight,
                            } : null,
                            containers: null,
                            trucks: null,
                        }
                    },
                    invoiceNo: uniqInvoiceNos,
                    consignmentNo: String(lrNo),
                    externalId: String(lrNo),
                    invoiceValue: valueOfGoods > 0.0 ? valueOfGoods : null,
                    eWayBillNumber: String(ewayBillNo),
                    eWayBillExpiryDate: null,
                    edd: null,
                    updates: null,
                    orderMappings: orderMappings,
                    deliveryDate: null,
                    associatedShipments: [],
                    originalEdd: null,
                    contractToParty: null,
                    lineItems: lineItems,
                    uuid: cnId,
                    contractId: null,
                    customFields: customFields,
                    salesOffice: null,
                    billToParty: null,
                };
                let createdCn = await createConsignment(cnCreatepayload, token);
                if (!createdCn) {
                    logger.info(`Some error in creating cn ${lrNo}`);
                    throw new Error(`Some Error in cn ${lrNo} creation`);
                } else {
                    cns.push(createdCn)
                }
            } else {
                if (consignment.associatedShipments?.length) {
                    logger.info(`Consignment- ${consignment.consignmentNo} already attached with shipment- ${consignment.associatedShipments[0]} will throw error`)
                    throw new Error(`Consignment- ${consignment.consignmentNo} already attached with shipmentId- ${consignment.associatedShipments[0]}. Cannot proceed!`)
                }
                cns.push(consignment)
            }
        } catch (e) {
            logger.error(`Catched error in creating or ensuring cn ${lrNo} : ${e.message}`)
            throw e
        }
    }
    return cns
}

async function updateShStageCnMappings(shipment, cns, token) {
    try {
        let cnAddedIds = cns.map(cn => cn.uuid);
        let shipmentId = shipment.uuid;
        let stageLen = shipment.shipmentStages?.length;
        for (let cn of cns) {
            let originPlaceId = cn.consigner?.places[0]?.placeId
            let destinationPlaceId = cn.consignee?.places[0]?.placeId
            let { originIdx, destinationIdx } = (shipment.shipmentStages ?? []).reduce((acc, stage, idx) => {
                if (acc.originIdx == -1 && (stage.place?.placeId ?? stage.hub?.placeId) == originPlaceId) {
                    acc.originIdx = idx
                }
                if (acc.destinationIdx == -1 && (stage.place?.placeId ?? stage.hub?.placeId) == destinationPlaceId) {
                    acc.destinationIdx = idx
                }
                return acc
            }, { originIdx: -1, destinationIdx: -1 })
            if (originIdx != -1 && destinationIdx != -1 && originIdx < stageLen && destinationIdx < stageLen) {
                shipment.shipmentStages[originIdx].consignmentPickUps = [...(shipment.shipmentStages[originIdx].consignmentPickUps ?? []), cn.uuid]
                shipment.shipmentStages[destinationIdx].consignmentDelivered = [...(shipment.shipmentStages[destinationIdx].consignmentDelivered ?? []), cn.uuid]
            } else {
                throw new Error(`Some error in finding pick and drop stage for cn ${cn.uuid}`)
            }
        }
        let shStages = shipment.shipmentStages ?? [];
        let linkingPayload = {
            shipmentId: shipmentId,
            cnAdded: cnAddedIds,
            cnRemoved: [],
            rearrange: false,
            stageList: shStages,
            stageMapping: shStages.map((it) => {
                return {
                    consignmentPickUps: it["consignmentPickUps"],
                    consignmentDelivered: it["consignmentDelivered"],
                };
            })
        };
        return await shCnMappingUpdate(linkingPayload, token, true);
    } catch (e) {
        logger.error(`Catched error in linking shipment ${shipment?.shipmentNumber} consignment - ${e.message}`);
        throw e;
    }
}

async function finalizeSh(sh, cns, token) {
    try {
        let fuItemId = sh.freightUnitLineItemId
        let fu = await getFreightUnitByLineItemId([fuItemId], token)
        if (!fu) {
            logger.info(`Some error in getting fu fuLineItemId: ${fuItemId}`)
            throw new Error(`Some error in getting fu fuLineItemId: ${fuItemId}`)
        }
        let orderMapping = []
        cns.forEach(it => {
            if (it.orderMappings) {
                it.orderMappings.forEach(_ => {
                    _['consignmentId'] = it.uuid
                    orderMapping.push(_)
                })
            }
        })
        let updatedFu = await updateFuMapping(orderMapping, fu.uuid, fuItemId, token)
        if (!updatedFu) { throw new Error(`Some error in updating dispatch orderMapping`) }
        let res = await finalizeTruck(fuItemId, sh, cns, token)
        logger.info(`Finalize sh ${sh.shipmentNumber} res : ${JSON.stringify(res)}`)
        return res
    } catch (e) {
        logger.info(`Error in Finalize Shipment : ${e.message}`)
        throw new Error(`Error in Finalize Shipment : ${e.message}`)
    }
}

async function excelToJson(buffer, csv) {
    try {
        let workbook = null
        if (csv) {
            const csvString = buffer.toString();
            workbook = xlsx.read(csvString, { type: 'string' });
        } else {
            workbook = xlsx.read(buffer, { type: 'buffer' })
        }
        let sheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = xlsx.utils.sheet_to_json(worksheet, { defval: "" });
        return jsonData
    } catch (e) {
        logger.error(`Some error in method readExcelBufferAsJson: ${e.message}`)
        return null
    }
}

async function createInvoiceAndLinkShCn(data, token, orgId) {
    try {
        let { 
            downloadUrl: url = "",
            csv = null,
            toEmails = ["sahil.aggarwal@fretron.com"],
            ccEmails = ["sahil.aggarwal@fretron.com"]
        } = data;
        let fileBuffer = await getFileBuffer(url);
        let payload = await excelToJson(fileBuffer, csv);
        const vehicleGrpdData = _.groupBy(payload, "Vehicle No");
        let failedList = []

        for (let vehicleNo in vehicleGrpdData) {
            try {
                let shipment = await getActiveShipmentForVehicle(vehicleNo, token);
                let cnsData = vehicleGrpdData[vehicleNo];
                let cnWiseGrpData = _.groupBy(cnsData, "Lr. No.");
                let cns = await ensureOrCreateCns(cnWiseGrpData, shipment, orgId, token)
                let updatedSh = await updateShStageCnMappings(shipment, cns, token)
                if (!updatedSh) {
                    throw new Error(`Some error in linking sh ${shipment.shipmentNumber} with cns ${cns.map(it => it.externalId)?.join()}`)
                }
                await delay(5000)
                await finalizeSh(updatedSh, cns, token)
            } catch (e) {
                logger.error(`Catched error in creating cns and linking sh for vehicle ${vehicleNo} : ${e.message}`)

                failedList.push({
                    'Vehicle Number': vehicleNo,
                    'Message': e.message
                })
            }
        }
        if (failedList.length) {
            logger.info(`Total - ${failedList.length} entries failed to create invoice out of- ${Object.keys(vehicleGrpdData).length}!`)

            let modifiedData = _.flatten(failedList.map(res => {
                let val = vehicleGrpdData[res["Vehicle Number"]]

                val = val.map(e => {
                    let kv = Object.entries(e)

                    let obj = {}
                    kv.map(_ => {
                        obj[_[0]] = _[1]
                    })

                    obj['Reason For Error'] = res.Message

                    return obj
                })

                return val
            }))

            let to = toEmails ? toEmails : ['sahil.aggarwal@fretron.com']
            let cc = ccEmails ? ccEmails : ['sahil.aggarwal@fretron.com']
            let subject = 'Outbound invoice creation failed ' + moment().format('DD-MM-YYYY')
            let content = `Dear Sir,\nPlease find the attached sheet of cases where outbound creation failed.\nThanks and Regards\nTeam Fretron`
            let spreadSheetName = `Invoice List`
            await sendReport(modifiedData, to, cc, subject, content, spreadSheetName)
        }
        return 'Operation Success'
    } catch (e) {
        logger.error(`Catched error : ${e.message}`)

        throw new Error(e.message)
    }
}

module.exports = {
    createInvoiceAndLinkShCn: createInvoiceAndLinkShCn
};
