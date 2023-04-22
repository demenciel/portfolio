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

// when window is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("section1").style.animation = "slideWindowRight 2s";
  document.querySelector(".d-flex").style.animation = "slideWindowUp 2s";
});

// animation scrollevents
window.addEventListener("scroll", function () {
  section2Animation();
  startAutoScroll();
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
    // typeWriterId.innerHTML.style.colors = '#4F4557';
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
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  container.appendChild(bubble);

  bubble.style.left = x + "px";
  bubble.style.top = y + "px";
  const colors = ["#F4EEE0", "#6D5D6E"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  bubble.style.background = randomColor;
  bubble.style.width = `${Math.random() * 75}px`;
  bubble.style.height = bubble.style.width;

  setTimeout(() => {
    bubble.remove();
  }, 300);
}

// item is in viewport
function isInViewport(item) {
  var bounding = item.getBoundingClientRect(),
    myElementHeight = item.offsetHeight,
    myElementWidth = item.offsetWidth;

  if (
    bounding.top >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        myElementHeight
  ) {
    return true;
  } else {
    return false;
  }
}

// carousel soft skills
const autoScrollInterval = 5000;
const softSkillsContainer = document.querySelector('.soft-skills-container');
let autoScrollTimer;

function startAutoScroll() {
  autoScrollTimer = setInterval(() => {
    const nextScrollPosition =
      softSkillsContainer.scrollLeft + (softSkillsContainer.clientWidth / 4);
    if ((nextScrollPosition) >= (softSkillsContainer.scrollWidth - softSkillsContainer.clientWidth)) {
      console.log(1);
      softSkillsContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      softSkillsContainer.scrollTo({
        left: nextScrollPosition,
        behavior: 'smooth',
      });
    }
  }, autoScrollInterval);
}

function stopAutoScroll() {
  clearInterval(autoScrollTimer);
};

softSkillsContainer.addEventListener('mouseenter', stopAutoScroll);
softSkillsContainer.addEventListener('mouseenter', stopAutoScroll);

let project = document.querySelector(".project");
let projectBg = document.querySelectorAll(".project-bg");

projectBg.forEach(e => {
  e.addEventListener('mouseover', () => {
      e.style.opacity = "0.3";
      e.addEventListener('mouseleave', () => {
        e.style.opacity = "1";
      });
  });
});
