// Q5: Weather Activity Planner

// 1. Create variables
const temperature = 12;    // Celsius
const isRaining = false;
const windSpeed = 25;      // km/h

// 2. Display conditions
document.getElementById("conditions").innerHTML = `
    <p>🌡️ Temperature: ${temperature}°C</p>
    <p>🌧️ Raining: ${isRaining ? "Yes" : "No"}</p>
    <p>💨 Wind Speed: ${windSpeed} km/h</p>
`;

// 3. Logic with && and ||
let advice = "";

if (isRaining) {
    advice = "Stay indoors with hot coffee ☕";
} else if (temperature > 35) {
    advice = "Go swimming 🏊";
} else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home 🧣";
} else {
    advice = "Perfect day for a walk 🚶";
}

// 4. Print advice
document.getElementById("advice").textContent = advice;
console.log("Weather Advice:", advice);