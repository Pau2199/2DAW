<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <ul>
            <?php foreach($_SESSION as $nombre => $valor) : ?>
            <?php if ($valor>0) : ?>
            <li><?= $nombre ?> - Cantidad: <?= $valor ?></li>
            <?php endif ?>
            <?php endforeach ?>
        </ul>
        <a href="javascript:history.back()"><button>Volver al Badulaque</button></a>
    </body>
</html>