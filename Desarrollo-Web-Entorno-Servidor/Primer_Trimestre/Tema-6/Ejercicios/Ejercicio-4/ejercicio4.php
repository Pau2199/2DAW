<?php
require_once 'conexionBD.php';
$listaProductos = $conexion->query('SELECT * FROM productos');
$arrayProductos = [];
while($registro = $listaProductos->fetch()){
    $arrayProductos[$registro['nombre']] = $registro;
}

session_start();
if(isset($_POST['aqProducto'])){
    if($_POST['aqProducto'] == 'borrar'){
        //        $_SESSION[$_POST['objeto']] = 0;
        unset($_SESSION[$_POST['objeto']]);
    }else{
        if(isset($_SESSION[$_POST['objeto']])){
            if($_POST['aqProducto'] < 0){
                if($_SESSION[$_POST['objeto']] != 0){
                    $_SESSION[$_POST['objeto']]+=(int)$_POST['aqProducto'];     
                }
            }else{
                if($_SESSION[$_POST['objeto']] != $arrayProductos[$_POST['objeto']]['stock']){
                    $_SESSION[$_POST['objeto']]+=(int)$_POST['aqProducto']; 
                }
            }
        }else{
            if($_POST['aqProducto'] > 0){
                $_SESSION[$_POST['objeto']]= 1;
            }
        }

    }

}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <style>

        ul{
            display: flex;
        }
        li{
            float:left;
            list-style: none;
        }
    </style>
    <body>
        <?php if($error): ?>
        <?=  $error ?>
        <?php else: ?>
<!--
        <pre>session => <?php print_r($_SESSION) ?></pre>
        <pre>POST => <?php print_r($_POST) ?></pre>
        <pre>Array => <?php print_r($arrayProductos) ?></pre>
-->
        <ul>
            <?php foreach ($arrayProductos as $valor): ?>
            <li> Nombre del Producto: <?= $valor['nombre'] ?>
                <img src="<?= $valor['imagen']?>"><br>
                <span> Precio: <?= $valor['precio'].$valor['unidad'] ?></span>
                <span> Stock Disponible: <?= $valor['stock'] ?></span><br>
                <?php if(isset($_SESSION[$valor['nombre']]) && $_SESSION[$valor['nombre']]>=1): ?>
                <span>Articulos selecionados: <?= $_SESSION[$valor['nombre']]?></span>
                <?php endif ?>
                <form action="ejercicio4.php" method="POST">
                    <input type="hidden" name="objeto" value="<?=$valor['nombre']?>">
                    <button type="submit" name="aqProducto" value="+1" <?= (isset($_SESSION[$valor['nombre']]) && $_SESSION[$valor['nombre']]== $valor['stock']) ? 'disabled' : '' ?>><img src="img/productos/mas.png" alt="anyadirProducto"></button>
                    <button type="submit" name="aqProducto" value="-1" <?= (!isset($_SESSION[$valor['nombre']]) ||  $_SESSION[$valor['nombre']]<1) ? 'disabled' : '' ?>><img src="img/productos/menos.png" alt="quitarProducto"></button>
                    <button type="submit" name="aqProducto" value="borrar"><img src="img/productos/papelera.png" alt="borrarTodosProductos"></button>
                </form>
            </li>
            <?php endforeach ?>
        </ul>
        <?php endif ?>
        <button><a href="carrito.php">Ver carrito de la compra!</a></button>
    </body>
</html>