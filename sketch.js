var ground,groundImg;
var boy,boyImg;
var snow,snowImg;



function preload(){
  groundImg=loadImage("snow2.jpg")
  boyImg=loadImage("snow3.jpg");
  snowImg=loadImage("snow4.webp")
}

function setup() {
  createCanvas(1000,700);
  createSprite(400, 200, 50, 50);
  ground=createSprite(200,200,800,400);
  ground.addImage(groundImg);
  boy=createSprite(700,480);
  boy.addImage(boyImg);
  boy.scale=0.150;
}

function draw() {
  background(255,255,255);  
  

  
  drawSprites();

  snowFall();
}

function snowFall(){
  if(frameCount%10===0){
   snow=createSprite(random(20,790));
   snow.addImage(snowImg);
   snow.scale=0.1;
   snow.velocityY=2;
   if(snow.y>400){
    snow.velocityY=0;
  }

  }


}