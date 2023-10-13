# Clase-09


Repaso: Microcontrolador Arduino

Ejemplo del controlador por código que relaciona las palabras 'yes' y 'no' (reconocidas por el micrófono solo el sonido de la consonante inicial), presentando una luz para las opciones anteriores.
Si no es reconocida, se establece en el código la salida 'unknown'.

Wake Works, Google Nest Mini y Always Listening.

Electronic Frontier Foundation, institución dedicada al estudio y defensa del libre uso de recursos digitales.
Claudio Ruiz, refernete investigador de leyes respecto a AI en Berkman Klein Center, quien fundó Derechos Digitales a nivel Latinoamericano para apoyar tales causas similares.
MIT tiene el Programna de Estudios Comparativos Mediales, donde Crystal Lee es asistente en programas de ética de datos y alcance de información.
Common Voice mozilla, donde se puede donar libremente la voz y particularidades de acentos para crear una base de datos libre y usable.

arxiv, base de datos de papers gratis (Cornell university).
Peter Warden publica muchos papers en arxiv, respecto a microcontroladores. Mientras trebajaba en Google Brain, su paper del 2018, Speech Commands A Database for Limited-Vocabulary Speech Recognition, explica la importancia de los mecanismos de activación digital de reconocimiento de voz. Su referencia esta presente en su repositorio de gitHub.
Trabajos de investigación de verano en USA Google Summer of Code como oportunidades para desarrollar aprendizaje según desarrollo de partes de un código en base a habilidades específicas.
MIT Open Course Ware ofrece cursos gratis descargables online.

I2C SPI es un sistema de comunicación entre controladores Arduino.

TinyMLx (Tiny test camera of Machine Learning from the web page 'x' form a collaboration between harvard and MIT).




Instrucciones


Abrir Arduino>>BoardsManager>>typefor'ble'>>install'ArduinoMbedOSNanoBoards4.0.8'


Abrir Arduino>>LibraryManager>>typefor'apds'>>install'Arduino_APDS9960'1.0.4'


Abrir Arduino>>LibraryManager>>typefor'harvardtinimlx'>>install'Harvard_TinyMLx1.2.3'


En Historial de u-cursos: O\7675ImageViewer.ipynb --> carpeta de google collab para entrenar a la camara de foto de Arduino.

Abrir desde Arduino por Files: Este Equipo\Arduino\libraries\Harvard_TinyMLx\extras\CameraVisualizerRawBytes(archivo de processing).

Luego correr programa en Arduino usando Processing tq la camara capte una serie de fotos continuas al mantener el boton de la placa presionado.
El programa se corre escribiendo "Live" en el terminal.
nota: Arduino debe estar conectado a un solo puerto (COM1 a COM4, de modo que coincida el puerto real y el declarado en el código) con solo este código corriendo (cerrar editor de código Arduino, no el de Processing).
