const fs = require('fs');
const rp = require('request-promise');

// API URL and headers
const apiUrl = 'https://apis.fretron.com/shipment-view/places/page/places?filters=%7B%22category.keyword%22%3A%5B%5D%2C%22isOwned%22%3Afalse%7D&search=';
const headers = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE0MTcxOTIsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiI0NmMwNzM2My1jYzUxLTRjYWItOWQxMC1iYmUxNTczZGEyZDgiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.LW0OukNioSFFw1QHrg_d8QVy9gFTvpoYJjFWdy1iFFE',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

// Async function to fetch places in batches of 50
async function fetchPlaces() {
  let allPlaces = [];
  let from = null;

  while (true) {
    const options = {
      uri: from ? `${apiUrl}&from=${encodeURIComponent(JSON.stringify(from))}` : apiUrl,
      headers,
      json: true
    };

    try {
      const response = await rp(options);

      // Handle response as an array or check for `places` key
      const places = Array.isArray(response) ? response : response.places;

      if (!places || places.length === 0) {
        console.log('No more places to fetch.');
        break;
      }

      allPlaces = allPlaces.concat(places);

      // Set `from` for the next batch based on the last place
      const lastPlace = places[places.length - 1];
      from = [lastPlace.name, lastPlace.placeId];

      console.log(`Fetched ${allPlaces.length} places so far...`);

    } catch (error) {
      console.error('Error fetching places:', error.message);
      break;
    }
  }

  // Save fetched places to a JSON file
  fs.writeFileSync('all_places.json', JSON.stringify(allPlaces, null, 2));
  console.log(`All ${allPlaces.length} places saved to all_places.json`);

  return allPlaces;
}

// Async function to process places into coordinate batches of 200 and add 1 to each coordinate
async function processCoordinates(placesData) {
  const coordinates = [];
  let batch = [];

  placesData.forEach((place, index) => {
    if (place.center && place.center.latitude && place.center.longitude) {
      batch.push([place.center.latitude, place.center.longitude]);
    }

    // When batch reaches 200 or it's the last item, push both original and edited batches
    if (batch.length === 200 || index === placesData.length - 1) {
      coordinates.push(batch);
      batch = [];
    }
  });

  // Save original coordinates to a new JSON file
  fs.writeFileSync('coordinates.json', JSON.stringify(coordinates, null, 2));
  console.log(`Coordinates saved in batches of 200 to coordinates.json`);
  return { coordinates};
}

// Async function to update coordinates in all_places with edited coordinates and save to finalFetch
async function updateCoordinatesInPlaces() {
  // Read the edited coordinates and all places data
  const editedCoordinates = JSON.parse(fs.readFileSync('edited_coordinates.json'));
  const placesData = JSON.parse(fs.readFileSync('all_places.json'));

  let editedIndex = 0;
  let batchIndex = 0;

  // Update each place's center coordinates with the edited ones
  const finalFetch = placesData.map((place, index) => {
    if (place.center && place.center.latitude && place.center.longitude) {
      // Access the correct batch of edited coordinates
      const batch = editedCoordinates[batchIndex];

      if (batch && batch[editedIndex]) {
        // Replace the center coordinates with the edited ones from the batch
        place.center.latitude = batch[editedIndex][1];
        place.center.longitude = batch[editedIndex][0];
        place.centerCoordinates[0] = batch[editedIndex][0];
        place.centerCoordinates[1] = batch[editedIndex][1];
        editedIndex++;
      }

      // Move to the next batch if the current batch is exhausted
      if (editedIndex >= 200) {
        editedIndex = 0;
        batchIndex++;
      }
    }
    return place;
  });

  // Save the modified places data with updated coordinates to finalFetch.json
  fs.writeFileSync('finalFetch.json', JSON.stringify(finalFetch, null, 2));
  console.log(`Final places data saved with updated coordinates to finalFetch.json`);
}



// Main async function to fetch and process places
async function fetchAndProcessPlaces() {
  const places = JSON.parse(fs.readFileSync('all_places.json'));
  await processCoordinates(places);
  // await updateCoordinatesInPlaces();
}

// Execute the function
fetchAndProcessPlaces();



