var object11,object22;
function setup() {
  createCanvas(800,400);
object22=createSprite(400, 200, 100, 50);
object22.shapeColor="red";
//object2.debug=true;
object11=createSprite(100,100,50,100);
object11.shapeColor="blue";
//object1.debug=true;
}

function draw() {
  background(0,0,0);  
  object11.x=World.mouseX;
  object11.y=World.mouseY;
  if(isTouching(object11,object22)){
    object11.shapeColor="red";
    object22.shapeColor="blue";
  }
  else{
    object11.shapeColor="blue";
    object22.shapeColor="red";
 }
  drawSprites();
}
