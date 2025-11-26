/**
 * Q10 – The Final Delivery: Async Pipeline Debugger
 * Creates an Async Delivery Pipeline using async/await and try/catch.
 */

const FAIL_CHANCE = 0.3; // 30% chance of failure for any step

/**
 * Creates a generic asynchronous pipeline step that resolves or rejects randomly.
 * @param {string} stepName - The name of the step.
 * @param {string} successMessage - The message on success.
 * @returns {Promise<string>}
 */
function deliveryStep(stepName, successMessage) {
    const delay = Math.random() * 1000 + 1000; // 1000ms to 2000ms
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < FAIL_CHANCE) {
                reject(`Failure during ${stepName}`);
            } else {
                resolve(successMessage);
            }
        }, delay);
    });
}

/**
 * Executes the full delivery pipeline sequentially using async/await.
 */
async function runPipeline() {
    console.log("--- Start Pipeline ---");
    
    // The try/catch block ensures that if ANY await expression throws an error 
    // (i.e., the Promise rejects), execution immediately jumps to the catch block.
    try {
        // Step 1: Order taken
        let result = await deliveryStep("takeOrder", "Step 1: Order taken 📝");
        console.log(result);

        // Step 2: Food prepared
        result = await deliveryStep("prepare", "Step 2: Food prepared 🧑‍🍳");
        console.log(result);

        // Step 3: Package ready
        result = await deliveryStep("pack", "Step 3: Package ready 📦");
        console.log(result);

        // Step 4: Out for delivery
        result = await deliveryStep("dispatch", "Step 4: Out for delivery 🚚");
        console.log(result);

        // Step 5: Deliver (A non-failing final step)
        await deliveryStep("deliver", ""); // Final delivery step
        console.log("\n✅ Delivery completed!");

    } catch (error) {
        // This catches the error thrown by any of the rejected Promises (failed steps).
        console.error(`\n❌ Pipeline failed! Reason: ${error}`);
    } finally {
        // This code runs regardless of success or failure
        console.log("--- Pipeline Debugging Complete ---");
    }
}

runPipeline();

/**
 * Comments explaining async behavior and event loop control flow:
 * * 1. async Function: Declaring 'runPipeline' as 'async' enables the use of 'await' 
 * inside it and ensures the function itself returns a Promise implicitly.
 * * 2. await Keyword: 'await' is used before calling the Promise-returning function 
 * 'deliveryStep()'. When 'await' is encountered:
 * - The function execution is PAUSED non-blockingly (it does NOT halt the main thread).
 * - The remainder of the 'runPipeline' function is wrapped in a callback and put into the Microtask Queue 
 * to be executed when the awaited Promise resolves or rejects.
 * * 3. Sequential Flow: The 'await' makes the steps look sequential: 'takeOrder' must 
 * resolve before the code proceeds to 'prepare', and so on. This simplifies the logic 
 * compared to nested .then() calls.
 * * 4. Error Handling: The standard JavaScript `try...catch` block gracefully catches 
 * any rejection (failure) thrown by the awaited Promises, providing clean centralized 
 * error management.
 */