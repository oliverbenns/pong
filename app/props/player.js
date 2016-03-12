import Prop from 'props/prop';
import canvas from 'canvas';

export default class Player extends Prop {
  constructor(x, y) {
    super(x, y, 10, 60);
  }

  // Players can only move Y axis.
  move(y) {
    return super.move(0, y);
  }

  // For mouse move.
  moveTo(y) {
    const maxY = canvas.height - this.height;

    return super.moveTo(this.x, (y > maxY) ? maxY : y);
  }
}
