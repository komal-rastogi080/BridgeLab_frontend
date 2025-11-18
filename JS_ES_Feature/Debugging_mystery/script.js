"use strict";

function showMessage() {
    // Task 1 & 2 Explanation:
    // In strict mode, assigning to an undeclared variable throws a ReferenceError.
    // In non-strict mode, it would create a global variable 'greeting' automatically.
    // To fix it, we must declare the variable using let, const, or var.
    
    let greeting = "Welcome"; // FIX: Added 'let'
    console.log(greeting);
}

try {
    showMessage();
} catch (e) {
    console.error("Caught Error:", e.message);
}

// Task 3 Observation:
// If you put a breakpoint on `let greeting...`, the Call Stack will show:
// showMessage
// (anonymous) / Global
// This confirms we are inside the function scope.