<?php
require_once 'conexionBD.php';

/*echo '<pre>'.print_r($_POST, true).'</pre>';*/

$listaGrupos = $conexion->query('SELECT * FROM grupos');
$arrayGrupos = [];
while($registro = $listaGrupos->fetch()){
    $arrayGrupos[] = $registro;
}        
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script src="confirmacion.js"></script>
    </head>
    <style>
        img{
            width: 50px;
            height: 50px;
        }
    </style>
    <body>
        <?php if($error): ?>
        <?=  $error ?>
        <?php else: ?>
        <ul>
            <?php foreach ($arrayGrupos as $valor): ?>
            <li><a href="listadoalbum.php?codigo=<?= $valor['codigo'] ?>"><?=$valor['nombre'] ?></a><a href="javascript:confirmacion('grupos' , '<?=$valor['codigo']?>')"><img src="papelera.png" alt="papelera"></a></li>
            <?php endforeach ?>
        </ul>
        <?php endif ?>

        <form action="anyadirDiscografia.php" method="POST">
            <label for="nombre">Nombre del Grupo</label>
            <input type="text" name="nombre" id="nombre">
            <input type="submit" name="enviar" id="enviar">
        </form>
        
    </body>
</html>