<?php
if (isset($_POST['modo'])){
    setcookie('estiloCSS', $_POST['modo'] ,time()+60);
    $_COOKIE['estiloCSS'] = $_POST['modo'];
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <link href="<?=$_COOKIE['estiloCSS'] ?>" type="text/css"  rel="stylesheet">
    </head>
    <body>
        <form action="ejercicio2.php" method="post">
            <button type="submit" id="nocturno" name="modo" value="nocturno.css">Modo Nocturno</button>
            <button type="submit" id="diurno" name="modo" value="diurno.css">Modo Diurno</button>
        </form>
    </body>
</html>