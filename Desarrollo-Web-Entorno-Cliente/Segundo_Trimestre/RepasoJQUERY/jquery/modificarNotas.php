<?php 
require_once 'conexionBD.php';

$modificacion = $conexion->prepare('UPDATE notas SET nota = :valor WHERE alumno = :idAlumno AND actividad = :idActividad ;');
$modificacion->bindParam(':valor', $_POST['notaNueva']);
$modificacion->bindParam(':idAlumno', $_POST['idAlumno']);
$modificacion->bindParam(':idActividad', $_POST['idActividad']);
$modificacion->execute();
$array = array('filasAfectadas' => $modificacion->rowCount());
echo json_encode($array);

?>