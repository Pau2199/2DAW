<?php
require_once 'Persona.php';
class Cliente extends Persona{
    private $descuento;
    
    public function getDescuento(){
        return $this->telefono;
    }
    public function setDescuento($nuevoDescuento){
        $this->descuento = $nuevoDescuento;
    }
    
    
    public function __construct ($nombre, $email, $telefono, $descuento){
        parent::__construct($nombre, $email, $telefono);
        $this->descuento = $descuento;
    }    
}

?>