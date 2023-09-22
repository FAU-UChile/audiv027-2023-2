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
luego de modificadas las fotos de suben al procesod e entrenamiento de Google


