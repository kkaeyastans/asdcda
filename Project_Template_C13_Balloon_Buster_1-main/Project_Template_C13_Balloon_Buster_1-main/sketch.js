var edges;

var bg;

var bgImage;

var plat1, plat1Image;


var plat2, plat2Image, plat3; 

var pc, pcImage;

function preload(){
bgImage = loadImage("background.png")
plat1Image = loadImage("plat1.png")
plat2Image = loadImage("plat2.png")
pcImage = loadImage("bear.png")
}


function setup(){
createCanvas(1500,1500)
bg = createSprite(0,0,1500,1500)
bg.addImage(bgImage)
bg.scale = 2.7

plat1 = createSprite(300,600)
plat1.addImage(plat1Image)
plat1.scale = 0.4

plat2 = createSprite(1100,400)
plat2.addImage(plat1Image)
plat2.scale = 0.4

plat3 = createSprite(700,500)
plat3.addImage(plat2Image)
plat3.scale = 0.2

pc = createSprite(100,800)
pc.addImage(pcImage)
pc.scale = 0.2

edges = createEdgeSprites()
}



function draw(){
background("gray")

 drawSprites()
 if(plat3.y<10){
    plat3.y += 10;

 }


 


 if(plat3.y>1500){
plat3.y -=10

}

 
}