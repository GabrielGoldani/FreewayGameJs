//Ator
let yAtor = 370;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if (xAtor > -2){
    xAtor -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (xAtor < 571){
    xAtor += 3;
    }
  }
}

function verificaColisao(){
  
  for (let i = 0; i < imagemCarros.length; i++ ){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor, 15)
    if (colisao){
      somDaColisao.play();
      voltaAtorParaPosicaoInicial();
      if (meusPontos > 0){
        meusPontos -= 1;
        somDoPonto.play();
      }
    }
  }
}
function voltaAtorParaPosicaoInicial(){
  yAtor = 370;
}

function pontos(){
  textAlign(CENTER);
  textSize(27);
  fill(255,255,0)
  text(meusPontos,105,27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    voltaAtorParaPosicaoInicial()
  }
}

function podeSeMover(){
  return yAtor < 366
}
