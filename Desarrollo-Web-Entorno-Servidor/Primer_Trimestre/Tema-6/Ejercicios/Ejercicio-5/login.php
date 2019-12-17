<?php
$error = false;
if(isset($_POST['entrar'])){
    if(strlen($_POST['contrasenya']) != 0  || strlen($_POST['nusuario']) != 0){
        require_once 'conexionBD.php';
        $consulta = $conexion->query('SELECT usuario , contrasenya FROM usuario WHERE usuario="'.$_POST['nsuario'].'"AND contrasenya"'.$_POST['contrasenya'].'"');
        $registro = $consulta->fetch();
        if($registro != null){
            header('Location: inicio.php');
        }else{
            $error = true;

        }
    }
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
        <pre>POST => <?php print_r($_POST) ?></pre>
        <pre>Error => <?php $error ?></pre>
        <?php require_once 'cabeceraMenu.php' ?>
        <h3 class="titulo">Loguearse</h3>
        <form action="login.php" method="POST">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="nsuario">Nombre de Usuario</label>
                            <div class="cold-md-9 mt-1">
                                <input type="text" name="nsuario" id="nsuario">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="contrasenya">Contraseña</label>
                            <div class="cold-md-9 mt-1">
                                <input type="text" name="contrasenya" id="contrasenya">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mb-4">
                <input type="submit" class="btn btn-info btn-lg" value="Loguear" id="entrar" name="entrar">
            </div>
        </form>
        <span>¿Aun no tienes cuenta? <a href="registro.php">Registrate ahora!</a></span>
    </body>
</html>