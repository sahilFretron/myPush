const { sendEmailNew } = require('../gateways/emailGtw_service')

const path = require('path');
const ExcelJS = require('exceljs');
const logger = require("../../logger");




async function sheetNameWiseJsonArr2XLsxBuffer(data, spreadSheetName = 'Report') {
    const workbook = new ExcelJS.Workbook();
    const filePath = path.join(__dirname, `./reports/${spreadSheetName}.xlsx`)
    const sheetName = 'Sheet1'

    logger.info(`Processing sheet: ${sheetName}`);

    // Create a new worksheet
    const worksheet = workbook.addWorksheet(sheetName);

    // Add the header row and data to the worksheet
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: 'middle', horizontal: 'left' };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '72A0C0AA' }, // Light blue with transparency
    };


    // Add borders to the header row
    headerRow.border = {
        top: { style: 'thin' },    // Thin top border
        bottom: { style: 'thin' }, // Thin bottom border
        left: { style: 'thin' },   // Thin left border
        right: { style: 'thin' },  // Thin right border
    };

    const columns = Object.keys(data[0]);

    // Add only columns with data to the worksheet
    worksheet.columns = columns.map(columnName => ({
        header: columnName,
        key: columnName,
    }));

    worksheet.addRows(data);

    try {
        await workbook.xlsx.writeFile(filePath);
        logger.info(`XLSX file written successfully: ${filePath}`);
        return filePath;
    } catch (error) {
        logger.error(`Error writing XLSX file: ${error.message}`);
        return null;
    }
}



async function sendReport(
    jsonArray,
    to = ['sahil.agggarwal@fretron.com'],
    cc = [],
    subject = null,
    content = null,
    spreadSheetName = null
) {

    if (!spreadSheetName) {
        spreadSheetName = "Report"
    }
    let filePath = null

    if(jsonArray?.length){
        filePath = await sheetNameWiseJsonArr2XLsxBuffer(jsonArray, spreadSheetName)
    }

    if (!subject) {
        subject = `fretron mail to modicare`
    }

    if (!content) {
        content = `Dear Sir,\nPlease find the attached sheet.\nThanks and Regards\nTeam Fretron`
    }

    const reqObj = {
        subject: subject,
        content: content,
        to: to,
        cc: cc
    }

    logger.info(`Sending mail to : ${reqObj.to.join(), reqObj.cc.join()}`)
    logger.info(`Sending file path: ${filePath}`)

    let mailSent = await sendEmailNew(reqObj, filePath)
    logger.info(`mailSent: ${mailSent}`);
    return `mailSent: ${mailSent}`
}

module.exports = {
    sendReport: sendReport
}

