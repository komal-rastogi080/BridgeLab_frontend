/**
 * Q1 – The Startup Morning: Async Coffee Maker
 * Implements a three-step asynchronous coffee making process using Promises and .then().
 */

const BOIL_FAILURE_CHANCE = 0.2; // 20% chance of failure

/**
 * Simulates boiling water. Resolves after a random delay or rejects randomly.
 * @returns {Promise<string>} - A Promise that resolves with the step result.
 */
function boilWater() {
    const delay = Math.random() * 1000 + 1000; // 1000ms to 2000ms
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < BOIL_FAILURE_CHANCE) {
                reject("Water boiler short-circuited!");
            } else {
                resolve("Water is boiling ♨️.");
            }
        }, delay);
    });
}

/**
 * Simulates brewing coffee.
 * @returns {Promise<string>}
 */
function brewCoffee() {
    const delay = Math.random() * 1000 + 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Coffee is brewing ☕.");
        }, delay);
    });
}

/**
 * Simulates pouring coffee.
 * @returns {Promise<string>}
 */
function pourCoffee() {
    const delay = Math.random() * 500 + 500; // Faster step
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Coffee poured into the cup 🥛.");
        }, delay);
    });
}

console.log("--- Starting Coffee Automation ---");

// Use Promise chaining (.then()) to simulate the sequential process
boilWater()
    .then(result => {
        console.log(`Step 1: ${result}`);
        return brewCoffee(); // Return the next Promise
    })
    .then(result => {
        console.log(`Step 2: ${result}`);
        return pourCoffee(); // Return the next Promise
    })
    .then(result => {
        console.log(`Step 3: ${result}`);
        console.log("\n✅ Coffee ready for the team!");
    })
    .catch(error => {
        // .catch() handles failure from any step in the chain (e.g., boilWater rejection)
        console.error(`\n❌ Coffee Process Failed: ${error}`);
    });