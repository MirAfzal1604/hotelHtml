const navbar = document.querySelector(".navUl");
const burger = document.querySelector("#navIcon");

function openNav() {
    burger.classList.toggle("isClicked");
    navbar.classList.toggle("navWidth");
}

function navClose() {
    navbar.classList.remove("navWidth");
    burger.classList.remove("isClicked");
}