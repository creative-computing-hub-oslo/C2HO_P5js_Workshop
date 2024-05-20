// code from https://codepen.io/Mamboleoo/pen/PowKoxe

let particles = [];

class Particle {
  constructor (r) {
    this.v = createVector(random(width), random(height));
    this.r = r || random(4) + 1.5;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
  }
  update () {
    this.v.x += this.speedX;
    this.v.y += this.speedY;
  }
  walls () {
    if (this.v.x <= -this.r) {
      this.v.x = width;
    } else if (this.v.x >= width + this.r) {
      this.v.x = -this.r;
    }
    if (this.v.y <= -this.r) {
      this.v.y = height;
    } else if (this.v.y >= height + this.r) {
      this.v.y = -this.r;
    }
  }
  draw () {
    noStroke();
    fill(255);
    circle(this.v.x, this.v.y, this.r);
  }
}

function createParticles (amount, radius) {
  particles = [];
  for (let i=0; i<amount; i++) {
    particles.push(new Particle(radius));
  }
}

function setup() {
  createCanvas(400, 400);
  createParticles(10, 5);
}

function draw() {
  background('black');
  drawParticles();
}

function drawParticles() {
  particles.forEach(p => {
    p.update();
    p.walls();
    p.draw();
  });
}

