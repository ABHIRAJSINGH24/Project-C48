class Rocket{
    constructor(){
        this.x = spaceship.body.x;
        this.y = spaceship.body.y;
        this.width = 50;
        this.height = 75;
        
        this.image = loadImage("Images/Rocket.png");

        this.body = createSprite(this.x,this.y,this.width,this.height);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}