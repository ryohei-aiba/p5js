const canvasX = 1000;
const canvasY = 1000;

const canvasColor = 'skyblue';

let circleX = 100;
let circleY = 100;

function setup() {
  // キャンバスの作成
  createCanvas(canvasX, canvasY);
}

function draw() {
  background(canvasColor);
  fill('pink');
  noStroke();

  circle(circleX, circleY, 100);

  circleX++;
  circleY++;
}