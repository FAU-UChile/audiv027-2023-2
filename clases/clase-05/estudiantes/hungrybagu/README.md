apuntes clase 5 





//codigo p5js sketch


let foto;
let clasificador;

let textoHTML;

let numero;
function preload() {
  foto = loadImage("assets/garfield.png"); 

}




function setup() {
  createCanvas(400, 400);
  
  textoHTML = document.getElementById("prediccion");
  textoHTML = document.getElementById("numero");
  textoHTML.innerHTML = "•̀⩊•́"

  
  clasificador = ml5.imageClassifier("MobileNet", listoco); 
  
}

function listoco(){
  console.log("estamos listoco");
  clasificador.classify(foto,tengoResultado);
  
  
}


function tengoResultado(error, resultados){
  console.log("tengo resultado")
  if (error) {
    console.log(":c")
    
  }
  console.log(resultados[0].label);
  textoHTML.innerHTML = resultados[0].label
   numero.innerHTML = resultados[0].confidence;
}
function draw() {
  background(220);
  image(foto, 0, 0, width, height); 
}






// codigo p5js index

<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js"></script>
    
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
