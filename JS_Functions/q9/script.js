/**
 * Q 9: Rewrite Person -> Student inheritance using ES6 classes.
 */

// 1. Parent Class: Person
class Person {
    constructor(name) {
        this.name = name;
    }

    // Method automatically added to Person.prototype
    introduce() {
        console.log(`Hello, my name is ${this.name}. (ES6 Class)`);
    }
}

// 2. Child Class: Student
// 'extends' sets up the prototype chain automatically
class Student extends Person {
    constructor(name, branch) {
        // 'super' calls the constructor of the parent class (Person)
        super(name); 
        
        // Student-specific instance property
        this.branch = branch;
    }

    // Student-specific method
    getDetails() {
        console.log(`I am ${this.name} and I study the ${this.branch} branch. (ES6 Class)`);
    }
}

// --- Demonstration ---

const es6Student = new Student("Robert Paulson", "Electrical Engineering");

console.log("--- ES6 Class Inheritance Demonstration ---");

// Access method from Student's own class/prototype
es6Student.getDetails(); 

// Access method inherited from Person's class/prototype
es6Student.introduce(); 

// --- Behavior Comparison ---
console.log("\nBehavior Comparison (ES6 vs Prototype):");

// 1. Prototype Chain Check (ES6)
console.log("ES6 Student instanceof Student:", es6Student instanceof Student); // true
console.log("ES6 Student instanceof Person:", es6Student instanceof Person); // true

// 2. Method Location Check: Methods are on the prototype, just like constructor functions
console.log("introduce method is on Person.prototype:", Object.hasOwn(Person.prototype, 'introduce')); // true
console.log("getDetails method is on Student.prototype:", Object.hasOwn(Student.prototype, 'getDetails')); // true