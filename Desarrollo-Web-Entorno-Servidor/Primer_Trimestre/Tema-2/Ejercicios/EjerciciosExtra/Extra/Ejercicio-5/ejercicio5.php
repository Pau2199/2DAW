<?php
$numero = 1221;
$numeroAlReves = 0;
$cociente = $numero;
while ( $cociente != 0)
{
	$resto = $cociente % 10;
	$numeroAlReves = $numeroAlReves * 10 + $resto;
	$cociente = (int)($cociente / 10);
}
if ( $numero == $numeroAlReves ){
    echo 'Es capicua';
}else{
 echo 'No es capicua';   
}
?>