const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 box1 = new Box(200,300,10,250);
  box2 = new Box(240,300,10,250);
 box3 = new Box(350,300,150,250);
 box4 = new Box(450,300,10,250);
 box5 = new Box(490,300,10,250);
  //ground = new Ground(400,390,100,200)

  
}

function draw() {
  background(0);  
  Engine.update(engine);

 box1.display();
  box2.display();
  box3.display();
  box4.display();
 box5.display();
 // ground.display();
 triangle(220,125,300,175,150,175);
 triangle(480,120,550,175,400,175);
}