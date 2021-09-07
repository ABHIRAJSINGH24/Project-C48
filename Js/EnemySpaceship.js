class EnemySpaceship{
    constructor(){
        this.x = random(50,displayWidth-50);
        this.y = camera.position.y - 400;
        this.width = 100;
        this.height = 100;

        this.body = createSprite(this.x,this.y,this.width,this.height);

        this.image = loadImage("Images/Enemy Spaceship.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}