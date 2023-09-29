# Clase 4 - Invitad de Imagenes Tumorales MRI


Mari Gonzales Inostrosa Ingenieria Eléctrica - Investigaación de imagenes y AI

Proyectos de investigación de imagenes MRI usando AI explicable (para pacientes) para modelos principales (código en Python)

Objetivo: entender imagen médica para ser aplicada a AI

Imagen digital: conjunto de unidades de pixeles de un solo color, representados por números, usualemente de 0 a 255 en gradiente

RGB: 3 luces reoja, verde y azul tal que sus combinaciones dan el resto de los colores

Por ende se conjugan 3 gradientes de 0 a 255 para rojo, para verde, y para azul


Imagenes médicas

Radiografías: representación de la cantidad de rayos que pasan por el cuerpo

Ultrasonido: representación de perturbaciones de ondas de sonido

MRI: representación de diferencia de tejidos orgánicos por cantidad de agua (diferencia de protones) o usando un medio de contraste

Elección de un lenguaje programático depende de la utilidad que se le quiere dar a sus librerias

Deep learning: interpretación matemática de operación de pixeles de una gran cantidad de imagenes, generando salidas que serán clasificadas para obtener un dato particular

GPU: tarjeras gráficas que ayudan a correr muchas operaciones matemática muy rapido y apoyar al cambio rapido de imagenes

CPU funciona para un gradiente, GPU apoya a los gradientes RGB, TPU apoya matrices en general

Posterior a entrenear una AI y recibir resultados de imagen, se debe validar si el entrenamiento fue un éxito, y por último realizar una aplicacion útil

Función de pérdida: cantidad de análisis del entrenamiento que no coinciden con los datos reales; por lo tanto, muestra el área donde se puede mejorar el programa

Epoch: una vez que se pasa por todos los datos a traves de la Ai, se cumple una época; se constituye de pasos para no sobrecargar el input

Se determina la cantidad de épocas en código, y se puede observar cómo va mejorando el exito de entrenamiento al disminuir la pendiente entre una época con su predecesora

Los resultados se pueden mejorar: agregando más datos, aplicar más épocas, usar Aumentación de Datos (ej.: usar una imagen y su versión con: espejo, otra con zoom, otra rotada, otra con más brillo, otra más difusa, etc)

Otros usos a parte de reconocer enfermedades de la/s imagen/es: diagnostico, informe médico, etc.

Iniciativa científica milenio. Redes Neuroinales digitales.

En el código: model.train() es la función de entrenamiento base, y se pueden agregar las transformaciones de imagenes extre, como:

        RandRotate(range_x=np.pi / 12, prob=0.5, keep_size=True),
        
        RandFlip(spatial_axis=0, prob=0.5),
        
        RandZoom(min_zoom=0.9, max_zoom=1.1, prob=0.5),

descargar la base de datos de imagenes MRI de clasificación de tumores cerebrales de kaggle.com 

nota: si la entrada es de un canal (solo grises) demora mucho menos que una de 3 canales (RGB)

Overfitting: sobreajustarse a los datos de entrenamiento deja un error de detección de datos reales por sobrememorización del input de base de datos, implicando que se debe detener la alimentación de datos una ves 

reconocida esa caída en la curva de éxitos.


Programación Web

p5js.org -> biblioteca para crear base de paginas interactivas (herramientas de JavaScript, lenguaje de código para la experiencia de navegación de web)

Creación de traducción de p5.js en la página por A. Montoya

https://editor.p5js.org/

Segunda página a explorar: ml5js.org


Ejc.:

p5js.org >> descargar reservorio GitHub >> subir a editor de código de p5js: código clase 4 >> crear carpetas "libraries" y "assets" en el editor y subir en ellas la info. del reservorio descargado >> crear carpeta 

"models" con carpeta interna "quijote" y subir archivos en ella por

nota: en p5js, la function draw() es una función loop

nota 2: el programa genera un caracter cada vez
