AOS.init();

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuLinks = document.querySelectorAll(".navbar-collapse a");
const navbarToggler = document.querySelector(".navbar-toggler");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show");
    navbarToggler.setAttribute("aria-expanded", "false");
  });
});
