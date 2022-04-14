class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("")

  }
  getState() {
    var getStateRef = database.ref("gameState")
    getStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }
  updateState(state) {
    database.ref("/").update({
      gameState: state
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();

  }
  handleElements() {
    form.hide()
    form.title.position(40, 50);
    form.title.class("gameTitleAfterEffect");

    this.resetTitle.html("reiniciar jogo")
    this.resetTitle.position(width / 2 + 200, 40)
    this.resetTitle.class("resetText")

    this.resetButton.position(width / 2 + 230, 100)
    this.resetButton.class("resetButton")


  }
  play() {
    this.handleElements()
    this.handleResetButton()
    drawSprites()
    this.handlePlayerControls()

  }
  handlePlayerControls() {



    if (keyIsDown(UP_ARROW)) {
      Personagem.y += 10
    }
    if (keyIsDown(LEFT_ARROW)) {
      Personagem.x -= 5
    }
    if (keyIsDown(RIGHT_ARROW)) {
      Personagem.x += 5
    }
  }

  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        gameState: 0,
        playerCount: 0,
        carsAtEnd: 0,
        players: {}

      })
      window.location.reload()

    })
  }

  handlePowerCoins(index) {
    cars[index - 1].overlap(Coins, function (collector, collected) {
      player.score += 21
      player.update()
      collected.remove()
    })
  }
  showRank() {
    swal({
      title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
      text: "Você alcançou a linha de chegada com sucesso!",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    })
  }
  gameOver() {
    swal({
      title: `Fim de Jogo`,
      text: "Puutz você perdeu a corrida :( ",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Obrigado por jogar"
    });
  }
  showLife() {
    push()
    image(lifeImg, width / 2 - 130, height - player.positionY - 250, 20, 20)
    fill("white")
    rect(width / 2 - 100, height - player.positionY - 250, 185, 20)
    fill("red")
    rect(width / 2 - 100, height - player.positionY - 250, player.life, 20)
    pop()
  }

  handleObstaclesCollision(index) {
    if (cars[index - 1].collide(obstacles)) {
      if (this.leftKeyActive) {
        player.positionX += 100
      }
      else {
        player.positionX -= 100
      }
      if (player.life > 0) {
        player.life -= 185 / 4
      }
      player.update()
    }
  }


}
