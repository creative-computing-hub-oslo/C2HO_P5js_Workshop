function setup() {
  createCanvas(400, 300);
}

function draw() {
  // (red, green, blue)
  background(110, 200, 123);
  
  // (Upper left corner x, upper left corner y, width/height)
  square(20, 20, 50);
  
  // (Upper left corner x, upper left corner y,
  // width, height)
  rect(20, 150, 50, 100);
  
  // (centroid x, centroid y, diameter)
  circle(320, 50, 50);
  
  // (centroid x, centroid y, width, height)
  ellipse(350, 150, 50, 75)
  
  // (x1, y1, x2, y2)
  line(250, 20, 85, 20);
  
  // (x1, y1, x2, y2, x3, y3)
  triangle(320, 200, 320, 250, 300, 225);
  
  // (x1, y1, x2, y2, x3, y3, x4, y4)
  quad(150, 100, 150, 200, 250, 175, 250, 60)
  
  // (x, y, width, height, start, end)
  arc(200, 250, 100, 50, 0, 1.5 * PI);
}