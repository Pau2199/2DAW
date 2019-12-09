<?php
require_once 'conexionBD.php';

if($_POST['nombre'] != ""){
    $consulta = $conexion->prepare('INSERT INTO grupos (nombre) VALUES (?);');
    $consulta->bindParam(1, $_POST['nombre']);
    $consulta->execute();
    header('Location: ' .$_SERVER['HTTP_REFERER']);
}

?>