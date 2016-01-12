import Player from 'props/player';
import Ball from 'props/ball';
import Net from 'props/net';
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
    const net = new Net();
    const ball = new Ball();

    playerOne.spawn(5, 50);
    playerTwo.spawn(canvas.width - 15, 50);
    // net.spawn();
    ball.spawn();

    mouse.onMove((x, y) => playerOne.moveTo(y));
  }
}
