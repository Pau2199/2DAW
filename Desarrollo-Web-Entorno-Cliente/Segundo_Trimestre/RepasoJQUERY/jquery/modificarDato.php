<?php
require_once 'conexionBD.php';


    $modificacion = $conexion->prepare('UPDATE alumnos SET '.$_POST['campoParaModificar']. '= :valor WHERE id = :idAlumno ;');
    $modificacion->bindParam(':valor', $_POST['valorNuevo']);
    $modificacion->bindParam(':idAlumno', $_POST['idAlumno']);
    $modificacion->execute();
    $array = array('filasAfectadas' => $modificacion->rowCount());
    echo json_encode($array);
?>