const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");

let x = 700 / 2;
let y = 600 - 30;
let paddleX = (600 - 50) / 2;

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
  player.drawPlayer();
  //   obstacles.drawObstacles();

  obstacles.drawObstacles(685, 270, "white");
  obstacles.drawObstacles(685, 210, "white");
  obstacles.drawObstacles(685, 150, "white");
  obstacles.drawObstacles(685, 90, "white");
  obstacles.drawObstacles(685, 330, "white");
  obstacles.drawObstacles(685, 390, "white");
  obstacles.drawObstacles(685, 450, "white");
}

const interval = setInterval(updateCanvas, 10);
