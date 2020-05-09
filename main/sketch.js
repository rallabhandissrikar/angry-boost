const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let gameState = "onGo";

var engine, world;
var ground, ground2;
var best1;
var best2;
var best3;
var wall;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var logm;
var snd;
var sling;
var im;
var friend; 
var friend2;
let score = 0;

function preload() {
    snd = loadSound("AngrySound.mp3");
    im = loadImage("3.jpg")
}

function setup() {
    createCanvas(1500, 400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width / 2, height, 1500, 40);
    ground2 = new Ground(200, 330, 400, 100);
    best1 = new bestFriend(300,150,40);
    best2 = new bestFriend(150,200,40);
    best3 = new bestFriend(50,200,40);
    sling = new slingShot(best1.body, 300,150);
    wall = new brickWall(790, 314, 80, 80);
    wall2 = new brickWall(790, 247, 80, 80);
    wall3 = new brickWall(790, 207, 80, 80);
    wall4 = new brickWall(1000, 314, 80, 80);
    wall5 = new brickWall(1000, 247, 80, 80);
    wall6 = new brickWall(1000, 207, 80, 80);
    friend = new Bestee(900, 200, 80, 80);
    friend2 = new Bestee(900, 260, 80,80)
    wall7 = new brickWall(900, 100, 400, 40);

    if (gameState === "onGo") {
        snd.play();
    }
}
function draw() {
    background(im);
    Engine.update(engine);
    if (gameState === "onGo"){
        textSize(20)
        text("Help your friends to come out of the brick wall",  295, 249)
        text("score : " + score, 68,117);
        text("press Space to attach new bird", 0, 100)
        //console.log(mouseX + ":" + mouseY);
        ground.show();
        ground2.show();
        sling.show();
        best1.show();
        best2.show(); 
        best3.show(); 
        wall.show();
        wall2.show();
        wall3.show();
        wall4.show();
        wall5.show();
        wall6.show();
        wall7.show();
        friend.show();
        friend2.show();

        if (best1.body.position.x < 330) {
            Matter.Body.setAngle(best1.body, 0);
        }
    }

    if (best3.body.position.x > 330) {
        setTimeout(() => { 
    if (score === 70000) {
        gameState = "won"
    }
    if (score < 70000) {
        gameState = "lose"
    }
}, 5000);
    
}

if (gameState === "lose") {
    textSize(40);
    text("you fail to save your friend, Score : " + score, 200,200);
    snd.stop();
}

if (gameState === "won") {
    textSize(40);
    text("your friend is Happy :), Score : " + score, 200,200);
    snd.stop();
}

}


function mouseDragged() {
    if (best1.body.position.x < 330) {
        Matter.Body.setPosition(best1.body, {x : mouseX, y : mouseY});
    }

    if (sling.sling.bodyA === best2.body) {
        Matter.Body.setPosition(best2.body, {x : mouseX, y : mouseY})
    }

    if (sling.sling.bodyA === best3.body) {
        Matter.Body.setPosition(best3.body, {x : mouseX, y : mouseY})
    }
}

function mouseReleased() {
    sling.dit();
}

function keyPressed() {
    if (keyCode === 32) {
        if (sling.sling.bodyA === null && best2.body.position.x < 330) {
            sling.att(best2.body)
        }

        if (sling.sling.bodyA === null && best3.body.position.x < 330 && best2.body.position.x > 330) {
            sling.att(best3.body);
        }
    }

    if (keyCode === UP_ARROW) {
        gameState = "onGo";
    }

}