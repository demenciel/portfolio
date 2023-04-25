const container = document.getElementById("body");

// menu var
const navbar = document.getElementById("navbar");
const menuButton = document.querySelector(".menu-collapse");
const navLinks = document.querySelectorAll(".nav-link");
let menuIsOn = true;

// type writer var
let i = 0;
let y = 0;
let txt = [
  "Code Connoisseur",
  "Engineer of Innovation",
  "Solutions Architect",
  "Tech Tactician",
];

let speed = 100;
let typeWriterId = document.getElementById("developper-type");
let typeWriterBar = document.getElementById("type-bar");
let flashInterval = 350;

// percent bars
const percentBars = document.querySelectorAll(".percentage-fill");
let percentages = ["100", "90", "78", "75", "75", "70", "70"];

// section vars
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
// when window is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("section1").style.animation = "slideWindowRight 2s";
  document.querySelector(".d-flex").style.animation = "slideWindowUp 2s";
});

// animation scrollevents
window.addEventListener("scroll", function () {
  section2Animation();
  section3Animation();
  section4Animation();
});

// MENU OPTIONS
menuButton.addEventListener("click", (e) => {
  if (menuIsOn) {
    navbar.style.animation = "slideMenuOff 1s forwards";
    menuIsOn = false;
  } else if (menuIsOn == false) {
    navbar.style.animation = "slideMenuOn 1s forwards";
    menuIsOn = true;
  }
});

// change color of pill on click and go to section
if (navLinks.length) {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      e.preventDefault();
      let targetId = link.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
      link.classList.add("active");
    });
  });
}

//section2 animations
function section2Animation() {
  if (isInViewport(section2)) {
    if (percentBars.length) {
      percentBars.forEach((e, i) => {
        let percent = percentages[i];
        e.style.width = percent + "%";
        e.style.transform = `translateX(${percent})`;
      });
    }
    document.querySelector(".container-section2").style.animation =
      "slideWindowUp 2s";
  };
};

// type writer effects
function typeBarDisappear() {
  if (typeWriterBar.style.visibility === "visible") {
    setTimeout(() => {
      typeWriterBar.style.visibility = "hidden";
      typeBarDisappear();
    }, flashInterval);
  } else {
    setTimeout(() => {
      typeWriterBar.style.visibility = "visible";
      typeBarDisappear();
    }, flashInterval);
  }
}
typeBarDisappear();

function typeWriter() {
  if (i < txt[y].length) {
    typeWriterId.innerHTML += txt[y].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(resetTypeWriter, 1000);
  }
}
function resetTypeWriter() {
  if (i > 0) {
    typeWriterId.innerHTML = typeWriterId.innerHTML.slice(0, -1);
    i--;
    setTimeout(resetTypeWriter, speed);
  } else {
    y++;
    if (y == 3) y = 0;
    typeWriter();
  }
}
typeWriter();

// bubble effects
container.addEventListener("mousemove", (e) => {
  createBubble(e.pageX, e.pageY);
});

function createBubble(x, y) {
  if (document.documentElement.clientWidth >= 900) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    container.appendChild(bubble);
  
    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    const colors = ["#F4EEE0", "#6D5D6E"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.background = randomColor;
    bubble.style.width = `${Math.random() * 100}px`;
    bubble.style.height = bubble.style.width;
  
    setTimeout(() => {
      bubble.remove();
    }, 300);
  };
};

// item is in viewport
function isInViewport(item) {
  var bounding = item.getBoundingClientRect(), myElementHeight = item.offsetHeight, myElementWidth = item.offsetWidth;
  if (
    bounding.top >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom <=
      (document.documentElement.clientHeight) +
        myElementHeight
  ) {
    return true;
  } else {
    return false;
  };
};

// projects animations
function section3Animation() {
  let projects = document.querySelectorAll(".project");
  if (isInViewport(section3)) {
    document.querySelector(".container-section3").style.animation = "slideWindowLeft 2s";
    projects.forEach(project => {
      project.style.animation = "slideWindowLeftRotate 2s";
      project.addEventListener('mouseover', () => {
        const img = project.querySelector('img');
        img.style.opacity = "0.3";
      });
      project.addEventListener('mouseleave', () => {
        const img = project.querySelector('img');
        img.style.opacity = "1";
      });
    });
  }
};

function section4Animation() {
  if (isInViewport(section4)) {
    document.querySelector(".container-section4").style.animation = "slideWindowUp 2s";
  };
};


