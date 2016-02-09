import Player from 'props/player';
import Ball from 'props/ball';
import Net from 'props/net';
import canvas from 'canvas';
import mouse from 'lib/mouse';
import events from 'lib/events';
import collision from 'lib/collision';

export default class Game {
  constructor() {
    canvas.clear();
    this.players = [
      new Player(),
      new Player(),
    ];

    this.score = [0, 0];

    this.net = new Net();
    this.ball = new Ball();

    this.newRound();

    mouse.onMove((x, y) => this.players[0].moveTo(y));
  }

  endRound() {
    this.score[0] += 1;
    console.log('endRound');
    console.log('this.score', this.score);
  }

  newRound() {
    canvas.clear();
    this.players[0].spawn(5, 50);
    this.players[1].spawn(canvas.width - 15, 50);
    this.net.spawn();
    this.ball.spawn();
    this.ball.fire();

    // I may need to name this subscription to end the listener.
    events.subscribe('ballMove', (ball) => {
      // Move AI to follow ball. A bit of calculation required to alway keep in center.
      this.players[1].moveTo(ball.y - ((this.players[1].height / 2) - (ball.height / 2)));

      if (collision.isColliding(ball, this.players[0]) || collision.isColliding(ball, this.players[1])) {
        ball.rebound(true, false);
      }

      switch (collision.isOutOfBounds(ball)) {
        case 'east':
        case 'west':
          this.endRound();
          break;
        case 'north':
        case 'south':
          ball.rebound(false, true);
          break;
        default:
          break;
      }
    });
  }
}
