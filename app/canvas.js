import constants from '_constants';

const canvas = document.getElementById('pong');
canvas.context = canvas.getContext('2d');

canvas.context.fillStyle = constants.COLORS.BACKGROUND;
canvas.context.fillRect(0, 0, canvas.width, canvas.height);

export default canvas;
