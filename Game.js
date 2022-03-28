class Game{
    start(){
      background("light blue")
        //bg = createSprite(displayWidth/2-20,displayHeight/2-40,windowWidth,windowHeight) 
//bg.addImage(bgImg)
//bg.scale = 1.0
player.visible = true
}
  
    Play(){  //moving the player up and down and making the game mobile compatible using touches
        if(keyDown("UP_ARROW") ){
          player.y = player.y-50
        }
        if(keyDown("DOWN_ARROW") ){
         player.y = player.y+30
        }
        
        //release bullets and change the image of shooter to shooting position when space is pressed
        if(keyWentDown("space")){
         
          //player.addImage(shooter_shooting)
         
        }
        
        //player goes back to original standing image once we stop pressing the space bar
        else if(keyWentUp("space")){
          //player.addImage(shooterImg)
        }}}

    