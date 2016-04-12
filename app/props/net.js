import Prop from 'props/prop';
import canvas from 'canvas';

export default class Net extends Prop {
  constructor() {
    super(null, null, 8, canvas.height);
  }

  render() {
    const iterationHeight = this.height / 20;
    const lineHeight = iterationHeight * 0.666;
    const spacing = (iterationHeight * 0.333) / 2;

    const x = (canvas.width / 2) - (this.width / 2);
    let y = 0;

    while (y < this.height) {
      const line = new Prop(x, y + spacing, this.width, lineHeight);

      line.render();
      y += iterationHeight;
    }
  }
}
