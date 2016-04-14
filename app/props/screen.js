import canvas from 'canvas';
import Game from 'lib/game';
import Prop from 'props/prop';
import Button from 'props/button';

export default class Screen extends Prop {
  constructor() {
    const buttonHeight = 100;

    super(0, 0, canvas.width, canvas.height);

    this.button = new Button(
      (canvas.height / 2) - (buttonHeight / 2),
      200,
      buttonHeight,
      'Play',
      this.onClick.bind(this)
    );
  }

  onClick() {
    const game = new Game();
    game.start();
  }

  render() {
    canvas.clear();
    this.button.render();
  }
}
