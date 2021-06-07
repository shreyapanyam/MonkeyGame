
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400, 400);

  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = createSprite(400, 200, 10, 10);
  bananaGroup.addImage(bananaImage);
  bananaGroup.scale = 0.1;
  
  obstacleGroup = createSprite(300, 330, 10, 10);
  obstacleGroup.addImage(obstacleImage);
  obstacleGroup.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

  
  
}


function draw() {

  if (keyDown("space")) {
    monkey.velocityY = -12; 
  }
  monkey.velocityY = monkey.velocityY + 0.8;
 
    monkey.collide(ground);
  obstacleGroup.collide(ground);
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  strokeWeight(0.1);
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survial Time: "+ survivalTime, 100,50);
  
  drawSprites();
}






