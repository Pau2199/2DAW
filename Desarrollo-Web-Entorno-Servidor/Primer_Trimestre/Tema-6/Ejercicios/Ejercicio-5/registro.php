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
        <?php require_once 'cabeceraMenu.php' ?>
        <h3 class="titulo">Formulario de Registro</h3>
        <form action="registro.php">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <fieldset class="scheduler-border">
                            <legend class="scheduler-border">Datos Personales</legend>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="nombre">Nombre</label>
                                <div class="cold-md-9 mt-1">
                                    <input type="text" name="nombre" id="nombre">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="apellido1">Primer Apellido</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="text" name="apellido1" id="apellido1">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="apellido2">Segundo Apellido</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="text" name="apellido2" id="apellido2">
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
                                    <input type="text" name="usuario" id="usuario">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="mail">Correo Electronico</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="text" name="mail" id="mail">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="contrasenya">Contraseña</label>
                                <div class="cold-md-9 mt-1">
                                    <input type="password" name="contrasenya" id="contrasenya">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="rcontrasenya">Repita la contraseña</label>
                                <div class="cold-md-9 mt-3">
                                    <input type="password" name="rcontrasenya" id="rcontrasenya">
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div class="text-center mb-4">
                <input type="submit" class="btn btn-info btn-lg" value="Registrarse" id="registrarse" name="registrarse">
                <input type="reset" class="btn btn-info btn-lg" value="Borrar todo" id="borrar" name="borrar">
            </div>
        </form>
    </body>
</html>