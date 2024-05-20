let canvas;
let wrapper;
let wrapperClass = "vrtx-article-body";
let parentID = "p5jsw1segment4";

let c = 0;
let r  = 0;

function setup() {
  wrapper = document.getElementsByClassName(wrapperClass)[0];
  parent = document.getElementById(parentID);
  canvasWidth = wrapper.offsetWidth;
  canvas = createCanvas(canvasWidth, 400);
  canvas.parent(parentID);
  background(110, 200, 123);
  //noLoop();
  frameRate(5);
}

function draw() {
  const columns = 10;
  const rows = 10;
  const cellWidth = width / columns;
  const cellHeight = height / rows;
    
  const x = c * cellWidth + cellWidth / 2;
  const y = r * cellHeight + cellHeight / 2;
  translate(0,0);
  drawSmiley(min(cellWidth, cellHeight), x, y);
  
  console.log(c);
  if (c++ == columns) {
    c = 0;
    if (r++ == rows)
      r = 0;
  }
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