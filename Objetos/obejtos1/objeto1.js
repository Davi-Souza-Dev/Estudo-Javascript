class Pessoa{
    constructor(pnome,pidade){
        this.nome=pnome;
        this.idade = pidade;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    setNome(setNome){
        this.nome = setNome;
    }
    setIade(setIdade){
        this.idade = setIdade;
    }
    
    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}  


const btnAdd = document.getElementById('btnAdd');
const nome = document.getElementById('txtNome');
const idade = document.getElementById('txtIdade');
const result = document.querySelector(".res");
let pessoas = [];

const addPessoa=()=>{
    pessoas.map((p)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "pessoas");
        div.innerHTML = `Nome: ${p.getNome()} Idade: ${p.getIdade()}`; 
        result.appendChild(div);

        result.appendChild(div)
    });
}

btnAdd.addEventListener('click',(evt)=>{
    const p = new Pessoa(nome.value,idade.value);
    pessoas.push(p);
    nome.value = "";    
    idade.value = "";
    nome.focus();
    addPessoa();

}); 