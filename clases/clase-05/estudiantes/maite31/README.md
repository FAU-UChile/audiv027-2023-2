# lalalalalala
let oli;
let classificador;

let textoHTML;
let numerito

function preload() {
  oli = loadImage("assets/oli.jpg");
}

function setup() {
  createCanvas(900, 700);
  
  textoHTML = document.getElementById("prediction");
  
  numerito = document.getElementById("numero");
  
  textoHTML.innerHTML = "oli";
  numerito.innerHTML = "oli";
  
  clasificador = ml5.imageClassifier("MobileNet", listo)
}
function listo () {
  console.log("estamos listo")
  clasificador.classify(oli, tengoResultado);
}

function tengoResultado(error, resultados) { 
console.log("tengoResultado");
    if (error) {
      console.log(":c");
    }
  
console.log(resultados[0].label);
textoHTML.innerHTML = resultados[0].label;
numerito.innerHTML = resultados[0].confidence;
}
  
function draw(){
  background(220);
  image(oli, 0, 0, width, height)
}
lalalalala
