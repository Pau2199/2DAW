<?php
session_start();
foreach ($_SESSION as $nombre => $valor){
    if ($valor>0){
        
        echo 'Nombre del Producto: ' . $nombre . ' - ' . $valor;
    }
}

?>