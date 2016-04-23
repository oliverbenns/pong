import Paddle from 'props/paddle';
import canvas from 'canvas';

export default class Ai extends Paddle {
  constructor(ball) {
    super(canvas.width - 15, ball.y);
    this.ball = ball;
    this.speed = 3;
  }

  move() {
    const centerPaddlePoint = this.y + (this.height / 2);
    const centerBallPoint = this.ball.y + (this.ball.height / 2);

    const distanceToBall = centerBallPoint - centerPaddlePoint;
    const speed = distanceToBall > 0 ? this.speed : -(this.speed);

    return super.move(distanceToBall < speed ? distanceToBall : speed);
  }
}
