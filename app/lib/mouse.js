import canvas from 'canvas';

const mouse = {};

mouse.getCoordinates = (event) => {
  const rect = canvas.getBoundingClientRect();

  return {
    x: Math.round(event.clientX - rect.left),
    y: Math.round(event.clientY - rect.top),
  };
};

export default mouse;
