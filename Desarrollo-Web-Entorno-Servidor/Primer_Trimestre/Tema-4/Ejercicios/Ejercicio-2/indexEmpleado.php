<?php
require_once 'persona.php';
require_once 'empleado.php';
require_once 'jefe.php';
require_once 'cliente.php';

$p = new Empleado('Pau', 'pau@gmail.com', '696542113', '1232$', 'Informatica');
echo $p->mostrar() . '<br>';
echo '---------------------------------------<br>';
$j = new Jefe('Pau', 'pau@gmail.com', '696542113', 1232, 'Jefe');
$salario = $j->salario(1000);
$j->setSueldo($salario);
echo $j->mostrar();




?>