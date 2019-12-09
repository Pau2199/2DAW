<?php
    echo 'Datos del Formulario <br>';

    if($_REQUEST['codigo'] != ""){
            echo 'Codigo: ' . $_REQUEST['codigo']. '<br>';
    }
    if($_REQUEST['nombre'] != ""){
            echo 'Nombre: ' . $_REQUEST['nombre']. '<br>';
    }
    if($_REQUEST['precio'] != ""){
            echo 'Precio: ' . $_REQUEST['precio']. '<br>';
    }
    if($_REQUEST['descripcion'] != ""){
            echo 'Descripcion: ' . $_REQUEST['descripcion']. '<br>';
    }
    if($_REQUEST['fabricante'] != ""){
            echo 'Fabricante: ' . $_REQUEST['fabricante']. '<br>';
    }
    if($_REQUEST['cantidad'] != ""){
            echo 'Cantidad: ' . $_REQUEST['cantidad']. '<br>';
    }
    if($_REQUEST['fechaAdquisicion'] != ""){
            echo 'Fecha de Adquisicion:: ' . $_REQUEST['fechaAdquisicion']. '<br>';
    }
?>