<?php
session_start();
$arrayIdiomas = ['es' => 'lang/es.inc.php', 'en' => 'lang/en.inc.php', 'val' => 'lang/val.inc.php'];
if(isset($_POST['guardarIdioma'])){
    $_SESSION['idioma'] = $_POST['idiomas'];
    header('Location: ejercicio2.php');
}else{
    $_SESSION['idioma'] = substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2);
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="ejercicio2.php" method="post">
            <select name="idiomas">
                <option <?= $_SESSION['idioma'] == 'es' ? 'selected' : '' ?> value="es">Catellano</option>
                <option <?= $_SESSION['idioma'] == 'en' ? 'selected' : '' ?> value="en">Ingles</option>
                <option <?= $_SESSION['idioma'] == 'val' ? 'selected' : '' ?> value="val">Valenciano</option>
            </select>
            <input type="submit" value="Guardar Idioma" name="guardarIdioma">
        </form>
        <?php require_once $arrayIdiomas[$idioma] ?>
    </body>
</html>