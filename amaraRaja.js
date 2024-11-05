const request = require('request-promise');
const moment = require('moment');

const baseApiUrl = 'https://apis.fretron.com';
const filters = encodeURIComponent(JSON.stringify({ "__version": 2 }));
const TOKEN = 'Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzA3MDMxNTEsInVzZXJJZCI6IjNmNjdlNmFmLWU5MjAtNGNmNy1hMTViLWIzMjc4Zjc4ZjFkMiIsImVtYWlsIjoic2FoaWwuYWdnYXJ3YWxAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI3MDU2MDMyNzQ0Iiwib3JnSWQiOiIwNzAwMWNiMS03MGZjLTRmMDQtOGE0NS1mZDA2YjkzNmIyYTAiLCJuYW1lIjoiU2FoaWwiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.afk-0IwF3XaCeRqtbV9CEr6sKVZWw7ptZCdcu6vAsDs';

const shipmentNumbers = [
    'FRETSH0035564'
];

const fetchShipmentsElastic = async (shipmentNumber) => {
    const apiUrl = `${baseApiUrl}/shipment-view/shipments/v1?filters=${filters}&search=${shipmentNumber}`;
    const options = {
        uri: apiUrl,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };

    try {
        const response = await request(options);
        console.log(`Fetched data for shipment ${shipmentNumber}:`, response);
        checkNSetTime(response);
    } catch (error) {
        console.error(`Error fetching shipment ${shipmentNumber}:`, error.message);
    }
};

const checkNSetTime = async (shipmentData) => {
    const updates = [];
    const creationTime = moment(shipmentData[0].creationTime);
    shipmentData[0].shipmentStages.forEach(stage => {
        if (!stage.arrivalTime) {
            stage.arrivalTime = creationTime.clone().add(1, 'hour').valueOf();
        }
        if (!stage.departureTime) {
            stage.departureTime = creationTime.clone().add(1, 'hour').add(10, 'minute').valueOf();
        }
        
        updates.push({
            "shipmentId": shipmentData[0].uuid,
            "updates": [
                {
                    "keyToUpdate": "arrivalTime",
                    "stageId": stage.uuid,
                    "updatedValue": stage.arrivalTime
                },
                {
                    "keyToUpdate": "departureTime",
                    "stageId": stage.uuid,  
                    "updatedValue": stage.departureTime
                }
            ]
        });
    });
    //calling two times because not able to set two Arrival and Departure at one call.
    await syncShipment(updates[0], shipmentData[0].uuid);
    await syncShipment(updates[0], shipmentData[0].uuid);
};

const syncShipment = async (updates, shUuid) => {
    const options = {
        method: 'POST',
        uri: `${baseApiUrl}/shipment/v1/shipment/bulk/sync`,
        body: updates,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };

    try {
        const response = await request(options);
        console.log('Shipment time updated successfully:', response);

        const shipment = await getShipmentByUuid(shUuid);
        if (shipment.data) {
            shipment.data.shipmentTrackingStatus = null;
            shipment.data.shipmentStatus = "Completed";
            await updateShipmentAdmin(shipment.data);
        }
    } catch (error) {
        console.error('Error updating shipment time:', error.message);
    }
};

const getShipmentByUuid = async (shUuid) => {
    const options = {
        method: 'GET',
        uri: `${baseApiUrl}/shipment/v1/shipment/${shUuid}?skipCn=false`,
        headers: {
            'Authorization': TOKEN
        },
        json: true
    };

    try {
        const response = await request(options);
        console.log('Fetched shipment by UUID successfully:', response);
        return response;
    } catch (error) {
        console.error('Error fetching shipment by UUID:', error.message);
        return null;
    }
};

const updateShipmentAdmin = async (shipment) => {
    const options = {
        method: 'PUT',
        uri: `${baseApiUrl}/shipment/v1/admin/shipment`,
        headers: {
            'Authorization': TOKEN
        },
        body: shipment,
        json: true
    };

    try {
        const response = await request(options);
        console.log('Shipment marked as Completed successfully:', response);
    } catch (error) {
        console.error('Error updating shipment status to Completed:', error.message);
    }
};

shipmentNumbers.forEach(shipmentNumber => {
    fetchShipmentsElastic(shipmentNumber);
});
