var pac;
function preload() {
    pc = loadAnimation("pc1.png", "pc2.png");
    rg = loadAnimation("g1.png", "g2.png", "g3.png", "g4.png", "g5.png", "g6.png")
    pg = loadAnimation("r1.png", "r2.png", "r3.png", "r4.png", "r5.png","r6.png")
}

function setup() {
    createCanvas(800, 400);
    pac = createSprite(200, 200);
    pac.addAnimation("pc", pc);
    pac.scale = 0.7;
    redghost = createSprite(400, 200)
    redghost.addAnimation("rg", rg)
    redghost.scale = 1.2
    pinkghost = createSprite(400, 170)
    pinkghost.addAnimation("pg", pg)
    pinkghost.scale = 1.2
    pacball = createSprite(300,200)
    pacball.scale = 0.05
    pacball.shapeColor = "yellow"
    parede1 = createSprite(400, 50, 700, 3);
    parede1.shapeColor = "blue";
    parede2 = createSprite(400, 350, 700, 3);
    parede2.shapeColor = "blue";
    parede3 = createSprite(50, 300, 3, 100)
    parede3.shapeColor = "blue"
    parede4 = createSprite(50, 100, 3, 100)
    parede4.shapeColor = "blue"
    parede5 = createSprite(750, 100, 3, 100)
    parede5.shapeColor = "blue"
    parede6 = createSprite(750, 300, 3, 100)
    parede6.shapeColor = "blue"
    parede7 = createSprite(400, 150, 100, 3)
    parede7.shapeColor = "blue"
    parede8 = createSprite(400, 230, 100, 3)
    parede8.shapeColor = "blue"
    parede9 = createSprite(450, 190, 3, 80)
    parede9.shapeColor = "blue"
    parede10 = createSprite(350, 190, 3, 80)
    parede10.shapeColor = "blue"
    
    
}

function draw() {
    background("black");
    drawSprites();

    if(keyDown(RIGHT_ARROW)){
        pac.x = pac.x + 3
        pac.mirrorX(+1)
    }

    if(keyDown(LEFT_ARROW)){
        pac.x = pac.x - 3
        pac.mirrorX(-1)
    }

    if(keyDown(UP_ARROW)){
        pac.y = pac.y - 3
    }

    if(keyDown(DOWN_ARROW)){
        pac.y = pac.y + 3
    }
}
