import constants from '_constants';
import canvas from 'canvas';

export default class Prop {
  draw(color) {
    canvas.context.beginPath();
    canvas.context.rect(this.positionX, this.positionY, this.width, this.height);
    canvas.context.fillStyle = color;
    canvas.context.fill();
  }

  spawn(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;

    this.draw(constants.COLORS.PROPS);
  }

  delete() {
    this.draw(constants.COLORS.BACKGROUND);
  }

  move(x, y) {
    const positionX = this.positionX + x;
    const positionY = this.positionY + y;
    this.delete();
    this.spawn(positionX, positionY);
  }

  moveTo(x, y) {
    this.delete();
    this.spawn(x, y);
  }
}
