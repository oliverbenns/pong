import Prop from 'props/prop';
import canvas from 'canvas';

export default class Ball extends Prop {
  constructor() {
    const width = 10;
    const height = 10;
    const x = (canvas.width / 2) - (width / 2);
    const y = (canvas.height / 2) - (height / 2);

    super(x, y, width, height);
    this.speed = 1;

    this.initial = {
      x,
      y,
      speed: this.speed,
    };

    this.createRandomDirection();
  }

  createRandomDirection() {
    // Generate random number from -3 - 3, not including 0.
    // @TODO: Prevent Y axis from dropping the ball down straight away. Probably need limit params.
    function create() {
      const number = Math.floor(Math.random() * 3) + 1;
      const positive = !!Math.round(Math.random());

      return positive ? number : -(number);
    }

    this.direction = {
      x: create(),
      y: create(),
    };
  }

  rebound(reboundX, reboundY) {
    const calculate = (num) => num <= 0 ? Math.abs(num) : -(num);

    if (reboundX) {
      this.direction.x = calculate(this.direction.x);
    }
    if (reboundY) {
      this.direction.y = calculate(this.direction.y);
    }

    return this;
  }

  speedUp() {
    // Stop the floating point number issue (if it is even an issue.)
    this.speed += 0.33;

    return this;
  }

  reset() {
    this.x = this.initial.x;
    this.y = this.initial.y;
    this.speed = this.initial.speed;
  }

  move(x, y) {
    // This creates a LOT of FPS issues due to the way game.js is handling frames.
    super.move(x * this.speed, y * this.speed);
  }
}
