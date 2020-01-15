<?php

class ControllerComercion{
    public function cupones(){
        $m = new ModelComercio(Config::$mvc_bd_nombre,
                       Config::$mvc_bd_usuario,
                       Config::$mvc_bd_clave,
                       Config::$mvc_bd_hostname);
        $params = ['cupones' =>$m->dameCupones()];
        require __DIR__ . 'templates/cupones.php';
    }
}
?>