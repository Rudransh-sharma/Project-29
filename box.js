class Box{
constructor(x,y,width,height){
var option = {
'restitution':0.8,
'friction':0.3,
'density':1.0

}
this.body = Bodies.rectangle(x,y,this.width,this.height)
this.height=height;
this.width=width;

World.add(world,this.body)
}

display(){
var pos = this.body.position ;
rectMode(CENTER)
strokeWeight(4)
stroke("red")
fill(225)
rect(0,0,this.width,this.height)




}













}