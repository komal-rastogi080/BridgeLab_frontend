// Create an array of 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * (100 - 30 + 1)) + 30);

// 1. Find Highest and Lowest (Spread operator expands array elements)
const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// 2. Calculate Average (Using reduce to sum)
const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
const average = (totalScore / scores.length).toFixed(1);

// 3. Count Passing Students (Score >= 50)
const passingCount = scores.filter(score => score >= 50).length;

// Output Summary
console.log("--- Student Performance Analyzer ---");
console.log(`Scores: [${scores.join(", ")}]`);
console.log(`Highest Score:  ${highest}`);
console.log(`Lowest Score:   ${lowest}`);
console.log(`Average Score:  ${average}`);
console.log(`Students Passed:${passingCount} / ${scores.length}`);