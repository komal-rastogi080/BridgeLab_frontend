/**
 * Q2. Online Food Ordering (map + Error Handling)
 */

const menu = [
    { name: "Burger", price: 10.50 },
    { name: "Fries", price: 4.00 },
    { name: "Soda", price: 2.50 },
    { name: "Salad", price: 8.75 }
];

/**
 * Calculates the total bill for a list of ordered items.
 * @param {string[]} orderItems - An array of item names ordered.
 * @returns {number} The total bill amount.
 * @throws {Error} If an invalid item is found in the order.
 */
function calculateBill(orderItems) {
    if (orderItems.length === 0) {
        return 0;
    }

    // 1. Validate and get item objects
    const items = orderItems.map(itemName => {
        const item = menu.find(i => i.name.toLowerCase() === itemName.toLowerCase());
        if (!item) {
            // Throw an error if an invalid item is ordered
            throw new Error(`Invalid item ordered: "${itemName}". Please check the menu.`);
        }
        return item;
    });

    // 2. Use map() to extract price list
    const priceList = items.map(item => item.price);

    // 3. Use reduce() to calculate the total
    const totalBill = priceList.reduce((total, price) => total + price, 0);

    return totalBill;
}

// --- Test Scenarios ---
console.log("--- Online Food Ordering Bill Calculator ---");

const order1 = ["Burger", "Fries", "Soda"];
try {
    const total1 = calculateBill(order1);
    console.log(`\nOrder 1: [${order1.join(', ')}]`);
    console.log(`✅ Total Bill: $${total1.toFixed(2)}`); // Expected: $17.00
} catch (error) {
    console.error(`\n❌ Error processing Order 1: ${error.message}`);
}

const order2 = ["Burger", "Pizza"]; // 'Pizza' is invalid
try {
    const total2 = calculateBill(order2);
    console.log(`\nOrder 2: [${order2.join(', ')}]`);
    console.log(`✅ Total Bill: $${total2.toFixed(2)}`);
} catch (error) {
    // Use try-catch to show meaningful messages
    console.error(`\n❌ Error processing Order 2: ${error.message}`); 
}