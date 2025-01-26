const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzUzODM2NTksInVzZXJJZCI6ImJvdHVzZXItLTE2MmFjZmRmLTY1ZmQtNDdlZS05N2Y4LWNhZmE0NDY1M2I0MyIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTE2MmFjZmRmLTY1ZmQtNDdlZS05N2Y4LWNhZmE0NDY1M2I0MyIsIm9yZ0lkIjoiMzIxODg3YjYtOGY0My00Mjk5LThiNzUtNDdkM2VkMDM5ZDRlIiwibmFtZSI6IkludGVncmF0aW9uIE91dGJvdW5kIEJvdCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6ZmFsc2UsInBvcnRhbFR5cGUiOiJiYXNpYyJ9.y5KNUDPiwr2Mt8gPnHdSoYKsgYHC3EdMvUt-LogXvZs"

let sh = $event

function getRangeUtilizationBand(percentage) {
    if (!percentage) return "Unknown";

    const numPercentage = Number(percentage);
    if (isNaN(numPercentage)) return "Unknown";

    if (numPercentage <= 50) return ">50";
    if (numPercentage > 50 && numPercentage <= 60) return ">50";
    if (numPercentage > 60 && numPercentage <= 70) return "60-70";
    if (numPercentage > 70 && numPercentage <= 80) return "70-80";
    if (numPercentage > 80 && numPercentage <= 90) return "80-90";
    if (numPercentage > 90 && numPercentage <= 100) return "90-100";

    return "Unknown";
}

function getCfObj(key, value, valueType = "string", fieldType = "text") {
    return {
        fieldKey: key,
        valueType: valueType,
        fieldType: fieldType,
        value: value
    };
}

async function bulkSync(payload) {
    let url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`;
    try {
        let res = await rp({
            uri: url,
            method: "POST",
            body: payload,
            headers: {
                authorization: token,
            },
            json: true,
        });
        if (res.status === 200) {
            console.log(`Custom Field Added: Utilization Band`)
            return res.data;
        } else {
            console.log(
                `Bulk Sync api res error for sh ${payload.shipmentId} : ${res.error}`
            );
        }
    } catch (e) {
        console.log(
            `Catched error in bulkSync api for sh ${payload.shipmentId} : ${e.message}`
        );
    }
    return null;
}


async function isLoadedTrip(sh) {
    try {
        let isLoadedCf = sh.customFields?.some(field => field.indexedValue[0] === "Trip Load_loaded");
        if (isLoadedCf) {
            let utilPercentage = sh.customFields?.find(field => field.fieldKey === "Utilization Percentage")?.value;
            let band = getRangeUtilizationBand(utilPercentage)
            let cfObj = getCfObj("Utilization Band", band)
            let payloadAddCf = {
                shipmentId: sh?.uuid,
                updates: [
                    {
                        keyToUpdate: "customfields",
                        updatedValue: [cfObj]
                    }
                ]
            };
            await bulkSync(payloadAddCf);
        } else {
            console.log("Trip Load is not Loaded")
        }
    } catch (error) {
        console.log(error.message)
    }
}

return await isLoadedTrip(sh)
