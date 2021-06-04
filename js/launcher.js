class Launcher{
    constructor(bodyA,x,y){
        var options = {
            bodyA: bodyA,
            length:1,
            stiffness:0.004,
        

    
            pointB:{
                x:x,
                y:y
            }
           
         
        }
        this.pointB={x:x, y:y}
        this.x=x
        this.y=y
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke(48,22,8);
          
            strokeWeight(4);
             line( pointB.x+this.x , pointB.y+this.y,pointA.x , pointA.y);

            pop();
        }
    }
    
}