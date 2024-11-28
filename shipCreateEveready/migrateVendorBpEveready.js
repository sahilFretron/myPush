const rp = require('request-promise')
const PROD_TOKEN = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzA5NTg5NjUsInVzZXJJZCI6ImJvdHVzZXItLWEwNmNhYTU3LTlmMGEtNDEyMC05NDk5LTFjY2QyOGVlYzc1MSIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLWEwNmNhYTU3LTlmMGEtNDEyMC05NDk5LTFjY2QyOGVlYzc1MSIsIm9yZ0lkIjoiZTkwZTkyNzMtMTRjYy00ZTczLTljOGUtMDk5ZGZjMTVjYzdiIiwibmFtZSI6IkludGVncmF0aW9uQm90Iiwib3JnVHlwZSI6IkZMRUVUX09XTkVSIiwiaXNHb2QiOmZhbHNlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.k8InC25nksXm7UkONE480lUrwv9ceI1u-F9uN-VJuGg"
const QA_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzI3NzU2OTUsInVzZXJJZCI6ImJvdHVzZXItLWZiNzFjMDhmLWM4NzUtNGZiNi1hNGYyLTgwY2I5MjA5YzdkZiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLWZiNzFjMDhmLWM4NzUtNGZiNi1hNGYyLTgwY2I5MjA5YzdkZiIsIm9yZ0lkIjoiOTc3ZWQzMWMtZDc5MS00NDkzLWI1YWEtMGI2ODMyNDdmOTVkIiwibmFtZSI6IlZlbmRvckJwIiwib3JnVHlwZSI6IkZMRUVUX09XTkVSIiwiaXNHb2QiOmZhbHNlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.qBdVJS7t_RC-Lq4bxOPsuNx4Yzg1uapiJDQGaWstVuc"
const FRT_PUB_BASE_URL = "https://apis.fretron.com"
const fs = require('fs');
const apiUrl = 'https://apis.fretron.com/shipment-view/places/page/places?filters=%7B%22category.keyword%22%3A%5B%5D%2C%22isOwned%22%3Afalse%7D&search=';

async function getBPartnerFromProdAndCreateInQA(placesJson) {
    try {
        let options = {
            method: 'GET',
            uri: `${FRT_PUB_BASE_URL}/shipment-view/bpartners/partners?size=50&from=0&filters=%7B%22type%22%3A%5B%22vendor%22%5D%2C%22isPortalEnabled%22%3A%5B%5D%2C%22group%22%3A%5B%5D%2C%22city%22%3A%5B%5D%2C%22status%22%3A%5B%5D%2C%22verificationStatus%22%3A%5B%5D%2C%22_customeField%22%3Anull%7D`,
            headers: {
                "Authorization": PROD_TOKEN
            },
            json: true
        }
        let res = await rp(options)
        if (!res.length) {
            console.log("Problem Fetching BPartners");
            return;
        }
        for (let i = 0; i < res.length; i++) {
            let vendorBp = await getBpById(res[i].uuid)
            if (vendorBp && (!vendorBp.places || vendorBp.places == null)) {
                vendorBp.uuid = null
                // let placeName = vendorBp.places[0].name
                // let matchingPlace = placesJson.find(place => place.name === placeName);
                // vendorBp.places[0] = matchingPlace || {}
                vendorBp.customFields = null;
                vendorBp.updates = null;
                if(vendorBp.group.name == "lorryOwner"){
                    vendorBp.group.uuid = "dc04a4d6-2f34-464b-9000-bba5574cc56e"
                }else{
                    vendorBp.group.uuid = "f17a25bb-85f9-43fd-b784-ffe315b9f510"
                }
                vendorBp.group.orgId = "977ed31c-d791-4493-b5aa-0b683247f95d"
                vendorBp.orgId = null;
                await createBPartner(vendorBp);
            }
        }
        console.log("Vendor Type Business Partner Created Successfully");
    } catch (error) {
        throw error
    }
}

async function getBpById(uuid){
    try{
        let options = {
            method: 'GET',
            uri: `${FRT_PUB_BASE_URL}/business-partners/v2/partner/${uuid}`,
            headers: {
                "Authorization": PROD_TOKEN
            },
            json: true
        }
        let res = await rp(options)
        if(res.status == 200 && res.data){
            return res.data
        }
        else{
            return null;
        }
    }catch{
        throw new Error("Some Server Error")
    }
}

async function createBPartner(BPartner) {
    try {
        let options = {
            method: "POST",
            uri: `${FRT_PUB_BASE_URL}/business-partners/v2/partner`,
            headers: {
                "Authorization": QA_TOKEN
            },
            body: BPartner,
            json: true
        }
        let res = await rp(options)
        if (res.status == 200) {
            console.log(`BPartner Created ${res.data.uuid}`)
        } else {
            console.log(`Failed to Create BPartner ${res.data.uuid}`)
        }
    } catch (error) {
        throw error
    }
}

async function fetchPlaces() {
    let allPlaces = [];
    let from = null;

    while (true) {
        const options = {
            uri: from ? `${apiUrl}&from=${encodeURIComponent(JSON.stringify(from))}` : apiUrl,
            headers: {
                "Authorization": QA_TOKEN
            },
            json: true
        };

        try {
            const response = await rp(options);
            const places = Array.isArray(response) ? response : response.places;

            if (!places || places.length === 0) {
                console.log('No more places to fetch.');
                break;
            }
            allPlaces = allPlaces.concat(places);
            const lastPlace = places[places.length - 1];
            from = [lastPlace.name, lastPlace.placeId];

            console.log(`Fetched ${allPlaces.length} places so far...`);

        } catch (error) {
            console.error('Error fetching places:', error.message);
            break;
        }
    }
    fs.writeFileSync('Evereadyplaces.json', JSON.stringify(allPlaces, null, 2));

    return allPlaces;
}

async function main() {
    try {
        // let places = await fetchPlaces()
        const placesJson = JSON.parse(fs.readFileSync('Evereadyplaces.json', 'utf8'));
        if (placesJson.length) {
            await getBPartnerFromProdAndCreateInQA(placesJson)
            console.log("Vendor Type Business Partner Created Successfully")
        }
    } catch (error) {
        console.log(error.message)
    }
}


main()
