Clase 6: trabajo en grupo

---------------------------------------------------------------------------------

https://editor.p5js.org/Hartweey/sketches/OJQheLz_y

SKETCH 

let fruta;
function preload() {
  fruta = loadImage ('assets/frutilla.png');
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  image (fruta, 0, 0, width. height);
}

---------------------------------------------------------------------------------
INDEX

https://github.com/ml5js/ml5-library

<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.min.js"></script>
    <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>

---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

https://learn.ml5js.org/#/reference/image-classifier

SKETCH 

let fruta;
let clasificador;

let texto;
let numerito;

function preload() {
  fruta = loadImage("assets/frutilla.png");
}

function setup() {
  createCanvas(1000, 1000);

  texto = document.getElementById("prediccion");

  numerito = document.getElementById("numero");

  clasificador = ml5.imageClassifier("MobileNet", redi);
}

function redi() {
  console.log("esta redi");
  clasificador.classify(fruta, tengoResultado);
}

function tengoResultado(error, resultados) {
  console.log("Tengo resultado");
  if (error) {
    console.log(":(");
  }

  console.log(resultados);

  texto.innerHTML = resultados[0].label;
  numerito.innerHTML = resultados[0].confidence;
}

function draw() {
  background(220);
  image(fruta, 0, 0, width, height);
}

---------------------------------------------------------------------------------

INDEX

<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.min.js"></script>
    <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <p id="prediccion">parrafo</p>
    <p id="numero">parrafo</p>
    <script src="sketch.js"></script>
  </body>
</html>

