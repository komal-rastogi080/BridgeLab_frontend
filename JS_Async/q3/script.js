/**
 * Q3 – Bug Tracker: Callback to Promise Migration
 * Converts a callback-based API function into a Promise-based one using getBugs().
 */

const API_FAILURE_CHANCE = 0.4; // 40% chance of API failure

/**
 * Original Callback-based function (for reference):
 * function fetchBugs(callback) {
 * setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
 * }
 */

/**
 * Converts the bug fetching logic into a Promise-based function.
 * @returns {Promise<Array<string>>} - A Promise that resolves with an array of bugs 
 * or rejects on simulated API failure.
 */
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random API failure
            if (Math.random() < API_FAILURE_CHANCE) {
                reject(new Error("API server is down or timed out."));
            } else {
                const bugs = ["UI glitch", "API timeout", "Login failure", "DB connection lost"];
                resolve(bugs);
            }
        }, 1000);
    });
}

console.log("--- Fetching Bugs from Modern Tracker ---");

getBugs()
    .then(bugsList => {
        console.log("✅ Successfully fetched bugs:");
        // Log all bugs neatly using console.table()
        console.table(bugsList);
    })
    .catch(error => {
        // Handle simulated API failure using .catch()
        console.error("❌ Failed to retrieve bug data.");
        console.error(`Error details: ${error.message}`);
    });