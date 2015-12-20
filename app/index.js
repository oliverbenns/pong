import Player from 'props/player';
import Menu from 'props/menu';
import canvas from 'canvas';
import mouse from 'lib/mouse';

const playerOne = new Player();
const playerTwo = new Player();
const menu = new Menu();


menu.render();

mouse.onMouseMove(function(x, y) {
  console.log(x, y);
});

setTimeout(function() {
  canvas.clear();
  playerOne.spawn(5, 50);
  playerTwo.spawn(canvas.width - 15, 50);
}, 800);


const rect = canvas.getBoundingClientRect();

const offsetX = rect.left;
const offsetY = rect.top;

function handleMouseDown(e) {
  const mouseX = parseInt(e.clientX - offsetX);
  const mouseY = parseInt(e.clientY - offsetY);

  // Put your mousedown stuff here
  let clicked = "";
  for (let i = 0; i < rects.length; i++) {
    if (rects[i].isPointInside(mouseX, mouseY)) {
      clicked += rects[i].id + ' ';
    }
  }
  if (clicked.length > 0) {
    alert('Clicked rectangles: ' + clicked);
  }
}

//
const rects = [];
//
rects.push(new Clickable('Red-Rectangle', 15, 35, 65, 60, 'red'));
rects.push(new Clickable('Green-Rectangle', 60, 80, 70, 50, 'green'));
rects.push(new Clickable('Blue-Rectangle', 125, 25, 25, 25, 'blue'));

canvas.addEventListener('click', handleMouseDown);
