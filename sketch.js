function setup() {
  createCanvas(400,400);

box1 = new Box(400,200,20,20)
ground = new Ground(200,height,400,20)

}

function draw() {
  background(0);  
Engine.update(engine);



box1.display();
ground.display();

  drawSprites();
}