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

![Captura de pantalla 2023-09-22 171829](https://github.com/maite31/audiv027-2023-2/assets/85259640/a1bf1601-62d8-4e28-be0b-c2e0b7b51cfb)
![Captura de pantalla 2023-09-22 171806](https://github.com/maite31/audiv027-2023-2/assets/85259640/4bd70f91-1cdd-4763-b383-823d2fb266f2)

![Captura de pantalla 2023-09-22 171638](https://github.com/maite31/audiv027-2023-2/assets/85259640/b1dfc73e-319d-4d8c-a389-d2d82597b0ab)
![Captura de pantalla 2023-09-22 171606](https://github.com/maite31/audiv027-2023-2/assets/85259640/8245df8a-e25a-4385-8088-8ea539ca6b4f)

