import canvas from 'canvas';
import mouse from 'lib/mouse';
import collision from 'lib/collision';

import Ball from 'props/ball';
import Net from 'props/net';
import Player from 'props/player';
import ScoreBoard from 'props/scoreboard';

export default class Game {
  constructor() {
    canvas.clear();
    this.ball = new Ball();
    this.player = new Player(5, 50);
    this.computer = new Player(canvas.width - 15, this.ball.y);
    this.net = new Net();
    this.scoreboard = new ScoreBoard();

    mouse.onMove((x, y) => this.player.moveTo(y));
  }

  endRound(score) {
    this.scoreboard.update(score);
  }

  newRound() {
    console.log('start a new round!');
  }

  updatePositions() {
    this.computer.moveTo(this.ball.y - ((this.computer.height / 2) - (this.ball.height / 2)));
    this.ball.move(this.ball.direction.x, this.ball.direction.y);
  }

  renderFrame() {
    canvas.clear();

    [this.player, this.computer, this.net, this.scoreboard, this.ball].forEach((prop) => prop.render());
  }

  start() {
    const newFrame = () => {
      const { ball } = this;

      this.updatePositions();
      this.renderFrame();

      if (collision.isColliding(ball, this.player) || collision.isColliding(ball, this.computer)) {
        ball
          .rebound(true, false)
          .speedUp();
      }

      switch (collision.isOutOfBounds(ball)) {
        case 'east':
          this.endRound([0, 1]);
          this.newRound();
          return cancelAnimationFrame(newFrame);
        case 'west':
          this.endRound([1, 0]);
          this.newRound();
          return cancelAnimationFrame(newFrame);
        case 'north':
        case 'south':
          ball.rebound(false, true);
          break;
        default:
          break;
      }

      return requestAnimationFrame(newFrame);
    };

    requestAnimationFrame(newFrame);
  }
}
