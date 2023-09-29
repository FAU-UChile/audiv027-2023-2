# Genshin impact Character Recognizer

https://editor.p5js.org/maite31/sketches/YB42-Borj editor
https://editor.p5js.org/maite31/full/YB42-Borj pagina

En este proyecto buscamos a través de las herramientas de Teachable Machine Learning y Keagle, conseguir un código que reconozca el personaje de Genshin Impact al que se asemeja la imagen en video que se proporciona.

Definición Temática: Reconocimiento de imágenes por cámara web para asignar personajes del juego Genshin Impact

Manejo de imágenes en Teachable Machine:
A partir de diferentes datasets (bases de datos) descargados de kaggle, conseguimos imágenes de 42 de los personajes 76  disponibles actualmente.

Por prueba y error, depuramos las imágenes, eliminando los fan-arts para mayor consistencia a los diseños originales y los personajes con un banco muy grande, ya que al utilizar distintas bases de datos, aquellas con mas imagenes terminaban como resultado en un ~90% de los casos.
De esta forma priorizamos dejar entre 38 y 40 imágenes de muestra por personaje, dejando aquellas que se acercaran al encuadre de una webcam siendo estrictamente arte oficial y pantallazos del juego de forma en que el resultado sea mas fidedigno al original.

Una vez logrados resultados variados, ingresamos el link exportado al código que provee teachable machine para aplicar en ml5js.
Una vez duplicado, alteramos el texto de ejemplo y las dimensiones de la reproducción de la cámara web.

Paginas utilizadas: teachablemachine, editor.p5js.org, kaggle.com
Materiales: Camara web

