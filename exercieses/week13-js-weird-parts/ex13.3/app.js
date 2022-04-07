// Creating object using method 1
var person = {
  firstname: "Joakim",
  lastname: "Edvardsen",
};

console.log("Person created", person);

// Creating object using method 2
function Player(xPos, yPos, name, life) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.name = name;
  this.life = life;

  this.decreaseLife = function (delta) {
    this.life -= delta;
  };

  this.move = function (deltaX, deltaY) {
    this.xPos += deltaX;
    this.yPos += deltaY;
  };

  this.isAlive = function () {
    return this.life > 0;
  };
}

// Test the methods of object
var player1 = new Player(10, 20, "Joakim", 10);
console.log("Player 1 created", player1);
player1.move(10, 10);
console.log("Moved player 1", player1);
player1.decreaseLife(10);
console.log(
  "Removed 10hp from player 1. Is he still alive?",
  player1.isAlive()
);

// Create object using method 3
class Enemy {
  constructor(xPos, yPos, name, life) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.name = name;
    this.life = life;
  }

  decreaseLife(delta) {
    this.life -= delta;
  }

  move(deltaX, deltaY) {
    this.xPos += deltaX;
    this.yPos += deltaY;
  }

  isAlive() {
    return this.life > 0;
  }
}

// Test the methods of the object
var enemy1 = new Enemy(15, 15, "Adam", 5);
console.log("Enemy 1 created", enemy1);
enemy1.move(-10, -10);
console.log("Moved enemy 1", enemy1);
enemy1.decreaseLife(-10);
console.log("Enemy 1 took a hp potion. Is he still alive?", enemy1.isAlive());

// Create object using method 4
var Boss = {
  xPos: 100,
  yPos: 100,
  name: "Jan Ronny",
  life: 1000,
  decreaseLife: function (delta) {
    this.life -= delta;
  },
  move: function (deltaX, deltaY) {
    (this.xPos += deltaX), (this.yPos += deltaY);
  },
  isAlive: function () {
    return this.life > 0;
  },
  getLife: function () {
    return this.life;
  },
};

var boss = Object.create(Boss);
console.log(boss);
