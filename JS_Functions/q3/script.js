/**
 * Q 3: Create an object user with an arrow function method and explain 'this' context.
 */

// ----------------------------------------------------
// 1. Demonstration of 'this' being undefined (or referring to the global/module object)
// ----------------------------------------------------
const userWithArrow = {
    name: "John Doe",
    age: 30,

    // Arrow functions do not have their own 'this' binding.
    // They capture the 'this' value from their surrounding lexical scope.
    // In this case (object literal in the global/module scope), 'this' refers to 
    // the global object (window in browser, or 'undefined' in strict mode/Node.js module).
    showName: () => {
        // 'this' here is NOT the 'userWithArrow' object.
        console.log(`[Arrow Function] The 'this' object is:`, this);
        console.log(`[Arrow Function] Name accessed via 'this.name': ${this.name}`);
        // Output: this.name is undefined because the lexical scope's 'this' 
        // (usually the global object) does not have a 'name' property defined by the user object.
    }
};

console.log("--- Arrow Function Method Demo ---");
userWithArrow.showName();

console.log("\nExplanation:");
console.log("When 'showName' is defined as an arrow function within the object literal, it does not bind 'this' to the object itself.");
console.log("Instead, it inherits 'this' from its immediate surrounding scope (the global or module scope), where 'this.name' is not defined.");
console.log("----------------------------------------------------");

// ----------------------------------------------------
// 2. Fix using a normal function
// ----------------------------------------------------
const userWithNormalFunction = {
    name: "Jane Smith",
    age: 25,

    // Normal function (method definition syntax) binds 'this' to the object 
    // upon execution, if called using dot notation (user.showName()).
    getDetails() {
        // 'this' here IS the 'userWithNormalFunction' object.
        console.log(`[Normal Function] Name accessed via 'this.name': ${this.name}`);
        console.log(`[Normal Function] Age: ${this.age}`);
    }
};

console.log("--- Normal Function Method Fix ---");
userWithNormalFunction.getDetails();