/**
 * Q 7: Closure demonstration with makeMultiplier(multiplier).
 */

/**
 * A factory function that creates and returns a multiplication function.
 * @param {number} multiplier - The number to multiply by (the closed-over variable).
 * @returns {Function} - A new function that takes one argument (the number to be multiplied).
 */
function makeMultiplier(multiplier) {
    // The inner function 'multiply' closes over the 'multiplier' variable from its parent scope.
    // 
    return function(number) {
        return number * multiplier; // Accesses 'multiplier' even after makeMultiplier has finished executing.
    };
}

// Create a function 'triple' where 'multiplier' is permanently set to 3
const triple = makeMultiplier(3);
// Create a function 'quintuple' where 'multiplier' is permanently set to 5
const quintuple = makeMultiplier(5);

console.log("--- Closure Demonstration ---");

console.log("triple(5):", triple(5));     // Expected: 15 (5 * 3)
console.log("quintuple(10):", quintuple(10)); // Expected: 50 (10 * 5)
console.log("triple(12):", triple(12));   // Expected: 36 (12 * 3)

console.log("\nExplanation of Closure:");
console.log("1. When 'makeMultiplier(3)' is called, it creates the 'triple' function.");
console.log("2. The 'triple' function 'closes over' or remembers the value of 'multiplier' (which is 3) from its creation environment.");
console.log("3. Even after 'makeMultiplier' has finished running, the 'triple' function still maintains access to the 'multiplier' variable in its scope chain. This is the definition of a closure.");
console.log("4. 'quintuple' is a separate closure, maintaining its own separate binding to 'multiplier' (which is 5).");