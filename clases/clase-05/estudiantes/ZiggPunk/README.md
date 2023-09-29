# Apuntes clase 08/09

p5js.org
ml5js.org
https://github.com/ml5js/ml5-library ----- libreria ml5
MobileNet
https://learn.ml5js.org/#/reference/image-classifier ---- codigo image classifier
(<!DOCTYPE html>
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
    <p style="color:#F88379" id="prediccion">parrafo</p>
    <p style="color:#E30B5C" id="numero">parrafo</p>
    <script src="sketch.js"></script>
  </body>
</html>
)
(let fotito;
let clasificador;

let textoHTML;
let numerito;

function preload() {
  fotito = loadImage("assets/limon.jpg");
}


function setup() {
  createCanvas(500, 500);
  
  textoHTML = document.getElementById("prediccion");
  
  numerito = document.getElementById("numero");
  
  textoHTML.innerHTML = "Chopper"
  clasificador = ml5.imageClassifier("MobileNet", listoco);
  clasificador.classify(fotito, tengoResultado);
}

function listoco() {
  console.log("estamos listoco")
}

function tengoResultado(error, resultados) {
  console.log("tengo resultado");
  if (error) {
    console.log("ta malo");
  }
  
  console.log(resultados[0].label);
  textoHTML.innerHTML = resultados[0].label;
  numerito.innerHTML = resultados[0].confidence;
}

function draw() {
  background(220);
  image(fotito, 0, 0, width, height);
})
