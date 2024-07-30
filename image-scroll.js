gsap.registerPlugin(ScrollTrigger);

function generateGridPattern(images) {
    const columnPattern8 = [4, 2, 5, 7, 3, 6, 1, 8];
    const columnPattern4 = [4, 2, 3, 1];

    return images.map((imageUrl, index) => ({
        imageUrl,
        r8: index + 1,
        c8: columnPattern8[index % columnPattern8.length],
        r4: index * 2 + 1,
        c4: columnPattern4[index % columnPattern4.length]
    }));
}

function generateGridHTML(gridItems) {
    return gridItems.map(item => `
        <div class="grid__item" style="--r8: ${item.r8}; --c8: ${item.c8}; --r4: ${item.r4}; --c4: ${item.c4};">
            <div class="grid__item-img" style="background-image: url(${item.imageUrl});"></div>
        </div>
    `).join('');
}

// Collect image URLs using your method
const cmsImages = document.querySelectorAll('[data-img="grid-img"]');

let imageUrls = [];

for (let cmsImage of cmsImages) {
    imageUrls.push(cmsImage.src);
}

// Generate grid items and HTML
const gridItems = generateGridPattern(imageUrls);
const gridHTML = generateGridHTML(gridItems);

// Insert the generated HTML into the dynamic grid container
const dynamicGrid = document.querySelector('.dynamic-grid');
if (dynamicGrid) {
    dynamicGrid.innerHTML = gridHTML;
    // Hide the original Collection List
    const originalList = document.querySelector('.w-dyn-list');
    if (originalList) originalList.style.display = 'none';

    gsap.utils.toArray('.grid__item').forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play reverse play reverse"
          }
        });
    });
}

// Check if the DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGrid);
} else {
    initializeGrid();
}

