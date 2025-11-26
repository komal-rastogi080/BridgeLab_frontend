/**
 * Q9 – Debugging the Event Loop
 * Predicts and explains the execution order of synchronous, macrotask (setTimeout), and microtask (Promise).
 */

// --- Prediction ---
/**
 * Predicted Output Order (in comments before running):
 * * 1. Script start (Synchronous)
 * 2. Script end (Synchronous)
 * 3. Promise callback (Microtask - runs after current synchronous code)
 * 4. Timeout callback (Macrotask - runs in next event loop cycle)
 */

console.log("Script start"); // 1. Synchronous Code

// Macrotask: Scheduled for the next full loop cycle (after microtasks are emptied)
setTimeout(() => {
    console.log("Timeout callback");
}, 0); 

// Microtask: Scheduled to run immediately after the current synchronous code stack is empty
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end"); // 2. Synchronous Code

// --- Explanation ---
/**
 * Actual Output:
 * Script start
 * Script end
 * Promise callback
 * Timeout callback
 * * Explanation:
 * * 1. Execution of Synchronous Code: The code runs sequentially, placing tasks in queues.
 * - `console.log("Script start")` runs immediately.
 * - `setTimeout` places its callback in the Macrotask Queue.
 * - `Promise.resolve().then()` places its callback in the Microtask Queue.
 * - `console.log("Script end")` runs immediately.
 * * 2. Microtask Priority: After the main script finishes execution, the Event Loop checks the Microtask Queue. 
 * - The Microtask Queue is completely emptied before proceeding to Macrotasks.
 * - `console.log("Promise callback")` executes.
 * * 3. Macrotask Execution: Once the Microtask Queue is clear, the Event Loop checks the Macrotask Queue.
 * - `console.log("Timeout callback")` executes.
 */