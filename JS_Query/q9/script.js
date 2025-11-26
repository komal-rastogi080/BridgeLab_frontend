/**
 * Q9 – Multi-JQuery Widgets
 * Note: This file relies on the variables jq1 and jq2 being globally set 
 * in the q9_multi_jquery.html script block using jQuery.noConflict().
 */

// We use jq1 and jq2 instead of $ to manage both versions simultaneously.

// ----------------------------------------------------
// 1. Version 1 (jq1) → handles carousel slider rotation & 3. highlights active widget.
// ----------------------------------------------------
jq1(document).ready(function() {
    const $slides = jq1('#carousel-slides .carousel-slide');
    let currentIndex = 0;

    // 3. Version 1 → highlights active widget.
    jq1('#carousel-widget').addClass('active-widget');

    function rotateSlides() {
        $slides.hide();
        jq1($slides[currentIndex]).fadeIn(1000);
        currentIndex = (currentIndex + 1) % $slides.length;
    }

    // Initial show
    rotateSlides();

    // 1. Version 1 → handles carousel slider rotation.
    setInterval(rotateSlides, 3000);
});

// ----------------------------------------------------
// 2. Version 2 (jq2) → manages modal popups & 4. attaches tooltips on hover.
// ----------------------------------------------------
jq2(document).ready(function() {
    const $modal = jq2('#notification-modal');
    
    // 2. Version 2 → manages modal popups for notifications.
    jq2('#show-modal-btn').on('click', function() {
        $modal.show();
    });

    jq2('#close-modal-btn').on('click', function() {
        $modal.hide();
    });
    
    // Clicking outside modal closes it (using jq2)
    $modal.on('click', function(event) {
        if (event.target === this) {
            $modal.hide();
        }
    });

    // 4. Version 2 → attaches tooltips on hover.
    // The CSS handles the visibility toggle, but we attach a simplified mouseover 
    // event using jq2 for demonstration purposes.
    jq2('.tooltip-container').on({
        mouseenter: function() {
            console.log("jq2: Tooltip activated on hover.");
        },
        mouseleave: function() {
            console.log("jq2: Tooltip deactivated.");
        }
    });
});