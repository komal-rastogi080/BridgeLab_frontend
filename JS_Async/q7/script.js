/**
 * Q7 – The Lazy Loader: Promise Combinator Practice
 * Uses Promise.allSettled() to manage multiple async calls and track results.
 */

/** Helper functions that simulate async module loading. */
function loadProfile() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly reject the Profile load (20% chance)
            if (Math.random() < 0.2) {
                 reject("Profile connection failed.");
            } else {
                 resolve("Profile Loaded");
            }
        }, 2000); // 2 seconds
    });
}
function loadPosts() { 
    return new Promise(resolve => setTimeout(() => resolve("Posts Loaded"), 1500)); // 1.5 seconds
}

let shouldMessagesFail = true; // Use a flag to ensure one promise is rejected

function loadMessages() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldMessagesFail) {
                // Ensure this promise fails at least once for the demo
                shouldMessagesFail = false; 
                reject("Messages service offline.");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000); // 1 second
    }); 
}

async function runLazyLoader() {
    console.log("--- Starting Lazy Loader Dashboard ---");
    const startTime = Date.now();

    const promises = [
        loadProfile(),
        loadPosts(),
        loadMessages()
    ];

    // Promise.allSettled waits for ALL promises to settle (either fulfilled or rejected)
    const results = await Promise.allSettled(promises);
    
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;

    console.log("\n✅ All module loads completed (Settled):");
    
    // Print which modules succeeded or failed
    results.forEach((result, index) => {
        let moduleName = "";
        if (index === 0) moduleName = "Profile";
        else if (index === 1) moduleName = "Posts";
        else if (index === 2) moduleName = "Messages";

        if (result.status === 'fulfilled') {
            console.log(`[🟢 SUCCESS] ${moduleName}: ${result.value}`);
        } else {
            console.log(`[🔴 FAILED] ${moduleName}: ${result.reason}`);
        }
    });

    // Calculate total time taken
    console.log(`\n⏳ Total time taken to settle all promises: ${totalTime.toFixed(2)} seconds`);
    // Note: Total time should be ~2 seconds, matching the longest running promise (Profile)
}

runLazyLoader();