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

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const rectWidth = width * 0.02;
    const rectHeight = height * 0.2;

    context.fillStyle = 'black';
    context.beginPath();
    context.rect(0, 0, 50, 50);
    context.fill();

    context.translate(100, 100);
    context.rotate((45 * Math.PI) / 180);

    context.beginPath();
    context.rect(0, 0, 50, 50);
    context.fill();
  };
};

canvasSketch(sketch, settings);
