import Prop from 'props/prop';

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
    super.moveTo(this.positionX, y);
  }
}
