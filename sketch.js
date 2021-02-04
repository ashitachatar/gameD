

var homescreenImg , playButtonImg , canvas ;
var selectLevelImg;
var levelOneImg , lockImg;
var levelTwoImg , levelThreeImg;
var gameState=0;
var nextButtonImg ,videoLevel1Img;

function preload(){
    /*homescreenImg = loadImage("images/900982.jpg");
  playButtonImg = loadImage("images/playbutton.png");
  selectLevelImg = loadImage("images/Picture1.png");
  levelOneImg = loadImage("levels/level1.png");
  lockImg = loadImage ("levels/lock.png");
  levelTwoImg=loadImage("levels/level2.png");
  levelThreeImg=loadImage("levels/level3.png");
  videoLevel1Img =loadImage("images/download.jpg")*/
  img = loadImage("m.png")
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    /*homescreen = createSprite(displayWidth, displayHeight);
    playButton= createSprite(displayWidth-750,displayHeight-200);
    playButton.addImage("play",playButtonImg);
    homescreen.addImage("home",homescreenImg);
    homescreen.scale = 2;
    selectLevel=createSprite(displayWidth-750, displayHeight-475);
    selectLevel.addImage("level",selectLevelImg);
    selectLevel.visible= false;
    selectLevel.scale=1;
    levelOne=createSprite(displayWidth-650,displayHeight-230);
    levelTwo=createSprite(displayWidth-740,displayHeight-600);
    levelThree=createSprite(displayWidth-740,displayHeight-650);
    //nextButton=createSprite(displayWidth-650,displayHeight-230);
    levelOne.addImage("one",levelOneImg);
    levelTwo.addImage("two",lockImg);
   levelThree.addImage("three",lockImg);
  
    levelOne.visible=false;
   levelTwo.visible=false;
    levelThree.visible=false;
  
   videoLevel1=createSprite(200,200);
   videoLevel1.addImage("vidione",videoLevel1Img);
   videoLevel1.visible=false;
*/
one = new Form()
}
function draw(){
    background("white");
    drawSprites()
  
  /*  if(mousePressedOver(playButton) && gameState===0){
        gameState=1
        console.log(gameState);
        hide();
        selectLevel.visible= true;
        one.hide();
    }
    if (gameState===1){
        
        selectLevel.visible= true;
        levelOne.visible=true;
       
        levelOne.scale=0.2;
        levelTwo.visible=true;
       levelThree.visible=true;
       levelTwo.scale=0.2;
       levelThree.scale=0.2;
       
       
        if(mousePressedOver(levelOne)){
            gameState=2;
            selectLevel.visible=false;
            levelOne.visible=false;
            levelTwo.visible=false;
            levelThree.visible=false;
            console.log(gameState);
            videoLevel1.visible=true;
            if(mousePressedOver(videoLevel1)){
              //  one.display();
            }
           
        }
    }*/
        one.my();
         one.display();
          //showMyImage() 
        
    //myFunction();
    image(img, 100,100,50,50)
    img.addEventListener("mousedown", myScript);
}
function hide(){
    playButton.visible = false;
    playButton.x=200;
    playButton.y=200
    homescreen.visible = false;
}


function showMyImage() {
    var img = document.getElementById('image-holder');
    img.src = "m.png";
    img.style.display = 'block';
  }

  function myScript() {
    var a=document.createElement('a');
    a.href='http://www.google.com';
    }