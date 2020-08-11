const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var engine, world;
var canvas;
var ground;
var division;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  canvas=createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(240,785,480,15);
  for(var k=0;k<=innerWidth; k = k+80){
  divisions.push(new Divisions(k,height*divisionHeight/2,10,divisionHeight));
}
for( var j=40; j<=innerWidth; j=j+50){
  plinkos.push(new plinkos(j,75));
}

for( var j = 15; j <=width-10; j=j+50){
  plinkos.push(new plinkos(j,175));
}
if(frameCount%60===0)
{
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  for (var j = 0; j< particles.length;j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  drawSprites();
}