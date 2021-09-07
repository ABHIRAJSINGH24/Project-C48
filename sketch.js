var background1_img, background2_img;

var spacehip, spaceship_img;

var gameState;

var play;

var enemy;
var enemySpaceships;

var rocket;
var allRockets;

var asteroid;
var allAsteroids;

function preload(){  
    background1_img = loadImage("Images/Space1.jpg");
    background2_img = loadImage("Images/Space2.png"); 
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    gameState = 1;

    spaceship = new Spaceship(displayWidth/2,displayHeight-200);

    play = createButton("Play");
    play.position(displayWidth/2,displayHeight-200);
    //play.mousePressed(updateState(1))

    enemySpaceships = [];

    allRockets = [];

    allAsteroids = [];
}

function draw(){

    spaceship.y -= 5;
    camera.position.y = spaceship.y - 250;

    if(gameState === 0){
        background(background1_img);
    }

    if(gameState !== 0){
        background(background2_img);
        
        play.hide();
    }

    if(gameState === 1){
        spaceship.display();
        moveLeft(spaceship);
        moveRight(spaceship);

        if(keyCode === 13){
            rocket = new Rocket();
            rocket.y -= 16;
            allRockets.push(rocket);
        }
        for(var i=0;i<allRockets.length;i++){
            allRockets[i].display();
        }

        createEnemy();
        for(var i=0;i<enemySpaceships.length;i++){
            enemySpaceships[i].display();
        }

        createStone();
        for(var j=0;j<allAsteroids.length;j++){
            allAsteroids[j].display();
        }
    }

    console.log(displayWidth=1440,displayHeight=900);
}

function moveLeft(body){
    if(keyDown(LEFT_ARROW) && body.x>50){
        body.x = body.x - 7
    }
}

function moveRight(body){
    if(keyDown(RIGHT_ARROW) && body.x<displayWidth-50){
        body.x = body.x + 7
    }
}

function updateState(state){
    gameState = state
}

function createEnemy(){
    if(frameCount%150 === 0){
        enemy = new EnemySpaceship();
        enemySpaceships.push(enemy);
    }
}

function createStone(){
    if(frameCount%100 === 0){
        asteroid = new Asteroid();
        allAsteroids.push(asteroid);
    }
}