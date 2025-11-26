/**
 * Q 5: Basic Prototype Inheritance (Person -> Student)
 */

// 1. Parent Constructor: Person
function Person(name) {
    this.name = name;
}

// Add method to Person prototype
Person.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name}.`);
};

// 2. Child Constructor: Student
function Student(name, branch) {
    // Call the Person constructor to inherit instance properties (name)
    Person.call(this, name); 
    
    // Student-specific instance property
    this.branch = branch;
}

// 3. Setup the inheritance chain: Set Student's prototype to an instance of Person.
// This ensures Student objects can access methods on Person.prototype.
// 
Student.prototype = Object.create(Person.prototype);

// Fix the constructor pointer (good practice)
Student.prototype.constructor = Student; 

// 4. Add method to Student prototype
Student.prototype.getDetails = function() {
    console.log(`I am ${this.name} and I study the ${this.branch} branch.`);
};

// --- Demonstration ---

const studentA = new Student("Emily Clark", "Computer Science");

console.log("--- Prototype Chain Demonstration (Person -> Student) ---");

// Access method from Student's own prototype
studentA.getDetails(); 

// Access method inherited from Person's prototype
studentA.introduce(); 

// Check the prototype chain
console.log("\nPrototype Chain Check:");
console.log("Student is an instance of Student:", studentA instanceof Student); // true
console.log("Student is an instance of Person:", studentA instanceof Person); // true
console.log("studentA has name (own property):", studentA.hasOwnProperty('name')); // true
console.log("studentA has introduce (inherited property):", studentA.hasOwnProperty('introduce')); // false