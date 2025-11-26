/**
 * Q 2: Student Form Validator (Forms + RegExp)
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('student-form');
    const inputs = form.querySelectorAll('input');
    const successMsg = document.getElementById('success-msg');

    // Regular Expressions for validation
    const regex = {
        name: /^[A-Za-z\s]+$/, // Only alphabets and spaces
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email format
        phone: /^\d{10}$/, // Exactly 10 digits
        // Password: min 8 chars total, must contain 1 uppercase (?=.*[A-Z]), 1 number (?=.*\d), 1 special char (?=.*[^A-Za-z0-9])
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/, 
    };

    // Validation messages
    const errorMessages = {
        name: 'Name must contain only alphabetic characters.',
        email: 'Please enter a valid email address (e.g., example@domain.com).',
        phone: 'Phone number must be exactly 10 digits.',
        password: 'Password must be at least 8 characters long and include 1 uppercase, 1 number, and 1 special character.',
    };

    /**
     * Validates a single input field against its corresponding RegExp.
     * @param {HTMLInputElement} input - The input element to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    const validateField = (input) => {
        const fieldName = input.id;
        const value = input.value.trim();
        const errorElement = document.querySelector(`.error-message[data-field="${fieldName}"]`);
        
        // Remove previous classes
        input.classList.remove('valid', 'invalid');
        errorElement.textContent = '';

        if (!regex[fieldName].test(value)) {
            input.classList.add('invalid');
            errorElement.textContent = errorMessages[fieldName];
            return false;
        }

        input.classList.add('valid');
        return true;
    };

    // Attach real-time validation to all input fields
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validateField(input);
            successMsg.style.display = 'none';
        });
    });

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop default form submission
        
        let isFormValid = true;
        
        // Run validation for all fields
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            successMsg.style.display = 'block';
            console.log('Form submission successful!');
            // In a real app, you would send data to the server here
        } else {
            successMsg.style.display = 'none';
            console.log('Form submission failed due to validation errors.');
        }
    });
});