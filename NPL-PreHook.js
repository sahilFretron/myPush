const rp = require('request-promise');
const TOKEN = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjc2NzY0MjMsInVzZXJJZCI6ImExYzg1MWQ0LTZkMWItNGZiZi1hZDllLWRiNmJhOWViZTI3ZCIsImVtYWlsIjoiaGFyc2hpdC5ndXB0YUBmcmV0cm9uLmNvbSIsIm1vYmlsZU51bWJlciI6Ijg5NTUxMTcwMDMiLCJvcmdJZCI6ImUxMzE4MGU3LWY4NDktNDU2OC1hZDdlLTFhMjM3YTFhOGZiMyIsIm5hbWUiOiJIYXJzaGl0IEd1cHRhIiwib3JnVHlwZSI6IkZMRUVUX09XTkVSIiwiaXNHb2QiOnRydWUsInBvcnRhbFR5cGUiOiJiYXNpYyJ9.WqZFCkYsij4uMcJdQT_4C5imVU4194TjihhVzzCt1Zs";

async function getShWithCn(shId) {
    try {
        let url = `https://apis.fretron.com/shipment/v1/shipment/${shId}?skipCn=false`;
        let res = await rp({
            uri: url,
            method: "GET",
            json: true,
            headers: {
                authorization: TOKEN,
            },
        });

        if (res?.error) {
            console.log(`Error: ${JSON.stringify(res.error)}`);
            return null;
        }
        return res.data;
    } catch (e) {
        console.log(`Error Getting Shipment: ${e.message}`);
        return null;
    }
}

async function main(shId) {
    try {
        let data = null;
        let status = 400;
        let error = null;

        let shCs = await getShWithCn(shId);

        if (shCs) {
            let cns = shCs.consignments;
            if (cns?.length >= 1) {
                status = 200;
                data = shCs;
            } else {
                error = "No Consignments Found";
            }
        } else {
            error = "Shipment data not found";
        }

        return { data: data, error: error, status: status };
    } catch (e) {
        console.log(`Error (Main): ${e.message}`);
        return { data: null, error: e.message, status: 400 };
    }
}

async function run() {
    try {
        let shId = "3f108772-1758-4ec9-951f-edc2d62b5138";
        let result = await main(shId);

        console.log('Final result:', result);

    } catch (e) {
        console.log(`Error (Run): ${e.message}`);
        return { data: null, error: e.message, status: 400 };
    }
}

run();
