function extractDataToGoogleSheets() {
  const url = 'http://apis.fretron.com/shipment-view/proxy/to/elastic';
  const payload = {
    "index": "hubs",
    "query": {
      "size": 2000,
      "_source": ["state", "name", "placeId"],
      "query": {
        "bool": {
          "must": [
            {
              "term": {
                "addedBy.keyword": {
                  "value": "0bbdc122-f963-452f-9af1-28715f5e36b2"
                }
              }
            }
          ]
        }
      },
      "sort": [{ "_id": "desc" }],
      "search_after": ["e1893e8a-4059-4399-85bc-cfbe8fbc50bb"]
    }
  };

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const jsonData = JSON.parse(response.getContentText());

  const hits = jsonData.hits.hits;

  const uniqueHubs = new Set();

  const hubData = hits
    .map(hit => {
      let hubCity = hit._source.name.split("-")[0].toLowerCase();
      let hubState = hit._source.state.toLowerCase(); 
      let sortValue = hit.sort ? hit.sort[0] : ""; 
      return { hubCity, hubState, sortValue };
    })
    .filter(({ hubCity, hubState }) => {
      const uniqueKey = `${hubCity}-${hubState}`;
      
 
      if (!uniqueHubs.has(uniqueKey)) {
        uniqueHubs.add(uniqueKey); 
        return true;
      }
      return false;
    })
    .map(({ hubCity, hubState, sortValue }) => [hubCity, hubState, sortValue]); // Return array format for writing to the sheet

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();


  hubData.forEach(row => {
    sheet.appendRow(row);
  });
}
