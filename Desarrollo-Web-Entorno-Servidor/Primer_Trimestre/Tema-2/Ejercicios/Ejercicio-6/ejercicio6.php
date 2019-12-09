<?php

$frase = ' Alex odia PHP, y se le olvidan siempre el simbolo del dolar';
echo $frase."<br>";
echo strrev($frase)."<br>";

$buscar = 'PHP';
$pos = strpos($frase, $buscar);

if($pos == true){
    echo "La cadena fue encontrada en la posicion: " . $pos . "<br>";
}else{
    echo "La cadena no fue encontrada" . "<br>";
}

echo substr($frase, $pos+strlen($buscar));

?>