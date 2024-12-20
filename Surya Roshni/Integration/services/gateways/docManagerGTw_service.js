const rp = require("request-promise")

async function getFileBuffer(url){
    try{
        let res = await rp({
            uri: url,
            encoding: null
        });
        return res
    }catch(e){
        console.log(`Error in getting file buffer: ${e.message}`)
        return null
    }
}

module.exports = {
    getFileBuffer: getFileBuffer
}