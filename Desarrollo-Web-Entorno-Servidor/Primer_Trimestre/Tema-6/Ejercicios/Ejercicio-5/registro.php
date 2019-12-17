<?php
$contrasenyaMal = false;
$campoVacio = false;
if(isset($_POST['registrarse'])){
    if(strlen($_POST['nombre']) != 0 || strlen($_POST['apellido1']) != 0 || strlen($_POST['apellido2']) != 0 || strlen($_POST['usuario']) != 0 || strlen($_POST['contrasenya']) != 0 || strlen($_POST['rcontrasenya']) != 0){
        if($_POST['contrasenya'] == $_POST['rcontrasenya']){
            require_once 'conexionBD.php';
            echo $_POST['fnac'];
            try{
                $consulta = $conexion->prepare('INSERT INTO usuario (nombre, pApellido, sApellido, fNacimiento, usuario, cElectronico, contrasenya, rol) VALUES (?,?,?,?,?,?,?,?);');
                $consulta->bindParam(1, $_POST['nombre']);
                $consulta->bindParam(2, $_POST['apellido1']);
                $consulta->bindParam(3, $_POST['apellido2']);
                $consulta->bindParam(4, $_POST['fnac']);
                $consulta->bindParam(5, $_POST['usuario']);
                $consulta->bindParam(6, $_POST['mail']);
                $consulta->bindParam(7, $_POST['contrasenya']);
                $consulta->bindParam(8, $_POST['rol']);
                echo $consulta->execute();
            }catch(Exception $ex){
                echo $ex->getMessage();
            }
        }else{
            $contrasenyaMal = true;
        }
    }else{
        $campoVacio = true;
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
        <?php require_once 'cabeceraMenu.php' ?>
        <h3 class="titulo">Formulario de Registro</h3>
        <?php if($contrasenyaMal) : ?>
        <div> Las contraseñas deben ser iguales</div>
        <?php endif ?>
        <?php if($campoVacio) : ?>
        <div> No puede estar ningun campo vacio</div>
        <?php endif ?>
        <form action="registro.php" method="POST">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <fieldset class="scheduler-border">
                            <legend class="scheduler-border">Datos Personales</legend>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="nombre">Nombre</label>
                                <div class="cold-md-9 mt-1">
                                    <input type="text" name="nombre" id="nombre" value="pau">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="apellido1">Primer Apellido</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="text" name="apellido1" id="apellido1" value="llorens">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="apellido2">Segundo Apellido</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="text" name="apellido2" id="apellido2" value="martinez">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="fnac">Fecha de Nacimiento</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="date" name="fnac" id="fnac">
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-md-6">
                        <fieldset class="scheduler-border">
                            <legend class="scheduler-border">Datos de Registro</legend>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="usuario">Usuario</label>
                                <div class="cold-md-9 mt-1">
                                    <input type="text" name="usuario" id="usuario" value="pau21">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="mail">Correo Electronico</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="text" name="mail" id="mail" value="pau9990@gmail.com">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="contrasenya">Contraseña</label>
                                <div class="cold-md-9 mt-1">
                                    <input type="password" name="contrasenya" id="contrasenya" value="pau21">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="rcontrasenya">Repita la contraseña</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="password" name="rcontrasenya" id="rcontrasenya" value="pau21">
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <input type="hidden" name="rol" id="rol" name='rol' value="user">
            <div class="text-center mb-4">
                <input type="submit" class="btn btn-info btn-lg" value="Registrarse" id="registrarse" name="registrarse">
                <input type="reset" class="btn btn-info btn-lg" value="Borrar todo" id="borrar" name="borrar">
            </div>
        </form>
    </body>
</html>