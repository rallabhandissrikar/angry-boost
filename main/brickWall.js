function brickWall(x,y,width,height) {
    var options = {
        restitution : 0.04,
        friction : 1,
        inertia : Infinity
        //density : 1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("brick.jpg");
    this.visy = 255

    this.show = function() {
        if (this.body.speed < 5) {
            if (this.body) {
                var angle = this.body.angle;
                console.log(this.body.speed);
                push();
                translate(this.body.position.x, this.body.position.y);
                rotate(angle);
                imageMode(CENTER);
                image(this.image,0,0,this.width, this.height);
                pop();
            }
        }

        if (this.body.speed > 5) {
            World.remove(world, this.body);
            push();
            this.visy = this.visy - 5;
            tint(255, this.visy);
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }

        if (this.visy === 0) {
            score += 10000;
        }
    }
}
