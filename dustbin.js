class Dustbin {
    constructor(x, y, width, height){
        var options = {
            'isStatic' : true
        }
        this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        this.bodyb = Bodies.rectangle(x,y,width,height,options);    
        World.add(world, this.bodyb);
    }

    display (){
     var pos = this.bodyb.position;
     //rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height);
    }
}

