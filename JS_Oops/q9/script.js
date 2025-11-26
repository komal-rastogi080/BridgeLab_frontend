/**
 * Q9. Fitness App Analytics
 * Demonstrates filter(), reduce(), map(), and error handling on a dataset.
 */

class FitnessAnalytics {
    /**
     * @param {Array<Object>} dataset - Array of user workout objects.
     */
    constructor(dataset) {
        this.dataset = dataset;
    }

    /**
     * Finds users with steps > 7000 using filter().
     * @returns {Array<Object>} Array of active user objects.
     */
    getActiveUsers() {
        this.checkDataset();
        return this.dataset.filter(user => user.steps > 7000);
    }

    /**
     * Calculates the average calories burned across all users using reduce().
     * @returns {number} The average calories.
     */
    getAverageCalories() {
        this.checkDataset();
        
        // Use reduce to sum up all calories
        const totalCalories = this.dataset.reduce((sum, user) => sum + user.calories, 0);

        return totalCalories / this.dataset.length;
    }

    /**
     * Formats user data as motivational messages using map().
     * @returns {string[]} Array of summary messages.
     */
    getUserSummary() {
        this.checkDataset();
        return this.dataset.map(user => 
            `${user.user} walked ${user.steps} steps and burned ${user.calories} calories today. Great job!`
        );
    }

    /**
     * Throws an error if the dataset is empty.
     * @throws {Error} If dataset is empty.
     */
    checkDataset() {
        if (!this.dataset || this.dataset.length === 0) {
            throw new Error("Dataset is empty. Cannot perform analytics.");
        }
    }
}

// Given workout data
const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

console.log("--- Fitness App Analytics ---");

try {
    const analytics = new FitnessAnalytics(workoutData);

    // 1. getActiveUsers()
    const activeUsers = analytics.getActiveUsers();
    console.log("\n1. Active Users (Steps > 7000):");
    console.table(activeUsers); // A and B

    // 2. getAverageCalories()
    const avgCalories = analytics.getAverageCalories().toFixed(2);
    // (300 + 500 + 200) / 3 = 1000 / 3 = 333.33
    console.log(`\n2. Average Calories Burned: ${avgCalories}`);

    // 3. getUserSummary()
    const userSummaries = analytics.getUserSummary();
    console.log("\n3. User Summaries:");
    userSummaries.forEach(summary => console.log(`- ${summary}`));
    
} catch (error) {
    console.error(`\n❌ Analytics Error: ${error.message}`);
}

// --- Test Case: Empty Dataset ---
try {
    const emptyAnalytics = new FitnessAnalytics([]);
    emptyAnalytics.getActiveUsers();
} catch (error) {
    console.error(`\n--- Empty Dataset Test ---`);
    console.error(`❌ Error caught: ${error.message}`);
}