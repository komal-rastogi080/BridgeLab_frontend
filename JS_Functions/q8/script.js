/**
 * Q 8: Add a custom prototype method myMap() to all arrays.
 */

// Add the myMap method to the Array prototype
// The 'this' keyword inside this method will refer to the array instance itself.
Array.prototype.myMap = function(callback) {
    // 1. Initialize the new array to store results
    const newArray = [];
    
    // 2. Iterate over the current array instance ('this')
    for (let i = 0; i < this.length; i++) {
        // 3. Ensure the callback is valid and only iterate over elements that exist
        if (typeof callback === 'function' && Object.hasOwn(this, i)) {
            // 4. Call the callback function, passing: 
            //    (current element, index, original array)
            const result = callback(this[i], i, this);
            
            // 5. Push the result into the new array
            newArray.push(result);
        } else if (Object.hasOwn(this, i)) {
            // Handle non-function callback by simply copying the element if needed, 
            // or throwing an error, but here we'll assume standard map behavior.
            newArray.push(undefined); 
        }
    }
    
    // 6. Return the new array
    return newArray;
};

// --- Demonstration ---

const numbers = [1, 2, 3, 4, 5];

// Example 1: Double the numbers
const doubled = numbers.myMap(num => num * 2);
console.log(`Original Array: ${numbers}`);
console.log(`Doubled (using myMap): ${doubled}`); // Expected: [2, 4, 6, 8, 10]

// Example 2: Transform to strings with index
const messages = numbers.myMap((num, index) => `Item ${index}: ${num}`);
console.log(`\nOriginal Array: ${numbers}`);
console.log(`Messages (using myMap): ${messages}`); 
// Expected: ['Item 0: 1', 'Item 1: 2', 'Item 2: 3', 'Item 3: 4', 'Item 4: 5']

// Example 3: Compare with built-in map
const builtInDoubled = numbers.map(num => num * 2);
console.log(`\nDoubled (using built-in map): ${builtInDoubled}`); // Should match myMap result