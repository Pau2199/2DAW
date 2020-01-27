<?php
/*require_once 'conexionBD.php';
$modificacion = $conexion->query('UPDATE alumnos SET '.$_POST['campoParaModificar'].' = "'.$_POST['valorNuevo'].'" WHERE id = '.$_POST['idAlumno'].';');
$array = array('error' => $modificacion->execute());
echo json_encode($array);*/
require_once 'conexionBD.php';

if($_POST['campoParaModificar'] == 'nombre' || $_POST['campoParaModificar'] == 'apellido1' || $_POST['campoParaModificar'] == 'apellido2' || $_POST['campoParaModificar'] == 'dni' || $_POST['campoParaModificar'] == 'fechaNacimiento' || $_POST['campoParaModificar'] == 'email' || $_POST['campoParaModificar'] == 'telefono'){

    $modificacion = $conexion->prepare('UPDATE alumnos SET '.$_POST['campoParaModificar']. '= :valor WHERE id = :idAlumno ;');
    $modificacion->bindParam(':valor', $_POST['valorNuevo']);
    $modificacion->bindParam(':idAlumno', $_POST['idAlumno']);
    $modificacion->execute();
    $array = array('filasAfectadas' => $modificacion->rowCount());
    echo json_encode($array);
}
?>