//Listas cars
let yCarros = [37,93,147,207,267,315]
let xCarros = [600,600,600,600,600,600]
let velocidadeCarros = [7,5,12,6,9,10]
let comprimentoCarro = 60;
let alturaCarro = 45;



function mostraCarro(){
  for (let i = 0;i< imagemCarros.length;i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 60, 45);
  }
}

function movimentaCarro(){
  for (let i = 0;i <imagemCarros.length;i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicao(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 650;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}