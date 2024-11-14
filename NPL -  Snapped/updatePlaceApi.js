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
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1NjYxNTEsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiI0NmMwNzM2My1jYzUxLTRjYWItOWQxMC1iYmUxNTczZGEyZDgiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.HE4_Dmk3EGvlKjPWYLwRjM58Wv6nSb-djL02QU_Z5s8'
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
