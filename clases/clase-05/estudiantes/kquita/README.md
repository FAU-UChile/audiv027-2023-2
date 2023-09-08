# Apuntes de la clase 05 

* recap: la clase pasada vino mai para hablarnos de algunas aplicaciones acuales de la ia
nos enseñó como aumentar los datos y luego jugamos con modelos que hemos cargado anteriormente. 

* recordar: a la vuelta del receso tenemos el primer trabajo grupal del curso!

hoy vamos a ver modelos que ya estan entrenados en la nuve o biblioteca ml5 
Especificamente aquellas que son utilizadas para identificar imagenes o videos

ocuparemos MobileNet, que son redes de clasificación de imagenes de baja fidelidad pera mas liviano, que se puede ocupar hasta en un celular, que tiene menor rendimiento que un PC
 
```java
// codigo hecho el clase de inteligencia artificial
// hecho con material extraido de Ml5js
// hacemos que la foto y otra variables existan 
let fotito;
let clasificador;

let textoHTML; 
let numerito

// esto ocurre antes de todo lo demas gracias al preload
function preload() {
  
  //cargamos la imagen con los archivos cargados, este es una foto de una rata "folder/archivo"
  fotito = loadImage("assets/rata.jpg");
}

function setup() {
  createCanvas(400, 400);
  
  textoHTML = document.getElementById("prediccion");
  
  numerito = document.getElementById("numero");
  
  
  textoHTML.innerHTML = "rata";
  
  //vamos ahora a ocupar el metodo del clasificador de la biblioteca ml5js
  clasificador = ml5.imageClassifier("MobileNet", tamosredy);
  
}
//ahora definimos tamos redy
function tamosredy(){
  console.log("tamos redy");
  clasificador.classify(fotito, tengoResultado);
}
//tenemos que definir esta nueva variable resultante de classify
function tengoResultado(error, resultado){
  console.log("tengo Resultado")
  if (error){
    console.log(":c")
  }
  console.log(resultado [0].label);
  textoHTML.innerHTML = resultado [0].label;
  numerito.innerHTML = resultado [0].confidence;
}

//en draw es donde vamos hacer que nos muestre la imagen en el lienzo 
function draw() {
  background(220, 24, 190);
  image(fotito, 0, 0, width, height);
}
```

```HTML
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
```
