const rp = require('request-promise');
const maxRadius = 5000; 
const radiusIncrement = 500;
const external_api_token_v3 = '5b3ce3597851110001cf6248b4060853ac754ee5b656fe9d4e4968ae'
let yourPlaceObjects = [
    {
    "hubId": null,
    "boundary": null,
    "address": ", , INDIAN OIL DEALER Vill LOHRAKOT Tehsil  Pithora Dist  Mahasamund On Raipur  Saraipali Road NH 53, mahasamund, 493551, CG, IN",
    "accessibility": "public",
    "addedBy": "46c07363-cc51-4cab-9d10-bbe1573da2d8",
    "center": {
        "latitude": 21.200811413806125,
        "longitude": 82.42875409558776
    },
    "suggestedRadius": 130,
    "isOwned": false,
    "centerCoordinates": [
        82.42875409558776,
        21.200811413806125
    ],
    "placeId": "ed4b21fb-04e3-4ba4-94ba-b504839218af",
    "geoJsonBoundry": null,
    "externalId": null,
    "source": "FRETRON",
    "places": null,
    "viewport": null,
    "district": "mahasamund",
    "name": "mahasamund-SATPAL FUELS 351339",
    "state": "CG",
    "category": "Unloading Point",
    "subDistrict": null,
    "controllingBranchId": null
},
{
    "hubId": null,
    "boundary": null,
    "address": "koilwar, BIHAR, 802160, India",
    "accessibility": null,
    "addedBy": "46c07363-cc51-4cab-9d10-bbe1573da2d8",
    "center": {
        "latitude": 25.69765862,
        "longitude": 85.06989174
    },
    "suggestedRadius": 0,
    "isOwned": null,
    "centerCoordinates": [
        85.06989174,
        25.69765862
    ],
    "placeId": "84907c21-3f82-499d-a69e-3752319d61f8",
    "geoJsonBoundry": null,
    "externalId": null,
    "source": "FRETRON",
    "places": null,
    "viewport": null,
    "district": "koilwar",
    "name": "koilwar-SHIVAY MOTORS",
    "state": "BIHAR",
    "category": "Unloading Point",
    "subDistrict": null,
    "controllingBranchId": null
},
{
    "hubId": null,
    "boundary": null,
    "address": "khamgaon, Maharashtra, 444303, India",
    "accessibility": null,
    "addedBy": "46c07363-cc51-4cab-9d10-bbe1573da2d8",
    "center": {
        "latitude": 20.6376582207136,
        "longitude": 76.58976822532348
    },
    "suggestedRadius": 0,
    "isOwned": null,
    "centerCoordinates": [
        76.58976822532348,
        20.6376582207136
    ],
    "placeId": "2bfbabb1-e421-4280-a233-3e88eb9938a9",
    "geoJsonBoundry": null,
    "externalId": null,
    "source": "FRETRON",
    "places": null,
    "viewport": null,
    "district": "khamgaon",
    "name": "khamgaon-BHAVANI PETROLEUM",
    "state": "MAHARASHTRA",
    "category": "Unloading Point",
    "subDistrict": null,
    "controllingBranchId": null
}]

async function _snapCoordinatesToRoad(coordinates, radius) {
    const url = 'https://api.openrouteservice.org/v2/snap/driving-car/json';
    const payload = {
        locations: coordinates.map(coord => {
            const [lat, lng] = coord.split(',').map(Number);
            return [lng, lat]; 
        }),
        radius: radius
    };

    return await rp({
        url: url,
        method: 'POST',
        json: true,
        body: payload,
        headers: {
            'Authorization': external_api_token_v3,
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
        }
    }).then(res => {
        if (res) return res;
        logger.info_loadBuilder_party(`Error in snapCoordinatesToRoad: ${JSON.stringify(res)}`);
        return null;
    }).catch(error => {
        logger.info_loadBuilder_party(`Caught Some Error in snapCoordinatesToRoad: ${error.message}`);
        return null;
    });
}

function _parseSnappedResponse(response, originalCoordinates) {
    if (!response?.locations) return [];

    return response.locations.map((loc, index) => {
        if (!loc?.location) {
            const [lat, lng] = originalCoordinates[index].split(',').map(Number);
            return [lng, lat];
        }
        return [loc.location[0], loc.location[1]];
    });
}

async function snapCoordinatesWithFallback(placeObjects, radius = 500) {
    const coordinates = placeObjects.map(place => `${place.center.latitude},${place.center.longitude}`);

    let snappedCoordinates = await _snapCoordinatesToRoad(coordinates, radius);
    if (!snappedCoordinates) {
        return placeObjects.map(place => ({
            ...place,
            snappedCenter: [place.center.longitude, place.center.latitude]
        }));
    }

    let snappedResults = _parseSnappedResponse(snappedCoordinates, coordinates);

    const unchangedIndices = snappedResults
        .map((result, index) => {
            const [originalLng, originalLat] = coordinates[index].split(',').map(Number);
            return result[0] === originalLat && result[1] === originalLng ? index : null;
        })
        .filter(index => index !== null);

    if (unchangedIndices.length === 0 || radius >= maxRadius) {
        return placeObjects.map((place, index) => ({
            ...place,
            snappedCenter: snappedResults[index]
        }));
    }

    const retryPlaceObjects = unchangedIndices.map(index => placeObjects[index]);
    const retryResults = await snapCoordinatesWithFallback(retryPlaceObjects, radius + radiusIncrement);

    unchangedIndices.forEach((index, retryIndex) => {
        placeObjects[index].center.latitude = retryResults[retryIndex].center[1];  
        placeObjects[index].center.longitude = retryResults[retryIndex].center[0]; 
        placeObjects[index].centerCoordinates = [retryResults[retryIndex].center[0], retryResults[retryIndex].center[1]];  // [longitude, latitude]
    });

    return placeObjects.map((place, index) => {
        place.center.latitude = snappedResults[index][1]; 
        place.center.longitude = snappedResults[index][0];
        place.centerCoordinates = [snappedResults[index][0], snappedResults[index][1]];
        return place;
    });
}

fs.readFile('input.json', 'utf8', async (err, data) => {
    if (err) {
        console.log('Error reading input file:', err);
        return;
    }
    
    let yourPlaceObjects = JSON.parse(data);

    const batchSize = 200;
    const batches = [];
    for (let i = 0; i < yourPlaceObjects.length; i += batchSize) {
        batches.push(yourPlaceObjects.slice(i, i + batchSize));
    }

    let allProcessedResults = [];

    for (let i = 0; i < batches.length; i++) {
        console.log(`Processing batch ${i + 1} of ${batches.length}`);
        const batch = batches[i];

        const processedBatch = await snapCoordinatesWithFallback(batch);

        allProcessedResults = [...allProcessedResults, ...processedBatch];
    }

    fs.writeFile('output.json', JSON.stringify(allProcessedResults, null, 2), (err) => {
        if (err) {
            console.log('Error writing output file:', err);
        } else {
            console.log('Successfully wrote processed results to output.json');
        }
    });
});

