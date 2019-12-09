<?php
session_start();
if (isset($_POST['modo'])){
    $_SESSION['estiloCSS'] = $_POST['modo'];
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <link href="<?=$_SESSION['estiloCSS'] ?>" type="text/css"  rel="stylesheet">
    </head>
    <body>
        <form action="ejercicio3.php" method="post">
            <button type="submit" id="nocturno" name="modo" value="nocturno.css">Modo Nocturno</button>
            <button type="submit" id="diurno" name="modo" value="diurno.css">Modo Diurno</button>
        </form>
    </body>
</html>