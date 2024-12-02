const fs = require('fs');
const path = require('path');
const rp = require('request-promise');
let count = 0;
const API_URL = 'https://apis.fretron.com/place-manager/v2/place';

function callApi(payload) {
    const options = {
        method: 'PUT',
        uri: API_URL,
        body: payload,
        headers: {
            'Authorization': ''
        },
        json: true
    };

    rp(options)
        .then(response => {
            console.log(`${count} Place Updated`);
        })
        .catch(error => {
            console.error(`${count} Place failed to Update`);
        });
}

async function processFilesInFolder(folderPath) {
    try {
        const files = fs.readdirSync(folderPath);

        files.forEach(file => {
            // await delay (60000)
            const filePath = path.join(folderPath, file);

            if (file.endsWith('.json')) {
                const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

                data.forEach(place => {
                    count++;
                    callApi(place);
                });
            }
        });
    } catch (error) {
        console.error('Error reading files or calling API:', error);
    }
}

function delay(t, v) {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
    });
}

const folderPath = './finalPlaces';

processFilesInFolder(folderPath);
