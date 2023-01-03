const navMenu = document.querySelector(".nav-menu"),
  toggleMenu = document.querySelector(".hamburger"),
  closeMenu = document.querySelector(".hamburg-close"),
  navLink = document.querySelectorAll(".nav-menu");

// Testing git

//  SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//  HIDDEN
toggleMenu.addEventListener("click", () => {
  closeMenu.classList.remove("show");
});

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
