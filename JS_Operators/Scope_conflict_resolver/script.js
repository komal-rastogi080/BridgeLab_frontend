// Global variable declaration
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable declaration (Function Scope)
    let salary = 40000;
    let totalSalary = 0;

    // Check if the employee is permanent to add the global bonus
    if (isPermanent) {
        console.log("Status: Permanent Employee. Adding bonus.");
        totalSalary = salary + bonus; // Accessing global 'bonus'
    } else {
        console.log("Status: Contract Employee. No bonus.");
        totalSalary = salary;
    }

    console.log(`Total Salary: ${totalSalary}`);
    console.log("------------------------------");
}
console.log("--- Payroll Script ---");

// Case 1: Permanent Employee (isPermanent = true)
calculateSalary(true);

// Case 2: Contract Employee (isPermanent = false)
// This demonstrates that changing the local parameter affects the logic
// without modifying the global 'bonus' variable itself.
calculateSalary(false);

// Verify global variable remains unchanged
console.log(`Global Bonus value remains: ${bonus}`);