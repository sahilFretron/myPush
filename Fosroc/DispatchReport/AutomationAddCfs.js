const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTg5MDczMTEsInVzZXJJZCI6ImJvdHVzZXItLTVlMzYxYjUwLWRlZDQtNDI2Ni04OTBjLTQ3YzQ4ZjQ3ODI1MCIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTVlMzYxYjUwLWRlZDQtNDI2Ni04OTBjLTQ3YzQ4ZjQ3ODI1MCIsIm9yZ0lkIjoiODk0ZjZiNWItYjMyYi00MmE2LTljNTktMzZmNzU2NWM2ZTNlIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.al8Z4ygRDb7lc-j1nSPP3gY60CYEgdc1KDqgaYfjKYc"
const freight = $event
const currentTimeInEpoch = Date.now();

async function addCfToDispatch(cf, uuid) {
    try {
        let options = {
            uri: `${FRT_PUB_BASE_URL}/order-manager-v2/freight-units/v1/custom-field/?uuid=${uuid}`,
            method: "POST",
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

        const forwardReasons = freight.updates.forwardReasons; // Forward reasons array

        for (const forwardReason of forwardReasons) {
            switch (true) {
                case forwardReason.includes("freight.unit.indent.to.transporter.event"):
                    console.log("Indent Date Time");
                    let cfIndentDate = getCfObj("Indent Date Time", currentTimeInEpoch, "date");
                    await addCfToDispatch(cfIndentDate, freight.uuid);
                    break;

                case forwardReason.includes("freight.unit.indent.accepted.event"):
                    console.log("Indent Acceptance Date Time");
                    let cfAcceptedDate = getCfObj("Indent Acceptance Date Time", currentTimeInEpoch, "date");
                    await addCfToDispatch(cfAcceptedDate, freight.uuid);
                    break;

                case forwardReason.includes("freight.unit.indent.rejected.event"):
                    console.log("Indent Rejection Date Time");
                    let cfRejectedDate = getCfObj("Indent Rejection Date Time", currentTimeInEpoch, "date");
                    await addCfToDispatch(cfRejectedDate, freight.uuid);
                    break;

                case forwardReason.includes("freight.unit.allocate.transporter.event"):
                    console.log("Indent Date Time");
                    let transporterId = freight.lineItems[0].transporterId;
                    let transporterName = await bPartner(transporterId);
                    let transporterNameCf = getCfObj("Vendor Name", transporterName);
                    await addCfToDispatch(transporterNameCf, freight.uuid);
                    break;

                case forwardReason.includes("freight.unit.shipment.create.event"):
                    console.log("Vehicle Assignment Date Time");
                    let cfVehicleDate = getCfObj("Vehicle Assignment Date Time", currentTimeInEpoch, "date");
                    let shId = freight.lineItems[0].shipmentId;
                    let vhNo = await getShipment(shId);
                    let cfVhNo = getCfObj("Vehicle Number", vhNo);
                    await addCfToDispatch(cfVhNo, freight.uuid);
                    await addCfToDispatch(cfVehicleDate, freight.uuid);
                    break;

                default:
                    // If needed, log that no matching event found here
                    console.log(`No matching forward reason found for event: ${forwardReason}`);
                    break;
            }
        }

    } catch (e) {
        console.log(e)
    }
}

return await main(freight)