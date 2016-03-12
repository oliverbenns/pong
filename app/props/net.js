import Prop from 'props/prop';
import canvas from 'canvas';

export default class Net extends Prop {
  constructor() {
    super(null, null, 8, canvas.height);
  }

  // Players can only move Y axis.
  render() {
    let y = 0;

    while (y < this.height) {
      const line = new Prop();
      line.width = this.width;
      line.height = 20;

      line.render((canvas.width / 2) - (this.width / 2), y);

      y += 40;
    }
  }
}
