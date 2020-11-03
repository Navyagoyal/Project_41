var umbrellaobj;
var maxDrops=100;
function preload(){
    
}

function setup(){
   var canvas;
   createCanvas(400,400);
   umbrellaobj = new umbrella();
    
}

function draw(){
    for(var i = 0;i<maxDrops;i++){
       maxDrops.push(new createDrop(random(0,400),random(0,400)));
       umbrellaobj.display();
       maxDrops.update();
    }
}   

