import canvas from 'canvas';
import mouse from 'lib/mouse';
// http://stackoverflow.com/questions/16628184/add-onclick-and-onmouseover-to-canvas-element

export default class Clickable {
  constructor(id, x, y, width, height, fn) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.width = width;
    this.height = height;
    this.fn = fn;
  }

  draw() {
    canvas.context.save();
    canvas.context.beginPath();
    canvas.context.fillStyle = 'red';
    // canvas.context.fillStyle = 'rgba(0, 0, 0, 0)';
    canvas.context.rect(this.x, this.y, this.width, this.height);
    canvas.context.fill();
    canvas.context.restore();
  }

  onClick(event) {
    const coords = mouse.getCoordinates(event);

    if (this.isPointInside(coords.x, coords.y)) {
      this.fn();
    }
  }

  render() {
    this.draw(this.x, this.y);
    canvas.addEventListener('click', this.onClick.bind(this));
  }

  isPointInside(x, y) {
    return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
  }
}
