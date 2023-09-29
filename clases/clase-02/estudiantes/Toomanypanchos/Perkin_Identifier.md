22/09
**Proyecto grupal - Entrenamiento de clasificador de imagenes para catalogar personas pertenecientes a instituciones estatales.**

Javiera Parga - Francsico Cabrera

La idea del proyeto es crear y entrenar una IA que sea capaz de, mediante su entrenamiento via imagenes, identificar a personas que pertenezcan
a carabineros de Chile. Permitiendo reconocer si estos se encuentran en dichas imagenes y no para luego catalogar estas imagenes, 
bajo el prefijo Perkin o NotPerkin.

Se usara como referencia la pagina ml5 que presenta una guia de como crear y entrenar un modelo de image identifier, 
utilizando [Teachable Machine](https://teachablemachine.withgoogle.com/train/image) de Google
![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/c5a22821-79e1-4feb-8685-d2fa00f24cad)

**Recopilacion de Base de Datos**
Clasificando  fotos de google en una carpeta en Drive en dos grupos, perkin y notperkin. 
dentro de cada una de estas clasificaciones se introdujeron mas de 100 fotos:

Perkin: Carabineros - Piñera - Kast - Luis Silva- Gloria Hutt
NotPerkin: Futbolistas - Ciudadanos Chilenos - Lemebel - Camiroaga - Zafrada - Otros.
[Drive](https://drive.google.com/drive/u/1/folders/1pzcaR1NtTS66UrxsfZezTPG74U1i0XSZ?role=writer)
![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/f1cd653a-3f5a-41ab-ae59-ed50841e199f)

**Adaptando base de Datos**
Para poder subir estas fotos al teachable machine y que funcione es necesario adaptarlas para que tengan una dimension de pixeles especificas (224 x 224px) y consistente, lo que facilita a la IA para estandarizar el entrenamiento.
![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/d3332b86-15de-4e2d-9e5e-7bbe81c3ed8d)
Para esto utilizamos el software [FFmpeg](https://ffmpeg.lav.io/) desarrrollado por Sam.Lavigne.
Este, permite filtrar archivos de diferentes maneras, en este caso especifico se modificaran sus dimensiones para que cumplan con los requerimientos especificos.
de esta manera se podra agilizar el proceso y modificar toda la base de datos.
_Intentando usar el software nos dimos cuenta que solo funcionaba para formatos de video y audio por lo que no podiamos utilizarlo para las imagenes de nuestro troyecto_
pipipipipipipipipipipi

Encontramos una pagina que lo hacia jeje
[Paginita](https://bulkresizephotos.com/en?padding=true&quality=1&type=exact&value=224&secondaryValue=224)
luego de modificadas las fotos de suben a time machine para iniciar el proceso de entrenamiento de Google

**Post Entrenamiento**
luego de esperar que se entrene (por las dimensiones del proyecto no toma tanto tiempo)
![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/eaeb94d7-1bf7-462c-9557-a3ecb46ed4ff)
Se definieron la cantidad de epocas en relacion a la cantidad de ciclos que el modelo procesa los grupos de imagenes

Luego el programa permite medir el nivel de Vio o Perkin de la persona 
![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/a7ac2abd-b3d2-4435-9782-4bfa97f61fce)![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/aeafcf01-2d55-448e-9fcf-de4fd2a17729)

**Exportacion a p5**
Despues se procedio a pasar la informacion a p5 lo que nos permite exportar el proyecto entrenado para poder mostrarlo en otros computadores 
mediante Tensorflow
https://editor.p5js.org/Toomanypanchos/sketches/T1kLXQod5
Utilizamos el codigo que ofrece ml5 en github para el procesamiento de video mediante p5.js
[Github](https://github.com/ml5js/ml5-library/blob/main/examples/p5js/ImageClassification/ImageClassification_Video/sketch.js)


a diferencia de TM(Teachable Machine) este modelo en p5 solo muestra si se considera perkin o vio, determinando la clasificacion de la persona sin ambiguedades 

![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/e74b7a92-c503-41dd-8f1c-f1083a2d6c0e)

Por un momento creimos que el principal factor para determinar entre ambos era el genero (generalmente los personajes nefastos son hombres)
pero despues nos dimos cuenta que la gesticulacion no verbal(gesto de manos) era un factor determinante para el algoritmo al momento de clasificar 

![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/01ce8af0-d3a4-4514-b034-343942481a37)
![image](https://github.com/Toomanypanchos/audiv027-2023-2/assets/89993556/a6f85eee-4a83-48e7-9b4f-b5c0e7651c0a)







