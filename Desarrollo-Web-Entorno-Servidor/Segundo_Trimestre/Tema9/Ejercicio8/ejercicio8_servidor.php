<?php
require_once 'conexionBD.php';

$consulta = $conexion->query('SELECT * FROM ' . $_GET['selecionado']);
$registro = $consulta->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($registro);

?>