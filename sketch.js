var fixBlock;
var movingBlock;
var object1, object2;
function setup() {
  createCanvas(800,400);
  fixBlock = createSprite(400, 200, 50, 50);
  movingBlock= createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255);
  movingBlock.x = mouseX;
  movingBlock.y = mouseY;

  //function call (arguments)
  if( isTouching(fixBlock, movingBlock)){
    fixBlock.shapeColor = "red";
    movingBlock.shapeColor = "red";
  }else{
    console.log("black")
    fixBlock.shapeColor = "black";
    movingBlock.shapeColor = "black";
  }
 
  drawSprites();
}

//function definition(parameters) food, water - object1, object2
function isTouching(object1, object2){
  if(object1.x - object2.x === (object1.width + object2.width)/2 || 
  object2.x - object1.x === (object1.width + object2.width)/2 || 
  object1.y - object2.y === (object1.height + object2.height)/2 ||
  object2.y -object1.y === (object2.height + object1.height)/2){
    return true;
  }else{
    return false;
  }
}