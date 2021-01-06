
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var rope1,bob1,bob2,bob3,bob4,bob5
var chain,chain1,chain2,chain3,chain4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  rope1=new Rope(350,200,280,9)


  bob1=new Bob(250,400,40)
  bob2=new Bob(300,400,40)
  bob3=new Bob(350,400,40)
  bob4=new Bob(400,400,40)
  bob5=new Bob(450,400,40)

  chain=new Chain(rope1.body,bob1.body,-(40*2),0)
  chain1=new Chain(rope1.body,bob2.body,-(40*1),0)
  chain2=new Chain(rope1.body,bob3.body,0,0)
  chain3=new Chain(rope1.body,bob4.body,(40*1),0)
  chain4=new Chain(rope1.body,bob5.body,(40*2),0)


  	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  rope1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  
  drawSprites();
 
}



