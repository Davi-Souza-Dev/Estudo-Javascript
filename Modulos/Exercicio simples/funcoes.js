import { contato } from "./contato.js";

const listaContatos = document.getElementById("listaContatos");
const btnGravar = document.getElementById("btnGravar");

btnGravar.addEventListener("click",(evt)=>{
    const cont={
        nome:document.getElementById("txtNome").value,
        tel:document.getElementById("txtTel").value,
        email:document.getElementById("txtEmail").value,
    }
    contato.addContato(cont,listaContatos);
});