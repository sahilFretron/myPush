import rp from 'request-promise';

const external_api_token_v3 = '5b3ce3597851110001cf6248b4060853ac754ee5b656fe9d4e4968ae' // HARSHIT
async function _snapCoordinatesToRoad(coordinates) {
    const url = 'https://api.openrouteservice.org/v2/snap/driving-car/json';
    const payload = {
        locations: coordinates.map(coord => {
            const [lat, lng] = coord.split(',').map(Number);
            return [lng, lat]; // Note: API expects [longitude, latitude]
        }),
        radius: 5000
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
        console.log(`Error in snapCoordinatesToRoad: ${JSON.stringify(res)}`);
        return null;
    }).catch(error => {
        console.log(`Caught Some Error in snapCoordinatesToRoad: ${error.message}`);
        return null;
    });
}



function _parseSnappedResponse(response, originalCoordinates, useOriginalIfNotFound=true) {
    if (!response?.locations) return [];

    return response.locations.map((loc, index) => {
        if (!loc?.location) {
            if (useOriginalIfNotFound) { 
                const [lat,lng] = originalCoordinates[index].split(',').map(Number);
                return [lng, lat];
            }
            else{
                const [lat, lng] = [-1, -1]; 
                return [lng, lat];
            }
        }
        return [loc.location[0], loc.location[1]];
    });
}

async function snapCoordinatesWithFallback(coordinates, useOriginalIfNotFound = true) {
    try {
        const snappedResponse = await _snapCoordinatesToRoad(coordinates);
        if (!snappedResponse) {
            return coordinates.map(coord => {
                if(useOriginalIfNotFound){
                    const [lat, lng] = coord.split(',').map(Number);
                    return [lng, lat];
                }
                else{
                    return [-1,-1]
                }
            });
        }
        return _parseSnappedResponse(snappedResponse, coordinates, useOriginalIfNotFound);
    } catch (error) {
        console.log(`Error in snapCoordinatesWithFallback: ${error.message}`);
        return coordinates.map(coord => {
            const [lat, lng] = coord.split(',').map(Number);
            return [lng, lat];
        });
    }
}


export default snapCoordinatesWithFallback;