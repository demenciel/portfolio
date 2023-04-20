const container = document.getElementById("body");
const navLinks = document.getElementById("navbar");
const menuButton = document.querySelector(".menu-collapse");
let menuIsOn = true;
var i = 0;
var y = 0;
var txt = ["Code Connoisseur", "Engineer of Innovation", "Solutions Architect", "Tech Tactician"];
var speed = 100;
var typeWriterId = document.getElementById("developper-type");
var typeWriterBar = document.getElementById("type-bar");
var flashInterval = 350;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('section1').style.animation = "slideWindowRight 2s";
  document.querySelector('.d-flex').style.animation = "slideWindowLeft 2s";
});

// menu options
menuButton.addEventListener("click", (e) => {
  if (menuIsOn) {
    navLinks.style.animation = "slideMenuOff 1s forwards";
    menuIsOn = false;
  }
  else if (menuIsOn == false) {
    navLinks.style.animation = "slideMenuOn 1s forwards";
    menuIsOn = true;
  }
});

function hoverOnMenu(icon, text, iconText) {
  document.querySelector(icon).addEventListener("mouseover", () => {
    document.querySelector(iconText).innerHTML = text;
  });
}

function hoverOutMenu (icon, iconText) {
  document.querySelector(icon).addEventListener("mouseout", () => {
    document.querySelector(iconText).innerHTML = "";
  });
}

// hoverOnMenu("#homeIcon", "Home", "#homeText");
// hoverOutMenu("#homeIcon", "#homeText");
// hoverOnMenu("#aboutIcon", "About", "#aboutText");
// hoverOutMenu("#aboutIcon", "#aboutText");
// hoverOnMenu("#portfolioIcon", "Portfolio", "#portfolioText");
// hoverOutMenu("#portfolioIcon", "#portfolioText");
// hoverOnMenu("#contactIcon", "Contact", "#contactText");
// hoverOutMenu("#contactIcon", "#contactText");


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
  }
  else {
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
    if (y == 3)
      y = 0;
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
  const colors = ['#F4EEE0', '#6D5D6E'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  bubble.style.background = randomColor;
  bubble.style.width = `${Math.random() * 75}px`;
  bubble.style.height = bubble.style.width;

  setTimeout(() => {
    bubble.remove();
  }, 300);
}
