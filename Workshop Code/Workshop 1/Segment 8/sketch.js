let x = 0;
let y = 0;

let xSpeed = 5;
let ySpeed = 10;

let diameter = 50;

let message = '';

function setup() {
  createCanvas(400, 300);
  xSpeed = random(50);
  ySpeed = random(50);
  frameRate(60);
}

function draw() {
  background(113, 100, 200);
  drawSmiley(diameter, x, y);
  
  textSize(144);
  text(message, 25, 150);
  
  // Good version (can handle multiple keys)
  if (keyIsDown(UP_ARROW)) {
    y = y - 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 4;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 4;
  }
}
    
function drawSmiley(diameter, xOffset, yOffset) {
  // Draw the face
  push();
  fill('yellow');
  stroke('black');
  strokeWeight(3);
  circle(xOffset, yOffset, diameter);
  pop();
  
  // Draw the eyes
  push(); // Remove previous fill/stroke settings
  noStroke();
  translate(xOffset, yOffset);
  fill('black');
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

function keyTyped() {
  message += key;
}