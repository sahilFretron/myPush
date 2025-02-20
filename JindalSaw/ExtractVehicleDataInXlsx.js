const rp = require('request-promise');
const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDAwMjk5NzIsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiIzYWVkYTUyNy1lYjNlLTQxM2ItYWI3OC1jYWU3N2UxMTk3ZDAiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.BvyYIZdzIjxMkaZ1Xu9UqaDjNLPugXfwv07zOiZ6Xx0"
const FRT_PUB_BASE_URL = "https://apis.fretron.com"
const orgId = "3aeda527-eb3e-413b-ab78-cae77e1197d0"
const to = ["sahil.aggarwal@fretron.com"]
const cc = []

async function getVehicleData(fromUuid) {
    const options = {
        method: "GET",
        uri: `${FRT_PUB_BASE_URL}/shipment-view/partner-fleet/fleets/v2?size=50&sharedOnly=undefined&from=%5B%22${fromUuid}%22%5D&filters=%7B%22fleetType%22%3A%5B%5D%2C%22trackingEnabled%22%3A%5B%5D%2C%22fleetOwnerName%22%3A%5B%5D%2C%22trackingMode%22%3A%5B%5D%2C%22vehicleType%22%3A%5B%5D%2C%22vehicleBranch%22%3A%5B%5D%2C%22manufacturer%22%3A%5B%5D%2C%22vehicleGroup%22%3A%5B%5D%2C%22vehicleZone%22%3A%5B%5D%2C%22vehicleRegion%22%3A%5B%5D%2C%22vehicleModel%22%3A%5B%5D%2C%22status%22%3Anull%2C%22_or%22%3A%7B%22groupsShared%22%3A%5B%5D%2C%22sharedWith%22%3A%5B%5D%7D%7D`,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        json: true
    };

    try {
        const response = await rp(options);
        if(response.status == 200){
            return response.data;
        }else{
            console.log(response.error)
        }
    } catch (error) {
        console.error('Error fetching vehicle data:', error);
    }
    return null
}

async function sendEmail(jsonArr) {
    let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/json/email`;
    let payload = {
        data: jsonArr,
        emailInfo: {
            to: to,
            cc: cc,
            subject: "Vehicle Data with Docs",
            content: "Please find the Vehicle Data with Document Links"
        },
        orgId: orgId,
    };
    try {
        let res = await rp({
            method: "POST",
            uri: url,
            body: payload,
            json: true,
        });
        if (res.status == 200) {
            console.log("Mail Sent")
        }else{
            console.log(`Sending Json to Excel email api res error : ${res.error}`);
        }
    } catch (e) {
        console.log(`Catched Error in sending json to excel email : ${e.message}`);
    }
}

function extractVehicleValues(vehicleData) {
    try {
        const extractedData = vehicleData.map(veh => {
            // Create base object with existing fields
            let vehicleObj = {
                "Fleet Owner Name": veh.fleetOwner.name ?? "-",
                "Vehicle Status": veh.status ?? "-",
                "Verification Status": veh.verificationStatus ?? "-",
                "Registeration Number": veh.vehicle.vehicleRegistrationNumber ?? "-",
                "Vehicle Type": veh.vehicle.vehicleLoadType.name ?? "-",
                "Passing Capacity in MT": veh.vehicle.vehicleLoadType.passingCapacityMT ?? "-",
                "Number of Wheels": veh.vehicle.vehicleLoadType.numberOfWheels ?? "-",
                "Chassis Type": veh.vehicle.vehicleLoadType.chassisType ?? "-",
            };

            // Add numbered document links
            if (veh.vehicle.attachedDocs && veh.vehicle.attachedDocs.length > 0) {
                veh.vehicle.attachedDocs.forEach((doc, index) => {
                    vehicleObj[`Document ${index + 1}`] = `https://storage.googleapis.com/fretron-document-bucket/uploads/${orgId}/${doc}@${veh.vehicle.vehicleRegistrationNumber}.jpeg`;
                });
            }

            return vehicleObj;
        });

        return extractedData;
    } catch (error) {
        console.error('Error extracting vehicle values:', error);
        throw error;
    }
}

async function main() {
    try {
        let lastUuid = null;
        let counter = 0
        let excelJson = [];

        while (true) {
            console.log(`Running: ${counter}`)
            let vehicleFromMaster = await getVehicleData(lastUuid);

            // Break the loop if no more vehicles are returned
            if (!vehicleFromMaster || vehicleFromMaster.length === 0) {
                break;
            }

            let extractedJsonVehicleData = extractVehicleValues(vehicleFromMaster);
            excelJson.push(...extractedJsonVehicleData); // Use spread operator to flatten the array

            // Update lastUuid to the uuid of the last vehicle in the current batch
            lastUuid = vehicleFromMaster[vehicleFromMaster.length - 1].uuid;
            counter++;
        }
        let email = await sendEmail(excelJson)
        console.log(email)
    } catch (error) {
        console.error('Error getting vehicle data by last UUID:', error);
        throw error;
    }
}

main()
