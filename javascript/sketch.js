

function setup() {
  createCanvas(1000, 600);

  osc = new p5.Oscillator('sine');
 
  
}

function draw() {
  background(220);
  fill(236, 199, 21);
  circle(width/2, height/2, 30);
}

function playOscillator() {
  osc.start();
  playing = true;
}