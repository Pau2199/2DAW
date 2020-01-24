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
        $sql = 'SELECT * FROM alumnos';
        $result = $conexion->query($sql);
        ?>

        Alumnos:
        <ul>
            <?php
            while ($alumno = $result->fetchObject()) {
                echo '<li id="alumno'. $alumno->id .'">'. $alumno->nombre .' '. $alumno->apellido1 .' '. $alumno->apellido2 .'</li>';
            }
            ?>
        </ul>

        <br><br>
        <a href="notas.php">Ver notas</a>
    </body>
</html>