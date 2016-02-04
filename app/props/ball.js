import Prop from 'props/prop';
import canvas from 'canvas';

import collision from 'lib/collision';
import events from 'lib/events';

export default class Ball extends Prop {
  constructor() {
    const width = 10;
    const height = 10;
    const x = (canvas.width / 2) - (width / 2);
    const y = (canvas.height / 2) - (height / 2);

    super(x, y, width, height);
    this.speed = 2;

    this.createRandomDirection();
    console.log('this.direction', this.direction);
  }

  createRandomDirection() {
    // Generate random number from -3 - 3, not including 0.
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

  rebound() {
    const calculate = (num) => num <= 0 ? Math.abs(num) : -(num);

    this.direction.x = calculate(this.direction.x);
    this.direction.y = calculate(this.direction.y);
  }

  fire() {
    const move = () => {
      this.move(this.direction.x, this.direction.y);
      events.publish('ballMove', this);

      if (!collision.isOutOfBounds(this)) {
        return requestAnimationFrame(move);
      }
    };

    requestAnimationFrame(move);
  }
}
