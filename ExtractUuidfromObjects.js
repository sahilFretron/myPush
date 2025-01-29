const fs = require('fs');

const objectsArray = []

const uuids = objectsArray.map(obj => obj._source.uuid);

// Convert the array to JSON format
const uuidsArrayContent = JSON.stringify(uuids, null, 2); // Pretty format with indentation

// Write the uuids array to a file
fs.writeFile("uuids_array.json", uuidsArrayContent, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("UUIDs array has been successfully written to the file");
  }
});