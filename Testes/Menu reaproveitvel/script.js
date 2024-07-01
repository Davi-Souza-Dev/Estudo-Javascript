//Criando o menu no html
const header = document.createElement("header");
header.innerHTML = `       
<header>
<div class="navbar">
  <a href="index.html"><i class="fa fa-fw fa-home"></i> P1</a> 
  <a href="p2.html"><i class="fa fa-fw fa-search"></i> P2</a>
  <a href="p3.html"><i class="fa fa-fw fa-search"></i> P3</a>  
  <a href="p4.html"><i class="fa fa-fw fa-search"></i> P4</a>  
  <a href="https://www.google.com.br/?hl=pt-BR"><i class="fa fa-fw fa-search"></i> Google</a>  
</div>
</header>`;

//Inserindo na página pela div referenciada
window.addEventListener("load", () => {
  const menu = document.getElementById("menu");
  if(menu){
    menu.appendChild(header);
    console.log("Com referencia")
  }else{
    console.log("Sem referencia")
  }
});
