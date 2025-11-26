/**
 * Q 2: Create a function applyOperation(numbers, operation) that takes an array and a callback function.
 */

/**
 * Applies a given operation (callback function) to every number in an array.
 * @param {Array<number>} numbers - The input array of numbers.
 * @param {Function} operation - A callback function that takes a number and returns a modified number.
 * @returns {Array<number>} - A new array containing the results of the operation.
 */
function applyOperation(numbers, operation) {
    const results = [];
    for (const num of numbers) {
        // Execute the callback function (operation) on each number
        results.push(operation(num));
    }
    return results;
}

// --- Callback Functions ---

/**
 * Doubles a given number.
 * @param {number} num - The input number.
 * @returns {number} - The doubled number.
 */
function doubleNumber(num) {
    return num * 2;
}

/**
 * Squares a given number.
 * @param {number} num - The input number.
 * @returns {number} - The squared number.
 */
function squareNumber(num) {
    return num * num;
}

const initialArray = [1, 2, 3, 4];

// 1. Double each number
const doubledArray = applyOperation(initialArray, doubleNumber);
console.log(`Initial Array: ${initialArray}`);
console.log(`Doubled Array: ${doubledArray}`); // Expected: [2, 4, 6, 8]

// 2. Square each number
const squaredArray = applyOperation(initialArray, squareNumber);
console.log(`\nInitial Array: ${initialArray}`);
console.log(`Squared Array: ${squaredArray}`); // Expected: [1, 4, 9, 16]