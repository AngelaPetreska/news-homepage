document.addEventListener('DOMContentLoaded', function() {
    let menuOpenIcon = document.getElementById('menu-open-icon');
    let menuCloseIcon = document.getElementById('menu-close-icon');
    let toggleButton = document.querySelector('.menu-toggle');
    let navigation = document.querySelector('.navigation');

    toggleButton.addEventListener('click', function() {
        let isOpen = navigation.classList.contains('open');
        navigation.classList.toggle('open', !isOpen);
        menuOpenIcon.style.display = isOpen ? 'block' : 'none';
        menuCloseIcon.style.display = isOpen ? 'none' : 'block';
    });
});