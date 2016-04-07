import Paddle from 'props/paddle';
import canvas from 'canvas';

export default class Ai extends Paddle {
  constructor(ball) {
    super(canvas.width - 15, ball);
    this.ball = ball; // @TODO: Make Move function always follow this.
  }

  // For move to ball.
  moveTo(y) {
    const maxY = canvas.height - this.height;

    return super.moveTo(this.x, (y > maxY) ? maxY : y);
  }
}
