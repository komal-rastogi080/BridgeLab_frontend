document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('my-dropdown');
    const dropdownButton = dropdown.querySelector('.dropdown-button');
    const optionsList = dropdown.querySelector('.dropdown-options');

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        const isShown = optionsList.classList.toggle('show');
        dropdownButton.setAttribute('aria-expanded', isShown);
    };

    // 1. Button shows/hides options
    dropdownButton.addEventListener('click', toggleDropdown);

    // 2. Clicking an option updates the button text
    optionsList.addEventListener('click', (event) => {
        const selectedOption = event.target.closest('li');
        if (selectedOption) {
            dropdownButton.textContent = selectedOption.textContent;
            toggleDropdown(); // Close after selection
        }
    });

    // 3. Clicking outside closes the dropdown (using capturing phase)
    // The event listener is attached to the document in the CAPTURING phase (true as the third argument)
    document.addEventListener('click', (event) => {
        const isClickInside = dropdown.contains(event.target);

        // Check if dropdown is open AND the click was outside the dropdown
        if (!isClickInside && optionsList.classList.contains('show')) {
            toggleDropdown(); // Close it
        }
    }, true); // The 'true' enables the capturing phase
});