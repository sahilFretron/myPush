

// if shortage < 60 kg -> No freight or material amount will be be deducted
// if shortage > 60 kg -> freight will be deducted as per shortage qty + shortage material amount will also be deducted

// const FRT_PUB_BASE_URL = `${FRT_PUB_BASE_URL}`

const BASE_URL = `${FRT_PUB_BASE_URL}`;

const token ="Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTgxMTc4MzEsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiODIzOTQ3YTMtMDJjMC00ZTY1LThmNGUtMjFkYTM3MGVhNmNkIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.Aa7JhlJvxEWWuzjOF1fPObRg3h3d3SwCkZql8_9BinM"

// Freight Cost (ChargeSetting)
let freightCharge = {
  amount: null,
  rateValueRuleId: null,
  isCalculated: true,
  baseValueRuleId: null,
  rateUnit: "perMT",
  amountValueRuleId: null,
  vendorFeedingType: "Broker",
  baseValueFeedingType: "User",
  distributionBasis: "Weight",
  amountFeedingType: "User",
  rate: null,
  "chargeId": "daa95208-f24d-409f-90cc-edb15df4475f",
//   chargeId: "9a60737a-1e7c-42ef-8746-fdd7c1686cd7",
  vendor: null,
  applicability: "Shipment",
  chargeName: "Freight",
  rateFeedingType: "User",
  base: null,
  vendorRuleId: null,
};

// Mateial Loss Cost (ChargeSetting)
let cnCharge = {
  "amount": null,
  "rateValueRuleId": null,
  "isCalculated": true,
  "baseValueRuleId": null,
  "rateUnit": "perMT",
  "amountValueRuleId": null,
  "vendorFeedingType": "ForwardingAgent",
  "baseValueFeedingType": "User",
  "distributionBasis": null,
  "amountFeedingType": "User",
  "rate": null,
  "chargeId": "255d3241-bb17-4f59-bdfb-49e27f50e6e3",
  "vendor": null,
  "applicability": "Consignment",
  "chargeName": "Material Deduction",
  "rateFeedingType": "User",
  "base": null,
  "vendorRuleId": null
};
const INCOME_COA =  {
  "name": "Sales",
  "accountGroup": "Income",
  "type": "Income",
  "accountPath": [
      "Income",
      "Income",
      "sales"
  ],
  "uuid": "sales"
}  
async function getCostOverridableSettings(){
    let url =  `${BASE_URL}/shipment-cost/v1/settings/override/profile/grouped`
    let res = await rp({
    uri: url,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    json: true,
  });
  if (res.data) {
    return res.data
  }
  else {
    return null
  }
}
async function getCnsForSh(shId) {
  let url = `${BASE_URL}/shipment/v1/shipment/${shId}/consignments`;
  let res = await rp({
    uri: url,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    json: true,
  });
  if (res.data) {
    return res.data
  }
  else {
    return []
  }
}

async function getShById(shId) {
  let url = `${BASE_URL}/shipment/v1/admin/shipment/${shId}`;
  let res = await rp({
    uri: url,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    json: true,
  });
  if (res.data) {
    return res.data
  }
  else {
    return null
  }
}

