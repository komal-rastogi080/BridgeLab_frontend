const feedback = "Great product! Fast delivery and amazing sound quality!";

// 1. Count words
const wordCount = feedback.split(" ").length;

// 2. Analyze Sentiment
// Convert to lowercase to ensure case-insensitive matching
const lowerFeedback = feedback.toLowerCase();
let status = "";

if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    status = "Needs Improvement";
} else {
    status = "Positive Feedback";
}

// Output Report
console.log("--- Customer Feedback Analysis ---");
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);
console.log(`Sentiment:  ${status}`);