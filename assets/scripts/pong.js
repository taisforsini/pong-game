const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");

const player = new Player();
const ball = new Ball();
const obstacles = new Obstacles();
const game = new Game();

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 38:
      player.moveUp();
      break;
    case 40:
      player.moveDown();
      break;
  }
});

function updateCanvas() {
  ctx.clearRect(0, 0, 700, 600);
  ball.drawBall();
  player.drawPlayer();
  obstacles.drawObstacles();
}

const interval = setInterval(updateCanvas, 10);