async function task(sh) {
  try {
    let overrideSetting = await getCostOverridableSettings()
    if(overrideSetting){
        cnCharge = overrideSetting["OrgDefault"][0]?.setting[cnCharge['chargeId']]?.configs ?? cnCharge
        freightCharge = overrideSetting["OrgDefault"][0]?.setting[freightCharge['chargeId']]?.configs ?? freightCharge
    }  
    let minimumWeight = Number(sh.customFields.find((cf) => cf.fieldKey == "Minimum Guarantee Weight Approval")?.value ?? 0.0)
    let weightFromSAP  = Number(sh.customFields.find((cf) => cf.fieldKey == "SAP Total Weight")?.value ?? 0.0)
    let mgtViaVehicle  = Number(sh.customFields.find((cf) => cf.fieldKey == "Applicable MGT Via Vehicle capacity")?.value ?? 0.0)

    if(!weightFromSAP){
      weightFromSAP = 0
    }
    let shCostList = await getShCostListForSh(sh.uuid);
    let freightCostObj = shCostList.find(_ => _.charge.uuid === freightCharge.chargeId)
    let materialLossCostObj = shCostList.find(_ => _.charge.uuid === cnCharge.chargeId)
    let cnList = await getCnsForSh(sh.uuid)

    let loadedWeight = cnList.reduce((pv, cv) => {
      pv = pv + (cv?.loadInfo?.standardMeasurement?.weight?.netQuantity ?? 0.0)
      return pv
    }, 0.0)

    console.log(`total wt as per CN ${loadedWeight} , minGrtWt ${minimumWeight} wtFromSAP ${weightFromSAP} mgtVia Vehicle ${mgtViaVehicle}`)
    if(mgtViaVehicle && mgtViaVehicle>weightFromSAP){
      weightFromSAP = mgtViaVehicle
    }
    let shouldBeWeight = Math.max(Math.max(loadedWeight,weightFromSAP), minimumWeight)
    await ensureFreightCostBaseValue(shouldBeWeight, freightCostObj, sh.uuid)

    let totalShortage = 0.0
    for (let i = 0; i < cnList.length; i++) {
      let consignmentInfo = cnList[i]
      let totalRecieveQty = consignmentInfo.loadInfo?.standardMeasurement?.weight?.netQuantity ?? 0.0
      let customerRecieveQty = consignmentInfo.customFields.find(e => e.fieldKey === 'CustomerRecieveQuantity')?.value
      if(!customerRecieveQty){
          customerRecieveQty = null
      }
      let recieveQty = Number(customerRecieveQty ?? totalRecieveQty);
      let shortageQty = totalRecieveQty - recieveQty
      totalShortage = totalShortage + shortageQty
    }
    let exactShortage = totalShortage * 1000
    let totalShortageInKg = Number((exactShortage).toFixed(3))
    console.log(`total shortage on ${cnList.length} cns : ${exactShortage} KG , fixed to ${totalShortageInKg} KG`)

    if (totalShortageInKg > 60) {
      
      //Ensure Material Loss Cost
      await ensureMateialLossShipmentCost(cnList, materialLossCostObj, sh.uuid,sh)
      
      // Removed below logic - as discussed with daman- no need to reduce freight based on shortage 

     //Reduce total freightCost
    //   let updatedBaseValue = shouldBeWeight - totalShortage
    //   await ensureFreightCostBaseValue(updatedBaseValue, freightCostObj, sh.uuid)

    }
    else {
      if(materialLossCostObj){
        await deleteShipmentCostByChargeId(materialLossCostObj?.uuid, sh.uuid);
      }
    }
  } catch (e) {
    console.log(`error while fetching consignments: ${e}`);
  }
}

async function ensureFreightCostBaseValue(baseValue, cost, shId) {
  if (cost) {
    console.log(`updating base value to ${baseValue}`)
    cost.charge.base = baseValue
    cost.charge.amount = Number(cost.charge.base) * Number(cost.charge.rate)
    cost.amount = cost.charge.amount;
    await updateShipmentFreightCost(cost, shId, freightCharge);
  }
  else {
    console.log(`Freight cost not found in shipment`)
  }
}

