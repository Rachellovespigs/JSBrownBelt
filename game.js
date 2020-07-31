var canvas;
var ctx;

var x, y, width, height;
x = 10;
y = 10;
width = 50;
height = 50;

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

  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, width, height);

  if (keys["ArrowRight"] == true) x += 10;
}
