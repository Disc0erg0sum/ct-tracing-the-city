/* merry xmas 2019-12-25 */
let table; // <<---<<--<<-- https://p5js.org/reference/#/p5.Table
let canvas = undefined;
const offset = 50;
const sfac = 5;

function preload() {
  // @ts-ignore
  table = loadTable("data/breitband_anschlussall.csv", "csv", "header");
}

function setup() {
  canvas = createCanvas(2000, 2000, SVG);
  angleMode(DEGREES);



}

function draw() {
  const drehWinkel = 360 / table.getRowCount();

  push();
  translate(width / 2, height / 2);
  fill(0);
  ellipseMode(CENTER);
  ellipse(0, 0, 20, 20);
  noFill();
  strokeWeight(4);
  ellipse(0, 0, 40, 40);
  ellipse(0, 0, 60, 60);
  ellipse(0, 0, 80, 80);
  strokeWeight(1);
  ellipse(0, 0, sfac * 200 + 2 * offset, sfac * 200 + 2 * offset);
  for (let i = 0; i < table.getRowCount(); i++) {
    push();
    rotate(drehWinkel * i);
    translate(0, offset);
    line(0, 0, 0, table.get(i, 0) * sfac);
    pop();
  }
  pop();
  noLoop();
}

function keyPressed() {
  if (key === "s" || key === "S") {
    save();
  }
}