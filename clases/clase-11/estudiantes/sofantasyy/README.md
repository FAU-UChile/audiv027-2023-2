# Entregable 2
Hola, bienvenido. 
Esta es la documentacion del proyecto final!
Estoy trabajando con [Silvana Olivares](https://github.com/kquita) y [val3ntiina](https://github.com/val3ntiina)



# Bender Identifier
Permite que el maestro Arduino identifique tu elemento.



![Captura 2](https://github.com/sofantasyy/audiv027-2023-2/assets/142052341/d57546f4-74c6-4636-b5b5-2dfc1521bca7)

[Noviembre, 2023]

Estudiantes: [Sofia Alarcon](https://github.com/sofantasyy), [Silvana Olivares](https://github.com/kquita) y [Valentina Abarzua](https://github.com/val3ntiina)

Profesores: [Aaron Montoya](https://github.com/montoyamoraga)

Ayudante : [Ignacio Passalacqua](https://github.com/ipassala)

Ramo: Inteligencia artificial (AUDIV027-1)
_____
## Acercamientos previos
En nuestra primera aproximación con Arduino, nos llamó la atención el ejercicio "Fruit identification using Arduino and TensorFlow", que en ese entonces modificamos la base de datos para ingresar nuestro propio registro cromático y su asociación con un objeto distinto al original.
![Captura 1](https://github.com/sofantasyy/audiv027-2023-2/assets/142052341/ba33585b-9195-4943-a2a8-7b7b2927009c)

También tuvimos la posibilidad de utilizar Micro_Speech de Harvard_TinyMLx. Inteligencia que permitía realizar asociaciones entre las palabras "Yes", "No" y "Unknown" escuchadas, una reapusta del encendido de la luz LED del microcontrolador en colores Verde, Rojo y Azul respectivamente.


![WhatsApp Image 2023-11-10 at 15 50 28 (1)](https://github.com/sofantasyy/audiv027-2023-2/assets/142052341/04a15028-5431-4bbc-9b49-b9f2c9e157f9)

A partir de estos dos ejemplos estudiados decidimos mezclar ambas inteligencias para que sea posible clasificar un elemento según sus cualidades cromáticas, desde los elementos Agua, Tierra, Fuego y Aire. Adicional a la respuesta de texto en la pantalla con su respectiva probabilidad de confianza, más una respuesta simultánea en el microcontrolador con el encendidido del LED con los colores Azul, Verde, Rojo y Amarillo según corresponda.
## Registro del proceso 
### PASO 1
Hicimos registro de cada elemento, asociado a un color particular. Para el elemento Fuego=Rojo, Agua=Azul, Tierra=Verde y Viento=Amarillo. Estos datos fueron ingresados en Object_color_capture.ino

![WhatsApp Image 2023-11-10 at 17 07 05](https://github.com/sofantasyy/audiv027-2023-2/assets/142052341/ba57dd30-d2e6-4947-a0a2-19f359f121fa)

![WhatsApp Image 2023-11-10 at 17 07 07](https://github.com/sofantasyy/audiv027-2023-2/assets/142052341/b7243c1e-58c7-43ef-8b3c-77fe208de28f)


### PASO 2
La información recopilada en Serial Monitor, se copia y luego e pega en los archivos CSV que se deben abrir con brackets. Esto se hace uno a uno con cada muestra.

![WhatsApp Image 2023-11-10 at 17 11 56](https://github.com/sofantasyy/audiv027-2023-2/assets/142052341/a9a7eaad-dae6-4554-b5d0-127b48c5a154)

### PASO 3
Una vez recipilados los archivos CSV con el registro cromático de cada elemento(Fuego, Agua, Tierra y viento), debemos subir estas carpetas al documento de Google Colab: https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/FruitToEmoji/FruitToEmoji.ipynb en la carpeta de archivos. IMPORTANTE: NO CARGAR LOS ARCHIVOS EN SAMPLE DATA COMO LA IMAGEN SIGUENTE.

![WhatsApp Image 2023-11-10 at 17 32 41](https://github.com/sofantasyy/audiv027-2023-2/assets/142052341/1f0f61a7-ffed-4d4f-ac17-3734d9138751)

Así debe verse:)

![WhatsApp Image 2023-11-10 at 17 51 47](https://github.com/sofantasyy/audiv027-2023-2/assets/142052341/e43a508b-88a0-45b9-9305-4b7fe1aa12a2)

## Código
### Index


```
### Sketch





## Materiales 
Arduino Nano 33 BLE
Computador
Colores para registrar
Internet

 #### Software : 
Arduino

## Referentes y recursos adicionales


## Conclusiones y aprendizajes 
