<?php 
require_once 'conexionBD.php';
$consulta = $conexion->query('SELECT sensible FROM palabras ORDER BY RAND() LIMIT 1');
$registro = $consulta->fetch(PDO::FETCH_NUM);

echo json_encode($registro); 
?>