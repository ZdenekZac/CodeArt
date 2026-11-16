const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Triangle Top
const triangleTop = new Point(window.innerWidth / 2, 50);
triangleTop.draw();

// Triangle bottom left
const triangleBottomLeft = new Point(50, window.innerHeight - 50);
triangleBottomLeft.draw();

// Triangle bottom right
const triangleBottomRight = new Point(window.innerWidth - 50, window.innerHeight - 50);
triangleBottomRight.draw();

const triangle = [triangleTop, triangleBottomLeft, triangleBottomRight];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  console.log(randomCorner);
}

function drawRest(prevPoint) {
  let randomCorner, middlepoint;

  for (let i = 0; i < 100000; i++) {
    // Pick random corner
    randomCorner = triangle[getRandomInt(0, 3)];

    // find middle point
    middlepoint = new Point((prevPoint.x + randomCorner.x) / 2, (prevPoint.y + randomCorner.y) / 2);
    middlepoint.draw();
    prevPoint = middlepoint;
  }
}

canvas.addEventListener(
  'click',
  function (e) {
    const firstPoint = new Point(e.x, e.y);
    firstPoint.draw();
    // draw rest
    drawRest(firstPoint);
  },
  { once: true },
);
