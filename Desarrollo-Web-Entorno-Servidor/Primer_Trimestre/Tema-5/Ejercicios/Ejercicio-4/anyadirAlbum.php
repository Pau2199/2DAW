<?php
require_once 'conexionBD.php';

if($_POST['nombreAlbum'] != "" && $_POST['anyo'] != "" && $_POST['fechaCompra'] != "" && $_POST['precio'] != ""){
    try{
        $consulta = $conexion->prepare('INSERT INTO albumes (titulo, grupo, anyo, formato, fechaCompra, precio) VALUES (?,?,?,?,?,?);');
        $consulta->bindParam(1, $_POST['nombreAlbum']);
        $consulta->bindParam(2, $_REQUEST['codigo']);
        $consulta->bindParam(3, $_POST['anyo']);
        $consulta->bindParam(4, $_POST['formato']);
        $consulta->bindParam(5, $_POST['fechaCompra']);
        $consulta->bindParam(6, $_POST['precio']);
        $consulta->execute();
    }catch(Exception $ex){
        echo $ex->getMessage();
    }

    header('Location: ' .$_SERVER['HTTP_REFERER']);

}

?>