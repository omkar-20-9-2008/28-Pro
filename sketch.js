
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,boy,stone,mango1,force;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,650,1200,10);
	tree = new Tree(950,400,500,500);
	boy = new Boy(200,590,200,250);
  stone = new Stone(145,540,50,50);
  mango1 = new Mango(800,350,40);
  mango2 = new Mango(1000,300,40);
  mango3 = new Mango(900,390,40);
  mango4 = new Mango(1040,200,40);
  mango5 = new Mango(1150,400,40);

  force = new Force(stone.body,{x:145,y:540})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  force.display();

  mouseDragged();
  mouseReleased();

  keyPressed();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}

function detectCollision(stone,mango1){

mangoBodyPosition = mango1.body.position
stoneBodyPosition = stone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-mango1.r+stone.r){
  Matter.Body.setStatic(mango1.body,false);
}

}

function detectCollision(stone,mango2){

  mangoBodyPosition = mango2.body.position
  stoneBodyPosition = stone.body.position
  
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<-mango2.r+stone.r){
    Matter.Body.setStatic(mango2.body,false);
  }
  
  }

  function detectCollision(stone,mango3){

    mangoBodyPosition = mango3.body.position
    stoneBodyPosition = stone.body.position
    
    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<-mango3.r+stone.r){
      Matter.Body.setStatic(mango3.body,false);
    }
    
    }

    function detectCollision(stone,mango4){

      mangoBodyPosition = mango4.body.position
      stoneBodyPosition = stone.body.position
      
      var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
      if(distance<-mango4.r+stone.r){
        Matter.Body.setStatic(mango4.body,false);
      }
      
      }

      function detectCollision(stone,mango5){

        mangoBodyPosition = mango5.body.position
        stoneBodyPosition = stone.body.position
        
        var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
        if(distance<-mango5.r+stone.r){
          Matter.Body.setStatic(mango5.body,false);
        }
        
        }

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  force.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:145,y:540})
    lancherObject.attach(stoneObj.body);
  }
}
