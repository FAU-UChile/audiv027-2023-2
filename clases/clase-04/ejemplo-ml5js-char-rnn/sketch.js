// ejemplo-ml5js-char-rnn
// usa biblioteca ml5.js 0.12.2 y p5.js 1.7.0
// basado en trabajo previo de @montoyamoraga

// mas fonts en
// https://open-foundry.com/

let textoActual = null;
let textoInicial = "cargando...";

let rnn;
let generando = false;
let temperature = 0.9;

let decimasLines = 10;
let versoActual = 0;
let justDidNewLine = false;

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let myFont = null;

// cuando el modelo es cargadp
function modelLoaded() {
  console.log("modelo cargado!");
  detectOneFrame();
}

function preload() {
  myFont = loadFont('./assets/WorkSans-Light.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  rnn = new ml5.charRNN("./models/quijote", modelLoaded);
  
  textoActual = caracteres[int(random(caracteres.length))];
  
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
  if (textoActual.length > 1) {
    text(textoActual, 50*windowWidth/100, 25*windowHeight/100);
  } else {
    text(textoInicial, 40*windowWidth/100, 25*windowHeight/100);
  }
  pop();

}

function detectOneFrame() {
    generate();
}

function generate() {
  if (generando) {
    generando = false;
  } else {
    generando = true;
    loopRNN();
  }
}

async function loopRNN() {
  while (generando) {
    await predict();
  }
}

async function predict() {

  let next = await rnn.predict(temperature);
  await rnn.feed(next.sample);
  if (next.sample == "\r" || next.sample == "\n") {
    if (!justDidNewLine) {

      // create array of all lines
      let allLines = textoActual.split("\n");
      // retrieve last line
      // let lastLine = allLines[allLines.length - 1];
      let lastLine = allLines[versoActual];
      // say the last line
      // p5Speech.speak(lastLine);

      textoActual = textoActual + "\n";
      justDidNewLine = true;
      versoActual = versoActual + 1
    
    }
  } else {
    textoActual = textoActual + next.sample;
    justDidNewLine = false;
    
  }

  if (versoActual > decimasLines - 1) {
    textoActual = textoActual + "\n";
    justDidNewLine = false;
    versoActual = 0;
    generando = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  // texto es una linea
  textoActual = caracteres[int(random(caracteres.length))];

  versoActual = 0;
  detectOneFrame();
  generando = true;
}
