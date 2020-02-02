<?php
require_once 'conexionBD.php';
$consulta = $conexion->query('SELECT c.modelo, c.precio, c.estado, m.nombre FROM coches c, marcas m WHERE c.id='.$_POST['id'].' AND c.marca = m.id');
$registro = $consulta->fetch(PDO::FETCH_ASSOC);
echo json_encode($registro);
?>