/**
 * Q4 – DevOps Delay: Async Timeout Race
 * Uses Promise.all() and Promise.race() to manage concurrent server responses.
 */

const SERVER_FAILURE_CHANCE = 0.1; // 10% chance any server fails

/**
 * Creates a promise that simulates a server response delay.
 * @param {string} serverName - The name of the server.
 * @param {number} delaySeconds - The response time in seconds.
 * @returns {Promise<string>}
 */
function serverResponse(serverName, delaySeconds) {
    const delayMs = delaySeconds * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random failure
            if (Math.random() < SERVER_FAILURE_CHANCE) {
                reject(new Error(`${serverName} deployment failed due to unexpected error.`));
            } else {
                resolve(`${serverName} responded in ${delaySeconds}s.`);
            }
        }, delayMs);
    });
}

const serverA = serverResponse("Server A", 2); // 2 seconds
const serverB = serverResponse("Server B", 3); // 3 seconds

// --- 1. Promise.all() ---
console.log("--- 1. Promise.all() (Waiting for all deployments) ---");

Promise.all([serverA, serverB])
    .then(results => {
        console.log("✅ Deployment completed for all servers.");
        results.forEach(res => console.log(` - ${res}`));
    })
    .catch(error => {
        // Handle failure from any server in the group
        console.error(`\n❌ Deployment FAILED for one or more servers: ${error.message}`);
    });

// --- 2. Promise.race() ---
// Note: We need fresh promises for race to ensure the race starts correctly,
// as the previous ones might have already settled if the code execution was fast.
const serverARace = serverResponse("Server A", 2);
const serverBRace = serverResponse("Server B", 3);

console.log("\n--- 2. Promise.race() (Tracking fastest response) ---");

Promise.race([serverARace, serverBRace])
    .then(fastestResult => {
        console.log(`🚀 Fastest response: ${fastestResult}`);
    })
    .catch(error => {
        // Promise.race() will reject immediately if the fastest promise rejects.
        console.error(`\n❌ Race failed! The fastest server crashed: ${error.message}`);
    });