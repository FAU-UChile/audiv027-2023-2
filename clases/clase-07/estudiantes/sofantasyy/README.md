# AdelantoEntregable
Hola, bienvenido. 
Esta es la documentacion del primer proyecto!
Estoy trabajando con [sofantasyy](https://github.com/sofantasyy) y [kquita](https://github.com/kquita)




# knn Clasificador de imagenes de posturas de manos tomadas por webcam paa generar textos aleatorios. Desarrollado por p5.js

[Septiembre, 2023]

Estudiantes: [Sofia Alarcon](https://github.com/JustPili1), [Silvana Olivares](https://github.com/kquita) y [Valentina Abarzua](https://github.com/val3ntiina)

Profesores: [Aaron Montoya](https://github.com/montoyamoraga)

Ayudante : [Ignacio Passalacqua](https://github.com/ipassala)

Ramo: Inteligencia artificial (AUDIV027-1)
_____
## Generador de texto mediante posturas de las manos
La idea de funcionamiento de la inteligencia es que, a partir de la clasificación de posturas de manos capturadas por una Webcam, estas tengan una salida de aleatoria de Pronombres, Sustantivos, Adjetivos y Verbos según las posturas antes ingresadas. La generación de texto resultante deriva de una confianza mínima del 70% en relación a las posturas identificadas con la Webcam.

## Codigo
### Index
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/handpose"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/knn-classifier"></script>
    <meta charset="utf-8" />

  </head>
  <body>
    
    
    <!--Cambio de título de inteligencia -->
    
    
     <!--<h2>KNN Classification on Webcam Images with Hand pose model. Built with p5.js</h2> -->
    
   <h2>KNN Clasificador de imagenes de posturas de manos tomadas por Webcam para generar textos aleatorios. Desarrollado con p5.js</h2>
    
    
    <!--Creación de bajada de titular de inteligencia con el paso a paso para utilizarla -->
    
    <h4>Pasos para utilizar la inteligencia!<p> NOTA:Debes permitir el uso de tu Webcam</h4><p>
   
    </4>1. Agrega capturas de posturas de manos según los emojis sugeridos utilizando la Webcam.<p>
  2. Realiza esto con cada ítem: Verbo, Sustantivo, Pronombre y Adjetivo.<p>
  3. Presiona el  botón "Genera tu texto!" para  comenzar a identificar con la Webcam las posturas según la base de datos ingresada en el paso anterior.<p>
  4. A medida que vas realizando las posturas de manos observa como se va generando tu texto aleatorio según la secuencia de posturas.<p>
  5. Presiona el botón de "Detener generación de texto" para detener la interpretación de posturas a texto.</4>


  <div id="canvasContainer"></div>
  <p id="status">Loading Model...</p>
  <p>
    
    
    
    <!--Redacción de una bajada donde se ubicará el texto aleatorio generado-->
    
    
    <!-- KNN Classifier with mobileNet model labeled this
    as Class: <span id="result">...</span>
    with a confidence of <span id="confidence">...</span>
  </p>
  <p> -->
    
    KNN Classifier with mobileNet model labeled this
    as Class: <span id="result">...</span>
    with a confidence of <span id="confidence">...</span>
  </p>
  <p>
   
    
     
  <!--Cambio de nombres de botones originales para ingresar posturas y creación de un nuevo botón -->
  
    
    <!--     <span class="emoji"> ✊ </span><button id="addClassRock">Add an Example to Class Rock</button> -->
<!--     <button id="resetRock">Reset Class Rock</button> -->
<!--     </p><p><span id="exampleRock">0</span> Rock examples | Confidence in Rock is: <span id="confidenceRock">0</span></p> -->

<!--     <span class="emoji"> 🖐 </span><button id="addClassPaper">Add an Example to Class Paper</button> -->
<!--     <button id="resetPaper">Reset Class Paper</button> -->
<!--     <p><span id="examplePaper">0</span> Paper examples | Confidence in Paper is: <span id="confidencePaper">0</span></p> -->

<!--     <span class="emoji"> ✌️ </span><button id="addClassScissor">Add an Example to Class Scissor</button> -->
<!--     <button id="resetScissor">Reset Class Scissor</button> -->
<!--     <p><span id="exampleScissor">0</span> Scissor examples | Confidence in Scissor is: <span id="confidenceScissor">0</span></p> 


 <p>
    <button id="buttonPredict">Start predicting!</button><br />
    <button id="clearAll">Clear all classes</button><br />
  </p>
    <script src="sketch.js"></script>
  </body>
</html>-->
    
    
    <span class="emoji"> ✊ </span><button id="addClassVerbo">Agregar ejemplo de pose de Verbo</button>
    <button id="resetVerbo">Resetear postura de Verbo</button>
    </p><p><span id="exampleVerbo">0</span> Ejemplos de Verbo |  Confianza de Verbo: <span id="confidenceVerbo">0</span></p>

    
    <span class="emoji"> 🖐 </span><button id="addClassSustantivo">Agregar ejemplo de pose de Sustantivo  </button>
    <button id="resetSustantivo">Resetear postura de Confianza de</button>
    <p><span id="exampleSustantivo">0</span> Ejemplos de Sustantivo  | Confianza de Sustantivo : <span id="confidenceSustantivo">0</span></p>

    
    <span class="emoji"> ✌️ </span><button id="addClassPronombre">Agregar ejemplo de pose de Pronombre</button>
    <button id="resetPronombre">Resetear postura de Pronombre </button>
    <p><span id="examplePronombre">0</span> Ejemplos de Pronombre | Confianza de Pronombre: <span id="confidencePronombre">0</span></p>
  
    
        <span class="emoji"> 👌 </span><button id="addClassAdjetivo">Agregar ejemplo de pose de Adjetivo</button>
    <button id="resetAdjetivo">Resetear postura de Adjetivo</button>
    <p><span id="exampleAdjetivo">0</span> Ejemplos de Adjetivo | Confianza de Adjetivo: <span id="confidenceAdjetivo">0</span></p>
    
        
  <p>
    <button id="buttonPredict">Genera tu texto!</button><br />
    
    
    <!-- Creación de un nuevo botón para detener predicción y generación de texto aleatorio-->
    
    <button id="buttonStopPredict">Detener generación de texto</button><br />
      
      
    <button id="clearAll">Empezar todo desde cero</button><br />
  </p>
    <script src="sketch.js"></script>
  </body>
</html>

```
### Sketch
```java
/*
Hand Tracking + KNN Classifier

The example lets you train a knn algorithm to classify handposes

Built with handPose model from tf.js, knn-classifier from ml5js and p5js

Created by Yining Shi & Andreas Refsgaard 2020
*/

/*
Hand Tracking + KNN Classifier
En este ejemplo puedes entrenar el algoritmo knn para clasificar poses de manos. 
este modelo se construye desde tf.js, knn-classifier desde la biblioteca de ml5js y con p5js.

Creado por Yining Shi & Andreas Refsgaard 2020
*/

//acá se crean algunas funciones que ocuparemos mas tarde
let model,
  video,
  keypoints,
  predictions = [];

// Create a KNN classifier
// Creamos un KNN classifier cambbiando las distintas por las nuestras propias.

const classifier = knnClassifier.create();

//const classifier = knnClassifier.create();
//const LABELS_MAP = {
//'Rock': 0,
//'Paper': 1,
// 'Scissor': 2

//1-Creación mapa de etiquetas según postura de manos

const LABELS_MAP = {
  Verbo: 0,
  Sustantivo: 1,
  Pronombre: 2,
  Adjetivo: 3,
};

// ahora a cada clase se le asignan distintas variables

```
## Imagenes
![WhatsApp Image 2023-09-29 at 16 32 40](https://github.com/Val3ntiinA/AdelantoEntregable/assets/143841281/526c335f-228e-425c-a435-3cda966bd0d2)

![WhatsApp Image 2023-09-29 at 16 32 40 (1)](https://github.com/Val3ntiinA/AdelantoEntregable/assets/143841281/db5e6578-07a9-45fa-a0c8-7e2f355f54ea)

## Materiales 
 #### Hardware
  + Computador
  + Webcam

 #### Software: 
  + p5.js
  + Andreas Refsgaard Hand Tracking + KNN Classifier de ml5


## Referentes y recursos adicionales
[Andreas Refsgaard Hand Tracking + KNN Classifier](https://editor.p5js.org/AndreasRef/sketches/vyiGyVon9)
Train a KNN to detect your finger gestures
Ademas sacamos ideas de la [clase 2](https://github.com/Val3ntiinA/audiv027-2023-2/tree/main/clases/clase-02) donde se creo con un generador de texto, generar nuevos textos similar al quijote

## Concluciones y aprendizajes 
- Logramos modificar los codigos de una iteligencia artificial preexistente, agregando nuevos elementos para cambiar la funcion de esta.
- Logramos modificar que las posturas de manos tuvieran las clasificaciones de sustantivos verbos pronombres y adjetivos
- Durante el proceso de modificar los tipos de clasificaciones de palabras (sustantivos, verbos, pronombres, adjetivos) segun distintas posturas de manos, nos estancamos en como alimentar la inteligencia con palabras de cada calificacion
- Queda pendiente aumentar la base de datos segun cada categoria de palabras (sustantivos, verbos, pronombres, adjetivos)
- No logramos agregar nuevas funciones para los nuevos botones como el de detener generador de texto.
- Otro aprendizaje fue el hecho de ajustarnos al tiempo, ya que tuvimos que bajar las expectativas del trabajo. Una de las cosas que faltó desarrollar fue que efectivamente generar texto a partir de la confianza dada a partir del detector de poses. 
