*clase 7: sesión 2 de trabajo en grupo*

# Are you smiling yet?

![Resultado final](https://github.com/simunovicla/audiv027-2023-2/blob/main/clases/clase-07/estudiantes/simunovicla/Imagenes/1.png?raw=true)

### Materiales:
- Laptop/Computador/Ipad con Webcam
- [Editor web de p5.js](https://editor.p5js.org/)

### Referentes:
- [Facemesh de ml5 para editor p5.js](https://editor.p5js.org/ml5/sketches/Facemesh_Webcam)

## Comenzando...

Inicialmente, habíamos decidido trabajar con la idea de los arquetipos faciales basados en animales.
Basándonos en el [modelo de Facemesh](https://learn.ml5js.org/#/reference/facemesh) en [siguiente arículo de koraboo](https://www.koreaboo.com/lists/korean-face-shape-animal-puppy-cat-bunny-deer-fox-celebrities-idols/) para determinar parámetros que pudiésemos utilizar para que el programa decidiese otorgar cada arquetipo a la persona frente a la cámara.

![Modelo original](https://github.com/simunovicla/audiv027-2023-2/blob/main/clases/clase-07/estudiantes/simunovicla/Imagenes/2.jpg?raw=true)

## Trabajando el modelo

Ingresamos a ml5, y accedimos a las referencias, y el modelo de Facemsh en el editor p5.js.
Este modelo genera una malla de 486 puntos en base a determinados *keypoints* en el rostro de una persona enfrentada a la cámara web. 

Verificamos que funcionaba bien el modelo base, y luego nos propusimos determinar los parámetros. Sin embargo, nos resultó muy díficil encontrar como referencia sólo determinados *keypoints*. Logramos encontrar la malla base del modelo en el [repositorio de Github](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection). 

![Imagen de malla conteniendo las coordenadas del rostro en jpg.](https://github.com/tensorflow/tfjs-models/raw/master/face-landmarks-detection/mesh_map.jpg)

Imagen de malla conteniendo las coordenadas del rostro en jpg.

## Arquetipo a sonrísa

Encontrándonos con esta dificultad, decidimos reducir la meta en esta oportunidad, y limitarnos a lograr detectar una sonrisa. Sin embargo, aún debíamos resolver como indicar cada punto. 

Logramos en un inicio que el programa dibujase solo un punto, la coordenada 61, sobre  la comesura del labio, fue el punto de referencia que escogimos para probar. 

![El programa dibujando un punto en la coordenada 61.](https://github.com/simunovicla/audiv027-2023-2/blob/main/clases/clase-07/estudiantes/simunovicla/Imagenes/4.png?raw=true)

El programa dibujando un punto en la coordenada 61.

Seguimos por seleccionar dos puntos adicionales: uno al centro del labio (13) y otro en la otra comisura (291), quedando determinado de la siguiente forma:

- 13 centro del labio
- 291 comisura labial der.
- 61 comisura labial izq.

![Acercamiento a coordenadas de referencia (61, 13 y 291, de izquierda a derecha). ](https://github.com/simunovicla/audiv027-2023-2/blob/main/clases/clase-07/estudiantes/simunovicla/Imagenes/5.jpeg?raw=true)

Acercamiento a coordenadas de referencia (61, 13 y 291, de izquierda a derecha). 

Con esto el programa dibujó estos tres puntos (en lugar de dibujar todos):

![Tres puntos dibujados](https://github.com/simunovicla/audiv027-2023-2/blob/main/clases/clase-07/estudiantes/simunovicla/Imagenes/6.png?raw=true)

Pero aún no sabíamos como acceder a la distancia entre estos puntos, o lograr acceder a más información. Leyendo bien la documentación, y con ayuda del equipo docente, logramos acceder a la información de los puntos por medio de constantes. 

![Trabajando con el equipo docente. ](https://github.com/simunovicla/audiv027-2023-2/blob/main/clases/clase-07/estudiantes/simunovicla/Imagenes/7.jpeg?raw=true)

Trabajando con el equipo docente. 

Al obtener la información de los puntos por medio de las constantes. Y en base a la división de la distancia entre las comisuras y la distancia entre dos puntos más externos en el rostro (454 y 134), quedando determinado de la siguiente manera:

```jsx
let porcentaje = distanciaBoca / distanciaCara;
[//console.log](notion://console.log/)(porcentaje);
if (porcentaje > 0.7){
console.log('smiling!');
```

La idea es lograr comparar la variable más constante (distancia entre dos puntos en el rostro) con la que nos interesa ver mayor variación (la distancia entre comisura derecha e izquierda del labio). 

En base a esta división, obtuvimos un porcentaje en consola mediante `console.log`, y definimos que los valores superiores a 0.7 determinasen una sonrisa. 

![El programa detecta que la persona esta sonriendo. ](https://github.com/simunovicla/audiv027-2023-2/blob/main/clases/clase-07/estudiantes/simunovicla/Imagenes/8.png?raw=true)

El programa detecta que la persona esta sonriendo. 

## Conclusión

Una dificultad que encontramos, fue trabajar en equipo en distintos computadores con los programas que utilizamos, al sernos díficil compartir el código directamente, debiendo copiar manualmente cada modificación, y terminando con códigos con diferencias, menores, pero que pueden impactar el resultado final. 

Además, el procentaje nos fué dificil de definir, al estar muy sujeto a variaciones como la iluminación, las carcterísticas físicas de la persona frente a la cámara (si es que su boca en más ancha, más delgada, su compleción, adornos, etc.)

Si bien lo que nos planteamos en un inicio creemos que es posible, fue importante el determinar metas intermedias que nos permitiesen avanzar por partes, y verificar que funcionase cada sección que requeriamos. 

Aprendimos mucho de como acceder información de un modelo en las referencias, para utilizar la información que interpreta un modelo de inteligencia artificial.
