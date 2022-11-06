var PLAY = 1;
var END = 0;
var gameState = PLAY;
var pontuacao;
var passarinho;
var obstaculo = [];

function setup() {
  createCanvas(640, 480);
  passarinho = new passarinho();
  obstaculo.push(new Obstaculo());
  pontuacao = 0
}

function draw() {
  background(0);
  text("pontuacao: "+ pontuacao, 20,50);
  
  for (var i = obstaculo.length-1; i >= 0; i--) {
    obstaculo[i].show();
    obstaculo[i].update();

    if (obstaculo[i].hits(passarinho)) {
      pontuacao = 0
    }

    if (obstaculo[i].offscreen()) {
      obstaculo.splice(i, 1);
    }
  }

  passarinho.update();
  passarinho.show();

  if (frameCount % 70 == 0) {
    obstaculo.push(new Obstaculo());
    pontuacao = pontuacao + Math.round(frameCount/100);
  }
}

function keyPressed() {
  if (key == ' ') {
    passarinho.up();
  }
}
