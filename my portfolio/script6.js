// JavaScript for Scroll Animation and Background Color Change
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const colors = [ '#e0faa0','#79fc7b','#d994eb']; // Array of background colors

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight * 0.75; // 75% of the viewport
        
        if (sectionTop < triggerHeight) {
            // Add 'active' class for animation when the section is in view
            section.classList.add('active');

            // Change the background color of the section (or the body)
            document.body.style.backgroundColor = colors[index % colors.length];
        } else {
            // Remove 'active' class if the section is scrolled out of view
            section.classList.remove('active');
        }
    });
});
