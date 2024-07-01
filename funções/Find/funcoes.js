const pArray = document.getElementById('array');
const btnPesquisar = document.getElementById('btnPesquisar');
const txtPesquisar = document.getElementById('txtText');
const resultado = document.getElementById('resultado');

const elementosArray = [10,5,8,9,20,30,40,641];

pArray.innerHTML = "["+elementosArray+"]";

btnPesquisar.addEventListener('click',(evt)=>{
    const retorno = elementosArray.find((el,index)=>{
        resultado.innerHTML = 'Valor não encontrado!!';
        if(txtPesquisar.value == el){
            resultado.innerHTML = 'Valor encontrado: ' + el + ' Na posição: ' + index;
            return el;
        }
    });
    console.log(retorno)
});