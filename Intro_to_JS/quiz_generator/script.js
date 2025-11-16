// Q9: Random Math Quiz Generator

// 1. Generate numbers and operator
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operators = ['+', '-', '*', '/'];
const randomOp = operators[Math.floor(Math.random() * operators.length)];

// 2. Calculate logic
let correctAnswer;

switch (randomOp) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        // Division rounded to 2 decimals
        correctAnswer = (num1 / num2).toFixed(2);
        break;
}

// 3. Display Question
document.getElementById("question-box").innerText = `${num1} ${randomOp} ${num2} = ?`;
document.getElementById("answer-box").innerText = correctAnswer;

// Helper to show answer on button click
function revealAnswer() {
    document.getElementById("answer-box").style.display = "block";
}