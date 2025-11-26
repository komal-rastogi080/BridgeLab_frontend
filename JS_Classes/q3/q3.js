/**
 * Q 3: Library Management System (Classes + Objects)
 */

class Book {
    /**
     * Constructs a new Book instance.
     * @param {string} title - Title of the book.
     * @param {string} author - Author of the book.
     * @param {string} ISBN - Unique ISBN number.
     * @param {boolean} [isIssued=false] - Whether the book is currently issued.
     */
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    /**
     * Issues the book, marking it as unavailable.
     */
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`Successfully issued: "${this.title}" (ISBN: ${this.ISBN})`);
        } else {
            console.log(`"${this.title}" (ISBN: ${this.ISBN}) is already issued.`);
        }
    }

    /**
     * Returns the book, marking it as available.
     */
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`Successfully returned: "${this.title}" (ISBN: ${this.ISBN})`);
        } else {
            console.log(`"${this.title}" (ISBN: ${this.ISBN}) was not issued.`);
        }
    }

    /**
     * Displays book availability status.
     * @returns {string} - Status string.
     */
    displayStatus() {
        return `${this.title} by ${this.author} (ISBN: ${this.ISBN}) - Status: ${this.isIssued ? 'Issued 🔴' : 'Available 🟢'}`;
    }
}

// Create an array of book objects
const library = [
    new Book("The JavaScript Way", "Chris Smith", "978-0123456789"),
    new Book("Node.js Essentials", "Jane Doe", "978-9876543210"),
    new Book("CSS Grid Mastery", "Alice Brown", "978-1112223334", true), // Start as issued
    new Book("Data Structures in JS", "Bob Johnson", "978-4445556667"),
];

/**
 * Displays all available books in the console.
 */
function displayAvailableBooks() {
    console.log("\n--- Available Books (Not Issued) ---");
    const availableBooks = library.filter(book => !book.isIssued);
    
    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }
    
    availableBooks.forEach(book => console.log(book.displayStatus()));
}

/**
 * Allows a user to issue a book by searching its ISBN.
 * @param {string} ISBN - The ISBN of the book to issue.
 */
function issueBookByISBN(ISBN) {
    console.log(`\n--- Attempting to Issue Book (ISBN: ${ISBN}) ---`);
    const bookToIssue = library.find(book => book.ISBN === ISBN);

    if (bookToIssue) {
        bookToIssue.issueBook();
    } else {
        console.log(`Error: Book with ISBN ${ISBN} not found.`);
    }
}

// Initial display of available books
displayAvailableBooks();

// Test the issueBook function
issueBookByISBN("978-0123456789"); // Issue "The JavaScript Way"
issueBookByISBN("978-1112223334"); // Try to issue an already issued book
issueBookByISBN("978-0000000000"); // Try to issue a non-existent book

// Display available books after issuing
displayAvailableBooks();

// Test the returnBook function
console.log("\n--- Returning a Book ---");
library[0].returnBook(); // Return "The JavaScript Way"

// Final display
displayAvailableBooks();