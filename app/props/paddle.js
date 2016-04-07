import Prop from 'props/prop';

export default class Paddle extends Prop {
  constructor(x, y) {
    super(x, y, 10, 60);
  }

  // Players can only move Y axis.
  move(y) {
    return super.move(0, y);
  }
}
