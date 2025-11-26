/**
 * Q8. Movie Ticket Booking System
 * Demonstrates ES6 class inheritance and prototype chain access.
 */

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }

    // This method is added to MovieTicket.prototype
    printTicket() {
        console.log(`\n--- Ticket Details ---`);
        console.log(`Movie: ${this.movieName}`);
        console.log(`Seat: ${this.seatNo}`);
        console.log(`Base Price: $${this.price.toFixed(2)}`);
        
        // Note: Check if getTotalAmount exists (for inherited classes)
        if (typeof this.getTotalAmount === 'function') {
            const finalPrice = this.getTotalAmount();
            console.log(`Total Amount (incl. Fee): $${finalPrice.toFixed(2)}`);
        }
    }
}

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// --- Demonstration ---

// Create an instance of the inherited class
const onlineTicket = new OnlineTicket("Dune: Part Two", "A15", 15.50, 2.50);
const boxOfficeTicket = new MovieTicket("The Holdovers", "C08", 14.00);

console.log("--- Movie Ticket Booking System ---");

// Call printTicket() using the OnlineTicket object
// This demonstrates prototype chain working: OnlineTicket objects successfully
// access the printTicket method defined on MovieTicket.prototype via inheritance.
onlineTicket.printTicket();

boxOfficeTicket.printTicket(); 

// Verification of prototype chain
console.log("\nVerification Check:");
console.log("OnlineTicket instance can access MovieTicket.prototype.printTicket:", 
    onlineTicket.printTicket === MovieTicket.prototype.printTicket); // true
console.log("OnlineTicket inherits from MovieTicket:", onlineTicket instanceof MovieTicket); // true