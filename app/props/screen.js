import canvas from 'canvas';
import constants from '_constants';
import Game from 'lib/game';
import Prop from 'props/prop';
import Button from 'props/button';

export default class Screen extends Prop {
  constructor(cta, label) {
    const buttonHeight = 100;
    const buttonY = (label ? (canvas.height * 0.66) : (canvas.height / 2)) - (buttonHeight / 2);

    super(0, 0, canvas.width, canvas.height);
    this.label = label;

    this.button = new Button(
      buttonY,
      200,
      buttonHeight,
      cta || 'Play',
      this.label ? 27 : 48,
      this.onClick.bind(this)
    );
  }

  onClick() {
    const game = new Game();
    game.start();
  }

  renderLabel() {
    const fontSize = 60;
    const fontX = canvas.width / 2;
    const fontY = canvas.height / 2 - (fontSize / 2);

    canvas.context.font = `${fontSize}px Helvetica`;
    canvas.context.textAlign = 'center';
    canvas.context.fillStyle = constants.COLORS.PROPS;
    canvas.context.textBaseline = 'middle';
    canvas.context.fillText(this.label, fontX, fontY);
  }

  render() {
    canvas.clear();

    if (this.label) {
      this.renderLabel();
    }

    this.button.render();
  }
}
