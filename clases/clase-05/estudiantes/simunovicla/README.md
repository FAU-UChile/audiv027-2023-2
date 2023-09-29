# Clase número 5

Primero, some housekeeping, con respecto a los apuntes en Github y, en consecuencia, la asistencia. 
La próxima clase, tendremos trabajo grupal. Para informar este trabajo, hoy veremos muchos conceptos, códigos, etc. 
En esa clase, hay que llegar con energía, para realizar el proyecto en la clase. 
Trabajaremos con código, con ml5 y p5, ver una IA que identifique poses en imágenes. 
Vamos a trabajar con Javascript. 
Entregamos una imagen a p5, y ahora agregaremos el [código de ml5, para poder usar la IA](https://github.com/ml5js/ml5-library).
Vamos a leer en la [página de ml5](https://learn.ml5js.org/#/), algo de la bilioteca. 

´´´
<script src="https://unpkg.com/ml5@<version>/dist/ml5.min.js" type="text/javascript"></script>
´´´

MobileNet: Red Neuronal de imagenes de baja fidelidad, para poder utilizarla en celular. 
Utilizando el [ImageClassifier de ml5](https://learn.ml5js.org/#/reference/image-classifier).

Las funciones indepentientes, van en el principal, nunca dentro de un "murciélago".

```
 // Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Make a prediction with a selected image
classifier.classify(document.getElementById('image'), (err, results) => {
  console.log(results);
});
```

## Código usado en p5js. 
Las funciones indepentientes, van en el principal, nunca dentro de un "murciélago".
```
let fotito1;
let fotito2;
let fotito3;
let clasificador;

function preload() {
  fotito1 = loadImage("assets/MichiEnKestai.jpeg");
  fotito2 = loadImage("assets/MichiGris.jpeg");
  fotito3 = loadImage("assets/Lince.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  clasificador = ml5.imageClassifier("MobileNet", listoco);
}

function listoco() {
  console.log("Estamos listocos!");
  clasificador.classify(fotito3, tengoResultado);
}

//Las funciones indepentientes, van en el principal, nunca dentro de un "murciélago".
function tengoResultado(error, resultados) {
  console.log("Habemus resultados.");
  if (error) {
    console.log("Habemus algún ata'oh.");
  }
  console.log(resultados);
}

function draw() {
  background(220);
  image(fotito1, 0, 0, 200, 200);
  image(fotito2, 200, 0, 300, 200);
  image(fotito3, 0, 200, 200, 300);
}
```

[Versión Video](https://editor.p5js.org/ml5/sketches/ImageClassification_Video)

Para la próxima clase, pensamos trabajar con [Anemix011](https://github.com/Anemix011) en base al ejemplo de [Facemesh](https://learn.ml5js.org/#/reference/facemesh) de ml5. 
