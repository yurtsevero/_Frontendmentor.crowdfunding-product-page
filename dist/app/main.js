const hamburgerMenu = document.getElementById("icon__hamburger");
const navMenu = document.getElementById("nav__menu");
const btnBackThisProject = document.getElementById("main__btn");
const selectionModalContainer = document.getElementById(
  "selectionModalContainer"
);
const selectionModalClose = document.getElementById("selectionModalClose");
const radio = document.querySelectorAll('input[name="product"]');

radio.forEach((element) => {
  element.addEventListener("change", () => {
    console.log("hi moda");
    const checkedradio = document.querySelector(
      'input[name="product"]:checked'
    );

    console.log("here is some " + checkedradio.nextElementSibling);
  });
});

window.addEventListener("click", (e) => {
  if (e.target == document.getElementsByClassName("modal")[0]) {
    navMenu.classList.remove("open");
    hamburgerMenu.src = "images/icon-hamburger.svg";
  }
  if (e.target == selectionModalContainer) {
    selectionModalContainer.classList.toggle("open");
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

btnBackThisProject.addEventListener("click", () => {
  selectionModalContainer.classList.toggle("open");
});
selectionModalClose.addEventListener("click", () => {
  selectionModalContainer.classList.toggle("open");
});
