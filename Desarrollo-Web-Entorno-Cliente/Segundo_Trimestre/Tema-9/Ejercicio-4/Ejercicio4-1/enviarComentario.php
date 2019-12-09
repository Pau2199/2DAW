<?php
require_once 'conexionBD.php';

if(strlen($_POST['nombre']) == 0  || strlen($_POST['mail']) == 0 || strlen($_POST['comentario']) == 0  ){
    echo 'No pueden estar los campos vacios';
}else{
    $insert = $conexion->prepare('INSERT INTO comentarios (nombre, email, comentario) VALUES (?,?,?)');
    $insert->bindParam(1, $_POST['nombre']);
    $insert->bindParam(2, $_POST['mail']);
    $insert->bindParam(3, $_POST['comentario']);
    
    $respuesta = array("estado" => $insert->execute());
    echo json_encode($respuesta);
}   


?>