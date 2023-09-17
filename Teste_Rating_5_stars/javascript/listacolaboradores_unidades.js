const lista = document.getElementById("lista");
var local = location.origin;
var caminho_perfil = "/Teste_Rating_5_stars/paginaperfil.html";
var caminho_unidade = "/Teste_Rating_5_stars/paginaunidade.html";
var caminho_colab = "/Teste_Rating_5_stars/php/listacolaboradores_unidades.php";
var mysearchquery = null;
var myoptionvalue = 'colaborador'; // <- default

function getthevalueofsearchquery(){
mysearchquery = document.getElementById('searchquery').value;

}



function MostrarColaboradores(e) {
    e.preventDefault();
  
  const xhttp = new XMLHttpRequest();
  


  xhttp.onload = function() {
    
    var resposta = this.responseText;
    //alert(resposta);
    
    lista.innerHTML = resposta;
if (document.getElementsByTagName("table")[0]!= undefined){
var table = document.getElementsByTagName("table")[0];
var tbody = table.getElementsByTagName("tbody")[0];

tbody.onclick = function (e) {
    e = e || window.event;
    var data = [];
    var target = e.srcElement || e.target;
    while (target && target.nodeName !== "TR") {
        target = target.parentNode;
    }
    if (target) {
        var cells = target.getElementsByTagName("td");
        for (var i = 0; i < cells.length; i++) {
            data.push(cells[i].innerHTML);
        }

    }
    console.log(data);
    var dadosColab = {
      "nome":data[0],
      "cpf": data[1],
      "data de nascimento":data[2],
      "unidade": data[3]
    };

//console.log(dadosColab.nome);
sessionStorage.setItem('dados', JSON.stringify(dadosColab));
window.location = local+caminho_perfil;
}

};
      
  };
  xhttp.open("POST", local+caminho_colab+"?"+myoptionvalue+"="+mysearchquery);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
}






function MostrarUnidades(e) {
    e.preventDefault();
  
  const xhttp = new XMLHttpRequest();
  


  xhttp.onload = function() {
    
    var resposta = this.responseText;    
    lista.innerHTML = resposta;

if (document.getElementsByTagName("table")[0]!= undefined){

var table = document.getElementsByTagName("table")[0];
var tbody = table.getElementsByTagName("tbody")[0];


tbody.onclick = function (e) {
    e = e || window.event;
    var data = [];
    var target = e.srcElement || e.target;
    while (target && target.nodeName !== "TR") {
        target = target.parentNode;
    }
    if (target) {
        var cells = target.getElementsByTagName("td");
        for (var i = 0; i < cells.length; i++) {
            data.push(cells[i].innerHTML);
        }

    }
    console.log(data);
    var dadosUnidade = {
      "nome":data[0],
      "endereco": data[1],
      "cod":data[2],
      "id": data[3]
    };

console.log(dadosUnidade.nome);
sessionStorage.setItem('dados_unidade', JSON.stringify(dadosUnidade));


window.location = local+caminho_unidade;
}

};
      
  
};
  xhttp.open("POST", local+caminho_colab+"?"+myoptionvalue+"="+mysearchquery);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
}




function gettheoptionvalue(){
myoptionvalue = document.getElementById('unidades_colabs').value;
if (myoptionvalue == 'colaborador'){
    document.getElementById("buttonquery").onclick = function (){ MostrarColaboradores(event);}
}
else{
        document.getElementById("buttonquery").onclick = function (){ MostrarUnidades(event);}
}

}
