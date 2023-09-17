var caminho_cadcolab = "/Teste_Rating_5_stars/cadastrocolaborador.html";


var tofill = sessionStorage.getItem('dados_unidade'); 

function ChecagemVariavel_unidade() {
if (tofill) {
  InputFill(tofill);
  return true;
}else{
window.location = local+caminho_cadcolab;
}
}


function InputFill(json){
 let jsoninfo = JSON.parse(json);

 var nome = document.querySelectorAll("input[name=Nome]");
 var codiunidade = document.querySelectorAll("input[name=Cod-unidade]");
 var endereco = document.querySelectorAll("input[name=Endereco]");

 nome[0].value = jsoninfo.nome;
 endereco[0].value = jsoninfo.endereco;
 codiunidade[0].value = jsoninfo.cod;
 
}