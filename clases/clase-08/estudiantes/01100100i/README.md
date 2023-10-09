# Clase 8 arduino
Arduino nano ble 33 sense lite, microcontrolador https://arduino.cl/producto/arduino-nano-33-ble-sense/
En ardiono IDE, conectar arduino mediante USB, placas, arduino MbedOS 4.0.8 
Para subir codigo al arduino: Selccionar placa y apretar boton de upload (Flecha hacia la derecha) 
Comprobar que el arduino está vivo en setup: Serial.begin(9600); protocolo de comunicación serial y su velocidad en baudio, signos por segundo
En el loop: Serial.println("🥦");
Lupa arriba a la derecha para verificar que esté mandado el mensaje, en el serial monitor debería mandar la señal 🥦

Instalar bibliotecas necesarias para ML: Dentro de Arduino IDE seleccionar Library, Instalar: APDS de Arduino 
Tensorflow Lite para arduino, tflite desde github e instalar en Documentos/Arduino/Libraries como Arduino_TensorFlowLite tiene que tener el src, examples, docs
En Arduino IDE ctrl + s para guardar y cerrar Arduino IDE porque instalamos la biblioteca manual
Ahora en file>Examples esta tensorflow, abrimos hello_world, lo subimos al arduino y corremos. 
el archivo h es el header del cpp

en google colab es importante probar que el modelo vea nuevos datos y clasificarlos correctamente, no solo los datos de prueba
