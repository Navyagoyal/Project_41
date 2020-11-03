class umbrella{
    constructor(x,y){
        this.circle = circle();
        this.image = loadImage("images/Walking Frame/walking_1.png");
    }
    display(){
        image(this.image,200,200,50,100);
    }
}