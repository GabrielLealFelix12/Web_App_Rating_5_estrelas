<?php

require 'config.php';

$nomecolab = null;
$nomeunidade = null;

 
if(isset($_REQUEST['colaborador'])){
  $nomecolab = $_REQUEST['colaborador'];
}else{
  $nomeunidade = $_REQUEST['Unidade'];
}

$query = "SELECT * FROM colaborador WHERE NOME RLIKE '$nomecolab.' ORDER BY NOME";

$query_unidade = "SELECT * FROM unidade WHERE NOME RLIKE  '$nomeunidade.' ORDER BY NOME";


?>


<?php
if(isset($nomecolab)){

ReadQueryColab($query);

}elseif(isset($nomeunidade)){

ReadQueryUnidade($query_unidade);

}else{
  echo'<p> Nenhum resultado encontrado </p>';
}  


?>




<?php

function ReadQueryColab($lequery){
global $conexao;
$result = $conexao->query($lequery);

if ($result->num_rows > 0) {
  
  echo(

"
<table>
    <caption> Lista de colaboradores (clique em um para alterar seus dados)</caption>
  <tbody>


  "
  );
  
  while($row = $result->fetch_assoc()) {
    echo "<tr>";
     echo "<td>".$row["NOME"]."</td>";
     echo "<td>".$row["CPF"]."</td>";
     echo "<td>".$row["NASC"]."</td>";
     echo "<td>".$row["UNIDADE"]."</td>";
     echo "<td> Foto: <img src='imagens_perfil/".$row["PFP"]."' style='max-width: 100%;max-height: 100%;'></td>";
    echo "</tr>";

  }
  echo "</tbody>";
  echo "</table>";
}
  else{
    echo "<script type='application/javascript'>
            alert('Nenhum resultado encontrado');
      </script>";
    echo "<p>Nenhum colaborador encontrado</p>";
  }

}

?>




<?php 
function ReadQueryUnidade($zequery){
global $conexao, $query_unidade;
echo $query_unidade;

$result = $conexao->query($zequery);

if ($result->num_rows > 0) {
  
  echo(

"
<table>
    <caption> Lista de Unidades (clique em um para alterar seus dados)</caption>

  <tbody>"
  );
  
  while($row = $result->fetch_assoc()) {
    echo "<tr>";
     echo "<td>".$row["NOME"]."</td>";
     echo "<td>".$row["ENDERECO"]."</td>";
     echo "<td>".$row["COD"]."</td>";
     echo "<td>".$row["ID"]."</td>";
    echo "</tr>";

  }
  echo "</tbody>";
  echo "</table>";
}else{
    echo "<p>Nenhuma unidade encontrada </p>";
  }

}


?>