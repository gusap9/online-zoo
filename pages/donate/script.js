(function () {
        window.onscroll = () => {
            if (window.pageYOffset > 1) {
                header.classList.remove("container_header-burger-open")
                firstLine.classList.remove('burger_line_1_open')
                secondLine.classList.remove('burger_line_2_open')
                lastLine.classList.remove('burger_line_3_open')
                body.classList.remove("background")
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

const donateAmountAll = document.querySelectorAll(".donate-amount-label")
const amount25 = document.querySelector(".label-25")
const amount50 = document.querySelector(".label-50")
const amount100 = document.querySelector(".label-100")
const amount250 = document.querySelector(".label-250")
const amount500 = document.querySelector(".label-500")
const amount1000 = document.querySelector(".label-1000")
const amount2000 = document.querySelector(".label-2000")
const amount5000 = document.querySelector(".label-5000")
const amountInput = document.querySelector(".donate-amount-input")


amount25.addEventListener("click", () => {
    amountInput.value = amount25.innerHTML.slice(2)
    donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
    amount25.classList.add("donate-amount-active")
})
amount50.addEventListener("click", () => {
    amountInput.value = amount50.innerHTML.slice(2)
    donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
    amount50.classList.add("donate-amount-active")
})
amount100.addEventListener("click", () => {
    amountInput.value = amount100.innerHTML.slice(2)
    donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
    amount100.classList.add("donate-amount-active")
})
amount250.addEventListener("click", () => {
    amountInput.value = amount250.innerHTML.slice(2)
    donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
    amount250.classList.add("donate-amount-active")
})
amount500.addEventListener("click", () => {
    amountInput.value = amount500.innerHTML.slice(2)
    donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
    amount500.classList.add("donate-amount-active")
})
amount1000.addEventListener("click", () => {
    amountInput.value = amount1000.innerHTML.slice(2)
    donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
    amount1000.classList.add("donate-amount-active")
})
amount2000.addEventListener("click", () => {
    amountInput.value = amount2000.innerHTML.slice(2)
    donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
    amount2000.classList.add("donate-amount-active")
})
amount5000.addEventListener("click", () => {
    amountInput.value = amount5000.innerHTML.slice(2)
    donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
    amount5000.classList.add("donate-amount-active")
})

amountInput.addEventListener("change", () => {
    if (amountInput.value <= 25 && amountInput.value > 0) {
        donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
        amount25.classList.add("donate-amount-active")
    } else if (amountInput.value <= 50 && amountInput.value > 25) {
        donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
        amount50.classList.add("donate-amount-active")
    } else if (amountInput.value <= 100 && amountInput.value > 50) {
        donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
        amount100.classList.add("donate-amount-active")
    } else if (amountInput.value <= 250 && amountInput.value > 100) {
        donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
        amount250.classList.add("donate-amount-active")
    } else if (amountInput.value <= 500 && amountInput.value > 250) {
        donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
        amount500.classList.add("donate-amount-active")
    } else if (amountInput.value <= 1000 && amountInput.value > 500) {
        donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
        amount1000.classList.add("donate-amount-active")
    } else if (amountInput.value <= 2000 && amountInput.value > 1000) {
        donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
        amount2000.classList.add("donate-amount-active")
    } else if (amountInput.value <= 5000 && amountInput.value > 2000) {
        donateAmountAll.forEach(el => el.classList.remove("donate-amount-active"))
        amount5000.classList.add("donate-amount-active")
    }
})