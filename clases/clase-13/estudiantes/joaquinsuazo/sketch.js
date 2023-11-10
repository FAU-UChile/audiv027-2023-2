//global

//player
var p1X = 300;
var p1Y = 475;
var pWidth = 50;
var pHeight = 30;
var pSpeed = 20;

//rocket
var r1X = p1X;
var r1Y = p1Y;
var r1Position = 0;
var rWidth = 7;
var rHeight = 20;
var rSpeed = 5;
var fire = false;

//aliens
var aWidth = 40;
var aHeight = 40;
var row = 1;
var currentRow = row;
var rowDistance = 10;
var aDistance = 0;
var aSpeed = 0.5;
var aDirection = 1;

//fila 1
var a1X = 50;
var a1Y = 150;
var a2X = 110;
var a2Y = 150;
var a3X = 170;
var a3Y = 150;
var a4X = 230;
var a4Y = 150;
var a5X = 290;
var a5Y = 150;
var a6X = 350;
var a6Y = 150;
var a7X = 410;
var a7Y = 150;
var a8X = 470;
var a8Y = 150;
var a9X = 530;
var a9Y = 150;
//fila 2
var a10X = 50;
var a10Y = 210;
var a11X = 110;
var a11Y = 210;
var a12X = 170;
var a12Y = 210;
var a13X = 230;
var a13Y = 210;
var a14X = 290;
var a14Y = 210;
var a15X = 350;
var a15Y = 210;
var a16X = 410;
var a16Y = 210;
var a17X = 470;
var a17Y = 210;
var a18X = 530;
var a18Y = 210;

//counters
var score = 0;
var stage = 0;

var totalTime;
var splashTime;
var gameTime;
var timeLimit = 60;

//multimedia
var playerImage;
var alienImage;

var titleFont;
var bodyFont;

var fireSound;
var explosionSound;
var backgroundMusic;
var startSound;
var winSound;
var loseSound;

//SoundClassifier
let soundClassifier;

function setup() {
  createCanvas(600, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  soundClassifier.classify(gotCommand); 
}

function gotCommand(error, results){
  if (error){
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'Derecha'){
    p1X = p1X+pSpeed;
  }
  
  if (error){
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'Izquierda'){
    p1X = p1X-pSpeed;
  }
  
  if (error){
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'Dispara'){
    fire = true;
    fireSound.play();
  }
  else{
    fire = false;
  }
  
}

function draw(){
  
  totalTime = millis();
 
  if(stage == 0){
    splash();
    }
  if(stage == 1){
  game();
  }
  if (stage == 2){
    win();
  }
  if (stage == 3){
    lose();
  }
  
  if(mouseIsPressed == true) {
    stage = 1;
    startSound.play();
  }
}

function splash(){
  
  splashTime = totalTime;
  
  background(0);
  
  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2,height/2,width,height);
  noStroke();
  
  fill(0,255,0);
  textSize(40);
  textFont(titleFont);
  text('SPACE INVADERS', width/2, 100);
  textSize(15);
  textFont(bodyFont);
  text('GRUPO 3', width/2, 130);
  
  textSize(40);
  textFont(titleFont);
  text('PARA JUGAR:', width/2, 250);
  textSize(15);
  textFont(bodyFont);
  text('DI "IZQUIERDA Y "DERECHA" PARA MOVERTE', width/2, 290);
  text('APRIETA LA TECLA "S" PARA DISPARAR', width/2, 320);
  text('DESTRUYE A TODOS LOS ALIENS PARA GANAR', width/2, 350);
  
  text('HAZ CLICK EN LA PANTALLA PARA EMPEZAR', width/2, 450);
}

function win(){
  background(0,255,0);
  
  stroke(0);
  noFill();
  strokeWeight(3);
  rect(width/2,height/2,width,height);
  noStroke();
  
  fill(0);
  textSize(40);
  textFont(titleFont);
  text('GANASTE', width/2, 200);
  textSize(15);
  textFont(bodyFont);
  text('REFRESCA PARA JUGAR OTRA VEZ', width/2, 230);
}

function lose(){
  background(255,0,0);
  
  stroke(0);
  noFill();
  strokeWeight(3);
  rect(width/2,height/2,width,height);
  noStroke();
  
  fill(0);
  textSize(40);
  textFont(titleFont);
  text('GAME OVER', width/2, 200);
  textSize(15);
  textFont(bodyFont);
  text('REFRESCA PARA JUGAR OTRA VEZ', width/2, 230);
}

