# Pinta con handpose

Para idear un proyecto revisamos las bibliotecas de ejemplo de p5 y ml5js y encontramos dos favoritos: [Handpose] y [Drawing Patterns]. Con esto pensamos que podríamos crear un lienzo donde dibujar con nuetras manos y distintos gestos como pincel. 
Para empezar, intentamos poner el codigo de reconocieminto de handpose en una variación del drawing patterns pero no logramos que funcionara.

Entonces lo intentamos al revés, integrando el codigo de dibujo en el de handpose y nos dimos cuenta que el codigo de handpose  no reconoce las poses especificas sino que la mano y nosotros necesitamos que etiquete las poses especificas para darles una forma y esa forma usarla como pincel, así que buscamos una nueva base para comenzar. 

Encontramos [Rock, Paper, Scissors] que ya tiene la capacidad de reconocer las manos y etiquetarlas, ademas de imprimir formas en la pantalla y le ajustamos las formas que queríamos usar como pinceles. 

Ya con las formas base del pincel necesitabamos crear el trazo, para esto pensamos que debiamos recuperar las coordenadas de donde se reconoce la mano para que pudiese dibujar arrastrando la forma en tiempo real. 
Intentamos imprimirlas en el console pero explotó
Estaba mal escrito jeje, ya tenemos las coordenadas de la posicion de la mano en el console. 

Llegamos a clases el viernes y no pudimos hacer funcinar la webcam externa, conectamos el usb en el otro puerto y funcionó.

Estuvimos buscando como dibujar en modo pincel ya que la forma estaba estática, en un comienzo solo logramos mover la forma de manera indepentiente sin seguir la mano. 
Nos dimos cuenta con ayuda de chatgpt que nos faltaba definir la variable del outputlabel así que la definimos y se empezó a mover con la mano pero el outputlabel en formato texto y no forma. 
