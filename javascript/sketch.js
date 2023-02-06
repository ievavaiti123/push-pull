let stage = false;
let x, y;
let pos, speed;

let bckColA, bckColB, currentBckColor;

function setup() {
  createCanvas(1000, 600);

  osc = new p5.Oscillator('sine');
  pos = createVector(width/2, height/2);
  speed = createVector(random(2), random(3,5));

  
  bckColA = color(255, 0, 155);
  bckColB = color(140, 20, 255);
  currentBckColor = bckColA;
}

function draw() {
  background(currentBckColor);
  fill(236, 199, 21);
  circle(pos.x, pos.y, 30);
  move();
  checkEdges();
}

function playOscillator() {
  osc.start();
  playing = true;
}

function move(){
  pos.add(speed);
}

function changeStage(){
  stage = !stage;
  if(stage){
    currentBckColor = bckColA;
  } else {
    currentBckColor = bckColB;
  }
}

function checkEdges() {
  if (pos.x > width) {
    pos.x = 0;
  } else if (pos.x < 0) {
    pos.x = width;
  } else if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
    changeStage();
  }
}