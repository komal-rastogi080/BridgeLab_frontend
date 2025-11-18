"use strict";

console.log("--- Nested Hoisting ---");

// 1. Predict & Explain
function outer() {
    // Prediction: This prints 'undefined'
    // Why? Because 'var count = 5' is hoisted to the top of 'outer',
    // but the assignment (= 5) happens here.
    // console.log(count); 
    // (Commented out to avoid ReferenceError with let/strict, 
    // but with VAR it would be undefined).
    
    let count = 5; 

    const inner = () => {
        // 2. Memory Context
        // Even though 'count' exists in outer(), if we had 'var count' inside inner,
        // the inner 'count' would be hoisted to the top of 'inner()', shadowing the outer one.
        // This would cause the log to be undefined before assignment.
        
        // 3. Arrow Function Behavior
        // Arrow functions don't change how variables are looked up (lexical scoping),
        // but using 'let' prevents hoisting access (Temporal Dead Zone).
        
        console.log(`Inner Count (from outer scope): ${count}`);
        
        // If we declared 'let count = 10' here, the console.log above 
        // would throw ReferenceError (TDZ).
    };

    inner();
}

outer();

/*
Task 2 Explanation:
If we used 'var':
function test() {
   console.log(x); // undefined (Hoisted)
   var x = 10;
}
*/

/*
Task 4 Call Stack:
1. Global execution context
2. outer() called -> New execution context
3. inner() called -> New execution context
   - inner looks for 'count'. 
   - If defined in inner, uses that.
   - If not, looks up to outer's scope (Closure).
*/