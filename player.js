let yPlayer = 550;
let xPlayer = 100;
let playerSpeed = 3;
let playerWidth = 50;
let playerHeight = 70;
let collide = false;
let score = 0;
let randomize1 = [0, 1, 2];
let randomize2 = [3, 4, 5];
let maxScore = 0;

function showPlayer() {
  image(playerIcon, xPlayer, yPlayer, playerWidth, playerHeight);
}

function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    yPlayer -= playerSpeed;
    if (yPlayer <= -50) {
      yPlayer = 570;
      score += 1;
      print("Score!"+speedCars[0]);
      speedCars[random(randomize1)] += 1;
      speedCars[random(randomize2)] -= 1;  
      playerSpeed += random();
    }
  }
  if (keyIsDown(87)) {
    yPlayer -= playerSpeed;
    if (yPlayer <= -50) {
      yPlayer = 570;
      score += 1;
      print("Score!"+speedCars[0]);
      speedCars[random(randomize1)] += 1;  
      speedCars[random(randomize2)] -= 1;
      playerSpeed += random();
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    yPlayer += playerSpeed;
    if (yPlayer > height - 50) {
      yPlayer -= 3;
    }
  }
  if (keyIsDown(83)) {
    yPlayer += playerSpeed;
    if (yPlayer > height - 50) {
      yPlayer -= 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    xPlayer -= playerSpeed;
    if (xPlayer <= -50) {
      xPlayer =810;
    }
  }
  if (keyIsDown(65)) {
    xPlayer -= playerSpeed;
    if (xPlayer <= -50) {
      xPlayer = 810;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xPlayer += playerSpeed;
    if (xPlayer >= 830) {
      xPlayer = -40;
    }
  }
  if (keyIsDown(68)) {
    xPlayer += playerSpeed;
    if (xPlayer >= 830) {
      xPlayer = -40;
    }
  }
}

function checkCollision() {
  for (let i = 0; i < carImages.length; i = i + 1) {
    collide = collideRectRect(
      xCars[i],
      yCars[i],
      carWidth,
      carHeight,
      xPlayer + 10,
      yPlayer + 30,
      playerWidth - 20,
      playerHeight - 30
    );

    if (collide) {
      crash.play();
      print("Crash!");
      xPlayer = 100;
      yPlayer = 550;
      collide = false;
      speedCars = [2, 3, 4, -4, -3, -2];
      playerSpeed = 3;
      
      if (score >= 1) {
        if (score >= maxScore){
                  maxScore = score;
        }

        score = 0;
      }
    }
  }
}
