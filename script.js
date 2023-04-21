// ts particles

tsParticles.load("tsparticles", {
  background: {
    color: "#252525",
  },
  particles: {
    color: { value: "#fff" },
    move: {
      direction: "bottom",
      enable: true,
      outModes: "out",
      speed: 2,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 400,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 10,
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10,
    },
    zIndex: {
      value: { min: 0, max: 100 },
    },
  },
});

// vanilla js
var navbar = document.querySelector(".navbar");
var sections = document.querySelectorAll("section");
var navbarLinks = document.querySelectorAll(".navbar-link");
var progress = document.querySelector(".progress-bars-wrapper");
var progressBarPercents = [94, 90, 87, 82, 82, 82, 75, 75];

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    mainFn();
  });

  function mainFn() {
    if (window.pageYOffset >= navbar.offsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    };
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
    };

    var typeId = document.getElementById("typewriter");
    var typewriter = new Typewriter(typeId, {
      loop: true,
      delay: 80,
    });

    typewriter
      .pauseFor(1000)
      .typeString("Hello, <b>my name is Alex!</b>")
      .pauseFor(2000)
      .deleteChars(200)
      .pauseFor(100)
      .start();
  };
  mainFn();

  window.addEventListener("resize", () => {
    window.location.reload();
  });
});

// typewriter
