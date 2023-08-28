let diameter;

function setup() {
  createCanvas(400, 300);
  diameter = 250;
}

function draw() {
  background(110, 200, 123);
  
  fill('yellow');
  stroke('black');
  
  // stroke width
  strokeWeight(3);
  
  // Draw a circle in the middle of the canvas
  circle(width/2, height/2, diameter);
  
  // Set the center
  translate(width/2, height/2);
  
  // Draw the eyes
  push(); // Remove previous fill/stroke settings
  noStroke();
  fill('green');
  ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
  ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
  pop(); // Restore previous settings
  
  push();
  noFill();
  arc(0, diameter/5, diameter/3, diameter/3, 0, PI);
  pop();
}