<?php

if (isset($_GET['aceptarCookie'])){
    setcookie('cookieAceptada' , 'Ha aceptado las cookies', time()+60);
}
?>




<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <style>
        div{
            border: 1px solid black;
            padding: 40px;
            width: 30%;
            text-align: center;
        }
    </style>
    <body>
        <?php if(!isset($_COOKIE['cookieAceptada']) && !isset($_GET['aceptarCookie']) ): ?>
        <div>
            <form action="ejercicio1.php" method="get">
                <span> ESTE SITIO UTILIZA COOKIES</span><br>
                <input type="submit" id="aceptarCookie" name="aceptarCookie" value="Acepto las Cookies">
            </form>
        </div>
        <?php else: ?>
        <span>COOKIE ACEPTADA</span>
        <?php endif ?>
    </body>
</html>