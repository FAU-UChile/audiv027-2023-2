# apuntes de la clase 4 / 01-09

muy buena la charla :) 
Mari trabaja en I-Health donde utilizan inteligencia artificial con imagenes médicas: radiografias, ultra sonido, resonancias. 

Utilizan una tecnica llamada deep learning, la cual necesita ser alimentada con muchos datos
para el ejemplo de hoy utilizamos una base de datos redusida de  7000 a 700 por temas de tiempo. 

Tenemos tres etapas, entrenamiento - evaluación - testeo. 
1 epoca es una validación de todos los datos y se hace por partes por que ocupa mucho GPU. 
Con cada epoca mejora los aciertos pero cada vez mejora un poco menos hasta pasar el punto de no retorno.

Over feeding : el sistema  se ajusta a los datos de entrenamiento, se los aprende y luego no reconoce nuevas entradas. 

Otras formas de mejorar la presición es aumentando los datos, y como hacerlo con datos nuevos reales es muy caro o lento o complicado en algunos casos existen otros trucos como hacer pequeñas ediciones en los datos originales (en caso de ser fotos) con voltearlas, zoom, girar, saturar, blur, etc.

http://www.kaggle.com -> DataSet descargables 

libraries -> codigos que no escribí yo 

Assets -> imagnes, tipografias u otros archivos a utilizar
