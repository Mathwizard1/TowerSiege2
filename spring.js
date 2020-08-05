class Spring{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        Matter.Body.setPosition(this.sling.bodyA, {x: 200 , y: 50});
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255,255,255);
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x,pointB.y);
            pop();
        }
    }
    
}