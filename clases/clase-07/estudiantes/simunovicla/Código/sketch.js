let facemesh;
let video;
let predictions = [];
let sonrisa = [];
let textoHTML;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  facemesh = ml5.facemesh(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new predictions are made
  facemesh.on("predict", (results) => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
  
  textoHTML = document.getElementById("smile");
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  image(video, 0, 0, width, height);
  
  textoHTML.innerHTML = "Sonríe!";
  

  // We can call both functions to draw all keypoints
  drawKeypoint();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoint() {
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;
    
    const [x_61, y_61] = keypoints[61];
    const [x_291, y_291] = keypoints[291];
    
    let distanciaBoca = x_291 - x_61;
    console.log(distanciaBoca);
    
    const [x_454, y_454] = keypoints[454];
    const [x_134, y_134] = keypoints[134];
    
    let distanciaCara = x_454 - x_134;
    console.log(distanciaCara);
    
    let porcentaje = distanciaBoca / distanciaCara;
    console.log(porcentaje);
    

    // Draw facial keypoints.
    for (let j = 0; j < keypoints.length; j += 1) {
      const [x, y] = keypoints[j];

      if (j == 61 || j == 13 || j == 291) {
        fill(0, 255, 0);
        ellipse(x, y, 5, 5);
      }
    }
  }
}

console.log(keypoints.lips);
