# Arduino

Herramienta para desarrollo de hardware 

#### Kit "Tiny machine learning"

* [ARDUINO Nano 33 BLE Sense Lite](https://store-usa.arduino.cc/products/arduino-nano-33-ble-sense)
* Tiny machine learning shield
* OV7675 Camera module
* USB A - Micro USB cable (1m)

#### Tensorflow lite

[Tensorflow lite](https://www.tensorflow.org/lite/microcontrollers?hl=es-419) ejecuta modelos de aprendizaje en pequeños procesadores de baja potencia.

## Trabajando en Arduino

void setup() {

  // put your setup code here, to run once:
  
 Serial.begin(9600)
 
}

Significa que trabaja en serie (una cosa a la vez) a 9600 de velocidad (velocidad promedio de arduino)

void loop() {

  // put your main code here, to run repeatedly:
  
  Serial.println("<3 Te quiero mucho Arduino <3");
  
}

Significa lo que quiero que Arduino me diga en el Serial monitor



