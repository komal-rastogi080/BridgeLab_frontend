/**
 * Q 5: Movie Ticket Booking (Objects + RegExp)
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const inputs = form.querySelectorAll('input');
    const ticketDetails = document.getElementById('ticket-details');
    
    // Regular Expressions
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /**
     * Helper to display validation errors.
     * @param {string} field - The name of the field (name, email, seats).
     * @param {string} message - The error message to display.
     */
    const setError = (field, message) => {
        document.querySelector(`.error-message[data-field="${field}"]`).textContent = message;
    };

    /**
     * Validates all input fields.
     * @returns {boolean} - True if all fields are valid.
     */
    const validateForm = () => {
        let isValid = true;

        // Name Validation
        const nameInput = document.getElementById('booking-name');
        const nameValue = nameInput.value.trim();
        setError('name', '');
        if (!nameRegex.test(nameValue)) {
            setError('name', 'Name must contain only alphabetic characters.');
            isValid = false;
        }

        // Email Validation
        const emailInput = document.getElementById('booking-email');
        const emailValue = emailInput.value.trim();
        setError('email', '');
        if (!emailRegex.test(emailValue)) {
            setError('email', 'Please enter a valid email format.');
            isValid = false;
        }

        // Seats Validation (1 to 10)
        const seatsInput = document.getElementById('booking-seats');
        const seatsValue = parseInt(seatsInput.value, 10);
        setError('seats', '');
        if (isNaN(seatsValue) || seatsValue < 1 || seatsValue > 10) {
            setError('seats', 'Seats must be a number between 1 and 10.');
            isValid = false;
        }
        
        return isValid;
    };

    // Live validation on input
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            // Quick validation update
            const fieldName = input.name;
            const value = input.value.trim();
            setError(fieldName, '');

            if (fieldName === 'name' && value && !nameRegex.test(value)) {
                setError(fieldName, 'Name must be alphabets only.');
            } else if (fieldName === 'email' && value && !emailRegex.test(value)) {
                setError(fieldName, 'Invalid email format.');
            } else if (fieldName === 'seats') {
                const seats = parseInt(value, 10);
                if (value && (isNaN(seats) || seats < 1 || seats > 10)) {
                    setError(fieldName, 'Must be 1 to 10 seats.');
                }
            }
            ticketDetails.style.display = 'none';
        });
    });

    // Form Submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateForm()) {
            const bookingInfo = {
                name: document.getElementById('booking-name').value.trim(),
                email: document.getElementById('booking-email').value.trim(),
                seats: parseInt(document.getElementById('booking-seats').value, 10)
            };

            // Display booking info
            document.getElementById('out-name').textContent = bookingInfo.name;
            document.getElementById('out-email').textContent = bookingInfo.email;
            document.getElementById('out-seats').textContent = bookingInfo.seats;
            
            ticketDetails.style.display = 'block';
            console.log('Booking successful:', bookingInfo);
            form.reset();
        } else {
            ticketDetails.style.display = 'none';
            console.log('Booking failed. Please check errors.');
        }
    });
});