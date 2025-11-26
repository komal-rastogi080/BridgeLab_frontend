/**
 * Q 1: E-Commerce Product Manager (Classes + Objects)
 */

class Product {
    /**
     * Constructs a new Product instance.
     * @param {number} id - Unique product identifier.
     * @param {string} name - Name of the product.
     * @param {number} price - Price of the product.
     * @param {string} category - Category of the product.
     */
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    /**
     * Applies a percentage discount to the product price.
     * @param {number} percentage - The discount percentage (e.g., 10 for 10%).
     */
    applyDiscount(percentage) {
        const discountFactor = 1 - (percentage / 100);
        this.price = parseFloat((this.price * discountFactor).toFixed(2));
        console.log(`Discount applied. New price for ${this.name}: $${this.price}`);
    }

    /**
     * Displays product details in a formatted string.
     * @returns {string} - Formatted product detail string.
     */
    displayDetails() {
        return `Product ID: ${this.id} | Name: ${this.name} | Price: $${this.price} | Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(101, "4K Monitor", 1250.00, "Electronics"),
    new Product(102, "Mechanical Keyboard", 120.50, "Peripherals"),
    new Product(103, "High-End CPU", 999.99, "Components"),
    new Product(104, "Gaming Laptop", 1850.75, "Electronics"),
    new Product(105, "Mousepad", 25.00, "Peripherals"),
];

// Display initial details and apply a discount to one product
console.log("--- Initial Product Details ---");
products.forEach(p => console.log(p.displayDetails()));

// Apply a 10% discount to the Gaming Laptop
console.log("\n--- Applying Discount ---");
products[3].applyDiscount(10);
console.log(products[3].displayDetails());

// Display products with price > 1000 using filter
console.log("\n--- Products with Price > $1000 ---");
const highValueProducts = products.filter(product => product.price > 1000);

highValueProducts.forEach(product => {
    console.log(product.displayDetails());
});