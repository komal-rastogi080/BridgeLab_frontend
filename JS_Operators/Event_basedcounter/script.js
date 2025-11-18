let count = 0;

// Function to increment counter
function increment() {
    count++;
    
    // Nested function to demonstrate scope
    // It can access the outer variable 'count'
    function logUpdate() {
        console.log(`[Click] Increment triggered. Count is now: ${count}`);
    }
    
    logUpdate();
}

// Function to decrement counter
function decrement() {
    count--;
    console.log(`[Click] Decrement triggered. Count is now: ${count}`);
}

console.log("--- Event Counter Simulation ---");
console.log(`Initial Count: ${count}`);

// Simulating clicks manually
increment();
increment();
increment();
decrement();
increment();