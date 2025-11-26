/**
 * Q 4: Constructor Function Car(brand, model) and prototype method getDetails().
 */

/**
 * Constructor function for a Car object.
 * @param {string} brand - The car's brand.
 * @param {string} model - The car's model.
 */
function Car(brand, model) {
    // Properties specific to each instance (owned properties)
    this.brand = brand;
    this.model = model;
}

// Add a method to the Car prototype. This method is shared by ALL Car instances.
// 


Car.prototype.getDetails = function() {
    console.log(`Car Details: ${this.brand} ${this.model}`);
};

// Create two car objects
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Tesla", "Model 3");

console.log("--- Prototype Method Sharing Demonstration ---");

// Call the shared method on both instances
car1.getDetails(); // Uses the method from Car.prototype
car2.getDetails(); // Uses the same method from Car.prototype

// Verify method sharing (they point to the same function reference)
console.log("\nMethod Sharing Check:");
console.log("car1.getDetails === car2.getDetails:", car1.getDetails === car2.getDetails);
console.log("car1.getDetails === Car.prototype.getDetails:", car1.getDetails === Car.prototype.getDetails);

// Demonstrate that the properties are unique to the instance
console.log("car1 has brand property:", car1.hasOwnProperty('brand')); // true (instance property)
console.log("car1 has getDetails property:", car1.hasOwnProperty('getDetails')); // false (inherited from prototype)