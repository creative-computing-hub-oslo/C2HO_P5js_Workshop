// Code from https://www.generativehut.com/post/recreating-the-noise-orbit

function setup() {
  createCanvas(400, 400);
  
  // Hue, saturation, brightness, alpha
  colorMode(HSB, 360, 100, 100, 1.0);
}

function draw() {
  background(0, 0, 100);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(0.001 * width);
  
  for (let radius = 0.05; radius < 0.5; radius += 0.05) {
    const points = makeCircle(20, radius);

    beginShape();
    points.forEach(point => {
      vertex(width * point[0], height * point[1]);
    });
    endShape(CLOSE);
  }
}

function makeCircle(numSides, radius) {
  const points = [];
  const radiansPerStep = (Math.PI * 2) / numSides;
  for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
    const x = (0.5 + radius * Math.cos(theta)) ;
    const y = (0.5 + radius * Math.sin(theta));
    
    points.push([x, y]);
  }
  return points;
}