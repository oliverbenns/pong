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
    this.ai = new Ai(this.ball);
    this.net = new Net();
    this.scoreboard = new ScoreBoard();
  }

  endGame() {
    this.player.destroy();
    canvas.classList.remove('in-game');
    const screen = new Screen('Restart', `You ${this.player.score === constants.WINNING_SCORE ? 'Win' : 'Lose'}!`);
    screen.render();
  }

  endRound() {
    sound.highLong.play();

    return this;
  }

  newRound() {
    this.ball.reset();

    return this.start();
  }

  updatePositions() {
    this.ball.move(this.ball.direction.x, this.ball.direction.y);
    this.ai.move();
  }

  renderFrame() {
    canvas.clear();

    [this.player, this.ai, this.net, this.ball].forEach((prop) => prop.render());
    this.scoreboard.render(this.player.score, this.ai.score);
  }

  start() {
    canvas.classList.add('in-game');
    const newFrame = () => {
      const { ball } = this;

      this.updatePositions();
      this.renderFrame();

      if (collision.isColliding(ball, this.player) || collision.isColliding(ball, this.ai)) {
        sound.highShort.play();
        ball
          .rebound(true, false)
          .speedUp();
      }

      switch (collision.isOutOfBounds(ball)) {
        case 'east':
          this.player.score++;
          this
            .endRound()
            .newRound();
          return cancelAnimationFrame(newFrame);
        case 'west':
          this.ai.score++;
          this
            .endRound()
            .newRound();
          return cancelAnimationFrame(newFrame);
        case 'north':
        case 'south':
          sound.lowShort.play();
          ball.rebound(false, true);
          break;
        default:
          break;
      }

      if (this.player.score === constants.WINNING_SCORE || this.ai.score === constants.WINNING_SCORE) {
        return this.endGame();
      }

      return requestAnimationFrame(newFrame);
    };

    requestAnimationFrame(newFrame);

    return this;
  }
}
