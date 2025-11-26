document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('text-area');
    const charCountSpan = document.getElementById('char-count');
    const resetBtn = document.getElementById('reset-btn');
    const MAX_CHARS = 100;
    const WARNING_YELLOW = 20;

    const updateCounter = () => {
        const currentLength = textArea.value.length;
        const remaining = MAX_CHARS - currentLength;
        
        charCountSpan.textContent = remaining;
        
        // Remove existing warning classes
        charCountSpan.classList.remove('yellow-warning', 'red-warning');

        if (remaining <= 0) {
            charCountSpan.classList.add('red-warning');
        } else if (remaining <= WARNING_YELLOW) {
            charCountSpan.classList.add('yellow-warning');
        }
    };

    // Live update on input event
    textArea.addEventListener('input', updateCounter);

    // Prevent further typing when max characters reached
    textArea.addEventListener('keydown', (event) => {
        const currentLength = textArea.value.length;
        if (currentLength >= MAX_CHARS && event.key.length === 1) { // Check for character keys
            event.preventDefault();
        }
    });

    // Reset button functionality
    resetBtn.addEventListener('click', () => {
        textArea.value = '';
        updateCounter();
    });

    // Initial load
    updateCounter();
});