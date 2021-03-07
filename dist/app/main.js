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
    //Reset entered product
    const productNotChecked = document.querySelectorAll(
      'input[name="product"]:not(:checked)'
    );

    productNotChecked.forEach((notCheckedElement) => {
      try {
        const productNCEnter =
          notCheckedElement.parentElement.nextElementSibling.nextElementSibling
            .nextElementSibling;
        productNCEnter.classList.remove("open");
      } catch (error) {
        return;
      }
      const productNCCard = notCheckedElement.parentElement.parentElement;
      productNCCard.classList.remove("product__card--active");
    });

    const productChecked = document.querySelector(
      'input[name="product"]:checked'
    );
    try {
      const productEnter =
        productChecked.parentElement.nextElementSibling.nextElementSibling
          .nextElementSibling;
      productCard = productChecked.parentElement.parentElement;
      productCard.classList.add("product__card--active");
      productEnter.classList.add("open");
    } catch (error) {
      return;
    }
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
  if (e.target == successModal) {
    successModal.classList.toggle("open");
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

//Continue  button pressed to support

const btnContinue = Array.from(
  document.getElementsByClassName("product__continue")
);
const successModal = document.getElementsByClassName("success")[0];

btnContinue.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectionModalContainer.classList.toggle("open");
    successModal.classList.toggle("open");
  });
});
const successBtn = document.getElementsByClassName("success__btn")[0];
successBtn.addEventListener("click", () => {
  successModal.classList.remove("open");
});
