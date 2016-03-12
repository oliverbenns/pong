import canvas from 'canvas';
import mouse from 'lib/mouse';
import events from 'lib/events';
import collision from 'lib/collision';

import Ball from 'props/ball';
import Net from 'props/net';
import Player from 'props/player';
import ScoreBoard from 'props/scoreboard';

export default class Game {
  constructor() {
    canvas.clear();
    this.players = [
      new Player(),
      new Player(),
    ];

    this.net = new Net();
    this.ball = new Ball();
    this.scoreboard = new ScoreBoard();

    mouse.onMove((x, y) => this.players[0].moveTo(y));
  }

  endRound(score) {
    this.scoreboard.update(score);
  }

  newRound() {
    console.log('start a new round!');
  }

  start() {
    canvas.clear();
    this.players[0].spawn(5, 50);
    this.players[1].spawn(canvas.width - 15, 50);
    this.net.spawn();
    this.ball.spawn();
    this.scoreboard.render();

    const setFrame = (ball) => {
      canvas.clear();
      this.players[1].moveTo(ball.y - ((this.players[1].height / 2) - (ball.height / 2)));

      this.players[0].spawn();
      this.players[1].spawn();
      this.net.spawn();

      if (collision.isColliding(ball, this.players[0]) || collision.isColliding(ball, this.players[1])) {
        ball.rebound(true, false);
        ball.speedUp();
      }

      this.ball.move(this.ball.direction.x, this.ball.direction.y);
      this.ball.spawn();

      switch (collision.isOutOfBounds(ball)) {
        case 'east':
          this.endRound([0, 1]);
          this.newRound();
          break;
        case 'west':
          this.endRound([1, 0]);
          this.newRound();
          break;
        case 'north':
        case 'south':
          ball.rebound(false, true);
          break;
        default:
          break;
      }
    };

    // Move AI to follow ball. A bit of calculation required to always keep in center.

    const newFrame = () => {
      setFrame(this.ball);

      return requestAnimationFrame(newFrame);
    };

    requestAnimationFrame(newFrame);
  }
}
