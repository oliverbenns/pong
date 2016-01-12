import Prop from 'props/prop';
import canvas from 'canvas';

export default class Ball extends Prop {
  constructor() {
    super(10, 10);
  }

  spawn() {
    const positionX = (canvas.width / 2) - (this.width / 2);
    const positionY = (canvas.height / 2) - (this.height / 2);
    super.spawn(positionX, positionY);
  }
}
