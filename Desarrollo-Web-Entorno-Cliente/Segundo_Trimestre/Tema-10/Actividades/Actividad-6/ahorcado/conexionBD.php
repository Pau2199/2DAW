<?php
$nombreBD = 'ahorcado';
$nombreUsuario = 'ahorcado';
$contrasenya = 'ahorcado';
$ip = 'localhost';
$opc = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
$error='';
try{
    $conexion = new PDO('mysql:host='.$ip.';dbname='.$nombreBD, $nombreUsuario, $contrasenya, $opc);
}catch(PDOException $e){
    $error = 'Fallo de conexion' . '</br>' . $e->getMessage();
}

?>