import canvas from 'canvas';
import constants from '_constants';

export default class Player {
  constructor() {
    this.height = 20;
    this.width = 10;
  }

  spawn(positionX, positionY) {
    canvas.context.beginPath();
    canvas.context.rect(positionX, positionY, this.width, this.height);
    canvas.context.fillStyle = constants.COLORS.PROPS;
    canvas.context.fill();
  }
}
