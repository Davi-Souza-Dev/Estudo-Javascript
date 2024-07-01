const pArray = document.getElementById('array');
const btnReduzir = document.getElementById('btnReduzir');
const txtPesquisar = document.getElementById('txtText');
const resultado = document.getElementById('resultado');

const elementosArray = [1,2,3,4,5];
let ant = [];
let att = [];

pArray.innerHTML = "["+elementosArray+"]";

btnReduzir.addEventListener('click',(evt)=>{
    resultado.innerHTML =  elementosArray.reduce((anterior,atual,index)=>{
        ant.push(anterior);
        att.push(atual);
        return anterior+atual;
   });
   resultado.innerHTML += "<br/> Atual: " + att + "<br/> Anterior: " + ant;
});