
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyimage;
var tree, treeimage;
var ground;
var stone;
var mango, mango2, mango3, mango4, mango5, mango6;
var rope;
var kid;
var invisibleObj, invisibleStone;

function preload()
{
	boyimage = loadImage("boy.png");
	treeimage = loadImage("tree.png");
	//stoneimage = loadImage("stone.png");
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//boy=createSprite(200, 630, 20, 20)
	//boy.addImage(boyimage);
	//boy.scale=0.1;

	tree=createSprite(600, 380, 10, 60);
	tree.addImage(treeimage);
	tree.scale=0.5;

	ground=createSprite(width/2, 700, width, 5);

	//stone=createSprite(150, 580, 20, 20);
	//stone.addImage(stoneimage);
	//stone.scale=0.05;

	stone = new Stone(120, 530, 35, 35);
	invisibleObj = new InvisibleObject(140, 580, 10, 10);
	//invisibleStone = new InvisibleStone(100, 550, 10, 10);
	

	mango = new Mango(600, 200, 50, 50);
	mango2 = new Mango(500, 220, 50, 50);
	mango3 = new Mango(550, 280, 50, 50);
	mango4 = new Mango(700, 150, 50, 50);
	mango5 = new Mango(670, 250, 50, 50);
	mango6 = new Mango(400, 250, 50, 50);

	kid = new Kiddo(100, 500, 200, 300);

	rope = new Sling(invisibleObj.body, stone.body);

	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  drawSprites();

  
 
  //invisibleStone.display();
  invisibleObj.display();	
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  
  kid.display();
  stone.display();
  

  rope.display();
  MouseDragged();
  MouseReleased();	
 
}

function MouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function MouseReleased(){
	rope.fly();
}

