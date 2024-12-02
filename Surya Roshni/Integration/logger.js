"use strict"
const context=require("./resources/middlewares")

const { createLogger, format, transports } = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file');
var moment = require('moment')
const clsNamespace=context.clsNamespace

var getDate = () => {
    return moment(Date.now()).format('DD-MM-YY HH:mm:SS')
}

const today = moment(Date.now()).format("DD-MM-YY")
// Create the logger
const logger = createLogger({
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            dirname: './integration_surya_roshni/logs/',
            filename: 'integration-surya-roshni-%DATE%.log',
            datePattern: 'DD-MM-YYYY',
            zippedArchive: false,
            maxSize: '5m', // Specify the maximum size of each log file
            maxFiles: '3d', // Specify how long to keep log files (e.g., keep logs for 7 days)
            auditFile:''
         })
    ]
});

const logger2 = createLogger({
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            dirname: './integration_surya_roshni/logs/',
            filename: 'integration-surya-roshni-reports-%DATE%.log',
            datePattern: 'DD-MM-YYYY',
            zippedArchive: false,
            maxSize: '5m', // Specify the maximum size of each log file
            maxFiles: '7d', // Specify how long to keep log files (e.g., keep logs for 7 days)
            auditFile:''
         })
    ]
});

var info = function (message) {
    let traceID=clsNamespace.get("traceID")
    logger.info(`${getDate()}- ${traceID}  ------${message}`)
}

var error = function (errorMessage) {
    let traceID=clsNamespace.get("traceID")
    logger.error(`${getDate()}- ${traceID}  ------${errorMessage}`)
}

var infoV2 = function (message) {
    let traceID=clsNamespace.get('traceID')
    logger.info(`${getDate()}- ${traceID} :GO: ------${message}`)
}

var log = function(message){
    let traceID=clsNamespace.get('traceID')
    logger2.info(`${getDate()}- ${traceID}  ------${message}`)
}

module.exports = {
    info: info,
    error: error,
    infoV2:infoV2,
    log:log
}