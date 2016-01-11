import Prop from 'props/prop';
import canvas from 'canvas';

export default class Net extends Prop {
  constructor() {
    super();
    this.width = 8;
    this.height = canvas.height;
  }

  // Players can only move Y axis.
  spawn() {
    let i = 0;

    while (i < this.height) {
      const position = i * 40;
      const line = new Prop(this.width, 20);
      line.spawn((canvas.width / 2) - (this.width / 2), position);
      i++;
    }
  }
}
