document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalContent = document.getElementById('modal-content-container');

    const openModal = (imageSrc) => {
        modalImage.src = imageSrc;
        modal.classList.add('active');
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modalImage.src = ''; // Clear image source
    };

    // Event Delegation for gallery items
    galleryGrid.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'IMG') {
            const fullImageSrc = target.getAttribute('data-full');
            openModal(fullImageSrc);
        }
    });

    // Close modal when clicking outside the modal-content (i.e., on the modal background)
    modal.addEventListener('click', (event) => {
        // If the click target is the modal itself (the overlay)
        if (event.target === modal) {
            closeModal();
        }
    });

    // Use event.stopPropagation() so clicking inside modal does not close it
    modalContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Optional: Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});