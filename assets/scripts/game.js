class Player {
  constructor() {
    this.xPlayer = 5;
    this.yPlayer = 270;
  }

  moveUp() {
    this.yPlayer -= 30;
    if (player.yPlayer < 0) {
      player.yPlayer = 0;
    }
  }

  moveDown() {
    this.yPlayer += 30;
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
    this.obstacleRow = 6;
    this.obstacleColumn = 5;
    this.obstaclePadding = 15;
    this.obstacleOffsetTop = 110;
    this.obstacleOffsetLeft = 550;
    this.obstacles = [];
  }

  drawObstacles() {
    for (let i = 0; i < this.obstacleColumn; i++) {
      this.obstacles[i] = [];
      for (let j = 0; j < this.obstacleRow; j++) {
        this.obstacles[i][j] = { x: 0, y: 0, status: 1 };
      }
    }

    for (let col = 0; col < this.obstacleColumn; col++) {
      for (let row = 0; row < this.obstacleRow; row++) {
        let xObstacle =
          col * (15 + this.obstaclePadding) + this.obstacleOffsetLeft;
        let yObstacle =
          row * (50 + this.obstaclePadding) + this.obstacleOffsetTop;
        this.obstacles[col][row].x = xObstacle;
        this.obstacles[col][row].y = yObstacle;
        ctx.beginPath();
        ctx.fillRect(xObstacle, yObstacle, 20, 50);
        ctx.fillStyle = "white";
        ctx.closePath();
      }
    }
    this.checkObstacleCollision();
  }

  checkObstacleCollision() {
    for (let c = 0; c < this.obstacleColumn; c++) {
      for (let r = 0; r < this.obstacleRow; r++) {
        let obstacle = this.obstacles[c][r];
        if (
          ball.xBall > obstacle.xObstacle &&
          ball.xBall < obstacle.xObstacle + 50 &&
          ball.yBall > obstacle.yObstacle &&
          ball.yBall < obstacle.yObstacle + 20
        ) {
          ball.yBallSpeed = -ball.yBallSpeed;
        }
      }
    }
  }
}

class Ball {
  constructor() {
    this.xBall = 350;
    this.yBall = 300;
    this.radius = 6;
    this.xBallSpeed = 3;
    this.yBallSpeed = 0;
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
    this.checkPlayerCollision();
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

  checkPlayerCollision() {
    if (
      this.xBall - this.radius < player.xPlayer + 10 &&
      this.yBall - this.radius < player.yPlayer + 50 &&
      this.yBall + this.radius > player.yPlayer
    ) {
      this.xBallSpeed *= -1;
    }
  }
}

class Game {
  constructor() {}

  // gameOver() {
  //   alert("GAME OVER");
  //     document.location.reload();
  //     clearInterval(interval);
  // }

  checkWin() {}
}
