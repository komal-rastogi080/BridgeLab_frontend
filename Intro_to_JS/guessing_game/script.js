// Q7: Smart Guessing Game

// 1. Generate random secret number (1-50)
// I put this outside the function so it doesn't reset every time you click
const secretNum = Math.floor(Math.random() * 50) + 1;

// Just for debugging/testing transparency
document.getElementById("debug").innerText = `(Secret is: ${secretNum})`;

function checkGuess() {
    // 2. Get user guess from input
    const inputVal = document.getElementById("userGuess").value;
    const userGuess = Number(inputVal);
    
    const messageEl = document.getElementById("message");

    if (!inputVal) {
        messageEl.innerText = "Please enter a number.";
        return;
    }

    // 3. Logic conditions
    if (userGuess === secretNum) {
        messageEl.innerText = "🎉 Correct guess!";
        messageEl.style.color = "#0f0";
    } else if (Math.abs(userGuess - secretNum) <= 3) {
        messageEl.innerText = "🔥 Very close!";
        messageEl.style.color = "orange";
    } else if (userGuess > secretNum) {
        messageEl.innerText = "⬇️ Too high";
        messageEl.style.color = "white";
    } else {
        messageEl.innerText = "⬆️ Too low";
        messageEl.style.color = "white";
    }
}