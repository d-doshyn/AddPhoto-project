let menuTrigger = document.querySelector(".burger-menu-trigger");
let burgerMenu = document.querySelector(".burger-menu");

// линии
let firstLine = document.querySelector(".line.first");
let secondLine = document.querySelector(".line.second");
let lineDisappeared = document.querySelector(".line.to-disappear");

menuTrigger.onclick = () => {
    if (burgerMenu.classList.contains("none")) {

        burgerMenu.classList.remove("none");
        burgerMenu.classList.add("flex");

        firstLine.classList.add('burger-first-line');
        secondLine.classList.add('burger-second-line');
        lineDisappeared.classList.add('burger-disappearing-line');
    } else {
        burgerMenu.classList.remove("flex");
        burgerMenu.classList.add("none");

        firstLine.classList.remove('burger-first-line');
        secondLine.classList.remove('burger-second-line');
        lineDisappeared.classList.remove('burger-disappearing-line');
    }
}