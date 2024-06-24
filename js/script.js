'use strict';

/**
 * chuyển đổi thanh điều hướng
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * tiêu đề hoạt động khi cuộn
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});
/**
 * slide show
 */

const listImage = document.querySelector('.list-images')
const imgs = document.getElementsByTagName('img')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const length = imgs.length
let current = 0

const handleChangeSlide = () => {
    if (current == length - 1) {
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')

    } else {
        current ++
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
}

let handleEventChangeSlide = setInterval(handleChangeSlide, 4000)

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    if (current == 0) {
        current = length - 1
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    } else {
        current --
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})