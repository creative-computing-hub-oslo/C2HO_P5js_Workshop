let x = 0;
let y = 0;

let xSpeed = 5;
let ySpeed = 10;

function setup() {
  createCanvas(400, 300);
  xSpeed = random(50);
  ySpeed = random(50);
  background(110, 200, 123);
  frameRate(10);
}

function draw() {
  let diameter = 50;
  drawSmiley(diameter, x, y);
  x = x + xSpeed;
  y = y + ySpeed;
  
  /*
  // Reset
  if (x > width)
    x = 0;
  
  if (y > height)
    y = 0;
  */
  
  // Bounce
  if (x > width || x < 0)
    xSpeed = xSpeed * -1;
  if (y > height || y < 0)
    ySpeed = ySpeed * -1;
}
    
function drawSmiley(diameter, xOffset, yOffset) {
  // Draw the face
  push();
  fill(random(255), random(255), random(255));
  stroke('black');
  strokeWeight(3);
  circle(xOffset, yOffset, diameter);
  pop();
  
  // Draw the eyes
  push(); // Remove previous fill/stroke settings
  noStroke();
  translate(xOffset, yOffset);
  fill(random(255), random(255), random(255));
  ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
  ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
  pop();

  // Draw the smile
  push();
  strokeWeight(3);
  translate(xOffset, yOffset);
  noFill();
  stroke('black');
  arc(0, diameter/5, diameter/3, diameter/3, 0, PI);
  pop();
}