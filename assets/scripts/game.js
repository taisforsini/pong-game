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
    this.obstacleRow = 5;
    this.obstacleColumn = 5;
    this.obstaclePadding = 15;
    this.obstacleOffsetTop = 135;
    this.obstacleOffsetLeft = 550;
    this.obstacles = [];
    this.score = 0;

    for (let i = 0; i < this.obstacleColumn; i++) {
      this.obstacles[i] = [];
      for (let j = 0; j < this.obstacleRow; j++) {
        this.obstacles[i][j] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  drawObstacles() {
    for (let col = 0; col < this.obstacleColumn; col++) {
      for (let row = 0; row < this.obstacleRow; row++) {
        if (this.obstacles[col][row].status === 1) {
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
    }
  }

  checkObstacleCollision(ball) {
    for (let c = 0; c < this.obstacleColumn; c++) {
      for (let r = 0; r < this.obstacleRow; r++) {
        let obstacle = this.obstacles[c][r];
        if (
          ball.xBall > obstacle.x &&
          ball.xBall < obstacle.x + 20 &&
          ball.yBall > obstacle.y &&
          ball.yBall < obstacle.y + 50 &&
          this.obstacles[c][r].status === 1
        ) {
          ball.xBallSpeed *= -1;
          this.obstacles[c][r].status = 0;
          this.score++;
        }
      }
      score.innerHTML = `Score: ${this.score}`;
    }
  }

  checkWin() {
    if (this.score === this.obstacleRow * this.obstacleColumn) {
      alert("CONGRATS! YOU WON :)");
      document.location.reload();
      clearInterval(interval);
    }
  }
}

class Ball {
  constructor() {
    this.xBall = 350;
    this.yBall = 300;
    this.radius = 6;
    this.xBallSpeed = -4;
    this.yBallSpeed = 0.8;
  }

  drawBall() {
    ctx.beginPath();
    ctx.arc(this.xBall, this.yBall, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  moveBall() {
    this.xBall += this.xBallSpeed;
    this.yBall += this.yBallSpeed;

    if (this.xBall + this.radius > 700) {
      this.xBallSpeed *= -1;
    } else if (this.xBall - this.radius < 0) {
      alert("OH NO! GAME OVER :(");
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
