// Code from https://p5js.org/examples/3d-geometries.html

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(250);

  normalMaterial();
  push();
  //translate(-50, -100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //plane(70);
  //box(70);
  //cone(70);
  //cylinder(70);
  torus(70, 35);
  pop();
  
}