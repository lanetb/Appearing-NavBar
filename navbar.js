const nav = document.querySelector('nav');


window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        nav.classList.add('nav-scroll');
    } else if (window.scrollY <= 300){
        nav.classList.remove('nav-scroll');
    }
});

const toggle = document.querySelector('.toggle-btn');
const toggleIcon = document.querySelector('.toggle-btn i');
const dropDown = document.querySelector('.drop-down');

toggle.onClick = function() {
    dropDown.classList.toggle('.open');
    const isOpen = dropDown.classList.contains('open');

    toggleIcon.classList = isOpen ? 'fas fa-xmark' : 'fas fa-bars';

}
