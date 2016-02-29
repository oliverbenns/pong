import constants from '_constants';
import canvas from 'canvas';
import Clickable from 'props/clickable';
import Game from 'lib/game';
import Prop from 'props/prop';

export default class Menu extends Prop {
  constructor() {
    super(0, 0, canvas.width, canvas.height);

    this.clickable = new Clickable(this.x, this.y, this.width, this.height, this.onClick.bind(this));
  }

  onClick() {
    const game = new Game();
    game.start();
    this.destroy();
  }

  destroy() {
    this.clickable.destroy();
  }

  render() {
    const fontSize = 48;
    const fontX = this.width / 2;
    const fontY = this.height / 2;

    canvas.clear();

    this.clickable.render();

    canvas.context.font = `${fontSize}px Helvetica`;
    canvas.context.textAlign = 'center';
    canvas.context.fillStyle = constants.COLORS.PROPS;
    canvas.context.fillText('Play', fontX, fontY);
  }
}
