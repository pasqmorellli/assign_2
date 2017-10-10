function setup() {
  createCanvas(500,500);
  background(40);
  angleMode(DEGREES);
  strokeWeight(0.2)
}

function draw() {
  translate(width/2,height/2)
  
  strokeWeight(0.2)
  stroke(color('#fff22d'));
  line(width*cos(-frameCount*6), width*sin(-frameCount*3),width/2,0);
  
  strokeWeight(0.5)
  stroke(color('#ca0088'));
  line(width/2*cos(-frameCount*2), width/2*sin(-frameCount*2),-width,0);
  
  translate(-width/2,-height/2)
  
  strokeWeight(0.2)
  stroke(lerpColor(color('#ea0043'),color('#0fefca'), frameCount/180));
  line(0*cos(-frameCount*2), width*sin(-frameCount*2),height,0);
  
  if (frameCount >= 180) {
    noLoop();
  }
}