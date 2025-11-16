// Q3: Monthly Expense Tracker

// 1. Array of expenses: [Food, Travel, Rent, Bills, Leisure]
const expenses = [350, 120, 800, 150, 90];
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];

// 2. Calculate Total
let total = 0;
let expenseListHtml = "<ul>";

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
    expenseListHtml += `<li>${categories[i]}: $${expenses[i]}</li>`;
}
expenseListHtml += "</ul>";

// 3. Calculate Average
const average = total / expenses.length;

// 4. Calculate Final Amount with 10% Tax
const taxRate = 0.10;
const finalAmount = total + (total * taxRate);

// 5. Display results
document.getElementById("expense-list").innerHTML = expenseListHtml;

document.getElementById("calculations").innerHTML = `
    <div class="result-line">Subtotal: <span class="highlight">$${total.toFixed(2)}</span></div>
    <div class="result-line">Average: <span class="highlight">$${average.toFixed(2)}</span></div>
    <div class="result-line total-box">
        Final (incl. 10% Tax): <strong>$${finalAmount.toFixed(2)}</strong>
    </div>
`;