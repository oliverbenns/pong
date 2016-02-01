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
    console.log('prop1', prop1);
    console.log('prop2', prop2);

    // Axis-Aligned Bounding Box Collision Detection
    // https://www.youtube.com/watch?v=ghqD3e37R7E

    const Ax = prop1.positionX;
    const Ay = prop1.positionY;

    const AX = prop1.positionX + prop1.width;
    const AY = prop1.positionY + prop1.height;

    const Bx = prop2.positionX;
    const By = prop2.positionY;

    const BX = prop2.positionX + prop2.width;
    const BY = prop2.positionY + prop2.height;

    // console.log('Ax', Ax);
    // console.log('Ay', Ay);
    // console.log('AX', AX);
    // console.log('AY', AY);
    // console.log('Bx', Bx);
    // console.log('By', By);
    // console.log('BX', BX);
    // console.log('BY', BY);

    return !(
      AX < Bx ||
      BX < Ax ||
      AY < By ||
      BY < Ay
    );

  },

  // Detect when hit left / right hand canvas side
  // Detect when hit top / bottom canvas side
  // Detect when object touches other object.
};
