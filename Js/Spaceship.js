class Spaceship{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        
        this.image = loadImage("Images/Spaceship.png");

        this.body = createSprite(this.x,this.y,this.width,this.height);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}