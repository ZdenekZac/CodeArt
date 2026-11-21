//npx canvas-sketch-cli sketch.js --open
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048],
  //orientation: 'portrait',
  //dimensions: 'A4',

};

// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = 'white';
//     context.fillRect(0, 0, width, height);

//     const rectWidth = width * 0.02;
//     const rectHeight = height * 0.2;

//     context.fillStyle = 'black';

//     for (let i = 0; i < 12; i++) {
//       context.beginPath();
//       context.rect(100 * i, 100, rectWidth, rectHeight);
//       context.fill();
//     }
//   };
// };

// ---------- 32: SAVE AND RESTORE AND 31. ROTATE-----------
// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = 'white';
//     context.fillRect(0, 0, width, height);
    
//     context.fillStyle = 'black';
//     context.beginPath();
//     context.rect(0, 0, 50, 50);
//     context.fill();
    
//     context.translate(100, 100);
//     context.save();
    
//     context.rotate((30 * Math.PI) / 180);
//     context.beginPath();
//     context.rect(0, 0, 150, 50);
//     context.fillStyle = 'green';
//     context.fill();

//     context.restore();

//     //context.fillStyle = 'red';
//     context.beginPath();
//     context.rect(0, 0, 70, 170);
//     context.fill();
//   };
// };

// ------------ 33. RANDOMNESS -------------
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.lineWidth = Math.random() * 5;
    context.beginPath();

    for (let i = 0; i < 500; i++) {
    context.rect(Math.random() * 2048, Math.random() * 2048, Math.random() * 50, Math.random() * 50);
    context.stroke()
    }
  }
}

canvasSketch(sketch, settings)
