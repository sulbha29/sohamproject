const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var archer;

var carriage;
var bg;
var arrow;

function setup(){
    var canvas = createCanvas(1500,550);
    engine= Engine.create()
    world = engine.world; 

  

 balloonA= new Balloon1(Math.ceil(Math.random(50,100)*300),0,30,50);
 balloonB= new Balloon2(Math.ceil(Math.random(50,100)*300),20,30,50);
 balloonC= new Balloon3(Math.ceil(Math.random(50,100)*300),30,30,50);
 rock1= new Rock(550,100,30,50);
 carriage= new Carriage(1310,200,80,60);
 archer= new Archer(1310,120,100,100);
 arrow= new Arrow(1268,120,60,60);
 

 
bg=loadImage("Images/Background1.jpg");
    
}
function draw(){
    background(bg);
    Engine.update(engine);
    balloonA.display();
    balloonB.display();
    balloonC.display();
    rock1.display();
    carriage.display();
    archer.display();
    arrow.display();
    check();


}
function check()
{
	if(balloonA.body.position.y>=500)
		balloonA=new Balloon1(Math.ceil(Math.random(50,100)*300),0,30,50);
	if(balloonB.body.position.y>=500)
		balloonB=new Balloon2(Math.ceil(Math.random(50,100)*300),20,30,50);
	if(balloonC.body.position.y>=500)
		balloonC=new Balloon3(Math.ceil(Math.random(50,100)*300),40,30,50);
}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    
   
      Matter.Body.setStatic(arrow.body,false);
      Matter.Body.setVelocity(arrow.body,{x:-10,y:0});
       
  }
  if(keyCode === 32){
    Matter.Body.setStatic(arrow.body,true);
      Matter.Body.setPosition(arrow.body,{x:archer.body.position.x-50,y:archer.body.position.y});
      Matter.Body.setVelocity(arrow.body,{x:0,y:0});
      // Matter.Body.setAngle(arrow1.body,PI/2);
  }

}



