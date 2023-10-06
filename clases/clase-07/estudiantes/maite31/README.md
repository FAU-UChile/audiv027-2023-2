# Genshin impact Character Recognizer

Maite Ballesteros (maite31)
Carolina Bascuñan (Hartweey)
Alex Koller (latexlavanda)

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

Materiales: Camara web, Paginas utilizadas: teachablemachine, editor.p5js.org, kaggle.com


imagenes de prueba en teachablemachine:

![Captura de pantalla 2023-09-22 171829](https://github.com/maite31/audiv027-2023-2/assets/85259640/a1bf1601-62d8-4e28-be0b-c2e0b7b51cfb)
![Captura de pantalla 2023-09-22 171806](https://github.com/maite31/audiv027-2023-2/assets/85259640/4bd70f91-1cdd-4763-b383-823d2fb266f2)

![Captura de pantalla 2023-09-22 171638](https://github.com/maite31/audiv027-2023-2/assets/85259640/b1dfc73e-319d-4d8c-a389-d2d82597b0ab)
![Captura de pantalla 2023-09-22 171606](https://github.com/maite31/audiv027-2023-2/assets/85259640/8245df8a-e25a-4385-8088-8ea539ca6b4f)

![Captura de pantalla 2023-09-22 170933](https://github.com/maite31/audiv027-2023-2/assets/85259640/db709e44-e71a-4794-8169-103beeaf7b5a)
![Captura de pantalla 2023-09-22 170914](https://github.com/maite31/audiv027-2023-2/assets/85259640/6580eb39-d547-45cb-b222-f43cb8d5cdc4)

![Captura de pantalla 2023-09-22 164251](https://github.com/maite31/audiv027-2023-2/assets/85259640/48d42332-6bde-4ea5-b827-f4e97617fdc3)

Imagenes finales tomadas desde p5.js:

![image](https://github.com/maite31/audiv027-2023-2/assets/85259640/dc3146ed-8697-44cd-a728-a59506711251)

![image](https://github.com/maite31/audiv027-2023-2/assets/85259640/ba61ba9d-f85b-4a5a-ac4c-f2fc6d6c2fdf)

![image](https://github.com/maite31/audiv027-2023-2/assets/85259640/4c636be9-33f6-4d08-85be-9229dd8202d9)

![image](https://github.com/maite31/audiv027-2023-2/assets/85259640/387f0495-5dd5-4b6f-94d5-2e762a21f2d0)

![image](https://github.com/maite31/audiv027-2023-2/assets/85259640/2859121f-1ae7-4c99-84d7-f950a47083b8)

![image](https://github.com/maite31/audiv027-2023-2/assets/85259640/932f20a2-f432-448c-8a62-5805ac189d07)

![image](https://github.com/maite31/audiv027-2023-2/assets/85259640/be6a6f73-da9f-4da5-9223-90480fabf162)


Conclusiones:
Los parámetros de lectura de información de las imágenes son distintos de lo esperado, pensamos que cuando el banco del personaje Ganyu tenía 120 imágenes sería más exacto el resultado, pero los acaparó.
Teachable Machine opera aignado posibilidades en porcentajes, si bien pensamos que afectaba el funcionamiento, a futuro lo que utilizaremos a favor, asignando el tipo de arma a cada personaje para poder identificarla también según la imagen en la cámara web.
Si bien partimos con un ideal bastante amplio, completando este ejercicio creemos que podremos llevarlo a cabo con todas las características que queríamos lograr desde el principio: Nación, elemento y arma.
