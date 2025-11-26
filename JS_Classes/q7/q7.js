/**
 * Q 7: Login Form Validation using RegExp
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const successMsg = document.getElementById('login-success-msg');

    // Regular Expressions
    const regex = {
        username: /^.{5,}$/, // At least 5 characters
        // Password: min 8 total, must include 1 uppercase, 1 lowercase, 1 number, 1 special character
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/, 
    };

    // Error messages
    const errorMessages = {
        username: 'Username must be at least 5 characters long.',
        password: 'Password must be at least 8 characters long and include: 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
    };

    /**
     * Validates a single input field.
     * @param {HTMLInputElement} input - The input element.
     * @returns {boolean} - True if valid.
     */
    const validateField = (input) => {
        const fieldName = input.id;
        const value = input.value;
        const errorElement = document.querySelector(`.error-message[data-field="${fieldName}"]`);
        
        errorElement.textContent = ''; // Clear previous error

        if (!regex[fieldName].test(value)) {
            errorElement.textContent = errorMessages[fieldName];
            return false;
        }
        return true;
    };

    // Live validation on input
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            validateField(input);
            successMsg.style.display = 'none'; // Hide success message on new input
        });
    });

    // Form submission handler
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop default submission

        const isUsernameValid = validateField(usernameInput);
        const isPasswordValid = validateField(passwordInput);

        if (isUsernameValid && isPasswordValid) {
            successMsg.style.display = 'block';
            console.log('Validation passed. Attempting login...');
            // In a real application, you would send credentials to the server here.
        } else {
            successMsg.style.display = 'none';
            console.log('Validation failed.');
        }
    });
});