import canvas from 'canvas';
import mouse from 'lib/mouse';
import Paddle from 'props/paddle';

export default class Player extends Paddle {
  constructor() {
    super(5);

    // Now we have the height, re-render
    this.y = (canvas.height / 2) - (this.height / 2);
    this.render();

    this.mouseHandler = this.mouseHandler.bind(this);
    canvas.addEventListener('mousemove', this.mouseHandler);
  }

  mouseHandler(event) {
    const { y } = mouse.getCoordinates(event);

    this.moveTo(y);
  }

  destroy() {
    canvas.removeEventListener('mousemove', this.mouseHandler);
  }
}
