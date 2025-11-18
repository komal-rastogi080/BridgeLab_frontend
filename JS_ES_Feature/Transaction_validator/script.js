"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTrans = [];
const invalidTrans = [];

console.log("--- Transaction Log ---");

transactions.forEach((txn, index) => {
    try {
        // 2. Throwing custom errors
        if (txn === null || txn === undefined) {
            throw new Error("Transaction object is null/undefined");
        }
        if (!txn.id || txn.amount === undefined) {
            throw new Error(`ID ${txn.id || '?'} is missing required fields`);
        }
        if (typeof txn.amount !== 'number' || txn.amount < 0) {
            throw new Error(`ID ${txn.id}: Invalid amount (${txn.amount})`);
        }

        // Success
        validTrans.push(txn);
        console.log(`Transaction ID ${txn.id}: Processed successfully.`);

    } catch (err) {
        // 3. Categorize errors
        invalidTrans.push({ index: index, error: err.message });
        console.error(`Transaction Failed: ${err.message}`);
    }
});

// 4. Final Report
console.log("\n--- Final Audit ---");
console.log(`Success Count: ${validTrans.length}`);
console.log(`Failure Count: ${invalidTrans.length}`);

// 5. Breakpoint Tip:
// In VS Code, click to the left of line 15 (if (txn === null...)) 
// to pause and inspect 'txn' in the "Variables" pane.