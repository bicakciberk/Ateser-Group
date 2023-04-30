const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('#nav-bar');
const video = document.querySelector('.video');
const body = document.querySelector('body');
const dark = document.querySelectorAll('.dark');
const play = document.querySelector('.fa-play');


video.addEventListener('click', function () {
    if (video.paused) {
        play.style.display = 'none'
        video.play();
        dark.forEach((dark) => {
            dark.classList.add('filter')
        })
    } else {
        play.style.display = 'block'
        video.pause()
        dark.forEach((dark) => {
            dark.classList.remove('filter')
        })
    }
})

play.addEventListener('click', function () {
    if (video.paused) {
        play.style.display = 'none'
        video.play();
        dark.forEach((dark) => {
            dark.classList.add('filter')
        })
    } else {
        play.style.display = 'block'
        video.pause()
        dark.forEach((dark) => {
            dark.classList.remove('filter')
        })
    }
})

function menu() {
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
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



