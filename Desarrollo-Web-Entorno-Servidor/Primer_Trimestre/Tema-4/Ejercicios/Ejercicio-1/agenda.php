<?php

class Persona{
    private $idContacto;
    private $nombre;
    private $apellido1;
    private $apellido2;
    private $telefono;

    public function setidContacto($nuevoContacto){
        $this->idContacto = $nuevoContacto;
    }
    public function getidContacto(){
        return $this->idContacto;
    }

    public function setNombre($nuevoNombre){
        $this->nombre = $nuevoNombre;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function setApellido1($nuevoApellido1){
        $this->apellido1 = $nuevoApellido1;
    }
    public function getApellido1(){
        return $this->apellido1;
    }

    public function setApellido2($nuevoApellido2){
        $this->apellido2 = $nuevoApellido2;
    }
    public function getApellido2(){
        return $this->apellido2;
    }
    public function setTelefono($nuevoTelefono){
        $this->telefono = $nuevoTelefono;
    }
    public function getTelefono(){
        return $this->telefono;
    }

    public function __construct($idContacto, $nombre, $apellido1, $apellido2, $telefono){
        $this->idContacto = $idContacto;
        $this->nombre = $nombre;
        $this->apellido1 = $apellido1;
        $this->apellido2 = $apellido2;
        $this->telefono = $telefono;
    }

    public function __toString(){
        return 'ID Contacto: ' . $this->idContacto . '<br>'
            . 'Nombre: ' . $this->nombre . '<br>'
            . 'Primer Apellido: ' . $this->apellido1 . '<br>'
            . 'Segundo Apellido: ' . $this->apellido2 . '<br>'
            . 'Telefono: ' . $this->telefono . '<br>'
            . '---------------------------------------<br>';
    }

}
?>