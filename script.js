gsap.from(".title", {opacity: 0, y: 50, duration: 1});
gsap.from(".subtitle", {opacity: 0, y: 40, delay: 0.3, duration: 1});
gsap.from(".btn", {opacity: 0, y: 40, delay: 0.6, duration: 1});

gsap.from("#motionImage", {
  opacity: 0,
  x: 100,
  duration: 1.2,
  delay: 0.3
});
const canvas4 = document.getElementById("floatingTech");
const ctx4 = canvas4.getContext("2d");

canvas4.width = window.innerWidth;
canvas4.height = window.innerHeight;

const symbols2 = ["AI", "ML", "JS", "C++", "PY", "{}", "<>", "()", "</>"];
const floaters = [];

class Floater {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas4.width;
        this.y = Math.random() * canvas4.height;
        this.speedY = 0.2 + Math.random() * 0.8;
        this.speedX = -0.5 + Math.random();
        this.size = 16 + Math.random() * 20;
        this.text = symbols2[Math.floor(Math.random() * symbols2.length)];
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas4.height || this.x < 0 || this.x > canvas4.width) {
            this.reset();
        }
    }
    draw() {
        ctx4.fillStyle = "#0ff";
        ctx4.font = this.size + "px monospace";
        ctx4.fillText(this.text, this.x, this.y);
    }
}

for (let i = 0; i < 70; i++) floaters.push(new Floater());

function animateFloaters() {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    floaters.forEach(f => {
        f.update();
        f.draw();
    });
    requestAnimationFrame(animateFloaters);
}

animateFloaters();

// Scroll animations for sections
gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: card,
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: i * 0.1
  });
});
// CUSTOM CURSOR
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  gsap.to(cursorDot, {
    x: x,
    y: y,
    duration: 0.1
  });

  gsap.to(cursorOutline, {
    x: x,
    y: y,
    duration: 0.25
  });
});

