const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var hero1;
var villian1,villy_img;
var edges;
var villian;
var villygrp;
var bullet;
function preload(){
villy_img=loadImage("pics/chit.png");

}
function setup() {
 var canvas= createCanvas(displayWidth,displayHeight-200);
 engine=Engine.create();
 world=engine.world;


 hero1=new hero(displayWidth/2+500,displayHeight/2-50,150,250);
 //villian1=new villian(displayWidth/2-650,displayHeight/2-50,150,250);
villian1=createSprite(displayWidth/2-650,displayHeight/2-50,150,250);
villian1.addImage(villy_img);
villian1.scale=0.5;
villygrp=new Group();
}

function draw() {
background(255);  

villian1.velocityX=1.5;



//if(keyDown leftArrow)
//{hero.pos=hero.pos+10}


//Engine.update(engine);
hero1.display();
//villian1.display();

edges=createEdgeSprites();

if(villygrp.x>displayWidth){
  villygrp.destroy;
}


villy();
createBullet();
  drawSprites();
}

function villy(){
if(frameCount%100===0){

  villian=createSprite(10,200,200,100);
  villian.y=Math.round(random(80,1000));
  villian.velocityX=2.5;
  villian.addImage(villy_img);
  villian.scale=0.5;
  villygrp.add(villian);
  
}
}

function createBullet(){

  bullet=createSprite(10,200,100,40);
bullet.shapeColor="lightBlue";
//bullet.x=villian.x;
//bullet.y=villian.y;
bullet.velocityX=3;
}




