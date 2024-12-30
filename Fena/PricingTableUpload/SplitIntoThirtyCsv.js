const fs = require('fs');
const path = require('path');

// Function to split CSV into smaller files
function splitCSV(inputFilePath, outputDir, rowsPerFile = 30) {
    // Read the input CSV file
    const inputData = fs.readFileSync(inputFilePath, 'utf8');

    // Split file into lines
    const lines = inputData.split('\n');

    // Remove any blank rows (assuming blank rows are truly empty)
    const filteredLines = lines.filter(line => {
        // Remove rows that are blank or contain only commas
        return line.trim() !== '' && line.split(',').some(field => field.trim() !== '');
    });

    if (filteredLines.length === 0) {
        console.log('No valid data found in the file after removing empty rows.');
        return;
    }

    // Extract the header and data rows
    const header = filteredLines[0];
    const dataRows = filteredLines.slice(1);

    // Create the output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Split the data rows into chunks of rowsPerFile
    for (let i = 0; i < dataRows.length; i += rowsPerFile) {
        const chunk = dataRows.slice(i, i + rowsPerFile);
        const outputFilePath = path.join(outputDir, `output_part_${Math.floor(i / rowsPerFile) + 1}.csv`);

        // Combine header and chunk and write to a new file
        const fileContent = [header, ...chunk].join('\n');
        fs.writeFileSync(outputFilePath, fileContent, 'utf8');
        console.log(`Created file: ${outputFilePath}`);
    }

    console.log('CSV splitting complete.');
}

// Usage example
const inputFilePath = './Fena/PricingTableUpload/PricingTableData.csv';  // Path to your input CSV file
const outputDir = './Fena/PricingTableUpload/output_csv_files';  // Directory to store the smaller files
splitCSV(inputFilePath, outputDir);
