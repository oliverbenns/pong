import constants from '_constants';
import canvas from 'canvas';

export default class ScoreBoard {
  renderScore(score, x) {
    const y = 50;
    const fontSize = 32;

    canvas.context.font = `${fontSize}px Helvetica`;
    canvas.context.textAlign = 'center';
    canvas.context.fillStyle = constants.COLORS.PROPS;
    canvas.context.fillText(score, x, y);

    return score;
  }

  render(playerScore, aiScore) {
    this.renderScore(playerScore, canvas.width * 0.25);
    this.renderScore(aiScore, canvas.width * 0.75);
  }
}
