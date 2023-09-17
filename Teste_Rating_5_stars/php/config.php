<?php
$servidor = "yourserverhere";
$db = "5estrelas";
$senha = "";
$login = "youruserhere";

$conexao = new mysqli ($servidor, $login,$senha, $db);

if ($conexao->connect_error) {
  die("Conexao falhou: " . $conexao->connect_error);
}

?>
