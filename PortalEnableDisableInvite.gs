const onOpen = () => {
  let spreadsheet = SpreadsheetApp.getActive();
  let menuItems = [
    { name: 'Enable/Disable Portal', functionName: 'main' },
  ];
  spreadsheet.addMenu('Fretron', menuItems);
}

const baseURL = "https://apis.fretron.com"

function main() {
  const token = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TokenSheet").getRange(`B1`).getValue();
  if (!token) {
    Browser.msgBox(`Token is missing please add token at TokenSheet:B1`);
    return;
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Partners");

  let allContact = true;
  let primaryContact = true;

  let sheetData = getSheetDataAsJson(sheet);
  let partnerNames = Array.from(new Set(sheetData.map(({ partnerName }) => partnerName)));
  let partnerExtIds = Array.from(new Set(sheetData.map(({ partnerExtId }) => partnerExtId)));
  
  // Fetch partners by name and external ID
  let partnersByName = getPartnersByName(token, partnerNames);
  let partnersByExtId = getPartnersByExtId(token, partnerExtIds);
  
  // Combine and remove duplicates by UUID
  let partners = uniqBy([...partnersByName, ...partnersByExtId], item => item.uuid);

  for (let i = 0; i < sheetData.length; i++) {
    try {
      let { partnerName, partnerExtId, portalToggle, invitationToggle } = sheetData[i];  // Invitation toggle handling
      
      // Adjust invitation settings based on toggle
      if (invitationToggle === "Don't Send Invite") {
        allContact = false;
        primaryContact = false;
      } else if (invitationToggle === "Send Invite to all Contacts") {
        primaryContact = false;
      }

      // Check if partner data is missing
      if (!partnerName && !partnerExtId) {
        throw new Error(`Partner Name and external ID are missing.`);
      }

      // Validate portal toggle value
      if (!["Enable", "Disable"].includes(portalToggle)) {
        throw new Error("Invalid Portal value");
      }

      // Find matching partner by name or external ID
      let matchingPartner = partners.filter(p => {
        if (partnerExtId && partnerName) {
          return p.externalId === partnerExtId && p.name === partnerName;
        }
        if (partnerExtId) {
          return p.externalId === partnerExtId;
        }
        return p.name === partnerName;
      });

      if (matchingPartner.length === 1) {
        let partner = matchingPartner[0];

        // Handle portal enable/disable logic
        if (portalToggle === "Enable") {
          if (partner.isPortalEnabled) {
            sendInvitations(sheet, i, token, partner, allContact, primaryContact);  // Send invitations if portal is enabled
            throw new Error(`Portal Already Enabled.`);
          }

          let res = enablePortal(token, partner.uuid);
          if (res.status === 200) {
            sheet.getRange(`E${i + 2}`).setValue("Success");
            sendInvitations(sheet, i, token, partner, allContact, primaryContact);  // Send invitations after enabling portal
          } else {
            throw new Error(`Error enabling portal - ${res.error}`);
          }
        }

        if (portalToggle === "Disable") {
          if (!partner.isPortalEnabled) throw new Error(`Portal Already Disabled.`);

          let res = disablePortal(token, partner.uuid);
          if (res.status === 200) {
            sheet.getRange(`E${i + 2}`).setValue("Success");
          } else {
            throw new Error(`Error disabling portal - ${res.error}`);
          }
        }

      } else if (matchingPartner.length > 1) {
        throw new Error("Multiple Partners found with name: " + partnerName);
      } else {
        throw new Error(`Partner not found.`);
      }

    } catch (e) {
      console.log(e.message);
      sheet.getRange(`E${i + 2}`).setValue(e.message);
    }
  }
}

// Helper function to send invitations
function sendInvitations(sheet, rowIndex, token, partner, allContact, primaryContact) {
  if (allContact && partner.contacts) {
    for (let contact of partner.contacts) {
      let mobileNumber = contact.mobileNumbers;
      let name = contact.name;
      
      let invite = inviteContact(token, partner.uuid, name, mobileNumber);
      if (invite.status === 200) {
        sheet.getRange(`F${rowIndex + 2}`).setValue("Invitation Sent");
      } else {
        throw new Error(`There was some error sending Invitation`);
      }
      
      if (primaryContact) break;  // Stop if only primary contact should receive an invite
    }
  }
}


function getSheetDataAsJson(sheet) {
  var data = sheet.getDataRange().getDisplayValues();

  var jsonData = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    if (!row[0]) return jsonData
    var rowData = {
      partnerName: row[0],
      partnerExtId: row[1],
      portalToggle: row[2],
      invitationToggle: row[3],                                            //Added by Sahil
      status: row[4],                                                      //Edited by Sahil
      inviteStatus: row[5]                                                 //Added by Sahil
    };

    jsonData.push(rowData);
  }

  return jsonData;
}

