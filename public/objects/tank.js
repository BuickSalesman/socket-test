// tank.js
const Matter = require("matter-js");
const { Bodies } = Matter;

const {
  CATEGORY_TANK,
  CATEGORY_TURRET,
  CATEGORY_FORTRESS,
  CATEGORY_SHELL,
  CATEGORY_SHAPE,
} = require("./collisionCategories");

module.exports = {
  createTank: function (x, y, tankSize, playerId) {
    const area = tankSize * tankSize; // Assuming a square tank
    const desiredMass = 100; // Set your desired mass
    const density = desiredMass / area;

    const tank = Bodies.rectangle(x, y, tankSize, tankSize, {
      label: "Tank",
      playerId: playerId,
      restitution: 0,
      friction: 0.005,
      frictionAir: 0.1,
      density: density,
      isStatic: false,
      render: {
        fillStyle: "transparent",
        strokeStyle: "black",
        lineWidth: 2,
      },
      collisionFilter: {
        group: 0,
        category: CATEGORY_TANK,
        mask: CATEGORY_TANK | CATEGORY_TURRET | CATEGORY_FORTRESS | CATEGORY_SHELL | CATEGORY_SHAPE,
      },
    });

    tank.hitPoints = 2;
    tank.fixedConstraint = null;

    return tank;
  },
};
