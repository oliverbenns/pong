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
    console.log('this in Ball class', this);
    setTimeout(() => {
      this.move(200, 200);
    }, 250);
  }
}
