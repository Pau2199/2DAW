<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
$dificultad='';

if($_POST['dificultad'] == 0){
    $dificultad = '<=5';
}else if($_POST['dificultad'] == 1){
    $dificultad = '>=6 AND <=9';
}else{
    $dificultad = '>=7';
}
//SELECT sin_acentos FROM palabras WHERE LENGTH(sin_acentos)>=6 AND LENGTH(sin_acentos)<=9 ORDER BY RAND() LIMIT 1 
require_once 'conexionBD.php';
$consulta = $conexion->query('SELECT sin_acentos FROM palabras WHERE LENGTH(sin_acentos)'.$dificultad.' ORDER BY RAND() LIMIT 1 ;');
$registro = $consulta->fetch(PDO::FETCH_NUM);
echo $registro[0]; 
?>