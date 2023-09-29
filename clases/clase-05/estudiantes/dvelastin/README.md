# Apuntes 05

MobileNet = Red neuronal de detección de imagenes que corre en el cel. - utilizar para detectar una imagen 
Ml5 = biblioteca y ejemplos para trabajar en P5
Para usar esto, se tiene que agregar el script de Ml5 dentro de index.html

código

let fotito;
let clasificador;

let textoHTML;
let numerito;

function preload() {
  fotito = loadImage('assets/gatito.jpg');
}
//Cargar imagen

function setup() {
  createCanvas(400, 400);

  textoHTML = document.getElementById('prediccion');
  numerito = document.getElementById('numero');
  //Id desde HTML - edicion pagina web - textos bajo la imagen
  
 // textoHTML.innerHTML =  'gatito';
  //Este ya no funciona por la definición del texto como el resultado 0.label que está abajo
  
  clasificador = ml5.imageClassifier('MobileNet', listoco);
  }
//Aquí se define el mobilenet y el clsificador de imagen, el listoco seria el callback

function listoco() {
  console.log('estamos listoco');
  clasificador.classify(fotito, tengoResultado);
  }
//aqui se define lo que dira la consola cuando tenga resultado
//cuando se defina el resultado de 'fotito', corre la funcion tengoResultado

function tengoResultado(error, resultados) {
  console.log('tengo resultado');
  if (error) {
    console.log('error') ;
  }
  //Aqui se define lo que dira la consola si tiene resultado o hay error
  
  console.log(resultados[0].label) ;
  textoHTML.innerHTML = resultados[0].label;
  numerito.innerHTML = resultados[0].confidence;
}

function draw() {
  background(220);
  image(fotito, 0, 0);
}
