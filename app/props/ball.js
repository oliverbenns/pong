import Prop from 'props/prop';
import canvas from 'canvas';

export default class Ball extends Prop {
  constructor() {
    const width = 10;
    const height = 10;
    const x = (canvas.width / 2) - (width / 2);
    const y = (canvas.height / 2) - (height / 2);

    super(x, y, width, height);
  }

  fire() {
    setInterval(() => {
      this.move(1, 1);
    }, 10);
  }
}
