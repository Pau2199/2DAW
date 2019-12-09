<?php 
require_once 'Persona.php';
class Jefe extends Persona{
    private $sueldo;
    private $categoria;
    
    public function getSueldo(){
        return $this->sueldo;
    }
    public function setSueldo($nuevoSueldo){
        $this->sueldo = $nuevoSueldo;
    }
    
    public function getCategoria(){
        return $this->categoria;
    }
    public function setCategoria($nuevaCategoria){
        $this->categoria = $nuevaCategoria;
    }
    
    public function __construct ($nombre, $email, $telefono, $sueldo, $categoria){
        parent::__construct($nombre, $email, $telefono);
        $this->sueldo = $sueldo;
        $this->categoria = $categoria;
    }
    
    
    public function salario(){
        $argumentos = func_get_args();
        if(count(func_get_args()) == 0){
            return $this->sueldo;
            
        }else{
            return $this->sueldo + $argumentos[0];
        }
    }
    
    
    public function mostrar(){
        return parent::mostrar() . '<br>'
            . 'Sueldo: ' . $this->sueldo . '<br>'
            . 'Categoria: ' . $this->categoria;
    }
    
}

