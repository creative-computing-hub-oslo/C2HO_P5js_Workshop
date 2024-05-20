let img;

function preload() {
  img = loadImage("c2hoLogo.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.resize(100, 100);
  background(0);
}

function draw() {
  if(mouseIsPressed)
    background(0);
  
  image(img, mouseX - img.width/2, mouseY - img.height/2) ;
}