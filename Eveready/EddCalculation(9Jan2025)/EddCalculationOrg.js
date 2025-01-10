
let token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzIzMzE0NjcsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiZTkwZTkyNzMtMTRjYy00ZTczLTljOGUtMDk5ZGZjMTVjYzdiIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.2KpDPLT9otpdHY5xcYyMr2nQ76TPyu-BTLFuImHzYy4'

let pricingTableID = "4b53a5dc-62b4-4666-8fc4-9aa48482c9c8"

//on sh create
async function main(shId){
    try{
        console.log(`Sh id ${shId}`)
        let sh = await getShipmentById(shId)
        if(!sh){
            throw new Error("error in getting shipment")
        }
        console.log(`Running for shipment: ${sh.shipmentNumber}`)
        let shStages = sh.shipmentStages ?? []
        let origin =  null
        let dest = null
        if(shStages.length > 1){
            origin = shStages[0].place?.externalId ?? shStages[0].hub?.externalId ?? "N/A"
            dest = shStages[shStages.length - 1].place?.externalId ?? shStages[shStages.length - 1].hub?.externalId ?? "N/A"
        }
        console.log(`Origin ${origin} : dest ${dest}`)
        let filter =
        [{"key":"Origin Hub External Id","values":[origin]},{"key":"Destination Hub External Id","values":[dest]}]
        
        let conditionRecords = await getConditionRecords(pricingTableID,500,filter,0)
        console.log(`total records ${conditionRecords.length}`)

        let filteredRecords = conditionRecords.filter(record => 
            record.conditionValues[0].displayValue.some(value => value === origin) && 
            record.conditionValues[1].displayValue.some(value => value === dest)
          );
        console.log(`Filtered records: ${filteredRecords.length}`)
        if(filteredRecords.length){
            let requiredRecord = filteredRecords.length ? filteredRecords[0] : null 
            let transitTime = requiredRecord?.chargeTypes.find(_ => _.name == "TransitDays")?.amount * 24*60*60*1000
            let edd = sh.shipmentDate + transitTime
            if(!sh.edd){
                let payload = {
                    "shipmentId": sh.uuid,
                    "updates": [
                        {
                            "keyToUpdate": "edd",
                            "updatedValue": edd
                        }
                    ]
                }
                await bulkSyncApi(payload,token)
            }
        }
        return {'data':sh,'error':null,'status':200}
    }catch(e){
        console.log(`Some error in main: ${e.message}`)
        return {'data':null,'error':e.message,'status':400}
    }
}

async function bulkSyncApi(payload, token) {
    const url = `${FRT_PUB_BASE_URL}/shipment/v1/shipment/bulk/sync`;
    try {
        const res = await rp({
            method: "POST",
            uri: url,
            body: payload,
            headers: {
                Authorization: token,
            },
            json: true,
        });

        console.log(`Bulk Sync api response status: ${res.status}`);
        if (res.status == 200) {
            return res.data;
        } else {
            console.log(`Bulk Sync api response error: ${res.error}`);
        }
    } catch (e) {
        console.log(`Caught Error in Bulk Sync api: ${e.message}`);
    }
    return null;
}

async function getConditionRecords(pricingTableId, limit, filters,offset=null) {
    try {
        let url = `${FRT_PUB_BASE_URL}/freight-pricing/v1/price/conditions?limit=${limit}&offset=${offset}&freightId=${pricingTableId}&filters=${JSON.stringify(filters)}`
        console.log(`Url ${url}`)
        let res = await rp({
            url: url,
            method: "GET",
            json: true,
            headers: {
                authorization: token
            }
        })
        if (res.status == 200) {
            return res.data
        } else {
            console.log(`On getting condition records for pricing table ${pricingTableId} res error : ${res.error}`)
        }
    } catch (e) {
        console.log(`Catched error in getting condition records for pricing table ${pricingTableId} : ${e.message}`)
    }
    return []
}

async function getShipmentById(shId,skipCn = false){
    try{
        let res = await rp({
                'uri':`${FRT_PUB_BASE_URL}/shipment/v1/admin/shipment/${shId}?skipCn=${skipCn}`,
                'json':true,
                'method':'GET'
            })
       return res.data      
    }
    catch(e){
        console.log(`Error in getting sh ${shId}`)
        return null
    }
}

return await main($event.body.shipmentId)