let car1;
let player;
let road;
let ost;

function preload(){
  roadImage = loadImage("images/estrada2.png");
  playerIcon = loadImage("images/Chiara2.png");
  car1 = loadImage("images/carro-1.png");
  car2 = loadImage("images/carro-2.png");
  car3 = loadImage("images/carro-3.png");
  car4 = loadImage("images/carro-4.png");
  car5 = loadImage("images/carro-5.png");
  car6 = loadImage("images/carro-6.png");
  ost = loadSound("Soundtrack1.wav");
  ost.setVolume(0.1);
  crash = loadSound("Crash.wav");
  crash.setVolume(0.4);
  carImages = [car1, car2, car3, car4, car5, car6];
}