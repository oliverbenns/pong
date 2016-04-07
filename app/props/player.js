import mouse from 'lib/mouse';
import Paddle from 'props/paddle';

export default class Player extends Paddle {
  constructor() {
    mouse.onMove((x, y) => this.moveTo(y));
    super(5, 50);
  }
}