async function getShCostListForSh(shId) {
  let path = `${BASE_URL}/shipment-cost/v1/costs?shipmentId=${shId}`;
  try {
    let res = await rp({
      method: "GET",
      uri: path,
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (res.status === 200) {
      if (!res.data.length) {
        return {
          data: null,
          status: 400,
          error: "Shipment Cost not added yet.",
        };
      }
      let costList = res.data;
      return costList;
    }
  } catch (e) {
    console.log(`Error while getting shipment cost list : ${e.message}`);
    return [];
  }
}

async function updateShipmentFreightCost(costObj, shId, charge) {
  let payload = {
    chargeSetting: charge,
    shipmentCost: costObj,
  };
  let path = `${BASE_URL}/shipment-cost/v1/cost?shipmentId=${shId}`;
  try {
    let res = await rp({
      method: "POST",
      uri: path,
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: payload,
    });
    console.log(`update freightCost charge ${payload.chargeSetting.chargeId}res ${res.status} :  error ${res.error}`)
    if (res.status === 200) {
      return res;
    } else {
      return null;
    }
  } catch (e) {
    console.log(`Error while updating shipment cost : ${e.message}`);
    return null;
  }
}

async function deleteShipmentCostByChargeId(chargeId, shId) {
  let path = `${BASE_URL}/shipment-cost/v1/cost/${chargeId}?shipmentId=${shId}`;
  try {
    let res = await rp({
      method: "DELETE",
      uri: path,
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.log(`Error while deleting shipment cost : ${e.message}`);
    return null;
  }
}

async function addOrUpdateShortageMaterialCost(shCharge, cn, shortageQty,sh) {
  let shId = cn.activeShipment ? cn.activeShipment : cn.associatedShipments && cn.associatedShipments.length ? cn.associatedShipments[0] : '';
  try {
    if (!shCharge) {
      shCharge = await autoFillCharge(shId, cnCharge)
    }
    shCharge.lineItems.forEach(ele => {
      if (ele.consignmentId != cn.uuid) {
        if (!ele.charge.base) ele.charge.base = 0;
        if (!ele.charge.rate) ele.charge.rate = 0;
      }
      else {
        ele.charge.chartsOfAccount= INCOME_COA
        ele.charge.base = shortageQty
        let materialRate = Number(cn.customFields.find(ele => ele.fieldKey === 'Unit Material Rate')?.value ?? 0)
        let gstAdded = 0.0
        // (materialRate*18)/100
        ele.charge.rate = materialRate + gstAdded
        ele.charge.amount = ele.charge.base * ele.charge.rate;
        ele.charge.amount = ele.charge.amount;
      }
    })
    shCharge.charge.chartsOfAccount = INCOME_COA
    if(shCharge.vendor?.uuid == null){
        console.log(`Vendor not found as per charge setting - try to set from shipment`)
        shCharge.vendor = sh.fleetInfo?.broker ?? sh.fleetInfo?.forwardingAgent ?? sh.fleetInfo?.fleetOwner
        console.log(`found vendor from sh ${shCharge?.vendor?.name}`)
    }
    return shCharge
  } catch (e) {
    console.log(`Error while getting consignment cost : ${e.message}`);
    return shCharge;
  }
}

async function ensureMateialLossShipmentCost(cns, cost, shId,sh) {
  try {
    let cfs = [];
    let materialCostObj = cost
    if(materialCostObj){
        console.log(`Existing Material Cost with vendor ${materialCostObj?.vendor?.name}`)
    }
    else{
        console.log(`Create Material Cost case `)
    }
    for (let i = 0; i < cns.length; i++) {
      let consignmentInfo = cns[i]
      let totalRecieveQty = consignmentInfo.loadInfo?.standardMeasurement?.weight?.netQuantity ?? 0.0
      let customerRecieveQty = consignmentInfo.customFields.find(e => e.fieldKey === 'CustomerRecieveQuantity')?.value;
      let recieveQty = Number(customerRecieveQty ?? totalRecieveQty);
      let shortageQty = totalRecieveQty - recieveQty
      if (shortageQty > 0.0) {
        materialCostObj = await addOrUpdateShortageMaterialCost(materialCostObj, consignmentInfo, shortageQty,sh)
      }
      let cf = {
        "fieldKey": `SHORTAGE_${consignmentInfo.consignmentNo}`,
        "multiple": false,
        "description": null,
        "remark": null,
        "uuid": null,
        "required": false,
        "accessType": null,
        "input": "number",
        "unit": null,
        "valueType": "string",
        "options": null,
        "fieldType": "weight",
        "value": shortageQty,
        "isRemark": false
      }
      cfs.push(cf)
    }
    console.log(`adding material cost charge for vendor ${materialCostObj.vendor?.name}`)
    await updateShipmentFreightCost(materialCostObj, shId, cnCharge);
    await addCfOnSh(shId, cfs);
  } catch (e) {
    console.log(`Error while recalculating amount: ${e}`);
    return;
  }
}

async function addCfOnSh(shId, cfs) {
  let url = `${BASE_URL}/shipment/v1/shipment/bulk/sync`;
  let payload = {
    shipmentId: shId,
    updates: [
      {
        keyToUpdate: "customfields",
        updatedValue: cfs,
      },
    ],
  };
  try {
    let res = await rp({
      method: "POST",
      uri: url,
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: payload,
    });
    if (res.status === 200) {
      console.log(`Custom Field Updated Successfully.`);
      return res;
    } else {
      console.log(res.error);
      return null;
    }
  } catch (e) {
    console.log(`Error while updating Custom Field : ${e.message}`);
    return null;
  }
}

async function autoFillCharge(shId, chargeSetting) {
  try {
    console.log(`Auto fill charge call for ${chargeSetting.chargeId} `)  
    let url = `${FRT_PUB_BASE_URL}/shipment-cost/v1/auto-fill/cost-detail?shipmentId=${shId}`;
    let res = await rp({
      'uri': url,
      'method': 'POST',
      'headers': {
        "Content-Type": "application/json",
        "Authorization": token
      },
      'body': chargeSetting,
      'json': true
    })
    if (res.status == 200) {
      console.log(`Found autofill charge vendor : ${res.data?.vendor?.uuid}`)  
      return res.data;
    } else {
      console.log(`error in autofill charge: ${JSON.stringify(res)}`)
    }
  } catch (e) {
    console.log(`error in autofill charge ` + e)
  }
  return null;
}

async function main(shId) {
  try {
    let shipmentInfo = await getShById(shId);
    console.log(`execute for sh ${shipmentInfo.shipmentNumber} : ${shId}`)
    let res = await task(shipmentInfo);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
}


let shUuid  =  $event.query.shipmentId
console.log(`Hit ${shUuid}`)
await main(shUuid)

return "DONE"

// main("39a42110-7ddd-4648-8bf1-36f4bbe1ea9c").then(_=>{
//     console.log("DONE")
// })
// .catch(e=>{
//     console.log('error')
// })
