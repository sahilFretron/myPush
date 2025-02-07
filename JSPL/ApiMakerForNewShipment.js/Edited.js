const TOKEN =
    "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDUzMDE4OTEsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiMDEyNmY0MDUtZGQzNi00YzUyLTlkMjEtNGMwOTVmYzJlMmQwIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.j2Df92epuWq9kmTkPNzt0S9QFVpqneUZismF7muRIiY";

const VEH_NOs = [
    "NL03AA2560",
    "NL01K0362",
    "NL01AD6473",
    "NL01G7287",
    "NL01G2343",
    "NL02Q6356",
    "NL02L0507",
    "NL02K3757",
    "NL01G5388",
    "NL01K3436",
    "NL01G6527",
    "NL01K3906",
    "NL01K3282",
    "NL01K0334",
    "NL03AA2562",
];

async function getShsByFilter(filters) {
    try {
        let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/v1?filters=${encodeURIComponent(
            JSON.stringify(filters)
        )}&size=100`;

        let res = await rp({
            uri: url,
            method: "GET",
            json: true,
            headers: {
                Authorization: TOKEN,
            },
        });
        return res?.length ? res : [];
    } catch (e) {
        console.log(`catched error in getting shs by filter: ${e.message}`);
    }
    return [];
}

async function shipmentForward(shIds, fwdReasons) {
    try {
        let filter = {
            filter: {
                _id: {
                    $in: shIds,
                },
            },
            forwardReasons: fwdReasons,
            fromDB: true,
            deleted: false,
        };

        let url = `${FRT_PUB_BASE_URL}/shipment/v1/admin/shipment/forward/byfilter`;
        let res = await rp({
            uri: url,
            method: "POST",
            body: filter,
            json: true,
        });

        console.log(`shipment forward res ${res.data}`);
        return res;
    } catch (e) {
        console.log(`catched error in shipment forwarding : ${e.message}`);
    }
}

async function main() {
    try {
        let from = moment().subtract(2, "hour").valueOf();
        let till = moment().valueOf();
        console.log(`from: ${from} till: ${till}`);
        let filters = {
            _shipmentStatus_: { shipmentStatus: ["Completed"] },
            completionTime: {
                isTillExpression: false,
                isFromExpression: false,
                from: from,
                till: till,
            },
            "fleetInfo.vehicle.vehicleRegistrationNumber": VEH_NOs,
            __version: 2,
        };
        let shs = await getShsByFilter(filters);
        let shNos = shs.map((sh)=>sh.shipmentNumber)

        if (!shs?.length) {
            console.log(`completed shs not found in last one hour`);
            return null;
        }

        // console.log(`Total completed shs: ${shs.length}`);

        // let uniqueVehicleWiseData = _.uniqBy(
        //     shs,
        //     (sh) => sh?.fleetInfo?.vehicle?.vehicleRegistrationNumber
        // );


        // console.log(`Total unique shs: ${uniqueVehicleWiseData.length} ${uniqueVehicleWiseData.map((sh)=>sh.shipmentNumber)} `); ///shipment no console

        // let vehicleWiseData = {};
        // uniqueVehicleWiseData.forEach((sh) => {
        //     let vehicleNo = sh?.fleetInfo?.vehicle?.vehicleRegistrationNumber;
        //     vehicleWiseData[vehicleNo] = {
        //         shId: sh.uuid,
        //         shipmentNo: sh?.shipmentNumber,
        //     };
        // });

        // let vehicleNos = Object.keys(vehicleWiseData);

        let filter = {"externalShipmentId.keyword":shNos,"__version":2}
        let activeShs = await getShsByFilter(filter);
        let activeShNos = activeShs.map((sh)=>sh.externalShipmentId)
        let notActiveShNos = _.difference(shNos,activeShNos)
        console.log(`notActiveShNos ${notActiveShNos?.length} ${notActiveShNos.join(",")}`)
        let shIdsForAutomationHit = notActiveShNos.map((shNo)=>shs.find((sh)=>sh.shipmentNumber===shNo).uuid)
        // let activeShVehicleNos = activeShs.map(
        //     (sh) => sh?.fleetInfo?.vehicle?.vehicleRegistrationNumber
        // );

        // let notActiveVehicles = _.difference(vehicleNos, activeShVehicleNos);

        // if (!notActiveVehicles?.length) {
        //     console.log("All Ok ...");
        //     return null;
        // }

        // console.log(`notActiveVehicles ${notActiveVehicles?.length}`);

        // let shIdsForAutomationHit = [];

        // for (let vehicleNo of notActiveVehicles) {
        //     console.log(
        //         `Hit Automation for shipment ${vehicleWiseData[vehicleNo].shipmentNo}`
        //     );
        //     if (vehicleWiseData[vehicleNo].shId) {
        //         shIdsForAutomationHit.push(vehicleWiseData[vehicleNo].shId);
        //     }
        // }

        if (shIdsForAutomationHit?.length) {
            console.log(
                `Total shs for automation hit: ${shIdsForAutomationHit.length}`
            );
            let fwdReasons = ["shipment.marked.completed", "system.forwarded.round.trip"]
            await shipmentForward(shIdsForAutomationHit, fwdReasons);
        }
    } catch (e) {
        console.log(`catched error in main ${e.message}`);
    }
}


try {
    await main()
} catch (e) {
    console.log(`catched error in Api Maker ${e.message}`)
}
