var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orangeleaves,orangeleaveImg;


function preload(){
  gardenImg = loadImage("garden.png");
  appleImg = loadImage("apple.png")
  rabbitImg = loadImage("rabbit.png");
  orangeleaveImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createapples();
  createorangeleaves();
  drawSprites();
}

function createapples() {

  var select_sprites = Math.round(random(1,2))

  if (frameCount % 80 === 0) {
  if (select_sprites == 1 ) {
apple = createSprite(random(50,350),40,10,10)
apple.addImage(appleImg);
apple.scale = 0.075;
apple.velocityY = 3;
 apple.lifetime =  100;
  
  }
  }
}

function createorangeleaves(){


  if (frameCount % 80 === 0) {
    if (select_sprites = 1){
orangeleaves = createSprite(random(50,350),40,10,10)
orangeleaves.addImage(orangeleaveImg);
orangeleaves.scale = 0.075;
orangeleaves.velocityY = 3;
orangeleaves.lifetime = 100;
  }
}
}