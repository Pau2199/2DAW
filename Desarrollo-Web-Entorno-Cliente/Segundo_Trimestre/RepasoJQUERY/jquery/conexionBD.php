<?php
$nombreBD = 'jquery';
$nombreUsuario = 'jquery';
$contrasenya = 'jquery';
$ip = 'localhost';
$error='';
try{
    $conexion = new PDO('mysql:host='.$ip.';dbname='.$nombreBD.';charset=UTF8'.$nombreUsuario, $contrasenya);
}catch(PDOException $e){
    $error = 'Fallo de conexion' . '</br>' . $e->getMessage();
}

?>