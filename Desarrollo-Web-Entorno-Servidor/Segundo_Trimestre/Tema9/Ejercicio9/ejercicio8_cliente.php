<?php
if(isset($_GET['action'])){

    /*    $página_inicio = file_get_contents('http://localhost.servidor/Ejercicio8/ejercicio8_servidor.php/?selecionado='.$_GET['action']);
    echo $página_inicio;*/

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, "http://localhost.servidor/Ejercicio8/ejercicio8_servidor.php/?selecionado=".$_GET['action']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $res = curl_exec($ch);
    curl_close($ch);
    $res = json_decode($res);
    //    echo '<pre>'; var_dump($res); echo '</pre>';
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="#">
            <label for="action">Elige que buscar</label>
            <select name="action" id="opcion">
                <option value="grupos">Grupos</option>
                <option value="canciones">Canciones</option>
                <option value="albumes">Albumes</option>
            </select>
            <input type="submit">
        </form>
        <?php if (isset($res)) : ?>
            <?php foreach ($res as $key => $objeto ) : ?>
                <?php foreach ($objeto as $key2 => $valor ) : ?>
                    <span><?= $key2 ?> :  <?= $valor?></span>
                <?php endforeach ?>
                <br>
            <?php endforeach ?>
        <?php endif ?>
    </body>
</html>