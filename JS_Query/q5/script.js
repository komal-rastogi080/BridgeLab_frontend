/**
 * Q5 – Team Members Directory
 */

$(document).ready(function() {
    const $employees = $('.employee');
    const $managers = $('.manager');
    const $departments = $('.dept-title');

    // Helper to clear all highlights
    function clearHighlights() {
        $employees.removeClass('direct-report-highlight sibling-highlight');
        $('.department').removeClass('dept-highlight');
        $('.contact-info').remove();
    }

    // 1. Click a manager → highlight all direct reports.
    $managers.on('click', function(event) {
        event.stopPropagation(); // Prevent department click logic from firing
        clearHighlights();
        
        // .parent() gets the immediate parent (.team-members).
        // .children() gets all immediate children (employees).
        // .not($(this)) excludes the manager themselves from the highlight.
        $(this).parent().children('.employee').not($(this)).addClass('direct-report-highlight');
    });

    // 2. Hover on an employee → show contact info using .next().
    $employees.hover(
        function() {
            const contact = $(this).data('contact');
            // Dynamically insert the contact info element
            const $contactInfo = $('<div class="contact-info">').text(`Contact: ${contact}`);
            // .append() adds the new element inside the current employee div
            $(this).append($contactInfo); 
            $contactInfo.show();
        },
        function() {
            // Mouse Leave: Remove the contact info element
            $(this).find('.contact-info').remove(); 
        }
    );

    // 3. Click on a department → change background of all members in that department using .children().
    $departments.on('click', function() {
        clearHighlights();
        
        // Get the parent section
        const $deptSection = $(this).closest('.department');
        $deptSection.toggleClass('dept-highlight');

        // .find('.employee') searches all descendants for .employee elements
        // .children('.team-members') gets the immediate container
        // .children('.employee') gets the direct reports within the container
        $deptSection.find('.team-members').children('.employee').toggleClass('dept-highlight');
    });

    // 4. Select a random employee → highlight sibling employees.
    $('body').on('keypress', function(e) {
        if (e.key === 'r' || e.key === 'R') {
            clearHighlights();
            
            const randomIndex = Math.floor(Math.random() * $employees.length);
            const $randomEmployee = $($employees[randomIndex]);
            
            // .siblings() selects all siblings of the random employee.
            $randomEmployee.siblings('.employee').addClass('sibling-highlight');
            $randomEmployee.text($randomEmployee.text() + " <--- Randomly Selected!");
            
            // Remove the temporary text after a short delay
            setTimeout(() => {
                $randomEmployee.text($randomEmployee.text().replace(" <--- Randomly Selected!", ""));
            }, 1500);
        }
    });

    // 5. Collapse/expand team using .parent() and .find().
    $departments.on('dblclick', function() {
        const $deptSection = $(this).closest('.department');
        
        // .find() searches descendants for the team-members container
        $deptSection.find('.team-members').slideToggle(400);
        
        // Clear any highlight state when collapsing
        clearHighlights();
    });
});