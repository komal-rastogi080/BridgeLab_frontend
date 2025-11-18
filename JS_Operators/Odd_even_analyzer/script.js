const results = [];

// Loop from 1 to 30
for (let i = 1; i <= 30; i++) {
    let classification = "";

    // Check divisibility by 3 AND 5
    if (i % 3 === 0 && i % 5 === 0) {
        classification = "FizzBuzz";
    } 
    // Check if even
    else if (i % 2 === 0) {
        classification = "Even";
    } 
    // Otherwise odd
    else {
        classification = "Odd";
    }

    // Store formatted result string
    results.push(`Number ${i}: ${classification}`);
}

// Display Results
console.log("--- Number Analyzer (1-30) ---");
console.log(results);