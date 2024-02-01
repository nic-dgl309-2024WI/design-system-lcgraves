/* Toggles mobile menu on and off with click/tap on hamburger icon */

function showNav() {
    var firstMenu = document.getElementById("c-mobile-first-menu");
    var secondMenu = document.getElementById("c-mobile-second-menu")
    firstMenu.classList.toggle("h-show-items");
    secondMenu.classList.toggle("h-show-items");
}
