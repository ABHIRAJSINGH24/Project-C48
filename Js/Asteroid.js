class Asteroid{
    constructor(){
        this.x = random(50,350);
        this.y = camera.position.y - 400;
        this.width = 100;
        this.height = 100;

        this.body = createSprite(this.x,this.y,this.width,this.height);

        this.image = loadImage("Images/stone.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height)
    }
}