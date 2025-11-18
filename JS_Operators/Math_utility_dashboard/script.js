const x = 16.75;

// 1. Round the number to the nearest integer
const roundedValue = Math.round(x);

// 2. Calculate Square Root
const squareRoot = Math.sqrt(x);

// 3. Calculate Power (x to the power of 3)
const powerValue = Math.pow(x, 3);

// 4. Generate Random number between 10 and 50
// Logic: Math.random() * (max - min + 1) + min
const randomVal = Math.floor(Math.random() * 41) + 10;

// Display Dashboard using Template Literals
console.log(`
=== Math Utility Dashboard ===
Input Number: ${x}
------------------------------
Rounded Value:   ${roundedValue}
Square Root:     ${squareRoot.toFixed(2)}
Power (x^3):     ${powerValue.toFixed(2)}
Random (10-50):  ${randomVal}
==============================
`);