class Player {
  constructor() {
    this.xPlayer = 5;
    this.yPlayer = 270;
  }

  keyUp(e) {
    if (e.key == "Up" || e.key == "ArrowUp") {
      upPressed = true;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      downPressed = true;
    }
  }

  keyDown(e) {
    if (e.key == "Up") {
      upPressed = false;
    } else if (e.key == "Down") {
      downPressed = false;
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
  drawObstacles(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 10, 50);
  }
}

class Ball {
  constructor() {
    this.xBall = 350;
    this.yBall = 300;
    this.radius = 6;
    this.xBallSpeed = 2;
    this.yBallSpeed = -2;
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
    this.xBall += this.xBallSpeed;
    this.yBall += this.yBallSpeed;

    if (this.xBall > 700) {
      this.xBallSpeed *= -1;
    } else if (this.xBall < 0) {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval);
    } else if (this.yBall > 600) {
      this.yBallSpeed *= -1;
    } else if (this.yBall < 1) {
      this.yBallSpeed *= -1;
    }
  }
}
