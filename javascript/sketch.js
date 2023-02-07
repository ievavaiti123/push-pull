let stage = false;
let x, y;
let pos, speed;
let canvas2;

let bckColA, bckColB, currentBckColor;

function setup() {
  createCanvas(1000, 600);

  canvas2 = createGraphics(1000, 600);

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


  textSize(20);
  text("I've started a text poem", pos.x+30, pos.y);

  image(canvas2, 0, 0);
  if (mouseIsPressed) {
    canvas2.fill(236, 199, 21)
    canvas2.textSize(10);
    canvas2.text("It's up to you where to take it next", mouseX, mouseY);
  } else {
    canvas2.clear()
    canvas2.fill(236, 199, 21)
    canvas2.textSize(20)
    canvas2.text("click mouse to reveal secret message", mouseX, mouseY)
  }
  

  
  
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