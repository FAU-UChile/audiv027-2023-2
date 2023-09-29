# clase-07

estoy trabajando con [joaquinsuazo](https://github.com/joaquinsuazo)

# Trabajo de modificacion del codigo de SketchRNN
En este proyecto se modificara el codigo basico interactivo que posee el la pagina de ml5js acerca del modelo de SketchRNN. 

## De que se trata este modelo?

StechRNN es un modelo de red neuronal entrenado a base de dibujos de la pagina [Quick,Draw!game](https://quickdraw.withgoogle.com/.)

![Quick,Draw imagen](https://github.com/joaquinsuazo/audiv027-2023-2/assets/128074599/610e0f98-c116-451b-9705-2daf10b89732)




https://github.com/joaquinsuazo/audiv027-2023-2/assets/128074599/cd8c59c5-7643-4828-b82e-7f764c590988



Este modelo tiene como por objetivo crear nuevos dibujos a base de lineas iniciales dentro de una pizarra.

## Base de Datos
- ml5js: https://learn.ml5js.org/#/
- libreria de github: https://github.com/ml5js/ml5-library/blob/main/src/SketchRNN/models.js

## Materiales
- Computador
- Editor Web p5js

 ## Registro de avance N°1
primero lo que hicimos fue buscar el modelo interactico de SketchRNN en los ejemplos de ml5js.

  ![Avance 1 imagen 1](https://github.com/joaquinsuazo/audiv027-2023-2/assets/128074599/9e6c713b-0cbf-49dc-8b7e-a1b8a62a573a)

Ya dentro de el modelo podemos ver que el codigo esta entrenado en este caso para seguir el dibujo de un gato.

![Captura de pantalla 2023-09-22 163219](https://github.com/joaquinsuazo/audiv027-2023-2/assets/128074599/82fe9cc0-717c-4349-9687-650179430b15)

para cambiar el dibujo que la red neuronal tiene como objetivo debemos de modificar en el codigo el modelo el cual trabaja.

si vamos a la zona de background del codigo podemos identificar el modelo al cual esta asignado, en este caso como anteriormente se habia dicho el modelo esta en 'cat'
para poder acceder a un nuevo modelo debemos de ir a la pagina de github de ml5js en donde se encontraran los diferentes modelos exitentes dentro de la pagina que son compatibles para p5.js 

![imagen github](https://github.com/joaquinsuazo/audiv027-2023-2/assets/128074599/190a5c4b-6ca6-4e52-bd5f-8b7707dd32d4)

dentro de los diferentes modelos decidimos utilizamos en esta ocacion el modelo 'bird'.

volvemos al ejemplo interactivo de p5js y sustituimos el 'cat' por 'bird'.

desde este momento la red identifica el cambio de modelo y comienza a dibujar pajaros a travez de los trazos iniciales.


https://github.com/joaquinsuazo/audiv027-2023-2/assets/128074599/5a88af0f-d697-47e8-9ea7-b28f759fc6b1

## Concluciones 

Mediante este ejercicio pudimos reconocer la capacidad de modificar un ejemplo de la libreria ml5js mediante el uso de información proporcionada para este en la página de el creador que se puede encontrar en Github, en este caso luego de revisar el codigo e identificar los elementos que podían variar pero que conservaban la función de el ejemplo nos permitió modificar solo un fragmento y obtener un cambio notable. También pudimos comprender que al repasar los distintos ejemplos de la librería y discutir como grupo cuales son las funciones que nos parecen más interesantes se pueden combinar y aprovechar más de una función para así crear un nuevo codigo que una elementos presentes en los ejemplos y cumpla con los objetivos que nos propongamos.
