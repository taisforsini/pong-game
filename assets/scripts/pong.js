const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");

let upPressed = false;
let downPressed = false;

const player = new Player();
const ball = new Ball();
const obstacles = new Obstacles();

document.addEventListener("keydown", player.keyDown, false);
document.addEventListener("keyup", player.keyUp, false);

// document.addEventListener("keydown", (e) => {
//   switch (e.keyCode) {
//     case 38:
//       paddle.moveUp();
//       break;
//     case 40:
//       paddle.moveDown();
//       break;
//   }
//   updateCanvas();
// });

function updateCanvas() {
  ctx.clearRect(0, 0, 700, 600);
  ball.drawBall();
  player.drawPlayer();

  obstacles.drawObstacles(685, 270, "white");
  obstacles.drawObstacles(685, 210, "white");
  obstacles.drawObstacles(685, 150, "white");
  obstacles.drawObstacles(685, 90, "white");
  obstacles.drawObstacles(685, 330, "white");
  obstacles.drawObstacles(685, 390, "white");
  obstacles.drawObstacles(685, 450, "white");

  if (upPressed) {
    player.yPlayer -= 5;
    if (player.yPlayer + 10 > 700) {
      player.yPlayer = 0;
    }
  } else if (downPressed) {
    player.yPlayer += 5;
    if (player.yPlayer < 0) {
      player.yPlayer = 0;
    }
  }
}

const interval = setInterval(updateCanvas, 10);
