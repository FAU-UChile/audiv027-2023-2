// ejemplo-ml5js-char-rnn
// usa biblioteca ml5.js 0.12.2 y p5.js 1.7.0
// basado en trabajo previo de @montoyamoraga

// mas fonts en
// https://open-foundry.com/

// variable para modelo char RNN
let rnn;

// variable para generar o no texto
let generando = false;

// parametro de char RNN
let temperatura = 0.9;

// texto parte vacio
let textoActual = null;

// maximo versos a generar
let maximoVersos = 3;
// contador de verso
let versoActual = 0;
// variable para saber si estamos creando un nuevo verso o no
let crearNuevoVerso = false;

// constante con todos los caracteres en mayuscula
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// variable para cargar font
let miFont = null;

// funcion a correr cuando el modelo es cargado
function modeloCargado() {
  
  // imprimir en consola aviso de que el modelo fue cargado
  console.log("modelo cargado!");

  // generar texto con modelo char RNN
  generar();
}

function preload() {
  // cargar fuente
  miFont = loadFont('./assets/WorkSans-Light.ttf');
}

// funcion de p5.js que ocurre una vez al principio
function setup() {
  // crear lienzo tan grande como la pantalla
  createCanvas(windowWidth, windowHeight);

  // definir modelo rnn con ml5.js
  // cuando el modelo se carga, correr la funcion modeloCargado
  rnn = new ml5.charRNN("./models/quijote", modeloCargado);
  
  // textoActual es un caracter aleatorio
  textoActual = caracteres[int(random(caracteres.length))];

  // tamano del texto
  textSize(12);

  // tipografia del texto
  textFont(miFont);

  // texto alineado al centro
  textAlign(CENTER, CENTER);

  // color de relleno negro
  fill(0);

  // figuras sin borde
  noStroke();

}

// funcion de p5.js que corre despues de setup(), en bucle
function draw() {

  // fondo blanco
  background(255);

  // mostrar texto generado
  text(textoActual, 50*windowWidth/100, 25*windowHeight/100);
}


function generar() {
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

  // siguiente caracter
  let next = await rnn.predict(temperatura);

  // 
  await rnn.feed(next.sample);
  // detectar si el siguiente caracter es un salto de linea
  if (next.sample == "\r" || next.sample == "\n") {

    if (!crearNuevoVerso) {

      // create array of all lines
      let allLines = textoActual.split("\n");
      // retrieve last line
      // let lastLine = allLines[allLines.length - 1];
      let lastLine = allLines[versoActual];
      // say the last line
      // p5Speech.speak(lastLine);

      textoActual = textoActual + "\n";
      crearNuevoVerso = true;
      versoActual = versoActual + 1
    
    }
  } else {
    textoActual = textoActual + next.sample;
    crearNuevoVerso = false;
    
  }

  if (versoActual > maximoVersos - 1) {
    textoActual = textoActual + "\n";
    crearNuevoVerso = false;
    versoActual = 0;
    generando = false;
  }
}

// funcion de p5.js que corre si la ventana cambia de tamano
function windowResized() {
  // ajustar el lienzo al nuevo tamano
  resizeCanvas(windowWidth, windowHeight);
}

// funcion de p5.js que corre si el cursor hace click
function mouseClicked() {

  // empezar generacion desde el principio
  textoActual = caracteres[int(random(caracteres.length))];
  versoActual = 0;
  generar();
  generando = true;
}
