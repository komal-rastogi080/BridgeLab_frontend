/**
 * Q3 – Interactive FAQ
 */

$(document).ready(function() {
    const $questions = $('.question');
    const $answers = $('.answer');
    const $inputs = $('.ticket-input');

    // 1. Click on a question → toggle answer visibility.
    $questions.on('click', function() {
        // .next() selects the immediate following sibling of the clicked question (which is the answer).
        // .slideToggle() provides a smooth animation for showing/hiding the element.
        $(this).next('.answer').slideToggle(300);
    });

    // 2. Hover → change question color.
    $questions.hover(
        function() {
            // Mouse Enter: .addClass() applies the style.
            $(this).addClass('hover-color');
        },
        function() {
            // Mouse Leave: .removeClass() removes the style.
            $(this).removeClass('hover-color');
        }
    );

    // 3. Double-click question → collapse all answers.
    $questions.on('dblclick', function() {
        // .slideUp() smoothly hides all answers.
        $answers.slideUp(500);
    });

    // 4. Focus on answer input (if any) → highlight parent question.
    $inputs.on('focus', function() {
        // .closest() traverses up the DOM tree starting from the input 
        // to find the nearest ancestor with the class .faq-item.
        // .find() then searches within that item for the .question and adds the highlight class.
        $(this).closest('.faq-item').find('.question').addClass('focus-highlight');
    });

    // 5. Blur from input → reset background color.
    $inputs.on('blur', function() {
        // .removeClass() resets the style.
        $(this).closest('.faq-item').find('.question').removeClass('focus-highlight');
    });
});