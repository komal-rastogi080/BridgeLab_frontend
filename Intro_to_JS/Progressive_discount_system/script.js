// Q6: Progressive Discount System

// 1. Input total purchase amount
const purchaseAmount = 7500; 

let discountPercent = 0;
let discountLabel = "0%";

// 2. Logic tiers
if (purchaseAmount >= 10000) {
    discountPercent = 0.25;
    discountLabel = "25%";
} else if (purchaseAmount >= 5000) {
    discountPercent = 0.15;
    discountLabel = "15%";
} else if (purchaseAmount >= 2000) {
    discountPercent = 0.05;
    discountLabel = "5%";
} else {
    discountPercent = 0;
    discountLabel = "0%";
}

// 3. Calculation
const discountAmount = purchaseAmount * discountPercent;
const finalPrice = Math.round(purchaseAmount - discountAmount);

// 4. Print Receipt
const receiptHtml = `
    <div class="receipt">
        <div class="line"><span>Subtotal:</span> <span>$${purchaseAmount}</span></div>
        <div class="line"><span>Discount (${discountLabel}):</span> <span>-$${discountAmount}</span></div>
        <div class="line total-line"><span>TOTAL:</span> <span>$${finalPrice}</span></div>
    </div>
`;

document.getElementById("receipt-area").innerHTML = receiptHtml;
console.log(`Original: ${purchaseAmount}, Final: ${finalPrice}`);