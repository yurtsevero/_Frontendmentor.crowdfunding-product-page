const hamburgerMenu = document.getElementById("icon__hamburger");
const navMenu = document.getElementById("nav__menu");

hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("open");
  if (navMenu.classList.contains("open")) {
    hamburgerMenu.src = "images/icon-close-menu.svg";
  } else {
    hamburgerMenu.src = "images/icon-hamburger.svg";
  }
});
