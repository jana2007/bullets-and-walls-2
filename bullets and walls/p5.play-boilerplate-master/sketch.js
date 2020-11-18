var wall ;
var bullet  ;
 var wall1 , wall2 ;
var speed , weight ;
var thickness ;

function setup() {
  createCanvas(800,400);

speed =random(223,321);
weight =random(30,52);
thickness = random(22,83);


bullet = createSprite(10,100,20,10);
  
bullet.velocityX = speed ;

  bullet.shapeColor = color("red");
  

wall = createSprite(790,100,20,40);
wall.shapeColor = ("grey");

wall1 = createSprite(10,50,2000,10);
wall1.shapeColor =("brown");

wall2 = createSprite(10,150,2000,10);
wall2.shapeColor =("brown");




  
}

function draw() {
  background("black"); 
  
  
if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0 ;
  var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness) 
  
  if(damage>10){
    wall.shapeColor = color (255,0,0)

  }

  if (damage<10){
    wall.shapeColor = color(0,255,0);
  }
}


  drawSprites();
}


function hasCollided(bullet,wall){

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x ;
if(bulletRightEdge>=wallLeftEdge){
  return true 
}
 
return false ;

}