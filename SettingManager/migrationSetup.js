const { MongoClient } = require('mongodb');
const { migrateData } = require('./settingManagerDataManip');

const config = {
    oldDB: {
        url: 'mongodb://localhost:27017',  
        dbName: 'SettingManagerTest',      
        collection: 'setting'      
    },
    newDB: {
        url: 'mongodb://localhost:27017',  
        dbName: 'SettingManagerTest',       
        collection: 'setting_v2'          
    }
};

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

async function setupMigration() {
    let oldClient, newClient;
    
    try {
        oldClient = await MongoClient.connect(config.oldDB.url, mongoOptions);
        const oldDb = oldClient.db(config.oldDB.dbName);
        global.oldCollection = oldDb.collection(config.oldDB.collection);
        
        newClient = await MongoClient.connect(config.newDB.url, mongoOptions);
        const newDb = newClient.db(config.newDB.dbName);
        global.newCollection = newDb.collection(config.newDB.collection);
        
        console.log('Connected to both databases successfully');
        
        await migrateData();
        
    } catch (error) {
        console.error('Error during migration setup:', error);
        throw error;
        
    } finally {
        if (oldClient) await oldClient.close();
        if (newClient) await newClient.close();
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