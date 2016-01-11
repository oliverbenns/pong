import Prop from 'props/prop';
import canvas from 'canvas';

export default class Player extends Prop {
  constructor() {
    super();

    this.height = 60;
    this.width = 10;
  }

  // Players can only move Y axis.
  move(y) {
    super.move(0, y);
  }

  // For mouse move.
  moveTo(y) {
    const maxY = canvas.height - this.height;

    super.moveTo(this.positionX, (y > maxY) ? maxY : y);
  }
}
