var canvas;
var ctx;

var x, y, width, height;
x = 350;
y = 500;
width = 50;
height = 50;

var BadX, badY, BadWidth, BadHeight;
BadX = 0;
BadY = 0;
BadWidth = 20;
BadHeight = 20;

var keys = [];

window.onkeydown = function (event) {
  keys[event.key] = true;
};

window.onkeyup = function (event) {
  keys[event.key] = false;
};

function startGame() {
  canvas = document.getElementById("gc");
  ctx = canvas.getContext("2d");

  window.setInterval(update, 100);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  moveGoodGuy();
  moveBadGuy();

  if (checkCollisions(width, height, x, y, BadWidth, BadHeight, BadX, BadY)) {
    BadY = 0;
    BadX = Math.random() * 800;
  }
}

function moveGoodGuy() {
  if (keys["ArrowRight"] == true) x += 20;

  if (keys["ArrowLeft"] == true) x -= 20;

  ctx.fillStyle = "blue";
  ctx.fillRect(BadX, BadY, BadWidth, BadHeight);
}

function moveBadGuy() {
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, width, height);

  BadY += 25;

  if (BadY > 800) {
    BadY = 0;
    BadX = Math.random() * 800;
  }
}

function checkCollisions(
  rect1Width,
  rect1Height,
  rect1XPos,
  rect1YPos,
  rect2Width,
  rect2Height,
  rect2XPos,
  rect2YPos
) {
  if (
    rect1XPos < rect2XPos + rect2Width &&
    rect1XPos + rect1Width > rect2XPos &&
    rect1YPos < rect2YPos + rect2Height &&
    rect1Height + rect1YPos > rect2YPos
  ) {
    return true;
  } else {
    return false;
  }
}
