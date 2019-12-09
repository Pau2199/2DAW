<?php
class Circuito{
    private $localidad;
    private $pais;
    private $km;
    private $curvasizq;
    private $curvasDer;


    public function getLocalidad(){
        return $this->localidad;
    }

    public function setLocalidad($localidad){
        $this->localidad = $localidad;
    }

    public function getPais(){
        return $this->pais;
    }

    public function setPais($pais){
        $this->pais = $pais;
    }

    public function getKm(){
        return $this->km;
    }

    public function setKm($km){
        $this->km = $km;
    }

    public function getCurvasizq(){
        return $this->curvasizq;
    }

    public function setCurvasizq($curvasizq){
        $this->curvasizq = $curvasizq;
    }

    public function getCurvasDer(){
        return $this->curvasDer;
    }

    public function setCurvasDer($curvasDer){
        $this->curvasDer = $curvasDer;
    }
    
    public function __construct($localidad, $pais, $km, $curvasizq, $curvasDer){
        
    }

}
<?