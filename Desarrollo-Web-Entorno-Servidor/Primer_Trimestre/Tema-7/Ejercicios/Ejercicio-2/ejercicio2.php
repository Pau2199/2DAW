<?php
$arrayIdiomas = ['es' => 'lang/es.inc.php', 'en' => 'lang/en.inc.php', 'val' => 'lang/val.inc.php'];
setcookie('idioma', substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2), time()+3600);
$idioma = substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2); 
if(isset($_POST['guardarIdioma'])){
    setcookie('idioma', $_POST['idiomas'], time()+3600);
    $idioma = $_POST['idiomas'];
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
       <?php echo $idioma ?>
        <form action="ejercicio2.php" method="post">
            <select name="idiomas">
                <option selected="<?= $idioma == 'es' ? 'true' : 'false' ?>" value="es">Catellano</option>
                <option selected="<?= $idioma == 'en' ? 'true' : 'false' ?>" value="en">Ingles</option>
                <option selected="<?= $idioma == 'val' ? 'true' : 'false' ?>" value="val">Valenciano</option>
            </select>
            <input type="submit" value="Guardar Idioma" name="guardarIdioma">
        </form>
        <?php require_once $arrayIdiomas[$_COOKIE['idioma']] ?>
        
    </body>
</html>