// package.json contents:
/*
{
  "name": "fuel-analysis",
  "version": "1.0.0",
  "dependencies": {
    "@elastic/elasticsearch": "7.14.0"
  }
}
*/

const { Client } = require('@elastic/elasticsearch');
const fs = require('fs');
const path = require('path');

// Initialize the Elasticsearch client
const client = new Client({
  node: 'http://localhost:9200'  // Update with your Elasticsearch endpoint
});
const indexNameWiseProperties = {
  'device_connection_fuel_data': {
    imei: { type: 'keyword' },
    vehicleNo: { type: 'keyword' },
    fuelInLitres: { type: 'float' },
    timestamp: { type: 'date' },
    ignition: { type: 'boolean' },
    speed: { type: 'float' }
  },
  "fuel_event": {
    imei: { type: 'keyword' },
    vehicleId: { type: 'keyword', null_value: null },
    startTime: { type: 'date', null_value: null },
    endTime: { type: 'date', null_value: null },
    startFuel: { type: 'float', null_value: null },
    endFuel: { type: 'float', null_value: null },
    fuelDifference: { type: 'float', null_value: null },
    eventType: { type: 'keyword', null_value: null },
    rate: { type: 'float', null_value: null },
    orgId: { type: 'keyword', null_value: null },
    startLocation: {
      properties: {
        latitude: { type: 'float', null_value: null },
        longitude: { type: 'float', null_value: null },
        speed: { type: 'float', null_value: null },
        course: { type: 'integer', null_value: null },
        decoder: { type: 'keyword', null_value: null },
        time: { type: 'date', null_value: null },
        imei: { type: 'keyword', null_value: null },
        vehicleId: { type: 'keyword', null_value: null },
        address: { type: 'keyword', null_value: null },
        lngLat: { type: 'geo_point', null_value: null },
        isFillingEnabled: { type: 'boolean', null_value: null },
        odometer: { 
          properties: {
            softwareMeter: { type: 'double', null_value: null },
            lastUpdateTime: { type: 'date', null_value: null },
            isSoftwareMeterManuallyCalibrated: { type: 'boolean', null_value: null },
            lastCalibrationTime: { type: 'date', null_value: null },
            hardwareReading: { type: 'double', null_value: null },
            hardwareDistance: { type: 'double', null_value: null }
          }
        }
      }
    },
    endLocation: {
      properties: {
        latitude: { type: 'float', null_value: null },
        longitude: { type: 'float', null_value: null },
        speed: { type: 'float', null_value: null },
        course: { type: 'integer', null_value: null },
        decoder: { type: 'keyword', null_value: null },
        time: { type: 'date', null_value: null },
        imei: { type: 'keyword', null_value: null },
        vehicleId: { type: 'keyword', null_value: null },
        address: { type: 'keyword', null_value: null },
        lngLat: { type: 'geo_point', null_value: null },
        isFillingEnabled: { type: 'boolean', null_value: null },
        odometer: { 
          properties: {
            softwareMeter: { type: 'double', null_value: null },
            lastUpdateTime: { type: 'date', null_value: null },
            isSoftwareMeterManuallyCalibrated: { type: 'boolean', null_value: null },
            lastCalibrationTime: { type: 'date', null_value: null },
            hardwareReading: { type: 'double', null_value: null },
            hardwareDistance: { type: 'double', null_value: null }
          }
        }
      }
    }
  }
}
async function createIndex(indexName) {
  try {
    // Check if index exists
    const exists = await client.indices.exists({ index: indexName });
    
    if (!exists.body) {
      // Create index with mapping
      await client.indices.create({
        index: indexName,
        body: {
          mappings: {
            properties: indexNameWiseProperties[indexName]
          }
        }
      });
      console.log(`Index ${indexName} created successfully`);
    }
  } catch (error) {
    console.error('Error creating index:', error);
    throw error;
  }
}

async function loadTestData(indexName, dataFilePath,dataTransformationFunction) {
  try {
    // Read the test data file
    const rawData = fs.readFileSync(dataFilePath, 'utf8');
    const mainData = JSON.parse(rawData);

    // Create the index with proper mapping

    const transformedData = mainData.map(doc => ({
      ...dataTransformationFunction(doc),
    }));

    await createIndex(indexName);

    // Bulk insert the data
    const operations = transformedData.flatMap(doc => [
      { index: { _index: indexName } },
      doc
    ]);

    const { body: bulkResponse } = await client.bulk({
      refresh: true,
      body: operations
    });

    if (bulkResponse.errors) {
      const erroredDocuments = [];
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0];
        if (action[operation].error) {
          erroredDocuments.push({
            status: action[operation].status,
            error: action[operation].error,
            document: operations[i * 2 + 1]
          });
        }
      });
      console.error('Failed documents:', erroredDocuments);
    }

    console.log(`Successfully loaded ${mainData.length} documents`);
    
    // Get count of documents in the index
    const { body: countResponse } = await client.count({ index: indexName });
    console.log(`Total documents in index: ${countResponse.count}`);

  } catch (error) {
    console.error('Error loading test data:', error);
    throw error;
  }
}

// Example usage
async function mainForSampleFuelData() {
  const indexName = 'device_connection_fuel_data';
  const dataFilePath = path.join(__dirname, 'sample_fuel_data.json');

  try {
    await loadTestData(indexName, dataFilePath,device_connection_fuel_dataTransformer);
    console.log('Data loading completed successfully');
  } catch (error) {
    console.error('Failed to load test data:', error);
  } finally {
    await client.close();
  }
}

async function mainForHourWiseFuelEventData(){
  const indexName = 'fuel_event';
  const dataFilePath = path.join(__dirname, 'refule_event_data.json');

  try {
    await loadTestData(indexName, dataFilePath,transformHourWiseFuelEventData);
    console.log('Data loading completed successfully');
  } catch (error) {
    console.error('Failed to load test data:', error);
  } finally {
    await client.close();
  }
}

function transformHourWiseFuelEventData(data){
  return {
    ...data,
    startTime: Number(data.startTime.$numberLong),
    endTime: Number(data.endTime.$numberLong),
    startLocation: {
      ...data.startLocation,
      time: Number(data.startLocation.time.$numberLong)
    },
    endLocation: {
      ...data.endLocation,
      time: Number(data.endLocation.time.$numberLong)
    },
    "imei":"TEST123",
    "vehicleId":"TEST12343523",
    "orgId":"test_org"
  };
}

function device_connection_fuel_dataTransformer(data){
  return data;
}

mainForHourWiseFuelEventData();