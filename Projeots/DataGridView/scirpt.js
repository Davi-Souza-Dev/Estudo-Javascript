//PEGANDO SO DADOS DO JSON
const configdgv = {
  endpoint: "http://127.0.0.1:1880/produtos",
  IDdestino: "dgvDados",
};
//PEGANDO O DESTINO FINAL
const destino = document.getElementById(configdgv.IDdestino);
destino.innerHTML = "";
const datagridview = (configdgv) => {
  fetch(configdgv.endpoint)
    .then((res) => res.json())
    .then((res) => {
      res.map((e) => {
        //CRIANDO A LINHA
        const dgvLinha = document.createElement("div");
        dgvLinha.setAttribute("class", "dgvLinha");

        //ADICIONANDO AS COLUNAS
        const c1 = document.createElement("div");
        c1.setAttribute("class", "c1");
        c1.innerHTML = e.n_id_produto;
        dgvLinha.appendChild(c1);

        const c2 = document.createElement("div");
        c2.setAttribute("class", "c2");
        c2.innerHTML = e.s_nome_produto;
        dgvLinha.appendChild(c2);

        const c3 = document.createElement("div");
        c3.setAttribute("class", "c3");
        c3.innerHTML = e.s_marca_produto;
        dgvLinha.appendChild(c3);

        const c4 = document.createElement("div");
        c4.setAttribute("class", "c4");
        c4.innerHTML = e.s_modelo_produto;
        dgvLinha.appendChild(c4);

        const c5 = document.createElement("div");
        c5.setAttribute("class", "c5");
        dgvLinha.appendChild(c5);

        const imgDel = document.createElement("img");
        imgDel.setAttribute("class", "dgvImg");
        imgDel.setAttribute("src", "./icons/delete.svg");
        c5.appendChild(imgDel);
        imgDel.addEventListener("click", (evt) => {
          // console.log(evt.target.parentNode.parentNode.firstChild.innerHTML);
          const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
          const linha = evt.target.parentNode.parentNode;
          const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`;
          fetch(endpoint).then((res) => {
            if (res.status == 200) {
              linha.remove();
            }
          });
        });

        const imgEdit = document.createElement("img");
        imgEdit.setAttribute("class", "dgvImg");
        imgEdit.setAttribute("src", "./icons/edit.svg");
        c5.appendChild(imgEdit);
        imgEdit.addEventListener("click", (evt) => {
          const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
          // const id = document.querySelector("#txtIdEdit").value;
          // const produto = document.querySelector("#txtProdutoEdit").value;
          // const marca = document.querySelector("#txtMarcaEdit").value;
          // const modelo = document.querySelector("#txtModeloEdit").value;
          const endpoint = `http://127.0.0.1:1880/produto/${id}`;
          // const endpoint = `http://127.0.0.1:1880/update/produto/${id}/${produto}/${marca}/${modelo}`;
          document.querySelector("#janelaEdit").classList.toggle("ocultar");
          fetch(endpoint)
            .then((res) => res.json())
            .then((res) => {
              document.querySelector("#txtIdEdit").value = res[0].n_id_produto;
              document.querySelector("#txtProdutoEdit").value =
                res[0].s_nome_produto;
              document.querySelector("#txtMarcaEdit").value =
                res[0].s_marca_produto;
              document.querySelector("#txtModeloEdit").value =
                res[0].s_modelo_produto;
            });
        });

        const imgView = document.createElement("img");
        imgView.setAttribute("class", "dgvImg");
        imgView.setAttribute("src", "./icons/view.svg");
        c5.appendChild(imgView);

        imgView.addEventListener("click", (evt) => {
          const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
          const endpoint = `http://127.0.0.1:1880/produto/${id}`;
          document.querySelector(".janelaView").classList.toggle("ocultar");
          fetch(endpoint)
            .then((res) => res.json())
            .then((res) => {
              document.querySelector("#txtId").value = res[0].n_id_produto;
              document.querySelector("#txtProduto").value =
                res[0].s_nome_produto;
              document.querySelector("#txtMarca").value =
                res[0].s_marca_produto;
              document.querySelector("#txtModelo").value =
                res[0].s_modelo_produto;
            });
        });

        //ADICIONANDO NO DESTINO
        destino.appendChild(dgvLinha);
      });
    });
};

//INSERINDO OS DADOS NO HTML

datagridview(configdgv);
document.querySelector("#btnClose").addEventListener("click", () => {
  document.querySelector(".janelaView").classList.toggle("ocultar");
});

document.querySelector("#btnCloseEdit").addEventListener("click", () => {
  document.querySelector("#janelaEdit").classList.toggle("ocultar");
});

//BOTÃO PARA GRAVAR NA JANELA EDIT
const btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", () => {
  const id = document.querySelector("#txtIdEdit").value;
  const produto = document.querySelector("#txtProdutoEdit").value;
  const marca = document.querySelector("#txtMarcaEdit").value;
  const modelo = document.querySelector("#txtModeloEdit").value;

   const endpoint = `http://127.0.0.1:1880/update/produto/${id}/${produto}/${marca}/${modelo}`;
   fetch(endpoint)
   .then((res) =>{
      if(res.status == 200){
        document.querySelector("#janelaEdit").classList.toggle("ocultar");
        location.reload();
      }else{
        alert(`Erro ao atualizar: ${res.statusText}`);
      }
   });
});

// <div class="dgvLinha">
//   PADRÃO DE LINHA PARA O JSON
//   <div class="c1">01</div>
//   <div class="c2">Processador</div>
//   <div class="c3">intel</div>
//   <div class="c4">i7</div>
//   <div class="c5">D E V</div>
// </div>
