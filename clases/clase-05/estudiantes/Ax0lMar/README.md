# Clase 5

**Como hacer que una IA reconozca imagenes utilizando p5**

-Iniciar sesion p5.js
-crear carpeta assets
-upload image

En sketch.js:

  let fotito;
  function preload() {
  fotito = loadImage("assets/Axol.jpg");
}

  function setup() {
    createCanvas(500, 400);
}

  function draw() {
  background(220);
  image(fotito, 0, 0, width, height);
}

Y aparece la imagen

-Ahora para integrar una inteligencia artificial que reconozca imágenes vamos a 
https://learn.ml5js.org/#/reference/image-classifier

-En github sacamos <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type="text/javascript"></script>

**y lo colocamos en index.html**
**quedaria asi:**

<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.min.js"></script>
    <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>


**Luego en sketch.js:**

let fotito;
let clasificador;

function preload() {
  fotito = loadImage("assets/Axol.jpg");
}

function setup() {
  createCanvas(500, 400);

  clasificador = ml5.imageClassifier("MobileNet", listo);
}

function listo() {
  console.log("estamos redy");
  clasificador.classify(fotito, tengoResultado);
}

function tengoResultado(error, resultados) {
  console.log("estamos redy");
  if (error) {
   console.log (":^[ pucha oh")
  }
  console.log(resultados);
}

function draw() {
  background(220);
  image(fotito, 0, 0, width, height);
}


