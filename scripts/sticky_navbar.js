// When the user scrolls the page, execute showStickyBar
window.onscroll = function() {showStickyBar()};

// Get the navbar
var navbar = document.getElementById("header-menu");
var header = document.getElementById("header");

// Set the navbar hiding /showing position to half of the header
var sticky = header.clientHeight / 2;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove class "sticky" when you leave the scroll position
function showStickyBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}