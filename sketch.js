
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

var world;
var engine;

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,150,250,20);

	bob1 = new Bob(520,500,40);
	bob2 = new Bob(560,500,40);
	bob3 = new Bob(600,500,40);
	bob4 = new Bob(640,500,40);
	bob5 = new Bob(680,500,40);

	rope1 = new Rope(bob1.body,roof.body,-80, 0);
	rope2 = new Rope(bob2.body,roof.body,-40, 0);
	rope3 = new Rope(bob3.body,roof.body,0, 0);
	rope4 = new Rope(bob4.body,roof.body,40, 0);
	rope5 = new Rope(bob5.body,roof.body,80, 0);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background('#CC66FF');

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display(); 
  bob3.display();
  bob4.display();
  bob5.display();

  if(keyDown("UP_ARROW")) {
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-20,y:-15});
  }

  //keyPressed();
}

function keyPressed() {
	
}
