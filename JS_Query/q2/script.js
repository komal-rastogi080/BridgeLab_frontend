/**
 * Q2 – Product Highlight
 */

$(document).ready(function() {
    // 4. Apply different styles to products with discounts using attribute selector.
    // [data-discount="true"] selects elements with the data-discount attribute set to "true".
    $('div[data-discount="true"]').addClass('discount-product');

    // 1. Click on a product → highlight background.
    $('.product-card').on('click', function(event) {
        // Remove 'highlight' from all siblings and toggle it on the clicked one.
        // $(this) refers to the element that triggered the event.
        $('.product-card').removeClass('highlight');
        $(this).addClass('highlight');

        // 5. Show an alert if a product is out of stock (using data attribute).
        const stockStatus = $(this).data('stock'); // .data('stock') retrieves data-stock attribute value.
        if (stockStatus === 'out') {
            alert(`⚠️ WARNING: ${$(this).find('h3').text()} is currently out of stock!`);
        }
    });

    // 2. Hover over a product → show additional product details.
    $('.product-card').hover(
        function() {
            // Mouse Enter: .find() searches descendants for the .details class and .show() displays it.
            $(this).find('.details').show();
        },
        function() {
            // Mouse Leave: .hide() hides the element.
            $(this).find('.details').hide();
        }
    );
    
    // 3. Clicking a “Favorite” icon → toggles a “selected” class.
    $('.favorite-icon').on('click', function(event) {
        // Use event.stopPropagation() to prevent the click event from bubbling up 
        // to the parent .product-card and triggering its highlight logic.
        event.stopPropagation();
        
        // .toggleClass() adds the class if it's not present, and removes it if it is.
        $(this).toggleClass('selected');
        
        // Toggle FontAwesome icons for a full/empty heart effect
        $(this).toggleClass('far fa-heart fas fa-heart');
    });
});