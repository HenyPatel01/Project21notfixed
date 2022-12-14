
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1500,600,20,120);
	
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		hForce();
		vForce();
	}
}

function hForce()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}