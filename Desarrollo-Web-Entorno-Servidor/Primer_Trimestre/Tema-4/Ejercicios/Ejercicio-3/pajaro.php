<?php
require_once 'animal.php';
class Pajaro extends Animal{
    public function __construct($nombre, $patas){
        if($patas != 2){
            throw new Exception ('Pajaro: Patas Incorrectas');
        }else if (!is_numeric($patas)){
            throw new Exception ('Pajaro: El numero de patas contiene letras');
        }else if (!ctype_alpha($nombre)){
            throw new Exception ('Pajaro: El nombre del animal contiene numeros');
        }
        parent::__construct($nombre, $patas);    
    }
    public function sonido(){
        return 'pio pio';
    }
}
?>