import Player from 'props/player';
import Menu from 'props/menu';
import canvas from 'canvas';

const playerOne = new Player();
const playerTwo = new Player();
const menu = new Menu();

playerOne.spawn(5, 50);
playerTwo.spawn(canvas.width - 15, 50);
setTimeout(function() {
  menu.render();
}, 800);

