console.log("Hello, World!");

document.querySelectorAll(".content").forEach(content => {
    content.addEventListener("wheel", (e) => {
        if (content.scrollWidth > content.clientWidth) {
            content.scrollLeft += e.deltaY; // Try without multiplying
        }
    });
});


// TRYING TO MAKE SCROLLBARS 

const scrollContainer = document.querySelector('#top-content');
const scrollbar = document.querySelector('.custom-scrollbar');
const scrollThumb = document.querySelector('.scroll-thumb');

function updateThumbPosition() {
  const scrollPercent = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth);
  scrollThumb.style.left = scrollPercent * (scrollbar.clientWidth - scrollThumb.clientWidth) + 'px';
}

// Sync scrollbar when user scrolls
scrollContainer.addEventListener('scroll', updateThumbPosition);

// Make the scrollbar thumb draggable
let isDragging = false;
let startX, scrollLeftStart;

scrollThumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  scrollLeftStart = scrollContainer.scrollLeft;
  scrollThumb.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  const scrollAmount = (dx / scrollbar.clientWidth) * scrollContainer.scrollWidth;
  scrollContainer.scrollLeft = scrollLeftStart + scrollAmount;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  scrollThumb.style.cursor = 'grab';
});

// Ensure the thumb size matches scroll ratio
function updateThumbSize() {
  const scrollRatio = scrollContainer.clientWidth / scrollContainer.scrollWidth;
  scrollThumb.style.width = `${scrollRatio * scrollbar.clientWidth}px`;
}

// Update on resize
window.addEventListener('resize', updateThumbSize);
updateThumbSize(); // Run initially
