var canvas, backgroundImage;

var database;
var question, quiz, player, answer, start;
var player1, player2, players = [];
var title;
var gameState = 0, playerCount = 0, allPlayer, answerCount = 0;

function setup(){
  canvas = createCanvas(1200,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.form();
}

function draw(){
  background("#008080");
  title = createElement('h1');
  title.html("John Voss' quiz!");
  title.position(450, 50);
  if(playerCount === 2) {
    gameState+=1;
    quiz.update(1);
  }
  if(gameState === 1) {
    quiz.play();
  }
  if(answerCount === 2) {
    gameState+=1;
    quiz.update(2);
  }
  if(gameState === 2) {
    quiz.answer();
  }
}
