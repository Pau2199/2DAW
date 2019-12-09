<?php
$num1 = 8;
$num2 = 3;

include_once 'funciones_inc_Alejandro.php';

echo "La suma de ${num1} + ${num2} es: " . suma($num1, $num2) . "<br>";
echo "La resta de ${num1} - ${num2} es: " . resta($num1, $num2) . "<br>";
echo "La multiplicacion de ${num1} X ${num2} es: " . multiplicacion($num1, $num2) . "<br>";
echo "La division de ${num1} / ${num2} es: " . division($num1, $num2) . "<br>";
echo "La modulo de ${num1} % ${num2} es: " . modulo($num1, $num2) . "<br>";


?>