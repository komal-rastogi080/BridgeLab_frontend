"use strict";

console.log("--- Strict Mode Constraints ---");

// 3. Explanation:
// Strict mode prevents ambiguous or dangerous code.
// - Duplicate parameters (a, a) confuse which value maps to the argument.
// - 'delete total' attempts to delete a variable name, which is only allowed for object properties.

// 4. Correct ES6 Version
function demoFixed(a, b) {
    let total = 10;
    // delete total; // Still a syntax error in strict mode to delete a plain variable
    
    // In JS, you shouldn't delete variables. You generally delete object properties.
    // If you want to clear memory, set it to null (though GC handles it).
    total = null; 
    
    console.log(`Demo Fixed Params: ${a}, ${b}. Total is reset.`);
}

try {
    demoFixed(5, 10);
} catch (e) {
    console.error(e);
}

// Task 2: The "Bad" Code (Commented out to prevent script crash)
/* function demoBad(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
    total = 10; // ReferenceError: total is not defined
    delete total; // SyntaxError: Delete of an unqualified identifier in strict mode.
}
*/