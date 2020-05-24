window.onscroll = function() {onScroll()};
var toggleButton = document.querySelector(".toggle-menu");
var mainNav = document.querySelector(".main-nav");
var mainHeader = document.querySelector(".main-header");

toggleButton.addEventListener("click", function () {
    (mainNav.className.includes("open")) ? mainNav.classList.remove("open") : mainNav.classList.add("open");
})

var sticky = mainHeader.offsetTop;
function onScroll() {
    if (window.pageYOffset > sticky) {
        mainHeader.classList.add("sticky");
    } else {
        mainHeader.classList.remove("sticky");
    }
}