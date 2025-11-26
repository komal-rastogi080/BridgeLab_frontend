/**
 * Q4. Employee Inheritance
 * Demonstrates inheritance and runtime polymorphism via method overriding.
 */

// Parent Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    // Base work() method
    work() {
        console.log(`${this.name} (Employee) is performing general duties in ${this.department}.`);
    }
}

// Child Class inherits from Employee
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Overrides the work() method from the parent class
    work() {
        console.log(`${this.name} (Manager) is coordinating the team of ${this.teamSize} in ${this.department} and making strategic decisions.`);
    }

    // Manager-specific method
    manage() {
        console.log(`${this.name} is mentoring the team.`);
    }
}

// Create objects
const emp = new Employee("Sarah Connor", "Development");
const mgr = new Manager("Thomas Anderson", "Development", 8);

console.log("--- Employee Inheritance & Polymorphism ---");

// Show method access
emp.work();
mgr.work(); // Calls the overridden method in Manager class

// Demonstrate runtime polymorphism: The function call behavior is determined at runtime
// based on the actual object type, even though the method signature is the same.
const staff = [emp, mgr];

console.log("\n--- Runtime Polymorphism (Calling work() on mixed array) ---");

staff.forEach(person => {
    // JavaScript dynamically determines which 'work()' method to execute 
    // based on whether the object is an Employee or a Manager.
    person.work();
});