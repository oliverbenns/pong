const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

const COLORS = {
  BACKGROUND: '#000',
  PROPS: '#FFF',
};

context.fillStyle = COLORS.BACKGROUND;
context.fillRect(0, 0, canvas.width, canvas.height);

const Player = function player() {};

Player.prototype.draw = function draw(positionX, positionY) {
  context.beginPath();
  context.rect(positionX, positionY, 10, 20);
  context.fillStyle = COLORS.PROPS;
  context.fill();
};

const playerOne = new Player();
const playerTwo = new Player();

playerOne.draw(5, 50);
playerTwo.draw(285, 50);
