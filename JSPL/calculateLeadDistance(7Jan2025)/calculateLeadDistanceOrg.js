/**
 * Use Google API and Redis to Calulate Total Km
*/

const G_API_KEY = "AIzaSyCQXxluKgwcmdPbkkpZkkELHP17GsQeGqE"

async function calKm(shipment) {
    let shipmentStages = shipment.shipmentStages;
    let len = shipmentStages ? shipmentStages.length : 0;
    let totalKmRun = 0;
    for (let i = 0; i < len - 1; i++) {
       let center1 =
       shipmentStages[i].place && shipmentStages[i].place.name
        ? shipmentStages[i].place.name
        : (shipmentStages[i].hub && shipmentStages[i].hub.name
          ? shipmentStages[i].hub.name
          : null);
        let center2 =
            shipmentStages[i + 1].hub && shipmentStages[i + 1].hub.name
                ? shipmentStages[i + 1].hub.name
                : shipmentStages[i + 1].place && shipmentStages[i + 1].place.name
                    ? shipmentStages[i + 1].place.name
                    : null;            
        if (center1 && center2) {
           if(center2.indexOf("-")!=-1){
               center2 = center2.split("-")[0]
           } 
           let redisKey = `${center1}#${center2}`
           let distanceFromDb = await kv.get(redisKey)
           let getFromApi = true
           if(distanceFromDb!=null && distanceFromDb!=undefined){
               if(Number(distanceFromDb)>0.0){
                    console.log(`From redis via key ${redisKey}`)
                    totalKmRun += Number(distanceFromDb) / 1000;
                    getFromApi = false
               }
               else{
                    console.log(`${distanceFromDb} : distance : From redis via key ${redisKey} : so ignoring`)
               }
           }
           if(getFromApi){
                let url = `${FRT_PUB_BASE_URL}/itinerary/admin/calculateDistance/via-key?origin=${encodeURIComponent(`${center1},India`)}&destination=${encodeURIComponent(`${center2},India`)}&apiKey=${G_API_KEY}` 
               console.log(`URL : ${url}`)
               let res = await rp({
                   method: "GET",
                   uri: url,
                   json: true,
               });
               console.log(`CalKm by shipment Stage status : ${res.status}`);
               if (res.status == 200) {
                   await kv.set(redisKey,res.data+"")
                   totalKmRun += res.data / 1000;
               }
           }
            
        } else {
            console.log(`Shipment stage:[${i}] or [${i + 1}] centers are null`);
        }
    }
    return Math.ceil(totalKmRun);
}


let sh = $event.body
// console.log(sh)
let totalKm = await calKm(sh)
console.log(`total km ${totalKm} for sh ${sh.shipmentNumber} : ${sh.uuid} `)
return {"data":totalKm}