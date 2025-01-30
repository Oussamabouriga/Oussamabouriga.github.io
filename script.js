document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    // Text animation targets
    const textSpan = document.querySelector('.text-animation span');

    // Replace the original "Mobile Developer" text
    // with the new "Développeur Mobile | Ingénieur en IA"
    // so it will type out that phrase.
    // If you prefer a static text, you can remove the animation logic.
    function animateText() {
      textSpan.textContent = "Mobile Developer and AI Engineer";
    }
    animateText();

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
});
