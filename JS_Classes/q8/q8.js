/**
 * Q 8: Dynamic Object Updater
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initial user object
    const user = { 
        name: "John", 
        email: "john@mail.com", 
        age: 21 
    };

    const form = document.getElementById('user-update-form');
    const outputPre = document.querySelector('#output-data pre');
    
    // Function to render the current user object to the DOM
    const renderUser = () => {
        outputPre.textContent = JSON.stringify(user, null, 2);
    };

    // Function to initialize form with current object values
    const initializeForm = () => {
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('age').value = user.age;
    };

    // Form submission handler
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        const formData = new FormData(form);
        
        // Update the user object in real time
        // Note: FormData values are strings, so 'age' needs conversion
        user.name = formData.get('name');
        user.email = formData.get('email');
        user.age = parseInt(formData.get('age'), 10);

        console.log('User object updated:', user);
        
        // Show updated object details below the form
        renderUser();
    });

    // Initial setup
    initializeForm();
    renderUser();
});