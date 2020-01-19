<?php
require_once 'conexionBD.php';
$consulta = $conexion->query('SELECT foto, id FROM coches');
$registro = $consulta->fetchAll(PDO::FETCH_NUM);
echo json_encode($registro);
?>