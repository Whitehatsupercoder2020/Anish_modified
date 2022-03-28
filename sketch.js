var bg,bgImg;
var player, Graphite2020Img;
var Bullet;
var Villain;
var explosionSound, lose, win;
var gameState = 0
var score = 0
 
 
function preload(){
 
  Graphite2020Img = loadImage("assets/My project.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")
 
  //bgImg = loadImage("assets/AncientWar.jpg")
  BigBrownRunner = loadAnimation("assets/Run 1.jpg", "assets/Run 2.jpg", "assets/Run 3.jpg")
  Bullet = loadImage("assets/Bullet.png")
  lose = loadSound("assets/lose.mp3")
  win = loadSound("assets/win.mp3")
  explosionSound = loadSound("assets/explosion.mp3")
}
 
function setup() {
 
 
  createCanvas(windowWidth,windowHeight);
  game=new Game();
  form=new Form();
  form.display();
 
  player = createSprite(100, 500, 50, 50);
  player.addImage(Graphite2020Img)
    player.scale = 2.0
    player.visible = false
 
  BulletGroup = new Group()
  EnemyGroup = new Group()




}

function draw() {
  background(255); 


if(gameState ==1){
game.start();
game.Play();
}

  //go to gameState "won" if score is 100
  if(score==100){
    gameState = "won"
    winning.play();
  }




//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10)
  bullet.velocityX = 20
  
  BulletGroup.add(bullet)
  //player.depth = bullet.depth
  //player.depth = player.depth+2
  //player.addImage(shooter_shooting)
 // bullets = bullets-1
  explosionSound.play();
}

 

//destroy the zombie when bullet touches it and increase score
if(EnemyGroup.isTouching(BulletGroup)){
  for(var i=0;i<EnemyGroup.length;i++){     
      
   if(EnemyGroup[i].isTouching(BulletGroup)){
        EnemyGroup[i].destroy()
        BulletGroup.destroyEach()
        explosionSound.play();
 
        score = score+2
        } 
  
  }
}

//reduce life and destroy zombie when player touches it
if(EnemyGroup.isTouching(player)){
 
   lose.play();
 

 for(var i=0;i<EnemyGroup.length;i++){     
      
  if(EnemyGroup[i].isTouching(player)){
    EnemyGroup[i].destroy()
      
      //life=life-1
       } 
 
 }
}
drawSprites();

//displaying the score and remaining lives and bullets
textSize(20)
  fill("white")
//text("Bullets = " + bullets,displayWidth-210,displayHeight/2-250)
text("Score = " + score,displayWidth-200,displayHeight/2-220)
//text("Lives = " + life,displayWidth-200,displayHeight/2-280)

//destroy zombie and player and display a message in gameState "lost"
if(gameState == "lost"){
  
  textSize(100)
  fill("red")
  text("You Lost ",400,400)
  EnemyGroup.destroyEach();
  player.destroy();

}

//destroy zombie and player and display a message in gameState "won"
else if(gameState == "won"){
 
  textSize(100)
  fill("yellow")
  text("You Won ",400,400)
  EnemyGroup.destroyEach();
  player.destroy();

}

//calling the function to spawn zombies
enemy();
}






//destroy zombie, player and bullets and display a message in gameState "bullet"


//}


//creating function to spawn zombies
function enemy(){
  if(gameState == 1) {
 
 
    if(frameCount%100===0){
      Combatman = createSprite(random(500,1100),random(200,1000),40,40)
   
      Combatman.addAnimation("Enemy", BigBrownRunner)
      Combatman.scale = 0.50
      Combatman.velocityX = -3
      //Combatman.debug= true
      //Combatman.setCollider("rectangle",0,0,400,400)
     
      Combatman.lifetime = 200
     EnemyGroup.add(Combatman)
    }
  }
  }
   
  