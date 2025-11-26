/**
 * Q 1: Write a function greetUser(name, callback) that demonstrates callback flow.
 */

// 1. The callback function (executed after the main logic)
function showEndMessage() {
    console.log("Welcome to the course!");
}

/**
 * Prints a greeting message and then executes the provided callback.
 * @param {string} name - The user's name.
 * @param {Function} callback - The function to be executed after the greeting.
 */
function greetUser(name, callback) {
    // 1. Main function logic
    console.log(`Hello ${name}`);

    // 2. Execution of the callback function
    if (typeof callback === 'function') {
        callback(); 
    }
}

// Demonstrate callback flow
console.log("--- Starting Callback Demonstration ---");
// The showEndMessage function is passed as an argument but executed later by greetUser.
greetUser("Alex", showEndMessage);
console.log("--- Callback Flow Complete ---");