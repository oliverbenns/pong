import Prop from 'props/prop';
import canvas from 'canvas';
import mouse from 'lib/mouse';
// http://stackoverflow.com/questions/16628184/add-onclick-and-onmouseover-to-canvas-element

export default class Clickable extends Prop {
  constructor(width, height, x, y, fn) {
    super(width, height);

    this.positionY = y;
    this.positionX = x;

    this.fn = fn;
    this.onClick = this.onClick.bind(this);
  }

  draw() {
    super.draw('red');
    // super.draw('rgba(0, 0, 0, 0)');
  }

  onClick(event) {
    console.log('event', event);
    const coords = mouse.getCoordinates(event);

    if (this.isPointInside(coords.x, coords.y)) {
      this.fn();
    }
  }

  render() {
    this.draw(this.positionX, this.positionY);
    canvas.addEventListener('click', this.onClick);
  }

  destroy() {
    canvas.removeEventListener('click', this.onClick);
  }

  isPointInside(x, y) {
    return (x >= this.positionX && x <= this.positionX + this.width && y >= this.positionY && y <= this.positionY + this.height);
  }
}
