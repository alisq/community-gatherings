console.log("Hello, World!");

document.querySelectorAll(".content").forEach(content => {
    content.addEventListener("wheel", (e) => {
        if (content.scrollWidth > content.clientWidth) {
            content.scrollLeft += e.deltaY; // Try without multiplying
        }
    });
});

