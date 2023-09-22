# The office recognition
Este proyecto reconoce imágenes y distingue si estas pertenecen o no a los personajes de la serie televisiva "The Office".

DOCUMENTACIÓN DEL PROYECTO

El proyecto comenzó utilizando el modelo de ml5js; pix2pix con el código base: learn.ml5js.org/#/reference/pix2pix en p5js
A partir de ello, se pensó en generar imágenes reales a través del reconocimiento de líneas y formas previamente dibujadas en la pizarra del modelo. Es aquí cuando el código arroja el error "TypeError: ml5.pix2pix(...).then is not a function" en "at /sketch.js:58:6"
Eventualmente tras intentar solucionar el error, se optó por cambiar el modelo a uno previamente utilizado en clases; imageclassifier. A partir de ello, se comienza a utlizar p5js seguiendo los pasos que aparecen en "Quickstart"

La primera idea: entrenar el modelo con imagenes de caras de personas enfocandose en expresiones, para obtener un reconocomiento facial que describa las emociones o un porcentaje cercano, es decir, al momento de aparecer una imagen el modelo arroje resultados certeros o proximos como "feliz" o "angustiado".
La segunda idea: entrenar el modelo con imagenes de personajes del programa televisivo "The Office" junto a imagenes de personas aleatorias para obtener un reconocimiento que describa si la imagen utilizada pertenece o no a uno de los integrantes del elenco.

COMIENZO DEL PROYECTO THE OFFICE

Continuando con la segunda idea, se considera el requerimiento de una base de datos que contenga a los personajes de "The Office". A raíz de esto se utiliza la pág "Teachable machine" para obtener un link que contenga dichos datos; colocado en p5js > sketchs > junto a "loadimage"
Por siguiente, nos arroja el error "SyntaxError: Unexpected identifier 'Fotos' at /sketch.js:7:1"
Para solucionar esto, cambiamos la funcion preload, colocando a su vez el link.
Continuando el error, se considera que falta agregar ml5 a la libreria.
Luego de modificar los datos del link para hacer la biblioteca, no se lee el modelo ni arroja resultados.
Se solucionan errores de escritura los cuales no corrían el modelo.
Se prueba el modelo con 2 imágenes y funciona indicando: "es de the office" o "no es de the office" junto a su porcentaje de certeza.





