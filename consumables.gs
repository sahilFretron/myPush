function mapConsumablesData() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheets = {
        summary: ss.getSheets()[0],
        daily: ss.getSheets()[1],
        purchase: ss.getSheets()[2],
        lost: ss.getSheets()[3]
    };

    // Get all data from sheets
    const data = {
        summary: sheets.summary.getDataRange().getValues(),
        daily: sheets.daily.getDataRange().getValues(),
        purchase: sheets.purchase.getDataRange().getValues(),
        lost: sheets.lost.getDataRange().getValues()
    };

    // Process each type of data
    const dailyMap = createDailyMap(data.daily);
    const purchaseMap = createPurchaseMap(data.purchase);
    const terminalColumns = mapTerminalColumns(data.summary, dailyMap.terminals);

    // Update summary sheet
    updateSummarySheet(sheets.summary, data.summary, dailyMap, purchaseMap, data.lost, terminalColumns);
}

function createDailyMap(dailyData) {
    const dailyMap = {};
    const terminals = new Set();

    // Skip header row
    for (let i = 1; i < dailyData.length; i++) {
        const row = dailyData[i];
        const itemName = row[1].toString().trim().toUpperCase();
        const terminal = row[2].toString().trim().toUpperCase();
        const qty = row[3];

        terminals.add(terminal);

        if (!dailyMap[itemName]) {
            dailyMap[itemName] = {};
        }
        dailyMap[itemName][terminal] = qty;
    }

    return { dailyMap, terminals };
}

function createPurchaseMap(purchaseData) {
    const purchaseMap = {};

    // Skip header row
    for (let i = 1; i < purchaseData.length; i++) {
        const row = purchaseData[i];
        const itemName = row[1].toString().trim().toUpperCase();
        const qty = row[3];

        if (!purchaseMap[itemName]) {
            purchaseMap[itemName] = {};
        }
        purchaseMap[itemName] = qty;
    }

    return purchaseMap;
}

function mapTerminalColumns(summaryData, terminals) {
    const terminalColumns = {};
    const headerRow = summaryData[1];

    // Map terminals from column D (index 3) to AB (index 27)
    for (let i = 3; i <= 27; i++) {
        const headerTerminal = headerRow[i].toString().trim().toUpperCase();
        if (headerTerminal && terminals.has(headerTerminal)) {
            terminalColumns[headerTerminal] = i + 1;
        }
    }

    return terminalColumns;
}

function processLostItems(itemName, lostData, currentValues) {
    // Clone the current values to avoid direct mutation
    const values = { ...currentValues };

    for (let j = 1; j < lostData.length; j++) {
        const lostRow = lostData[j];
        const lostItemName = lostRow[1].toString().trim().toUpperCase();
        const lostQty = lostRow[3] || 0;
        const reason = lostRow[4].toString().trim().toUpperCase();

        if (lostItemName === itemName) {
            switch (reason) {
                case 'PENDING':
                    values.transit -= lostQty;
                    values.lost += lostQty;
                    break;
                case 'LOST':
                    values.lost -= lostQty;
                    values.final -= lostQty;
                    break;
                case 'FOUND':
                    values.transit += lostQty;
                    values.lost -= lostQty;
                    break;
            }
        }
    }

    return values;
}

function processPurchases(itemName, purchaseMap, currentValues) {
    const values = { ...currentValues };
    
    if (purchaseMap[itemName]) {
        const purchaseQty = purchaseMap[itemName];
        values.transit += purchaseQty;
        values.final += purchaseQty;
    }

    return values;
}

function processTerminalUpdates(sheet, rowIndex, itemName, dailyMap, terminalColumns, currentValues) {
    const values = { ...currentValues };

    for (const terminal in terminalColumns) {
        if (dailyMap[itemName] && dailyMap[itemName][terminal] !== undefined) {
            const cellToUpdate = sheet.getRange(rowIndex, terminalColumns[terminal]);
            const currentValue = cellToUpdate.getValue() || 0;
            const newValue = dailyMap[itemName][terminal];
            const difference = newValue - currentValue;
            
            // Apply value and formatting
            if (newValue === 0) {
                cellToUpdate.setValue(newValue)
                           .setFontColor('red')
                           .setBackground('#E8E8E8');
            } else {
                cellToUpdate.setValue(newValue)
                           .setFontColor('black')
                           .setBackground('white');
            }
            
            if (difference > 0) {
                values.transit -= difference;
                values.received += difference;
            } else if (difference < 0) {
                values.transit += Math.abs(difference);
                values.sent += Math.abs(difference);
            }
        }
    }

    return values;
}

function updateSummarySheet(summarySheet, summaryData, dailyMap, purchaseMap, lostData, terminalColumns) {
    // Column indices
    const columns = {
        transit: 29,    // AC
        lost: 30,       // AD
        sent: 31,       // AE
        received: 32,   // AF
        closing: 33,    // AG
        final: 34       // AH
    };

    // Update each row in summary sheet
    for (let i = 2; i < summaryData.length; i++) {
        const rowIndex = i + 1;
        const itemName = summaryData[i][1].toString().trim().toUpperCase();
        
        // Get current values
        let values = {
            transit: summarySheet.getRange(rowIndex, columns.transit).getValue() || 0,
            sent: summarySheet.getRange(rowIndex, columns.sent).getValue() || 0,
            received: summarySheet.getRange(rowIndex, columns.received).getValue() || 0,
            lost: summarySheet.getRange(rowIndex, columns.lost).getValue() || 0,
            final: summarySheet.getRange(rowIndex, columns.final).getValue() || 0
        };

        // Process each type of update      
        values = processTerminalUpdates(summarySheet, rowIndex, itemName, dailyMap.dailyMap, terminalColumns, values);
        values = processPurchases(itemName, purchaseMap, values);
        values = processLostItems(itemName, lostData, values);  

        // Update all cells with formatting
        const updateCellWithFormat = (range, value) => {
            range.setValue(value);
            if (value === 0) {
                range.setFontColor('red').setBackground('#E8E8E8');
            } else {
                range.setFontColor('black').setBackground('white');
            }
        };

        updateCellWithFormat(summarySheet.getRange(rowIndex, columns.transit), values.transit);
        updateCellWithFormat(summarySheet.getRange(rowIndex, columns.sent), values.sent);
        updateCellWithFormat(summarySheet.getRange(rowIndex, columns.received), values.received);
        updateCellWithFormat(summarySheet.getRange(rowIndex, columns.lost), values.lost);
        updateCellWithFormat(summarySheet.getRange(rowIndex, columns.final), values.final);

        // Calculate closing quantity (sum of D through AD)
        let closingQty = 0;
        // Sum terminals (D through AB)
        for (let col = 4; col <= 30; col++) {  // D=4 to AD=30
            const value = summarySheet.getRange(rowIndex, col).getValue();
            const cellToUpdate = summarySheet.getRange(rowIndex, col);
            
            // Apply formatting to terminal cells
            if (value === 0) {
                cellToUpdate.setFontColor('red').setBackground('#E8E8E8');
            } else {
                cellToUpdate.setFontColor('black').setBackground('white');
            }
            
            closingQty += value || 0;
        }

        // Update closing quantity with formatting
        updateCellWithFormat(summarySheet.getRange(rowIndex, columns.closing), closingQty);
    }
}

function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Update')
        .addItem('Summary', 'mapConsumablesData')
        .addToUi();
}