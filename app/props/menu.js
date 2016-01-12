import constants from '_constants';
import canvas from 'canvas';
import Clickable from 'props/clickable';
import Game from 'lib/game';

export default class Menu {
  constructor() {
    this.items = [
      {
        label: 'Play',
        onClick: () => {
          const game = new Game();

        },
      },
      {
        label: 'Settings',
        onClick: () => {
          console.log('Go to settings page');
        },
      },
    ];
  }

  onClick(item) {
    item.onClick();
    this.destroy();
  }

  renderItems() {
    this.items.map((item, index) => {
      const x = canvas.width / 2;
      const y = 50 * (index + 1);

      const fontSize = 24;
      const clickHeight = fontSize * 1.5;
      const clickWidth = 150;

      const clickable = new Clickable(clickWidth, clickHeight, x - (clickWidth / 2), y - fontSize, this.onClick.bind(this, item));

      clickable.render();

      canvas.context.font = `${fontSize}px Helvetica`;
      canvas.context.textAlign = 'center';
      canvas.context.fillStyle = constants.COLORS.PROPS;
      canvas.context.fillText(item.label, x, y);

      item.clickable = clickable;
      return item;
    });
  }

  destroy() {
    this.items.forEach(item => item.clickable.destroy());
  }

  render() {
    canvas.clear();
    this.renderItems();
  }
}
