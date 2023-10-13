_iniciando..._
# Trabajo 2
Vamos a trabajar con kits arduino en grupos de 4. 
Mi grupo está conformado por: 
- [Yo (Laura Simunovic)](https://github.com/simunovicla)
- [Ximena Múñoz](https://github.com/Anemix011)

Vamos a trabajar con un [microcontrolador de arduino](https://store-usa.arduino.cc/products/arduino-nano-33-ble-sense). 
Tiene:
- 9 axis inertial sense.
- humedad y temperatura
- ~barometric sensor~
- microphone
- gesture, proximity light color and light

  Vamos a trabajar con [tensorfow lite](https://www.tensorflow.org/lite/microcontrollers) para dispositivos que tienen menos capacidad que tiene un computador.
No tengo adaptador para conectar el arduino a mi laptop, estaré trabajando en el computador del lab.
Se debe instalar instalar el board manager **Arduino Mbed OS Nano Boards**.
y comprobamos que nuestro aruduino está vivo.
Vamos a instalar librerías para usar machine learning. Vamos a isntalar la lirbary **Arduino_APDS** *by Arduino*.
Y tensorf low, que hay que buscar en Google. Desde el repositorio, descargamos el código. Descargada y extraida la carpeta vamos a:
tflite-micro-arduino-examples-main > src > tensorflow
Hoy trabajaremos con los ejemplos hello_world y magic_wand
  Al abrir el ejemplo, vemos que hay un  montón de pestañas. el primero se llama hello_world.ino, al igual que la carpeta. Lo vuelve el archivo principal de la carpeta.
  Lo que genera el ejmeplo de hello world, es utilizar el led del arduino, "dibujando" una curva sinoidal, que ademas podemos ver en el serial monitor y el serial plotter.
  ### seguimos con magic wand.
  Instalamos las bibliotecas que faltan.
  Este ejemplo utiliza los sensores de acelemtro y de giroscopio, para detectar gestos. 
