function bestFriend(x, y, radius) {
    var options = {
        restitution : 0.5,
        friction : 1
        /*density : 3,*/
        //inertia : Infinity 
    }
    this.body = Bodies.circle(x,y,radius, options);
    this.radius = radius;
    World.add(world, this.body)
    this.image = loadImage("My.png");
    this.smo = loadImage("smoke.png");
    this.trajectory =[];

    this.show = function() {
        var angle = this.body.angle;
        
        if(this.body.velocity.x > 10 && this.body.position.x > 330){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, 80,90);
        pop();
    }
}