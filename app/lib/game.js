import canvas from 'canvas';

export default class Game {
  constructor() {
    canvas.clear();
    this.score = {
      playerOne: 0,
      playerTwo: 0,
    };

    console.log('start the game now.');
  }
}
