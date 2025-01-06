function customerSyncValidation(payload) {
    const isEmpty = (value) => value === null || value === undefined || value === '';

    const requiredFields = [
        'destinationCity',
        'destinationState',
        'pincode',
        'group',
        'customerId',
        'customerName'
    ];

    const errors = [];

    for (const key of requiredFields) {
        if (isEmpty(payload[key])) {
            errors.push(`${key}`);
        }
    }

    if (errors.length > 0) {
        throw new Error(`${errors.join('; ')}  can't be null or empty`);
    }
}

function transporterSyncValidation(payload) {
    const isEmpty = (value) => value === null || value === undefined || value === '';

    const requiredFields = [
        'transporterId',
        'transporterName'
    ];

    const errors = [];

    for (const key of requiredFields) {
        if (isEmpty(payload[key])) {
            errors.push(`${key}`);
        }
    }

    if (errors.length > 0) {
        throw new Error(`${errors.join('; ')}  can't be null or empty`);
    }
}

function invoiceCreationPayloadValidation(payload) {
    const isEmpty = (value) => value === null || value === undefined || value === '';

    const requiredFields = [
        'Vehicle No',
        'Invoice No.',
        'Material Code',
        'Package Qty',
        'Volume',
        'Weight',
        'Lr. No.',
        'Order Number'
    ];

    const errors = [];

    for (const key of requiredFields) {
        if (isEmpty(payload[key])) {
            errors.push(`${key}`);
        }
    }

    if (errors.length > 0) {
        throw new Error(`${errors.join('; ')} missing`);
    }
}


module.exports = {
    customerSyncValidation: customerSyncValidation,
    transporterSyncValidation: transporterSyncValidation,
    invoiceCreationPayloadValidation: invoiceCreationPayloadValidation
}