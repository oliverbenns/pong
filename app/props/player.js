import Paddle from 'props/paddle';
import canvas from 'canvas';

export default class Player extends Paddle {
  constructor() {
    super(5, 50);
  }

  // For mouse move.
  moveTo(y) {
    const maxY = canvas.height - this.height;

    return super.moveTo(this.x, (y > maxY) ? maxY : y);
  }
}
