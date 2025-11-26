/**
 * Q5 – Frontend Rush: Avoiding Callback Hell
 * Refactors a nested callback chain into a clean async/await sequence.
 */

/**
 * Creates an asynchronous pipeline stage.
 * @param {string} stageName - The name of the stage.
 * @returns {Promise<string>} - A Promise that resolves after 1 second.
 */
function createPipelineStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`[Stage] Completed: ${stageName}`);
            resolve(stageName);
        }, 1000);
    });
}

// --- 1. Implementation using nested callbacks (Callback Hell) ---

function runPipelineCallbackHell() {
    console.log("\n--- 1. Running Pipeline (Callback Hell) ---");
    
    // Stage 1: design
    createPipelineStage("design").then(() => {
        // Stage 2: build
        createPipelineStage("build").then(() => {
            // Stage 3: test
            createPipelineStage("test").then(() => {
                // Stage 4: deploy
                createPipelineStage("deploy").then(() => {
                    // Stage 5: celebrate
                    createPipelineStage("celebrate").then(() => {
                        console.log("✅ Callback Hell Pipeline Finished!");
                    });
                });
            });
        });
    });
}

// --- 2. Implementation using async/await ---

async function runPipelineAsyncAwait() {
    console.log("\n--- 2. Running Pipeline (Async/Await) ---");
    try {
        // The await keyword pauses execution until the Promise resolves, 
        // making the sequential flow look synchronous and linear.
        await createPipelineStage("design");
        await createPipelineStage("build");
        await createPipelineStage("test");
        await createPipelineStage("deploy");
        await createPipelineStage("celebrate");

        console.log("✅ Async/Await Pipeline Finished!");
    } catch (error) {
        console.error("Pipeline failed:", error);
    }
}

runPipelineCallbackHell();

// Wait briefly for the first pipeline to finish logging before starting the second
setTimeout(() => {
    runPipelineAsyncAwait();
}, 6000); // 5 stages * 1000ms + buffer

/**
 * Comment on why async/await improves readability:
 * * The async/await structure dramatically improves readability by allowing asynchronous 
 * code to be written and read like synchronous code. 
 * * 1. Sequential Logic: The code flows top-to-bottom, eliminating the need to nest 
 * calls within .then() blocks. This avoids the pyramid shape of "Callback Hell."
 * 2. Error Handling: Errors from any 'await' can be caught cleanly using standard 
 * JavaScript try/catch blocks, which is simpler than chaining .catch() or passing 
 * error arguments through callbacks.
 * 3. Debugging: It simplifies debugging because the code execution pauses logically 
 * at each 'await' keyword, making the stack trace more intuitive.
 */