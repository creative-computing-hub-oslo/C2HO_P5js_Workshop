let img;
let penColor;

function preload() {
  img = loadImage("c2hoLogo.png");
}

function setup() {
  img.resize(250, 200);
  createCanvas(img.width, img.height);
  background(0);
  penColor = color(0);
  invertPixels(img)
}

function mouseClicked() {
  let c = img.get(mouseX, mouseY);
  penColor = c;
}

function mouseDragged() {
  fill(penColor);
  noStroke();
  circle(mouseX, mouseY, 10)
}

function invertPixels() {
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      // Read the pixel's color
      let originalColor = img.get(x, y);

      // Inverse the color
      const r = 255 - red(originalColor);
      const g = 255 - green(originalColor);
      const b = 255 - blue(originalColor);
      let outputColor = color(g, r, b);

      // Set the pixel's color
      img.set(x, y, outputColor);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}