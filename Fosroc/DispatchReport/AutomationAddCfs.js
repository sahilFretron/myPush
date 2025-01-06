const TOKEN = ""
const freight = $event
const currentTimeInEpoch = Date.now();

async function updateCfToDispatch(cf, uuid) {
    try {
        let options = {
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/custom-fields/?uuid=${uuid}`,
            method: "PUT",
            headers: {
                "Authorization": TOKEN
            },
            body: cf,
            json: true
        }
        let res = await rp(options)
        if (res.status == 200) {
            console.log("Custom Field Added")
            return res.data.customFields
        } else {
            throw new Error(res.error)
        }
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

async function bPartner(uuid) {
    try {
        let options = {
            uri: `${FRT_PUB_BASE_URL}/business-partners/v2/partner/${uuid}`,
            method: "GET",
            headers: {
                "Authorization": TOKEN
            },
            json: true
        }
        let res = await rp(options)
        if (res.status == 200) {
            return res.data.name
        } else {
            throw new Error(res.error)
        }
    } catch (e) {
        console.log(e)
    }
}

async function getShipment(shId) {
    try {
        let options = {
            uri: `${FRT_PUB_BASE_URL}/shipment/v1/shipment/${shId}`,
            method: "GET",
            headers: {
                "Authorization": TOKEN
            },
            json: true
        }
        let res = await rp(options)
        if (res.status == 200) return res.data.fleetInfo.vehicle.vehicleRegistrationNumber
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

function getCfObj(key, value, fieldType = "text", valueType = "string") {
    return {
        fieldKey: key,
        valueType: valueType,
        fieldType: fieldType,
        value: value,
    };
}

async function main(freight) {
    try {
        console.log(`Adding CF for: ${freight.documentNumber}:`);

        const forwardReasons = freight.updates.forwardReasons;
        let cfsToUpdate = [];
        for (const forwardReason of forwardReasons) {
            switch (true) {
                case forwardReason.includes("freight.unit.indent.to.transporter.event"):
                    console.log("Indent Date Time");
                    let cfIndentDate = getCfObj("Indent Date Time", currentTimeInEpoch, "dateTime");
                    cfsToUpdate.push(cfIndentDate);
                    console.log("Vendor Name");
                    let transporterId = freight.lineItems[0].transporterId;
                    let transporterName = await bPartner(transporterId);
                    let transporterNameCf = getCfObj("Vendor Name", transporterName);
                    cfsToUpdate.push(transporterNameCf);
                    break;

                case forwardReason.includes("freight.unit.indent.accepted.event"):
                    console.log("Indent Acceptance Date Time");
                    let cfAcceptedDate = getCfObj("Indent Acceptance Date Time", currentTimeInEpoch, "dateTime");
                    cfsToUpdate.push(cfAcceptedDate);
                    break;

                case forwardReason.includes("freight.unit.indent.rejected.event"):
                    console.log("Indent Rejection Date Time");
                    let cfRejectedDate = getCfObj("Indent Rejection Date Time", currentTimeInEpoch, "dateTime");
                    cfsToUpdate.push(cfRejectedDate);
                    break;

                case forwardReason.includes("freight.unit.shipment.create.event"):
                    console.log("Vehicle Assignment Date Time");
                    let cfVehicleDate = getCfObj("Vehicle Assignment Date Time", currentTimeInEpoch, "dateTime");
                    cfsToUpdate.push(cfVehicleDate);
                    let shId = freight.lineItems[0].shipmentId;
                    let vhNo = await getShipment(shId);
                    let cfVhNo = getCfObj("Vehicle Number", vhNo);
                    cfsToUpdate.push(cfVhNo);
                    break;

                default:
                    console.log(`No matching forward reason found for event: ${forwardReason}`);
                    break;
            }
        }
        if (cfsToUpdate.length > 0) {
            await updateCfToDispatch(cfsToUpdate, freight.uuid);
        }
    } catch (e) {
        console.log(e)
    }
}

return await main(freight)