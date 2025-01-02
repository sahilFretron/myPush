const { getDataFromElasticV2, getDispatchByUuids } = require("../services/gateways/shipmentViewGTW.service")
const moment = require('moment');
const XLSX = require('xlsx');
const fs = require("fs")
const rp = require("request-promise")
const BATCH_SIZE = 50;

const convertDDMMYYYYToEpoch = (dateString) => {
    if (!dateString) return null;
    if (!isNaN(dateString)) return Number(dateString);

    const date = moment(dateString, 'DD-MM-YYYY', true);
    return date.isValid() ? date.valueOf() : null;
};


function generateExcel(excelData) {
    if (!excelData || excelData.length === 0) {
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

function generateRowsForFreightUnits(freight, orderNumbers) {
    const findCustomFieldValue = (fields, key) =>
        fields?.find(field => field.fieldKey === key)?.value || null;
    const indentTime = convertDDMMYYYYToEpoch(findCustomFieldValue(freight?.customFields, "Indent Date Time"));
    const indentAcceptanceTime = convertDDMMYYYYToEpoch(findCustomFieldValue(freight?.customFields, "Indent Acceptance Date Time"))
    const timeTakenForAcceptance = indentAcceptanceTime && indentTime
        ? getReadableTimeDiff(indentTime,indentAcceptanceTime)
        : null;
    const vehicleAssDate = convertDDMMYYYYToEpoch(findCustomFieldValue(freight?.customFields, "Vehicle Assignment Date Time"));
    const vehicleNumber = findCustomFieldValue(freight?.customFields, "Vehicle Number");
    const timeTakenForVehPlacement = vehicleAssDate && indentAcceptanceTime
        ? getReadableTimeDiff(indentAcceptanceTime,vehicleAssDate)
        : null;
    return {
        'Dispatch No': freight?.documentNumber,
        'Order Numbers': orderNumbers ? orderNumbers.join(", ") : null,
        'Requested Vehicle (Truck Capacity)': freight?.allowedLoadTypes?.[0]?.passingCapacityMT,
        'Dispatch Wt': freight?.totalQuantity?.weight?.netQuantity,
        'Origin': freight?.details?.origins.join(", "),
        'Destination': freight?.details?.destinations.join(", "),
        'Consignor Name': freight?.details?.consignors.join(", "),
        'Consignee Name': freight?.details?.consignee.join(", "),
        'Indent Date Time': indentTime
            ? moment(indentTime).format('DD-MM-YYYY HH:mm:ss')
            : null,
        'Indent Acceptance Date Time': indentAcceptanceTime
            ? moment(indentAcceptanceTime).format('DD-MM-YYYY HH:mm:ss')
            : null,
        'Time Taken For Acceptance': timeTakenForAcceptance,
        'Vehicle Assignment Date': vehicleAssDate
            ? moment(vehicleAssDate).format('DD-MM-YYYY HH:mm:ss')
            : null,
        'Vehicle Number': vehicleNumber || '',
        'Time Taken For Vehicle Placement': timeTakenForVehPlacement,
        'Dispatch Status': freight?.lineItems?.[0]?.status || '',
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

async function processFreightBatchAndGenerateRows(uuids, token) {
    const encodedUuids = encodeURIComponent(JSON.stringify({ "uuid": uuids }));
    const freights = await getDispatchByUuids(encodedUuids, token);
    if (!freights) {
        throw new Error("Error Fetching Freight")
    }
    return freights.map(freight => {

        const orderCfs = freight.customFields
            ?.filter(field => field.fieldKey === "Order Numbers")
            .map(field => field.value)
            .flat() || [];

        const orderNumbers = orderCfs
            .join(',')
            .split(',')
            .map(order => order.trim());

        return generateRowsForFreightUnits(freight, orderNumbers);
    });
}

async function sendDispatchReport(toEmail, ccEmail, fromDate, tillDate, orgId, token) {
    try {
        let index = "freightunits_v1"
        let query = {
            "_source": ["uuid"],
            "size": 5000,
            "query": {
                "bool": {
                    "must": [
                        {
                            "term": {
                                "orgId.keyword": {
                                    "value": orgId
                                }
                            }
                        },
                        {
                            "range": {
                                "documentDate": {
                                    "gte": Number(fromDate),
                                    "lte": Number(tillDate)
                                }
                            }
                        }
                    ],
                    "must_not": [
                        {
                            "term": {
                                "type.keyword": {
                                    "value": "Deleted"
                                }
                            }
                        }
                    ]
                }
            }
        };

        let dataFromElastic = await getDataFromElasticV2(index, query)
        if (!dataFromElastic) {
            throw new Error("Error Getting Data from Elastic")
        }
        let fuIds = []
        for (const hit of dataFromElastic) {
            fuIds.push(hit._source.uuid);
        }
        let excelData = []
        for (let i = 0; i < fuIds.length; i += BATCH_SIZE) {
            const batchIds = fuIds.slice(i, i + BATCH_SIZE);
            const batchResults = await processFreightBatchAndGenerateRows(batchIds, token);
            excelData.push(...batchResults);
        }

        let filePath = generateExcel(excelData);
        return await sendEmailWithAttachment(toEmail, ccEmail, "Dispatch Report - Fosroc", null, filePath)

    } catch (e) {
        console.log(e)
        throw e
    }
}

function getReadableTimeDiff(epoch1, epoch2) {
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
module.exports = {
    sendDispatchReport: sendDispatchReport
}