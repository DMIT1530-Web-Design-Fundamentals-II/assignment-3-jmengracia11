document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.logo-container img[alt="arrow"]'); // Select the menu icon
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
