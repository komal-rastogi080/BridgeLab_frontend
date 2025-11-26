document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeButtons = document.querySelectorAll('.theme-buttons button');
    const themeDisplay = document.getElementById('current-theme-display');
    const themePrefix = 'theme'; // Used for class naming: light-theme, dark-theme, etc.

    const applyTheme = (themeName) => {
        const themeClass = `${themeName}-${themePrefix}`;
        
        // Remove existing theme classes (assuming a class for each theme)
        body.className = body.className.split(' ').filter(c => !c.endsWith(`-${themePrefix}`)).join(' ');
        
        // Add new theme class
        body.classList.add(themeClass);
        
        // Apply theme using setAttribute() for the custom data attribute
        body.setAttribute('data-theme', themeName);

        // Update display text
        themeDisplay.textContent = themeName.charAt(0).toUpperCase() + themeName.slice(1);
    };

    themeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const themeName = event.target.getAttribute('data-theme-name');
            if (themeName) {
                applyTheme(themeName);
            }
        });
    });

    // Optional: Load saved theme from the custom attribute on initial load
    const initialTheme = body.getAttribute('data-theme') || 'light';
    applyTheme(initialTheme);
});