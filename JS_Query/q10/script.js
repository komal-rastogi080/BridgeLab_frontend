/**
 * Q10 – Registration Form Validation
 */

$(document).ready(function() {
    const $form = $('#registration-form');
    const $successMessage = $('#submit-success');
    const $inputs = $form.find('input');
    
    // Simple mock database for uniqueness check
    const existingEmails = ['admin@example.com', 'test@test.com'];

    // Helper to get the error element for a specific field
    function getErrorElement(fieldName) {
        // .find() searches descendants for the error element with the matching data-field attribute.
        return $form.find(`.error-message[data-field="${fieldName}"]`);
    }

    // Helper to validate a single field
    function validateField(inputElement) {
        const $input = $(inputElement);
        const value = $input.val().trim();
        const fieldName = $input.attr('name');
        const $error = getErrorElement(fieldName);
        
        let isValid = true;
        let errorMessage = '';

        // Reset state
        $error.text('');
        $input.css('border-color', '#ccc'); // Reset border

        if (value === '') {
            errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`;
            isValid = false;
        } 
        
        // 2. Check Email field → valid format and uniqueness.
        if (isValid && fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address.';
                isValid = false;
            } else if (existingEmails.includes(value)) {
                errorMessage = 'This email is already registered.';
                isValid = false;
            }
        }

        // 3. Check Password → minimum 8 characters.
        if (isValid && fieldName === 'password') {
            if (value.length < 8) {
                errorMessage = 'Password must be at least 8 characters long.';
                isValid = false;
            }
        }
        
        if (!isValid) {
            // 5. Highlight invalid fields dynamically with red border using .css().
            $error.text(errorMessage);
            $input.css('border-color', 'red');
        }

        return isValid;
    }

    // Attach validation to input change and blur events for real-time feedback
    $inputs.on('blur change', function() {
        validateField(this);
        $successMessage.hide();
    });

    // Form Submission Handler
    $form.on('submit', function(event) {
        event.preventDefault();
        
        let isFormValid = true;
        
        // Validate all fields on submission
        $inputs.each(function() {
            // The && operator ensures if one field is invalid, isFormValid remains false
            if (!validateField(this)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            // 4. Show success message if all fields valid.
            $successMessage.show();
            console.log('Form submission successful!');
            // Simulate form clear
            $form[0].reset(); 
            $inputs.css('border-color', '#ccc'); // Reset borders
        } else {
            $successMessage.hide();
            console.log('Form submission failed due to validation errors.');
        }
    });
});