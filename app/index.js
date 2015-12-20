import Player from 'props/player';

const playerOne = new Player();
const playerTwo = new Player();

playerOne.spawn(5, 50);
playerTwo.spawn(canvas.width - 15, 50);
