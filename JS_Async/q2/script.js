/**
 * Q2 – Task Scheduler: Micro vs Macro Challenge
 * Demonstrates the execution order of synchronous, microtask, and macrotask.
 */

console.log("Start"); // 1. Synchronous Code

// 2. Macrotask: Scheduled to run in a future cycle of the event loop (after microtasks)
setTimeout(() => {
    console.log("setTimeout callback (Macrotask)");
}, 0); 

// 3. Microtask: Scheduled to run immediately after the current synchronous code finishes
// but BEFORE the next macrotask (like setTimeout or UI rendering).
Promise.resolve().then(() => {
    console.log("Promise.then callback (Microtask)");
});

console.log("End"); // 4. Synchronous Code

/**
 * Explanation of Task Order (Expected Output: Start -> End -> Promise -> setTimeout)
 * * 1. Synchronous Execution: The main script runs to completion.
 * - Logs "Start".
 * - Schedules the setTimeout callback (Macrotask Queue).
 * - Schedules the Promise.then callback (Microtask Queue).
 * - Logs "End".
 * * 2. Microtask Execution: The synchronous code finishes. The Event Loop checks the
 * Microtask Queue and executes ALL pending tasks before proceeding to the Macrotask Queue.
 * - Executes the Promise.then callback.
 * * 3. Macrotask Execution: The Microtask Queue is now empty. The Event Loop takes the
 * first task from the Macrotask Queue.
 * - Executes the setTimeout callback.
 * * CONCLUSION: Microtasks (Promises, queueMicrotask, MutationObserver) have higher 
 * priority and are emptied entirely between each execution of a Macrotask (setTimeout, 
 * setInterval, I/O, UI rendering).
 */