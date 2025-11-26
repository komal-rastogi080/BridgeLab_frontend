/**
 * Q1 – Welcome Page Greeting
 */

$(document).ready(function() {
    const $greetingText = $('#greeting-text');
    const $welcomeMessage = $('#welcome-message');

    // 1. On page load → display a personalized greeting based on time of day
    function getPersonalizedGreeting() {
        const hour = new Date().getHours();
        let greeting = "Hello, Visitor!";

        if (hour >= 5 && hour < 12) {
            greeting = "Good Morning! ☀️";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Good Afternoon! ☕";
        } else {
            greeting = "Good Evening! 🌙";
        }
        return greeting;
    }

    // Set the initial greeting
    $greetingText.text(getPersonalizedGreeting());

    // 2. Button “Change Greeting” → changes text to a motivational quote.
    $('#change-btn').on('click', function() {
        const quotes = [
            "“The best way to predict the future is to create it.”",
            "“The only way to do great work is to love what you do.”",
            "“Believe you can and you're halfway there.”"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        // .text() sets the content of the selected element.
        $greetingText.text(randomQuote); 
    });

    // 3. Toggle visibility of a welcome message using another button.
    $('#toggle-btn').on('click', function() {
        // .toggle() is a simple method to show an element if hidden and hide it if visible.
        $welcomeMessage.toggle();
        const currentText = $(this).text();
        // Update button text based on current action
        $(this).text(currentText === 'Toggle Welcome Message' ? 'Show Welcome Message' : 'Toggle Welcome Message');
    });

    // 4. Show an alert when greeting is clicked.
    $greetingText.on('click', function() {
        // .on() attaches an event handler.
        alert(`You clicked the greeting: "${$(this).text()}"`);
    });
});