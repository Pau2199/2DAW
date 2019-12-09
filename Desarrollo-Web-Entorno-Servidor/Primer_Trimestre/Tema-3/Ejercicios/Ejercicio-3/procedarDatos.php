<?php
    echo 'Datos del Formulario <br>';

    if(preg_match('/^([a-zA-Z0-9]){,5}/',$_REQUEST['codigo']) == 1){
            echo 'Codigo: ' . $_REQUEST['codigo']. '<br>';
    }
    if(preg_match('/^([a-zA-Z]){3,}/', $_REQUEST['nombre']) == 1){
            echo 'Nombre: ' . $_REQUEST['nombre']. '<br>';
    }
    if(preg_match('/^[0-9]{1,}$/', $_REQUEST['precio']) == 1){
            echo 'Precio: ' . $_REQUEST['precio']. '<br>';
    }
    if(preg_match('/^[a-zA-z]{1,250}/' , $_REQUEST['descripcion']) == 1) {
            echo 'Descripcion: ' . $_REQUEST['descripcion']. '<br>';
    }
    if(preg_match('/^[a-zA-z]/' , $_REQUEST['fabricante']) == 1){
            echo 'Fabricante: ' . $_REQUEST['fabricante']. '<br>';
    }
    if(preg_match('/^[0-9]/', $_REQUEST['cantidad']) == 1){
            echo 'Cantidad: ' . $_REQUEST['cantidad']. '<br>';
    }
    if(preg_match('/^(\d{4})(\/|-)(0[1-9]|1[0-2])\2([0-2][0-9]|3[0-1])$/',$_REQUEST['fechaAdquisicion'] ) ==  1){
            echo 'Fecha de Adquisicion:: ' . $_REQUEST['fechaAdquisicion']. '<br>';
    }
?>