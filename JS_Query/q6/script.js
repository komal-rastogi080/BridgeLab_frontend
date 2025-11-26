/**
 * Q6 – Event Subscription Panel
 */

$(document).ready(function() {
    const $topicList = $('#topic-list');
    const $statusDisplay = $('#notifications-status');
    const $actionMessage = $('#action-message');
    let notificationsEnabled = false;

    // Helper to update the global status display
    function updateGlobalStatus() {
        const subscribedCount = $topicList.find('.unsubscribe-btn').length;
        notificationsEnabled = subscribedCount > 0;
        
        if (notificationsEnabled) {
            $statusDisplay.text("ENABLED").css('color', 'green');
        } else {
            $statusDisplay.text("DISABLED").css('color', 'red');
        }
    }

    // Helper to show success message
    function showSuccess(topic, action) {
        $actionMessage.text(`${topic} successfully ${action}.`).fadeIn(300).delay(1500).fadeOut(500);
    }
    
    // --- Centralized Event Handler using Event Delegation ---

    // 1. Subscribe and 2. Unsubscribe logic (using event delegation on the list)
    // Event delegation ensures that dynamically added items (scenario 3) also work.
    $topicList.on('click', '.status-btn', function() {
        const $button = $(this);
        const $item = $button.closest('.subscription-item');
        const topic = $item.data('topic');
        
        if ($button.hasClass('subscribe-btn')) {
            // 1. Subscribe → enable notifications.
            $button.removeClass('subscribe-btn').addClass('unsubscribe-btn').text('Unsubscribe');
            showSuccess(topic, 'subscribed');
        } else {
            // 2. Unsubscribe → disable notifications.
            $button.removeClass('unsubscribe-btn').addClass('subscribe-btn').text('Subscribe');
            showSuccess(topic, 'unsubscribed');
        }
        
        updateGlobalStatus();
    });

    // 3. Dynamically add new subscription topics → attach .on() click events.
    $('#add-topic-btn').on('click', function() {
        const newTopic = $('#new-topic-input').val().trim();
        if (newTopic) {
            const newItem = `
                <li class="subscription-item" data-topic="${newTopic}">
                    ${newTopic} 
                    <button class="status-btn subscribe-btn">Subscribe</button>
                </li>
            `;
            // .append() adds the new item to the end of the list
            $topicList.append(newItem);
            $('#new-topic-input').val('');
            showSuccess(newTopic, 'added');
        }
    });

    // 4. Remove specific subscription → detach .off() event.
    // We demonstrate detaching by creating a temporary custom event 'remove-topic'
    // and removing it with .off()
    $topicList.on('dblclick', '.subscription-item', function() {
        const $item = $(this);
        $item.trigger('remove-topic'); // Trigger the custom event
    });
    
    $topicList.on('remove-topic', '.subscription-item', function() {
        const topic = $(this).data('topic');
        $(this).fadeOut(400, function() {
            // Remove from DOM after fading
            $(this).remove(); 
            updateGlobalStatus();
            showSuccess(topic, 'removed');
        });
        
        // Use .off() to detach the 'remove-topic' handler for this specific element.
        // Although the element is being removed, this is the canonical way to show .off().
        $(this).off('remove-topic'); 
    });


    // Initial status check
    updateGlobalStatus();
});