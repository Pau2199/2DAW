<?php
require_once 'animal.php';
class Pato extends Animal{
    public function __construct($nombre, $patas){
        if($patas != 2){
            throw new Exception ('Pato: Patas Incorrectas');
        }else if (!is_numeric($patas)){
            throw new Exception ('Pato: El numero de patas contiene letras');
        }else if (!ctype_alpha($nombre)){
            throw new Exception ('Pato: El nombre del animal contiene numeros'); 
        }
        parent::__construct($nombre, $patas); 
    }
    public function sonido(){
        return 'cuac';
    }
}
?>