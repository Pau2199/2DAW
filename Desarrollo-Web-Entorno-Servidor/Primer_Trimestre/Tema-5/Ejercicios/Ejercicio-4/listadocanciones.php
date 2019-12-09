<?php
require_once 'conexionBD.php';

$listaAlbumes = $conexion->prepare('SELECT * FROM canciones C  WHERE C.album = ?');
$listaAlbumes->bindParam(1, $_REQUEST['codigo']);
$arrayAlbumes = [];
$listaAlbumes->execute();
while($resultado = $listaAlbumes->fetch()){
    $arrayAlbumes[] = $resultado;
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
        table , td ,tr{
            border: 1px solid black;
            border-collapse: collapse;
            padding: 10px;
            margin-bottom: 30px;
        }
        label{
            display: inline-block;
            width: 80px;
            padding: 5px;
            margin: 5px;
        }
        form{
            margin-top: 20px
        }
    </style>
    <body>
        <?php if($error): ?>
        <?=  $error ?>
        <?php else: ?>
        <table>
            <?php foreach ($arrayAlbumes as $valor): ?>
            <tr>
                <td><?=$valor['titulo'] ?></td>
                <td><?=$valor['duracion']?></td>
                <td><?=$valor['posicion']?></td>
                <td><a href="javascript:confirmacion('canciones' , '<?=$valor['codigo']?>')"><img src="papelera.png" alt="papelera"></a></td>
            </tr>
            <?php endforeach ?>
        </table>
        <a class="botones" href="javascript:history.back()">Volver atras</a>
        <a href="discografia.php">Volver al principio</a>
        <?php endif ?>
        <form action="anyadirCancion.php?titulo=<?=$valor['titulo']?>&duracion=<?=$valor['duracion']?>&posicion=<?=valor['posicion']?>&codigo=<?=$valor['codigo']?>" method="POST">
            <label for="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo"><br>
            <label for="duracion">Duración</label>
            <input type="text" name="duracion" id="duracion"><br>
            <label for="duracion">Posicion</label>
            <input type="text" name="posicion" id="posicion"><br>
            <input type="submit" name="enviar" id="enviar" value="Añadir Canción"><br>
            <input type="hidden" value="<?= $_REQUEST['codigo']?>" name='codigo' id='codigo'>
        </form>
    </body>
</html>