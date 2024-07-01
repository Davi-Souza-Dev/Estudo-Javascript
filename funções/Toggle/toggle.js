const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemove = document.getElementById('btnRemoverCurso');
const btnAdicionarAntes = document.getElementById('btnAdicionarNovoCursoAntes');
const btnAdicionarDepois= document.getElementById('btnAdicionarNovoCursoDepois');
const nomeCurso = document.getElementById('nomeCurso');

let indice = 0;

const  removerSelecionados = () =>{
    const cursos =[...document.querySelectorAll(".selecionado")];
    cursos.map((el,index) =>{
        el.classList.remove('selecionado') 
    })
}
const criarCurso = (curso)=>{
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;
    novoElemento.addEventListener('click', (el)=>{
        removerSelecionados();
        el.target.classList.toggle('selecionado');
    });
    return novoElemento;
}

//Cria elementos diretamente com o JAVASCRIPT
cursos.map((el, chave) => {
    const novoElemento = criarCurso(el)
    caixaCursos.appendChild(novoElemento);
    indice++;
});

//Faz a verificação de qual input esta selecionado
const verificarSelecionado = () => {

    const cursos =[...document.querySelectorAll(".selecionado")];
    return cursos[0];//Retorna o primeiro input selecionado
}

//Mostra uma menssagemde qual foi o curso selecionado
btnCursoSelecionado.addEventListener('click', (evt) => {
    const curso = verificarSelecionado();
    if (curso == null) {
        alert('Selecione um curso!!!!')
    } else {
        alert("Curso selecionado: " + curso.innerHTML);
        // console.log(radioSelecionado);
    }
});

//Botão para remover o curso
btnRemove.addEventListener('click', (evt) => {
    const curso = verificarSelecionado();
    if (curso == null) {
        alert('Selecione um curso!!!!')
    } else {
        curso.remove();
        // console.log(radioSelecionado);
    }
});

btnAdicionarAntes.addEventListener('click',(evt)=>{
    const selecionado = verificarSelecionado();//Verifica qual esta selecionado
    if (selecionado == null) {
        alert('Selecione um curso');
    } else {
        if(nomeCurso.value != ""){
            const novoCurso = criarCurso(nomeCurso.value);//Cria um novo curso
            caixaCursos.insertBefore(novoCurso, selecionado);//Pega a caixa de curso, e adiciona um novo curso antes do curso selecionado
        }else{
            alert('Digite um nome de curso!!!!')
        }

    }
});

btnAdicionarDepois.addEventListener('click',(evt)=>{
    const selecionado = verificarSelecionado();//Verifica qual esta selecionado
    if (selecionado == null) {
        alert('Selecione um curso');
    } else {
        if(nomeCurso.value != ""){
            const cursoNext = selecionado.nextSibling;//Pega o proimo irmão(curso) do curso selecionado
            const novoCurso = criarCurso(nomeCurso.value);//Criaa um novo curso
            caixaCursos.insertBefore(novoCurso, cursoNext);//Adiciona este novo curso antes do irmão do procimo curso
        }else{
            alert('Digite um nome de curso!!!!')
        }

    }
});

