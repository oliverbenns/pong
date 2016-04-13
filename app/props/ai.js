import Paddle from 'props/paddle';
import canvas from 'canvas';

export default class Ai extends Paddle {
  constructor(ball) {
    super(canvas.width - 15, ball.y);
    this.ball = ball;
    this.speed = 3;
  }

  move() {
    const centerBallPoint = this.ball.y - (this.ball.height / 2);

    if (this.y < centerBallPoint) {
      console.log('paddle is higher than ball');
      const distanceToBall = centerBallPoint - this.y;
      super.move(distanceToBall < this.speed ? distanceToBall : this.speed);
    }

    // Ai is lower than ball
    const distanceToBall = centerBallPoint - this.y;
    console.log('paddle is lower than ball');
    super.move(distanceToBall < this.speed ? distanceToBall : this.speed);
  }
}
