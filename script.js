document.addEventListener('DOMContentLoaded', function() {
    var menuOpenIcon = document.getElementById('menu-open-icon');
    var menuCloseIcon = document.getElementById('menu-close-icon');
    var toggleButton = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.navigation');

    toggleButton.addEventListener('click', function() {
        var isOpen = navigation.classList.contains('open');
        navigation.classList.toggle('open', !isOpen);
        menuOpenIcon.style.display = isOpen ? 'block' : 'none';
        menuCloseIcon.style.display = isOpen ? 'none' : 'block';
    });
});