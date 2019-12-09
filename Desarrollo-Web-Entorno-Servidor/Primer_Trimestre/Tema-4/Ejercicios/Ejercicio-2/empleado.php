<?php
require_once 'persona.php';
class Empleado extends Persona{
    private $sueldo;
    private $departamento;

    public function getSueldo(){
        return $this->sueldo;
    }
    public function setSueldo($nuevoSueldo){
        $this->sueldo = $nuevoSueldo;
    }

    public function getDepartamento(){
        return $this->departamento;
    }
    public function setDategoria($nuevaDepartamento){
        $this->depar = $nuevaDepartamento;
    }

    public function __construct ($nombre, $email, $telefono, $sueldo, $departamento){
        parent::__construct($nombre, $email, $telefono);
        $this->sueldo = $sueldo;
        $this->departamento = $departamento;
    }


    public function salario(){
            return $this->sueldo;
    }


    public function mostrar(){
        return parent::mostrar() . '<br>'
            . 'Sueldo: ' . $this->sueldo . '<br>'
            . 'Departamento: ' . $this->departamento;
    }

}
?>