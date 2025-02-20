const polyline = require('@mapbox/polyline');

const encodedPolyline = "abngCsaysOeAHWc@iCmKmDPo@f@@r@??tEuA??i@Pt@NxB~HjADtAhGfBbCdDpQzBLlAc@akAedHiC_GPcDeHs_@kFmOyq@_}A_EeLu@}Dh@uTs@uAuAi@_BHmAt@m@tCfC~FzEhBpi@oCrDi@~CqAtb@{\jKgHzsAus@paDaoA??fBs@";

const decodedCoordinates = polyline.decode(encodedPolyline);

function haversineDistance(coord1, coord2) {
    const toRad = angle => (Math.PI / 180) * angle;
    const R = 6371e3; // Earth's radius in meters
    const lat1 = toRad(coord1[0]);
    const lon1 = toRad(coord1[1]);
    const lat2 = toRad(coord2[0]);
    const lon2 = toRad(coord2[1]);
    
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    return R * c; // Distance in meters
}

function getOffTrackDistance(decodedCoordinates, givenCoordinates) {
    let minDistance = Infinity;
    
    for (const coord of decodedCoordinates) {
        const distance = haversineDistance(coord, givenCoordinates);
        if (distance < minDistance) {
            minDistance = distance;
        }
    }
    
    return minDistance; // Minimum off-track distance in meters
}

function getMaxSegmentDistance(decodedCoordinates) {
    let maxDistance = 0;
    let maxDistancePoints = {
        point1: null,
        point2: null
    };
    
    // Loop through coordinates except the last one
    for (let i = 0; i < decodedCoordinates.length - 1; i++) {
        const currentCoord = decodedCoordinates[i];
        const nextCoord = decodedCoordinates[i + 1];
        
        const distance = haversineDistance(currentCoord, nextCoord);
        if (distance > maxDistance) {
            maxDistance = distance;
            maxDistancePoints.point1 = currentCoord;
            maxDistancePoints.point2 = nextCoord;
        }
    }
    
    return {
        distance: maxDistance,
        points: maxDistancePoints
    };
}

let givenCoordinates = [
    22.356951111111112,
    87.2923988888889
]

// console.log(decodedCoordinates)
// console.log(getOffTrackDistance(decodedCoordinates, givenCoordinates))
// const maxSegmentInfo = getMaxSegmentDistance(decodedCoordinates);
// console.log("Maximum distance between consecutive points:", maxSegmentInfo.distance);
// console.log("Points with maximum distance:", maxSegmentInfo.points);

// console.log(new Date(Date.now()).toISOString().replace('T', ' ').replace(/\.\d+Z$/, ''))


async function exitHook(dataArr,level) {
    const grouped = {};
    
    dataArr.forEach(item => {
        const key = `${item.itemConsigneeExtId.value}-${item.itemConsignerExtId.value}`;
        
        if (!grouped[key]) {
            grouped[key] = {
                itemConsigneeExtId: item.itemConsigneeExtId,
                itemConsignerExtId: item.itemConsignerExtId
            };
        }
        
        Object.keys(item).forEach(k => {
            if (k !== 'itemConsigneeExtId' && k !== 'itemConsignerExtId') {
                let fieldDef = item[k];
                if (fieldDef.dataType == "Double") {
                    if (!grouped[key][k]) {
                        grouped[key][k] = fieldDef;
                    } else {
                        grouped[key][k].value += fieldDef.value;
                    }
                } else {
                    grouped[key][k] = item[k];
                }
            }
        });
    });
    
    return Object.values(grouped);
}

exitHook(dataArr);