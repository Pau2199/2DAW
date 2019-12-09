<?php
require_once ('personas.inc.php');
require_once('agenda.php');

$arrayPersona = [];
for ($i = 0 ; $i<count($personas); $i++){
    $arrayPersona[] = new Persona($personas[$i]['idContacto'], $personas[$i]['nombre'],$personas[$i]['apellido1'],$personas[$i]['apellido2'],$personas[$i]['telefono']);
}
echo '<div>';
foreach ($arrayPersona as $elemento){
    echo $elemento;
}
echo '</div>';

$arrayPersona[] = new Persona('8', 'Jorge', 'Jimenez', 'Martínez', '658741542');
echo '----------------------------------------------------------------------------------------------------------------------------------------------------------<br>';
echo '<div>';
foreach ($arrayPersona as $elemento){
    echo $elemento;
}
echo '</div>';
?>    