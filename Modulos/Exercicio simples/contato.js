import { contatos } from "./bancoContatos.js";

let contato = {
    getContatos: function(){
        return contatos;
    },
    getContato:function(i){
        return contatos[i];
    },
    addContato:function(novoContato,destino){
        //Adicionar no banco de contatos
        const cont={
            nome:novoContato.nome,
            tel:novoContato.tel,
            email:novoContato.email
        }
        contatos.push(cont);


        //Adicionar os contatos na exibibção do DOM
        destino.innerHTML = "";
        contatos.forEach((c)=>{
            const div = document.createElement("div");
            div.setAttribute("class","contato");
            const nome = document.createElement("p");
            nome.innerHTML = c.nome;
            const tel = document.createElement("p");
            tel.innerHTML = c.tel;
            const email = document.createElement("p");
            email.innerHTML = c.email;
            div.appendChild(nome);
            div.appendChild(tel);
            div.appendChild(email);
            destino.appendChild(div);
        })
    }
}

export {contato};

