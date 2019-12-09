<?php
require_once 'perro.php';
require_once 'gato.php';
require_once 'pajaro.php';
require_once 'pato.php';
try{
    $a = new Perro ('Thor' , '4');
    echo $a;
}catch(Exception $ex){
    echo $ex->getMessage();
}

try{
    $b = new Pato ('Donald' , '2');
    echo $b; 
}catch(Exception $ex){
    echo $ex->getMessage();
}
try{
    $c = new Gato ('Garfield', '5');
    echo $c;
}catch(Exception $ex){
    echo $ex->getMessage();
}

?>