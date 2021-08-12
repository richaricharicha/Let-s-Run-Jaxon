var boy, boyImg, boyRun;
var ground, groundImg



function preload(){
  boyImg = loadAnimation ("Runner-1.png", "Runner-2.png");
  groundImg = loadImage ("path.png");
}

function setup(){
  createCanvas(400,400);
  
  ground = createSprite(200, 200,20,400);
  ground.addImage("ground",groundImg);
  ground.velocityY = 4;

  boy = createSprite (200, 300, 30, 30);
  boy.addAnimation ("running", boyImg);
  boy.scale = 0.1;

  left = createSprite (0,0,100,800);
  left.visible = false;

  right = createSprite (410,0,100,800);
  right.visible = false;
  
}

function draw() {
  background(0);

  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide (edges[3]);
  boy.collide (left);
  boy.collide (right);

  

  if (ground.y>400){
    ground.y=height/2;
  }
  drawSprites();
}
