
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world; 
 

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,600,10);
	ground= new Ground(400,680,20);
	leftside= new Dustbin(550,620,20,200);
	bottom = new Dustbin(610,660,100,20,100);
	rightside= new Dustbin(670,620,20,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();

  leftside.display();
 bottom.display();
  rightside.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15, y:-15})
	}
}
 
