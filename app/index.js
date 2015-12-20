import Player from 'props/player';
import canvas from 'canvas';

const playerOne = new Player();
const playerTwo = new Player();

playerOne.spawn(5, 50);
playerTwo.spawn(canvas.width - 15, 50);
