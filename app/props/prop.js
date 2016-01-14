import constants from '_constants';
import canvas from 'canvas';

export default class Prop {
  constructor(x, y, width, height) {
    this.positionX = x || 0;
    this.positionY = y || 0;
    this.width = width;
    this.height = height;
  }

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
    this.delete();

    this.positionX += x;
    this.positionY += y;
    this.spawn(this.positionX, this.positionY);
  }

  moveTo(x, y) {
    this.delete();
    this.spawn(x, y);
  }
}
