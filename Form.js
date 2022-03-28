class Form {
    constructor() {
      this.playButton = createButton("Play now");
      this.title = createElement("h1");
      this.greeting = createElement("h2");
      
    }
  
    setElementsPosition() {
      this.title.position(800, 50);
      this.playButton.position(width / 2 - 90, height-100);
      this.greeting.position(width / 2 - 250, height / 2 - 100);
    }
  
    setElementsStyle() {
      this.playButton.class("customButton");
      this.greeting.class("greeting");
      this.title.class("title")
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      
    }
  handleIntro(){
    var message = `
    Welcome to Navy of 7 game 
`
    this.greeting.html(message);
    var title='Navy of 7';
    this.title.html(title);
  }
    handleMousePressed() {
      this.playButton.mousePressed(() => {
      
        this.playButton.hide();
       this.greeting.hide();
       this.title.hide();
        gameState=1;
      
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleIntro();
      this.handleMousePressed();
    }
  }
  