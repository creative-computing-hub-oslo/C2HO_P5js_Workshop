// Code from https://p5js.org/examples/interaction-wavemaker.html

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(40, 200, 40);
}

function draw() {
  background(10, 10);

  const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
  const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
  // and also varies based on the particle's location
  const angle = (xAngle / 2) + (yAngle / 2);

  // each particle moves in a circle
  let t = frameCount * 0.008;
  const myX = width/2 + 40 * cos(2 * PI * t + angle);
  const myY = height/2 + 40 * sin(3 * PI * t + angle);

  fill(100, 200, 100);
  circle(myX, myY, 60); // draw particle
}