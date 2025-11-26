/**
 * Q5. Ride-Sharing Application
 * Demonstrates classes, inheritance, method creation, and error handling.
 */

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleModel, licensePlate) {
        super(name, rating);
        this.vehicleModel = vehicleModel;
        this.licensePlate = licensePlate;
    }

    getVehicleDetails() {
        return `${this.name} drives a ${this.vehicleModel} (${this.licensePlate}).`;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    /**
     * Calculates the fare based on distance (Base fee: $3, Rate: $1.5 per km).
     * @returns {number} The calculated fare.
     * @throws {Error} If distance is invalid.
     */
    calculateFare() {
        const BASE_FEE = 3.00;
        const RATE_PER_KM = 1.50;

        // Throw an error if distance is negative or not provided
        if (typeof this.distance !== 'number' || this.distance <= 0) {
            throw new Error(`Invalid distance: ${this.distance}. Distance must be a positive number.`);
        }

        const fare = BASE_FEE + (this.distance * RATE_PER_KM);
        return parseFloat(fare.toFixed(2));
    }
}

// --- Test Scenarios ---

const trip1 = new Trip("Home", "Office", 12.5);
const trip2 = new Trip("Airport", "Hotel", -5); // Invalid distance

console.log("--- Ride-Sharing Application ---");

// Scenario 1: Valid Trip
try {
    const fare = trip1.calculateFare();
    console.log(`Trip from ${trip1.fromLocation} to ${trip1.toLocation} (${trip1.distance}km)`);
    console.log(`✅ Calculated Fare: $${fare}`);
} catch (error) {
    console.error(`❌ Error calculating fare for Trip 1: ${error.message}`);
}

// Scenario 2: Invalid Trip (Handled using try/catch)
try {
    const fare = trip2.calculateFare();
    console.log(`Trip from ${trip2.fromLocation} to ${trip2.toLocation} (${trip2.distance}km)`);
    console.log(`✅ Calculated Fare: $${fare}`);
} catch (error) {
    // Handle the error and show a proper message
    console.error(`\n❌ Error calculating fare for Trip 2: ${error.message}`);
    console.log("Please ensure distance is a valid positive number before calculating fare.");
}

// Driver example (just for class demo)
const driver = new Driver("Ryan Gosling", 4.9, "Prius", "RYAN123");
console.log(`\nDriver Info: ${driver.getVehicleDetails()}`);