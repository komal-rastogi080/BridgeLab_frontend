// Q10: Citizen Eligibility Validator

// 1. Inputs (Change these to test different scenarios)
const age = 19;
const isCitizen = true;

// Display inputs
document.getElementById("age-val").innerText = age;
document.getElementById("citizen-val").innerText = isCitizen ? "Yes" : "No";

const resultBox = document.getElementById("result");
let message = "";
let className = "";

// 2. Logic: Nested If-Else & Logical Operators
if (isCitizen) {
    if (age >= 18 && age <= 20) {
        // Specific criteria: Citizen + 18-20
        message = "Eligible to vote only.";
        className = "partial";
    } else if (age >= 18) {
        // Citizen + 21+ (assuming remaining adult logic implies full rights)
        message = "Eligible for all services (Vote, Drive, Passport).";
        className = "eligible";
    } else {
        message = "Not eligible yet (Minor).";
        className = "not-eligible";
    }
} else {
    if (age >= 18) {
        message = "Only age criteria met (Non-citizen).";
        className = "neutral";
    } else {
        message = "Not eligible yet.";
        className = "not-eligible";
    }
}

// 3. Output
resultBox.innerText = message;
resultBox.className = "status-box " + className;
console.log(message);