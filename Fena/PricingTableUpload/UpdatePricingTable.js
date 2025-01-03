const fs = require('fs');
const path = require('path');
const rp = require('request-promise');
const FormData = require('form-data');
const BASR_URL = 'https://apis.fretron.com';
const priceTableId = 'c1f8bb83-4a68-4a23-a2d9-18fff6a3583d';

async function uploadFile(filePath) {
    const form = new FormData();
    const fileName = path.basename(filePath);

    form.append('file', fs.createReadStream(filePath), {
        filename: fileName,
        contentType: 'text/csv'
    });
    const url = `${BASR_URL}/freight-pricing/v1/bulk/upload/conditions/csv-file?priceTableId=${priceTableId}`;
    const TOKEN = '';

    try {
        // Send the POST request with form-data
        let options = {
            method: 'POST',
            uri: url,
            headers: {
                'Authorization': TOKEN
            },
            formData: {
                file: {
                    value: fs.createReadStream(filePath),
                    options: {
                        filename: fileName,
                        contentType: 'text/csv'
                    }
                }
            },
            json: true
        };
        let response = await rp(options);
        console.log(response);
        const logFileName = `${fileName}_response.json`;
        const logFilePath = path.join('./Fena/PricingTableUpload/response_logs', logFileName);

        if (!fs.existsSync('./Fena/PricingTableUpload/response_logs')) {
            fs.mkdirSync('./Fena/PricingTableUpload/response_logs', { recursive: true });
        }

        fs.writeFileSync(logFilePath, JSON.stringify(response, null, 2));
        console.log('File uploaded successfully. Response saved to:', logFilePath);

        return response;
    } catch (error) {
        const logFileName = `${fileName}_error.json`;
        const logFilePath = path.join('./Fena/PricingTableUpload/response_logs', logFileName);

        if (!fs.existsSync('./Fena/PricingTableUpload/response_logs')) {
            fs.mkdirSync('./Fena/PricingTableUpload/response_logs', { recursive: true });
        }

        fs.writeFileSync(logFilePath, JSON.stringify({ error: error.message }, null, 2));
        console.error('Upload failed. Error saved to:', logFilePath);
        throw error;
    }
}

async function uploadFilesFromFolder(folderPath) {
    try {
        const files = await fs.promises.readdir(folderPath);
        const csvFiles = files.filter(file => file.endsWith('.csv'));
        
        for (const file of csvFiles) {
            const filePath = path.join(folderPath, file);
            console.log(`Uploading file: ${file}`);
            await uploadFile(filePath);
        }
    } catch (err) {
        console.error('Error reading directory:', err.message);
    }
}

const folderPath = './Fena/PricingTableUpload/output_csv_files';
uploadFilesFromFolder(folderPath);
