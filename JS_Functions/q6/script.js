/**
 * Q 6: Multi-Level Prototype Chain (Person -> Faculty -> Professor)
 */

// 1. Level 1: Person (Base Class)
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Person: My name is ${this.name}.`);
};

// 2. Level 2: Faculty (Inherits from Person)
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

// Set up inheritance from Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function() {
    console.log(`Faculty: I work in the ${this.department} department.`);
};

// 3. Level 3: Professor (Inherits from Faculty)
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

// Set up inheritance from Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function() {
    console.log(`Professor: I teach ${this.subject}.`);
};

// --- Demonstration ---

const profX = new Professor("Dr. Alan Turing", "CS", "Algorithms");

console.log("--- Multi-Level Prototype Chain Access ---");

// The Professor object can access all methods up the chain:

// Access method from Professor's own prototype (Level 3)
profX.teach(); 

// Access method inherited from Faculty's prototype (Level 2)
profX.showDepartment();

// Access method inherited from Person's prototype (Level 1)
profX.greet();

// Check the full chain
console.log("\nInstance Check:");
console.log("profX instanceof Professor:", profX instanceof Professor);
console.log("profX instanceof Faculty:", profX instanceof Faculty);
console.log("profX instanceof Person:", profX instanceof Person);