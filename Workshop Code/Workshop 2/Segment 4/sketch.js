let smilies = [];
let numSmilies = 4;
let soundFiles = ['clap.wav', 'hihat.wav', 'kick.wav', 'rim.wav', 'snare.wav'];

function preload() {
  for (let i = 0; i < numSmilies; ++i) 
    smilies[i] = new Smiley(i);
}

function setup() {
  createCanvas(400, 300);
  
}

function draw() {
  background(110, 200, 123);
  
  for (let i = 0; i < numSmilies; i++) {
    smilies[i].move();
    smilies[i].draw();
  }
}

function mousePressed() {
   for (let i = 0; i < numSmilies; ++i) 
    smilies[i].soundOn = !smilies[i].soundOn;
}

class Smiley {
  constructor(i) {
    this.x = random(width);
    this.y = random(height);
    this.xSpeed = random(1, 10);
    this.ySpeed = random(1, 10);
    this.diameter = random(10, 100);
    this.faceColor = makeColor();
    this.eyeColor = makeColor();
    this.mouthColor = makeColor();
    this.trail = [];
    this.trailSize = 50;
    this.sound = loadSound(soundFiles[i % 5]);
    this.soundOn = false;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    // Bounce
    if (this.x > width || this.x < 0) {
      if(this.soundOn) {
        this.sound.stop();
        this.sound.play();
      }
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      if(this.soundOn) {
        this.sound.stop();
        this.sound.play();
      }
      this.ySpeed *= -1;
    }
    
    this.trail.push(new p5.Vector(this.x, this.y));
    if (this.trail.length > this.trailSize)
      this.trail.shift();
    
    for (let i = 0; i < this.trail.length; i++) {
      let p = this.trail[i];

      // The trail is smaller at the beginning,
      // and larger closer to the mouse
      let size = this.diameter * i / this.trail.length;
      
      push();
      noStroke();
      fill(this.faceColor);
      circle(p.x, p.y, size);
      pop();
    }
  }

  draw() {
    translate(this.x, this.y);
    
    let diameter = this.diameter;
  
    // Draw the face
    push();
    fill(this.faceColor);
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
    stroke(this.mouthColor);
    arc(0, diameter/5, diameter/3, diameter/3, 0, PI);
    pop();

    translate(-this.x, -this.y);
  }
}

function makeColor() {
  return color(random(255), random(255), random(255));
}