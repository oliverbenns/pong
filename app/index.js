import Player from 'props/player';
import Menu from 'props/menu';
import canvas from 'canvas';

const playerOne = new Player();
const playerTwo = new Player();
const menu = new Menu();


menu.render();

setTimeout(function() {
  canvas.clear();
  playerOne.spawn(5, 50);
  playerTwo.spawn(canvas.width - 15, 50);
}, 800);