function game() {
  
  background(0);
  
  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2,height/2,width,height);
  noStroke();
  fill(0,255,0);
  rect(width/2,25,width,50);
  
  //player
  noStroke();
  fill(0,0,255);
  image(playerImage,p1X,p1Y,pWidth,pHeight);
  
  //run rocket functions
  rockets();
  
  //collisions
  aliens();
  
  //game time
  splashTime = splashTime;
  gameTime = int((totalTime-splashTime)/1000);
  
  //status
  fill(0);
  textSize(20);
  textFont(titleFont);
  text('Puntos:', 50, 35);
  textFont(bodyFont);
  textSize(15);
  text(score, 110, 35);
  
  textSize(20);
  textFont(titleFont);
  text('TIEMPO:', 490, 35);
  textFont(bodyFont);
  textSize(15);
  text(timeLimit-gameTime, 570, 35);
  
  //exit stage
  if(score >= 18){
    stage=2;
    winSound.play();
  }
  
  if(gameTime >= timeLimit){
    stage = 3;
    loseSound.play();
  }
  
}


function rockets(){
  fill(26,175,255);
  rect(r1X,r1Y,rWidth,rHeight);
  
  if(fire == true && r1Position == 0){
    r1Position = 1;
  }
  
  if(r1Position == 1){
    r1X = r1X;
    r1Y = r1Y-rSpeed;
    
    if(r1Y <= 0){
      r1Position = 2;
    }
  }
  else{
    r1Y = p1Y;
    r1X = p1X;
  }
  
  if(r1Position == 2){
    r1Y = p1Y;
    r1X = p1X;
    r1Position = 0;
  }
  
}

