/**
 * Q4 – Special Offer Banner
 */

$(document).ready(function() {
    const $banner1 = $('#banner1');
    const $banner3 = $('#banner3');
    const $banner4 = $('#banner4');
    const $allRotatableBanners = $('.offer-banner');
    let rotationInterval;
    let currentBannerIndex = 0;

    // 1. “Hide” button → hide specific banners.
    $('#hide-btn').on('click', function() {
        // Uses attribute selector for flexibility: div[data-banner="specific-hide"]
        $('div[data-banner="specific-hide"]').hide(400); // .hide() hides the element instantly or with duration.
    });

    // 2. “Show” button → show hidden banners.
    $('#show-btn').on('click', function() {
        // .show() shows the element instantly or with duration.
        $('div[data-banner="specific-hide"]').show(400);
    });

    // 3. “Slide Up/Down” buttons → toggle banners.
    $('#slide-toggle-btn').on('click', function() {
        // .slideToggle() shows/hides the element with a smooth slide animation.
        $banner3.slideToggle(600);
    });

    // 4. “Fade In/Fade Out” → show/hide banners gradually.
    $('#fade-toggle-btn').on('click', function() {
        // .fadeToggle() shows/hides the element with a gradual fade animation.
        $banner4.fadeToggle(600);
    });

    // 5. Automatically rotate through banners every 5 seconds using .fadeIn()/.fadeOut().
    
    // Set the first banner to display relative static for a clean start
    $allRotatableBanners.css('position', 'absolute'); 
    $banner1.show();

    function rotateBanners() {
        const nextBannerIndex = (currentBannerIndex + 1) % $allRotatableBanners.length;
        
        // .fadeOut() gradually hides the current banner
        $($allRotatableBanners[currentBannerIndex]).fadeOut(1000, function() {
            // .fadeIn() gradually shows the next banner
            $($allRotatableBanners[nextBannerIndex]).fadeIn(1000);
            currentBannerIndex = nextBannerIndex;
        });
    }

    // Start the rotation
    rotationInterval = setInterval(rotateBanners, 5000);

    // Stop rotation button
    $('#stop-rotation-btn').on('click', function() {
        clearInterval(rotationInterval);
        $(this).text('Rotation Stopped').prop('disabled', true);
        console.log("Banner rotation stopped.");
    });
});