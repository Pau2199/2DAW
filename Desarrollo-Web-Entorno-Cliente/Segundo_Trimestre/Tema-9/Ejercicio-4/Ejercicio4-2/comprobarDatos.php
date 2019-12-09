<?php
require_once 'conexionBD.php';
$comprobar = $conexion->query('SELECT * FROM usuarios  WHERE '.$_POST['id'].' = "' . $_POST['valor'] . '"');
$resultado = $comprobar->fetchAll();
$json = array("existe" => count($resultado));
echo json_encode($json);
