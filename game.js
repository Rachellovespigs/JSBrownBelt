var canvas;
var ctx;

var PigBobaImage = new Image();
PigBobaImage.src = "PigDrinkingBoba.png";

var BobaImage = new Image();
BobaImage.src = "BOBA.png";

var x, y, width, height;
x = 350;
y = 500;
width = 70;
height = 70;

var BadX, badY, BadWidth, BadHeight;
BadX = 0;
BadY = 0;
BadWidth = 50;
BadHeight = 50;

var keys = [];
var score = 0;

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

    score += 5;
  }

  drawScore();
}

function moveGoodGuy() {
  if (keys["ArrowRight"] == true && x <= 750) x += 20;

  if (keys["ArrowLeft"] == true && x >= 0) x -= 20;

  ctx.drawImage(PigBobaImage, x, y, width, height);
}

function moveBadGuy() {
  ctx.drawImage(BobaImage, BadX, BadY, BadWidth, BadHeight);

  BadY += 25;

  if (BadY > 800) {
    BadY = 0;
    BadX = Math.random() * 800;
  }
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "Arial 100px";
  ctx.fillText("Score: " + score, 10, 10);
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
