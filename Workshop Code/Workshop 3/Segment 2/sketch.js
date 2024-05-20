// Inspired by https://editor.p5js.org/jpcaldwell/sketches/_QUB2xdZD

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(40, 200, 40);
}

function draw() {
 background(10); // translucent background (creates trails)
  i = 0
  j = 0
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      let distance = dist(mouseX, mouseY, x, y);
      let diameter = map(distance, 0, max(width, height), 40, 10);
      
      fill(j, 200, i);
      circle(x, y, diameter); // draw particle
    }
    i = i + 10
    j = j + 20
  }
}