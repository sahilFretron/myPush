const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
if (sheet.getName() !== 'PlantWisePricingConfigs') {
    SpreadsheetApp.getUi().alert('Please switch to the PlantWisePricingConfigs sheet');
    throw new Error('Wrong sheet selected');
}
const sheetData = sheet.getDataRange().getValues();

function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('FRETRON').addItem('Mail Data Format', 'mailDataFormat').addToUi()
}

function mailDataFormat() {

  const email = Session.getActiveUser().getEmail();
  Logger.log(email);

  sheet.getRange('L2:L').clear()

  const regionNameWiseNewPricing = {}
  for (let i = 1; i < sheetData.length; i++) {
    let [regionName, fromDate, tillDate, loadTypeName, ibcCount, destState, transExtId, costPerKm, destCity, costPerVehicle, extraPointCharge] = sheetData[i];

    let rate = null;

    let cost = costPerKm ? costPerKm : costPerVehicle;
    let rateType = costPerKm ? "perKm" : "perVehicle";

    if (!regionName) {
      console.log(`${i}: region name missing`)
      continue
    }

    if (!(loadTypeName && ibcCount && destState && cost)) {
      console.log('Missing mandatory fields')
      sheet.getRange('L' + i).setValue('Missing mandatory fields')
      break
    }

    if (isNaN(Number(fromDate)) || isNaN(Number(tillDate))) {
      console.log('Invalid fromDate or tillDate')
      sheet.getRange('L' + i).setValue('Invalid fromDate or tillDate')
      break
    }

    if (isNaN(Number(cost))) {
      console.log(`Invalid cost ${rateType}`)
      sheet.getRange('L' + i).setValue(`Invalid cost ${rateType}`)
      break
    }


    fromDate = new Date(Number(fromDate)).valueOf()
    tillDate = new Date(Number(tillDate)).valueOf()

    let isCityWise = destCity ? true : false;
    let isStateWise = !isCityWise;

    if (!transExtId) {
      rate = costPerKm ? costPerKm : costPerVehicle;
    }

    if (!regionNameWiseNewPricing[regionName]) regionNameWiseNewPricing[regionName] = []
    const obj = {
      "fromDate": fromDate,
      "tillDate": tillDate,
      "rate": rate,
      "vehicleTypeName": loadTypeName,
      "ibcCount": ibcCount,
      "destinationState": destState || null,
      "transporters": {},
      "volumeBasedPricing": null,
      "isCityWise": isCityWise,
      "isStateWise": isStateWise,
      "destinationCity": destCity || null,
      "rateType": rateType,
      "extraPointChargesPerDestination": extraPointCharge || null
    }
    obj.transporters = transExtId ? { [transExtId]: Number(cost) } : {};
    regionNameWiseNewPricing[regionName].push(obj)
  }

  if (Object.keys(regionNameWiseNewPricing)?.length > 1) {
    Browser.msgBox('Please upload for one region at a time')
    return 'Please upload for one region at a time'
  }

  // Join with currently added pricing to avoid duplicate entries
  let regionName = Object.keys(regionNameWiseNewPricing)[0]
  let newData = regionNameWiseNewPricing[regionName]

  let currentPricing = getCurrentPricing(regionName).map(data => ({
    ...data,
    volumeBasedPricing: null,
    isCityWise: false,
    isStateWise: true,
    destinationCity: null,
    rateType: "perKm",
    extraPointChargesPerDestination: null,
    rate: null
  }));

  // let currentPricing = [
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-10KL",
  //               "ibcCount": "8-10",
  //               "destinationState": "MADHYA PRADESH",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 30
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-10KL",
  //               "ibcCount": "8-10",
  //               "destinationState": "MAHARASHTRA",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 30
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-8KL",
  //               "ibcCount": "6-8",
  //               "destinationState": "MADHYA PRADESH",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 28,
  //                   "NBS_ACTIVE ENTERPRISES": 28,
  //                   "NBS_ACTRANS GLOBAL SERVICES PRIVATE LIMITED": 28
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-8KL",
  //               "ibcCount": "6-8",
  //               "destinationState": "MAHARASHTRA",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 28
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-12KL",
  //               "ibcCount": "10-12",
  //               "destinationState": "MADHYA PRADESH",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 32
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-12KL",
  //               "ibcCount": "10-12",
  //               "destinationState": "MAHARASHTRA",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 32
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-14KL",
  //               "ibcCount": "12-14",
  //               "destinationState": "MADHYA PRADESH",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 34
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-14KL",
  //               "ibcCount": "12-14",
  //               "destinationState": "MAHARASHTRA",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 34
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-8KL",
  //               "ibcCount": "6-8",
  //               "destinationState": "GUJARAT",
  //               "transporters": {
  //                   "NBS_ACTIVE ENTERPRISES": 28,
  //                   "NBS_ACTRANS GLOBAL SERVICES PRIVATE LIMITED": 28
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-8KL",
  //               "ibcCount": "6-8",
  //               "destinationState": "RAJASTHAN",
  //               "transporters": {
  //                   "NBS_ACTIVE ENTERPRISES": 28,
  //                   "NBS_ACTRANS GLOBAL SERVICES PRIVATE LIMITED": 28
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-2KL",
  //               "ibcCount": "2-2",
  //               "destinationState": "MADHYA PRADESH",
  //               "transporters": {
  //                   "NBS_ATHARVA TRANSPORT": 20
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-2KL",
  //               "ibcCount": "2-2",
  //               "destinationState": "GUJARAT",
  //               "transporters": {
  //                   "NBS_ATHARVA TRANSPORT": 20
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-2KL",
  //               "ibcCount": "2-2",
  //               "destinationState": "RAJASTHAN",
  //               "transporters": {
  //                   "NBS_ATHARVA TRANSPORT": 20
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-6KL",
  //               "ibcCount": "5-6",
  //               "destinationState": "MAHARASHTRA",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 26
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-3KL",
  //               "ibcCount": "2-3",
  //               "destinationState": "MAHARASHTRA",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 24
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-6KL",
  //               "ibcCount": "5-6",
  //               "destinationState": "MADHYA PRADESH",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 26
  //               }
  //           },
  //           {
  //               "fromDate": 1711909800000,
  //               "tillDate": 1743359400000,
  //               "vehicleTypeName": "IBC-3KL",
  //               "ibcCount": "2-3",
  //               "destinationState": "MADHYA PRADESH",
  //               "transporters": {
  //                   "NBS_VIJAY PACKERS AND LOGISTICS": 24
  //               }
  //           }
  //       ].map(data => ({
  //   ...data,
  //   volumeBasedPricing: null,
  //   isCityWise: false,
  //   isStateWise: true,
  //   destinationCity: null,
  //   rateType: "perKm",
  //   extraPointChargesPerDestination: 0,
  //   rate: null
  // }));

  if (currentPricing?.length) {
    newData = [...currentPricing, ...newData]
  }

  // merge transporters of same condition in single object
  newData.forEach(data => {
    data['key'] = `${data.fromDate}_${data.tillDate}_${data.vehicleTypeName}_${data.ibcCount}_${data[data.isCityWise ? 'destinationCity' : 'destinationState']}`;
  })

  let groupedData = newData?.reduce((acc, data) => {
    if (!acc[data.key]) acc[data.key] = []
    acc[data.key].push(data)
    return acc;
  }, {})

  let updatedData = Object.entries(groupedData)?.map(([key, values]) => {
    return {
      "fromDate": values[0].fromDate,
      "tillDate": values[0].tillDate,
      "rate": values[0].rate,
      "vehicleTypeName": values[0].vehicleTypeName,
      "ibcCount": values[0].ibcCount,
      "destinationState": values[0].destinationState,
      "transporters": values?.reduce((acc, v) => {
        acc = { ...acc, ...v.transporters }
        return acc;
      }, {}),
      "volumeBasedPricing": null,
      "isCityWise": values[0].isCityWise,
      "isStateWise": values[0].isStateWise,
      "destinationCity": values[0].destinationCity,
      "rateType": values[0].rateType,
      "extraPointChargesPerDestination": values[0].extraPointChargesPerDestination
    }
  })

  regionNameWiseNewPricing[regionName] = updatedData
  console.log(`Data Created Successfully`)
  // console.log(JSON.stringify(regionNameWiseNewPricing))
  // return


  const content = [
    'Dear sir,',
    'Steps to add the data to pricing table:',
    'Step1: Copy the below pricing data',
    'Step2: Go to api-maker- Get New Pricing for party order load builder V2',
    'Step3: Find if data already added for that regionName - ',
    'If already exists, then replace the existing data with new data for that specific regionName only,',
    'If not exists then add the key for <regionName> and add the fresh data as per received in email below.',
    'Step4: Click on Update button.\n\n',
    JSON.stringify(regionNameWiseNewPricing, null, 4)
  ].join('\n')

  const mailPayload = {
    "to": [email],
    "cc": [],
    "subject": 'Updated Pricing Data',
    "content": content
  }
  mailPricingData(mailPayload)

}


function getCurrentPricing(regionName) {
  console.log(`Getting Current Pricing for Region: ${regionName}`)
  let url = `https://apis.fretron.com/automate/autoapi/run/8ff50a65-e055-494e-bc38-c517ba63962f?regionName=${regionName}`
  let options = {
    json: true,
    muteHttpExceptions: true,
    method: "GET"
  }

  let res = JSON.parse(UrlFetchApp.fetch(url, options).getContentText())
  if (res.error) {
    throw new Error(res.error)
  }
  if (res?.data?.pricingData?.length) {
    console.log(`Pricing Table Successfully Fetched`)
    return res.data.pricingData
  }
  return []
}


function mailPricingData(payload) {
  console.log(`Mailing ${payload.to}`)
  let url = `https://apis.fretron.com/notifications/ses/email`
  let options = {
    json: true,
    muteHttpExceptions: true,
    headers: { "Content-Type": "application/json" },
    method: 'POST',
    payload: JSON.stringify(payload)
  }

  let res = JSON.parse(UrlFetchApp.fetch(url, options).getContentText())
  // Browser.msgBox(res)
  console.log(`Mail Res: ${JSON.stringify(res)}`)
  return res
}