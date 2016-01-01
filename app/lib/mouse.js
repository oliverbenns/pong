import canvas from 'canvas';

const mouse = {};

mouse.getCoordinates = (event) => {
  const rect = canvas.getBoundingClientRect();

  return {
    x: Math.round(event.clientX - rect.left),
    y: Math.round(event.clientY - rect.top),
  };
};

mouse.onMove = (fn) => {
  canvas.addEventListener('mousemove', (event) => {
    const coords = mouse.getCoordinates(event);
    fn(coords.x, coords.y);
  }, false);
};

export default mouse;
