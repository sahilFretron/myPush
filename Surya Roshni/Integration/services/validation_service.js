function customerSyncValidation(payload) {
    const isEmpty = (value) => value === null || value === undefined || value === '';

    const requiredFields = [
        { key: 'destinationCity', message: "destinationCity can't be null or empty" },
        { key: 'destinationState', message: "destinationState can't be null or empty" },
        { key: 'pincode', message: "pincode can't be null or empty" },
        { key: 'group', message: "group can't be null or empty" },
        { key: 'customerId', message: "customerId can't be null or empty" },
        { key: 'customerName', message: "customerName can't be null or empty" },
    ];

    for (const field of requiredFields) {
        if (isEmpty(payload[field.key])) {
            throw new Error(field.message);
        }
    }
}

function transporterSyncValidation(payload) {
    const isEmpty = (value) => value === null || value === undefined || value === '';

    const requiredFields = [
        { key: 'transporterId', message: "transporterId can't be null or empty" },
        { key: 'transporterName', message: "transporterName can't be null or empty" },
    ];

    for (const field of requiredFields) {
        if (isEmpty(payload[field.key])) {
            throw new Error(field.message);
        }
    }
}



module.exports = {
    customerSyncValidation: customerSyncValidation,
    transporterSyncValidation: transporterSyncValidation
}