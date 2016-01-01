import Player from 'props/player';
import canvas from 'canvas';
import mouse from 'lib/mouse';

export default class Game {
  constructor() {
    canvas.clear();
    this.score = {
      playerOne: 0,
      playerTwo: 0,
    };

    const playerOne = new Player();
    const playerTwo = new Player();

    playerOne.spawn(5, 50);
    playerTwo.spawn(canvas.width - 15, 50);

    mouse.onMove((x, y) => playerOne.moveTo(y));

  }
}
