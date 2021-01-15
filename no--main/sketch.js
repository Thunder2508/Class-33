
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var ground;

function preload()
{
	boy=loadImage("Images/boy.png")
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//boy=new Boy(250,680);
	ground=new Ground(width/2,700,width,20);
    
	//Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  image(boy,200,465,200,300);
  //boy.display();
  ground.display();
}



