const dgvDados = document.getElementById("dgvDados");
const janelaEdit = document.getElementById("janelaEdit");
const btnSalvar = document.getElementById("btnSalvar");
const btnCancelar = document.getElementById("btnCancelar");

const txtID = document.getElementById("txtID");
const txtNome = document.getElementById("txtNome");
const txtTel = document.getElementById("txtTel");
const txtEmail = document.getElementById("txtEmail");
const txtNasc = document.getElementById("txtNasc");

const carregarContatos= () => {
  let endpoint = `http://127.0.0.1:1880/pesquisarTodos/`;
  fetch(endpoint)
  .then(res => res.json())
  .then(res=>{
    res.forEach(el => {
        const linha = document.createElement("div");
        linha.setAttribute("class","dgvLinha");
        
        const c1 = document.createElement("div");
        c1.setAttribute("class","c1 c");
        c1.innerHTML = el.n_contato_contato;
        linha.appendChild(c1);

        const c2 = document.createElement("div");
        c2.setAttribute("class","c2 c");
        c2.innerHTML = el.s_nome_contato;
        linha.appendChild(c2);

        const c3 = document.createElement("div");
        c3.setAttribute("class","c3 c");
        c3.innerHTML = el.s_celular_contato;
        linha.appendChild(c3);

        const c4 = document.createElement("div");
        c4.setAttribute("class","c4 c");
        c4.innerHTML = el.s_email_contato;
        linha.appendChild(c4);

        const c5 = document.createElement("div");
        c5.setAttribute("class","c5 c");
        c5.innerHTML = el.dt_nasc_contato;
        linha.appendChild(c5);

        const c6 = document.createElement("div");
        c6.setAttribute("class","c6 c");
        

        const imgEdit = document.createElement("img");
        imgEdit.setAttribute("class", "dgvImg");
        imgEdit.setAttribute("src", "./icons/edit.svg");
        imgEdit.addEventListener("click",(evt)=>{
            let campos = evt.target.parentNode.parentNode.childNodes;
            console.log(campos);
            txtID.value = campos[0].innerHTML;
            txtNome.value = campos[1].innerHTML;
            txtTel.value = campos[2].innerHTML;
            txtEmail.value = campos[3].innerHTML;
            txtNasc.value = campos[4].innerHTML;
            janelaEdit.style.display = "flex";
            
        });
        c6.appendChild(imgEdit);

        const imgDel = document.createElement("img");
        imgDel.setAttribute("class", "dgvImg");
        imgDel.setAttribute("src", "./icons/delete.svg");
        imgDel.addEventListener("click",(evt)=>{
            let id = evt.target.parentNode.parentNode.firstChild.innerHTML;
            let linha = evt.target.parentNode.parentNode;
            removerContato(id,linha);
        });
        c6.appendChild(imgDel);

        
        linha.appendChild(c6);
        dgvDados.appendChild(linha);

    });
  })
}

carregarContatos();
const removerContato=(id,linha)=>{
    
    const endpoint = `http://127.0.0.1:1880/delcontato/${id}`;
    fetch(endpoint)
    .then(res =>{
        if(res.status == 200){
            linha.remove();
        }else{
            console.log("DEU MERDA")
        }
    });
}

btnSalvar.addEventListener("click",(evt)=>{
    carregarContatos();
    const endpoint = `http://127.0.0.1:1880/update/${txtID.value}/${txtNome.value}/${txtTel.value}/${txtEmail.value}/${txtNasc.value}/`;
    console.log(endpoint);
    fetch(endpoint)
    .then(res =>{
        if(res.status == 200){
            console.log("FOI")
        }else{
            console.log("DEU MERDA")
        }
    });
    janelaEdit.style.display = "none";
});

btnCancelar.addEventListener("click",(evt)=>{
    janelaEdit.style.display = "none";
});