import constants from '_constants';
import canvas from 'canvas';

export default class Prop {
  constructor(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width;
    this.height = height;
  }

  render(x, y, color) {
    this.x = x || this.x;
    this.y = y || this.y;

    canvas.context.beginPath();
    canvas.context.rect(this.x, this.y, this.width, this.height);
    canvas.context.fillStyle = color || constants.COLORS.PROPS;
    canvas.context.fill();
  }

  move(x, y) {
    this.x += x;
    this.y += y;

    return this;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;

    return this;
  }
}
