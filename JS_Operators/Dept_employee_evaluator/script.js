const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("--- Department Performance Report ---");

// Loop through the nested array
for (let i = 0; i < departments.length; i++) {
    // Destructure the current department array
    const deptName = departments[i][0];
    const score = departments[i][1];
    let grade = "";

    // Determine Grade
    if (score >= 90) {
        grade = "Excellent";
    } else if (score >= 75) {
        grade = "Good";
    } else if (score >= 60) {
        grade = "Average";
    } else {
        grade = "Needs Improvement";
    }

    console.log(`Dept: ${deptName} | Score: ${score} | Grade: ${grade}`);
}