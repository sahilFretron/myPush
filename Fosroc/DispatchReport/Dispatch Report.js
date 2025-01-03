const { getDataFromElasticV2 } = require("../services/gateways/shipmentViewGTW.service")
const moment = require('moment');
const XLSX = require('xlsx');
const fs = require("fs")
const rp = require("request-promise")
const BATCH_SIZE = 50;

const freightUnitsIndex = "freightunits_v1"
const orderIndex = "salesorderseventtopic"
const bPartnerIndex = "bpartners"

function getQuery(source, query, size) {
    return {
        "_source": source,
        "size": size,
        "query": {
            "bool": {
                "must": query,
                "must_not": [
                    {
                        "terms": {
                            "status.keyword": ["Deleted"]
                        }
                    },
                    {
                        "terms": {
                            "type.keyword": ["Deleted"]
                        }
                    }
                ]
            }
        }
    }
}

const convertDDMMYYYYToEpoch = (dateString) => {
    if (!dateString) return null;
    if (!isNaN(dateString)) return Number(dateString);

    const date = moment(dateString, 'DD-MM-YYYY', true);
    return date.isValid() ? date.valueOf() : null;
};

function getReadableTimeDiff(epoch1, epoch2) {
    if (!epoch1 || !epoch2 || isNaN(epoch1) || isNaN(epoch2)) {
        return null;
    }
    // Convert milliseconds to minutes
    const diffInMinutes = Math.abs(Math.floor((epoch2 - epoch1) / (1000 * 60)));

    // Calculate hours and remaining minutes
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    // Build readable string
    let result = '';

    if (hours > 0) {
        result += `${hours} hour${hours !== 1 ? 's' : ''}`;
        if (minutes > 0) {
            result += ' ';
        }
    }

    if (minutes > 0 || hours === 0) {
        result += `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }

    return result;
}

function getDispatchStatus(status) {
    if (status === "PENDING") {
        return "Unallocated"
    }
    else if (status === "INDENT") {
        return "Acceptance Pending"
    }
    else if (status === "AUCTIONED") {
        return "Under Bidding"
    }
    else if (status === "ALLOCATED") {
        return "Vehicle Assignment Pending"
    }
    else if (status === "PLACED") {
        return "Finalization Pending"
    }
    else if (status === "FINALIZED" || status === "FINALIZATION_IN_PROGRESS" || status === "DELIVERED") {
        return "Completed"
    }
    else {
        return status
    }
}

function generateExcel(excelData) {
    if (excelData.length === 0) {
        return null
    }
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    const colWidths = Object.keys(excelData[0]).map((key) => ({
        wch: Math.max(
            key.length,
            ...excelData.map(row => (row[key]?.toString()?.length || 0))
        ),
    }));
    worksheet['!cols'] = colWidths;

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Freight Units');

    const filename = `FreightUnits_Export.xlsx`;
    try {
        XLSX.writeFile(workbook, filename);
        console.log(`Generated Excel file at: ${filename}`);
    } catch (error) {
        throw new Error("Failed to write Excel file: " + error.message);
    }

    return filename;
}

const formatDateTime = (epoch) => 
    epoch ? moment(epoch).format('DD-MM-YYYY HH:mm:ss') : null;

function generateRowsForFreightUnits(freight, orderNumbers, consignerNames, consigneeNames, consigneePlaces, consignerPlaces) {
    const findCustomFieldValue = (fields, key) =>
        fields?.find(field => field.fieldKey === key)?.value || null;
    const vendorName = findCustomFieldValue(freight?.customFields, "Vendor Name");
    const indentTime = convertDDMMYYYYToEpoch(findCustomFieldValue(freight?.customFields, "Indent Date Time"));
    const indentAcceptanceTime = convertDDMMYYYYToEpoch(findCustomFieldValue(freight?.customFields, "Indent Acceptance Date Time"))
    const timeTakenForAcceptance = indentAcceptanceTime && indentTime
        ? getReadableTimeDiff(indentTime, indentAcceptanceTime)
        : null;
    const vehicleAssDate = convertDDMMYYYYToEpoch(findCustomFieldValue(freight?.customFields, "Vehicle Assignment Date Time"));
    const vehicleNumber = findCustomFieldValue(freight?.customFields, "Vehicle Number");
    const timeTakenForVehPlacement = vehicleAssDate && indentAcceptanceTime
        ? getReadableTimeDiff(indentAcceptanceTime, vehicleAssDate)
        : null;
    return {
        'Dispatch No': freight?.documentNumber,
        'Order Numbers': orderNumbers ? orderNumbers.join(", ") : null,
        'Vendor Name': vendorName || '',
        'Requested Vehicle (Truck Capacity MT)': freight?.allowedLoadTypes?.[0]?.passingCapacityMT,
        'Dispatch Wt (MT)': freight?.totalQuantity?.weight?.netQuantity,
        'Origin': consignerPlaces,
        'Destination': consigneePlaces,
        'Consignor Name': consignerNames,
        'Consignee Name': consigneeNames,
        'Indent Date Time': formatDateTime(indentTime),
        'Indent Acceptance Date Time': formatDateTime(indentAcceptanceTime),
        'Time Taken For Acceptance': timeTakenForAcceptance,
        'Vehicle Assignment Date': formatDateTime(vehicleAssDate),
        'Vehicle Number': vehicleNumber || '',
        'Time Taken For Vehicle Placement': timeTakenForVehPlacement,
        'Dispatch Status': getDispatchStatus(freight?.lineItems?.[0]?.status) || '',
    };
}

async function sendEmailWithAttachment(
    to,
    cc,
    subject,
    content,
    filePath
) {
    try {
        let url = `https://apis.fretron.com/notifications/ses/email`;
        let reqObj = {
            to: to,
            subject: subject ? subject : "",
            content: content ? content : ""
        };
        if (cc) reqObj.cc = cc;
        if (filePath) reqObj.file = fs.createReadStream(filePath);

        var options = {
            method: "POST",
            uri: url,
            headers: {
                "Content-Type": "application/json",
            },
            formData: reqObj,
            timeout: 10000,
            json: true,
        };
        let res = await rp(options);
        if (res == "SMTP: Email sent to successfully.") {
            fs.unlinkSync(filePath);
            return res
        }
        else {
            throw new Error(res.error)
        }
    } catch (error) {
        throw new Error("Error sending mail- " + error.message)
    }
}

