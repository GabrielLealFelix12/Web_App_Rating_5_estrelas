<?php
require 'config.php';

$nome = $_POST["Nome"];
$endereco = $_POST["Endereco"];
$cod = $_POST["Cod-unidade"];
$comando = $_POST["comando"];

switch($comando){
	case "ATUALIZAR":
    UpdateQuery();
	break;
	
	case "DELETAR":
	DeleteQuery();
	break;
 
 default:
 echo "<p>aconteceu um erro!</p>";

}


function UpdateQuery(){
global $nome, $endereco, $cod, $conexao;

$atual="UPDATE unidade SET NOME='$nome', ENDERECO='$endereco' WHERE COD='$cod'";

if($conexao->query($atual)){
echo "<script type='application/javascript'>
                alert('Dados atualizados com sucesso;');
                var local = location.origin;
                var caminho_home = '/Teste_Rating_5_stars/cadastrocolaborador.html';
                window.location = local+caminho_home;
                </script>";
}else{
	echo "Erro: ".$conexao->error;
}

}


function DeleteQuery(){
global $cod, $conexao;

$delete="DELETE FROM unidade WHERE COD='$cod'";

if($conexao->query($delete)){
echo "<script type='application/javascript'>
                alert('Dados deletados com sucesso;');
                var local = location.origin;
                var caminho_home = '/Teste_Rating_5_stars/cadastrocolaborador.html';
                window.location = local+caminho_home;
                </script>";
}else{
	echo "Erro: ".$conexao->error;
}

}





?>