let osc, reverb;
let recorder;

function setup() {
  createCanvas(600, 300);
  
  osc = new p5.SinOsc();
  osc.amp(0.5);
  osc.start();
  
  reverb = new p5.Reverb();
  reverb.process(osc, 5, 3);
  reverb.amp(0);
  
  //osc.disconnect(); 
  
  textAlign(CENTER, CENTER);
  textSize(20);
  
  recorder = new p5.SoundRecorder();
  recorder.record(soundFile);
}

function draw() {
  background(220);

  // change oscillator frequency based on mouseX
  let frequency = map(mouseX, 0, width, 40, 880);
  osc.freq(frequency);

  let amplitude = map(mouseY, 0, height, 1, 0.01);
  osc.amp(amplitude);
  
  message = "Frequency = " + frequency.toFixed(0) +
    ", Amplitude = " + amplitude.toFixed(3);
  text(message, width/2, height/2);
}

function mousePressed() {
  reverb.amp(1);
}

function mouseReleased() {
  reverb.amp(0);
}