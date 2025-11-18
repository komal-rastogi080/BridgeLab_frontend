"use strict";

const limit = 5; // Task 3: User limit

console.log("--- Pyramid Pattern ---");

// Task 1 & 2: Scope Observation
// If we used 'var i', 'i' would leak into the global scope.
// With 'let', 'i' and 'j' are block-scoped to the loop.

for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Debug Observation:
// If you verify 'i' here using console.log(typeof i), it will be 'undefined'
// because 'let' ensures it doesn't exist outside the loop.
// If we used 'var', 'i' would be 6 here.