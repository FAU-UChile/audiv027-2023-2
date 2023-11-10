# clase - 12 Avances

SerialPrint to SerialWrite for making sound through Processing with the code on Arduino.
Magic Wand or gyroscope will be the main tools for the development of the ai experiment.
Audio Library Minim (for Processing). Re´laced by Sound, another library in Processing to download.
clasico: comunicacion uniserial
1. Cerrar todo lo que esta abierto en el compu
2. funcion Processing -> crear visuales y bibliotecas
3. Processing -> Serial -> simple read =
   import processing.serial.*;
   Serial myPort
   val
   String portName = Serial.list()[0];  -> asume la posicion del port del Arduino
5. cambiar por:
   printArray(Serial.list());
esto explica: [0] = COM1
              [1] = COM2 ... etc
Luego, detener processing (no cerrar), abrir Arduino y en void loop():
Serial.write('0');
delay(1000); // son 100[ms]
Serial.write('1');
delay(1000);

En processing, en void draw():
agregar println(val); , sobre background(255);
if (val == 0)  -> to: if (val == 49) to set the origin
values in accordance to ASCI
