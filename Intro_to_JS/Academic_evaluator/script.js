// Q4: Academic Performance Evaluator

// 1. Input marks for 5 subjects
const subjectMarks = [85, 92, 78, 88, 95]; 
// Try changing one value to 30 to test "Detained" logic: [85, 30, 78, 88, 95]

let totalMarks = 0;
let isFailedBySubject = false;

// 2. Calculate stats and validate minimum marks
subjectMarks.forEach(mark => {
    totalMarks += mark;
    if (mark < 35) {
        isFailedBySubject = true; // Validation rule
    }
});

const percentage = (totalMarks / (subjectMarks.length * 100)) * 100;

// 3. Determine Status using logical operators
let status = "";
let cssClass = "";

if (isFailedBySubject) {
    status = "Detained (Failed in specific subject)";
    cssClass = "fail";
} else if (percentage >= 85) {
    status = "Promoted with Distinction";
    cssClass = "distinction";
} else if (percentage >= 50 && percentage <= 84) {
    status = "Promoted";
    cssClass = "pass";
} else {
    status = "Detained (Percentage below 50%)";
    cssClass = "fail";
}

// 4. Output
document.getElementById("marks-display").innerHTML = `
    <p>Marks: [ ${subjectMarks.join(", ")} ]</p>
    <p>Percentage: <strong>${percentage.toFixed(2)}%</strong></p>
`;

document.getElementById("result-display").innerHTML = `
    <div class="status ${cssClass}">${status}</div>
`;