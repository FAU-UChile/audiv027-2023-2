// ejemplo-ml5js-char-rnn
// usa biblioteca ml5.js 0.12.2 y p5.js 1.7.0
// basado en trabajo previo de @montoyamoraga

// mas fonts en
// https://open-foundry.com/

let oneFrame = null;
let oneFrameLength = 300;
let oneFrameTemperature = 0.9;

let currentDecimas = null;
let currentDecimasPlaceHolder = "loading...";

let rnn;
let generating = false;
let temperature = 0.9;

let decimasLines = 10;
let currentLine = 0;
let justDidNewLine = false;

const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let myFont = null;

// when the model is loaded
function modelLoaded() {
  console.log("model loaded!");
  detectOneFrame();
}

function preload() {
  myFont = loadFont('./assets/WorkSans-Light.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  rnn = new ml5.charRNN("./models/quijote", modelLoaded);
  
  currentDecimas = allChars[int(random(allChars.length))];
  
}

function draw() {

  // white background
  background(255);

  // display generated text
  push();
  textSize(12);
  textAlign(CENTER);
  fill(0);
  noStroke();
  textFont(myFont);
  if (currentDecimas.length > 1) {
    text(currentDecimas, 50*windowWidth/100, 25*windowHeight/100);
  } else {
    text(currentDecimasPlaceHolder, 40*windowWidth/100, 25*windowHeight/100);
  }
  pop();

}

function detectOneFrame() {
    oneFrame = false;
    generate();
}

function generate() {
  if (generating) {
    generating = false;
  } else {
    generating = true;
    loopRNN();
  }
}

async function loopRNN() {
  while (generating) {
    await predict();
  }
}

async function predict() {

  let next = await rnn.predict(temperature);
  await rnn.feed(next.sample);
  if (next.sample == "\r" || next.sample == "\n") {
    if (!justDidNewLine) {

      // create array of all lines
      let allLines = currentDecimas.split("\n");
      // retrieve last line
      // let lastLine = allLines[allLines.length - 1];
      let lastLine = allLines[currentLine];
      // say the last line
      // p5Speech.speak(lastLine);

      currentDecimas = currentDecimas + "\n";
      justDidNewLine = true;
      currentLine = currentLine + 1
    
    }
  } else {
    currentDecimas = currentDecimas + next.sample;
    justDidNewLine = false;
    
  }

  if (currentLine > decimasLines - 1) {
    currentDecimas = currentDecimas + "\n";
    justDidNewLine = false;
    currentLine = 0;
    generating = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  currentDecimas = allChars[int(random(allChars.length))];
  currentLine = 0;
  detectOneFrame();
  generating = true;
}
