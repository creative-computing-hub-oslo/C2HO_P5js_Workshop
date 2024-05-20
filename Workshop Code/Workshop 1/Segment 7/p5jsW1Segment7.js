let canvas;
let wrapper;
let wrapperClass = "vrtx-article-body";
let parentID = "p5jsw1segment7";

let x = 0;
let y = 0;

let r = 0;
let g = 0;
let b = 0;

let xSpeed = 5;
let ySpeed = 10;

function setup() {
  wrapper = document.getElementsByClassName(wrapperClass)[0];
  parent = document.getElementById(parentID);
  canvasWidth = wrapper.offsetWidth;
  canvas = createCanvas(canvasWidth, 400);
  canvas.parent(parentID);
  
  xSpeed = random(50);
  ySpeed = random(50);
  background(r, g, b);
}

function draw() {
  background(r, g, b);
  let diameter = 50;
  if(mouseIsPressed)
    drawSmiley(diameter, mouseX, mouseY);
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

function mousePressed() {
  r = 255;
  g = 0;
  b = 0;
}

function mouseReleased() {
  r = 0;
  g = 255;
  b = 0;
}

function mouseDragged() {
  r = 0;
  g = 0;
  b = 255;
}