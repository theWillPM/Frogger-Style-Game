function setup() {
  
  createCanvas(800,600);
  ost.loop(); 
}

function draw() {
    background(roadImage);
    showCar();
    showPlayer();
    moveCar();
    moveCar2();
    movePlayer();
    checkCollision();
    scoreBoard();
}

function scoreBoard(){
  textAlign(LEFT);
  textSize(16);
  text("Score",80, 26);
  textSize(16);
  text("MAX:", 80, 44);
  textAlign(RIGHT);
  text(score, 180, 26);
  text(maxScore, 180, 44);  
}