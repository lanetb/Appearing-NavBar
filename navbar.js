const nav = document.querySelector('nav');
const toggle = document.querySelector('.toggle-btn');
const toggleIcon = document.querySelector('.toggle-btn i');
const dropDown = document.querySelector('.drop-down');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        nav.classList.add('nav-scroll');
        dropDown.style.setProperty('background','rgba(0, 0, 0, .15);');
    } else if (window.scrollY <= 300){
        nav.classList.remove('nav-scroll');
        dropDown.style.setProperty('background','rgba(255, 255, 255, .15);');
    }
});



toggle.onClick = function() {
    dropDown.classList.add('open');
    const isOpen = dropDown.classList.contains('open');

    toggleIcon.classList = isOpen ? 'fas fa-xmark' : 'fas fa-bars';

}
