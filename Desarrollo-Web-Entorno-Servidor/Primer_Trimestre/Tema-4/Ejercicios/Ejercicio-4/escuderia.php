<?php
class Escuderia{
    private $nombre;
    private $sede;
    private $pilotos=[];

    public function __construct($nombre, $sede){
        $this->nombre=$nombre;
        $this->sede=$sede;
    }

    public function __toString(){
        $texto = '--------------------Escuderia---------------<br>'
            .'Nombre: '. $this->nombre.'<br>'
            .'Sede: '.$this->sede . '<br>'
            . '--------------- PILOTOS DE LA ESCUDERIA ----------------------<br>';
        foreach($this->pilotos as $key => $valor){
            $texto .= $valor->__toString();
            if($key < 2 ){
                $texto .= '<br>------------------------<br>';   
            }
        }
        $texto .= '<br>------------------------------------------------------------------------------<br>';
        return $texto;
    }

    public function anyadirPiloto(Piloto $p){
        $this->pilotos[]=$p;
    }
}



?>