<?php
require_once 'animal.php';
class Gato extends Animal{
    public function __construct($nombre, $patas){
        if($patas != 4){
            throw new Exception ('Gato: Patas Incorrectas');
        }else if (!is_numeric($patas)){
            throw new Exception ('Gato: El numero de patas contiene letras');
        }else if (!ctype_alpha($nombre)){
            throw new Exception ('Gato: El nombre del animal contiene numeros');
        }

        parent::__construct($nombre, $patas);  
    }
    public function sonido(){
        return 'miau';
    }
}
?>