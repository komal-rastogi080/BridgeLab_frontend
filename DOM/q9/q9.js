document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const successMessage = document.getElementById('submit-success');
    
    // Utility function to get the error element
    const getErrorElement = (fieldName) => {
        return document.querySelector(`.error[data-field="${fieldName}"]`);
    };

    // Validation logic for a single field
    const validateField = (inputElement) => {
        const value = inputElement.value.trim();
        const fieldName = inputElement.id;
        const errorElement = getErrorElement(fieldName);
        let isValid = true;
        let errorMessage = '';

        // 1. Required Check
        if (value === '') {
            errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`;
            isValid = false;
        }
        
        // 2. Email Check
        if (isValid && fieldName === 'email') {
            if (!value.includes('@')) {
                errorMessage = 'Email must contain the "@" symbol.';
                isValid = false;
            }
        }

        // 3. Password Check
        if (isValid && fieldName === 'password') {
            if (value.length < 6) {
                errorMessage = 'Password must be at least 6 characters long.';
                isValid = false;
            }
        }

        errorElement.textContent = errorMessage;
        return isValid;
    };

    // Function to run validation on all fields
    const validateForm = () => {
        const isNameValid = validateField(nameInput);
        const isEmailValid = validateField(emailInput);
        const isPasswordValid = validateField(passwordInput);

        return isNameValid && isEmailValid && isPasswordValid;
    };

    // On input: errors disappear automatically
    [nameInput, emailInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            validateField(input);
            successMessage.style.display = 'none'; // Hide success message on correction
        });
    });

    // On submit: preventDefault() and show inline errors
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop form submission
        successMessage.style.display = 'none';

        if (validateForm()) {
            // Form is valid
            console.log('Form data is valid. (Submission prevented by preventDefault())');
            successMessage.style.display = 'block';
            form.reset(); // Clear the form on successful validation
        } else {
            // Form is invalid, errors are already displayed by validateForm()
            console.log('Form is invalid.');
        }
    });
});