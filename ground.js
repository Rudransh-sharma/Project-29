class Ground{
    constructor(x,y,width,height){
    var option = {
    isStatic : false
    
    }
    this.body = Bodies.rectangle(x,y,width,height,option)
    this.height=height;
    this.width=width;
    
    World.add(world,this.body)
    }
    
    display(){
    var pos = this.body.position ;
    rectMode(CENTER)
    fill(225)
    rect(pos.x,pos.y,this.width,this.height)
    
    
    
    
    }
}