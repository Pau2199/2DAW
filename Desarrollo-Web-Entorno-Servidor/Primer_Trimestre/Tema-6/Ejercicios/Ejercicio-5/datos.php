<?php
session_start();
require_once 'conexionBD.php';
$consulta = $conexion->query('SELECT * FROM usuario');
$consulta->execute();
$datosArray = [];
while($registro = $consulta->fetch(PDO::FETCH_NUM)){
    $datosArray [] = $registro;
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <link rel="stylesheet" href="estilo.css" type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </head>
    <body>
        <?php require_once 'cabeceraMenu.php'?>
        <?php if(isset($_SESSION['usuario']) && $_SESSION['rol'] == 'admin') : ?>
        <table class="table table-striped mt-3 text-center">
            <tr class="font-weight-bold">
                <td>Nombre</td>
                <td>Primer Apellido</td>
                <td>Segundo Apellido</td>
                <td>Fecha de Nacimiento</td>
                <td>Usuario</td>
                <td>Correo Electronico</td>
                <td>Contraseña</td>
                <td>Rol</td>
            </tr>
            <?php foreach($datosArray as $valor) : ?>
            <!--                <pre><?= print_r($valor) ?></pre>-->
            <tr>
                <?php foreach($valor as $datos) : ?>
                <td><?= $datos ?></td>
                <?php endforeach ?>
            </tr>
            <?php endforeach ?>
        </table>
        <?php endif ?>
    </body>
</html>