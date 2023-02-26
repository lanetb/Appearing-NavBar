const nav = document.querySelector('nav');


window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        nav.classList.add('nav-scroll');
    } else if (window.scrollY <= 300){
        nav.classList.remove('nav-scroll');
    }
});

const smallNav = document.querySelector('.fa-solid .fa-bars');

smallNav.onClick = function() {
    navBar = document.querySelector('.navBar');
    navBar.classList.toggle('active');
}
