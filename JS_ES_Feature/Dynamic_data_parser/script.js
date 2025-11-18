"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

console.log("--- Data Parsing Report ---");

for (let i = 0; i < apiData.length; i++) {
    const rawVal = apiData[i];
    
    // 1. Type Conversions
    const asString = String(rawVal);
    const asBool = Boolean(rawVal);
    const asNum = Number(rawVal);

    // 2. Validation Logic
    // We consider it invalid if it evaluates to NaN, or if it was a whitespace string 
    // (since Number(" ") is 0, which can be misleading in data parsing)
    const isInvalidNumber = isNaN(asNum) || (typeof rawVal === "string" && rawVal.trim() === "");

    if (!isInvalidNumber) {
        validNumbers.push(asNum);
        console.log(`[VALID] Raw: ${rawVal} | Num: ${asNum} | Bool: ${asBool}`);
    } else {
        invalidEntries.push(rawVal);
        console.log(`[ERROR] Raw: ${rawVal} | Reason: Unable to convert to valid number`);
    }
}

// 4. Final Report
console.log("\n--- Summary ---");
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Entries:", invalidEntries);