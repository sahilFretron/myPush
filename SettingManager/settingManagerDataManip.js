async function transformToNewDataModel(oldData) {
    const groupingFieldsInfo = [{
        fields: oldData.primaryFieldName ? oldData.primaryFieldName.split('|').map(field => field.trim()) : [],
        level: 1
    }];

    const maxGroupingDepth = Math.max(...groupingFieldsInfo.map(info => info.level));

    const updatedMasterRules = {};
    for (const [key, rule] of Object.entries(oldData.masterRules)) {
        updatedMasterRules[key] = {
            ...rule,
            possibleEntityBehaviours: oldData.possibleEntityBehaviours || []
        };
    }

    const repeatOnRows = oldData.primaryRepeatOnRows;

    oldData.primaryRepeatOnRows = null;
    oldData.primaryFieldName = null;

    const newData = {
        ...oldData,
        groupingFieldsInfo: groupingFieldsInfo,
        maxGroupingDepth: maxGroupingDepth,
        repeatOnRows: repeatOnRows,
        masterRules: updatedMasterRules
    };

    return newData;
}

async function migrateData() {
    try {
        const oldDocs = await oldCollection.find({}).toArray();
        
        for (const oldDoc of oldDocs) {
            const transformedDoc = await transformToNewDataModel(oldDoc);
            
            let result = await newCollection.insertOne(transformedDoc);
            if (result.insertedId) {
                console.log(`Migrated document with UUID: ${oldDoc.uuid}`);
            } else {
                console.error(`Failed to migrate document with UUID: ${oldDoc.uuid}`);
            }
        }
        
        console.log('Migration completed successfully');
    } catch (error) {
        console.error('Error during migration:', error);
        throw error;
    }
}

module.exports = {
    migrateData
};

