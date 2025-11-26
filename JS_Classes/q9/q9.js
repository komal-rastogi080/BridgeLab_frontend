/**
 * Q 9: Shopping Cart Total (Classes + RegExp for Coupon)
 */

class Cart {
    constructor() {
        this.items = [];
        // Coupon format: SAVE followed by 2 digits OR DISC followed by 2 digits
        this.couponRegex = /^(SAVE|DISC)\d{2}$/;
    }

    /**
     * Adds an item to the shopping cart.
     * @param {string} name - Item name.
     * @param {number} price - Unit price.
     * @param {number} quantity - Quantity to add.
     */
    addItem(name, price, quantity = 1) {
        this.items.push({ name, price, quantity });
        console.log(`Added ${quantity} x ${name} @ $${price.toFixed(2)}`);
    }

    /**
     * Calculates the total cost of all items without discount.
     * @returns {number} - The subtotal.
     */
    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    /**
     * Validates a coupon code and applies the corresponding discount.
     * @param {string} couponCode - The coupon code string.
     * @returns {number | null} - The discount percentage (e.g., 20) or null if invalid.
     */
    validateCoupon(couponCode) {
        const match = couponCode.match(this.couponRegex);
        
        if (match) {
            // Extract the two digits at the end
            const discountPercent = parseInt(couponCode.slice(-2), 10);
            return discountPercent;
        }
        return null;
    }

    /**
     * Calculates the final total after applying a coupon discount.
     * @param {string} [couponCode=''] - The coupon code to apply.
     * @returns {{finalTotal: number, discountApplied: number, message: string}} - Result object.
     */
    calculateFinalTotal(couponCode = '') {
        const subtotal = this.getTotal();
        let discountPercent = 0;
        let finalTotal = subtotal;
        let message = `Subtotal: $${subtotal.toFixed(2)}`;

        if (couponCode) {
            discountPercent = this.validateCoupon(couponCode.toUpperCase());
            
            if (discountPercent !== null) {
                const discountAmount = subtotal * (discountPercent / 100);
                finalTotal = subtotal - discountAmount;
                message = `Coupon applied: ${couponCode.toUpperCase()} (${discountPercent}%) | Discount: $${discountAmount.toFixed(2)}`;
            } else {
                message = `Invalid coupon code: ${couponCode}. No discount applied.`;
            }
        }

        return {
            finalTotal: parseFloat(finalTotal.toFixed(2)),
            discountApplied: discountPercent,
            message: message,
        };
    }
}

// --- Demo Usage ---

const shoppingCart = new Cart();

// Add items
shoppingCart.addItem("Wireless Headphones", 150.00, 2);
shoppingCart.addItem("Portable Charger", 45.50, 1);
shoppingCart.addItem("Smartphone Case", 12.99, 3);

const subtotal = shoppingCart.getTotal();
console.log("\n--- Shopping Cart Subtotal ---");
console.log(`Total before discount: $${subtotal.toFixed(2)}`);

// Test 1: Valid Coupon (SAVE20)
const validCoupon = "SAVE20";
const result1 = shoppingCart.calculateFinalTotal(validCoupon);

console.log(`\n--- Coupon Test 1: ${validCoupon} ---`);
console.log(result1.message);
console.log(`Final Total: $${result1.finalTotal.toFixed(2)}`);
// Result should be: $305.47 * 0.80 = $244.38

// Test 2: Valid Coupon (DISC15)
const validCoupon2 = "DISC15";
const result2 = shoppingCart.calculateFinalTotal(validCoupon2);

console.log(`\n--- Coupon Test 2: ${validCoupon2} ---`);
console.log(result2.message);
console.log(`Final Total: $${result2.finalTotal.toFixed(2)}`);
// Result should be: $305.47 * 0.85 = $259.65

// Test 3: Invalid Coupon
const invalidCoupon = "SAVE20A";
const result3 = shoppingCart.calculateFinalTotal(invalidCoupon);

console.log(`\n--- Coupon Test 3: ${invalidCoupon} ---`);
console.log(result3.message);
console.log(`Final Total: $${result3.finalTotal.toFixed(2)}`);
// Result should be: $305.47