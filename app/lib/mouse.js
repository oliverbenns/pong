import canvas from 'canvas';

const mouse = {};

mouse.listen = (fn) => {
  canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();

    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);

    fn(x, y);
  }, false);
};

export default mouse;
