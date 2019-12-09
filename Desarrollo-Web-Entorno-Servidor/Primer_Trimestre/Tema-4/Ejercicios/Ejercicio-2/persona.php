<?php
class Persona{
    protected $nombre;
    protected $email;
    protected $telefono;
    
    public function getNombre(){
        return $this->nombre;
    }
    public function setNombre($nuevoNombre){
        $this->nombre = $nuevoNombre;
    }
    
    public function getEmail(){
        return $this->email;
    }
    public function setEmail($nuevoEmail){
        $this->email = $nuevoEmail;
    }
    
    public function getTelefono(){
        return $this->telefono;
    }
    public function setTelefono($nuevoTelefono){
        $this->telefono = $nuevoTelefono;
    }
    
    
    public function __construct($nombre, $email, $telefono){
        $this->nombre = $nombre;
        $this->email = $email;
        $this->telefono = $telefono;
    }
    
    public function mostrar(){
        return 'Nombre: ' . $this->nombre . '<br>'
            . 'Email: ' . $this->email . '<br>'
            . 'Telefono: ' . $this->telefono;
    }
    
}

?>