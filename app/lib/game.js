import canvas from 'canvas';
import collision from 'lib/collision';

import Ai from 'props/ai';
import Ball from 'props/ball';
import Net from 'props/net';
import Player from 'props/player';
import ScoreBoard from 'props/scoreboard';

import sound from 'lib/sound';

export default class Game {
  constructor() {
    canvas.clear();
    this.ball = new Ball();
    this.player = new Player();
    this.computer = new Ai(this.ball);
    this.net = new Net();
    this.scoreboard = new ScoreBoard();
  }

  endGame() {
    this.player.destroy();
  }

  endRound(score) {
    this.scoreboard.update(score);
  }

  newRound() {
    console.log('start a new round!');
    this.ball.reset();
    this.start();
  }

  updatePositions() {
    this.computer.moveTo();
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
        sound.highShort.play();
        ball
          .rebound(true, false)
          .speedUp();
      }

      switch (collision.isOutOfBounds(ball)) {
        case 'east':
          this.endRound([1, 0]);
          sound.highLong.play();
          this.newRound();
          return cancelAnimationFrame(newFrame);
        case 'west':
          this.endRound([0, 1]);
          sound.highLong.play();
          this.newRound();
          return cancelAnimationFrame(newFrame);
        case 'north':
        case 'south':
          sound.lowShort.play();
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
