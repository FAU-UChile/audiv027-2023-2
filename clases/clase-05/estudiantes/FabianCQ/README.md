# Clase - 05


Ejercicio de cargar y visualizar una foto en p5js:primero subir una imagena a una carpeta "assets" a p5js, y luego revisar el código:


let fotito;

function preload() {

  fotito = loadImage('assets/curiosidades-sobre-los-gatos-domesticos-635x358.jpg');  //llama desde assetes a la imagen

}

function setup() {

  createCanvas(400, 400);

}

function draw() {  //muestra imagen

  background(220);

  image(fotito, 0, 0, width, height);  //width y height comprimen la imagen al espacio designado del código

}



Gracias a una dirección web de ml5.js se puede copiar el: <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type="text/javascript"></script> ;de github, que es un script que se pega en index de los archivos del 

editor de p5js (este bajo el el script de p5.sound.min.js ;pues el orden importa).



MovielNet -> red neuronal de baja fidelidad para captar imagenes, tal que está diseñada para aparatos electrónicos transportables.

Entonces, agregar al sketch.js:

let clasificador;

function setup() {

  createCanvas(400, 400); 

  clasificador = ml5.imageClassifier('MobileNet', listoco);

}

function listoco() {

  console.log('estamos listoco');

  clasificador.classify(fotito, tengoResultado);

}

function tengoResultado(error, resultados) {

  if(error){

    console.log(':C');

}

  console.log(resultados);

}

function draw...



Incluir texto maleable desde script html:

en index, antes de  <script src="sketch.js"></script> ; agregar:

<p id="prediccion">parrafo</p>

<p id="numero">numero</p>

luego en sketch.js:

let textoHTML;

let numerito;

function setup() {

  createCanvas(635, 358); 

  textoHTML = document.getElementById("prediccion");

  textoHTML.innerHTML = "gatito";

  clasificador = ml5.imageClassifier('MobileNet', listoco);

  }

function tengoResultado(error, resultados) {

  if(error){

    console.log(':C');

  }

  console.log(resultados[0].label);

  textoHTML.innerHTML = resultados[0].label;
 
  numerito.innerHTML = resultados[0].confidence;

}

Librerias ml5.js:
PoseNet y BodyPix son modelos humanos que funcionan como trackers de movimiento de una o multiples personas
se crea una variable: const poseNet = ml5.PoseNet(video, modelLoaded); //video, pues el input es una camara o webcam
