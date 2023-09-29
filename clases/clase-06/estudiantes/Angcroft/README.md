# titulo

El proyecto, en base a Object Detector, un código que ofrece ML5js, agregamos además la capacidad de agregar los objetos que van apareciendo en la cámara, y que se retengan en la página index. </br>
En la línea 4 se incluyo un array let, el cual contendrá todos los objetos que serán detectados por la webcam. </br>
En la línea 45 se escribe una condicional que se asegura que los objetos detectados no vuelvan a aparecer, usando el push como forma de agregar el objeto en el array.
En la línea 53 se escribe una función la cual ayuda en la condicional para verificar que los objetos no se repitan en el array, por lo que se busca el nombre del item registrado para que no se repita.
En la línea 59 se escribe la funcion la cual contiene lo necesario para crear nuevos tags a partir del id 'detection-list' que se encuentra en el html
