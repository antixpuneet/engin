const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  var ball_options={
    restitution:1.0
  }
  ground=Bodies.rectangle(200,400,400,30,ground_options);
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ground);
  World.add(world,ball);
  console.log(ground.position.x);
  console.log(ground.position.y);
  console.log(ball.label);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}