let video;
let detector;
let detections = [];
let objetosRegistrados = []; //  Array para registrar todos los elementos que van apareciendo en la cámara

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, videoReady);
  video.size(640, 480);
  video.hide();
}

function videoReady() {
  detector = ml5.objectDetector('cocossd', modelReady);
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  detector.detect(video, gotDetections);
}

function modelReady() {
  detector.detect(video, gotDetections);
}

function draw() {
  image(video, 0, 0);

  for (let i = 0; i < detections.length; i++) {
    const object = detections[i];
    
    //  Formato gráfico de cuando se detecta objeto
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);

    //  Esta condicional se asegura que los objetos que aparecen durante el registro no vuelvan a aparecer, ya que si el objeto no se encuentra en la lista, se agrega por medio del push.
    if (!esObjetoRegistrado(object)) {
      objetosRegistrados.push(object);
      agregarListaDeteccion(object);
    }
  }
}

  //  Esta funcion se usa para verificar que el objeto no se encuentre en el array
function esObjetoRegistrado(object) {
  const objetoExiste = objetosRegistrados.find((item) => item.label === object.label);
  return !!objetoExiste;
}

  //  Esta función agarra la id del div que se encuentra en el index.html, agarra el nombre del objeto agregado en el array y es implementado en la lista de HTML
function agregarListaDeteccion(object) {
  const listaDeteccion = document.getElementById('detection-list');
  const listItem = document.createElement('li');
  listItem.innerText = `${object.label}`;
  listaDeteccion.appendChild(listItem);
}