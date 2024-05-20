let smilies = [];
let numSmilies = 5;

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < numSmilies; ++i) 
    smilies[i] = new Smiley();
}

function draw() {
  background(110, 200, 123);
  
  for (let i = 0; i < numSmilies; i++) {
    smilies[i].move();
    smilies[i].draw();
  }
}

class Smiley {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.xSpeed = random(1, 10);
    this.ySpeed = random(1, 10);
    this.diameter = random(10, 200);
    this.faceColor = makeColor();
    this.eyeColor = makeColor();
    this.mouthColor = makeColor();
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    // Bounce
    if (this.x > width || this.x < 0)
      this.xSpeed *= -1;
    if (this.y > height || this.y < 0)
      this.ySpeed *= -1;
  }

  draw() {
    translate(this.x, this.y);
    
    let diameter = this.diameter;
  
    // Draw the face
    push();
    fill(this.faceColor);
    stroke('black');
    strokeWeight(3);
    circle(0, 0, diameter);
    pop();

    // Draw the eyes
    push(); // Remove previous fill/stroke settings
    noStroke();
    fill(this.eyeColor);
    ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
    ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
    pop();

    // Draw the smile
    push();
    strokeWeight(3);
    noFill();
    stroke('black');
    arc(0, diameter/5, diameter/3, diameter/3, 0, PI);
    pop();

    translate(-this.x, -this.y);
  }
}

function makeColor() {
  return color(random(255), random(255), random(255));
}