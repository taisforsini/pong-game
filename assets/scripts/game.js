class Player {
  constructor() {
    this.xPlayer = 5;
    this.yPlayer = 270;
  }

  moveUp() {
    this.yPlayer -= 25;
    if (player.yPlayer < 0) {
      player.yPlayer = 0;
    }
  }

  moveDown() {
    this.yPlayer += 25;
    if (player.yPlayer > 550) {
      player.yPlayer = 550;
    }
  }

  drawPlayer() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(this.xPlayer, this.yPlayer, 10, 50);
    ctx.closePath();
  }
}

class Obstacles {
  constructor() {
    this.obstacleRow = 3;
    this.obstacleColumn = 5;
    this.obstaclePadding = 10;
    this.obstacleOffsetTop = 30;
    this.obstacleOffsetLeft = 30;
  }
  drawObstacles(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 10, 50);
  }

  //   drawObstacles() {
  //     // let xObstacle = col * (10 + obstaclePadding) + obstacleOffsetLeft;
  //     // let yObstacle = row * (50 + obstaclePadding) + obstacleOffsetTop;
  //     let obstacles = [];

  //     for (let i = 0; i < this.obstacleColumn; i++) {
  //       obstacles[i] = [];
  //       for (let j = 0; j < this.obstacleRow; j++) {
  //         obstacles[i][j] = { x: 0, y: 0 };
  //       }
  //     }

  //     for (let col = 0; col < this.obstacleColumn; col++) {
  //       for (let row = 0; row < this.obstacleRow; row++) {
  //         let xObstacle = col * (10 + obstaclePadding) + obstacleOffsetLeft;
  //         let yObstacle = row * (50 + obstaclePadding) + obstacleOffsetTop;
  //         obstacles[col][row].x = xObstacle;
  //         obstacles[col][row].y = yObstacle;
  //         ctx.beginPath();
  //         ctx.fillRect(xObstacle, yObstacle, 10, 50);
  //         ctx.fillStyle = "white";
  //         ctx.closePath();
  //       }
  //     }
  //   }
}

class Ball {
  constructor() {
    this.xBall = 350;
    this.yBall = 300;
    this.radius = 6;
    this.xBallSpeed = 3;
    this.yBallSpeed = -3;
  }

  drawBall() {
    ctx.beginPath();
    ctx.arc(this.xBall, this.yBall, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    this.moveBall();
  }

  moveBall() {
    this.checkCollision();
    this.xBall += this.xBallSpeed;
    this.yBall += this.yBallSpeed;

    if (this.xBall + this.radius > 700) {
      this.xBallSpeed *= -1;
    } else if (this.xBall - this.radius < 0) {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval);
    } else if (this.yBall + this.radius > 600) {
      this.yBallSpeed *= -1;
    } else if (this.yBall - this.radius < 1) {
      this.yBallSpeed *= -1;
    }
  }

  checkCollision() {
    if (
      this.xBall - this.radius < player.xPlayer + 10 &&
      this.yBall - this.radius < player.yPlayer + 50 &&
      this.yBall + this.radius > player.yPlayer
    ) {
      this.xBallSpeed *= -1;
    }
  }
}
