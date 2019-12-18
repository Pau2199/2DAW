<?php
require_once 'conexionBD.php';
$consulta = $conexion->query('SELECT letra FROM letras');
$registro = $consulta->fetchAll(PDO::FETCH_NUM);
echo json_encode($registro);
?>