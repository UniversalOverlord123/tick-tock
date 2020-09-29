var hourhand;
var minutehand;
var secondhand;

var hrAngle;
var minAngle;
var secAngle;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(0);  

  angleMode(DEGREES);

  hourhand = hour();
  minutehand = minute();
  secondhand = second();

  hrAngle = map(hourhand,0,12,0,360);
  minAngle = map(minutehand,0,60,0,360);
  secAngle = map(secondhand,0,60,0,360);

  push();
  translate(400,400);
  rotate(secAngle);
  stroke("red");
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  push();
  translate(400,400);
  rotate(minAngle);
  stroke("yellow");
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  push();
  translate(400,400);
  rotate(hrAngle);
  stroke("green");
  strokeWeight(3);
  line(0,0,100,0);
  pop();

  push();
  noFill();
  stroke("red");
  strokeWeight(15);
  arc(400,400,260,260,-90,secAngle);

  stroke("yellow");
  strokeWeight(15);
  arc(400,400,320,320,-90,minAngle);

  stroke("green");
  strokeWeight(15);
  arc(400,400,380,380,-90,hrAngle);
  pop();

  textAlign(CENTER);
  textSize(24);
   
  if(hourhand < 13 && hourhand > 0){
    text(hourhand,325,150);
  }
  else if(hourhand >= 13){
    text(hourhand - 12,310,150);
  }
  else{
    text(hourhand + 12,310,150);
  }

  text(":",340,150);

  if(minutehand > 9){
    text(minutehand,370,150);
  }
  else{
    text("0"+minutehand,370,150);
  }

  text(":",400,150);

  if(secondhand > 9){
    text(secondhand,430,150);
  }
  else{
    text("0"+secondhand,430,150);
  }

  if(hourhand < 12){
    text("AM",475,150);
  }
  else{
    text("PM",475,150);
  }
}