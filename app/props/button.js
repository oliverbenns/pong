import constants from '_constants';
import canvas from 'canvas';
import Clickable from 'props/clickable';

export default class Button extends Clickable {
  constructor(y, width, height, text, onClick) {
    const x = canvas.width / 2 - (width / 2);
    super(x, y, width, height, onClick);
    this.text = text;
  }

  render() {
    const fontSize = 48;
    const fontX = canvas.width / 2;

    super.render();

    canvas.context.font = `${fontSize}px Helvetica`;
    canvas.context.textAlign = 'center';
    canvas.context.fillStyle = constants.COLORS.PROPS;
    canvas.context.fillText(this.text, fontX, this.y + (this.height / 2 + 12));
  }
}
