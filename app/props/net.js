import Prop from 'props/prop';
import canvas from 'canvas';

export default class Net extends Prop {
  constructor() {
    super(8, canvas.height);
  }

  // Players can only move Y axis.
  spawn() {
    let positionY = 0;

    while (positionY < this.height) {
      const line = new Prop();
      line.width = this.width;
      line.height = 20;

      line.spawn((canvas.width / 2) - (this.width / 2), positionY);

      positionY += 40;
    }
  }
}
