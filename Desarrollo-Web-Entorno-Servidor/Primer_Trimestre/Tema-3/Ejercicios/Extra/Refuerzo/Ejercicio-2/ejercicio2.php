<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="formulario.php" method="POST" enctype="multipart/form-data">
            Usuario<input type='text' name='masculino' id='masculino'>
            Contraseña <input type="password" name="usuario"><br>
            Numero <input type='number' name='numero' id='numero'>
            Color <input type='color' name='color' id='color'>
            Rango <input type='range' name=rango id='rango'>
            Fecha de nacimiento <input  type="date" name="fechaNacimiento"><br>
            Seleciona un Lenguahe <br>
            HTML<input type='checkbox' name='HTML' id='html'><br>
            Javascript <input type='checkbox' name='javascript' id='javascript'><br>
            PHP <input type="checkbox" name='php' id='php'><br>

            Seleciona el sexo <br>
            Masculino <input type='radio' name='masculino' id='masculino'>
            Femenino <input type="radio" name='femenino' id='femenino'>


        </form>
    </body>
</html>