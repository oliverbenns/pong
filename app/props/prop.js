import constants from '_constants';
import canvas from 'canvas';

export default class Prop {
  constructor(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width;
    this.height = height;
  }

  draw(color) {
    canvas.context.beginPath();
    canvas.context.rect(this.x, this.y, this.width, this.height);
    canvas.context.fillStyle = color;
    canvas.context.fill();
  }

  spawn(x, y) {
    this.x = x || this.x;
    this.y = y || this.y;

    this.draw(constants.COLORS.PROPS);
  }

  delete() {
    this.draw(constants.COLORS.BACKGROUND);
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
