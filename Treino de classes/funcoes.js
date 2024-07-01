//Instanciar os objetos de controle
const box = document.getElementById("box");
const qtdeBolinhas = document.getElementById("numQTDE");
const txtNumBolinhas = document.getElementById("numBolinhas");
const btnAdd = document.getElementById("btnAdd");
const btnRemove = document.getElementById("btnRemove");

//Definindo a lagura da caixa das bolinhas

let larguraBox = box.offsetWidth; //offsetWidth = pega o valor da largura atual da caixa
let alturaBox = box.offsetHeight; // offsetHeight = pega o valor da altura atual da caixa
let bolas = [];
let numBolas = 0;

//Criar a classe Bola

class Bola{
    constructor(arrBolas,box){
        this.tam = Math.floor((Math.random() * 10) + 10);//Tamanho aleatorio
        //Cores aleatorias com RGB
        this.R = Math.floor((Math.random() * 255));
        this.G = Math.floor((Math.random() * 255));
        this.B = Math.floor((Math.random() * 255));
        //Definindo a posição de surgimento
        this.X = Math.floor((Math.random() * (larguraBox - this.tam)));
        this.Y = Math.floor((Math.random() * (alturaBox - this.tam)));
        //Definindo a velocidade X e Y
        this.velX =Math.floor((Math.random()*2) + 0.5);
        this.velY =Math.floor((Math.random()*2) + 0.5);
        //Definindo a direção da bolinha
        this.dirX = ((Math.random*100) > 5 ? 1 : -1);
        this.dirY =((Math.random*10) > 5 ? 1 : -1);
        //Criando um ID para cada bolinha
        this.box = box;
        this.arrBolas = arrBolas;
        this.id = Date.now() + "_" + Math.floor((Math.random()*10000));//Gera um numero aleatorio pegando a data atual em segundos mais um numero bem aleatorio;
        //relacionar o controle e a bolinha do DOM com o HTML
        this.desehnar();
        this.me = document.getElementById(`${this.id}`);
        this.controle = setInterval(this.controle,10);//Chama a função para controlar a bolinha a cada 10 milisegundos
        //Atualizar a quantidade de bolinhas que existem
        numBolas++;
        txtNumBolinhas.innerHTML = numBolas;
    }
    
    //Função para desenhar a bolinha no HTML
    desehnar = () =>{
        const div = document.createElement("div");
        div.setAttribute("id",this.id);
        div.setAttribute("class","bola");
        div.setAttribute("style",
        `top:${this.Y}px;
        left:${this.X}px;
        width:${this.tam}px;
        height:${this.tam}px;
        background:rgb(${this.R},${this.G},${this.B})`);
        this.box.appendChild(div);
    }
    //Retorna a posição dela no array quanto precisar remover
    bolaPos = () =>{
        return this.arrBolas.indexOf(this);

    }
    //Metodo para remover
    remover = () =>{
        clearInterval(this.controle);
        //Verifica se a bolinha tem um ID diferrente da que eu quero remover
        bolas = bolas.filter((b)=>{
            if(b.id != this.id){
                return b;
            }
        });
        this.me.remove();
        numBolas--;
        txtNumBolinhas.innerHTML = numBolas;
    }

    //Função de colisão
    colisaoBorda = ()=>{
        //Verifica se a bolinha esta batendo no palco
        if(this.X + this.tam >= larguraBox){
            this.dirX = -1;//Volta a bolinha se ela estiver na direita
        }else if(this.X <= 0){
            this.dirX = 1;//Volta a bolinha se ela estiver na esquerda
        }
        if(this.Y + this.tam >= alturaBox){
            this.dirY = -1;//Volta a bolinha se ela estiver muito alta
        }else if(this.Y <= 0){
            this.dirY = 1;//Volta a bolinha se ela estiver para baixo
        }
    }
    //Controle da bolinha
    controle = ()=>{
        this.colisaoBorda();
        this.X += this.dirX*this.velX;
        this.Y += this.dirY*this.velY;
        this.me.setAttribute("style",
        `top:${this.Y}px;
        left:${this.X}px;
        width:${this.tam}px;
        height:${this.tam}px;
        background:rgb(${this.R},${this.G},${this.B});
        `);
        //Verifica se ela saiu da tela
        if(this.X > larguraBox || this.Y > alturaBox){
            this.remover();
        }
    }
}

//Caso a caixa seja redimensionada
window.addEventListener("resize", (evt) => {
  larguraBox = box.offsetWidth; //offsetWidth = pega o valor da largura atual da caixa
  alturaBox = box.offsetHeight; // offsetHeight = pega o valor da altura atual da caixa
});

//Evento dos botões de adicionar e remover
btnAdd.addEventListener("click",(evt)=>{
    const qtde = qtdeBolinhas.value;
    for(let i=0;i<qtde;i++){
        //Criar as bolinhas
        bolas.push(new Bola(bolas,box));

    }
});

btnRemove.addEventListener("click",(evt)=>{
    //verificar os elementos do array bolas
    bolas.map((el)=>{
        el.remover();
    });
});
