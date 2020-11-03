class Drop{
    constructor(x,y){
        this.drop = circle();
        friction:0.1
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    ellipse(){

    }
}