/**
 * Q8 – Order Processing Flow: Async Retry Mechanism
 * Implements a retry system for a randomly failing API call.
 */

const MAX_ATTEMPTS = 3;

/**
 * Simulates submitting an order to an API that fails 50% of the time.
 * @returns {Promise<string>} - Resolves with a success message or rejects with an error.
 */
function submitOrder() {
    return new Promise((resolve, reject) => {
        // 50% chance of failure
        if (Math.random() < 0.5) {
            reject(new Error("API Error: Database connection timeout."));
        } else {
            resolve("Order submitted successfully!");
        }
    });
}

/**
 * Async function that tries to submit an order up to MAX_ATTEMPTS times.
 */
async function processOrder() {
    console.log("--- Starting Order Processing (Max Retries: 3) ---");
    
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Submitting order...`);
            
            // The await keyword pauses the loop until the Promise settles.
            const result = await submitOrder();
            
            // If resolve is hit, the code continues here
            console.log(`Attempt ${attempt}: Success! ${result}`);
            return result; // Exit the function upon success
            
        } catch (error) {
            // If reject is hit, the code comes here
            console.log(`Attempt ${attempt}: Failed. (${error.message})`);
            
            // If it's the final attempt, the loop will exit after logging the failure
            if (attempt === MAX_ATTEMPTS) {
                // Throwing here will be caught by the outer try/catch in the caller
                throw new Error("Order could not be processed after all attempts.");
            }
        }
    }
}

// Execute the retry logic and handle the final failure gracefully
(async () => {
    try {
        await processOrder();
        console.log("\n✅ Final Status: Order complete and confirmed.");
    } catch (finalError) {
        // This catches the 'Order could not be processed' error thrown by processOrder()
        console.error(`\n❌ Final Status: ${finalError.message}`);
    }
})();