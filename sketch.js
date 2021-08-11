var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  
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
  background("white");
  
  edges= createEdgeSprites();


  rabbit.collide(edges);
  rabbit.collide(edges);

  

  rabbit.x = World.mouseX

  var select_sprites=Math.round(random(1.2));

  if (frameCount % 80 == 0) {
    if (select_sprites === 1){
      createApples();
    }
    else{
      createLeaves();
    }
    
    
    
            
      



  createApples();
  createLeaves();


  drawSprites();
}
function createApples(){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage("falling",appleImg)
  apple.velocityY=3
  apple.scale = 0.04
  apple.depth = rabbit.depth
  rabbit.depth = rabbit.depth + 1
  
  apple.lifetime = 150
}

}
function createLeaves(){

  leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage("falling",leafImg)
  leaf.velocityY=3
  leaf.scale = 0.08
  leaf.depth = rabbit.depth
  rabbit.depth = rabbit.depth + 1
  
  leaf.lifetime = 150
}
  









