import Prop from 'props/prop';
import canvas from 'canvas';

import collision from 'lib/collision';
import events from 'lib/events';

// Maybe make these coords an array so we can easily multiply without lodash _.mapValues for speed.
const coords = {
  northEast: {
    x: 1,
    y: -1,
  },
  southEast: {
    x: 1,
    y: 1,
  },
  southWest: {
    x: -1,
    y: 1,
  },
  northWest: {
    x: -1,
    y: -1,
  },
};

export default class Ball extends Prop {
  constructor() {
    const width = 10;
    const height = 10;
    const x = (canvas.width / 2) - (width / 2);
    const y = (canvas.height / 2) - (height / 2);

    super(x, y, width, height);
    this.speed = 2;
    this.direction = coords.northWest;
  }

  updateDirection() {
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
