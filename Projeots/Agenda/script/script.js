const header = document.getElementById("header");
const menu = document.getElementById("menu");
const btnHome = document.getElementById("btnHome");
const btnNovo = document.getElementById("btnNovo");
const btnPesquisar = document.getElementById("btnPesquisar");
const btnGestao = document.getElementById("btnGestao");
const btnSobre = document.getElementById("btnSobre");
const content = document.getElementById("content");

//EVENTOS DOS MENUS
btnHome.addEventListener("click",(evt)=>{
    abrirAba(evt.target,"./home.html");
});


btnNovo.addEventListener("click",(evt)=>{
 abrirAba(evt.target,"./novo.html");
});


btnPesquisar.addEventListener("click",(evt)=>{
 abrirAba(evt.target,"./pesquisar.html");;
});


btnGestao.addEventListener("click",(evt)=>{
 abrirAba(evt.target,"./gestao.html");
});


btnSobre.addEventListener("click",(evt)=>{
 abrirAba(evt.target,"./sobre.html");
});

//Função para saber qual esta selecionada

const abrirAba = (el,url)=>{
    const aba = [...document.querySelectorAll(".selected")];
    aba.map(btn=>{
        btn.classList.remove("selected");   
    });
    el.classList.toggle("selected");
    window.open(url,"urlIframe");
}