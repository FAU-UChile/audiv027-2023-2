<h1>Trabajo Grupal-Evaluación</h1>

<h2>Integrantes Ricardo Ramírez, Gabriela Echenique y Martina Flores</h2>
<p>Codigo: https://editor.p5js.org/ZiggPunk/sketches/MOaFy3y3k</p>

<p>Nuestro trabajo consiste en que el código detecta tanto rostros de personas humanas como de telefonos celulares y le coloca un emoji correspondiente sobre estas y además reproduce un sonido por cada uno según el objeto que detecte.</p>
<p>INSTRUCCIONES DE USO:</p>
<ul>
  <li>Darle play al código en su editor</li>
  <li>Esperar que cargue la webcam</li>
  <li>Colocar un rostro humano o un telefono celular frente a la webcam</li>
  <li>Disfrutar del armonioso sonido</li>
</ul>

<p>MATERIALES:</p> 
<ul>
  <li>utilizamos el editor de p5</li>
  <li>La biblioteca de ml5</li>
  <li>Se requiere una webcam para utilizar el código</li>
  <li>Rostros de personas</li>
  <li>Telefonos</li>
  <li>Internet</li>
  <li>Computador</li>
</ul>
<p>REFERENTES</p> 
<p>Utilizamos los ejemplos de Andreas Refsgaard en ml5 (https://medium.com/processing-foundation/from-simple-to-advanced-ml5-js-70d6730b360b), especifiacmente los siguientes:</p>
<ul>
  <li>Para los emojis: https://editor.p5js.org/AndreasRef/sketches/RDjEGqJjl</li>
  <li>Para el sonido: https://editor.p5js.org/AndreasRef/sketches/RDjEGqJjl</li>
  <li>Nuestro referente inicial fue el siguiente código del cual logramos rescatar la idea base para nuestro trabajo: https://editor.p5js.org/AndreasRef/sketches/ryLlIOJpX</li>
</ul>

<p>CONCLUSIONES</p>
<p>Algunos fallos que tuvimos en la construcción del código fueron los siguientes:</p>
<ul>
<li>Este código no funcionaba, debía reproducir el sonido una sola vez para que no se intercalara con el otro:</li> function draw() {
    //NO FUNCIONAAAAAAAAA
     if (classificationResult == 'person' && lastClass !== 'person') {
    villagerSound.play();
    celularSound.stop();
  } else if (classificationResult == 'cell phone' && lastClass !== 'cell phone') {
    celularSound.play();
    villagerSound.stop();
  }
  lastClass = classificationResult;
  }
  <li>Originalmente intentamos colocar una imagén en lugar de un emoji, pero nos mostraba el enlace/directorio de esa imagen. Descubrimos que esto ocurre porque el código solo admite texto (el emoji es considerado texto), al momento de mostrar la figura en la cámara.</li>
  <li>En un inicio el sonido no se escuchaba porque no cargamos la biblioteca de sonido de p5: <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.js"></script></li>
  <li>Originalmente no logramos que el sonido se reproduciera al momento de detectar el objeto en cuestión, para solucionar esto agregamos el siguiente código: if (detection.label == 'person'  && lastdetection !== 'person')</li>
  <ul>
