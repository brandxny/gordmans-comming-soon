const openMobileMenuBtn = document.querySelector(".bx-device-menu");
const headerMenu = document.querySelector(".bx-header-nav");
const pageHeader = document.querySelector(".bx-header-holder header");
const menuBackground = document.querySelector(".bx-header-nav");
var random_class_number = Math.floor(Math.random() * 10);
pageHeader.classList.add("bg-"+random_class_number);

openMobileMenuBtn.addEventListener("click", () => {
  if(openMobileMenuBtn.classList.contains("open")) {
    openMobileMenuBtn.classList.remove("open");
    headerMenu.classList.remove("active");
    menuBackground.classList.add("bg-"+random_class_number);
  } else {
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
    menuBackground.classList.add("bg-"+random_class_number);
  }
})
