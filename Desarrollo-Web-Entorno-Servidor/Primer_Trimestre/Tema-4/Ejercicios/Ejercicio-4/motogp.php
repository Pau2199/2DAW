<?php

//Autor Pau
require_once 'escuderia.php';
require_once 'piloto.php';
$escuderia1 = new Escuderia('Repsol', 'China');
$escuderia2 = new Escuderia('Yamaha', 'Holanda');
$piloto1 = new Piloto('Pau', 21, 20);
$escuderia1->anyadirPiloto($piloto1);
$piloto2 = new Piloto('Jorge', 7 , 20);
$escuderia1->anyadirPiloto($piloto2);
$piloto3 = new Piloto('Paquito', 12 , 22);
$escuderia2->anyadirPiloto($piloto3);
$piloto4 = new Piloto('Adrian', 32, 25);
$escuderia2->anyadirPiloto($piloto4);
$piloto5 =  new Piloto ('Dani', 21, 32);
$escuderia1->anyadirPiloto($piloto5);
$piloto6 =  new Piloto('Oscar', 20 , 18);
$escuderia2->anyadirPiloto($piloto6);

echo $escuderia1->__toString();
echo $escuderia2->__toString();





?>