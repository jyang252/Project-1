let BG1 = 0;
let BG2 = 0;
let BG3 = 0;

class Block {
  constructor(x, y, width, height, speedX, speedY, clr) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;
    this.clr = clr;
  }

  display() {
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x = this.x + this.speedX;
    if (this.x > windowWidth - this.width || this.x < 0) {
      this.speedX = this.speedX * -1;
      fill(random(0, 255), random(0, 255), this.clr);
    }
    this.y = this.y + this.speedY;
    if (this.y > windowHeight - this.height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }
}

let blocks = [];
let numLock = 100;
let cnv;
i = 0;
b = 0;
for (i; i < numLock; i++) {
  blocks[i] = new Block(i * 2, i * 4, 30, i * 2, i * 0.1, 1, i * 1.5);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(showBlock);
  myArr = ["This is text", 0, true, "Is trying to print this item out"];
  console.log(myArr[0]);
}

function draw() {
  background(BG3, BG1, BG2, 10);
  for (i = 0; i < numLock; i++) {
    blocks[i].display();
    blocks[i].move();
  }
  fill(BG1, 55, 55, 10);
  square(0, windowHeight / 2, windowWidth);
}

function mousePressed() {

  b = b + 1;
  blocks[b] = new Block(
    mouseX,
    mouseY,
    mouseX / 4,
    mouseY / 4,
    b * 0.1,
    b * 0.1,
    b * 1.5
  );
}

function showBlock() {
  blocks[b].display();
  blocks[b].move();
}

function keyPressed() {
  if (keyCode === 32){
  BG1 = random(0, 255);
  BG2 = random(0, 255);
  BG3 = random(0, 255);
  }
}