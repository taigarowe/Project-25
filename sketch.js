
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;
function preload()
{
	dustbin_image = loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	d1 = new Dustbin(700,620,20,100);
	d2 = new Dustbin(590,620,20,100);
	d3 = new Dustbin(640,655,100,20);

	paper = new Paper(200, 300, 10);
	ground = Bodies.rectangle(width / 2, 670 , width, 10,{
		isStatic: true
	});
    World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  d1.display();
  d2.display();
  d3.display();
  image(dustbin_image,1000,330,200,200);

  paper.display();
  rect(ground.position.x, ground.position.y,width,10);
  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 11,
			y: -11
		})
	}
}



