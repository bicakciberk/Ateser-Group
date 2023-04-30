const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('#nav-bar');


function menu() {
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active')
    })
}
function navColor() {
    window.addEventListener('scroll', function () {
        if (this.scrollY > 0) {
            navBar.style.backgroundColor = "#000000";
        } else {
            navBar.style.backgroundColor = "transparent";
        }
    })
}

navColor();
menu();
