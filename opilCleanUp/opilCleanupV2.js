const rp = require('request-promise');
const fetchPlacesUrl = 'https://apis.fretron.com/shipment-view/places/page/places?filters=%7B%22category.keyword%22%3A%5B%5D%2C%22isOwned%22%3Afalse%7D&search='
const FRT_BASE_URL = 'https://apis.fretron.com'
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzI2OTM1MzUsInVzZXJJZCI6ImJvdHVzZXItLWRhNWY0MzFmLTQzYzMtNDdhYi04NTQ4LTRhNTZjYjExNjdmYiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLWRhNWY0MzFmLTQzYzMtNDdhYi04NTQ4LTRhNTZjYjExNjdmYiIsIm9yZ0lkIjoiYTliMjEzMzQtYWY0Yi00ZTZjLTg3YWUtODU5YTJiMTIzN2JlIiwibmFtZSI6IkNMRUFOVVAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6ZmFsc2UsInBvcnRhbFR5cGUiOiJiYXNpYyJ9.bZr3BWrKYQp_iZJOyw56B6WWI212Tdvbe7kfnpbwqc8'
const fs = require('fs');
const deletPlaceUri = `${FRT_BASE_URL}/place-manager/v2/place/${placeId}`
const deleteHubUri = `${FRT_BASE_URL}/hubs/v1/hub/${hubId}`
const deleteLoadTypeUri = `${FRT_BASE_URL}/order-manager-v2/load-types/v1/load-type/${loadTypeId}`

function logToFile(filename, message) {
    fs.appendFile(filename, message + '\n', (err) => {
        if (err) {
            console.log(`Error logging message to ${filename}: ${err.message}`);
        }
    });
}

async function getBpIds() {
    try {
        let options = {
            method: 'GET',
            uri: `${FRT_BASE_URL}/shipment-view/bpartners/partners`,
            qs: {
                size: 500,
                from: 0,
                filters: JSON.stringify({
                    type: [],
                    isPortalEnabled: [],
                    group: [],
                    city: [],
                    status: [],
                    verificationStatus: [],
                    _customeField: null
                }),
                allFields: JSON.stringify(["uuid"])
            },
            headers: {
                'Authorization': TOKEN,
            },
            json: true
        }
        let res = await rp(options);
        if (res.length) {
            let bpIdsArray = res.map(item => item.uuid);
            return bpIdsArray
        } else {
            throw new Error("Error Getting Business PArtner:", res.error)
        }
    } catch (error) {
        console.error("Error getting Business Partner:", error.message);
        throw error
    }
}

async function deleteBp(partnerIds) {
    try {
        let options = {
            method: "POST",
            uri: `${FRT_BASE_URL}/business-partners/v2/remove/partners`,
            headers: {
                "Authorization": TOKEN
            },
            body: partnerIds,
            json: true
        }
        let res = await rp(options);
        if (res.status == 200) {
            logToFile('bp_deletion_log.txt', `Deleted BPs: ${bpIdsArray}`);
        } else {
            throw new Error("Error Deleting Business Partners :", res.error)
        }
    } catch (error) {
        console.error("Error Deleting Business Partners:", error.message);
        throw error
    }
}

async function getPlaceIds() {
    let allPlaces = [];
    let from = null;

    while (true) {
        let options = {
            uri: from ? `${fetchPlacesUrl}&from=${encodeURIComponent(JSON.stringify(from))}` : fetchPlacesUrl,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        };

        try {
            const response = await rp(options);
            const places = Array.isArray(response) ? response : response.places;

            if (!places || places.length === 0) {
                console.log('No more places to fetch.');
                break;
            }

            allPlaces = allPlaces.concat(places);
            const lastPlace = places[places.length - 1];
            from = [lastPlace.name, lastPlace.placeId];

            logToFile('pllace_get_log.txt', `Fetched ${allPlaces.length} Places`);

        } catch (error) {
            console.error('Error fetching places:', error.message);
            break;
        }
    }

    const allPlacesIds = allPlaces.map(item => item.placeId);
    return allPlacesIds;
}

async function getHubIds() {
    try {
        let options = {
            uri: `${FRT_BASE_URL}/shipment-view/places/page/hubs?search=`,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        }
        let res = await rp(options);
        if (res.length) {
            const hubIdArray = res.map(item => item.placeId);
            return hubIdArray
        } else {
            throw new Error('Error fetching Hubs:', res.error)
        }
    } catch (error) {
        console.error('Error fetching Hubs:', error.message);
    }
}

async function getLoadTypeIds() {
    try {
        let options = {
            method: "GET",
            uri: `${FRT_BASE_URL}/order-manager-v2/load-types/v1/load-types/v2?limit=50&offset=0&filters=%7B%22vehicleCategory%22%3A%5B%5D%2C%22vehicleCategories%22%3A%5B%5D%2C%22partnerName%22%3A%5B%5D%2C%22bodyType%22%3A%5B%5D%2C%22bodyTypes%22%3A%5B%5D%2C%22chassisType%22%3A%5B%5D%2C%22chassisTypes%22%3A%5B%5D%7D`,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        }
        let res = await rp(options)
        if (res.status == 200) {
            let loadTypeIdArray = res.data.map(item => item.uuid);
            return loadTypeIdArray
        } else {
            throw new Error('Error fetching Load Type:', res.error)
        }
    } catch (error) {
        console.error('Error fetching Load Type:', error.message);
    }
}

async function deleteAndLog(uri, id, logFileName, moduleName) {
    try {
        const options = {
            method: "DELETE",
            uri: uri,
            headers: {
                "Authorization": TOKEN
            },
            json: true
        };

        const res = await rp(options);
        if (res.status === 200) {
            logToFile(logFileName, `Deleted ${moduleName}: ${id}`);
        } else {
            logToFile(logFileName, `Error Deleting ${moduleName}: ${id}: ${JSON.stringify(res.error)}`);
        }
    } catch (error) {
        console.error(`Error Deleting ${moduleName}: ${id}:`, error.message);
        logToFile(logFileName, `Error Deleting ${moduleName}: ${id}: ${error.message}`);
    }
}

async function main() {
    try {
        let bpIdsArray = await getBpIds()
        if (bpIdsArray.length){ 
            await deleteBp(bpIdsArray)
            console.log(`All Business Partners Deleted`);
        }
        let placeIdsArray = await getPlaceIds()
        if (placeIdsArray.length) {
            await Promise.all(placeIdsArray.map(place => deleteAndLog(deletPlaceUri,place,"place_deleted_log.txt","Place")));
            console.log(`All Places Deleted`)
        }
        let hubIdsArray = await getHubIds()
        if (hubIdsArray.length) {
            await Promise.all(hubIdsArray.map(hub => deleteAndLog(deleteHubUri,hub,"hub_deleted_log.txt","Hub")))
            console.log(`All Hubs Deleted`)
        }
        let loadTypeIdsArray = await getLoadTypeIds()
        if (loadTypeIdsArray.length) {
            await Promise.all(loadTypeIdsArray.map(loadType => deleteAndLog(deleteLoadTypeUri,loadType,"loadType_deleted_log.txt","Load Type")))
            console.log(`All Load Types Deleted`)
        }
        console.log("Done")
    } catch (error) {
        console.log(`Error in Main: ${error.message}`)
    }
}

main()
