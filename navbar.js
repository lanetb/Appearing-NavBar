const nav = document.querySelector('nav');


window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        nav.classList.add('nav-scroll');
    } else if (window.scrollY <= 300){
        nav.classList.remove('nav-scroll');
    }
});
