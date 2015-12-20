import constants from '_constants';
import canvas from 'canvas';

export default class Menu {
  constructor() {
    this.items = [
      {
        label: 'Play',
        onClick: () => {
          console.log('Go to new game');
        }
      },
      {
        label: 'Settings',
        onClick: () => {
          console.log('Go to settings page');
        }
      },
    ];
  }

  renderItems() {
    this.items.map((item, index) => {
      const x = canvas.width / 2;
      const y = 50 * (index + 1);
      canvas.context.font = '24px Helvetica';
      canvas.context.textAlign = 'center';
      canvas.context.fillStyle = constants.COLORS.PROPS;
      canvas.context.fillText(item.label, x, y);
    });
  }

  render() {
    canvas.clear();
    this.renderItems();
  }
};
