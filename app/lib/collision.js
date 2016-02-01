import canvas from 'canvas';

export default {
  isOutOfBounds: function(prop) {
    return (
      prop.positionY === canvas.height ||
      prop.positionY === 0 ||
      prop.positionX === canvas.width ||
      prop.positionX === 0
    );
  },

  isColliding: function(prop1, prop2) {
    // Axis-Aligned Bounding Box Collision Detection
    // https://www.youtube.com/watch?v=ghqD3e37R7E

    // I need to not mutate data. Just want it in scope of here.
    prop1.foo = 2;


    const AX = prop1.positionX + prop1.width;
    const AY = prop1.positionY + prop1.height;

    const BX = prop2.positionX + prop2.width;
    const BY = prop2.positionY + prop2.height;

    const onSameYAxis = (AY >= prop2.positionY && AY <= BY) || (prop1.positionY >= prop2.positionY && prop1.positionY <= BY);
    const onSameXAxis = (AX >= prop2.positionX && AX <= BX) || (prop1.positionX >= prop2.positionX && prop1.positionX <= BX);

    return onSameYAxis && onSameXAxis;

    // Not sure if this is more easy to reason about. Leaving here for now.
    // return !(
    //   AX < prop2.positionX ||
    //   BX < prop1.positionX ||
    //   AY < prop2.positionY ||
    //   BY < prop1.positionY
    // );
  },

  // Detect when hit left / right hand canvas side
  // Detect when hit top / bottom canvas side
  // Detect when object touches other object.
};
