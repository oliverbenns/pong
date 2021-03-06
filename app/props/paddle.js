import Prop from 'props/prop';
import canvas from 'canvas';

export default class Paddle extends Prop {
  constructor(x, y) {
    super(x, y, 8, 60);
    this.maxY = canvas.height - this.height;
    this.minY = 0;
    this.score = 0;
  }

  move(y) {
    const willBeOutOfBounds = (this.y + y >= this.maxY) || (this.y + y <= this.minY);

    return super.move(0, willBeOutOfBounds ? 0 : y);
  }

  moveTo(y) {
    return super.moveTo(this.x, (y > this.maxY) ? this.maxY : y);
  }
}
