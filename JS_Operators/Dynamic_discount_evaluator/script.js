const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

console.log("--- Cart Checkout ---");

// Calculate subtotal with category discounts
const discountedTotal = cart.reduce((total, product) => {
    let finalPrice = product.price;

    // Apply Category Discounts
    if (product.category === "electronics") {
        // 10% discount
        finalPrice = product.price * 0.90; 
        console.log(`${product.item}: Applied 10% Elec Discount.`);
    } else if (product.category === "fashion") {
        // 5% discount
        finalPrice = product.price * 0.95;
        console.log(`${product.item}: Applied 5% Fashion Discount.`);
    } else {
        console.log(`${product.item}: No category discount.`);
    }

    return total + finalPrice;
}, 0);

let finalPayable = discountedTotal;

// Check if cart value > 50000 for extra discount
if (discountedTotal > 50000) {
    console.log(">> Cart exceeds 50,000. Applying extra 5% discount!");
    finalPayable = discountedTotal * 0.95;
}

console.log("---------------------");
console.log(`Total Payable: Rs. ${finalPayable.toFixed(2)}`);