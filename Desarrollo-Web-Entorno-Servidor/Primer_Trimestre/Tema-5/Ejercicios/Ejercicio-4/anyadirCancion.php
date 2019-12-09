<?php
require_once 'conexionBD.php';

if($_POST['titulo'] != "" && $_POST['duracion'] != "" && $_POST['posicion'] != ""){
    try{
        $consulta = $conexion->prepare('INSERT INTO canciones (titulo, album, duracion, posicion) VALUES (?,?,?,?);');
        $consulta->bindParam(1, $_POST['titulo']);
        $consulta->bindParam(2, $_POST['codigo']);
        $consulta->bindParam(3, $_POST['duracion']);
        $consulta->bindParam(4, $_POST['posicion']);
        $consulta->execute();
    }catch(Exception $ex){
        echo $ex->getMessage();
    }
    header('Location: ' .$_SERVER['HTTP_REFERER']);
}

?>