function makeHttpRequest(url, token, method = "get", payload = null) {
  const options = {
    method,
    headers: {
      Authorization: token
    }
  };
  if (method === 'post' || method === 'put') {
    if (payload) options.payload = JSON.stringify(payload);
    options.headers['Content-Type'] = 'application/json';
  }
  const response = UrlFetchApp.fetch(url, options);
  const content = response.getContentText();
  return JSON.parse(content);
}

function uniqBy(array, iteratee) {
  const seen = new Set();
  return array.filter(item => {
    const key = iteratee(item);
    if (!seen.has(key)) {
      seen.add(key);
      return true;
    }
    return false;
  });
}

function enablePortal(token, partnerId) {
  let url = `${baseURL}/business-partners/v2/partner/${partnerId}/enable-portal`
  return makeHttpRequest(url, token)
}

function disablePortal(token, partnerId) {
  let url = `${baseURL}/business-partners/v2/partner/${partnerId}/disable-portal`
  return makeHttpRequest(url, token)
}

//----------------------------FUNCTION ADDED BY SAHIL-----------------------------------
function inviteContact(token, partnerId, contactName, mobileNumber) {
  const inviteApiUrl = `${baseURL}/business-partners/v2/partner/${partnerId}/contact/login`;
  const payload = {
    contact: {
      name: contactName,
      emails: [],
      mobileNumbers: mobileNumber
    }
  };

  try {
    let responses = makeHttpRequest(inviteApiUrl, token, "post", payload)
    // Logger.log(`Invite sent to ${contactName} (${mobileNumber}) | Response: ${JSON.stringify(responses)}`);
    return responses
  } catch (error) {
    // Logger.log(`Error inviting ${contactName} | Error: ${error}`);
  }
}
//-----------------------------ADDED BY SAHIL-----------------------------------

function getPartnersByName(token, partnerNames) {
  const allResults = [];
  const chunkSize = 50;

  for (let i = 0; i < partnerNames.length; i += chunkSize) {
    const chunk = partnerNames.slice(i, i + chunkSize);
    const filters = { "name": chunk };
    const allFields = ["uuid", "name", "isPortalEnabled", "externalId", "contacts"];          // Added "contacts" to allFields for INVITATION

    const result = getPartnersByFilters(token, filters, allFields);
    allResults.push(...result);
  }
  return allResults;
}


function getPartnersByExtId(token, partnerExtIds) {
  const allResults = [];
  const chunkSize = 50;

  for (let i = 0; i < partnerExtIds.length; i += chunkSize) {
    const chunk = partnerExtIds.slice(i, i + chunkSize);
    const filters = { "externalId": chunk };
    const allFields = ["uuid", "name", "isPortalEnabled", "externalId", "contacts"];             // Added "contacts" to allFields for INVITATION
    const result = getPartnersByFilters(token, filters, allFields);
    allResults.push(...result);
  }

  return allResults;
}


function getPartnersByFilters(token, filters, allFields) {
  filters = encodeURIComponent(JSON.stringify(filters))
  if (allFields) allFields = encodeURIComponent(JSON.stringify(allFields))
  let url = `${baseURL}/shipment-view/bpartners/partners?filters=${filters}`
  if (allFields) url = url + `&allFields=${allFields}`
  let partners = makeHttpRequest(url, token)
  return partners
}
