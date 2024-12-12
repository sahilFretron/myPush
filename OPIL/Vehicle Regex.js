function isAssignVehicleMessage(text) {
    // Use the same regex pattern as in Kotlin, with RegExp constructor
    const regex = /RE\s*([A-Z]{2}\d{1}[A-Z0-9]{1}[A-Z]{1,2}\d{4})\s*DN\s*(\d{10})/i;
    
    // If text is null or undefined, use 'X' as default
    const searchText = text ?? 'X';
    
    // Use regex.exec() to find matches
    const found = regex.exec(searchText);
    
    // If a match is found, return a pair (array) of the captured groups
    if (found) {
        return [found[1], found[2]];
    }
    
    // Return null if no match
    return null;
}

// Test cases
const validExamples = [
    "RE MH01AB1234 DN 1234567890",
    "re mh01ab1234 dn 1234567890",
    "RE   MH01AB1234    DN    1234567890",
    "RE KA42C5678 DN 9876543210",
    "RE TN09XY2345 DN 5555555555", 
    "RE DL3A9012 DN 1111111111",
    "RE DL3AS9012 DN 1111111111"
];

// These will all return a non-null result
validExamples.forEach(example => {
    const result = isAssignVehicleMessage(example);
    console.log(`Input: ${example}, Result: ${result}`);
});