async function fetchElasticData(index, source, must, size) {
    const query = getQuery(source, must, size);
    const data = await getDataFromElasticV2(index, query);
    if (!data || !Array.isArray(data)) {
        throw new Error(`Invalid data received from ${index}`);
    }
    return data;
}

function extractOrderData(orders) {
    return {
        consignerNames: [...new Set(orders.map(order => 
            order._source?.lineItems?.[0]?.consigner?.name).filter(Boolean))],
        consigneeNames: [...new Set(orders.map(order => 
            order._source?.lineItems?.[0]?.consignee?.name).filter(Boolean))],
        consigneePlaces: [...new Set(orders.map(order => 
            order._source?.lineItems?.[0]?.consignee?.places?.[0]?.name).filter(Boolean))],
        consignerPlaces: [...new Set(orders.map(order => 
            order._source?.lineItems?.[0]?.consigner?.places?.[0]?.name).filter(Boolean))]
    };
}

function extractOrderNumbers(customFields) {
    const orderCfs = customFields
        ?.filter(field => field.fieldKey === "Order Numbers")
        .map(field => field.value)
        .flat() || [];

    return orderCfs
        .join(',')
        .split(',')
        .map(order => order.trim())
        .filter(order => order);
}

async function processFreightBatchAndGenerateRows(orgId, uuids, consignorFilter) {
    try {
        const freights = await fetchElasticData(
            freightUnitsIndex, 
            ["uuid", "customFields", "documentNumber", "lineItems", "allowedLoadTypes", "totalQuantity"],
            { "terms": { "uuid.keyword": uuids } },
            50
        );

        const orderNumbers = [...new Set(freights.flatMap(freight => 
            extractOrderNumbers(freight._source.customFields)))];

        const orders = await fetchElasticData(
            orderIndex,
            ["orderNumber", "lineItems.consigner.name", "lineItems.consignee.name", "lineItems.consignee.places", "lineItems.consigner.places"],
            [
                { "term": { "orgId.keyword": { "value": orgId } } },
                { "terms": { "orderNumber.keyword": orderNumbers } }
            ],
            orderNumbers.length
        );

        return Promise.all(freights.map(async freightUnit => {
            const freight = freightUnit._source;
            const orderNumbers = extractOrderNumbers(freight.customFields);

            if (consignorFilter) {
                const matchingOrders = orders.filter(order =>
                    orderNumbers.includes(order._source.orderNumber) &&
                    (consignorFilter === 'NOFILTER' || order._source.lineItems?.[0]?.consigner?.name === consignorFilter)
                );

                if (matchingOrders.length === 0) return null;

                const { consignerNames, consigneeNames, consigneePlaces, consignerPlaces } = 
                    extractOrderData(matchingOrders);

                return generateRowsForFreightUnits(
                    freight,
                    orderNumbers,
                    consignerNames.join(", "),
                    consigneeNames.join(", "),
                    consigneePlaces.join(", "),
                    consignerPlaces.join(", ")
                );
            }
            return null;
        })).then(results => results.filter(Boolean));
    } catch (error) {
        console.error("Error in processFreightBatchAndGenerateRows:", error);
        throw new Error(`Failed to process freight batch: ${error.message}`);
    }
}

