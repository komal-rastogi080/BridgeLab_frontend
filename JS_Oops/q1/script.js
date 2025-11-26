/**
 * Q1. Student Result Processing (reduce + Classes)
 * Implements a Student class to calculate average and assign grades using reduce().
 */

class Student {
    /**
     * @param {string} name - The student's name.
     * @param {number[]} marks - An array of marks obtained.
     */
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    /**
     * Calculates the average mark using the Array.prototype.reduce() method.
     * @returns {number} The calculated average mark.
     */
    calculateAverage() {
        if (this.marks.length === 0) {
            return 0;
        }
        
        // Use reduce to sum up all marks
        const totalMarks = this.marks.reduce((accumulator, currentMark) => {
            return accumulator + currentMark;
        }, 0); // Start accumulator at 0

        return totalMarks / this.marks.length;
    }

    /**
     * Returns a grade based on the calculated average.
     * @returns {string} The grade (A, B, C, or F).
     */
    getGrade() {
        const average = this.calculateAverage();
        
        if (average >= 90) {
            return "A";
        } else if (average >= 75) {
            return "B";
        } else if (average >= 60) {
            return "C";
        } else {
            return "F";
        }
    }

    displayResult() {
        const avg = this.calculateAverage().toFixed(2);
        const grade = this.getGrade();
        console.log(`\n--- Result for ${this.name} ---`);
        console.log(`Marks: [${this.marks.join(', ')}]`);
        console.log(`Average Score: ${avg}`);
        console.log(`Final Grade: ${grade}`);
    }
}

// Test the class for 3 students
const student1 = new Student("Alice", [95, 88, 92, 90]);
const student2 = new Student("Bob", [70, 65, 78, 80]);
const student3 = new Student("Charlie", [45, 50, 55, 60]);

student1.displayResult();
student2.displayResult();
student3.displayResult();