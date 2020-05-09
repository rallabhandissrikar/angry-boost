function Bestee(x, y, width, height) {
    var options = {
        restitution : 0.04,
        friction : 0.5,
        density : 1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("friend.jpg");
    World.add(world,this.body);

    this.show = function() {
        var angle  = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}