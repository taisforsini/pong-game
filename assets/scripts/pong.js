const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

const player = new Player();
const ball = new Ball();
const obstacles = new Obstacles();

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
  ball.moveBall();
  ball.checkPlayerCollision();

  player.drawPlayer();
  obstacles.drawObstacles();
  obstacles.checkObstacleCollision(ball);
  obstacles.checkWin();
}

const interval = setInterval(updateCanvas, 10);
