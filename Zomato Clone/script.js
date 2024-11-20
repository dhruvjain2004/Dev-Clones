// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to input placeholder
    const searchInput = document.querySelector('main input');
    searchInput.addEventListener('focus', () => {
        searchInput.placeholder = 'Start typing...';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.placeholder = 'Search for restaurant, cuisine or a dish';
    });

    // Smooth scroll for header links (if linked to sections)
    const headerLinks = document.querySelectorAll('header ul li a');
    headerLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });

    // Add animation to logo on hover
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.1)';
        logo.style.transition = 'transform 0.3s ease';
    });

    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });
});
