class Force{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length:10
        }
        this.pointB=pointB;
        this.force = Constraint.create(options);
        World.add(world, this.force);
    }

    fly(){
        this.force.bodyA = null;
    }

    display(){
        if(this.force.bodyA){
        var pointA = this.force.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}