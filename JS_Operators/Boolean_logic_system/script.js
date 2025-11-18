// System State Variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

console.log("--- Smart Home Security Check ---");

// Check conditions using Logical AND (&&)
// All conditions must be true for access to be Secure
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("System Status: Secure (Access Granted)");
} else {
    console.log("System Status: Unsafe (Check Entry Points)");
}

// Test Outcome 2: Simulate a window being open
console.log("\n[Simulating Window Opened...]");
isWindowClosed = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("System Status: Secure");
} else {
    console.log("System Status: Unsafe (Window is open!)");
}