<?php
require_once 'conexionBD.php';
$modificacion = $conexion->query('UPDATE alumnos SET '.$_POST['campoParaModificar'].' = "'.$_POST['valorNuevo'].'" WHERE id = '.$_POST['idAlumno'].';');
$array = array('error' => $modificacion->execute());
echo json_encode($array);

?>