async function sendDispatchReport(toEmail, ccEmail, fromDate, tillDate, orgId, token, consignorFilter) {
    if (!toEmail || !fromDate || !tillDate || !orgId) {
        throw new Error("Missing required parameters");
    }

    try {
        let query = [
            {
                "term": {
                    "orgId.keyword": {
                        "value": orgId
                    }
                }
            }, {
                "range": {
                    "documentDate": {
                        "gte": Number(fromDate),
                        "lte": Number(tillDate)
                    }
                }
            }
        ]
        let dataFromElastic = await fetchElasticData(freightUnitsIndex, ["uuid"], query, 5000)

        if (dataFromElastic.length === 0) {
            return "NO_DATA_FOUND";
        }

        let fuIds = []
        for (const hit of dataFromElastic) {
            fuIds.push(hit._source.uuid);
        }
        let excelData = []
        for (let i = 0; i < fuIds.length; i += BATCH_SIZE) {
            const batchIds = fuIds.slice(i, i + BATCH_SIZE);
            const batchResults = await processFreightBatchAndGenerateRows(orgId, batchIds, consignorFilter);
            if (batchResults.length > 0) {
                excelData.push(...batchResults);
            }
        }

        let filePath = generateExcel(excelData);
        if (!filePath) {
            return `EMPTY DATA`;
        }
        return await sendEmailWithAttachment(toEmail, ccEmail, "Dispatch Report - Fosroc", null, filePath)

    } catch (error) {
        console.error("Error in sendDispatchReport:", error);
        throw new Error(`Failed to generate dispatch report: ${error.message}`);
    } finally {
        // Cleanup any temporary files if they exist
        try {
            const tempFile = `FreightUnits_Export.xlsx`;
            if (fs.existsSync(tempFile)) {
                fs.unlinkSync(tempFile);
            }
        } catch (error) {
            console.error("Error cleaning up temporary file:", error);
        }
    }
}

module.exports = {
    sendDispatchReport: sendDispatchReport
}