
(function () {
    window.onscroll = () => {
        if (window.pageYOffset > 300) {
            header.classList.remove("container_header-burger-open")
            firstLine.classList.remove('burger_line_1_open')
            secondLine.classList.remove('burger_line_2_open')
            lastLine.classList.remove('burger_line_3_open')
            
        }
    };
}());

const body = document.querySelector(".body")
const burger = document.querySelector(".header_burger") 
const firstLine = document.querySelector(".burger_line_1")
const secondLine = document.querySelector(".burger_line_2")
const lastLine = document.querySelector(".burger_line_3")
const headerNav = document.querySelector(".header_nav")
const header = document.querySelector(".container_header")
const feedbackPopupContainer = document.querySelector(".feedback-popup-item")
const feedbackPopup = document.querySelector(".feedback-popup")
const feedbackPopupClose = document.querySelector(".feedback-popup-close")
let feedbackItems = document.querySelectorAll(".feedback-item")


const burgerOpen = () => {
    header.classList.toggle("container_header-burger-open")
    firstLine.classList.toggle('burger_line_1_open')
    secondLine.classList.toggle('burger_line_2_open')
    lastLine.classList.toggle('burger_line_3_open')
    body.classList.toggle("background")
 }

burger.addEventListener("click", burgerOpen)
body.addEventListener("click", () => {
    header.classList.remove("container_header-burger-open")
    firstLine.classList.remove('burger_line_1_open')
    secondLine.classList.remove('burger_line_2_open')
    lastLine.classList.remove('burger_line_3_open')
    body.classList.remove("background")
})

function togglePopup() {
    feedbackPopup.classList.add("feedback-popup-opened");
    feedbackPopupContainer.innerHTML = this.innerHTML;
    body.classList.add("background");
}

function closePopup(el) {
    let target = el.target;

    if (target === feedbackPopup || target === feedbackPopupClose) {
        feedbackPopup.classList.remove("feedback-popup-opened");
        body.classList.remove("background");
    }
}

function media() {
        for (let item of feedbackItems) {
            item.addEventListener("click", togglePopup);
        }
}

feedbackPopup.addEventListener("click", (el) => closePopup(el));
window.addEventListener("resize", media);
media();
