var navbar = document.querySelector(".navbar");
var sections = document.querySelectorAll("section");
var navbarLinks = document.querySelectorAll(".navbar-link");
var progress = document.querySelector(".progress-bars-wrapper");
var progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener("scroll", () => {
    mainFn();
  });

  function mainFn() {
    if (window.pageYOffset >= navbar.offsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    sections.forEach((section, i) => {
      if (window.pageYOffset >= section.offsetTop - 10) {
        navbarLinks.forEach((navbarLink) => {
          navbarLink.classList.remove("change");
        });
        navbarLinks[i].classList.add("change");
      }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
      document.querySelectorAll(".progress-percent").forEach((el, i) => {
        el.style.width = `${progressBarPercents[i]}%`;
        el.previousElementSibling.firstElementChild.textContent =
          progressBarPercents[i] + "%";
      });
    }
  };

  mainFn();

  window.addEventListener("resize", () => {
    window.location.reload();
  });
});