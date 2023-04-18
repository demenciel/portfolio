const container = document.getElementById("body");

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
