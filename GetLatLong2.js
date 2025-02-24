const fs = require('fs');
const axios = require('axios');

const API_KEY = 'pk.1c0ef6223d00bb9a9cb53d739bdfeb5b'; // Replace with your LocationIQ API key
const INPUT_FILE = 'pincodes.txt'; // File containing postal codes, one per line
const OUTPUT_FILE = 'output.csv'; // Output file with lat, long

// Read postal codes from the input file
const pincodes = fs.readFileSync(INPUT_FILE, 'utf-8').split('\n').filter(Boolean);

// Function to fetch lat, long for a postal code
async function getLatLong(postalCode) {
    const url = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&postalcode=${encodeURIComponent(postalCode)}&format=json`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data.length > 0) {
            const { lat, lon } = data[0];
            return { postalCode, lat, lon };
        } else {
            console.log(`No results found for postal code: ${postalCode}`);
            return { postalCode, lat: null, lon: null };
        }
    } catch (error) {
        console.error(`Error fetching data for postal code: ${postalCode}`, error.message);
        return { postalCode, lat: null, lon: null };
    }
}

// Process all postal codes
async function processPincodes() {
    const results = [];
    for (const pincode of pincodes) {
        const result = await getLatLong(pincode);
        results.push(result);
        console.log(`Processed: ${pincode} -> Lat: ${result.lat}, Lon: ${result.lon}`);

        // Add a delay to respect LocationIQ's usage policy
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Save results to a CSV file
    const csvContent = results.map(r => `${r.postalCode},${r.lat},${r.lon}`).join('\n');
    fs.writeFileSync(OUTPUT_FILE, `PostalCode,Latitude,Longitude\n${csvContent}`);
    console.log(`Results saved to ${OUTPUT_FILE}`);
}

// Run the script
processPincodes();