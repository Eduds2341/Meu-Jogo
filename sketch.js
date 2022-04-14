
var PLAY = 1;
var END = 3;
var WIN = 2;
var START = 0;
var gameState = START;
var Personagem
var form
var game,player

var bg1

function preload(){
  bg1 = loadImage("./assets/bg1.jpg")
}

function setup() {
  createCanvas(1000, 600);
  game = new Game()
  game.start()
  Personagem = createSprite(70,448,40,30)

}

function draw() {

   background(bg1);
   if (gameState == PLAY) {
     drawSprites()
   }
}