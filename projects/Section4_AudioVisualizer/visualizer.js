const microphone = new Microphone();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 8;
    this.color = "white";
    this.jumpForce = 0;
    this.fallForce = 0.1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  fall() {}

  jump() {}
}

let balls = [];
const generateBalls = () => {
  const distance = 30;
  const amountOfBalls = canvas.width / distance - 2;
  for (let i = 0; i < amountOfBalls; i++) {
    balls.push(new Ball(distance + i * distance, 500));
  }
};

generateBalls();

function animate() {
  if (microphone.initialized) {
    const samples = microphone.getSamples();
  }
  requestAnimationFrame(animate);
}
animate();
