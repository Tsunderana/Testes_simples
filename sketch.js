var caixa;
var fundo;
function setup() {
  createCanvas(400,400);
  fundo = createSprite(200,200,400,400);
  fundo.shapeColor = "purple";
  createCanvas(400,400);
  caixa = createSprite(200,200,30,30);
  caixa.shapeColor = "orange";
 
}

function draw() 
{
  background(30);

  if(keyDown("right")){
    caixa.shapeColor = "black";
    caixa.position.x = caixa.position.x+5;
    fundo.shapeColor = "yellow";
  }
  if(keyDown("left")){
    caixa.shapeColor = "yellow";
    caixa.position.x = caixa.position.x-5;
    fundo.shapeColor = "black";
  }
  if(keyDown("up")){
    caixa.shapeColor = "purple";
    caixa.position.y = caixa.position.y-5;
    fundo.shapeColor = "orange";
  }
  if(keyDown("down")){
    caixa.shapeColor = "white";
    caixa.position.y = caixa.position.y+5;
    fundo.shapeColor = "blue";
  }
  
  drawSprites();
}
 



