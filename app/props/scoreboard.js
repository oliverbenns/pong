import constants from '_constants';
import canvas from 'canvas';

export default class ScoreBoard {
  constructor() {
    this.score = [0, 0];
  }

  update(newScore) {
    this.score = newScore;

    return this.score;
  }

  render() {
    this.score.map((score, index) => {
      const x = (canvas.width / 4) * (index === 0 ? 1 : 3);
      const y = 50;

      const fontSize = 32;

      canvas.context.font = `${fontSize}px Helvetica`;
      canvas.context.textAlign = 'center';
      canvas.context.fillStyle = constants.COLORS.PROPS;
      canvas.context.fillText(score, x, y);

      return score;
    });
  }
}
