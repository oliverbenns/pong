import canvas from 'canvas';
// http://stackoverflow.com/questions/16628184/add-onclick-and-onmouseover-to-canvas-element

export default class Clickable {
  constructor(id, x, y, width, height, fill) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.width = width;
    this.height = height;
    this.fill = fill || 'gray';
    this.redraw(this.x, this.y);
    return (this);
  }

  redraw(x, y) {
    this.x = x || this.x;
    this.y = y || this.y;
    this.draw();
    return (this);
  }

  draw() {
    canvas.context.save();
    canvas.context.beginPath();
    canvas.context.fillStyle = this.fill;
    canvas.context.rect(this.x, this.y, this.width, this.height);
    canvas.context.fill();
    canvas.context.restore();
  }

  isPointInside(x, y) {
    return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
  }
}