function aliens(){
  
  //aliens
  image(alienImage,a1X,a1Y, aWidth,aHeight);
  image(alienImage,a2X,a2Y, aWidth,aHeight);
  image(alienImage,a3X,a3Y, aWidth,aHeight);
  image(alienImage,a4X,a4Y, aWidth,aHeight);
  image(alienImage,a5X,a5Y, aWidth,aHeight);
  image(alienImage,a6X,a6Y, aWidth,aHeight);
  image(alienImage,a7X,a7Y, aWidth,aHeight);
  image(alienImage,a8X,a8Y, aWidth,aHeight);
  image(alienImage,a9X,a9Y, aWidth,aHeight);
  
  image(alienImage,a10X,a10Y, aWidth,aHeight);
  image(alienImage,a11X,a11Y, aWidth,aHeight);
  image(alienImage,a12X,a12Y, aWidth,aHeight);
  image(alienImage,a13X,a13Y, aWidth,aHeight);
  image(alienImage,a14X,a14Y, aWidth,aHeight);
  image(alienImage,a15X,a15Y, aWidth,aHeight);
  image(alienImage,a16X,a16Y, aWidth,aHeight);
  image(alienImage,a17X,a17Y, aWidth,aHeight);
  image(alienImage,a18X,a18Y, aWidth,aHeight);
  
  //se mueven
  a1X = a1X + (aSpeed*aDirection);
  a1Y = a1Y+ aDistance
    a2X = a2X + (aSpeed*aDirection);
  a2Y = a2Y+ aDistance
    a3X = a3X + (aSpeed*aDirection);
  a3Y = a3Y+ aDistance
    a4X = a4X + (aSpeed*aDirection);
  a4Y = a4Y+ aDistance
    a5X = a5X + (aSpeed*aDirection);
  a5Y = a5Y+ aDistance
    a6X = a6X + (aSpeed*aDirection);
  a6Y = a6Y+ aDistance
    a7X = a7X + (aSpeed*aDirection);
  a7Y = a7Y+ aDistance
    a8X = a8X + (aSpeed*aDirection);
  a8Y = a8Y+ aDistance
    a9X = a9X + (aSpeed*aDirection);
  a9Y = a9Y+ aDistance
    a10X = a10X + (aSpeed*aDirection);
  a10Y = a10Y+ aDistance
    a11X = a11X + (aSpeed*aDirection);
  a11Y = a11Y+ aDistance
    a12X = a12X + (aSpeed*aDirection);
  a12Y = a12Y+ aDistance
    a13X = a13X + (aSpeed*aDirection);
  a13Y = a13Y+ aDistance
    a14X = a14X + (aSpeed*aDirection);
  a14Y = a14Y+ aDistance
    a15X = a15X + (aSpeed*aDirection);
  a15Y = a15Y+ aDistance
    a16X = a16X + (aSpeed*aDirection);
  a16Y = a16Y+ aDistance
    a17X = a17X + (aSpeed*aDirection);
  a17Y = a17Y+ aDistance
    a18X = a18X + (aSpeed*aDirection);
  a18Y = a18Y+ aDistance
  
  if(a9X >= width-30){
    aDirection = aDirection*-1;
    row = row+1;
  }
  
  if(a8X >= width-30){
    aDirection = aDirection*-1;
    row = row+1;
  }
  
  if(a1X <= 30){
    aDirection = aDirection*-1;
    row = row+1;
  }
  
  if(row > currentRow){
    aDistance = rowDistance;
    currentRow = row;
  }
  else{
    aDistance = 0;
  }
  
  //game over when at bottom
  
  if(row >= 24){
    stage = 3;
  }
  
  //collision alien 1
  if(r1X >= a1X-aWidth/2 && r1X <= a1X+aWidth/2 && r1Y >= a1Y-aHeight/2 && r1Y <= a1Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a1X = -1000;
    r1Position = 2;
  }
  
  //collision alien 2
  if(r1X >= a2X-aWidth/2 && r1X <= a2X+aWidth/2 && r1Y >= a2Y-aHeight/2 && r1Y <= a2Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a2X = -1000;
    r1Position = 2;
  }
  
  //collision alien 3
  if(r1X >= a3X-aWidth/2 && r1X <= a3X+aWidth/2 && r1Y >= a3Y-aHeight/2 && r1Y <= a3Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a3X = -1000;
    r1Position = 2;
  }
  
  //collision alien 4
  if(r1X >= a4X-aWidth/2 && r1X <= a4X+aWidth/2 && r1Y >= a4Y-aHeight/2 && r1Y <= a4Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a4X = -1000;
    r1Position = 2;
  }
  
  //collision alien 5
  if(r1X >= a5X-aWidth/2 && r1X <= a5X+aWidth/2 && r1Y >= a5Y-aHeight/2 && r1Y <= a5Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a5X = -1000;
    r1Position = 2;
  }
  
  //collision alien 6
  if(r1X >= a6X-aWidth/2 && r1X <= a6X+aWidth/2 && r1Y >= a6Y-aHeight/2 && r1Y <= a6Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a6X = -1000;
    r1Position = 2;
  }
  
  //collision alien 7
  if(r1X >= a7X-aWidth/2 && r1X <= a7X+aWidth/2 && r1Y >= a7Y-aHeight/2 && r1Y <= a7Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a7X = -1000;
    r1Position = 2;
  }
  
  //collision alien 8
  if(r1X >= a8X-aWidth/2 && r1X <= a8X+aWidth/2 && r1Y >= a8Y-aHeight/2 && r1Y <= a8Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a8X = -1000;
    r1Position = 2;
  }
  
  //collision alien 9
  if(r1X >= a9X-aWidth/2 && r1X <= a9X+aWidth/2 && r1Y >= a9Y-aHeight/2 && r1Y <= a9Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a9X = -1000;
    r1Position = 2;
  }
  
  //collision alien 10
  if(r1X >= a10X-aWidth/2 && r1X <= a10X+aWidth/2 && r1Y >= a10Y-aHeight/2 && r1Y <= a10Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a10X = -1000;
    r1Position = 2;
  }
  
  //collision alien 11
  if(r1X >= a11X-aWidth/2 && r1X <= a11X+aWidth/2 && r1Y >= a11Y-aHeight/2 && r1Y <= a11Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a11X = -1000;
    r1Position = 2;
  }
  
  //collision alien 12
  if(r1X >= a12X-aWidth/2 && r1X <= a12X+aWidth/2 && r1Y >= a12Y-aHeight/2 && r1Y <= a12Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a12X = -1000;
    r1Position = 2;
  }
  
  //collision alien 13
  if(r1X >= a13X-aWidth/2 && r1X <= a13X+aWidth/2 && r1Y >= a13Y-aHeight/2 && r1Y <= a13Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a13X = -1000;
    r1Position = 2;
  }
  
  //collision alien 14
  if(r1X >= a14X-aWidth/2 && r1X <= a14X+aWidth/2 && r1Y >= a14Y-aHeight/2 && r1Y <= a14Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a14X = -1000;
    r1Position = 2;
  }
  
  //collision alien 15
  if(r1X >= a15X-aWidth/2 && r1X <= a15X+aWidth/2 && r1Y >= a15Y-aHeight/2 && r1Y <= a15Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a15X = -1000;
    r1Position = 2;
  }
  
  //collision alien 16
  if(r1X >= a16X-aWidth/2 && r1X <= a16X+aWidth/2 && r1Y >= a16Y-aHeight/2 && r1Y <= a16Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a16X = -1000;
    r1Position = 2;
  }
  
  //collision alien 17
  if(r1X >= a17X-aWidth/2 && r1X <= a17X+aWidth/2 && r1Y >= a17Y-aHeight/2 && r1Y <= a17Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a17X = -1000;
    r1Position = 2;
  }
  
  //collision alien 18
  if(r1X >= a18X-aWidth/2 && r1X <= a18X+aWidth/2 && r1Y >= a18Y-aHeight/2 && r1Y <= a18Y+aHeight/2){
    
    explosionSound.play();
    score = score+1
    a18X = -1000;
    r1Position = 2;
  }
  
}

function preload(){
 playerImage = loadImage('player_ship.png');
 alienImage = loadImage ('alien.png');
 titleFont = loadFont ('Pixel_bubble_font.ttf');
 bodyFont = loadFont ('Pixel_font.ttf');
 fireSound = loadSound('8bit_pew.m4a');
 explosionSound = loadSound('8bit_explosion.m4a');
 startSound = loadSound('8bit_charge.m4a');
 winSound = loadSound ('8bit_win.m4a');
 loseSound = loadSound ('8bit_lose.m4a');
 const options = { probabilityThreshold: 0.80};
 soundClassifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/YtI1WGCrT/model.json', options);
}



