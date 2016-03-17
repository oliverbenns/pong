import canvas from 'canvas';

export default {
  isOutOfBounds(prop) {
    const AX = prop.x + prop.width;
    const AY = prop.y + prop.height;

    if (prop.y <= 0) {
      return 'north';
    }

    if (AY >= canvas.height) {
      return 'south';
    }

    if (AX >= canvas.width) {
      return 'east';
    }

    if (prop.x <= 0) {
      return 'west';
    }

    return false;
  },

  isColliding(prop1, prop2) {
    // Axis-Aligned Bounding Box Collision Detection
    // https://www.youtube.com/watch?v=ghqD3e37R7E

    const AX = prop1.x + prop1.width;
    const AY = prop1.y + prop1.height;

    const BX = prop2.x + prop2.width;
    const BY = prop2.y + prop2.height;

    const onSameYAxis = (AY >= prop2.y && AY <= BY) || (prop1.y >= prop2.y && prop1.y <= BY);
    const onSameXAxis = (AX >= prop2.x && AX <= BX) || (prop1.x >= prop2.x && prop1.x <= BX);

    return onSameYAxis && onSameXAxis;

    // Not sure if this is more easy to reason about. Leaving here for now.
    // return !(
    //   AX < prop2.x ||
    //   BX < prop1.x ||
    //   AY < prop2.y ||
    //   BY < prop1.y
    // );
  },

  // Detect when hit left / right hand canvas side
  // Detect when hit top / bottom canvas side
  // Detect when object touches other object.
};
