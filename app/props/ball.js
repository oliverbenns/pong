import Prop from 'props/prop';
import canvas from 'canvas';

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
  }

  isOutOfBounds() {
    // This will be moved into a collision detection lib at some point.
    return (
      this.positionY === canvas.height ||
      this.positionY === 0 ||
      this.positionX === canvas.width ||
      this.positionX === 0
    );
  }

  fire() {
    const direction = coords.northWest;

    const move = setInterval(() => {
      this.move(direction.x, direction.y);
      if (this.isOutOfBounds()) {
        console.log('Stopping ball, out of bounds');
        clearInterval(move);
      }
    }, 10);
  }
}
