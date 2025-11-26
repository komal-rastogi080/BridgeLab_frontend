/**
 * Q7. Banking Application
 * Demonstrates class syntax, private fields, and error handling for business logic.
 */

class BankAccount {
    // Private field (ES2019+)
    #balance; 

    constructor(initialBalance = 0) {
        if (typeof initialBalance !== 'number' || initialBalance < 0) {
            throw new Error("Initial balance must be a non-negative number.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount.toFixed(2)}. New balance: $${this.#balance.toFixed(2)}`);
        } else {
            console.warn("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        
        // Throw error if insufficient balance
        if (amount > this.#balance) {
            throw new Error("Insufficient balance for this withdrawal.");
        }

        this.#balance -= amount;
        console.log(`Withdrew $${amount.toFixed(2)}. New balance: $${this.#balance.toFixed(2)}`);
    }

    getBalance() {
        return this.#balance;
    }
}

// --- Demonstration ---
console.log("--- Banking Application Demo ---");

const account = new BankAccount(500.00);
console.log(`Initial Balance: $${account.getBalance().toFixed(2)}`);

// 1. Valid deposits
account.deposit(250.75);
account.deposit(100.00);

// 2. Invalid withdrawals (handled using try/catch)
const attempt1 = 1000.00;
const attempt2 = 50.00;

console.log("\n--- Withdrawal Attempts ---");

// Attempt 1: Too much money (Expected to fail)
try {
    console.log(`Attempting to withdraw $${attempt1.toFixed(2)}...`);
    account.withdraw(attempt1);
} catch (error) {
    console.error(`❌ Withdrawal Failed: ${error.message}`);
}

// Attempt 2: Valid withdrawal (Expected to succeed)
try {
    console.log(`Attempting to withdraw $${attempt2.toFixed(2)}...`);
    account.withdraw(attempt2);
} catch (error) {
    console.error(`❌ Withdrawal Failed: ${error.message}`);
}

console.log(`\nFinal Balance: $${account.getBalance().toFixed(2)}`);

// Attempt to access private field directly (will fail/be undefined)
console.log(`Accessing #balance directly (should fail): ${account["#balance"]}`);