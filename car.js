//Car Variables
let yCars = [70, 160, 240, 320, 400, 480];
let speedCars = [2, 3, 4, -4, -3, -2];
let xCars = [600, 200, 1200, 100, 200, 600];
let carWidth = 70;
let carHeight = 40;


function showCar(){
  for (let i = 0; i < carImages.length; i += 1){
    image(carImages[i], xCars[i], yCars[i], carWidth, carHeight);
  }
}


function moveCar(){
  for (let i = 0 ; i < 3 ; i+= 1){
    xCars[i] -= speedCars[i];
  if (xCars[i]<-100){
    xCars[i]=1000;
  }
}
}

function moveCar2(){
  for (let i=3; i < carImages.length ; i += 1){
    xCars[i] -= speedCars[i];
  if(xCars[i]> 900){
    xCars[i] = -100;
  }
}
}
