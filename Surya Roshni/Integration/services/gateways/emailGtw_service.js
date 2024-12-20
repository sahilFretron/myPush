const fs = require('fs');
const rp = require("request-promise")
const logger = require("../../logger")



async function sendEmail(subject, content, to, cc) {
    try {
        let reqObj = {
            'to': to,
            'content': content,
            'subject': subject,
            'cc': cc,
            'html': null,
            'threadId': null
        }
        let url = `http://apis.fretron.com/notifications/ses/email`
        const options = {
            method: 'POST',
            uri: url,
            headers: {
                'Content-Type': 'application/json'
            },
            body: reqObj,
            timeout: 10000,
            'json': true
        }
        let res = await rp(options)
        logger.info('res from email ' + JSON.stringify(res))
    } catch (e) {
        logger.info("error in sending email " + e)
    }
}

async function sendEmailNew(reqObj, filePath = null) {
    //JOIN TO STRING as form data will recieve it in STr
    if (reqObj.to) {
        if (Array.isArray(reqObj.to)) {
            reqObj.to = reqObj.to.join(",");
        }
    }
    if (reqObj.cc) {
        if (Array.isArray(reqObj.cc)) {
            reqObj.cc = reqObj.cc.join(",");
        }
    }
    if (reqObj.content == null) {
        reqObj.content = "";
    }
    if (reqObj.subject == null) {
        reqObj.subject = "";
    }
    if (filePath) reqObj.file = fs.createReadStream(filePath)

    var options = {
        method: "POST",
        uri: "http://apis.fretron.com/notifications/ses/email",
        headers: {
            "Content-Type": "application/json",
        },
        formData: reqObj,
        json: true
    };
    try {
        await rp(options);
        return "OK";
    } catch (e) {
        logger.error(`Error Sending report: ${e.message}`);
    }

    return null;
}

module.exports = {
    sendEmail: sendEmail,
    sendEmailNew: sendEmailNew
}