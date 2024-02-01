/* Toggles mobile menu on and off with click/tap on hamburger icon */
/* Used chatGPT to help with figuring out how to toggle on/off two menus with separate ID's with one click event" */

function showNav() {
    var firstMenu = document.getElementById("c-mobile-first-menu");
    var secondMenu = document.getElementById("c-mobile-second-menu")
    firstMenu.classList.toggle("h-show-items");
    secondMenu.classList.toggle("h-show-items");
}
