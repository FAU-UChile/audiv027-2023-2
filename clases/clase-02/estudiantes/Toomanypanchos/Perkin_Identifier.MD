22/09
Proyecto grupal - Entrenamiento de clasificador de imagenes para catalogar personas pertenecientes a instituciones estatales.
Javiera Parga - Francsico Cabrera

La idea del proyeto es crear y entrenar una IA que sea capaz de, mediante su entrenamiento via imagenes, identificar a personas que pertenezcan
a carabineros de Chile. Permitiendo reconocer si estos se encuentran en dichas imagenes y no para luego catalogar estas imagenes, 
bajo el prefijo Perkin o NotPerkin.

Se usara como referencia la pagina ml5 que presenta una guia de como crear y entrenar un modelo de image identifier, 
utilizando [Teachable Machine](https://teachablemachine.withgoogle.com/train/image) de Google

En primera instancia se juntaran imagenes para crear una base de datos, clasificando las fotos
en dos grupos, perkin y notperkin. dentro de cada una de estas clasificaciones se introdujeron mas de 100 fotos:

Perkin: Carabineros - Piñera - Kast - Luis Silva- Gloria Hutt
NotPerkin: Futbolistas - Ciudadanos Chilenos - Lemebel - Camiroaga - Zafrada - Otros.
[Drive](https://drive.google.com/drive/u/1/folders/1pzcaR1NtTS66UrxsfZezTPG74U1i0XSZ?role=writer)

Para poder subir estas fotos al teachable machine y que funcione es necesario adaptarlas para que tengan una dimension de pixeles especificas (224 x 224px) y consistente, lo que facilita a la IA para estandarizar el entrenamiento.
Para esto utilizamos el software [FFmpeg](https://ffmpeg.lav.io/) desarrrollado por Sam.Lavigne


