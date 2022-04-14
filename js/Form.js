class Form {
  constructor() {
    this.title = createElement("h1")
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.title.html("Lost And Forgotten...")

  }

  hide() {

    this.playButton.hide();

  }

  setElementsPosition() {
    this.title.position(120, 0)
    this.playButton.position(width / 2 - 90, height / 2 - 20)

  }

  setElementsStyle() {
    this.title.class("gameTitle")

    this.playButton.class("customButton")
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide()
      gameState = PLAY;
      game.play()
    })
  }

  display() {
    this.setElementsPosition()
    this.setElementsStyle()
    this.handleMousePressed()

  }

}
