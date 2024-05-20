let canvas;
let wrapper;
let wrapperClass = "vrtx-article-body";
let parentID = "p5jsw1segment3";

function setup() {
  wrapper = document.getElementsByClassName(wrapperClass)[0];
  parent = document.getElementById(parentID);
  canvasWidth = wrapper.offsetWidth;
  canvas = createCanvas(canvasWidth, 400);
  canvas.parent(parentID);

  background(110, 200, 123);
}

function draw() {
  // Set the center
  translate(width/2, height/2);
  
  let diameter = random(10, 250);
  let xOffset = random(-width/2, width/2);  
  let yOffset = random(-height/2, height/2);
  drawSmiley(diameter, xOffset, yOffset);
}
    
function drawSmiley(diameter, xOffset, yOffset) {
  translate(xOffset, yOffset);
  fill('yellow');
  stroke('black');
  
  // stroke width
  strokeWeight(3);
  
  // Draw a circle in the middle of the canvas
  circle(0, 0, diameter);
  
  // Draw the eyes
  push(); // Remove previous fill/stroke settings
  noStroke();
  fill('green');
  ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
  ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
  
  //
  pop(); // Restore previous settings
  noFill();
  arc(0, diameter/5, diameter/3, diameter/3, 0, PI);
}