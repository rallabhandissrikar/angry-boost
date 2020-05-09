function slingShot(bodyA, x, y) {
    var options = {
        bodyA : bodyA,
        pointB : {
            x: x,
            y: y
        },
        stiffness : 0.1,
        length : 10
    }
    this.sling = Matter.Constraint.create(options);
    World.add(world, this.sling);

    this.show = function() {
        var p1 = this.sling.pointB;
        circle(p1.x, p1.y, 100)
        if (this.sling.bodyA) {
        
        var p2 = this.sling.bodyA.position;
        push();
        strokeWeight(10);
        
        line(p1.x,p1.y,p2.x,p2.y);
        
        pop();
        }
    }

    this.dit = function() {
        this.sling.bodyA = null;
    }

    this.att = function(body) {
        this.sling.bodyA = body;
    }
}