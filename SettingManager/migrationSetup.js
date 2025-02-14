const { MongoClient } = require('mongodb');
const { migrateData } = require('./settingManagerDataManip');

const config = {
    oldDB: {
        url: 'mongodb://192.168.1.12:3017/?readPreference=primary&directConnection=true&ssl=false',
        collection: 'reports-upload-settings',      
        dbName: 'commonsettings'      
    },
    newDB: {
        url: 'mongodb://192.168.1.12:3017/?readPreference=primary&directConnection=true&ssl=false/',
        collection: 'reports-upload-settings-test',       
        dbName: 'commonsettings'          
    }
};

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

async function setupMigration() {
    let client;
    
    try {
        console.log('Attempting to connect to old DB:', config.oldDB.url);
        client = await MongoClient.connect(config.oldDB.url, mongoOptions);
        const oldDb = client.db(config.oldDB.dbName);
        global.oldCollection = oldDb.collection(config.oldDB.collection);
        
        const newDb = client.db(config.newDB.dbName);
        global.newCollection = newDb.collection(config.newDB.collection);
        
        console.log('Connected to both databases successfully');
        
        await migrateData();
        
    } catch (error) {
        console.error('Error during migration setup:', error);
        console.error('Full error details:', JSON.stringify(error, null, 2));
        throw error;
        
    } finally {
        if (client) await client.close();
        console.log('Database connections closed');
    }
}

setupMigration()
    .then(() => {
        console.log('Migration completed successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Migration failed:', error);
        process.exit(1);
    }); 