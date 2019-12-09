<?php
require_once 'conexionBD.php';
$baseDeDatos = $_GET['tabla'];

try{
    $consulta=$conexion->prepare('DELETE FROM ' .$baseDeDatos. ' WHERE codigo=?');
    $consulta->bindParam(1, $_GET['codigoCancion']);
    $consulta->execute();
    header('Location: ' .$_SERVER['HTTP_REFERER']);
}catch(Exception $ex){
    echo $ex->getMessage();
}
?>


<pre><?= $consulta->debugDumpParams() ?></pre>