import canvas from 'canvas';
import collision from 'lib/collision';
import constants from '_constants';

import Ai from 'props/ai';
import Ball from 'props/ball';
import Net from 'props/net';
import Player from 'props/player';
import ScoreBoard from 'props/scoreboard';
import Screen from 'props/screen';

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

  endGame(score) {
    this.player.destroy();
    const screen = new Screen('Restart', `You ${score[0] === constants.WINNING_SCORE ? 'Win' : 'Lose'}!`);
    screen.render();
  }

  endRound(score) {
    this.scoreboard.update(score);
  }

  newRound() {
    this.ball.reset();
    this.start();
  }

  updatePositions() {
    this.ball.move(this.ball.direction.x, this.ball.direction.y);
    this.computer.move();
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

      if (this.scoreboard.score[0] === constants.WINNING_SCORE || this.scoreboard.score[1] === constants.WINNING_SCORE) {
        return this.endGame(this.scoreboard.score);
      }

      return requestAnimationFrame(newFrame);
    };

    requestAnimationFrame(newFrame);
  }
}
