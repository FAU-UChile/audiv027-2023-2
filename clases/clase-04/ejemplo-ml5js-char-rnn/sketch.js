// ejemplo-ml5js-char-rnn
// usa biblioteca ml5.js 0.12.2 y p5.js 1.7.0
// basado en trabajo previo de @montoyamoraga

// referencia de modelo char RNN implementado en ml5.js
// https://learn.ml5js.org/#/reference/charrnn

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
let maximoVersos = 20;
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
  textAlign(LEFT);

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
  text(textoActual, 10*windowWidth/100, 10*windowHeight/100);
}

function generar() {
  if (generando) {
    generando = false;
  } else {
    generando = true;
    bucleRNN();
  }
}


async function bucleRNN() {
  while (generando) {
    await predecir();
  }
}

async function predecir() {

  // siguiente caracter
  let siguiente = await rnn.predict(temperatura);

  // alimentar a RNN el siguiente caracter
  await rnn.feed(siguiente.sample);
  // detectar si el siguiente caracter es un salto de linea
  if (siguiente.sample == "\r" || siguiente.sample == "\n") {
    
    // si no hemos creado un nuevo verso 
    if (!crearNuevoVerso) {
      // crear salto de linea
      textoActual = textoActual + "\n";
      // avisar que acabamos de crear un nuevo verso
      crearNuevoVerso = true;
      // aumentar en 1 el numero de verso actual
      versoActual = versoActual + 1
    
    }
  }
  // si el caracter no era un salto de linea
  else {
    // agregar el caracter al textoActual
    textoActual = textoActual + siguiente.sample;
    // avisar que no hemos creado un verso nuevo
    crearNuevoVerso = false;
  }

  // si ya hicimos la cantidad de versos que queriamos
  if (versoActual > maximoVersos - 1) {
    // detener generacion
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
}
