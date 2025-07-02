// Function to size the grid items
function resizeGridItems() {
    const grid = document.querySelector('.section--collage__items');
    if (!grid) return;

    // Get the CSS-defined grid-auto-rows and grid-row-gap
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const items = grid.querySelectorAll('.section--collage__item');

    items.forEach(item => {
        // Find the main media element (either an image or a video container)
        const mediaElement = item.querySelector('img, .video-container');
        const captionElement = item.querySelector('.block--caption');
        
        let totalHeight = 0;
        if (mediaElement) {
            totalHeight += mediaElement.getBoundingClientRect().height;
        }
        if (captionElement) {
            totalHeight += captionElement.getBoundingClientRect().height;
        }

        // Calculate how many rows the item should span based on its total height
        const rowSpan = Math.ceil((totalHeight + rowGap) / (rowHeight + rowGap));
        
        // Apply the new row span to the grid item
        item.style.gridRowEnd = 'span ' + rowSpan;
    });
}

// Recalculate layout when the page loads and when the window is resized
window.addEventListener('load', resizeGridItems);
window.addEventListener('resize', resizeGridItems);