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
  
  for (let radius = 0.05; radius < 0.6; radius += 0.01) {
    const circle = makeCircle(10, radius);
    const distortedCircle = distortPolygon(circle);
    
    beginShape();
    distortedCircle.forEach(point => {
      vertex(width *  point[0], height * point[1]);
    });
    endShape(CLOSE);
  }
}

function makeCircle(numSides, radius) {
  const points = [];
  const radiansPerStep = (Math.PI * 2) / numSides;
  for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
    const x = (0.5 + radius * Math.cos(theta));
    const y = (0.5 + radius * Math.sin(theta));
    
    points.push([x, y]);
  }
  return points;
}

function distortPolygon(polygon) {
  return polygon.map(point => {
    const x = point[0];
    const y = point[1];
    const distance = dist(0.5, 0.5, x, y);
    
    const noiseFn = (x, y) => {
      const noiseX = (x + 0.31) * distance * 2;
      const noiseY = (y - 1.73) * distance * 2;
      return noise(noiseX, noiseY);
    };
        
    const theta = noiseFn(x, y) * Math.PI * 2;
    
    const amountToNudge = 0.05;
    const newX = x + (amountToNudge * Math.cos(theta));
    const newY = y + (amountToNudge * Math.sin(theta));
    
    return [newX, newY];
  });
}