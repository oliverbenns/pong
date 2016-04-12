import Paddle from 'props/paddle';
import canvas from 'canvas';

export default class Ai extends Paddle {
  constructor(ball) {
    super(canvas.width - 15, ball.y);
    this.ball = ball;
  }

  move() {
    const centerBallPoint = this.ball.y - (this.ball.height / 2);

    // @TODO: Need to implement speed here.
    return super.move(this.y < centerBallPoint ? 1 : -1);
  }
}
