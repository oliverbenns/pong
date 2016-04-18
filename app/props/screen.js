import canvas from 'canvas';
import Game from 'lib/game';
import Prop from 'props/prop';
import Button from 'props/button';

export default class Screen extends Prop {
  constructor(cta, label) {
    const buttonHeight = 100;

    super(0, 0, canvas.width, canvas.height);
    this.label = label;

    this.button = new Button(
      (canvas.height / 2) - (buttonHeight / 2),
      200,
      buttonHeight,
      cta || 'Play',
      this.onClick.bind(this)
    );
  }

  onClick() {
    const game = new Game();
    game.start();
  }

  renderLabel() {
    const fontSize = 32;
    const fontX = canvas.width / 2;
    const fontY = 50;

    canvas.context.font = `${fontSize}px Helvetica`;
    canvas.context.textAlign = 'center';
    canvas.context.fillStyle = 'constants.COLORS.PROPS';
    canvas.context.textBaseline = 'middle';
    canvas.context.fillText(this.label, fontX, fontY);
  }

  render() {
    canvas.clear();


    this.button.render();

    // @TODO: Why cant this go above?
    if (this.label) {
      console.log('testing...');
      this.renderLabel();
    }
  }
}
