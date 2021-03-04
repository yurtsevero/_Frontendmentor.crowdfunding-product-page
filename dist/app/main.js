const hamburgerMenu = document.getElementById("icon__hamburger");
const navMenu = document.getElementById("nav__menu");

window.addEventListener("click", (e) => {
  if (e.target == document.getElementsByClassName("modal")[0]) {
    navMenu.classList.remove("open");
    hamburgerMenu.src = "images/icon-hamburger.svg";
    console.log("he");
  }
});
hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("open");
  if (navMenu.classList.contains("open")) {
    hamburgerMenu.src = "images/icon-close-menu.svg";
  } else {
    hamburgerMenu.src = "images/icon-hamburger.svg";
  }
});
