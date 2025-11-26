document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const steps = Array.from(document.querySelectorAll('.step'));
    const nextBtn = document.getElementById('next-btn');
    const backBtn = document.getElementById('back-btn');
    const summaryName = document.getElementById('summary-name');
    const summaryEmail = document.getElementById('summary-email');

    let currentStepIndex = 0;

    const showStep = (index) => {
        steps.forEach((step, i) => {
            step.classList.toggle('active', i === index);
        });

        // Update button visibility/state
        backBtn.disabled = index === 0;
        
        if (index === steps.length - 1) { // If it's the summary step
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'inline-block';
            nextBtn.textContent = (index === steps.length - 2) ? 'Finish' : 'Next';
        }
    };

    const validateStep = (index) => {
        const step = steps[index];
        const input = step.querySelector('input');
        const errorElement = step.querySelector('.error');
        let isValid = true;
        let errorMessage = '';

        if (!input) return true; // Skip validation for summary step

        // Basic required check
        if (input.value.trim() === '') {
            errorMessage = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`;
            isValid = false;
        } 
        
        // Specific checks
        if (isValid && input.id === 'email') {
            if (!/\S+@\S+\.\S+/.test(input.value)) {
                errorMessage = 'Please enter a valid email address.';
                isValid = false;
            }
        }

        if (isValid && input.id === 'password') {
            if (input.value.length < 6) {
                errorMessage = 'Password must be at least 6 characters long.';
                isValid = false;
            }
        }

        errorElement.textContent = errorMessage;
        return isValid;
    };

    const updateSummary = () => {
        summaryName.textContent = document.getElementById('name').value;
        summaryEmail.textContent = document.getElementById('email').value;
    };

    nextBtn.addEventListener('click', () => {
        if (validateStep(currentStepIndex)) {
            currentStepIndex++;
            if (currentStepIndex === steps.length - 1) { // Transitioning to Summary
                updateSummary();
            }
            showStep(currentStepIndex);
        }
    });

    backBtn.addEventListener('click', () => {
        currentStepIndex--;
        showStep(currentStepIndex);
    });

    // Initial step display
    showStep(currentStepIndex);
});