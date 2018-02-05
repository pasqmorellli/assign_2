function setup() {
  createCanvas(500, 500);
  background(0);
  angleMode(DEGREES);

}

function draw() {
  translate(width/2,height/2);
  rotate(frameCount*6);
  noFill();

  stroke(lerpColor(color('#330a5b'), color('#f90089'), frameCount/450));
  line(125*sin(frameCount),0,125*sin(frameCount),125)


  if (frameCount == 450) {
    noLoop();
  }
}
