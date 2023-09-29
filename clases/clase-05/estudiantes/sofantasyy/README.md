#Ejericio reconocimiento sopaipilla
```java
let fotito;
let clasificador;
let textoHTML;
let numerito;


function preload() {
  fotito = loadImage("assets/sopaipillas.jpg");
}

function setup() {
  createCanvas(400, 400);

  textoHTML = 
document.getElementById("prediccion");
  
  textoHTML.innerHTML = "sopaipillas";
  
numerito = document.getElementById("numero");

  clasificador = ml5.imageClassifier("MobileNet", listoco);
}

function listoco() {
  console.log("estamos listoco");
  clasificador.classify(fotito, tengoResultado);
}

function tengoResultado(error, resultados) {
  console.log("tengoResultado");
  if (error) {
    console.log(":(");
  }
  console.log(resultados[0].label);
   textoHTML.innerHTML = resultados[0].label;
   numerito.innerHTML = resultados[0].confidence;
}

function draw() {
  background(220);
  image(fotito, 0, 0, width, height);
}
```
