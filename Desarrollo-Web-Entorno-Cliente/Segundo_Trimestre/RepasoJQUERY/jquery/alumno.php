<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Datos alumnos</title>
        <script
                src="https://code.jquery.com/jquery-3.4.1.js"
                integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
                crossorigin="anonymous">
        </script>
        <script src="js/jquery.js"></script>
    </head>
    <body>

        <?php
        $conexion = new PDO('mysql:host=localhost;dbname=jquery;charset=UTF8', 'jquery', 'jquery');
        $sql = 'SELECT * FROM alumnos WHERE id='. $_GET['id'] .';';
        $alumno = $conexion->query($sql)->fetchObject();
        ?>

        <h1>Datos del alumno</h1>
        <div id='alumno<?=$alumno->id?>'>
            Nombre: <span id='nombre'><?=$alumno->nombre?></span> <span id="apellido1"><?=$alumno->apellido1?></span> <span id="apellido2"><?=$alumno->apellido2?></span>
            <br>
            DNI: <span id='dni'><?=$alumno->dni?></span>
            <br>
            Fecha de nacimiento: <span><?=$alumno->fechanacimiento?></span>
            <br>
            Email: <span id='email'><?=$alumno->email?></span>
            <br>
            Teléfono: <span id='telefono'><?=$alumno->telefono?></span>
        </div>

        <br><br>
        <a href="index.php">volver</a>
    </body>
</html>