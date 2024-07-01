const btnEsquerda = document.getElementById("btnEsquerda");
const btnDireita = document.getElementById("btnDireita");
const btnCima = document.getElementById("btnCima");
const btnBaixo = document.getElementById("btnBaixo");
const carro = document.getElementById("carro");
let velo = 10;
let anima = null;
let larguraTela = document.body.offsetWidth;
let alturaTela = document.body.offsetHeight;


//Aumenta  velocidade a cada 1 segundos
let up = setInterval(()=>{
    velo+=1;
    console.log("UP")
},500);
//Tamanho da janela
let tam = null;
const iniciar = () => {
  carro.style.left = "0px";
  carro.style.top = "0px";
}

  //Verificar o tamanho da janela
  tam = window.innerWidth - 200;
  console.log(tam);

window.addEventListener("resize", () => {
  tam = window.innerWidth - parseInt(carro.style.width);
  larguraTela = document.body.offsetWidth;
  alturaTela = document.body.offsetHeight;
});

const moverX = (dir) => {
  if (dir > 0) {
    //Indo para a direita
    if (parseInt(carro.style.left) <= tam) {
      carro.style.left = parseInt(carro.style.left) + dir * velo + "px";
    } else {
      clearTimeout(anima);
    }
  } else {
    //Indo para a esquerda
    if (parseInt(carro.style.left) >= 0) {
      carro.style.left = parseInt(carro.style.left) + dir * velo + "px";
    } else {
      clearTimeout(anima);
    }
  }
  anima = setTimeout(moverX, 20, dir);
};

const moverY = (dir) => {
  if (dir > 0) {
    //Indo para cima
    if (parseInt(carro.style.top) <= tam) {
      carro.style.top = parseInt(carro.style.top) + dir * velo + "px";
    } else {
      clearTimeout(anima);
    }
  } else {
    //Indo para a esquerda
    if (parseInt(carro.style.top) >= 0) {
      carro.style.top = parseInt(carro.style.top) + dir * velo + "px";
    } else {
      clearTimeout(anima);
    }
  }
  anima = setTimeout(moverY, 20, dir);
};

btnDireita.addEventListener("click", () => {
  clearTimeout(anima);
  moverX(1);

  // let posX = parseInt(carro.style.left);
  // AntposX = parseInt(carro.style.left);
  // posX = posX + velo;
  carro.style.transform = `rotate(-90deg)`;
  // carro.style.left=`${posX}px`;
});

btnEsquerda.addEventListener("click", () => {
  clearTimeout(anima);
  moverX(-1);
  // let posX = parseInt(carro.style.left);
  // posX= posX - velo;
  carro.style.transform = `rotate(90deg)`;
  // carro.style.left=`${posX}px`;
});

btnCima.addEventListener("click", () => {
  clearTimeout(anima);
  moverY(-1);
  // let posY = parseInt(carro.style.top);
  // posY = posY - velo;
  carro.style.transform = `rotate(180deg)`;
  // carro.style.top=`${posY}px`;
});

btnBaixo.addEventListener("click", () => {
  clearTimeout(anima);
  moverY(1);
  // let posY = parseInt(carro.style.top);
  // posY = posY + velo;
  carro.style.transform = `rotate(360deg)`;
  // carro.style.top=`${posY}px`;
  // console.log("clique")
});

document.addEventListener("keydown", (evt) => {
  let key = evt.key;
  let posY = parseInt(carro.style.top);
  let posX = parseInt(carro.style.left);
  switch (key) {
    case "ArrowLeft":
      clearTimeout(anima);
      moverX(-1);
      // posX= posX - velo;
      carro.style.transform = `rotate(90deg)`;
      // carro.style.left=`${posX}px`;
      break;

    case "ArrowRight":
      clearTimeout(anima);
      moverX(1);
      // posX= posX + velo;
      carro.style.transform = `rotate(-90deg)`;
      // // carro.style.left=`${posX}px`;
      break;
    case "ArrowUp":
      clearTimeout(anima);
      moverY(-1);
      // posY = posY - velo;
      carro.style.transform = `rotate(180deg)`;
      // carro.style.top=`${posY}px`;
      break;
    case "ArrowDown":
      clearTimeout(anima);
      moverY(1);
      // posY = posY + velo;
      carro.style.transform = `rotate(360deg)`;
      // carro.style.top=`${posY}px`;
      break;
  }
});

window.onload = iniciar();

