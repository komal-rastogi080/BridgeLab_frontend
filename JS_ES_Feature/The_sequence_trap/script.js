"use strict";

console.log("--- Hoisting Analysis ---");

// 1. Prediction Fix
// Original code failed because 'status' (let) is in the Temporal Dead Zone (TDZ) 
// before initialization, and 'score' (var) is hoisted but undefined.

// FIXED CODE:
var score = 50; // Move declaration up or understand it prints undefined if below
let status = "ready"; // Move 'let' up before usage

console.log(`Score: ${score}`); // 50

// Function declarations are fully hoisted (body and name)
announce(); 

function announce() { 
    console.log("Game started (Function Declaration)"); 
}

const startGame = () => {
    console.log(`Status: ${status} (Arrow Function)`);
};
startGame();


// 3. Comparison with Arrow Functions
console.log("\n--- Arrow Function Hoisting Note ---");
// Arrow functions assigned to variables (const/let) are NOT hoisted like declarations.
// If we called 'arrowAnnounce()' before definition, it would crash.
const arrowAnnounce = () => { console.log("Arrow Game Started"); };
arrowAnnounce();