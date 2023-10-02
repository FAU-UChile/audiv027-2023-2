# Pinta con handpose

Para idear un proyecto revisamos las bibliotecas de ejemplo de p5 y ml5js y encontramos dos favoritos: [Handpose](https://learn.ml5js.org/#/reference/handpose) y [Drawing Patterns](https://p5js.org/examples/drawing-patterns.html). Con esto pensamos que podríamos crear un lienzo donde dibujar con nuetras manos y distintos gestos como pincel. 
Para empezar, intentamos poner el codigo de reconocieminto de handpose en una variación del drawing patterns pero no logramos que funcionara.

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/7f395063-1b2e-4419-b9dc-2383ba41211c" width="400" height="250" />


Entonces lo intentamos al revés, integrando el codigo de dibujo en el de handpose y nos dimos cuenta que el codigo de handpose  no reconoce las poses especificas sino que la mano y nosotros necesitamos que etiquete las poses especificas para darles una forma y esa forma usarla como pincel, así que buscamos una nueva base para comenzar. 

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/d3cae4e7-65a2-4283-aca0-c078e3b27b0d" width="400" height="250" />


Encontramos [Rock, Paper, Scissors](https://editor.p5js.org/tlsaeger/sketches/xL2DrkcEb) que ya tiene la capacidad de reconocer las manos y etiquetarlas, ademas de imprimir formas en la pantalla y le ajustamos las formas que queríamos usar como pinceles. 

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/c0cd3649-3660-46f1-8c3e-cdd745405e75" width="400" height="250" />


Ya con las formas base del pincel necesitabamos crear el trazo, para esto pensamos que debiamos recuperar las coordenadas de donde se reconoce la mano para que pudiese dibujar arrastrando la forma en tiempo real. 
Intentamos imprimirlas en el console pero explotó.

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/33282b2e-9dca-4773-84cb-323405228c19" width="400" height="250" />


Estaba mal escrito jeje, ya tenemos las coordenadas de la posicion de la mano en el console. 

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/86a1863b-5e74-4f81-a4ab-279ac270b8fd" width="400" height="250" />


Llegamos a clases el viernes y no pudimos hacer funcinar la webcam externa, conectamos el usb en el otro puerto y funcionó.

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/32ac8b88-20c6-4c7a-b5bf-a612506846c3" width="400" height="250" />
<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/b96e2658-77da-464b-a83c-c47dbe284ac5" width="400" height="250" />



Estuvimos buscando como dibujar en modo pincel ya que la forma estaba estática, en un comienzo solo logramos mover la forma de manera indepentiente sin seguir la mano. 

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/4defaa4b-cfff-4dcb-9bb6-7522e2319265" width="400" height="250" />
<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/d1a95484-ed89-4bcf-adde-954fdcbf4711" width="400" height="250" />


Nos dimos cuenta con ayuda de chatgpt que nos faltaba definir la variable del outputlabel así que la definimos y se empezó a mover la forma con la mano pero el outputlabel en formato texto y no forma. 

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/f47f1b38-bc27-4c72-805b-731907169657" width="400" height="250" />

Esto pasó porque estabamos definiendo el label y no el outputlabel, lo cambiamos y funcionó bien! 

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/c871d4a6-0fd5-4fc5-92b4-35029254ccc6" width="400" height="250" />

Definimos el html y dejamos puestas las intrucciones y los botones correspondientes.

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/9a084c2c-2ca3-46ba-9265-0601b82a1724" width="400" height="250" />

Para la proxima clase intentamos que no solo se moviera con la mano sino que quedara el trazo dibujado como un pincel. 

Para esto tuvimos que generar una superposición de canvas, donde en una se reconoce el gesto y el movimiento de la mano y en el otro se genera el trazo. 
En el canvas del trazado intentamos mover la forma base, pero no estaba bien definido el output y nos reconoció los puntos de los keypoints ups

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/5104c6c9-b38b-4f76-aca2-dbd4721c4240" width="400" height="250" />

Definimos bien el output desde donde dibujar el trazo del pincel y listo! ahora podemos dibujar haciendo gestos con las manos!

<img src="https://github.com/01100100i/audiv027-2023-2/assets/142625648/708ba396-9658-4d98-a392-71dea8ccfb7a" width="400" height="250" />

# Video de uso
https://github.com/01100100i/audiv027-2023-2/assets/142625648/35c16e54-0c73-418e-9c77-f36320755fab


# Codigo: 

[Dibuja con tus manos](https://editor.p5js.org/dvelastin/sketches/DKIVX2qPN)

# Materiales
Material usado: p5 editor, ml5js, ml4a.net/ml5, chatgpt

Material requerido: Una mano, camara

# Conclusiones

Pudimos observar que hay pequeños detalles que pueden interferir en el funcionamiento del código, ya sea errores de tipeo o paréntesis mal puestos que producen una seguidilla de errores que terminan por producir un caos :( Es por esto que fue necesario trabajar de la manera más ordena posible y estar revisando bien el código constantemente para que no existieran errores. Además tuvimos errores mecánicos como el del usb.
También fue difícil ir encontrando las diversas funciones para poder ir logrando lo que se nos iba ocurriendo al momento de hacer el código. Gracias a chatgpt por ayudarnos en esos momentos difíciles <3
Otra conclusión que pudimos sacar una vez funcionando el modelo, es que para reconocer las manos de buena manera es necesario tener un fondo lo mas plano posible para no confundir los keypoints de las manos. 
De todas formas fue entretenido ir viendo los errores mientras realizábamos el proyecto, creemos que el mayor aprendizaje lo llevamos desde los errores y de cómo los fuimos solucionando.


