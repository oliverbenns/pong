import Prop from 'props/prop';
import canvas from 'canvas';

export default class Player extends Prop {
  constructor() {
    super(null, null, 10, 60);
  }

  // Players can only move Y axis.
  move(y) {
    super.move(0, y);
  }

  // For mouse move.
  moveTo(y) {
    const maxY = canvas.height - this.height;

    super.moveTo(this.x, (y > maxY) ? maxY : y);
  }
}
