/**
 * Q3. Product Discount System
 * Demonstrates prototype methods for reusable functionality (abstraction).
 */

/**
 * Constructor function for a Product.
 * @param {string} name - Product name.
 * @param {number} price - Product price.
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

/**
 * Prototype method to apply a discount percentage and return the new price.
 * This method is shared by all Product instances.
 * @param {number} percent - The discount percentage (0-100).
 * @returns {number} The new discounted price.
 */
Product.prototype.applyDiscount = function(percent) {
    const discountFactor = 1 - (percent / 100);
    return this.price * discountFactor;
};

// Create 3 products
const laptop = new Product("Gaming Laptop", 1500.00);
const mouse = new Product("Wireless Mouse", 50.00);
const monitor = new Product("4K Monitor", 600.00);

// Apply different discounts
const laptopNewPrice = laptop.applyDiscount(15);
const mouseNewPrice = mouse.applyDiscount(10);
const monitorNewPrice = monitor.applyDiscount(20);

console.log("--- Product Discount System ---");

console.log(`Original Price of ${laptop.name}: $${laptop.price.toFixed(2)}`);
console.log(`New Price after 15% discount: $${laptopNewPrice.toFixed(2)}`);

console.log(`\nOriginal Price of ${mouse.name}: $${mouse.price.toFixed(2)}`);
console.log(`New Price after 10% discount: $${mouseNewPrice.toFixed(2)}`);

console.log(`\nOriginal Price of ${monitor.name}: $${monitor.price.toFixed(2)}`);
console.log(`New Price after 20% discount: $${monitorNewPrice.toFixed(2)}`);

console.log("\n--- Abstraction Insight ---");
console.log("Abstraction simplifies operations by defining the 'applyDiscount' behavior once on the Product.prototype.");
console.log("We don't need to rewrite the discount logic for every product object; we just call the method, making the code cleaner and easier to maintain.");