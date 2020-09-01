const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;

var grd1,grd2,pt,gameState,ball,swing,m,bg;
var blocks=[];
var score=0;

function setup() {
  createCanvas(1360,621);
  Img();
	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  grd1=Bodies.rectangle(width/2,2*height/3-25,288,16,{isStatic:true,restitution:0.5,friction:0.75});
  World.add(world,grd1);
  grd2=Bodies.rectangle(4*width/5,1.25*height/3,150,16,{isStatic:true,restitution:0.5,friction:0.75});
  World.add(world,grd2);
  world.gravity.y=1.25;
  gameState="onSling";
  {
    for(var s=0;s<5;s+=1){
      for(var x=0;(x+2*s)<9;x+=1){
      var b=new Block(560+(x+s)*30,320,30,30);
      blocks.push(b);
      }
    }
    for(var s=0;s<4;s+=1){
      for(var x=0;(x+s)<4;x+=1){
      var k=new Block(1043+(x+s)*30,210,30,30);
      blocks.push(k);
      }
    }
  }
  ball= new shoot(width/8,height/2,25);
  swing=new Spring(ball.body,{x:width/5,y:height/3});
}

function show(){
  for(var i=0;i<blocks.length;i++){
    blocks[i].display();
  }
  }

function draw() {
  if(Img())
  background(bg,bg,bg);

  {fill("blue");
    textSize(20);
    text("Score :"+score,width/2,height/10);
    noFill();}
  rectMode(CENTER);
  {fill(color(125,125,125));
  rect(grd1.position.x,grd1.position.y,288,16);
  rect(grd2.position.x,grd2.position.y,150,16);
  rect(width/5,height/3,10,20);
  noFill();
  }
 {fill(color(255,125,0));
  textSize(20);
  text("Press space for anchor",width/5,height/3-50);
  noFill();}
  show();
  ball.display();
  swing.display();
}

function mouseDragged(){
  if (gameState=="onSling"){
      Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
  }

}

function mouseReleased(){
  swing.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32&&gameState=="launched"){
    Matter.Body.setPosition(ball.body,{x:width/8,y:height/2});
    swing=new Spring(ball.body,{x:width/5,y:height/3});  
     gameState="onSling";
  }
}

async function Img(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06&&hour<=18){
    bg= Number(200);
  }
  else{
    bg= Number(0);
  }
  return(bg);
}
