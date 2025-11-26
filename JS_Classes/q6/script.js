/**
 * Q 6: Employee Management System (Classes + Object Methods)
 */

class Employee {
    /**
     * Constructs a new Employee instance.
     * @param {number} id - Employee ID.
     * @param {string} name - Employee name.
     * @param {string} department - Employee department.
     * @param {number} salary - Monthly salary.
     */
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    /**
     * Calculates the annual salary (monthly salary * 12).
     * @returns {number} - Annual salary.
     */
    getAnnualSalary() {
        return this.salary * 12;
    }

    /**
     * Applies a percentage bonus to the current monthly salary.
     * @param {number} percent - The bonus percentage (e.g., 5 for 5%).
     */
    applyBonus(percent) {
        const bonusAmount = this.salary * (percent / 100);
        this.salary += bonusAmount;
        console.log(`Bonus of ${percent}% applied to ${this.name}. New monthly salary: $${this.salary.toFixed(2)}`);
    }

    /**
     * Displays employee details.
     */
    displayDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Dept: ${this.department}, Monthly Salary: $${this.salary.toFixed(2)}, Annual Salary: $${this.getAnnualSalary().toFixed(2)}`);
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, "Alice Johnson", "Sales", 5000),
    new Employee(2, "Bob Smith", "Engineering", 7500),
    new Employee(3, "Charlie Brown", "HR", 4000),
    new Employee(4, "David Lee", "Engineering", 8200),
    new Employee(5, "Eva Green", "Marketing", 5500),
];

// Calculate and display annual salary for each employee
console.log("--- Employee Annual Salaries ---");
employees.forEach(emp => {
    emp.displayDetails();
});

// Apply a bonus to an employee
console.log("\n--- Applying Bonus to Bob Smith (10%) ---");
employees[1].applyBonus(10);
employees[1].displayDetails();

// Use reduce() to calculate total annual payout of the company
const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("\n--- Company Payroll Summary ---");
console.log(`Total Annual Payout for all employees: $${totalAnnualPayout.toFixed(2)}`);