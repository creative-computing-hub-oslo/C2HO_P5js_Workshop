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
  createParticles(300, 5);
}

function draw() {
  background('black');
  drawParticles();
}

function drawParticles() {
  const mouseAmount = abs((mouseY - height / 2) / (height / 2) * 100);
  particles.forEach((p, i) => {
    if (i < mouseAmount) {
      p.update();
      p.walls();
      p.draw();
    }
  });
  
  
  const mouseDistance = abs((mouseX - width / 2) / (width / 2) * 300);
  for (let i=0; i<mouseAmount; i++) {
    for (let j=i+1; j<mouseAmount; j++) {
      const p1 = particles[i];
      const p2 = particles[j];
      const distance = floor(p1.v.dist(p2.v));
      if (distance < mouseDistance * 0.5) {
        stroke(255, map(distance, 0, mouseDistance * 0.5, 255, 0));
        line(p1.v.x, p1.v.y, p2.v.x, p2.v.y);
      }
    }
  }
}