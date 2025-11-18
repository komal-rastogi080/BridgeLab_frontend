"use strict";

const operations = ["add", "divide", "power", "root", "subtract", "modulo"];
const num1 = 25;
const num2 = 0;

console.log(`Inputs: ${num1}, ${num2}`);

operations.forEach(op => {
    try {
        let result;
        console.log(`Attempting: ${op}`);

        // 1. Switch Statement
        switch (op) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                // 2. Custom Error: Division by zero
                if (num2 === 0) throw new Error("Cannot divide by zero");
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, 3); // Example fixed power
                break;
            case "root":
                // 2. Custom Error: Negative root
                if (num1 < 0) throw new Error("Cannot calculate square root of negative number");
                result = Math.sqrt(num1);
                break;
            default:
                // 3. Unrecognized operation
                throw new Error(`InvalidOperationError: '${op}' is not implemented`);
        }

        console.log(`>> Result: ${result}`);

    } catch (error) {
        // 4. Formatted Summary
        console.error(`>> ERROR: ${error.message}`);
    }
    console.log("-".repeat(20));
});