"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "ErrUser" } // Added to test error handling
];

console.log("--- Employee Bonus Report ---");

employees.forEach(emp => {
    try {
        // 3. Validation inside try block
        if (!emp.salary || !emp.years) {
            throw new Error(`Incomplete data for employee: ${emp.name || 'Unknown'}`);
        }

        // 1. Conversion
        const salaryNum = Number(emp.salary);
        const yearsNum = Number(emp.years);

        if (isNaN(salaryNum) || isNaN(yearsNum)) {
            throw new Error(`Data type mismatch for ${emp.name}`);
        }

        // 2. Bonus Calculation
        let bonus;
        if (yearsNum > 3) {
            bonus = salaryNum * 0.10;
        } else {
            bonus = salaryNum * 0.05;
        }

        // 4. Template String Output
        console.log(`Name: ${emp.name} | Salary: ₹${salaryNum} | Years: ${yearsNum} | Bonus: ₹${bonus}`);

    } catch (error) {
        // 5. Catch Block
        console.error(`[SKIPPED] ${error.message}`);
    }
});