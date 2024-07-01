const rdMilitar = document.getElementById('rdMilitar');
const rdNormal = document.getElementById('rdNormal');
const numBlindagem = document.getElementById('numBlindagem');
const numMunicao = document.getElementById('numMunicao');
const carros = document.querySelector('.carros');
let arrayCarros = [];
const btnAdd = document.querySelector('button');
const txtNome = document.getElementById('txtNome');
const numPortas = document.getElementById('numPortas');


rdMilitar.addEventListener("click", (evt) => {
    numBlindagem.removeAttribute('disabled');
    numMunicao.removeAttribute('disabled');
    txtNome.value = "";
    numPortas.value = 0;
});

rdNormal.addEventListener("click", (evt) => {
    numBlindagem.setAttribute('disabled', 'disabled');
    numMunicao.setAttribute('disabled', 'disabled');
    numMunicao.value = 0;
    numBlindagem.value = 0;
    txtNome.value = "";
    numPortas.value = 0;
});

//Funão para remove os elementos ao clicar
const removeCarro = (quem) =>{
    arrayCarros = arrayCarros.filter((el)=>{
        return el.nome != quem;
    });
};

btnAdd.addEventListener('click', (evt) => {
    if (rdNormal.cheked) {
        const carro = new Carro(txtNome.value, numPortas.value);
        arrayCarros.push(carro);
    } else {
        const militar = new Militar(txtNome.value, numPortas.value, numBlindagem.value, numMunicao.value);

        arrayCarros.push(militar);
    }
    gerenciarExibir();
    numMunicao.value = 0;
    numBlindagem.value = 0;
    txtNome.value = "";
    numPortas.value = 0;
});

//Função feita para receber, criar e selecionar elementos para remover, além de exibir
const gerenciarExibir = () => {
    carros.innerHTML = '';
    arrayCarros.map((el, index) => {
        const btn = document.createElement('button');
        btn.addEventListener("click",(evt)=>{
            const elementRemove=evt.target.parentNode.dataset.nome;
            removeCarro(elementRemove);
            gerenciarExibir();
        });
        const div = document.createElement('div');
        div.setAttribute('class', "carro");
        div.setAttribute('data-nome',el.nome);
        div.innerHTML = `Nome: ${el.nome} <br/> Portas: ${el.portas} <br/> Blindagem: ${el.blindagem} <br/> Munição: ${el.municao}`;
        btn.innerHTML = "Remover";
        div.appendChild(btn);
        carros.appendChild(div);
    });
}

class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
    }
    setNome = function (nome) {
        this.nome = nome;
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
    }
    atirar = function () {
        if (this.municao > 0) {
            this.municao--;
        } else {
            console.log(`${this.nome} está sem munição`)
        }
    }
    dano = function () {
        if (this.blindagem > 0) {
            this.blindagem--;
        } else {
            console.log(`${this.nome} Foi destruido`)
        }
    }
}

// const c1 = new Militar('Armando', 4, 100, 20);
// const c2 = new Militar('Inimigo', 4, 10, 0);
// console.log(`Nome: ${c1.nome}`)
// console.log(`Portas: ${c1.portas}`)
// console.log(`Blindagem: ${c1.blindagem}`)
// console.log(`Munição: ${c1.municao}`)
// console.log("----------------------")
// console.log(`Nome: ${c2.nome}`)
// console.log(`Portas: ${c2.portas}`)
// console.log(`Blindagem: ${c2.blindagem}`)
// console.log(`Munição: ${c2.municao}`)
// console.log("----------------------")

// btnTiro.addEventListener('click', (evt) => {
//     c1.atirar();
//     c2.dano();
// });