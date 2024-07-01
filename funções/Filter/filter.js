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

const criarCurso = (curso)=>{
    console.log(curso)
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;

    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);


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

    const todosRadios = [...document.querySelectorAll('input[type=radio]')]//Recolhe todos os inputs um por um
    const radioSelecionado = todosRadios.filter((ele, index, arr) => {
        return ele.checked;// Retorna o input selecionado
    });
    return radioSelecionado[0];//Retorna o primeiro input selecionado
}

//Mostra uma menssagemde qual foi o curso selecionado
btnCursoSelecionado.addEventListener('click', (evt) => {
    const rs = verificarSelecionado();
    if (rs == null) {
        alert('Selecione um curso!!!!')
    } else {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent;
        alert("Curso selecionado: " + cursoSelecionado);
        // console.log(radioSelecionado);
    }
});

//Botão para remover o curso
btnRemove.addEventListener('click', (evt) => {
    const curso = verificarSelecionado();//Verifica qual esta selecionado
    if (curso == null) {
        alert('Selecione um curso')
    } else {
        const cursoSelecionado = curso.parentNode.parentNode;//Pega o parent do parent do input
        cursoSelecionado.remove();//Remove o parent do parent
    }
});

btnAdicionarAntes.addEventListener('click',(evt)=>{
    const selecionado = verificarSelecionado();//Verifica qual esta selecionado
    if (selecionado == null) {
        alert('Selecione um curso');
    } else {
        if(nomeCurso.value != ""){
            const cursoSelecionado = selecionado.parentNode.parentNode;//Pega o parent do parent do input
            const novoCurso = criarCurso(nomeCurso.value);//Cria um novo curso
            caixaCursos.insertBefore(novoCurso, cursoSelecionado);//Pega a caixa de curso, e adiciona um novo curso antes do curso selecionado
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
            const cursoSelecionado = selecionado.parentNode.parentNode;//Pega o parent do parent do input
            const cursoNext = cursoSelecionado.nextSibling;//Pega o proimo irmão(curso) do curso selecionado
            const novoCurso = criarCurso(nomeCurso.value);//Criaa um novo curso
            caixaCursos.insertBefore(novoCurso, cursoNext);//Adiciona este novo curso antes do irmão do procimo curso
        }else{
            alert('Digite um nome de curso!!!!')
        }

    }
});

