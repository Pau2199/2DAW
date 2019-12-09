<?php
require_once 'conexionBD.php';

$listaAlbumes = $conexion->prepare('SELECT A.titulo, A.codigo FROM albumes A  WHERE A.grupo = ?');
$listaAlbumes->bindParam(1, $_REQUEST['codigo']);   
$arrayAlbumes = [];
$listaAlbumes->execute();
while($resultado = $listaAlbumes->fetch()){
    $arrayAlbumes[] = $resultado;
}

function multiexplode ($delimiters,$string) {

    $ready = str_replace($delimiters, $delimiters[0], $string);
    $launch = explode($delimiters[0], $ready);
    return  $launch;
}

$obtenerTipos = $conexion->query("SHOW COLUMNS FROM albumes LIKE 'formato'");
$registro = $obtenerTipos->fetch();
$registro = $registro['Type'];
$exploded = multiexplode(array("enum","(",")","'",","),$registro);

?>




<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script src="confirmacion.js"></script>
    </head>
    <style>
        .oculta{
            visibility: hidden;
        }
        img{
            width: 30px;
            height: 30px;
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
        <ul>
            <?php foreach ($arrayAlbumes as $valor): ?>
            <li><a href="listadocanciones.php?codigo=<?= $valor['codigo'] ?>"><?=$valor['titulo'] ?></a><a href="javascript:confirmacion('albumes' , '<?=$valor['codigo']?>')"><img src="papelera.png" alt="papelera"></a></li>
            <?php endforeach ?>
        </ul>
        <br><a href="javascript:history.back()">Volver atras</a>
        <?php endif ?>


        <form action="anyadirAlbum.php" method="POST">
            <label for="nombreAlbum">Nombre del Album</label>
            <input type="text" name="nombreAlbum" id="nombreAlbum"><br>
            <label for="anyo">Año del Album</label>
            <input type="text" name="anyo" id="anyo"><br>
            <label for="fechaCompra">Fecha de Compra</label>
            <input type="date" name="fechaCompra" id="fechaCompra">
            <label for="formato">Formato</label>
            <select name="formato">
                <?php foreach ($exploded as $valor) : ?>
                <?php if ($valor != "") : ?>
                <option value="<?= $valor ?>"> <?= $valor ?></option>
                <?php endif ?>   
                <?php endforeach ?>
            </select><br>
            <label for="precio">Precio</label>
            <input type="text" name="precio" id="precio"><br>
            <input type="submit" name="enviar" id="enviar">
            <input type="text" value="<?= $_REQUEST['codigo']?>" class='oculta' name='codigo' id='codigo'>
        </form>
    </body>
</html>