/**
 * Q6. E-Commerce Inventory System
 * Demonstrates filter(), sort(), and reduce() for inventory analysis.
 */

const products = [
    { id: 1, name: "T-Shirt", category: "Apparel", price: 25.00, stock: 15 },
    { id: 2, name: "Jeans", category: "Apparel", price: 75.00, stock: 5 },
    { id: 3, name: "Webcam", category: "Electronics", price: 120.00, stock: 40 },
    { id: 4, name: "Monitor", category: "Electronics", price: 300.00, stock: 8 },
    { id: 5, name: "Coffee Mug", category: "Home", price: 15.00, stock: 3 },
    { id: 6, name: "Desk Lamp", category: "Home", price: 45.00, stock: 18 }
];

// 1. getLowStockProducts() → using filter()
function getLowStockProducts(inventory, threshold = 10) {
    return inventory.filter(product => product.stock < threshold);
}

// 2. sortProductsByPrice() → using sort()
function sortProductsByPrice(inventory, direction = 'asc') {
    // Create a copy to avoid modifying the original array
    return [...inventory].sort((a, b) => {
        if (direction === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}

// 3. calculateTotalInventoryValue() → using reduce()
function calculateTotalInventoryValue(inventory) {
    return inventory.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. groupByCategory() → using reduce() + object grouping
function groupByCategory(inventory) {
    return inventory.reduce((groups, product) => {
        const category = product.category;
        // Initialize the array for the category if it doesn't exist
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {}); // Start with an empty object as the initial accumulator
}

// --- Test Execution ---
console.log("--- E-Commerce Inventory Analysis ---");

// 1. Low Stock
const lowStock = getLowStockProducts(products);
console.log("\n1. Low Stock Products (Stock < 10):");
console.table(lowStock, ["name", "stock"]);

// 2. Sorted by Price
const sorted = sortProductsByPrice(products, 'desc');
console.log("\n2. Products Sorted by Price (High to Low):");
console.table(sorted, ["name", "price"]);

// 3. Total Value
const totalValue = calculateTotalInventoryValue(products);
console.log(`\n3. Total Inventory Value: $${totalValue.toFixed(2)}`);
// Calculation check: 25*15 + 75*5 + 120*40 + 300*8 + 15*3 + 45*18 = 7055

// 4. Grouped by Category
const grouped = groupByCategory(products);
console.log("\n4. Products Grouped by Category:");
console.log(JSON.stringify(grouped, null, 2));