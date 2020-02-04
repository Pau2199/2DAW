<?php
if(isset($_GET['busqueda'])){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, "https://rickandmortyapi.com/api/character/?name=".$_GET['busqueda']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $res = curl_exec($ch);
    curl_close($ch);
    $res = json_decode($res);
}


?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <a href="ejercicio5.php?busqueda=rick"><button>Rick</button></a>
        <a href="ejercicio5.php?busqueda=morty"><button>Morty</button></a><br>
        <form action="#">
            <input type="text" name="busqueda">
            <input type="submit" name="envioDatos" value="Realizar Busqueda">
        </form>
        <?php if (isset($res)) : ?>
        <?php foreach($res->results as $valor) : ?>
        <p><?= $valor->name ?></p>
        <img src="<?= $valor->image?>" alt="imagen" width="100" height="100">
        <?php endforeach ?>
        <?php endif ?>
    </body>
</html>