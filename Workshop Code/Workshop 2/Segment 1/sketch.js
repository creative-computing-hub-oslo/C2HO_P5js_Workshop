let x = [];
let y = [];
let faceColor = [];
let eyeColor = [];

let numSmilies = 10;

let diameter = 50;

let xSpeed = [];
let ySpeed = [];

function setup() {
  createCanvas(400, 300);
  
  for (let i = 0; i < numSmilies; ++i) {
    x[i] = random(width)
    y[i] = random(height);
    faceColor[i] = makeColor();
    eyeColor[i] = makeColor();
    xSpeed[i] = random(1, 10);
    ySpeed[i] = random(1, 10);
  }
}

function draw() {
  background(110, 200, 123);
  
  for (let i = 0; i < numSmilies; i++) {
    drawSmiley(x[i], y[i], diameter, faceColor[i], eyeColor[i]);
    
    x[i] = x[i] + xSpeed[i];
    y[i] = y[i] + ySpeed[i];
    
    // Bounce
    if (x[i] > width || x[i] < 0)
      xSpeed[i] = xSpeed[i] * -1;
    if (y[i] > height || y[i] < 0)
      ySpeed[i] = ySpeed[i] * -1;
  }
}
    
function drawSmiley(x, y, diameter, faceColor, eyeColor) {
  translate(x, y);
  
  // Draw the face
  push();
  fill(faceColor);
  stroke('black');
  strokeWeight(3);
  circle(0, 0, diameter);
  pop();
  
  // Draw the eyes
  push(); // Remove previous fill/stroke settings
  noStroke();
  fill(eyeColor);
  ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
  ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
  pop();

  // Draw the smile
  push();
  strokeWeight(3);
  noFill();
  stroke('black');
  arc(0, diameter/5, diameter/3, diameter/3, 0, PI);
  pop();
  
  translate(-x, -y);
}

function makeColor() {
  return color(random(255), random(255), random(255));
}