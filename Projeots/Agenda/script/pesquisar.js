const btnBuscar = document.getElementById("btnBuscar");
const txtPesq = document.getElementById("txtPesq");
const rdID = document.getElementById("rdID");
const rdNome = document.getElementById("rdNome");
const rdTel = document.getElementById("rdTel");
const rdEmail = document.getElementById("rdEmail");
const rdNasc = document.getElementById("rdNasc");
const dgvDados = document.getElementById("dgvDados");
btnBuscar.addEventListener("click", (evt) => {
  if (txtPesq.value == "") {
    alert("Campo de pesquisa vazio");
    txtPesq.focus();

    return;
  }

  dgvDados.innerHTML = "";

  let valorPesquisa = txtPesq.value;
  const rdPesquisa = document.querySelector(
    "input[name=rdPesquisa]:checked"
  ).value;
  

  let endpoint = `http://127.0.0.1:1880/pesquisar/${rdPesquisa}/${valorPesquisa}`;
  fetch(endpoint)
  .then(res => res.json())
  .then(res=>{
    console.log(res);
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

        dgvDados.appendChild(linha);

    });
  })
  txtPesq.value = " ";
});
