const escolhas = document.querySelectorAll("input");
const btnPedir = document.getElementById("btnPedir");
let produtos = [];
let selecionados = [];
let msg = new String("Gostaria de pedir:. ");

escolhas.forEach((e, index) => {
  produtos[index] = e;
});

produtos.map((e) => {
  e.addEventListener("click", () => {
    let selecionado = produtos.filter((e) => {
      if (e.checked) {
        return e;
      }
    });
    selecionados = selecionado.map((e) => {
      return e.value;
    });
    console.log(selecionados);
  });
});

const montarMsg = () => {
  //Verificar se tem algum produto escolhido
  if (selecionados.length <= 0) {
    console.log("VAZIO");
  } else {
    //Alterando os valores da string para os produtos
    msg = msg.concat(selecionados);
    for (let i = 0; i <= msg.length; i++) {
      msg = msg.replace(",", ".");
      msg = msg.replace(".", "%0A");
      msg = msg.replace(" ", "%20");
    }

    //Realizando o pedido ao clicar no botão
    let url = new String(
      "https://web.whatsapp.com/send?phone=5511949335503&text="
    );
    url = url.concat(msg);
    window.location = url;
  }
};

btnPedir.addEventListener("click", () => {
  montarMsg();
});
