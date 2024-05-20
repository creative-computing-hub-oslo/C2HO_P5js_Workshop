let img;

let penColor;

function preload() {
  img = loadImage("c2hoLogo.png");
}

function setup() {
  createCanvas(img.width, img.height);
  background(0);
  penColor = color(0);
  image(img, 0, 0);
}

function mouseClicked() {
  let c = img.get(mouseX, mouseY);
  penColor = c;
}

function mouseDragged() {
  fill(penColor);
  noStroke();
  circle(mouseX, mouseY, 20)
}