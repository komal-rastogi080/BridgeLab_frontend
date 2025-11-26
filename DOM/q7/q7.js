document.addEventListener('DOMContentLoaded', () => {
    const trackBox = document.getElementById('track-box');
    const coordsDisplay = document.getElementById('coords-display');

    // Live clientX, clientY on mousemove
    trackBox.addEventListener('mousemove', (event) => {
        // clientX and clientY provide coordinates relative to the viewport
        const clientX = event.clientX;
        const clientY = event.clientY;

        coordsDisplay.innerHTML = `Client X: <span>${clientX}</span> | Client Y: <span>${clientY}</span>`;
    });

    // Clear coordinates when mouse leaves the box
    trackBox.addEventListener('mouseleave', () => {
        coordsDisplay.innerHTML = `Client X: <span>--</span> | Client Y: <span>--</span>`;
    });

    // Drop red dot on double-click
    trackBox.addEventListener('dblclick', (event) => {
        // Get the coordinates relative to the viewport
        const clickX = event.clientX;
        const clickY = event.clientY;

        // Get the box's position/size data
        const boxRect = trackBox.getBoundingClientRect();

        // Calculate position relative to the box's top-left corner
        const relativeX = clickX - boxRect.left;
        const relativeY = clickY - boxRect.top;

        // Create the red dot element
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        // Position the dot
        dot.style.left = `${relativeX}px`;
        dot.style.top = `${relativeY}px`;

        trackBox.appendChild(dot);
    });
});