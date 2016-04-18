import Prop from 'props/prop';
import canvas from 'canvas';
import mouse from 'lib/mouse';
// http://stackoverflow.com/questions/16628184/add-onclick-and-onmouseover-to-canvas-element

export default class Clickable extends Prop {
  constructor(x, y, width, height, fn) {
    super(x, y, width, height);

    this.fn = fn;
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const coords = mouse.getCoordinates(event);

    if (this.isPointInside(coords.x, coords.y)) {
      this.fn();
      this.destroy();
    }
  }

  render() {
    canvas.addEventListener('click', this.onClick);

    // @TODO: Remove this debug when complete.
    super.render(null, null, 'rgba(50, 50, 50, 1)');
  }

  destroy() {
    canvas.removeEventListener('click', this.onClick);
  }

  isPointInside(x, y) {
    return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
  }
}
