/**
 * Q7 – Search Courses
 */

$(document).ready(function() {
    const $searchInput = $('#search-input');
    const $courseItems = $('.course-item');
    const $countDisplay = $('#match-count-display');
    const totalCourses = $courseItems.length;

    // Helper to update the count display
    function updateCount(count) {
        $countDisplay.text(`Showing ${count} course${count === 1 ? '' : 's'}.`);
    }

    // 1. Search input filters courses in real-time using .keyup().
    $searchInput.on('keyup', function() {
        const searchTerm = $searchInput.val().toLowerCase().trim();
        let matchCount = 0;

        // 5. Clear search → reset list to show all courses.
        if (searchTerm === '') {
            $courseItems.show();
            // Clear all previous highlights
            $courseItems.find('span').css('background-color', 'transparent'); 
            updateCount(totalCourses);
            return;
        }

        $courseItems.each(function() {
            const $item = $(this);
            const title = $item.data('title').toLowerCase();
            const category = $item.data('category').toLowerCase();
            const $titleSpan = $item.find('.course-title');
            const $categorySpan = $item.find('.course-category');

            $titleSpan.css('background-color', 'transparent'); 
            $categorySpan.css('background-color', 'transparent'); 

            if (title.includes(searchTerm) || category.includes(searchTerm)) {
                matchCount++;
                // 3. Toggle visibility of courses not matching search.
                $item.show();
                
                // 2. Highlight matched text using .css().
                // Simple highlighting: Highlight the whole container text that matched
                if (title.includes(searchTerm)) {
                    $titleSpan.css('background-color', 'yellow');
                }
                if (category.includes(searchTerm)) {
                    $categorySpan.css('background-color', 'yellow');
                }
            } else {
                // 3. Toggle visibility of courses not matching search.
                $item.hide();
            }
        });

        // 4. Show count of matched courses dynamically.
        updateCount(matchCount);
    });

    // 5. Clear Search button functionality
    $('#clear-search-btn').on('click', function() {
        $searchInput.val('');
        $searchInput.trigger('keyup'); // Re-run the keyup logic to reset the display
    });

    // Initial count
    updateCount(totalCourses);
});