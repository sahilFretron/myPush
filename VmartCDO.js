const rp = require('request-promise');
const ExcelJS = require('exceljs');

// API base URL and headers
const API_URL = 'https://apis.fretron.com/shipment-view/bpartners/partners';
const API_HEADERS = {
    'Authorization': '',
    'Content-Type': 'application/json'
};

// Function to fetch data with pagination
async function fetchPaginatedData() {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Customer Data');

    // Add headers
    worksheet.columns = [
        { header: 'Customer Name', key: 'customerName', width: 25 },
        { header: 'External ID', key: 'externalID', width: 20 },
        { header: 'Place Name', key: 'placeName', width: 25 },
        { header: 'Latitude', key: 'latitude', width: 20 },
        { header: 'Longitude', key: 'longitude', width: 20 },
        { header: 'Phone', key: 'phone', width: 20 },
        { header: 'Email', key: 'email', width: 30 }
    ];

    let from = 0; // Starting offset
    const size = 50; // Number of records per API call
    let hasMoreData = true;

    try {
        while (hasMoreData) {
            console.log(`Fetching records from ${from}...`);
            const options = {
                uri: `${API_URL}?size=${size}&from=${from}&filters=${encodeURIComponent(JSON.stringify({
                    "type": ["customer"],
                    "isPortalEnabled": [],
                    "group": [],
                    "city": [],
                    "status": [],
                    "verificationStatus": [],
                    "_customeField": null
                }))}`,
                headers: API_HEADERS,
                json: true
            };

            const response = await rp(options);
            if (!response || response.length === 0) {
                hasMoreData = false;
                console.log('No more data to fetch.');
                break;
            }

            // Extract required fields and append to worksheet
            const extractedData = response.map(item => {
                // Extract contacts (email and phone)
                const contact = item.contacts && item.contacts.length > 0 ? item.contacts[0] : {};
                const email = contact.emails && contact.emails.length > 0 ? contact.emails.join(', ') : 'N/A';
                const phone = contact.mobileNumbers && contact.mobileNumbers.length > 0 ? contact.mobileNumbers.join(', ') : 'N/A';

                return {
                    customerName: item.name || 'N/A',
                    externalID: item.externalId || 'N/A',
                    placeName: item.places?.[0]?.name || 'N/A',
                    latitude: item.places?.[0]?.center?.latitude || 'N/A',
                    longitude: item.places?.[0]?.center?.longitude || 'N/A',
                    phone: phone,
                    email: email
                };
            });

            extractedData.forEach(data => worksheet.addRow(data));

            from += size; // Increment offset for the next batch
            
        }

        // Save the workbook
        const filePath = './CustomerData.xlsx';
        await workbook.xlsx.writeFile(filePath);
        console.log(`Data saved to ${filePath}`);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Execute the function
fetchPaginatedData();
