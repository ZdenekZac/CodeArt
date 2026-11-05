// - - - - SECTION 1 - - - - - -

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ----------- 7. - 8. Event Listeners ----------

// ctx.beginPath();
// ctx.rect(100, 100, 100, 100);
// //ctx.fill();
// ctx.stroke();

// canvas.addEventListener('mousemove', (e) => {
//   ctx.beginPath();
//   ctx.rect(e.x, e.y, 10, 10);
//   ctx.fill();
// });

// --------- 9. Arc -----------
// const degToRad = (deg) => {
//   return (deg / 180) * Math.PI;
// };

// ctx.beginPath();
// ctx.arc(200, 200, 150, degToRad(0), degToRad(90));
// //ctx.arc(200, 200, 150, 0, 1);
// ctx.fill();

// ----------- 11. - 15. Generate Atoms --------

let atoms = [];

// canvas.addEventListener('mousemove', function (e) {
//   for (let i = 0; i < 20; i++) {
//     console.log(e);
//     console.log(atoms);
//     atoms.push(new Atom(e.x, e.y));
//   }
// });

const animate = () => {
  atoms.forEach((atom, index) => {
    ctx.fillStyle = 'green';

    atom.draw();
    atom.updateSpeed();
    atom.updateSize();

    if (atom.radius < 0.3) {
      atoms.splice(index, 1);
    }
  });
  ctx.save();
  // ctx.fillStyle = 'rgba(255,255,255, 0.2)';
  ctx.fillStyle = 'rgba(0,0,0, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.restore();

  requestAnimationFrame(animate);
};

animate();

class Atom {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.radius = Math.random() * 2 + 2;
    this.speedX = Math.random() * 4 - 2; //-2 +2
    this.speedY = Math.random() * 4 - 2; //-2 +2
  }

  updateSpeed() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  updateSize() {
    this.radius -= 0.1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const point = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

let degree = 0;

const generateAtoms = () => {
  atoms.push(new Atom(canvas.width / 2 + point.x * 200, canvas.height / 2 + point.y * 200));
  point.x = Math.cos((degree / 180) * Math.PI);
  point.y = Math.cos((degree / 180) * Math.PI);

  degree++;
  requestAnimationFrame(generateAtoms);
};

// const generateAtoms = () => {
//   atoms.push(new Atom(point.x, point.y));
//   point.x += 1;
//   point.y += 1;
//   requestAnimationFrame(generateAtoms);
// };

// const generateAtoms = () => {
//   atoms.push(new Atom(Math.random() * canvas.width, Math.random() * canvas.height));
//   requestAnimationFrame(generateAtoms);
// };

generateAtoms();
