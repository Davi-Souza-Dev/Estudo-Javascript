//PEgando os elementos que vou usar
const btnSave = document.getElementById("btnSave");
const btnCancel = document.getElementById("btnCancel");
const txtNome = document.getElementById("txtNome");
const txtTel = document.getElementById("txtTel");
const txtNasc = document.getElementById("txtNasc");
const txtEmail = document.getElementById("txtEmail");

btnSave.addEventListener("click", (evt) => {
  enviarDados();
});

document.addEventListener("keydown", (evt) => {
  if (evt.key == "Enter") {
    enviarDados();
  }
});

const enviarDados = () => {
  //criando as infos
  const info = {
    txtNome: txtNome.value,
    txtTel: txtTel.value,
    txtNasc: txtNasc.value,
    txtEmail: txtEmail.value,
  };

  const cabecalho = {
    method: "POST",
    body: JSON.stringify(info),
  };

  //PASSANDO OS DADOS
  const endpoint = "http://127.0.0.1:1880/addcontato";
  fetch(endpoint, cabecalho).then((res) => {
    if (res.status == 200) {
        reset();
        alert("DADOS SALVOS");
    } else {
      alert(`ERRO AO GRAVAR DADOS`);
    }
  });
};

btnCancel.addEventListener("click",(evt)=>{
    reset();
});

const reset = () =>{
    txtNome.value = " ";
    txtTel.value = " ";
    txtEmail.value = " ";
    txtNasc.value = " ";
    txtNome.focus();
}
