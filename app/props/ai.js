import Paddle from 'props/paddle';
import canvas from 'canvas';

export default class Ai extends Paddle {
  constructor(ball) {
    super(canvas.width - 15, ball);
    this.ball = ball; // @TODO: Make Move function always follow this.
  }

  moveTo() {
    const y = this.ball.y - ((this.height / 2) - (this.ball.height / 2));

    return super.moveTo(y);
  }
}
