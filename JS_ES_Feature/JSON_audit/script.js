"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const validUsers = [];

console.log("--- JSON Audit ---");

for (let i = 0; i < rawData.length; i++) {
    try {
        // 1. Parse JSON
        const parsed = JSON.parse(rawData[i]);

        // 2. Detect Missing Keys
        if (!parsed.hasOwnProperty("user") || !parsed.hasOwnProperty("age")) {
            throw new Error("Missing required keys: 'user' or 'age'");
        }

        // Bonus: Filter under 18 and type conversion
        const ageNum = Number(parsed.age);
        if (ageNum < 18) {
            throw new Error("User is under 18");
        }

        // 3. Push valid
        // Create a clean object
        validUsers.push({ user: parsed.user, age: ageNum });

    } catch (err) {
        // 3. Log Errors with index
        console.error(`[Row ${i}] Error: ${err.message} | Data: ${rawData[i]}`);
    }
}

console.log("\nValid Users Database:", validUsers);