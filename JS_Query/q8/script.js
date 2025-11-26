/**
 * Q8 – Dynamic Blog Posts
 */

$(document).ready(function() {
    const $postList = $('#post-list');
    let nextPostId = 6;

    // 1. “Add New Post” → append a new post to the list.
    $('#add-new-btn').on('click', function() {
        const newPost = `
            <li class="blog-post" data-id="${nextPostId++}">
                <h3>New Draft Post ${nextPostId - 1}</h3>
                <p>This is a dynamically appended post. Keywords: Dynamic.</p>
            </li>
        `;
        // .append() inserts content at the end of the selected element's content.
        $postList.append(newPost);
    });

    // 2. “Prepend Featured Post” → add a post at the top.
    $('#prepend-featured-btn').on('click', function() {
        const featuredPost = `
            <li class="blog-post" data-id="${nextPostId++}" style="border: 2px solid green;">
                <h3>🎉 Featured: ES6 Classes Tutorial</h3>
                <p>A must-read on modern JavaScript classes. Keywords: ES6, Classes.</p>
            </li>
        `;
        // .prepend() inserts content at the beginning of the selected element's content.
        $postList.prepend(featuredPost);
    });

    // 3. “Remove Last Post” → delete last element.
    $('#remove-last-btn').on('click', function() {
        // .children() gets the immediate children, .last() selects the final one, and .remove() deletes it from the DOM.
        $postList.children('.blog-post').last().remove();
    });

    // 4. Add tags to posts → use .before()/.after() for placement.
    $('#add-tags-btn').on('click', function() {
        $postList.children('.blog-post').each(function(index, element) {
            const $post = $(element);
            
            // Check if tags already exist to prevent duplicates
            if ($post.prev('.tag-container').length === 0) {
                const tagContainer = $('<div class="tag-container">');
                
                // .before() inserts content immediately before the selected element.
                $post.before(tagContainer);

                // .after() inserts content immediately after the selected element.
                $post.after('<hr style="border: 1px dashed #eee;">');

                // Add sample tags inside the container
                tagContainer.append('<span class="tag">Tech</span>');
                if (index % 2 === 0) {
                    tagContainer.append('<span class="tag">Trending</span>');
                }
            }
        });
        $(this).prop('disabled', true).text('Tags Added');
    });

    // 5. Highlight posts with specific keywords dynamically.
    $('#highlight-keyword-btn').on('click', function() {
        const keyword = 'jQuery';
        $postList.children('.blog-post').each(function() {
            const $post = $(this);
            // .text() gets the combined text content of the element and its descendants.
            if ($post.text().includes(keyword)) {
                $post.addClass('highlight');
            } else {
                $post.removeClass('highlight');
            }
        });
    });
});