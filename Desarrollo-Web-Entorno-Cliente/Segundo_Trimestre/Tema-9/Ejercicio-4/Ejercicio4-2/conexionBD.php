<?php
$nombreBD = 'registro';
$nombreUsuario = 'root';
$contrasenya = '';
$ip = 'localhost';
//$opc = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
$error='';
try{
    $conexion = new PDO('mysql:host='.$ip.';dbname='.$nombreBD, $nombreUsuario, $contrasenya);
}catch(PDOException $e){
    $error = 'Fallo de conexion' . '</br>' . $e->getMessage();
}

?>