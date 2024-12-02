import snapCoordinatesWithFallback from './Snap Coordinates by Rohit.js'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

// To use `__dirname` equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function doSnapping(batchOfPlaces, radius, count=1,toSavePlaces=[]) {
    let remainBatches = []
    let mappedCoord = batchOfPlaces.map(place => `${place.center.latitude},${place.center.longitude}`);
    let snappedCoord = await snapCoordinatesWithFallback(mappedCoord,false)
    for (let i = 0; i < batchOfPlaces.length; i++) {
        let place = batchOfPlaces[i]
        let snapped = snappedCoord[i]
        if (snapped[0] == -1 && snapped[1] == -1) {
            remainBatches.push(place)
        }
        else{
            place.center.latitude = snapped[1]
            place.center.longitude = snapped[0]
            place.centerCoordinates = [snapped[0],snapped[1]]
            toSavePlaces.push(place)
        }
    }
    if (remainBatches.length == 0) {
        return toSavePlaces
    }
    if(radius == 5000){
        toSavePlaces.push(...remainBatches)
        return toSavePlaces
    }
    return await doSnapping(remainBatches, getRadiusForIteration(count + 1), (count + 1),toSavePlaces)
}

function getRadiusForIteration(iteration) {
    return 500 * iteration
}

async function dataCall() {
    try{
    let places = JSON.parse(fs.readFileSync('all_places.json'));

    const batchSize = 200;
    let batches = []
    for (let i = 0; i < places.length; i += batchSize) {
        batches.push(places.slice(i, i + batchSize));
    }
    for (let i = 41; i < batches.length; i++) {
        await delay(5000);
        console.log(`Processing batch ${i + 1} of ${places.length}`);
        const batch = batches[i];
        let updatedPlaces = await doSnapping(batch, 500);
        const fileName = `updatedPlaces${i + 1}.json`;

        fs.writeFileSync(path.join(__dirname, 'finalPlaces', fileName), JSON.stringify(updatedPlaces, null, 2), 'utf8');
        console.log(`Updated places for batch ${i + 1} saved to ${fileName}`);
    }}
    catch (error){
        console.error("Error during processing:", error);
    }
}

function delay(t, v) {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
    });
}

dataCall()